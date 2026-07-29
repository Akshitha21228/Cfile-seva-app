// import { useState, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useToast } from '../context/ToastContext';
// import { motion } from 'motion/react';
// import { Eye, EyeOff, UserPlus } from 'lucide-react';
// import { ApiError } from '../api';

// const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// export default function Signup() {
//   const { signup } = useAuth();
//   const { showToast } = useToast();
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const isMounted = useRef(true);

//   const validate = (): string | null => {
//     if (username.trim().length < 3) return 'Username must be at least 3 characters';
//     if (!EMAIL_PATTERN.test(email.trim())) return 'Please enter a valid email address';
//     if (password.length < 8) return 'Password must be at least 8 characters';
//     if (password !== confirmPassword) return 'Passwords do not match';
//     return null;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     const validationError = validate();
//     if (validationError) {
//       showToast(validationError, 'error');
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       await signup(username.trim(), email.trim(), password, confirmPassword);
//       showToast('Account created! Welcome to File Seva.', 'success');
//       navigate('/', { replace: true });
//     } catch (error) {
//       const message = error instanceof ApiError ? error.message : 'Signup failed. Please try again.';
//       showToast(message, 'error');
//     } finally {
//       if (isMounted.current) {
//         setIsSubmitting(false);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
//       {/* Background Glows */}
//       <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
//       <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md z-10 flex flex-col items-center"
//       >
//         {/* Logo Section */}
//         <div className="flex items-center gap-3 mb-2">
//           <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-500/20">
//             C
//           </div>
//           <h1 className="text-3xl font-bold tracking-tight">File Seva</h1>
//         </div>
//         <p className="text-white/40 font-medium mb-10">Create your account</p>

//         {/* Signup Card */}
//         <div className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl space-y-6">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-2">Get Started</h2>
//             <p className="text-white/50 text-sm">Sign up to unlock 150+ business services</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               autoComplete="username"
//               className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
//             />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email address"
//               autoComplete="email"
//               className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
//             />
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 autoComplete="new-password"
//                 className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((v) => !v)}
//                 className="absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white transition-colors"
//                 aria-label={showPassword ? 'Hide password' : 'Show password'}
//               >
//                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//             </div>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm password"
//                 autoComplete="new-password"
//                 className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword((v) => !v)}
//                 className="absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white transition-colors"
//                 aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
//               >
//                 {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full h-14 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
//             >
//               {isSubmitting ? (
//                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//               ) : (
//                 <>
//                   <UserPlus className="w-5 h-5" /> Sign Up
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//         <p className="mt-6 text-white/50 text-sm">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
//             Log In
//           </Link>
//         </p>

//         {/* Footer */}
//         <p className="mt-8 text-white/30 text-[11px] text-center max-w-[280px] leading-relaxed">
//           By continuing, you agree to our <span className="text-white/60 font-medium">Terms of Service</span> and <span className="text-white/60 font-medium">Privacy Policy</span>
//         </p>
//       </motion.div>
//     </div>
//   );
// }
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { motion } from 'motion/react';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { ApiError } from '../api';

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Signup() {
  const { signup } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMounted = useRef(true);

  const validate = (): string | null => {
    if (username.trim().length < 3) return 'Username must be at least 3 characters';
    if (!EMAIL_PATTERN.test(email.trim())) return 'Please enter a valid email address';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (password !== confirmPassword) return 'Passwords do not match';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🟢 Form submitted!'); // 👈 DEBUG
    if (isSubmitting) return;

    const validationError = validate();
    if (validationError) {
      console.log('🔴 Validation error:', validationError); // 👈 DEBUG
      showToast(validationError, 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('📤 Calling signup...'); // 👈 DEBUG
      await signup(username.trim(), email.trim(), password, confirmPassword);
      console.log('✅ Signup successful!'); // 👈 DEBUG
      showToast('Account created! Welcome to File Seva.', 'success');
      navigate('/', { replace: true });
    } catch (error) {
      console.log('🔴 Signup error caught:', error); // 👈 DEBUG
      const message = error instanceof ApiError ? error.message : 'Signup failed. Please try again.';
      console.log('📝 Error message:', message); // 👈 DEBUG
      showToast(message, 'error');
    } finally {
      if (isMounted.current) {
        console.log('🔄 Setting isSubmitting to false'); // 👈 DEBUG
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10 flex flex-col items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-500/20">
            C
          </div>
          <h1 className="text-3xl font-bold tracking-tight">File Seva</h1>
        </div>
        <p className="text-white/40 font-medium mb-10">Create your account</p>

        {/* Signup Card */}
        <div className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Get Started</h2>
            <p className="text-white/50 text-sm">Sign up to unlock 150+ business services</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoComplete="username"
              className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              autoComplete="email"
              className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="new-password"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                autoComplete="new-password"
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute inset-y-0 right-4 flex items-center text-white/40 hover:text-white transition-colors"
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <UserPlus className="w-5 h-5" /> Sign Up
                </>
              )}
            </button>
          </form>

          {/* === TEST TOAST BUTTON (Remove later) === */}
          <button
            onClick={() => showToast('✅ Test toast works!', 'success')}
            className="w-full h-10 bg-green-600/20 border border-green-500/30 rounded-xl text-sm font-bold hover:bg-green-600/30 transition-colors"
          >
            🔔 Test Toast
          </button>
        </div>

        <p className="mt-6 text-white/50 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
            Log In
          </Link>
        </p>

        {/* Footer */}
        <p className="mt-8 text-white/30 text-[11px] text-center max-w-[280px] leading-relaxed">
          By continuing, you agree to our <span className="text-white/60 font-medium">Terms of Service</span> and <span className="text-white/60 font-medium">Privacy Policy</span>
        </p>
      </motion.div>
    </div>
  );
}
