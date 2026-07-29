import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, User, Package, ShoppingCart, HelpCircle, LogOut, Settings } from 'lucide-react';

export function Menu() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Package, label: 'My Services', path: '/my-services' },
    { icon: ShoppingCart, label: 'Cart', path: '/cart' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
    { icon: Settings, label: 'Settings', path: '/profile' },
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Menu</h1>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <Icon className="w-5 h-5 text-white/60" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}

        {user && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl hover:bg-red-500/20 transition-colors text-red-400"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        )}
      </div>

      <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
        <p className="text-xs text-white/40">Logged in as</p>
        <p className="font-bold">{user?.username || user?.displayName || user?.email}</p>
      </div>
    </div>
  );
}