import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe, Eye, EyeOff, LogIn } from 'lucide-react';
import { renderGoogleSignInButton, signInWithGoogleNative } from '../services/googleAuth';

const isNative = Capacitor.isNativePlatform();

export default function Login() {
  const { login, loginWithPassword } = useAuth();
  const { showToast } = useToast();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [buttonError, setButtonError] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const isMounted = useRef(true);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const completeGoogleLogin = async (idToken: string) => {
    if (!isMounted.current) return;
    setIsLoggingIn(true);
    try {
      await login(idToken);
      if (isMounted.current) {
        showToast('Welcome to File Seva!', 'success');
      }
    } catch (error) {
      console.error('Login failed:', error);
      if (isMounted.current) {
        showToast('Login failed. Please try again.', 'error');
      }
    } finally {
      if (isMounted.current) {
        setIsLoggingIn(false);
      }
    }
  };

  // Native (Android): Google blocks its web-based Identity Services inside
  // embedded WebViews, so this uses Play Services' native Credential Manager
  // instead, triggered by a normal button click.
  const handleNativeGoogleLogin = async () => {
    if (isLoggingIn) return;
    try {
      const idToken = await signInWithGoogleNative();
      await completeGoogleLogin(idToken);
    } catch (error) {
      console.error('Native Google sign-in failed:', error);
      showToast('Google sign-in failed. Please try again.', 'error');
    }
  };

  // Web: render Google's own button, which resolves with an ID token once the
  // user completes sign-in.
  useEffect(() => {
    if (isNative) return;
    if (!buttonContainerRef.current) return;

    renderGoogleSignInButton(buttonContainerRef.current)
      .then(completeGoogleLogin)
      .catch((error) => {
        console.error('Google button render failed:', error);
        if (isMounted.current) setButtonError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingForm) return;
    if (!identifier.trim() || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    setIsSubmittingForm(true);
    try {
      await loginWithPassword(identifier.trim(), password);
      showToast('Welcome to File Seva!', 'success');
    } catch (error) {
      console.error('Login failed:', error);
      showToast('Invalid username/email or password', 'error');
    } finally {
      if (isMounted.current) {
        setIsSubmittingForm(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />

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
        <p className="text-white/40 font-medium mb-10">India's #1 Business Compliance App</p>

        {/* Login Card */}
        <div className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
            <p className="text-white/50 text-sm">Sign in to access 150+ business services</p>
          </div>

          <div className="w-full min-h-14 flex items-center justify-center">
            {isLoggingIn ? (
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : isNative ? (
              <button
                type="button"
                onClick={handleNativeGoogleLogin}
                className="w-full h-14 bg-white text-black rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all active:scale-[0.98]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.81z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.9l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.94H1.28v3.1C3.26 21.3 7.3 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.29 14.31A7.2 7.2 0 0 1 4.9 12c0-.8.14-1.58.39-2.31v-3.1H1.28A11.98 11.98 0 0 0 0 12c0 1.93.46 3.76 1.28 5.41l4.01-3.1z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.94 1.19 15.24 0 12 0 7.3 0 3.26 2.7 1.28 6.59l4.01 3.1c.94-2.83 3.59-4.94 6.71-4.94z"/>
                </svg>
                Continue with Google
              </button>
            ) : buttonError ? (
              <p className="text-red-400 text-sm text-center">Couldn't load Google Sign-In. Please refresh and try again.</p>
            ) : (
              <div ref={buttonContainerRef} />
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Or continue with email</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={handlePasswordLogin} className="space-y-4">
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Username or email"
              autoComplete="username"
              className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
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

            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-xs text-blue-400 font-medium hover:text-blue-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmittingForm}
              className="w-full h-14 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmittingForm ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5" /> Log In
                </>
              )}
            </button>
          </form>

          <div className="mt-2 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-white/50 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
            Sign Up
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
