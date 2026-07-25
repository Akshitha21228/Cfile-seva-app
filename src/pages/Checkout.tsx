import { useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, ShieldCheck, CreditCard, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logEvent } from '../services/analytics';

export function Checkout() {
  const { cart, total, subtotal, gst } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const isActionInProgress = useRef(false);

  const hasLoggedBeginCheckout = useRef(false);

  useEffect(() => {
    if (cart.length > 0 && !hasLoggedBeginCheckout.current) {
      logEvent('begin_checkout', { 
        value: total, 
        currency: 'INR',
        items: cart.map(item => ({ item_id: item.id, item_name: item.title, price: item.price }))
      });
      hasLoggedBeginCheckout.current = true;
    }
  }, [cart, total]);

  const handleProceed = () => {
    if (isActionInProgress.current) return;
    isActionInProgress.current = true;
    
    if (!user) {
      navigate('/profile');
      isActionInProgress.current = false;
      return;
    }

    navigate('/payment');
    // We don't reset isActionInProgress here because we're navigating away
    // Reset after a short delay to prevent locking if user navigates back
    setTimeout(() => {
      isActionInProgress.current = false;
    }, 100);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-blue-600 rounded-2xl font-bold"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] p-6 pb-[calc(9rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>

      <div className="space-y-6">
        {/* User Info Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">Contact Information</h3>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Email Address</p>
                <p className="font-medium">{user?.email || 'Not provided'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Phone Number</p>
                <p className="font-medium">{user?.phoneNumber || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">Order Summary</h3>
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <div className="p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1 pr-4">
                    <h4 className="font-bold text-sm line-clamp-1">{item.title}</h4>
                    <p className="text-[10px] text-white/40">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-sm">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 p-6 space-y-2 border-t border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">GST (18%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold">Total Payable</span>
                <span className="text-xl font-black text-blue-400">₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">Payment Method</h3>
          <button className="w-full flex items-center justify-between p-6 bg-blue-600/10 border border-blue-500/30 rounded-3xl group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="font-bold">Online Payment</p>
                <p className="text-xs text-white/40">UPI, Cards, Netbanking</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Selected</span>
          </button>
        </section>

        <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
          <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
          <p className="text-[10px] text-green-400/80 font-medium">Your payment is secured with 256-bit encryption. We never store your card details.</p>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-0 right-0 p-6 bg-gradient-to-t from-black via-black/95 to-transparent z-40">
        <button 
          onClick={handleProceed}
          className="w-full h-16 bg-blue-600 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 hover:bg-blue-500 active:scale-95 transition-all"
        >
          Proceed to Pay ₹{total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
