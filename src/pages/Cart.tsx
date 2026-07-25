import { useRef } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, subtotal, gst, total, totalItems } = useCart();
  const navigate = useNavigate();
  const isActionInProgress = useRef(false);

  const handleCheckout = () => {
    if (isActionInProgress.current) return;
    isActionInProgress.current = true;
    navigate('/checkout');
    setTimeout(() => { isActionInProgress.current = false; }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center">
          <ShoppingBag className="w-10 h-10 text-white/10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-white/40 text-sm">Looks like you haven't added any services yet.</p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition-colors"
        >
          Explore Services
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] p-6 pb-[calc(9rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')} 
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">My Cart ({totalItems})</h1>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {cart.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{item.category}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl font-black text-blue-400">₹{item.price}</div>
                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-1 border border-white/10">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Summary Card */}
      <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-0 right-0 p-6 bg-gradient-to-t from-black via-black/95 to-transparent z-40">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Subtotal</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">GST (18%)</span>
              <span className="font-medium">₹{gst.toFixed(2)}</span>
            </div>
            <div className="h-px bg-white/10 my-2" />
            <div className="flex justify-between items-center">
              <span className="font-bold">Total Amount</span>
              <span className="text-2xl font-black text-blue-400">₹{total.toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            onClick={handleCheckout}
            className="w-full h-16 bg-blue-600 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 hover:bg-blue-500 active:scale-95 transition-all"
          >
            Checkout <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
