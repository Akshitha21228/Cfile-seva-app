import { Menu, ShoppingCart, Bell } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

export function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { totalItems } = useCart();
  const { showToast } = useToast();

  return (
    <nav className="fixed top-0 left-0 right-0 h-[calc(4rem+env(safe-area-inset-top))] z-50 px-4 flex items-end pb-4 justify-between backdrop-blur-xl bg-black/40 border-b border-white/10">
      <button 
        onClick={onMenuClick}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
          C
        </div>
        <span className="font-bold text-lg tracking-tight">File Seva</span>
      </Link>

      <div className="flex items-center gap-2">
        <button 
          onClick={() => showToast("Notifications coming soon", "info")}
          className="p-2 hover:bg-white/10 rounded-full transition-colors relative"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-black" />
        </button>
        
        <Link to="/cart" className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
