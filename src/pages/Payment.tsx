import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Loader2, CreditCard, Lock } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useAuth } from '../context/AuthContext';
import { api } from '../api';
import { logEvent } from '../services/analytics';

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayFailureResponse {
  error: {
    code: string;
    description: string;
    source?: string;
    step?: string;
    reason?: string;
    metadata: {
      order_id: string;
      payment_id?: string;
    };
  };
}

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: (r: RazorpayFailureResponse) => void) => void
    };
  }
}

interface CreateOrderResponse {
  razorpay_order_id: string;
  amount: number;
  currency: string;
  key: string;
}

interface OrderResponse {
  orderId: string;
  userId: string;
  serviceIds: string[];
  totalAmount: number;
  status: string;
  paymentId: string;
  createdAt: string;
}

const verifyPaymentWithRetry = async (payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  items: { id: string; quantity: number }[];
}): Promise<OrderResponse> => {
  let retries = 5;
  let delay = 1000;
  while (retries > 0) {
    try {
      return await api.post<OrderResponse>('/payment/verify', payload);
    } catch (e: unknown) {
      console.warn(`Payment verification attempt failed (${retries} retries left):`, e);
      retries--;
      if (retries === 0) {
        throw new Error('PAYMENT_VERIFY_FAILED');
      }
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }
  throw new Error('PAYMENT_VERIFY_FAILED');
};

export function Payment() {
  const [status, setStatus] = useState<'processing' | 'success' | 'failure'>('processing');
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();
  const { showToast } = useToast();
  const { user } = useAuth();

  const isSuccess = useRef(false);
  const capturedPaymentIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (cart.length === 0 && !isSuccess.current) {
      navigate('/', { replace: true });
    }
  }, [cart, navigate]);

  // Refs to capture dependencies and prevent re-firing of useEffect
  const cartRef = useRef(cart);
  const totalRef = useRef(total);
  const clearCartRef = useRef(clearCart);
  const showToastRef = useRef(showToast);
  const userRef = useRef(user);
  const hasInitiated = useRef(false);
  const isActionInProgress = useRef(false);

  useEffect(() => {
    cartRef.current = cart;
    totalRef.current = total;
    clearCartRef.current = clearCart;
    showToastRef.current = showToast;
    userRef.current = user;
  }, [cart, total, clearCart, showToast, user]);

  useEffect(() => {
    if (hasInitiated.current) return;
    hasInitiated.current = true;

    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const processPayment = async () => {
      if (isActionInProgress.current) return;
      isActionInProgress.current = true;

      if (Capacitor.isNativePlatform()) {
        console.warn('[Payment] Running Razorpay inside a native WebView. If the payment modal does not render, switch to the Razorpay Capacitor plugin: https://github.com/razorpay/razorpay-capacitor');
      }

      if (!userRef.current) {
        setStatus('failure');
        showToastRef.current('Authentication required to complete payment.', 'error');
        isActionInProgress.current = false;
        return;
      }

      let rpOrder: CreateOrderResponse;
      try {
        rpOrder = await api.post<CreateOrderResponse>('/payment/create-order', {
          items: cartRef.current.map(item => ({ id: item.id, quantity: item.quantity })),
        });
      } catch (error) {
        console.error('Create order error:', error);
        setStatus('failure');
        showToastRef.current('Could not initiate payment. Please try again.', 'error');
        isActionInProgress.current = false;
        return;
      }

      const res = await loadRazorpay();

      if (!res || !window.Razorpay) {
        setStatus('failure');
        showToastRef.current('Payment gateway failed to load. Check your internet connection.', 'error');
        isActionInProgress.current = false;
        return;
      }

      const options = {
        key: rpOrder.key,
        order_id: rpOrder.razorpay_order_id,
        amount: rpOrder.amount,
        currency: rpOrder.currency,
        name: 'File Seva',
        description: 'Business Compliance Services',
        retry: {
          enabled: true,
          max_count: 3
        },
        handler: async function (response: RazorpaySuccessResponse) {
          if (isSuccess.current) return; // Prevent duplicate processing

          if (!response.razorpay_signature || !response.razorpay_order_id) {
            setStatus('failure');
            showToastRef.current('Payment signature missing. Contact support with your payment ID.', 'error');
            isActionInProgress.current = false;
            return;
          }

          try {
            setStatus('processing');
            const paymentId = response.razorpay_payment_id;
            capturedPaymentIdRef.current = paymentId;

            logEvent('purchase', {
              transaction_id: paymentId,
              value: totalRef.current,
              currency: 'INR',
              items: cartRef.current.map(item => ({ item_id: item.id, item_name: item.title, price: item.price }))
            });

            // Ensure we don't create duplicate orders if the handler fires twice
            isSuccess.current = true;

            // The backend verifies the HMAC-SHA256 signature server-side against
            // RAZORPAY_KEY_SECRET before writing the order — client-side data alone
            // can never create or falsify an order.
            const order = await verifyPaymentWithRetry({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: paymentId,
              razorpay_signature: response.razorpay_signature,
              items: cartRef.current.map(item => ({ id: item.id, quantity: item.quantity })),
            });

            setStatus('success');
            showToastRef.current('Payment successful!', 'success');
            clearCartRef.current();

            // Immediate navigation to success page to avoid race conditions
            navigate('/success', {
              state: { orderId: order.orderId, paymentId: order.paymentId, orderData: order },
              replace: true
            });
          } catch (error: unknown) {
            console.error('Order processing error:', error);
            setStatus('failure');
            if (error instanceof Error && error.message === 'PAYMENT_VERIFY_FAILED') {
              showToastRef.current(`Payment received (ID: ${capturedPaymentIdRef.current}) but order verification failed. Screenshot this and contact support.`, 'error');
            } else {
              showToastRef.current('Payment verified but order processing failed. Our team will contact you.', 'error');
            }
          } finally {
            isActionInProgress.current = false;
          }
        },
        modal: {
          ondismiss: function() {
            if (!isSuccess.current) {
              setStatus('failure');
              showToastRef.current('Payment cancelled by user.', 'info');
              isActionInProgress.current = false;
            }
          }
        }
      };

      try {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response: RazorpayFailureResponse) {
          console.error('Payment failed:', response.error);
          logEvent('payment_failure', {
            error_code: response.error.code,
            error_description: response.error.description,
            order_id: response.error.metadata.order_id
          });
          setStatus('failure');
          showToastRef.current(response.error.description || 'Payment failed.', 'error');
          isActionInProgress.current = false;
        });
        rzp.open();
      } catch (e) {
        console.error('Razorpay open error:', e);
        setStatus('failure');
        showToastRef.current('Failed to initiate payment.', 'error');
        isActionInProgress.current = false;
      }
    };

    // No cleanup here on purpose: `hasInitiated` already guarantees processPayment()
    // fires exactly once. Returning a `clearTimeout` cleanup looks safer but isn't —
    // React 18 StrictMode's dev-only mount->cleanup->remount simulation would cancel
    // this timer on the first (simulated) cleanup and never reschedule it, since
    // `hasInitiated` is already true by the second effect run. That left this screen
    // stuck on "Processing Payment" forever in dev, discovered during verification.
    setTimeout(() => {
      processPayment();
    }, 1000);
  }, [navigate]);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-full max-w-md space-y-8">
        <div className="relative">
          <div className="w-32 h-32 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
            {status === 'processing' ? (
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
            ) : status === 'success' ? (
              <ShieldCheck className="w-12 h-12 text-green-400" />
            ) : (
              <CreditCard className="w-12 h-12 text-red-400" />
            )}
          </div>
          {status === 'processing' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-4 left-0 right-0"
            >
              <div className="flex justify-center gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            {status === 'processing' ? 'Processing Payment' :
             status === 'success' ? 'Payment Verified' : 'Payment Failed'}
          </h2>
          <p className="text-white/40 text-sm">
            {status === 'processing' ? 'Please do not close the app or press back button.' :
             status === 'success' ? 'Redirecting to order details...' : 'Something went wrong with your transaction.'}
          </p>
          {status === 'failure' && capturedPaymentIdRef.current && (
            <p className="font-mono text-xs text-yellow-400 mt-2">Payment ID: {capturedPaymentIdRef.current}</p>
          )}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-white/40">Amount to Pay</span>
            <span className="font-black text-xl text-blue-400">₹{total.toFixed(2)}</span>
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex items-center justify-center gap-2 text-[10px] text-white/20 uppercase font-bold tracking-widest">
            <Lock className="w-3 h-3" /> Secure Gateway
          </div>
        </div>

        {status === 'failure' && (
          <div className="space-y-4 pt-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full h-14 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition-colors"
            >
              Retry Payment
            </button>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
