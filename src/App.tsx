// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { useState, lazy, Suspense, useEffect, ReactNode } from 'react';
// import { App as CapacitorApp } from '@capacitor/app';
// import { Capacitor } from '@capacitor/core';
// import { Layout } from './components/Layout';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';
// import { ToastProvider } from './context/ToastContext';
// import { ErrorBoundary } from './components/ErrorBoundary';
// import { logEvent } from './services/analytics';
// import { initAds } from './services/adService';

// // Lazy load pages for better performance
// const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
// const Search = lazy(() => import('./pages/Search').then(m => ({ default: m.Search })));
// const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
// const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
// const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));
// const Payment = lazy(() => import('./pages/Payment').then(m => ({ default: m.Payment })));
// const Success = lazy(() => import('./pages/Success').then(m => ({ default: m.Success })));
// const MyServices = lazy(() => import('./pages/MyServices').then(m => ({ default: m.MyServices })));
// const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })));
// const Help = lazy(() => import('./pages/Help').then(m => ({ default: m.Help })));
// const Onboarding = lazy(() => import('./pages/Onboarding').then(m => ({ default: m.Onboarding })));
// const Landing = lazy(() => import('./pages/Landing'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));
// const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
// const ResetPassword = lazy(() => import('./pages/ResetPassword'));

// function PageLoader() {
//   return (
//     <div className="min-h-screen bg-[#050505] flex items-center justify-center">
//       <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
//     </div>
//   );
// }

// // Wraps the authenticated "shop" pages: redirects to /login if not signed in,
// // otherwise renders inside the app chrome (Navbar/BottomNav/Drawer).
// function RequireAuth({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (!user) return <Navigate to="/login" replace />;
//   return <Layout>{children}</Layout>;
// }

// // Wraps /login and /signup: bounces already-authenticated users back to "/"
// // instead of showing them the auth forms again.
// function PublicOnly({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (user) return <Navigate to="/" replace />;
//   return <>{children}</>;
// }

// function AppContent() {
//   const [showOnboarding, setShowOnboarding] = useState(() => {
//     return !localStorage.getItem('onboarding_complete');
//   });
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   useEffect(() => {
//     // Initialize Ads
//     initAds();

//     // Android Back Button & App Lifecycle Handling
//     if (Capacitor.isNativePlatform()) {
//       let backListener: Promise<{ remove: () => Promise<void> }> | null = null;
//       let resumeListener: Promise<{ remove: () => Promise<void> }> | null = null;

//       try {
//         backListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
//           if (canGoBack) {
//             window.history.back();
//           } else {
//             CapacitorApp.exitApp();
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add backButton listener:', e);
//       }

//       try {
//         resumeListener = CapacitorApp.addListener('appStateChange', async ({ isActive }) => {
//           if (isActive) {
//             // Re-initialize ads on resume if needed
//             try {
//               await initAds();
//             } catch (e) {
//               console.error('initAds resume error:', e);
//             }
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add appStateChange listener:', e);
//       }

//       return () => {
//         const cleanups: Promise<void>[] = [];
//         if (backListener) cleanups.push(backListener.then(l => l.remove()));
//         if (resumeListener) cleanups.push(resumeListener.then(l => l.remove()));
//         Promise.all(cleanups).catch(console.error);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     // Track page views on route change
//     logEvent('page_view', {
//       page_path: location.pathname,
//       page_title: document.title,
//       page_location: window.location.href
//     });
//   }, [location.pathname]);

//   const handleOnboardingComplete = () => {
//     localStorage.setItem('onboarding_complete', 'true');
//     setShowOnboarding(false);
//   };

//   if (loading) {
//     return <PageLoader />;
//   }

//   if (showOnboarding) {
//     return (
//       <Suspense fallback={<PageLoader />}>
//         <Onboarding onComplete={handleOnboardingComplete} />
//       </Suspense>
//     );
//   }

//   return (
//     <Suspense fallback={<PageLoader />}>
//       <Routes>
//         <Route path="/login" element={<PublicOnly><Login /></PublicOnly>} />
//         <Route path="/signup" element={<PublicOnly><Signup /></PublicOnly>} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/" element={user ? <Layout><Home /></Layout> : <Landing />} />
//         <Route path="/search" element={<RequireAuth><Search /></RequireAuth>} />
//         <Route path="/service/:id" element={<RequireAuth><ServiceDetail /></RequireAuth>} />
//         <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
//         <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
//         <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />
//         <Route path="/success" element={<RequireAuth><Success /></RequireAuth>} />
//         <Route path="/my-services" element={<RequireAuth><MyServices /></RequireAuth>} />
//         <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
//         <Route path="/help" element={<RequireAuth><Help /></RequireAuth>} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default function App() {
//   return (
//     <ErrorBoundary>
//       <AuthProvider>
//         <ToastProvider>
//           <CartProvider>
//             <Router>
//               <AppContent />
//             </Router>
//           </CartProvider>
//         </ToastProvider>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// }
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { useState, lazy, Suspense, useEffect, ReactNode } from 'react';
// import { App as CapacitorApp } from '@capacitor/app';
// import { Capacitor } from '@capacitor/core';
// import { Layout } from './components/Layout';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';
// import { ToastProvider } from './context/ToastContext';
// import { ErrorBoundary } from './components/ErrorBoundary';
// import { logEvent } from './services/analytics';
// import { initAds } from './services/adService';

// // Lazy load pages for better performance
// const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
// const Search = lazy(() => import('./pages/Search').then(m => ({ default: m.Search })));
// const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
// const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
// const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));
// const Payment = lazy(() => import('./pages/Payment').then(m => ({ default: m.Payment })));
// const Success = lazy(() => import('./pages/Success').then(m => ({ default: m.Success })));
// const MyServices = lazy(() => import('./pages/MyServices').then(m => ({ default: m.MyServices })));
// const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })));
// const Help = lazy(() => import('./pages/Help').then(m => ({ default: m.Help })));
// const Onboarding = lazy(() => import('./pages/Onboarding').then(m => ({ default: m.Onboarding })));
// const Landing = lazy(() => import('./pages/Landing'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));
// const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
// const ResetPassword = lazy(() => import('./pages/ResetPassword'));

// function PageLoader() {
//   return (
//     <div className="min-h-screen bg-[#050505] flex items-center justify-center">
//       <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
//     </div>
//   );
// }

// // Wraps the authenticated "shop" pages: redirects to /login if not signed in,
// // otherwise renders inside the app chrome (Navbar/BottomNav/Drawer).
// function RequireAuth({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (!user) return <Navigate to="/login" replace />;
//   return <Layout>{children}</Layout>;
// }

// // Wraps /login and /signup: bounces already-authenticated users back to "/"
// // instead of showing them the auth forms again.
// function PublicOnly({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (user) return <Navigate to="/" replace />;
//   return <>{children}</>;
// }

// function AppContent() {
//   const [showOnboarding, setShowOnboarding] = useState(() => {
//     return !localStorage.getItem('onboarding_complete');
//   });
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   useEffect(() => {
//     // Initialize Ads
//     initAds();

//     // Android Back Button & App Lifecycle Handling
//     if (Capacitor.isNativePlatform()) {
//       let backListener: Promise<{ remove: () => Promise<void> }> | null = null;
//       let resumeListener: Promise<{ remove: () => Promise<void> }> | null = null;

//       try {
//         backListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
//           if (canGoBack) {
//             window.history.back();
//           } else {
//             CapacitorApp.exitApp();
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add backButton listener:', e);
//       }

//       try {
//         resumeListener = CapacitorApp.addListener('appStateChange', async ({ isActive }) => {
//           if (isActive) {
//             // Re-initialize ads on resume if needed
//             try {
//               await initAds();
//             } catch (e) {
//               console.error('initAds resume error:', e);
//             }
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add appStateChange listener:', e);
//       }

//       return () => {
//         const cleanups: Promise<void>[] = [];
//         if (backListener) cleanups.push(backListener.then(l => l.remove()));
//         if (resumeListener) cleanups.push(resumeListener.then(l => l.remove()));
//         Promise.all(cleanups).catch(console.error);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     // Track page views on route change
//     logEvent('page_view', {
//       page_path: location.pathname,
//       page_title: document.title,
//       page_location: window.location.href
//     });
//   }, [location.pathname]);

//   const handleOnboardingComplete = () => {
//     localStorage.setItem('onboarding_complete', 'true');
//     setShowOnboarding(false);
//   };

//   if (loading) {
//     return <PageLoader />;
//   }

//   if (showOnboarding) {
//     return (
//       <Suspense fallback={<PageLoader />}>
//         <Onboarding onComplete={handleOnboardingComplete} />
//       </Suspense>
//     );
//   }

//   return (
//     <Suspense fallback={<PageLoader />}>
//       <Routes>
//         <Route path="/login" element={<PublicOnly><Login /></PublicOnly>} />
//         <Route path="/signup" element={<PublicOnly><Signup /></PublicOnly>} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/" element={user ? <Layout><Home /></Layout> : <Landing />} />
//         <Route path="/search" element={<RequireAuth><Search /></RequireAuth>} />
//         {/* TEMPORARY: Removed RequireAuth for testing the UI flow; re-add when auth is ready */}
//         <Route path="/service/:id" element={<ServiceDetail />} />
//         <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
//         <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
//         <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />
//         <Route path="/success" element={<RequireAuth><Success /></RequireAuth>} />
//         <Route path="/my-services" element={<RequireAuth><MyServices /></RequireAuth>} />
//         <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
//         <Route path="/help" element={<RequireAuth><Help /></RequireAuth>} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default function App() {
//   return (
//     <ErrorBoundary>
//       <AuthProvider>
//         <ToastProvider>
//           <CartProvider>
//             <Router>
//               <AppContent />
//             </Router>
//           </CartProvider>
//         </ToastProvider>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// }

// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { useState, lazy, Suspense, useEffect, ReactNode } from 'react';
// import { App as CapacitorApp } from '@capacitor/app';
// import { Capacitor } from '@capacitor/core';
// import { Layout } from './components/Layout';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';
// import { ToastProvider } from './context/ToastContext';
// import { Toast } from './components/Toast';
// import { ErrorBoundary } from './components/ErrorBoundary';
// import { logEvent } from './services/analytics';
// import { initAds } from './services/adService';

// // Lazy load pages for better performance
// const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
// const Search = lazy(() => import('./pages/Search').then(m => ({ default: m.Search })));
// const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
// const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
// const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));
// const Payment = lazy(() => import('./pages/Payment').then(m => ({ default: m.Payment })));
// const Success = lazy(() => import('./pages/Success').then(m => ({ default: m.Success })));
// const MyServices = lazy(() => import('./pages/MyServices').then(m => ({ default: m.MyServices })));
// const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })));
// const Help = lazy(() => import('./pages/Help').then(m => ({ default: m.Help })));
// const Onboarding = lazy(() => import('./pages/Onboarding').then(m => ({ default: m.Onboarding })));
// const Landing = lazy(() => import('./pages/Landing'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));
// const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
// const ResetPassword = lazy(() => import('./pages/ResetPassword'));

// function PageLoader() {
//   return (
//     <div className="min-h-screen bg-[#050505] flex items-center justify-center">
//       <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
//     </div>
//   );
// }

// function RequireAuth({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (!user) return <Navigate to="/login" replace />;
//   return <Layout>{children}</Layout>;
// }

// function PublicOnly({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (user) return <Navigate to="/" replace />;
//   return <>{children}</>;
// }

// function AppContent() {
//   const [showOnboarding, setShowOnboarding] = useState(() => {
//     return !localStorage.getItem('onboarding_complete');
//   });
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   useEffect(() => {
//     initAds();
//     if (Capacitor.isNativePlatform()) {
//       let backListener: Promise<{ remove: () => Promise<void> }> | null = null;
//       let resumeListener: Promise<{ remove: () => Promise<void> }> | null = null;
//       try {
//         backListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
//           if (canGoBack) {
//             window.history.back();
//           } else {
//             CapacitorApp.exitApp();
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add backButton listener:', e);
//       }
//       try {
//         resumeListener = CapacitorApp.addListener('appStateChange', async ({ isActive }) => {
//           if (isActive) {
//             try {
//               await initAds();
//             } catch (e) {
//               console.error('initAds resume error:', e);
//             }
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add appStateChange listener:', e);
//       }
//       return () => {
//         const cleanups: Promise<void>[] = [];
//         if (backListener) cleanups.push(backListener.then(l => l.remove()));
//         if (resumeListener) cleanups.push(resumeListener.then(l => l.remove()));
//         Promise.all(cleanups).catch(console.error);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     logEvent('page_view', {
//       page_path: location.pathname,
//       page_title: document.title,
//       page_location: window.location.href
//     });
//   }, [location.pathname]);

//   const handleOnboardingComplete = () => {
//     localStorage.setItem('onboarding_complete', 'true');
//     setShowOnboarding(false);
//   };

//   if (loading) {
//     return <PageLoader />;
//   }

//   if (showOnboarding) {
//     return (
//       <Suspense fallback={<PageLoader />}>
//         <Onboarding onComplete={handleOnboardingComplete} />
//       </Suspense>
//     );
//   }

//   return (
//     <Suspense fallback={<PageLoader />}>
//       <Toast />
//       <Routes>
//         <Route path="/login" element={<PublicOnly><Login /></PublicOnly>} />
//         <Route path="/signup" element={<PublicOnly><Signup /></PublicOnly>} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/" element={user ? <Layout><Home /></Layout> : <Landing />} />
//         <Route path="/search" element={<RequireAuth><Search /></RequireAuth>} />
//         <Route path="/service/:id" element={<ServiceDetail />} />
//         <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
//         <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
//         <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />
//         <Route path="/success" element={<RequireAuth><Success /></RequireAuth>} />
//         <Route path="/my-services" element={<RequireAuth><MyServices /></RequireAuth>} />
//         <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
//         <Route path="/help" element={<RequireAuth><Help /></RequireAuth>} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default function App() {
//   return (
//     <ErrorBoundary>
//       <AuthProvider>
//         <ToastProvider>
//           <CartProvider>
//             <Router>
//               <AppContent />
//             </Router>
//           </CartProvider>
//         </ToastProvider>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// }

// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { useState, lazy, Suspense, useEffect, ReactNode } from 'react';
// import { App as CapacitorApp } from '@capacitor/app';
// import { Capacitor } from '@capacitor/core';
// import { Layout } from './components/Layout';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { CartProvider } from './context/CartContext';
// import { ToastProvider } from './context/ToastContext';
// import { Toast } from './components/Toast';
// import { ErrorBoundary } from './components/ErrorBoundary';
// import { logEvent } from './services/analytics';
// import { initAds } from './services/adService';

// // Lazy load pages for better performance
// const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
// const Search = lazy(() => import('./pages/Search').then(m => ({ default: m.Search })));
// const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
// const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
// const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));
// const Payment = lazy(() => import('./pages/Payment').then(m => ({ default: m.Payment })));
// const Success = lazy(() => import('./pages/Success').then(m => ({ default: m.Success })));
// const MyServices = lazy(() => import('./pages/MyServices').then(m => ({ default: m.MyServices })));
// const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })));
// const Help = lazy(() => import('./pages/Help').then(m => ({ default: m.Help })));
// const Onboarding = lazy(() => import('./pages/Onboarding').then(m => ({ default: m.Onboarding })));
// const Landing = lazy(() => import('./pages/Landing'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));
// const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
// const ResetPassword = lazy(() => import('./pages/ResetPassword'));

// function PageLoader() {
//   return (
//     <div className="min-h-screen bg-[#050505] flex items-center justify-center">
//       <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
//     </div>
//   );
// }

// function RequireAuth({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (!user) return <Navigate to="/login" replace />;
//   return <Layout>{children}</Layout>;
// }

// function PublicOnly({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   if (user) return <Navigate to="/" replace />;
//   return <>{children}</>;
// }

// function AppContent() {
//   const [showOnboarding, setShowOnboarding] = useState(() => {
//     return !localStorage.getItem('onboarding_complete');
//   });
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   useEffect(() => {
//     initAds();
//     if (Capacitor.isNativePlatform()) {
//       let backListener: Promise<{ remove: () => Promise<void> }> | null = null;
//       let resumeListener: Promise<{ remove: () => Promise<void> }> | null = null;
//       try {
//         backListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
//           if (canGoBack) {
//             window.history.back();
//           } else {
//             CapacitorApp.exitApp();
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add backButton listener:', e);
//       }
//       try {
//         resumeListener = CapacitorApp.addListener('appStateChange', async ({ isActive }) => {
//           if (isActive) {
//             try {
//               await initAds();
//             } catch (e) {
//               console.error('initAds resume error:', e);
//             }
//           }
//         });
//       } catch (e) {
//         console.error('Failed to add appStateChange listener:', e);
//       }
//       return () => {
//         const cleanups: Promise<void>[] = [];
//         if (backListener) cleanups.push(backListener.then(l => l.remove()));
//         if (resumeListener) cleanups.push(resumeListener.then(l => l.remove()));
//         Promise.all(cleanups).catch(console.error);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     logEvent('page_view', {
//       page_path: location.pathname,
//       page_title: document.title,
//       page_location: window.location.href
//     });
//   }, [location.pathname]);

//   const handleOnboardingComplete = () => {
//     localStorage.setItem('onboarding_complete', 'true');
//     setShowOnboarding(false);
//   };

//   if (loading) {
//     return <PageLoader />;
//   }

//   if (showOnboarding) {
//     return (
//       <Suspense fallback={<PageLoader />}>
//         <Onboarding onComplete={handleOnboardingComplete} />
//       </Suspense>
//     );
//   }

//   return (
//     <Suspense fallback={<PageLoader />}>
//       <Toast />
//       <Routes>
//         <Route path="/login" element={<PublicOnly><Login /></PublicOnly>} />
//         <Route path="/signup" element={<PublicOnly><Signup /></PublicOnly>} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         {/* 👇 ALWAYS SHOW LANDING (even after login) */}
//         <Route path="/" element={<Landing />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/service/:id" element={<ServiceDetail />} />
//         <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
//         <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
//         <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />
//         <Route path="/success" element={<RequireAuth><Success /></RequireAuth>} />
//         <Route path="/my-services" element={<RequireAuth><MyServices /></RequireAuth>} />
//         <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
//         <Route path="/help" element={<RequireAuth><Help /></RequireAuth>} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default function App() {
//   return (
//     <ErrorBoundary>
//       <AuthProvider>
//         <ToastProvider>
//           <CartProvider>
//             <Router>
//               <AppContent />
//             </Router>
//           </CartProvider>
//         </ToastProvider>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// }
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, lazy, Suspense, useEffect, ReactNode } from 'react';
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Layout } from './components/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { Toast } from './components/Toast';
import { ErrorBoundary } from './components/ErrorBoundary';
import { logEvent } from './services/analytics';
import { initAds } from './services/adService';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Search = lazy(() => import('./pages/Search').then(m => ({ default: m.Search })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Cart = lazy(() => import('./pages/Cart').then(m => ({ default: m.Cart })));
const Checkout = lazy(() => import('./pages/Checkout').then(m => ({ default: m.Checkout })));
const Payment = lazy(() => import('./pages/Payment').then(m => ({ default: m.Payment })));
const Success = lazy(() => import('./pages/Success').then(m => ({ default: m.Success })));
const MyServices = lazy(() => import('./pages/MyServices').then(m => ({ default: m.MyServices })));
const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })));
const Help = lazy(() => import('./pages/Help').then(m => ({ default: m.Help })));
const Menu = lazy(() => import('./pages/Menu').then(m => ({ default: m.Menu }))); // 👈 ADDED
const Onboarding = lazy(() => import('./pages/Onboarding').then(m => ({ default: m.Onboarding })));
const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function RequireAuth({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Layout>{children}</Layout>;
}

function PublicOnly({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  if (user) return <Navigate to="/" replace />;
  return <>{children}</>;
}

function AppContent() {
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return !localStorage.getItem('onboarding_complete');
  });
  const { user, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    initAds();
    if (Capacitor.isNativePlatform()) {
      let backListener: Promise<{ remove: () => Promise<void> }> | null = null;
      let resumeListener: Promise<{ remove: () => Promise<void> }> | null = null;
      try {
        backListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
          if (canGoBack) {
            window.history.back();
          } else {
            CapacitorApp.exitApp();
          }
        });
      } catch (e) {
        console.error('Failed to add backButton listener:', e);
      }
      try {
        resumeListener = CapacitorApp.addListener('appStateChange', async ({ isActive }) => {
          if (isActive) {
            try {
              await initAds();
            } catch (e) {
              console.error('initAds resume error:', e);
            }
          }
        });
      } catch (e) {
        console.error('Failed to add appStateChange listener:', e);
      }
      return () => {
        const cleanups: Promise<void>[] = [];
        if (backListener) cleanups.push(backListener.then(l => l.remove()));
        if (resumeListener) cleanups.push(resumeListener.then(l => l.remove()));
        Promise.all(cleanups).catch(console.error);
      };
    }
  }, []);

  useEffect(() => {
    logEvent('page_view', {
      page_path: location.pathname,
      page_title: document.title,
      page_location: window.location.href
    });
  }, [location.pathname]);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboarding_complete', 'true');
    setShowOnboarding(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  if (showOnboarding) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Onboarding onComplete={handleOnboardingComplete} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Toast />
      <Routes>
        <Route path="/login" element={<PublicOnly><Login /></PublicOnly>} />
        <Route path="/signup" element={<PublicOnly><Signup /></PublicOnly>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* 👇 ALWAYS SHOW LANDING (even after login) */}
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />
        <Route path="/success" element={<RequireAuth><Success /></RequireAuth>} />
        <Route path="/my-services" element={<RequireAuth><MyServices /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/help" element={<RequireAuth><Help /></RequireAuth>} />
        <Route path="/menu" element={<RequireAuth><Menu /></RequireAuth>} /> {/* 👈 ADDED */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
            <Router>
              <AppContent />
            </Router>
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}