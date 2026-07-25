import { createContext, useContext, useState, useEffect, ReactNode, useRef, useMemo, useCallback } from 'react';
import { Service, SERVICES } from '../data/services';
import { useAuth } from './AuthContext';
import { api } from '../api';

interface CartItem extends Service {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (service: Service) => void;
  addBundleToCart: (serviceIds: string[]) => void;
  removeFromCart: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  gst: number;
  total: number;
}

interface RemoteCart {
  userId: string;
  items: { id: string; quantity: number }[];
  fullItems: CartItem[];
  updatedAt: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
      return [];
    }
  });

  const cartRef = useRef<CartItem[]>(cart);
  const isRemoteUpdate = useRef(false);
  const lastSyncTime = useRef<number>(0);

  // Keep cartRef in sync with state
  useEffect(() => {
    cartRef.current = cart;
  }, [cart]);

  // Fetch the remote cart once when the user logs in and merge it in if it's
  // newer than what's local (same updatedAt-comparison merge as before; the
  // one behavior change from Firestore's onSnapshot is that this is a single
  // fetch-on-login rather than a live subscription, so a second open tab
  // won't get pushed updates instantly).
  useEffect(() => {
    if (!user) return;

    let cancelled = false;

    api.get<RemoteCart>('/cart').then((data) => {
      if (cancelled) return;
      const remoteItems = data.fullItems;
      const remoteUpdatedAt = data.updatedAt ? new Date(data.updatedAt).getTime() : 0;
      const localUpdatedAt = lastSyncTime.current;

      if (remoteItems && remoteItems.length > 0 && remoteUpdatedAt > localUpdatedAt) {
        const remoteStr = JSON.stringify(remoteItems);
        const localStr = JSON.stringify(cartRef.current);

        if (remoteStr !== localStr) {
          isRemoteUpdate.current = true;
          lastSyncTime.current = remoteUpdatedAt;
          setCart(remoteItems);
          localStorage.setItem('cart', remoteStr);
        }
      }
    }).catch((error) => {
      console.error('Cart fetch error:', error);
    });

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Persist to local storage and backend on change
  useEffect(() => {
    const cartStr = JSON.stringify(cart);
    localStorage.setItem('cart', cartStr);

    if (user) {
      if (isRemoteUpdate.current) {
        isRemoteUpdate.current = false;
        return;
      }

      const now = new Date().toISOString();
      lastSyncTime.current = new Date(now).getTime();

      api.put('/cart', {
        items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
        fullItems: cart,
        updatedAt: now
      }).catch(err => console.error('Cart save error:', err));
    }
  }, [cart, user]);

  const addToCart = useCallback((service: Service) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === service.id);
      if (existing) {
        return prev.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...service, quantity: 1 }];
    });
  }, []);

  const addBundleToCart = useCallback((serviceIds: string[]) => {
    const servicesToAdd = SERVICES.filter(s => serviceIds.includes(s.id));
    setCart((prev) => {
      let newCart = [...prev];
      servicesToAdd.forEach(service => {
        const existing = newCart.find(item => item.id === service.id);
        if (existing) {
          newCart = newCart.map(item =>
            item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          newCart.push({ ...service, quantity: 1 });
        }
      });
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((serviceId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== serviceId));
  }, []);

  const updateQuantity = useCallback((serviceId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === serviceId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const totalItems = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const gst = useMemo(() => subtotal * 0.18, [subtotal]);
  const total = useMemo(() => subtotal + gst, [subtotal, gst]);

  const value = useMemo(() => ({
    cart,
    addToCart,
    addBundleToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    gst,
    total
  }), [cart, addToCart, addBundleToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal, gst, total]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
