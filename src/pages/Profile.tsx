import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { 
  User, Mail, Phone, MapPin, Trash2, 
  ChevronRight, Camera, Shield, FileText,
  LogOut
} from 'lucide-react';
import { clsx } from 'clsx';

export function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const sections = [
    { icon: FileText, label: 'My Documents', path: '/documents' },
    { icon: Shield, label: 'Privacy Policy', path: '/privacy' },
    { icon: Trash2, label: 'Delete Account', path: '/delete', danger: true },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
          <User className="w-10 h-10 text-white/20" />
        </div>
        <h2 className="text-xl font-bold mb-2">Not Logged In</h2>
        <p className="text-white/40 mb-6">Please log in to view your profile and manage services.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-blue-600 rounded-xl font-bold"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pb-[calc(6rem+env(safe-area-inset-bottom))]">
      {/* Gradient Header */}
      <div className="h-72 bg-gradient-to-br from-blue-600 to-purple-800 relative flex flex-col items-center justify-center p-6 text-center pt-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src={user?.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest'} 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={() => showToast("Photo upload coming soon", "info")}
            className="absolute -bottom-2 -right-2 w-10 h-10 bg-white text-black rounded-2xl flex items-center justify-center shadow-xl"
          >
            <Camera className="w-5 h-5" />
          </button>
        </div>
        <h2 className="mt-4 text-2xl font-black">{user?.displayName || 'Guest User'}</h2>
        <p className="text-white/60 text-sm font-medium uppercase tracking-widest">
          {user?.role === 'admin' ? 'Administrator' : user?.role === 'user' ? 'Member' : 'Guest'}
        </p>
      </div>

      <div className="px-6 mt-6 space-y-6 relative z-10">
        {/* Info Card */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[32px] p-6 space-y-6 shadow-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Full Name</p>
                <p className="font-bold">{user?.displayName || 'Not provided'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Email Address</p>
                <p className="font-bold">{user?.email || 'Not provided'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Phone Number</p>
                <p className="font-bold">{user?.phoneNumber || 'Not provided'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Location</p>
                <p className="font-bold">Not provided</p>
              </div>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden">
          {sections.map((item, i) => (
            <button
              key={i}
              onClick={() => showToast("Coming soon", "info")}
              className={clsx(
                "w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors",
                i !== sections.length - 1 && "border-b border-white/5"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon className={clsx("w-5 h-5", item.danger ? "text-red-400" : "text-white/60")} />
                <span className={clsx("font-bold", item.danger ? "text-red-400" : "text-white")}>{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20" />
            </button>
          ))}
        </div>

        <button 
          onClick={async () => {
            try {
              await logout();
              navigate('/');
            } catch (error) {
              showToast("Logout failed. Please try again.", "error");
            }
          }}
          className="w-full h-16 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 font-bold flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
    </div>
  );
}
