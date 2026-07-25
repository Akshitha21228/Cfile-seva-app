import { motion } from 'motion/react';
import { 
  X, Home, Briefcase, Star, Info, FileText, 
  MessageSquare, HelpCircle, ThumbsUp, LogOut, 
  UserPlus
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

export function Drawer({ onClose }: { onClose: () => void }) {
  const { user, logout } = useAuth();
  const { showToast } = useToast();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Briefcase, label: 'My Services', path: '/my-services' },
    { icon: Star, label: 'Reviews', path: '/reviews', comingSoon: true },
    { icon: Info, label: 'About Us', path: '/about', comingSoon: true },
    { icon: FileText, label: 'Terms & Conditions', path: '/terms', comingSoon: true },
    { icon: MessageSquare, label: 'Blog', path: '/blog', comingSoon: true },
    { icon: HelpCircle, label: 'Help & Support', path: '/help' },
    { icon: ThumbsUp, label: 'Rate Us', path: '/rate', comingSoon: true },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
      />
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#0a0a0a] border-r border-white/10 z-[70] flex flex-col"
      >
        {/* Profile Section */}
        <div className="p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-b border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/50">
              <img 
                src={user?.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest'} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>
          <h3 className="text-xl font-bold">{user?.displayName || 'Guest User'}</h3>
          <p className="text-white/40 text-sm">{user?.email || 'Sign in to access more features'}</p>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1 no-scrollbar">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => {
                if (item.comingSoon) {
                  e.preventDefault();
                  showToast("Coming soon", "info");
                }
                onClose();
              }}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <item.icon className="w-5 h-5 text-white/60 group-hover:text-blue-400 transition-colors" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <button 
            onClick={() => {
              showToast("Advocate portal coming soon", "info");
              onClose();
            }}
            className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-blue-400 font-semibold"
          >
            <UserPlus className="w-5 h-5" />
            <span>Continue as Advocate</span>
          </button>
          <button 
            onClick={async () => { 
              try {
                await logout(); 
                onClose(); 
              } catch (error) {
                showToast("Logout failed. Please try again.", "error");
              }
            }}
            className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-red-400"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
          <div className="text-center pt-4">
            <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Version {__APP_VERSION__}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
