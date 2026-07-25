import { useEffect, useState } from 'react';
import { CheckCircle2, Package, ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { api } from '../api';
import { logEvent } from '../services/analytics';

export function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { showToast } = useToast();
  const [order, setOrder] = useState<{ orderId: string; paymentId: string } | null>(location.state || null);
  const [loading, setLoading] = useState(!location.state);

  useEffect(() => {
    if (order?.orderId) {
      logEvent('purchase_success', { order_id: order.orderId, payment_id: order.paymentId });
    }
  }, [order?.orderId, order?.paymentId]);
  
  useEffect(() => {
    if (order) return;
    if (!user) {
      const timer = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timer);
    }

    let cancelled = false;

    // Try to fetch the latest order for the user
    api.get<{ orderId: string; paymentId: string } | null>('/orders/latest').then((latestOrder) => {
      if (cancelled) return;
      if (latestOrder) {
        setOrder({
          orderId: latestOrder.orderId,
          paymentId: latestOrder.paymentId
        });
      }
      setLoading(false);
    }).catch((err) => {
      console.error('Error fetching latest order:', err);
      if (!cancelled) {
        showToast('Could not load order. Redirecting to My Services...', 'error');
        setTimeout(() => navigate('/my-services'), 2000);
      }
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, order, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin mb-4" />
        <p className="text-white/40">Verifying your order...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
          <Package className="w-10 h-10 text-red-400" />
        </div>
        <h1 className="text-2xl font-bold">No Order Found</h1>
        <p className="text-white/40 max-w-xs mx-auto">We couldn't find your recent order details. If you've made a payment, please check your email or contact support.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-8 h-14 bg-blue-600 rounded-2xl font-bold"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const { orderId, paymentId } = order;

  const handleWhatsApp = () => {
    const message = `Hello Company File Seva,
I have placed an order.

Order ID: ${orderId}
Payment ID: ${paymentId}
Name: ${user?.displayName || 'Guest'}
Email: ${user?.email || 'N/A'}

Please proceed.`;
    
    window.open(`https://wa.me/${import.meta.env.VITE_SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] p-6 space-y-8 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, stiffness: 200 }}
          className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-12 h-12 text-green-400" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black">Thank You!</h1>
          <p className="text-white/40">Your order has been placed successfully.</p>
        </div>

        <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4 text-left">
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40 font-bold uppercase tracking-widest">Order ID</span>
            <span className="font-mono text-sm font-bold text-blue-400">{orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40 font-bold uppercase tracking-widest">Payment ID</span>
            <span className="font-mono text-sm font-bold text-purple-400">{paymentId}</span>
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40 font-bold uppercase tracking-widest">Status</span>
            <span className="text-xs font-black bg-green-500/20 text-green-400 px-2 py-1 rounded-md uppercase">Confirmed</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 pb-8">
        <button 
          onClick={handleWhatsApp}
          className="w-full h-16 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-green-500/20"
        >
          <MessageCircle className="w-6 h-6" /> Send via WhatsApp
        </button>
        
        <div className="flex gap-4">
          <button 
            onClick={() => navigate('/my-services')}
            className="flex-1 h-14 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2"
          >
            <Package className="w-5 h-5" /> View Orders
          </button>
          <button 
            onClick={() => navigate('/')}
            className="flex-1 h-14 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2"
          >
            Home <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
