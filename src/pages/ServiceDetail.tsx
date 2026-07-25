import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../data/services';
import { 
  ArrowLeft, ShoppingCart, Zap, CheckCircle2, 
  FileText, Info, ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { clsx } from 'clsx';
import { logEvent } from '../services/analytics';
import { AdBanner } from '../components/AdBanner';

export function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'details' | 'documents'>('details');
  const isActionInProgress = useRef(false);

  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    if (service) {
      logEvent('service_viewed', { service_id: service.id, service_title: service.title });
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <button onClick={() => navigate('/')} className="text-blue-400 font-bold">Go Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (isActionInProgress.current) return;
    isActionInProgress.current = true;
    addToCart(service);
    showToast(`${service.title} added to cart`, 'success');
    logEvent('add_to_cart', { service_id: service.id, price: service.price });
    setTimeout(() => { isActionInProgress.current = false; }, 500);
  };

  const handleBuyNow = () => {
    if (isActionInProgress.current) return;
    isActionInProgress.current = true;
    addToCart(service);
    logEvent('begin_checkout', { service_id: service.id, price: service.price });
    navigate('/checkout');
    setTimeout(() => { isActionInProgress.current = false; }, 500);
  };

  return (
    <div className="min-h-screen bg-[#050505] pb-[calc(9rem+env(safe-area-inset-bottom))]">
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-800 p-6 flex flex-col justify-between pt-6">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 bg-black/20 backdrop-blur-md rounded-full">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button onClick={() => navigate('/cart')} className="p-2 bg-black/20 backdrop-blur-md rounded-full">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex gap-2">
            {service.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded-md backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-black leading-tight">{service.title}</h1>
          <p className="text-white/60 text-sm font-medium uppercase tracking-wider">{service.category}</p>
        </div>
      </div>

      {/* Price Strip */}
      <div className="bg-white/5 border-y border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-white/40 text-xs uppercase font-bold tracking-widest">Service Fee</span>
          <div className="text-2xl font-black text-blue-400">₹{service.price}</div>
        </div>
        <div className="text-right">
          <span className="text-white/40 text-xs uppercase font-bold tracking-widest">Delivery</span>
          <div className="text-sm font-bold text-green-400">Fast Track</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mt-8">
        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveTab('details')}
            className={clsx(
              "flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2",
              activeTab === 'details' ? "bg-white text-black shadow-lg" : "text-white/40"
            )}
          >
            <Info className="w-4 h-4" /> Details
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={clsx(
              "flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2",
              activeTab === 'documents' ? "bg-white text-black shadow-lg" : "text-white/40"
            )}
          >
            <FileText className="w-4 h-4" /> Documents
          </button>
        </div>

        <div className="mt-8 space-y-8">
          {activeTab === 'details' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <section className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" /> Description
                </h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </section>

              <AdBanner />

              <section className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /> Key Benefits
                </h3>
                <div className="grid gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-sm font-medium text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-blue-600/10 p-6 rounded-3xl border border-blue-500/20">
                <h3 className="text-lg font-bold mb-2">Required Checklist</h3>
                <p className="text-white/60 text-xs">Please ensure you have clear digital copies of these documents.</p>
              </div>
              <div className="space-y-3">
                {service.documentsRequired.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-sm font-medium">{doc}</span>
                    <div className="w-5 h-5 border-2 border-white/10 rounded-md" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-0 right-0 p-6 bg-gradient-to-t from-black via-black/95 to-transparent z-40">
        <div className="flex gap-4">
          <button 
            onClick={handleAddToCart}
            className="flex-1 h-16 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" /> Add to Cart
          </button>
          <button 
            onClick={handleBuyNow}
            className="flex-[1.5] h-16 bg-blue-600 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-colors"
          >
            <Zap className="w-5 h-5 fill-current" /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
