import { useState, useEffect } from 'react';
import { Package, Clock, Search, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../api';
import { SERVICES } from '../data/services';

interface Order {
  orderId: string;
  userId: string;
  serviceIds: string[];
  totalAmount: number;
  status: string;
  createdAt: string;
}

export function MyServices() {
  const [activeTab, setActiveTab] = useState<'paid' | 'callback'>('paid');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    api.get<Order[]>('/orders').then((ordersData) => {
      if (cancelled) return;
      setOrders(ordersData);
      setLoading(false);
    }).catch((error) => {
      console.error('Orders fetch error:', error);
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="w-24 h-24 bg-white/5 rounded-[32px] flex items-center justify-center shadow-2xl border border-white/10">
          <User className="w-12 h-12 text-white/20" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black">Login Required</h2>
          <p className="text-white/40 max-w-[240px] mx-auto">Please sign in to view your purchased services and track progress.</p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="w-full max-w-[200px] h-14 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
        >
          Go to Home <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const getServiceTitle = (serviceIds: string[]) => {
    if (serviceIds.length === 0) return 'Unknown Service';
    const firstService = SERVICES.find(s => s.id === serviceIds[0]);
    if (serviceIds.length === 1) return firstService?.title || 'Unknown Service';
    return `${firstService?.title || 'Unknown'} + ${serviceIds.length - 1} more`;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] p-6 pb-[calc(6rem+env(safe-area-inset-bottom))] space-y-8">
      <h1 className="text-3xl font-black">My Services</h1>

      {/* Tabs */}
      <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
        <button
          onClick={() => setActiveTab('paid')}
          className={clsx(
            "flex-1 py-3 rounded-xl text-sm font-bold transition-all",
            activeTab === 'paid' ? "bg-white text-black shadow-lg" : "text-white/40"
          )}
        >
          Paid Services
        </button>
        <button
          onClick={() => setActiveTab('callback')}
          className={clsx(
            "flex-1 py-3 rounded-xl text-sm font-bold transition-all",
            activeTab === 'callback' ? "bg-white text-black shadow-lg" : "text-white/40"
          )}
        >
          Callback Raised
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'paid' ? (
          <AnimatePresence mode="popLayout">
            {loading ? (
              <div className="py-20 text-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
              </div>
            ) : orders.length > 0 ? (
              orders.map((order) => (
                <motion.div
                  layout
                  key={order.orderId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg">{getServiceTitle(order.serviceIds)}</h3>
                      <p className="text-xs text-white/40 font-mono">{order.orderId}</p>
                    </div>
                    <div className={clsx(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                      order.status === 'completed' && "bg-green-500/20 text-green-400",
                      order.status === 'processing' && "bg-blue-500/20 text-blue-400",
                      order.status === 'pending' && "bg-orange-500/20 text-orange-400",
                      order.status === 'cancelled' && "bg-red-500/20 text-red-400"
                    )}>
                      {order.status}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <Clock className="w-3 h-3" /> {formatDate(order.createdAt)}
                    </div>
                    <div className="font-bold text-blue-400">₹{order.totalAmount.toFixed(2)}</div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-10 h-10 text-white/10" />
                </div>
                <p className="text-white/40 font-medium">No services found</p>
              </div>
            )}
          </AnimatePresence>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-10 h-10 text-white/10" />
            </div>
            <p className="text-white/40 font-medium">No callbacks raised yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
