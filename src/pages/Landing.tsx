// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ShieldCheck, Zap, Globe } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// export default function Landing() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));
//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const topSelling = SERVICES.filter(s => s.tags.includes('top-selling')).slice(0, 8);

//   const goToSignup = () => navigate('/signup');

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <ShieldCheck className="w-6 h-6 text-blue-400" />
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <Zap className="w-6 h-6 text-yellow-400" />
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <Globe className="w-6 h-6 text-green-400" />
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* Popular Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {topSelling.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate('/login')}
//                 className="flex flex-col items-center gap-2 text-center"
//               >
//                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
//                   <Package className="w-6 h-6 text-blue-400" />
//                 </div>
//                 <span className="text-[10px] font-medium leading-tight line-clamp-2">{service.title}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate('/signup')}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate('/login')}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate('/login')}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Rocket, TrendingUp, Flame, Star, Package, ChevronRight, Home, HelpCircle, LogIn, Menu } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// export default function Landing() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));
//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);

//   const goToSignup = () => navigate('/signup');

//   // Category icons mapping
//   const categoryIcons: Record<string, string> = {
//     'Business Registration': '📋',
//     'GST Services': '💰',
//     'Trademark & IPR': '⚖️',
//     'FSSAI': '🍽️',
//     'Import Export': '🌐',
//     'Tax & Compliance': '📊',
//     'Legal Services': '⚖️',
//     'Digital Services': '💻',
//     'Licenses & Registrations': '📜',
//     'Document Services': '📄',
//     'Expert Services': '👨‍💼',
//     'Marketing': '📢',
//     'Intellectual Property': '🧠',
//     'Financial Services': '🏦'
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
//         {/* Online Legal India Header */}
//         <div className="text-center py-2">
//           <h1 className="text-2xl font-bold text-white">Online Legal India</h1>
//           <p className="text-sm text-gray-400">ODR - TM - Registrations & Compliance</p>
//         </div>

//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🔒</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">⚡</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🌍</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* ========== ONLY POPULAR SERVICES ========== */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//             <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {categories.slice(0, 8).map((category) => {
//               const icon = categoryIcons[category] || '📦';
//               return (
//                 <button 
//                   key={category} 
//                   onClick={() => navigate(`/search?category=${encodeURIComponent(category)}`)} 
//                   className="flex flex-col items-center gap-2 text-center group"
//                 >
//                   <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-2xl">
//                     {icon}
//                   </div>
//                   <span className="text-[10px] font-medium leading-tight line-clamp-2 text-white/80 group-hover:text-white transition">{category}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Premium */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-purple-500" /> Premium Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {premiumServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
//               >
//                 <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                   <ChevronRight className="w-4 h-4 text-white/20" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories Grid */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate(`/search?category=${cat}`)}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>
//         <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
//           <LogIn className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Login</span>
//         </button>
//         <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { 
//   Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ChevronDown,
//   Home, HelpCircle, LogIn, Menu, ChevronUp
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// // ========== FULL SERVICE DATA STRUCTURE ==========
// const serviceData = {
//   'Business Registration': {
//     icon: '📋',
//     subCategories: [
//       {
//         name: 'Company Registration',
//         services: [
//           { name: 'Private Limited Company Registration', icon: '🏢' },
//           { name: 'One Person Company (OPC) Registration', icon: '👤' },
//           { name: 'LLP Registration', icon: '🤝' },
//           { name: 'Public Limited Company Registration', icon: '📊' },
//           { name: 'Section 8 Company Registration', icon: '❤️' },
//           { name: 'Producer Company Registration', icon: '🌾' },
//           { name: 'Nidhi Company Registration', icon: '🏦' },
//           { name: 'Indian Subsidiary Registration', icon: '🌏' }
//         ]
//       },
//       {
//         name: 'Firm Registration',
//         services: [
//           { name: 'Partnership Firm Registration', icon: '👥' },
//           { name: 'Sole Proprietorship Registration', icon: '👤' }
//         ]
//       },
//       {
//         name: 'Startup Services',
//         services: [
//           { name: 'Startup India Registration', icon: '🚀' },
//           { name: 'DPIIT Recognition', icon: '✅' },
//           { name: 'Startup Compliance', icon: '📋' }
//         ]
//       }
//     ]
//   },
//   'GST Services': {
//     icon: '🧾',
//     subCategories: [
//       {
//         name: 'GST Registration',
//         services: [
//           { name: 'New GST Registration', icon: '📝' },
//           { name: 'GST Amendment', icon: '✏️' },
//           { name: 'GST Cancellation', icon: '❌' },
//           { name: 'GST Revocation', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'GST Returns',
//         services: [
//           { name: 'Monthly GST Return Filing', icon: '📅' },
//           { name: 'Quarterly GST Return Filing', icon: '📆' },
//           { name: 'Annual GST Return Filing', icon: '📊' },
//           { name: 'Nil Return Filing', icon: '0️⃣' }
//         ]
//       },
//       {
//         name: 'GST Compliance',
//         services: [
//           { name: 'GST Audit', icon: '🔍' },
//           { name: 'GST Reconciliation', icon: '🔄' },
//           { name: 'GST Notice Reply', icon: '📧' },
//           { name: 'GST LUT Filing', icon: '📄' },
//           { name: 'GST Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Trademark & IPR': {
//     icon: '™️',
//     subCategories: [
//       {
//         name: 'Trademark',
//         services: [
//           { name: 'Trademark Search', icon: '🔍' },
//           { name: 'Trademark Registration', icon: '®️' },
//           { name: 'Trademark Objection Reply', icon: '⚖️' },
//           { name: 'Trademark Renewal', icon: '🔄' },
//           { name: 'Trademark Assignment', icon: '📄' }
//         ]
//       },
//       {
//         name: 'Copyright',
//         services: [
//           { name: 'Copyright Registration', icon: '©️' },
//           { name: 'Copyright Objection Handling', icon: '⚖️' }
//         ]
//       },
//       {
//         name: 'Patent',
//         services: [
//           { name: 'Patent Filing', icon: '📜' },
//           { name: 'Patent Search', icon: '🔍' },
//           { name: 'Patent Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Legal Services': {
//     icon: '⚖️',
//     subCategories: [
//       {
//         name: 'Legal Documentation',
//         services: [
//           { name: 'NDA Drafting', icon: '📄' },
//           { name: 'Partnership Agreement', icon: '🤝' },
//           { name: 'Employment Agreement', icon: '👔' },
//           { name: 'Vendor Agreement', icon: '📦' },
//           { name: 'Service Agreement', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Legal Advisory',
//         services: [
//           { name: 'Legal Consultation', icon: '💬' },
//           { name: 'Notice Drafting', icon: '📧' },
//           { name: 'Legal Notice Reply', icon: '⚖️' },
//           { name: 'Contract Review', icon: '🔍' }
//         ]
//       }
//     ]
//   },
//   'Licenses & Registrations': {
//     icon: '🏢',
//     subCategories: [
//       {
//         name: 'Business Licenses',
//         services: [
//           { name: 'Trade License', icon: '📜' },
//           { name: 'Shop & Establishment Registration', icon: '🏪' },
//           { name: 'Professional Tax Registration', icon: '💰' }
//         ]
//       },
//       {
//         name: 'Industry Licenses',
//         services: [
//           { name: 'MSME/Udyam Registration', icon: '🏭' },
//           { name: 'Labour License', icon: '👷' },
//           { name: 'Pollution Certificate', icon: '🌿' },
//           { name: 'Factory License', icon: '🏗️' }
//         ]
//       }
//     ]
//   },
//   'FSSAI': {
//     icon: '🍽️',
//     subCategories: [
//       {
//         name: 'Registration',
//         services: [
//           { name: 'Basic FSSAI Registration', icon: '📝' },
//           { name: 'State FSSAI License', icon: '🏛️' },
//           { name: 'Central FSSAI License', icon: '🇮🇳' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'FSSAI Renewal', icon: '🔄' },
//           { name: 'FSSAI Modification', icon: '✏️' },
//           { name: 'FSSAI Annual Return Filing', icon: '📊' }
//         ]
//       }
//     ]
//   },
//   'Import Export': {
//     icon: '🌍',
//     subCategories: [
//       {
//         name: 'IEC Services',
//         services: [
//           { name: 'IEC Registration', icon: '📝' },
//           { name: 'IEC Modification', icon: '✏️' },
//           { name: 'IEC Renewal', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'Export Compliance',
//         services: [
//           { name: 'RCMC Registration', icon: '📄' },
//           { name: 'Export Documentation', icon: '📋' },
//           { name: 'DGFT Services', icon: '🏛️' }
//         ]
//       }
//     ]
//   },
//   'Financial Services': {
//     icon: '💰',
//     subCategories: [
//       {
//         name: 'Accounting',
//         services: [
//           { name: 'Bookkeeping', icon: '📒' },
//           { name: 'Accounting Setup', icon: '📊' },
//           { name: 'Ledger Maintenance', icon: '📑' }
//         ]
//       },
//       {
//         name: 'Payroll',
//         services: [
//           { name: 'Payroll Processing', icon: '💳' },
//           { name: 'Salary Management', icon: '💰' },
//           { name: 'PF & ESI Compliance', icon: '🏦' }
//         ]
//       },
//       {
//         name: 'Advisory',
//         services: [
//           { name: 'Financial Planning', icon: '📈' },
//           { name: 'CFO Services', icon: '👔' },
//           { name: 'Business Financial Advisory', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Tax & Compliance': {
//     icon: '📑',
//     subCategories: [
//       {
//         name: 'Income Tax',
//         services: [
//           { name: 'Individual ITR Filing', icon: '👤' },
//           { name: 'Business ITR Filing', icon: '🏢' },
//           { name: 'Tax Planning', icon: '📊' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'TDS Filing', icon: '📝' },
//           { name: 'ROC Compliance', icon: '📋' },
//           { name: 'Annual Compliance', icon: '📅' }
//         ]
//       }
//     ]
//   },
//   'Digital Services': {
//     icon: '💻',
//     subCategories: [
//       {
//         name: 'Website Development',
//         services: [
//           { name: 'Business Website', icon: '🌐' },
//           { name: 'E-commerce Website', icon: '🛒' },
//           { name: 'Portfolio Website', icon: '🎨' },
//           { name: 'Landing Page Design', icon: '📄' }
//         ]
//       },
//       {
//         name: 'App Development',
//         services: [
//           { name: 'Android App Development', icon: '📱' },
//           { name: 'iOS App Development', icon: '🍎' },
//           { name: 'Flutter App Development', icon: '🚀' }
//         ]
//       },
//       {
//         name: 'Branding',
//         services: [
//           { name: 'Logo Design', icon: '🎯' },
//           { name: 'Brand Identity', icon: '🏷️' },
//           { name: 'Business Profile Design', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Graphic Design',
//         services: [
//           { name: 'Social Media Creatives', icon: '📱' },
//           { name: 'Posters & Flyers', icon: '🖼️' },
//           { name: 'Brochures', icon: '📒' },
//           { name: 'Banner Design', icon: '🎨' }
//         ]
//       },
//       {
//         name: 'Business Growth',
//         services: [
//           { name: 'Digital Transformation', icon: '🔄' },
//           { name: 'Online Presence Setup', icon: '🌐' },
//           { name: 'Business Automation', icon: '🤖' }
//         ]
//       }
//     ]
//   }
// };

// // Get main categories
// const mainCategories = Object.keys(serviceData);

// export default function Landing() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);
//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));

//   const goToSignup = () => navigate('/signup');

//   const toggleCategory = (category: string) => {
//     if (expandedCategory === category) {
//       setExpandedCategory(null);
//       setActiveTab('');
//     } else {
//       setExpandedCategory(category);
//       const subCats = serviceData[category]?.subCategories || [];
//       if (subCats.length > 0) {
//         setActiveTab(subCats[0].name);
//       }
//     }
//   };

//   const getCategoryIcon = (category: string) => {
//     return serviceData[category]?.icon || '📦';
//   };

//   const getSubCategories = (category: string) => {
//     return serviceData[category]?.subCategories || [];
//   };

//   const getServicesForTab = (category: string, tabName: string) => {
//     const subCats = serviceData[category]?.subCategories || [];
//     const found = subCats.find(s => s.name === tabName);
//     return found?.services || [];
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
//         {/* Online Legal India Header */}
//         <div className="text-center py-2">
//           <h1 className="text-2xl font-bold text-white">Online Legal India</h1>
//           <p className="text-sm text-gray-400">ODR - TM - Registrations & Compliance</p>
//         </div>

//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🔒</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">⚡</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🌍</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* ========== Popular Services ========== */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//             <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
//           </div>

//           {/* Level 1: Main Categories - Circle Icons */}
//           <div className="grid grid-cols-4 gap-4">
//             {mainCategories.slice(0, 8).map((category) => {
//               const icon = getCategoryIcon(category);
//               const isExpanded = expandedCategory === category;

//               return (
//                 <div key={category} className="flex flex-col items-center">
//                   <button
//                     onClick={() => toggleCategory(category)}
//                     className={`w-full flex flex-col items-center gap-2 text-center group transition-all ${
//                       isExpanded ? 'scale-105' : ''
//                     }`}
//                   >
//                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all text-2xl ${
//                       isExpanded
//                         ? 'bg-blue-500/20 border-blue-500/30'
//                         : 'bg-white/5 border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30'
//                     }`}>
//                       {icon}
//                     </div>
//                     <span className={`text-[10px] font-medium leading-tight line-clamp-2 transition ${
//                       isExpanded ? 'text-blue-400' : 'text-white/80 group-hover:text-white'
//                     }`}>
//                       {category}
//                     </span>
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           {/* ========== Level 2 & 3: Expanded Section ========== */}
//           <AnimatePresence>
//             {expandedCategory && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0, y: -10 }}
//                 animate={{ opacity: 1, height: 'auto', y: 0 }}
//                 exit={{ opacity: 0, height: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="mt-4 bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
//               >
//                 <div className="p-4">
//                   {/* Level 2: Sub-Category Tabs */}
//                   <div className="flex gap-2 flex-wrap mb-4">
//                     {getSubCategories(expandedCategory).map((sub) => (
//                       <button
//                         key={sub.name}
//                         onClick={() => setActiveTab(sub.name)}
//                         className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                           activeTab === sub.name
//                             ? 'bg-blue-600 text-white'
//                             : 'bg-white/5 text-white/60 hover:bg-white/10'
//                         }`}
//                       >
//                         {sub.name}
//                       </button>
//                     ))}
//                   </div>

//                   {/* Level 3: Services as Circle Icons */}
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeTab}
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="grid grid-cols-4 gap-4">
//                         {getServicesForTab(expandedCategory, activeTab).map((service) => (
//                           <button
//                             key={service.name}
//                             onClick={() => navigate(`/search?q=${encodeURIComponent(service.name)}`)}
//                             className="flex flex-col items-center gap-2 text-center group"
//                           >
//                             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-xl">
//                               {service.icon}
//                             </div>
//                             <span className="text-[9px] font-medium leading-tight line-clamp-2 text-white/70 group-hover:text-white transition">
//                               {service.name}
//                             </span>
//                           </button>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </AnimatePresence>

//                   {/* Less button */}
//                   <div className="pt-3 border-t border-white/10 mt-3">
//                     <button
//                       onClick={() => {
//                         setExpandedCategory(null);
//                         setActiveTab('');
//                       }}
//                       className="text-white/40 text-sm font-medium flex items-center gap-1 hover:text-white transition"
//                     >
//                       <ChevronUp className="w-4 h-4" />
//                       Less
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Premium */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-purple-500" /> Premium Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {premiumServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
//               >
//                 <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                   <ChevronRight className="w-4 h-4 text-white/20" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories Grid */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate(`/search?category=${cat}`)}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>
//         <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
//           <LogIn className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Login</span>
//         </button>
//         <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { 
//   Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ChevronDown,
//   Home, HelpCircle, LogIn, Menu, ChevronUp, ArrowLeft
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// // ========== FULL SERVICE DATA STRUCTURE ==========
// const serviceData = {
//   'Business Registration': {
//     icon: '📋',
//     subCategories: [
//       {
//         name: 'Company Registration',
//         services: [
//           { name: 'Private Limited Company Registration', icon: '🏢' },
//           { name: 'One Person Company (OPC) Registration', icon: '👤' },
//           { name: 'LLP Registration', icon: '🤝' },
//           { name: 'Public Limited Company Registration', icon: '📊' },
//           { name: 'Section 8 Company Registration', icon: '❤️' },
//           { name: 'Producer Company Registration', icon: '🌾' },
//           { name: 'Nidhi Company Registration', icon: '🏦' },
//           { name: 'Indian Subsidiary Registration', icon: '🌏' }
//         ]
//       },
//       {
//         name: 'Firm Registration',
//         services: [
//           { name: 'Partnership Firm Registration', icon: '👥' },
//           { name: 'Sole Proprietorship Registration', icon: '👤' }
//         ]
//       },
//       {
//         name: 'Startup Services',
//         services: [
//           { name: 'Startup India Registration', icon: '🚀' },
//           { name: 'DPIIT Recognition', icon: '✅' },
//           { name: 'Startup Compliance', icon: '📋' }
//         ]
//       }
//     ]
//   },
//   'GST Services': {
//     icon: '🧾',
//     subCategories: [
//       {
//         name: 'GST Registration',
//         services: [
//           { name: 'New GST Registration', icon: '📝' },
//           { name: 'GST Amendment', icon: '✏️' },
//           { name: 'GST Cancellation', icon: '❌' },
//           { name: 'GST Revocation', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'GST Returns',
//         services: [
//           { name: 'Monthly GST Return Filing', icon: '📅' },
//           { name: 'Quarterly GST Return Filing', icon: '📆' },
//           { name: 'Annual GST Return Filing', icon: '📊' },
//           { name: 'Nil Return Filing', icon: '0️⃣' }
//         ]
//       },
//       {
//         name: 'GST Compliance',
//         services: [
//           { name: 'GST Audit', icon: '🔍' },
//           { name: 'GST Reconciliation', icon: '🔄' },
//           { name: 'GST Notice Reply', icon: '📧' },
//           { name: 'GST LUT Filing', icon: '📄' },
//           { name: 'GST Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Trademark & IPR': {
//     icon: '™️',
//     subCategories: [
//       {
//         name: 'Trademark',
//         services: [
//           { name: 'Trademark Search', icon: '🔍' },
//           { name: 'Trademark Registration', icon: '®️' },
//           { name: 'Trademark Objection Reply', icon: '⚖️' },
//           { name: 'Trademark Renewal', icon: '🔄' },
//           { name: 'Trademark Assignment', icon: '📄' }
//         ]
//       },
//       {
//         name: 'Copyright',
//         services: [
//           { name: 'Copyright Registration', icon: '©️' },
//           { name: 'Copyright Objection Handling', icon: '⚖️' }
//         ]
//       },
//       {
//         name: 'Patent',
//         services: [
//           { name: 'Patent Filing', icon: '📜' },
//           { name: 'Patent Search', icon: '🔍' },
//           { name: 'Patent Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Legal Services': {
//     icon: '⚖️',
//     subCategories: [
//       {
//         name: 'Legal Documentation',
//         services: [
//           { name: 'NDA Drafting', icon: '📄' },
//           { name: 'Partnership Agreement', icon: '🤝' },
//           { name: 'Employment Agreement', icon: '👔' },
//           { name: 'Vendor Agreement', icon: '📦' },
//           { name: 'Service Agreement', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Legal Advisory',
//         services: [
//           { name: 'Legal Consultation', icon: '💬' },
//           { name: 'Notice Drafting', icon: '📧' },
//           { name: 'Legal Notice Reply', icon: '⚖️' },
//           { name: 'Contract Review', icon: '🔍' }
//         ]
//       }
//     ]
//   },
//   'Licenses & Registrations': {
//     icon: '🏢',
//     subCategories: [
//       {
//         name: 'Business Licenses',
//         services: [
//           { name: 'Trade License', icon: '📜' },
//           { name: 'Shop & Establishment Registration', icon: '🏪' },
//           { name: 'Professional Tax Registration', icon: '💰' }
//         ]
//       },
//       {
//         name: 'Industry Licenses',
//         services: [
//           { name: 'MSME/Udyam Registration', icon: '🏭' },
//           { name: 'Labour License', icon: '👷' },
//           { name: 'Pollution Certificate', icon: '🌿' },
//           { name: 'Factory License', icon: '🏗️' }
//         ]
//       }
//     ]
//   },
//   'FSSAI': {
//     icon: '🍽️',
//     subCategories: [
//       {
//         name: 'Registration',
//         services: [
//           { name: 'Basic FSSAI Registration', icon: '📝' },
//           { name: 'State FSSAI License', icon: '🏛️' },
//           { name: 'Central FSSAI License', icon: '🇮🇳' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'FSSAI Renewal', icon: '🔄' },
//           { name: 'FSSAI Modification', icon: '✏️' },
//           { name: 'FSSAI Annual Return Filing', icon: '📊' }
//         ]
//       }
//     ]
//   },
//   'Import Export': {
//     icon: '🌍',
//     subCategories: [
//       {
//         name: 'IEC Services',
//         services: [
//           { name: 'IEC Registration', icon: '📝' },
//           { name: 'IEC Modification', icon: '✏️' },
//           { name: 'IEC Renewal', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'Export Compliance',
//         services: [
//           { name: 'RCMC Registration', icon: '📄' },
//           { name: 'Export Documentation', icon: '📋' },
//           { name: 'DGFT Services', icon: '🏛️' }
//         ]
//       }
//     ]
//   },
//   'Financial Services': {
//     icon: '💰',
//     subCategories: [
//       {
//         name: 'Accounting',
//         services: [
//           { name: 'Bookkeeping', icon: '📒' },
//           { name: 'Accounting Setup', icon: '📊' },
//           { name: 'Ledger Maintenance', icon: '📑' }
//         ]
//       },
//       {
//         name: 'Payroll',
//         services: [
//           { name: 'Payroll Processing', icon: '💳' },
//           { name: 'Salary Management', icon: '💰' },
//           { name: 'PF & ESI Compliance', icon: '🏦' }
//         ]
//       },
//       {
//         name: 'Advisory',
//         services: [
//           { name: 'Financial Planning', icon: '📈' },
//           { name: 'CFO Services', icon: '👔' },
//           { name: 'Business Financial Advisory', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Tax & Compliance': {
//     icon: '📑',
//     subCategories: [
//       {
//         name: 'Income Tax',
//         services: [
//           { name: 'Individual ITR Filing', icon: '👤' },
//           { name: 'Business ITR Filing', icon: '🏢' },
//           { name: 'Tax Planning', icon: '📊' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'TDS Filing', icon: '📝' },
//           { name: 'ROC Compliance', icon: '📋' },
//           { name: 'Annual Compliance', icon: '📅' }
//         ]
//       }
//     ]
//   },
//   'Digital Services': {
//     icon: '💻',
//     subCategories: [
//       {
//         name: 'Website Development',
//         services: [
//           { name: 'Business Website', icon: '🌐' },
//           { name: 'E-commerce Website', icon: '🛒' },
//           { name: 'Portfolio Website', icon: '🎨' },
//           { name: 'Landing Page Design', icon: '📄' }
//         ]
//       },
//       {
//         name: 'App Development',
//         services: [
//           { name: 'Android App Development', icon: '📱' },
//           { name: 'iOS App Development', icon: '🍎' },
//           { name: 'Flutter App Development', icon: '🚀' }
//         ]
//       },
//       {
//         name: 'Branding',
//         services: [
//           { name: 'Logo Design', icon: '🎯' },
//           { name: 'Brand Identity', icon: '🏷️' },
//           { name: 'Business Profile Design', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Graphic Design',
//         services: [
//           { name: 'Social Media Creatives', icon: '📱' },
//           { name: 'Posters & Flyers', icon: '🖼️' },
//           { name: 'Brochures', icon: '📒' },
//           { name: 'Banner Design', icon: '🎨' }
//         ]
//       },
//       {
//         name: 'Business Growth',
//         services: [
//           { name: 'Digital Transformation', icon: '🔄' },
//           { name: 'Online Presence Setup', icon: '🌐' },
//           { name: 'Business Automation', icon: '🤖' }
//         ]
//       }
//     ]
//   }
// };

// // Get main categories
// const mainCategories = Object.keys(serviceData);

// export default function Landing() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);
//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));

//   const goToSignup = () => navigate('/signup');

//   const toggleCategory = (category: string) => {
//     if (expandedCategory === category) {
//       setExpandedCategory(null);
//       setActiveTab('');
//     } else {
//       setExpandedCategory(category);
//       const subCats = serviceData[category]?.subCategories || [];
//       if (subCats.length > 0) {
//         setActiveTab(subCats[0].name);
//       }
//     }
//   };

//   const getCategoryIcon = (category: string) => {
//     return serviceData[category]?.icon || '📦';
//   };

//   const getSubCategories = (category: string) => {
//     return serviceData[category]?.subCategories || [];
//   };

//   const getServicesForTab = (category: string, tabName: string) => {
//     const subCats = serviceData[category]?.subCategories || [];
//     const found = subCats.find(s => s.name === tabName);
//     return found?.services || [];
//   };

//   const getCategoryName = (category: string) => {
//     return category;
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
//         {/* Online Legal India Header */}
//         <div className="text-center py-2">
//           <h1 className="text-2xl font-bold text-white">Online Legal India</h1>
//           <p className="text-sm text-gray-400">ODR - TM - Registrations & Compliance</p>
//         </div>

//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🔒</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">⚡</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🌍</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* ========== Popular Services ========== */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//             <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
//           </div>

//           {/* Level 1: Main Categories - Circle Icons */}
//           {/* Only show main categories if NO category is expanded */}
//           {!expandedCategory && (
//             <div className="grid grid-cols-4 gap-4">
//               {mainCategories.slice(0, 8).map((category) => {
//                 const icon = getCategoryIcon(category);
//                 return (
//                   <div key={category} className="flex flex-col items-center">
//                     <button
//                       onClick={() => toggleCategory(category)}
//                       className="w-full flex flex-col items-center gap-2 text-center group"
//                     >
//                       <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-2xl">
//                         {icon}
//                       </div>
//                       <span className="text-[10px] font-medium leading-tight line-clamp-2 text-white/80 group-hover:text-white transition">
//                         {category}
//                       </span>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* ========== Expanded View: Only show selected category ========== */}
//           <AnimatePresence>
//             {expandedCategory && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0, y: -10 }}
//                 animate={{ opacity: 1, height: 'auto', y: 0 }}
//                 exit={{ opacity: 0, height: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="mt-2"
//               >
//                 {/* Back button */}
//                 <button
//                   onClick={() => {
//                     setExpandedCategory(null);
//                     setActiveTab('');
//                   }}
//                   className="flex items-center gap-2 text-white/60 hover:text-white transition mb-4"
//                 >
//                   <ArrowLeft className="w-4 h-4" />
//                   <span className="text-sm">Back to all services</span>
//                 </button>

//                 {/* Selected Category Header */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">
//                     {getCategoryIcon(expandedCategory)}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{getCategoryName(expandedCategory)}</h3>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
//                   <div className="p-4">
//                     {/* Level 2: Sub-Category Tabs */}
//                     <div className="flex gap-2 flex-wrap mb-4">
//                       {getSubCategories(expandedCategory).map((sub) => (
//                         <button
//                           key={sub.name}
//                           onClick={() => setActiveTab(sub.name)}
//                           className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                             activeTab === sub.name
//                               ? 'bg-blue-600 text-white'
//                               : 'bg-white/5 text-white/60 hover:bg-white/10'
//                           }`}
//                         >
//                           {sub.name}
//                         </button>
//                       ))}
//                     </div>

//                     {/* Level 3: Services as Circle Icons */}
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <div className="grid grid-cols-4 gap-4">
//                           {getServicesForTab(expandedCategory, activeTab).map((service) => (
//                             <button
//                               key={service.name}
//                               onClick={() => navigate(`/search?q=${encodeURIComponent(service.name)}`)}
//                               className="flex flex-col items-center gap-2 text-center group"
//                             >
//                               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-xl">
//                                 {service.icon}
//                               </div>
//                               <span className="text-[9px] font-medium leading-tight line-clamp-2 text-white/70 group-hover:text-white transition">
//                                 {service.name}
//                               </span>
//                             </button>
//                           ))}
//                         </div>
//                       </motion.div>
//                     </AnimatePresence>

//                     {/* Less button */}
//                     <div className="pt-3 border-t border-white/10 mt-3">
//                       <button
//                         onClick={() => {
//                           setExpandedCategory(null);
//                           setActiveTab('');
//                         }}
//                         className="text-white/40 text-sm font-medium flex items-center gap-1 hover:text-white transition"
//                       >
//                         <ChevronUp className="w-4 h-4" />
//                         Less
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Premium */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-purple-500" /> Premium Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {premiumServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
//               >
//                 <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                   <ChevronRight className="w-4 h-4 text-white/20" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories Grid */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate(`/search?category=${cat}`)}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>
//         <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
//           <LogIn className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Login</span>
//         </button>
//         <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { 
//   Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ChevronDown,
//   Home, HelpCircle, LogIn, Menu, ChevronUp, ArrowLeft
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// // ========== FULL SERVICE DATA STRUCTURE ==========
// const serviceData = {
//   'Business Registration': {
//     icon: '📋',
//     subCategories: [
//       {
//         name: 'Company Registration',
//         services: [
//           { name: 'Private Limited Company Registration', icon: '🏢' },
//           { name: 'One Person Company (OPC) Registration', icon: '👤' },
//           { name: 'LLP Registration', icon: '🤝' },
//           { name: 'Public Limited Company Registration', icon: '📊' },
//           { name: 'Section 8 Company Registration', icon: '❤️' },
//           { name: 'Producer Company Registration', icon: '🌾' },
//           { name: 'Nidhi Company Registration', icon: '🏦' },
//           { name: 'Indian Subsidiary Registration', icon: '🌏' }
//         ]
//       },
//       {
//         name: 'Firm Registration',
//         services: [
//           { name: 'Partnership Firm Registration', icon: '👥' },
//           { name: 'Sole Proprietorship Registration', icon: '👤' }
//         ]
//       },
//       {
//         name: 'Startup Services',
//         services: [
//           { name: 'Startup India Registration', icon: '🚀' },
//           { name: 'DPIIT Recognition', icon: '✅' },
//           { name: 'Startup Compliance', icon: '📋' }
//         ]
//       }
//     ]
//   },
//   'GST Services': {
//     icon: '🧾',
//     subCategories: [
//       {
//         name: 'GST Registration',
//         services: [
//           { name: 'New GST Registration', icon: '📝' },
//           { name: 'GST Amendment', icon: '✏️' },
//           { name: 'GST Cancellation', icon: '❌' },
//           { name: 'GST Revocation', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'GST Returns',
//         services: [
//           { name: 'Monthly GST Return Filing', icon: '📅' },
//           { name: 'Quarterly GST Return Filing', icon: '📆' },
//           { name: 'Annual GST Return Filing', icon: '📊' },
//           { name: 'Nil Return Filing', icon: '0️⃣' }
//         ]
//       },
//       {
//         name: 'GST Compliance',
//         services: [
//           { name: 'GST Audit', icon: '🔍' },
//           { name: 'GST Reconciliation', icon: '🔄' },
//           { name: 'GST Notice Reply', icon: '📧' },
//           { name: 'GST LUT Filing', icon: '📄' },
//           { name: 'GST Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Trademark & IPR': {
//     icon: '™️',
//     subCategories: [
//       {
//         name: 'Trademark',
//         services: [
//           { name: 'Trademark Search', icon: '🔍' },
//           { name: 'Trademark Registration', icon: '®️' },
//           { name: 'Trademark Objection Reply', icon: '⚖️' },
//           { name: 'Trademark Renewal', icon: '🔄' },
//           { name: 'Trademark Assignment', icon: '📄' }
//         ]
//       },
//       {
//         name: 'Copyright',
//         services: [
//           { name: 'Copyright Registration', icon: '©️' },
//           { name: 'Copyright Objection Handling', icon: '⚖️' }
//         ]
//       },
//       {
//         name: 'Patent',
//         services: [
//           { name: 'Patent Filing', icon: '📜' },
//           { name: 'Patent Search', icon: '🔍' },
//           { name: 'Patent Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Legal Services': {
//     icon: '⚖️',
//     subCategories: [
//       {
//         name: 'Legal Documentation',
//         services: [
//           { name: 'NDA Drafting', icon: '📄' },
//           { name: 'Partnership Agreement', icon: '🤝' },
//           { name: 'Employment Agreement', icon: '👔' },
//           { name: 'Vendor Agreement', icon: '📦' },
//           { name: 'Service Agreement', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Legal Advisory',
//         services: [
//           { name: 'Legal Consultation', icon: '💬' },
//           { name: 'Notice Drafting', icon: '📧' },
//           { name: 'Legal Notice Reply', icon: '⚖️' },
//           { name: 'Contract Review', icon: '🔍' }
//         ]
//       }
//     ]
//   },
//   'Licenses & Registrations': {
//     icon: '🏢',
//     subCategories: [
//       {
//         name: 'Business Licenses',
//         services: [
//           { name: 'Trade License', icon: '📜' },
//           { name: 'Shop & Establishment Registration', icon: '🏪' },
//           { name: 'Professional Tax Registration', icon: '💰' }
//         ]
//       },
//       {
//         name: 'Industry Licenses',
//         services: [
//           { name: 'MSME/Udyam Registration', icon: '🏭' },
//           { name: 'Labour License', icon: '👷' },
//           { name: 'Pollution Certificate', icon: '🌿' },
//           { name: 'Factory License', icon: '🏗️' }
//         ]
//       }
//     ]
//   },
//   'FSSAI': {
//     icon: '🍽️',
//     subCategories: [
//       {
//         name: 'Registration',
//         services: [
//           { name: 'Basic FSSAI Registration', icon: '📝' },
//           { name: 'State FSSAI License', icon: '🏛️' },
//           { name: 'Central FSSAI License', icon: '🇮🇳' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'FSSAI Renewal', icon: '🔄' },
//           { name: 'FSSAI Modification', icon: '✏️' },
//           { name: 'FSSAI Annual Return Filing', icon: '📊' }
//         ]
//       }
//     ]
//   },
//   'Import Export': {
//     icon: '🌍',
//     subCategories: [
//       {
//         name: 'IEC Services',
//         services: [
//           { name: 'IEC Registration', icon: '📝' },
//           { name: 'IEC Modification', icon: '✏️' },
//           { name: 'IEC Renewal', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'Export Compliance',
//         services: [
//           { name: 'RCMC Registration', icon: '📄' },
//           { name: 'Export Documentation', icon: '📋' },
//           { name: 'DGFT Services', icon: '🏛️' }
//         ]
//       }
//     ]
//   },
//   'Financial Services': {
//     icon: '💰',
//     subCategories: [
//       {
//         name: 'Accounting',
//         services: [
//           { name: 'Bookkeeping', icon: '📒' },
//           { name: 'Accounting Setup', icon: '📊' },
//           { name: 'Ledger Maintenance', icon: '📑' }
//         ]
//       },
//       {
//         name: 'Payroll',
//         services: [
//           { name: 'Payroll Processing', icon: '💳' },
//           { name: 'Salary Management', icon: '💰' },
//           { name: 'PF & ESI Compliance', icon: '🏦' }
//         ]
//       },
//       {
//         name: 'Advisory',
//         services: [
//           { name: 'Financial Planning', icon: '📈' },
//           { name: 'CFO Services', icon: '👔' },
//           { name: 'Business Financial Advisory', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Tax & Compliance': {
//     icon: '📑',
//     subCategories: [
//       {
//         name: 'Income Tax',
//         services: [
//           { name: 'Individual ITR Filing', icon: '👤' },
//           { name: 'Business ITR Filing', icon: '🏢' },
//           { name: 'Tax Planning', icon: '📊' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'TDS Filing', icon: '📝' },
//           { name: 'ROC Compliance', icon: '📋' },
//           { name: 'Annual Compliance', icon: '📅' }
//         ]
//       }
//     ]
//   },
//   'Digital Services': {
//     icon: '💻',
//     subCategories: [
//       {
//         name: 'Website Development',
//         services: [
//           { name: 'Business Website', icon: '🌐' },
//           { name: 'E-commerce Website', icon: '🛒' },
//           { name: 'Portfolio Website', icon: '🎨' },
//           { name: 'Landing Page Design', icon: '📄' }
//         ]
//       },
//       {
//         name: 'App Development',
//         services: [
//           { name: 'Android App Development', icon: '📱' },
//           { name: 'iOS App Development', icon: '🍎' },
//           { name: 'Flutter App Development', icon: '🚀' }
//         ]
//       },
//       {
//         name: 'Branding',
//         services: [
//           { name: 'Logo Design', icon: '🎯' },
//           { name: 'Brand Identity', icon: '🏷️' },
//           { name: 'Business Profile Design', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Graphic Design',
//         services: [
//           { name: 'Social Media Creatives', icon: '📱' },
//           { name: 'Posters & Flyers', icon: '🖼️' },
//           { name: 'Brochures', icon: '📒' },
//           { name: 'Banner Design', icon: '🎨' }
//         ]
//       },
//       {
//         name: 'Business Growth',
//         services: [
//           { name: 'Digital Transformation', icon: '🔄' },
//           { name: 'Online Presence Setup', icon: '🌐' },
//           { name: 'Business Automation', icon: '🤖' }
//         ]
//       }
//     ]
//   }
// };

// // Get main categories
// const mainCategories = Object.keys(serviceData);

// export default function Landing() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);
//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));

//   const goToSignup = () => navigate('/signup');

//   const toggleCategory = (category: string) => {
//     if (expandedCategory === category) {
//       setExpandedCategory(null);
//       setActiveTab('');
//     } else {
//       setExpandedCategory(category);
//       const subCats = serviceData[category]?.subCategories || [];
//       if (subCats.length > 0) {
//         setActiveTab(subCats[0].name);
//       }
//     }
//   };

//   const getCategoryIcon = (category: string) => {
//     return serviceData[category]?.icon || '📦';
//   };

//   const getSubCategories = (category: string) => {
//     return serviceData[category]?.subCategories || [];
//   };

//   const getServicesForTab = (category: string, tabName: string) => {
//     const subCats = serviceData[category]?.subCategories || [];
//     const found = subCats.find(s => s.name === tabName);
//     return found?.services || [];
//   };

//   const getCategoryName = (category: string) => {
//     return category;
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
//         {/* Online Legal India Header */}
//         <div className="text-center py-2">
//           <h1 className="text-2xl font-bold text-white">Online Legal India</h1>
//           <p className="text-sm text-gray-400">ODR - TM - Registrations & Compliance</p>
//         </div>

//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🔒</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">⚡</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🌍</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* ========== Popular Services ========== */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//             <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
//           </div>

//           {/* Level 1: Main Categories - Circle Icons */}
//           {/* Only show main categories if NO category is expanded */}
//           {!expandedCategory && (
//             <div className="grid grid-cols-4 gap-4">
//               {mainCategories.slice(0, 8).map((category) => {
//                 const icon = getCategoryIcon(category);
//                 return (
//                   <div key={category} className="flex flex-col items-center">
//                     <button
//                       onClick={() => toggleCategory(category)}
//                       className="w-full flex flex-col items-center gap-2 text-center group"
//                     >
//                       <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-2xl">
//                         {icon}
//                       </div>
//                       <span className="text-[10px] font-medium leading-tight line-clamp-2 text-white/80 group-hover:text-white transition">
//                         {category}
//                       </span>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* ========== Expanded View: Only show selected category ========== */}
//           <AnimatePresence>
//             {expandedCategory && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0, y: -10 }}
//                 animate={{ opacity: 1, height: 'auto', y: 0 }}
//                 exit={{ opacity: 0, height: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="mt-2"
//               >
//                 {/* Back button */}
//                 <button
//                   onClick={() => {
//                     setExpandedCategory(null);
//                     setActiveTab('');
//                   }}
//                   className="flex items-center gap-2 text-white/60 hover:text-white transition mb-4"
//                 >
//                   <ArrowLeft className="w-4 h-4" />
//                   <span className="text-sm">Back to all services</span>
//                 </button>

//                 {/* Selected Category Header */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">
//                     {getCategoryIcon(expandedCategory)}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{getCategoryName(expandedCategory)}</h3>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
//                   <div className="p-4">
//                     {/* Level 2: Sub-Category Tabs */}
//                     <div className="flex gap-2 flex-wrap mb-4">
//                       {getSubCategories(expandedCategory).map((sub) => (
//                         <button
//                           key={sub.name}
//                           onClick={() => setActiveTab(sub.name)}
//                           className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                             activeTab === sub.name
//                               ? 'bg-blue-600 text-white'
//                               : 'bg-white/5 text-white/60 hover:bg-white/10'
//                           }`}
//                         >
//                           {sub.name}
//                         </button>
//                       ))}
//                     </div>

//                     {/* ===== FIXED: Level 3: Services as Circle Icons ===== */}
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <div className="grid grid-cols-4 gap-4">
//                           {getServicesForTab(expandedCategory, activeTab).map((service) => {
//                             // Find the matching service in the main SERVICES array by title
//                             const matchedService = SERVICES.find(s => s.title === service.name);
                            
//                             return (
//                               <button
//                                 key={service.name}
//                                 onClick={() => {
//                                   if (matchedService) {
//                                     // Navigate to the detail page if the service exists in SERVICES
//                                     navigate(`/service/${matchedService.id}`);
//                                   } else {
//                                     // Fallback to search if the service is not in the main SERVICES list
//                                     navigate(`/search?q=${encodeURIComponent(service.name)}`);
//                                   }
//                                 }}
//                                 className="flex flex-col items-center gap-2 text-center group"
//                               >
//                                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-xl">
//                                   {service.icon}
//                                 </div>
//                                 <span className="text-[9px] font-medium leading-tight line-clamp-2 text-white/70 group-hover:text-white transition">
//                                   {service.name}
//                                 </span>
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     </AnimatePresence>

//                     {/* Less button */}
//                     <div className="pt-3 border-t border-white/10 mt-3">
//                       <button
//                         onClick={() => {
//                           setExpandedCategory(null);
//                           setActiveTab('');
//                         }}
//                         className="text-white/40 text-sm font-medium flex items-center gap-1 hover:text-white transition"
//                       >
//                         <ChevronUp className="w-4 h-4" />
//                         Less
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Premium */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-purple-500" /> Premium Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {premiumServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
//               >
//                 <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                   <ChevronRight className="w-4 h-4 text-white/20" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories Grid */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate(`/search?category=${cat}`)}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>
//         <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
//           <LogIn className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Login</span>
//         </button>
//         <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { 
//   Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ChevronDown,
//   Home, HelpCircle, LogIn, Menu, ChevronUp, ArrowLeft
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// // ========== FULL SERVICE DATA STRUCTURE ==========
// const serviceData = {
//   'Business Registration': {
//     icon: '📋',
//     subCategories: [
//       {
//         name: 'Company Registration',
//         services: [
//           { name: 'Private Limited Company Registration', icon: '🏢' },
//           { name: 'One Person Company (OPC) Registration', icon: '👤' },
//           { name: 'LLP Registration', icon: '🤝' },
//           { name: 'Public Limited Company Registration', icon: '📊' },
//           { name: 'Section 8 Company Registration', icon: '❤️' },
//           { name: 'Producer Company Registration', icon: '🌾' },
//           { name: 'Nidhi Company Registration', icon: '🏦' },
//           { name: 'Indian Subsidiary Registration', icon: '🌏' }
//         ]
//       },
//       {
//         name: 'Firm Registration',
//         services: [
//           { name: 'Partnership Firm Registration', icon: '👥' },
//           { name: 'Sole Proprietorship Registration', icon: '👤' }
//         ]
//       },
//       {
//         name: 'Startup Services',
//         services: [
//           { name: 'Startup India Registration', icon: '🚀' },
//           { name: 'DPIIT Recognition', icon: '✅' },
//           { name: 'Startup Compliance', icon: '📋' }
//         ]
//       }
//     ]
//   },
//   'GST Services': {
//     icon: '🧾',
//     subCategories: [
//       {
//         name: 'GST Registration',
//         services: [
//           { name: 'New GST Registration', icon: '📝' },
//           { name: 'GST Amendment', icon: '✏️' },
//           { name: 'GST Cancellation', icon: '❌' },
//           { name: 'GST Revocation', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'GST Returns',
//         services: [
//           { name: 'Monthly GST Return Filing', icon: '📅' },
//           { name: 'Quarterly GST Return Filing', icon: '📆' },
//           { name: 'Annual GST Return Filing', icon: '📊' },
//           { name: 'Nil Return Filing', icon: '0️⃣' }
//         ]
//       },
//       {
//         name: 'GST Compliance',
//         services: [
//           { name: 'GST Audit', icon: '🔍' },
//           { name: 'GST Reconciliation', icon: '🔄' },
//           { name: 'GST Notice Reply', icon: '📧' },
//           { name: 'GST LUT Filing', icon: '📄' },
//           { name: 'GST Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Trademark & IPR': {
//     icon: '™️',
//     subCategories: [
//       {
//         name: 'Trademark',
//         services: [
//           { name: 'Trademark Search', icon: '🔍' },
//           { name: 'Trademark Registration', icon: '®️' },
//           { name: 'Trademark Objection Reply', icon: '⚖️' },
//           { name: 'Trademark Renewal', icon: '🔄' },
//           { name: 'Trademark Assignment', icon: '📄' }
//         ]
//       },
//       {
//         name: 'Copyright',
//         services: [
//           { name: 'Copyright Registration', icon: '©️' },
//           { name: 'Copyright Objection Handling', icon: '⚖️' }
//         ]
//       },
//       {
//         name: 'Patent',
//         services: [
//           { name: 'Patent Filing', icon: '📜' },
//           { name: 'Patent Search', icon: '🔍' },
//           { name: 'Patent Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Legal Services': {
//     icon: '⚖️',
//     subCategories: [
//       {
//         name: 'Legal Documentation',
//         services: [
//           { name: 'NDA Drafting', icon: '📄' },
//           { name: 'Partnership Agreement', icon: '🤝' },
//           { name: 'Employment Agreement', icon: '👔' },
//           { name: 'Vendor Agreement', icon: '📦' },
//           { name: 'Service Agreement', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Legal Advisory',
//         services: [
//           { name: 'Legal Consultation', icon: '💬' },
//           { name: 'Notice Drafting', icon: '📧' },
//           { name: 'Legal Notice Reply', icon: '⚖️' },
//           { name: 'Contract Review', icon: '🔍' }
//         ]
//       }
//     ]
//   },
//   'Licenses & Registrations': {
//     icon: '🏢',
//     subCategories: [
//       {
//         name: 'Business Licenses',
//         services: [
//           { name: 'Trade License', icon: '📜' },
//           { name: 'Shop & Establishment Registration', icon: '🏪' },
//           { name: 'Professional Tax Registration', icon: '💰' }
//         ]
//       },
//       {
//         name: 'Industry Licenses',
//         services: [
//           { name: 'MSME/Udyam Registration', icon: '🏭' },
//           { name: 'Labour License', icon: '👷' },
//           { name: 'Pollution Certificate', icon: '🌿' },
//           { name: 'Factory License', icon: '🏗️' }
//         ]
//       }
//     ]
//   },
//   'FSSAI': {
//     icon: '🍽️',
//     subCategories: [
//       {
//         name: 'Registration',
//         services: [
//           { name: 'Basic FSSAI Registration', icon: '📝' },
//           { name: 'State FSSAI License', icon: '🏛️' },
//           { name: 'Central FSSAI License', icon: '🇮🇳' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'FSSAI Renewal', icon: '🔄' },
//           { name: 'FSSAI Modification', icon: '✏️' },
//           { name: 'FSSAI Annual Return Filing', icon: '📊' }
//         ]
//       }
//     ]
//   },
//   'Import Export': {
//     icon: '🌍',
//     subCategories: [
//       {
//         name: 'IEC Services',
//         services: [
//           { name: 'IEC Registration', icon: '📝' },
//           { name: 'IEC Modification', icon: '✏️' },
//           { name: 'IEC Renewal', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'Export Compliance',
//         services: [
//           { name: 'RCMC Registration', icon: '📄' },
//           { name: 'Export Documentation', icon: '📋' },
//           { name: 'DGFT Services', icon: '🏛️' }
//         ]
//       }
//     ]
//   },
//   'Financial Services': {
//     icon: '💰',
//     subCategories: [
//       {
//         name: 'Accounting',
//         services: [
//           { name: 'Bookkeeping', icon: '📒' },
//           { name: 'Accounting Setup', icon: '📊' },
//           { name: 'Ledger Maintenance', icon: '📑' }
//         ]
//       },
//       {
//         name: 'Payroll',
//         services: [
//           { name: 'Payroll Processing', icon: '💳' },
//           { name: 'Salary Management', icon: '💰' },
//           { name: 'PF & ESI Compliance', icon: '🏦' }
//         ]
//       },
//       {
//         name: 'Advisory',
//         services: [
//           { name: 'Financial Planning', icon: '📈' },
//           { name: 'CFO Services', icon: '👔' },
//           { name: 'Business Financial Advisory', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Tax & Compliance': {
//     icon: '📑',
//     subCategories: [
//       {
//         name: 'Income Tax',
//         services: [
//           { name: 'Individual ITR Filing', icon: '👤' },
//           { name: 'Business ITR Filing', icon: '🏢' },
//           { name: 'Tax Planning', icon: '📊' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'TDS Filing', icon: '📝' },
//           { name: 'ROC Compliance', icon: '📋' },
//           { name: 'Annual Compliance', icon: '📅' }
//         ]
//       }
//     ]
//   },
//   'Digital Services': {
//     icon: '💻',
//     subCategories: [
//       {
//         name: 'Website Development',
//         services: [
//           { name: 'Business Website', icon: '🌐' },
//           { name: 'E-commerce Website', icon: '🛒' },
//           { name: 'Portfolio Website', icon: '🎨' },
//           { name: 'Landing Page Design', icon: '📄' }
//         ]
//       },
//       {
//         name: 'App Development',
//         services: [
//           { name: 'Android App Development', icon: '📱' },
//           { name: 'iOS App Development', icon: '🍎' },
//           { name: 'Flutter App Development', icon: '🚀' }
//         ]
//       },
//       {
//         name: 'Branding',
//         services: [
//           { name: 'Logo Design', icon: '🎯' },
//           { name: 'Brand Identity', icon: '🏷️' },
//           { name: 'Business Profile Design', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Graphic Design',
//         services: [
//           { name: 'Social Media Creatives', icon: '📱' },
//           { name: 'Posters & Flyers', icon: '🖼️' },
//           { name: 'Brochures', icon: '📒' },
//           { name: 'Banner Design', icon: '🎨' }
//         ]
//       },
//       {
//         name: 'Business Growth',
//         services: [
//           { name: 'Digital Transformation', icon: '🔄' },
//           { name: 'Online Presence Setup', icon: '🌐' },
//           { name: 'Business Automation', icon: '🤖' }
//         ]
//       }
//     ]
//   }
// };

// // Get main categories
// const mainCategories = Object.keys(serviceData);

// export default function Landing() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);
//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));

//   const goToSignup = () => navigate('/signup');

//   const toggleCategory = (category: string) => {
//     if (expandedCategory === category) {
//       setExpandedCategory(null);
//       setActiveTab('');
//     } else {
//       setExpandedCategory(category);
//       const subCats = serviceData[category]?.subCategories || [];
//       if (subCats.length > 0) {
//         setActiveTab(subCats[0].name);
//       }
//     }
//   };

//   const getCategoryIcon = (category: string) => {
//     return serviceData[category]?.icon || '📦';
//   };

//   const getSubCategories = (category: string) => {
//     return serviceData[category]?.subCategories || [];
//   };

//   const getServicesForTab = (category: string, tabName: string) => {
//     const subCats = serviceData[category]?.subCategories || [];
//     const found = subCats.find(s => s.name === tabName);
//     return found?.services || [];
//   };

//   const getCategoryName = (category: string) => {
//     return category;
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* Notification */}
//          <button className="relative h-10 w-10 flex items-center justify-center rounded-xl text-white/80 hover:bg-white/10 transition-colors">
//           <Bell className="w-5 h-5" />
//          </button>
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
     

//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🔒</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">⚡</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🌍</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* ========== Popular Services ========== */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//             <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
//           </div>

//           {/* Level 1: Main Categories - Circle Icons */}
//           {/* Only show main categories if NO category is expanded */}
//           {!expandedCategory && (
//             <div className="grid grid-cols-4 gap-4">
//               {mainCategories.slice(0, 8).map((category) => {
//                 const icon = getCategoryIcon(category);
//                 return (
//                   <div key={category} className="flex flex-col items-center">
//                     <button
//                       onClick={() => toggleCategory(category)}
//                       className="w-full flex flex-col items-center gap-2 text-center group"
//                     >
//                       <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-2xl">
//                         {icon}
//                       </div>
//                       <span className="text-[10px] font-medium leading-tight line-clamp-2 text-white/80 group-hover:text-white transition">
//                         {category}
//                       </span>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* ========== Expanded View: Only show selected category ========== */}
//           <AnimatePresence>
//             {expandedCategory && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0, y: -10 }}
//                 animate={{ opacity: 1, height: 'auto', y: 0 }}
//                 exit={{ opacity: 0, height: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="mt-2"
//               >
//                 {/* Back button */}
//                 <button
//                   onClick={() => {
//                     setExpandedCategory(null);
//                     setActiveTab('');
//                   }}
//                   className="flex items-center gap-2 text-white/60 hover:text-white transition mb-4"
//                 >
//                   <ArrowLeft className="w-4 h-4" />
//                   <span className="text-sm">Back to all services</span>
//                 </button>

//                 {/* Selected Category Header */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">
//                     {getCategoryIcon(expandedCategory)}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{getCategoryName(expandedCategory)}</h3>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
//                   <div className="p-4">
//                     {/* Level 2: Sub-Category Tabs */}
//                     <div className="flex gap-2 flex-wrap mb-4">
//                       {getSubCategories(expandedCategory).map((sub) => (
//                         <button
//                           key={sub.name}
//                           onClick={() => setActiveTab(sub.name)}
//                           className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                             activeTab === sub.name
//                               ? 'bg-blue-600 text-white'
//                               : 'bg-white/5 text-white/60 hover:bg-white/10'
//                           }`}
//                         >
//                           {sub.name}
//                         </button>
//                       ))}
//                     </div>

//                     {/* ===== FIXED: Level 3: Services with Slug Fallback ===== */}
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <div className="grid grid-cols-4 gap-4">
//                           {getServicesForTab(expandedCategory, activeTab).map((service) => {
//                             // Try exact match first
//                             let matchedService = SERVICES.find(s => s.title === service.name);
                            
//                             // If not found, try case-insensitive trim match
//                             if (!matchedService) {
//                               matchedService = SERVICES.find(s => s.title.toLowerCase().trim() === service.name.toLowerCase().trim());
//                             }
                            
//                             return (
//                               <button
//                                 key={service.name}
//                                 onClick={() => {
//                                   if (matchedService) {
//                                     // Navigate to detail page if match found
//                                     navigate(`/service/${matchedService.id}`);
//                                   } else {
//                                     // FALLBACK: Construct a slug from the service name
//                                     // Example: "Private Limited Company Registration" → "private-limited-company-registration"
//                                     const slug = service.name
//                                       .toLowerCase()
//                                       .replace(/[^a-z0-9]+/g, '-') // Replace spaces & special chars with hyphens
//                                       .replace(/^-+|-+$/g, '');    // Trim leading/trailing hyphens
//                                     navigate(`/service/${slug}`);
//                                   }
//                                 }}
//                                 className="flex flex-col items-center gap-2 text-center group"
//                               >
//                                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-xl">
//                                   {service.icon}
//                                 </div>
//                                 <span className="text-[9px] font-medium leading-tight line-clamp-2 text-white/70 group-hover:text-white transition">
//                                   {service.name}
//                                 </span>
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     </AnimatePresence>

//                     {/* Less button */}
//                     <div className="pt-3 border-t border-white/10 mt-3">
//                       <button
//                         onClick={() => {
//                           setExpandedCategory(null);
//                           setActiveTab('');
//                         }}
//                         className="text-white/40 text-sm font-medium flex items-center gap-1 hover:text-white transition"
//                       >
//                         <ChevronUp className="w-4 h-4" />
//                         Less
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Premium */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-purple-500" /> Premium Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {premiumServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
//               >
//                 <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                   <ChevronRight className="w-4 h-4 text-white/20" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories Grid */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate(`/search?category=${cat}`)}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>
//         <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
//           <LogIn className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Login</span>
//         </button>
//         <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { 
//   Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ChevronDown,
//   Home, HelpCircle, LogIn, Menu, ChevronUp, ArrowLeft,
//   Bell   // 👈 added this
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// // ========== FULL SERVICE DATA STRUCTURE ==========
// const serviceData = {
//   'Business Registration': {
//     icon: '📋',
//     subCategories: [
//       {
//         name: 'Company Registration',
//         services: [
//           { name: 'Private Limited Company Registration', icon: '🏢' },
//           { name: 'One Person Company (OPC) Registration', icon: '👤' },
//           { name: 'LLP Registration', icon: '🤝' },
//           { name: 'Public Limited Company Registration', icon: '📊' },
//           { name: 'Section 8 Company Registration', icon: '❤️' },
//           { name: 'Producer Company Registration', icon: '🌾' },
//           { name: 'Nidhi Company Registration', icon: '🏦' },
//           { name: 'Indian Subsidiary Registration', icon: '🌏' }
//         ]
//       },
//       {
//         name: 'Firm Registration',
//         services: [
//           { name: 'Partnership Firm Registration', icon: '👥' },
//           { name: 'Sole Proprietorship Registration', icon: '👤' }
//         ]
//       },
//       {
//         name: 'Startup Services',
//         services: [
//           { name: 'Startup India Registration', icon: '🚀' },
//           { name: 'DPIIT Recognition', icon: '✅' },
//           { name: 'Startup Compliance', icon: '📋' }
//         ]
//       }
//     ]
//   },
//   'GST Services': {
//     icon: '🧾',
//     subCategories: [
//       {
//         name: 'GST Registration',
//         services: [
//           { name: 'New GST Registration', icon: '📝' },
//           { name: 'GST Amendment', icon: '✏️' },
//           { name: 'GST Cancellation', icon: '❌' },
//           { name: 'GST Revocation', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'GST Returns',
//         services: [
//           { name: 'Monthly GST Return Filing', icon: '📅' },
//           { name: 'Quarterly GST Return Filing', icon: '📆' },
//           { name: 'Annual GST Return Filing', icon: '📊' },
//           { name: 'Nil Return Filing', icon: '0️⃣' }
//         ]
//       },
//       {
//         name: 'GST Compliance',
//         services: [
//           { name: 'GST Audit', icon: '🔍' },
//           { name: 'GST Reconciliation', icon: '🔄' },
//           { name: 'GST Notice Reply', icon: '📧' },
//           { name: 'GST LUT Filing', icon: '📄' },
//           { name: 'GST Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Trademark & IPR': {
//     icon: '™️',
//     subCategories: [
//       {
//         name: 'Trademark',
//         services: [
//           { name: 'Trademark Search', icon: '🔍' },
//           { name: 'Trademark Registration', icon: '®️' },
//           { name: 'Trademark Objection Reply', icon: '⚖️' },
//           { name: 'Trademark Renewal', icon: '🔄' },
//           { name: 'Trademark Assignment', icon: '📄' }
//         ]
//       },
//       {
//         name: 'Copyright',
//         services: [
//           { name: 'Copyright Registration', icon: '©️' },
//           { name: 'Copyright Objection Handling', icon: '⚖️' }
//         ]
//       },
//       {
//         name: 'Patent',
//         services: [
//           { name: 'Patent Filing', icon: '📜' },
//           { name: 'Patent Search', icon: '🔍' },
//           { name: 'Patent Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Legal Services': {
//     icon: '⚖️',
//     subCategories: [
//       {
//         name: 'Legal Documentation',
//         services: [
//           { name: 'NDA Drafting', icon: '📄' },
//           { name: 'Partnership Agreement', icon: '🤝' },
//           { name: 'Employment Agreement', icon: '👔' },
//           { name: 'Vendor Agreement', icon: '📦' },
//           { name: 'Service Agreement', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Legal Advisory',
//         services: [
//           { name: 'Legal Consultation', icon: '💬' },
//           { name: 'Notice Drafting', icon: '📧' },
//           { name: 'Legal Notice Reply', icon: '⚖️' },
//           { name: 'Contract Review', icon: '🔍' }
//         ]
//       }
//     ]
//   },
//   'Licenses & Registrations': {
//     icon: '🏢',
//     subCategories: [
//       {
//         name: 'Business Licenses',
//         services: [
//           { name: 'Trade License', icon: '📜' },
//           { name: 'Shop & Establishment Registration', icon: '🏪' },
//           { name: 'Professional Tax Registration', icon: '💰' }
//         ]
//       },
//       {
//         name: 'Industry Licenses',
//         services: [
//           { name: 'MSME/Udyam Registration', icon: '🏭' },
//           { name: 'Labour License', icon: '👷' },
//           { name: 'Pollution Certificate', icon: '🌿' },
//           { name: 'Factory License', icon: '🏗️' }
//         ]
//       }
//     ]
//   },
//   'FSSAI': {
//     icon: '🍽️',
//     subCategories: [
//       {
//         name: 'Registration',
//         services: [
//           { name: 'Basic FSSAI Registration', icon: '📝' },
//           { name: 'State FSSAI License', icon: '🏛️' },
//           { name: 'Central FSSAI License', icon: '🇮🇳' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'FSSAI Renewal', icon: '🔄' },
//           { name: 'FSSAI Modification', icon: '✏️' },
//           { name: 'FSSAI Annual Return Filing', icon: '📊' }
//         ]
//       }
//     ]
//   },
//   'Import Export': {
//     icon: '🌍',
//     subCategories: [
//       {
//         name: 'IEC Services',
//         services: [
//           { name: 'IEC Registration', icon: '📝' },
//           { name: 'IEC Modification', icon: '✏️' },
//           { name: 'IEC Renewal', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'Export Compliance',
//         services: [
//           { name: 'RCMC Registration', icon: '📄' },
//           { name: 'Export Documentation', icon: '📋' },
//           { name: 'DGFT Services', icon: '🏛️' }
//         ]
//       }
//     ]
//   },
//   'Financial Services': {
//     icon: '💰',
//     subCategories: [
//       {
//         name: 'Accounting',
//         services: [
//           { name: 'Bookkeeping', icon: '📒' },
//           { name: 'Accounting Setup', icon: '📊' },
//           { name: 'Ledger Maintenance', icon: '📑' }
//         ]
//       },
//       {
//         name: 'Payroll',
//         services: [
//           { name: 'Payroll Processing', icon: '💳' },
//           { name: 'Salary Management', icon: '💰' },
//           { name: 'PF & ESI Compliance', icon: '🏦' }
//         ]
//       },
//       {
//         name: 'Advisory',
//         services: [
//           { name: 'Financial Planning', icon: '📈' },
//           { name: 'CFO Services', icon: '👔' },
//           { name: 'Business Financial Advisory', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Tax & Compliance': {
//     icon: '📑',
//     subCategories: [
//       {
//         name: 'Income Tax',
//         services: [
//           { name: 'Individual ITR Filing', icon: '👤' },
//           { name: 'Business ITR Filing', icon: '🏢' },
//           { name: 'Tax Planning', icon: '📊' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'TDS Filing', icon: '📝' },
//           { name: 'ROC Compliance', icon: '📋' },
//           { name: 'Annual Compliance', icon: '📅' }
//         ]
//       }
//     ]
//   },
//   'Digital Services': {
//     icon: '💻',
//     subCategories: [
//       {
//         name: 'Website Development',
//         services: [
//           { name: 'Business Website', icon: '🌐' },
//           { name: 'E-commerce Website', icon: '🛒' },
//           { name: 'Portfolio Website', icon: '🎨' },
//           { name: 'Landing Page Design', icon: '📄' }
//         ]
//       },
//       {
//         name: 'App Development',
//         services: [
//           { name: 'Android App Development', icon: '📱' },
//           { name: 'iOS App Development', icon: '🍎' },
//           { name: 'Flutter App Development', icon: '🚀' }
//         ]
//       },
//       {
//         name: 'Branding',
//         services: [
//           { name: 'Logo Design', icon: '🎯' },
//           { name: 'Brand Identity', icon: '🏷️' },
//           { name: 'Business Profile Design', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Graphic Design',
//         services: [
//           { name: 'Social Media Creatives', icon: '📱' },
//           { name: 'Posters & Flyers', icon: '🖼️' },
//           { name: 'Brochures', icon: '📒' },
//           { name: 'Banner Design', icon: '🎨' }
//         ]
//       },
//       {
//         name: 'Business Growth',
//         services: [
//           { name: 'Digital Transformation', icon: '🔄' },
//           { name: 'Online Presence Setup', icon: '🌐' },
//           { name: 'Business Automation', icon: '🤖' }
//         ]
//       }
//     ]
//   }
// };

// // Get main categories
// const mainCategories = Object.keys(serviceData);

// export default function Landing() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);
//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));

//   const goToSignup = () => navigate('/signup');

//   const toggleCategory = (category: string) => {
//     if (expandedCategory === category) {
//       setExpandedCategory(null);
//       setActiveTab('');
//     } else {
//       setExpandedCategory(category);
//       const subCats = serviceData[category]?.subCategories || [];
//       if (subCats.length > 0) {
//         setActiveTab(subCats[0].name);
//       }
//     }
//   };

//   const getCategoryIcon = (category: string) => {
//     return serviceData[category]?.icon || '📦';
//   };

//   const getSubCategories = (category: string) => {
//     return serviceData[category]?.subCategories || [];
//   };

//   const getServicesForTab = (category: string, tabName: string) => {
//     const subCats = serviceData[category]?.subCategories || [];
//     const found = subCats.find(s => s.name === tabName);
//     return found?.services || [];
//   };

//   const getCategoryName = (category: string) => {
//     return category;
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* Notification */}
//             <button className="relative h-10 w-10 flex items-center justify-center rounded-xl text-white/80 hover:bg-white/10 transition-colors">
//               <Bell className="w-5 h-5" />
//             </button>
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🔒</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">⚡</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🌍</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* ========== Popular Services ========== */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//             <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
//           </div>

//           {/* Level 1: Main Categories - Circle Icons */}
//           {/* Only show main categories if NO category is expanded */}
//           {!expandedCategory && (
//             <div className="grid grid-cols-4 gap-4">
//               {mainCategories.slice(0, 8).map((category) => {
//                 const icon = getCategoryIcon(category);
//                 return (
//                   <div key={category} className="flex flex-col items-center">
//                     <button
//                       onClick={() => toggleCategory(category)}
//                       className="w-full flex flex-col items-center gap-2 text-center group"
//                     >
//                       <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-2xl">
//                         {icon}
//                       </div>
//                       <span className="text-[10px] font-medium leading-tight line-clamp-2 text-white/80 group-hover:text-white transition">
//                         {category}
//                       </span>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* ========== Expanded View: Only show selected category ========== */}
//           <AnimatePresence>
//             {expandedCategory && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0, y: -10 }}
//                 animate={{ opacity: 1, height: 'auto', y: 0 }}
//                 exit={{ opacity: 0, height: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="mt-2"
//               >
//                 {/* Back button */}
//                 <button
//                   onClick={() => {
//                     setExpandedCategory(null);
//                     setActiveTab('');
//                   }}
//                   className="flex items-center gap-2 text-white/60 hover:text-white transition mb-4"
//                 >
//                   <ArrowLeft className="w-4 h-4" />
//                   <span className="text-sm">Back to all services</span>
//                 </button>

//                 {/* Selected Category Header */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">
//                     {getCategoryIcon(expandedCategory)}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{getCategoryName(expandedCategory)}</h3>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
//                   <div className="p-4">
//                     {/* Level 2: Sub-Category Tabs */}
//                     <div className="flex gap-2 flex-wrap mb-4">
//                       {getSubCategories(expandedCategory).map((sub) => (
//                         <button
//                           key={sub.name}
//                           onClick={() => setActiveTab(sub.name)}
//                           className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                             activeTab === sub.name
//                               ? 'bg-blue-600 text-white'
//                               : 'bg-white/5 text-white/60 hover:bg-white/10'
//                           }`}
//                         >
//                           {sub.name}
//                         </button>
//                       ))}
//                     </div>

//                     {/* ===== FIXED: Level 3: Services with Slug Fallback ===== */}
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <div className="grid grid-cols-4 gap-4">
//                           {getServicesForTab(expandedCategory, activeTab).map((service) => {
//                             // Try exact match first
//                             let matchedService = SERVICES.find(s => s.title === service.name);
                            
//                             // If not found, try case-insensitive trim match
//                             if (!matchedService) {
//                               matchedService = SERVICES.find(s => s.title.toLowerCase().trim() === service.name.toLowerCase().trim());
//                             }
                            
//                             return (
//                               <button
//                                 key={service.name}
//                                 onClick={() => {
//                                   if (matchedService) {
//                                     // Navigate to detail page if match found
//                                     navigate(`/service/${matchedService.id}`);
//                                   } else {
//                                     // FALLBACK: Construct a slug from the service name
//                                     // Example: "Private Limited Company Registration" → "private-limited-company-registration"
//                                     const slug = service.name
//                                       .toLowerCase()
//                                       .replace(/[^a-z0-9]+/g, '-') // Replace spaces & special chars with hyphens
//                                       .replace(/^-+|-+$/g, '');    // Trim leading/trailing hyphens
//                                     navigate(`/service/${slug}`);
//                                   }
//                                 }}
//                                 className="flex flex-col items-center gap-2 text-center group"
//                               >
//                                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-xl">
//                                   {service.icon}
//                                 </div>
//                                 <span className="text-[9px] font-medium leading-tight line-clamp-2 text-white/70 group-hover:text-white transition">
//                                   {service.name}
//                                 </span>
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     </AnimatePresence>

//                     {/* Less button */}
//                     <div className="pt-3 border-t border-white/10 mt-3">
//                       <button
//                         onClick={() => {
//                           setExpandedCategory(null);
//                           setActiveTab('');
//                         }}
//                         className="text-white/40 text-sm font-medium flex items-center gap-1 hover:text-white transition"
//                       >
//                         <ChevronUp className="w-4 h-4" />
//                         Less
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Premium */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-purple-500" /> Premium Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {premiumServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
//               >
//                 <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                   <ChevronRight className="w-4 h-4 text-white/20" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories Grid */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate(`/search?category=${cat}`)}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>
//         <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
//           <LogIn className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Login</span>
//         </button>
//         <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { 
//   Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ChevronDown,
//   Home, HelpCircle, LogIn, Menu, ChevronUp, ArrowLeft,
//   Bell
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { SERVICES, BUNDLES } from '../data/services';
// import { useAuth } from '../context/AuthContext';

// const SLIDES = [
//   {
//     title: "Grow Your Business\nWith Expert Help",
//     subtitle: "150+ Services at your fingertips",
//     gradient: "from-blue-600 to-purple-800",
//     icon: Rocket
//   },
//   {
//     title: "GST & Tax Filing\nMade Simple",
//     subtitle: "Expert CA assistance for your business",
//     gradient: "from-green-600 to-blue-800",
//     icon: Package
//   },
//   {
//     title: "Protect Your Brand\nWith Trademark",
//     subtitle: "Secure your brand identity today",
//     gradient: "from-orange-600 to-red-800",
//     icon: Flame
//   }
// ];

// // ========== FULL SERVICE DATA STRUCTURE ==========
// const serviceData = {
//   'Business Registration': {
//     icon: '📋',
//     subCategories: [
//       {
//         name: 'Company Registration',
//         services: [
//           { name: 'Private Limited Company Registration', icon: '🏢' },
//           { name: 'One Person Company (OPC) Registration', icon: '👤' },
//           { name: 'LLP Registration', icon: '🤝' },
//           { name: 'Public Limited Company Registration', icon: '📊' },
//           { name: 'Section 8 Company Registration', icon: '❤️' },
//           { name: 'Producer Company Registration', icon: '🌾' },
//           { name: 'Nidhi Company Registration', icon: '🏦' },
//           { name: 'Indian Subsidiary Registration', icon: '🌏' }
//         ]
//       },
//       {
//         name: 'Firm Registration',
//         services: [
//           { name: 'Partnership Firm Registration', icon: '👥' },
//           { name: 'Sole Proprietorship Registration', icon: '👤' }
//         ]
//       },
//       {
//         name: 'Startup Services',
//         services: [
//           { name: 'Startup India Registration', icon: '🚀' },
//           { name: 'DPIIT Recognition', icon: '✅' },
//           { name: 'Startup Compliance', icon: '📋' }
//         ]
//       }
//     ]
//   },
//   'GST Services': {
//     icon: '🧾',
//     subCategories: [
//       {
//         name: 'GST Registration',
//         services: [
//           { name: 'New GST Registration', icon: '📝' },
//           { name: 'GST Amendment', icon: '✏️' },
//           { name: 'GST Cancellation', icon: '❌' },
//           { name: 'GST Revocation', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'GST Returns',
//         services: [
//           { name: 'Monthly GST Return Filing', icon: '📅' },
//           { name: 'Quarterly GST Return Filing', icon: '📆' },
//           { name: 'Annual GST Return Filing', icon: '📊' },
//           { name: 'Nil Return Filing', icon: '0️⃣' }
//         ]
//       },
//       {
//         name: 'GST Compliance',
//         services: [
//           { name: 'GST Audit', icon: '🔍' },
//           { name: 'GST Reconciliation', icon: '🔄' },
//           { name: 'GST Notice Reply', icon: '📧' },
//           { name: 'GST LUT Filing', icon: '📄' },
//           { name: 'GST Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Trademark & IPR': {
//     icon: '™️',
//     subCategories: [
//       {
//         name: 'Trademark',
//         services: [
//           { name: 'Trademark Search', icon: '🔍' },
//           { name: 'Trademark Registration', icon: '®️' },
//           { name: 'Trademark Objection Reply', icon: '⚖️' },
//           { name: 'Trademark Renewal', icon: '🔄' },
//           { name: 'Trademark Assignment', icon: '📄' }
//         ]
//       },
//       {
//         name: 'Copyright',
//         services: [
//           { name: 'Copyright Registration', icon: '©️' },
//           { name: 'Copyright Objection Handling', icon: '⚖️' }
//         ]
//       },
//       {
//         name: 'Patent',
//         services: [
//           { name: 'Patent Filing', icon: '📜' },
//           { name: 'Patent Search', icon: '🔍' },
//           { name: 'Patent Consultation', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Legal Services': {
//     icon: '⚖️',
//     subCategories: [
//       {
//         name: 'Legal Documentation',
//         services: [
//           { name: 'NDA Drafting', icon: '📄' },
//           { name: 'Partnership Agreement', icon: '🤝' },
//           { name: 'Employment Agreement', icon: '👔' },
//           { name: 'Vendor Agreement', icon: '📦' },
//           { name: 'Service Agreement', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Legal Advisory',
//         services: [
//           { name: 'Legal Consultation', icon: '💬' },
//           { name: 'Notice Drafting', icon: '📧' },
//           { name: 'Legal Notice Reply', icon: '⚖️' },
//           { name: 'Contract Review', icon: '🔍' }
//         ]
//       }
//     ]
//   },
//   'Licenses & Registrations': {
//     icon: '🏢',
//     subCategories: [
//       {
//         name: 'Business Licenses',
//         services: [
//           { name: 'Trade License', icon: '📜' },
//           { name: 'Shop & Establishment Registration', icon: '🏪' },
//           { name: 'Professional Tax Registration', icon: '💰' }
//         ]
//       },
//       {
//         name: 'Industry Licenses',
//         services: [
//           { name: 'MSME/Udyam Registration', icon: '🏭' },
//           { name: 'Labour License', icon: '👷' },
//           { name: 'Pollution Certificate', icon: '🌿' },
//           { name: 'Factory License', icon: '🏗️' }
//         ]
//       }
//     ]
//   },
//   'FSSAI': {
//     icon: '🍽️',
//     subCategories: [
//       {
//         name: 'Registration',
//         services: [
//           { name: 'Basic FSSAI Registration', icon: '📝' },
//           { name: 'State FSSAI License', icon: '🏛️' },
//           { name: 'Central FSSAI License', icon: '🇮🇳' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'FSSAI Renewal', icon: '🔄' },
//           { name: 'FSSAI Modification', icon: '✏️' },
//           { name: 'FSSAI Annual Return Filing', icon: '📊' }
//         ]
//       }
//     ]
//   },
//   'Import Export': {
//     icon: '🌍',
//     subCategories: [
//       {
//         name: 'IEC Services',
//         services: [
//           { name: 'IEC Registration', icon: '📝' },
//           { name: 'IEC Modification', icon: '✏️' },
//           { name: 'IEC Renewal', icon: '🔄' }
//         ]
//       },
//       {
//         name: 'Export Compliance',
//         services: [
//           { name: 'RCMC Registration', icon: '📄' },
//           { name: 'Export Documentation', icon: '📋' },
//           { name: 'DGFT Services', icon: '🏛️' }
//         ]
//       }
//     ]
//   },
//   'Financial Services': {
//     icon: '💰',
//     subCategories: [
//       {
//         name: 'Accounting',
//         services: [
//           { name: 'Bookkeeping', icon: '📒' },
//           { name: 'Accounting Setup', icon: '📊' },
//           { name: 'Ledger Maintenance', icon: '📑' }
//         ]
//       },
//       {
//         name: 'Payroll',
//         services: [
//           { name: 'Payroll Processing', icon: '💳' },
//           { name: 'Salary Management', icon: '💰' },
//           { name: 'PF & ESI Compliance', icon: '🏦' }
//         ]
//       },
//       {
//         name: 'Advisory',
//         services: [
//           { name: 'Financial Planning', icon: '📈' },
//           { name: 'CFO Services', icon: '👔' },
//           { name: 'Business Financial Advisory', icon: '💬' }
//         ]
//       }
//     ]
//   },
//   'Tax & Compliance': {
//     icon: '📑',
//     subCategories: [
//       {
//         name: 'Income Tax',
//         services: [
//           { name: 'Individual ITR Filing', icon: '👤' },
//           { name: 'Business ITR Filing', icon: '🏢' },
//           { name: 'Tax Planning', icon: '📊' }
//         ]
//       },
//       {
//         name: 'Compliance',
//         services: [
//           { name: 'TDS Filing', icon: '📝' },
//           { name: 'ROC Compliance', icon: '📋' },
//           { name: 'Annual Compliance', icon: '📅' }
//         ]
//       }
//     ]
//   },
//   'Digital Services': {
//     icon: '💻',
//     subCategories: [
//       {
//         name: 'Website Development',
//         services: [
//           { name: 'Business Website', icon: '🌐' },
//           { name: 'E-commerce Website', icon: '🛒' },
//           { name: 'Portfolio Website', icon: '🎨' },
//           { name: 'Landing Page Design', icon: '📄' }
//         ]
//       },
//       {
//         name: 'App Development',
//         services: [
//           { name: 'Android App Development', icon: '📱' },
//           { name: 'iOS App Development', icon: '🍎' },
//           { name: 'Flutter App Development', icon: '🚀' }
//         ]
//       },
//       {
//         name: 'Branding',
//         services: [
//           { name: 'Logo Design', icon: '🎯' },
//           { name: 'Brand Identity', icon: '🏷️' },
//           { name: 'Business Profile Design', icon: '📋' }
//         ]
//       },
//       {
//         name: 'Graphic Design',
//         services: [
//           { name: 'Social Media Creatives', icon: '📱' },
//           { name: 'Posters & Flyers', icon: '🖼️' },
//           { name: 'Brochures', icon: '📒' },
//           { name: 'Banner Design', icon: '🎨' }
//         ]
//       },
//       {
//         name: 'Business Growth',
//         services: [
//           { name: 'Digital Transformation', icon: '🔄' },
//           { name: 'Online Presence Setup', icon: '🌐' },
//           { name: 'Business Automation', icon: '🤖' }
//         ]
//       }
//     ]
//   }
// };

// // Get main categories
// const mainCategories = Object.keys(serviceData);

// export default function Landing() {
//   const { user } = useAuth(); // 👈 ADDED
//   const navigate = useNavigate();

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);
//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));

//   const goToSignup = () => navigate('/signup');

//   const toggleCategory = (category: string) => {
//     if (expandedCategory === category) {
//       setExpandedCategory(null);
//       setActiveTab('');
//     } else {
//       setExpandedCategory(category);
//       const subCats = serviceData[category]?.subCategories || [];
//       if (subCats.length > 0) {
//         setActiveTab(subCats[0].name);
//       }
//     }
//   };

//   const getCategoryIcon = (category: string) => {
//     return serviceData[category]?.icon || '📦';
//   };

//   const getSubCategories = (category: string) => {
//     return serviceData[category]?.subCategories || [];
//   };

//   const getServicesForTab = (category: string, tabName: string) => {
//     const subCats = serviceData[category]?.subCategories || [];
//     const found = subCats.find(s => s.name === tabName);
//     return found?.services || [];
//   };

//   const getCategoryName = (category: string) => {
//     return category;
//   };

//   // 👇 Helper to get user initial
//   const getUserInitial = () => {
//     if (user?.username) return user.username.charAt(0).toUpperCase();
//     if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
//     if (user?.email) return user.email.charAt(0).toUpperCase();
//     return 'U';
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//         <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
//               C
//             </div>
//             <span className="font-bold text-lg tracking-tight">File Seva</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* Notification */}
//             <button className="relative h-10 w-10 flex items-center justify-center rounded-xl text-white/80 hover:bg-white/10 transition-colors">
//               <Bell className="w-5 h-5" />
//             </button>
//             <Link
//               to="/login"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
//         {/* Hero Banner Slider */}
//         <div className="relative h-52 rounded-3xl overflow-hidden">
//           <AnimatePresence mode="wait">
//             {(() => {
//               const slide = SLIDES[currentSlide];
//               const Icon = slide.icon;
//               return (
//                 <motion.div
//                   key={currentSlide}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//                 >
//                   <div className="relative z-10">
//                     <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
//                     <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
//                     <button
//                       onClick={goToSignup}
//                       className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                   <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                     <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </AnimatePresence>

//           <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//             {SLIDES.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🔒</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">⚡</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
//           </div>
//           <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl">
//             <span className="text-2xl">🌍</span>
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
//           </div>
//         </div>

//         {/* ========== Popular Services ========== */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//             </h2>
//             <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
//           </div>

//           {/* Level 1: Main Categories - Circle Icons */}
//           {!expandedCategory && (
//             <div className="grid grid-cols-4 gap-4">
//               {mainCategories.slice(0, 8).map((category) => {
//                 const icon = getCategoryIcon(category);
//                 return (
//                   <div key={category} className="flex flex-col items-center">
//                     <button
//                       onClick={() => toggleCategory(category)}
//                       className="w-full flex flex-col items-center gap-2 text-center group"
//                     >
//                       <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-2xl">
//                         {icon}
//                       </div>
//                       <span className="text-[10px] font-medium leading-tight line-clamp-2 text-white/80 group-hover:text-white transition">
//                         {category}
//                       </span>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* ========== Expanded View ========== */}
//           <AnimatePresence>
//             {expandedCategory && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0, y: -10 }}
//                 animate={{ opacity: 1, height: 'auto', y: 0 }}
//                 exit={{ opacity: 0, height: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="mt-2"
//               >
//                 <button
//                   onClick={() => {
//                     setExpandedCategory(null);
//                     setActiveTab('');
//                   }}
//                   className="flex items-center gap-2 text-white/60 hover:text-white transition mb-4"
//                 >
//                   <ArrowLeft className="w-4 h-4" />
//                   <span className="text-sm">Back to all services</span>
//                 </button>

//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">
//                     {getCategoryIcon(expandedCategory)}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{getCategoryName(expandedCategory)}</h3>
//                 </div>

//                 <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
//                   <div className="p-4">
//                     <div className="flex gap-2 flex-wrap mb-4">
//                       {getSubCategories(expandedCategory).map((sub) => (
//                         <button
//                           key={sub.name}
//                           onClick={() => setActiveTab(sub.name)}
//                           className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                             activeTab === sub.name
//                               ? 'bg-blue-600 text-white'
//                               : 'bg-white/5 text-white/60 hover:bg-white/10'
//                           }`}
//                         >
//                           {sub.name}
//                         </button>
//                       ))}
//                     </div>

//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -5 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <div className="grid grid-cols-4 gap-4">
//                           {getServicesForTab(expandedCategory, activeTab).map((service) => {
//                             let matchedService = SERVICES.find(s => s.title === service.name);
//                             if (!matchedService) {
//                               matchedService = SERVICES.find(s => s.title.toLowerCase().trim() === service.name.toLowerCase().trim());
//                             }
//                             return (
//                               <button
//                                 key={service.name}
//                                 onClick={() => {
//                                   if (matchedService) {
//                                     navigate(`/service/${matchedService.id}`);
//                                   } else {
//                                     const slug = service.name
//                                       .toLowerCase()
//                                       .replace(/[^a-z0-9]+/g, '-')
//                                       .replace(/^-+|-+$/g, '');
//                                     navigate(`/service/${slug}`);
//                                   }
//                                 }}
//                                 className="flex flex-col items-center gap-2 text-center group"
//                               >
//                                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-xl">
//                                   {service.icon}
//                                 </div>
//                                 <span className="text-[9px] font-medium leading-tight line-clamp-2 text-white/70 group-hover:text-white transition">
//                                   {service.name}
//                                 </span>
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     </AnimatePresence>

//                     <div className="pt-3 border-t border-white/10 mt-3">
//                       <button
//                         onClick={() => {
//                           setExpandedCategory(null);
//                           setActiveTab('');
//                         }}
//                         className="text-white/40 text-sm font-medium flex items-center gap-1 hover:text-white transition"
//                       >
//                         <ChevronUp className="w-4 h-4" />
//                         Less
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </section>

//         {/* HOT Services */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {hotServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[240px] text-left bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                   <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-blue-400">₹{service.price}</span>
//                   <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Trending */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//             </h2>
//           </div>
//           <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//             {trendingServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="min-w-[160px] text-left bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                   <Rocket className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//                 <span className="text-xs text-white/40">₹{service.price}</span>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Premium */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold flex items-center gap-2">
//               <Star className="w-5 h-5 text-purple-500" /> Premium Services
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {premiumServices.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => navigate(`/service/${service.id}`)}
//                 className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
//               >
//                 <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                   <ChevronRight className="w-4 h-4 text-white/20" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Bundles */}
//         <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Special Bundles</h2>
//             <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//           </div>
//           <div className="space-y-4">
//             {BUNDLES.map((bundle) => (
//               <button
//                 key={bundle.id}
//                 onClick={goToSignup}
//                 className="w-full text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
//               >
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                   <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                   <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Categories Grid */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => navigate(`/search?category=${cat}`)}
//                 className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
//               >
//                 <span className="text-sm font-medium">{cat}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Final CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//           <h2 className="text-2xl font-bold">Ready to get started?</h2>
//           <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
//           <button
//             onClick={goToSignup}
//             className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//           >
//             Create Free Account
//           </button>
//         </div>
//       </main>

//       {/* ========== BOTTOM NAVIGATION (UPDATED) ========== */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>

//         {/* 👇 Services – always visible */}
//         <button onClick={() => navigate('/search')} className="flex flex-col items-center gap-1">
//           <Package className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Services</span>
//         </button>

//         {/* 👇 Profile (avatar) if logged in, otherwise Login */}
//         {user ? (
//           <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-lg">
//               {getUserInitial()}
//             </div>
//             <span className="text-[10px] font-medium text-white/40">Profile</span>
//           </button>
//         ) : (
//           <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
//             <LogIn className="w-6 h-6 text-white/40" />
//             <span className="text-[10px] font-medium text-white/40">Login</span>
//           </button>
//         )}

//         <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Rocket, TrendingUp, Flame, Star, Package, ChevronRight, ChevronDown,
  Home, HelpCircle, LogIn, Menu, ChevronUp, ArrowLeft,
  Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, BUNDLES } from '../data/services';
import { useAuth } from '../context/AuthContext';

const SLIDES = [
  {
    title: "Grow Your Business\nWith Expert Help",
    subtitle: "150+ Services at your fingertips",
    gradient: "from-blue-600 to-purple-800",
    icon: Rocket
  },
  {
    title: "GST & Tax Filing\nMade Simple",
    subtitle: "Expert CA assistance for your business",
    gradient: "from-green-600 to-blue-800",
    icon: Package
  },
  {
    title: "Protect Your Brand\nWith Trademark",
    subtitle: "Secure your brand identity today",
    gradient: "from-orange-600 to-red-800",
    icon: Flame
  }
];

// ========== FULL SERVICE DATA STRUCTURE ==========
const serviceData = {
  'Business Registration': {
    icon: '📋',
    subCategories: [
      {
        name: 'Company Registration',
        services: [
          { name: 'Private Limited Company Registration', icon: '🏢' },
          { name: 'One Person Company (OPC) Registration', icon: '👤' },
          { name: 'LLP Registration', icon: '🤝' },
          { name: 'Public Limited Company Registration', icon: '📊' },
          { name: 'Section 8 Company Registration', icon: '❤️' },
          { name: 'Producer Company Registration', icon: '🌾' },
          { name: 'Nidhi Company Registration', icon: '🏦' },
          { name: 'Indian Subsidiary Registration', icon: '🌏' }
        ]
      },
      {
        name: 'Firm Registration',
        services: [
          { name: 'Partnership Firm Registration', icon: '👥' },
          { name: 'Sole Proprietorship Registration', icon: '👤' }
        ]
      },
      {
        name: 'Startup Services',
        services: [
          { name: 'Startup India Registration', icon: '🚀' },
          { name: 'DPIIT Recognition', icon: '✅' },
          { name: 'Startup Compliance', icon: '📋' }
        ]
      }
    ]
  },
  'GST Services': {
    icon: '🧾',
    subCategories: [
      {
        name: 'GST Registration',
        services: [
          { name: 'New GST Registration', icon: '📝' },
          { name: 'GST Amendment', icon: '✏️' },
          { name: 'GST Cancellation', icon: '❌' },
          { name: 'GST Revocation', icon: '🔄' }
        ]
      },
      {
        name: 'GST Returns',
        services: [
          { name: 'Monthly GST Return Filing', icon: '📅' },
          { name: 'Quarterly GST Return Filing', icon: '📆' },
          { name: 'Annual GST Return Filing', icon: '📊' },
          { name: 'Nil Return Filing', icon: '0️⃣' }
        ]
      },
      {
        name: 'GST Compliance',
        services: [
          { name: 'GST Audit', icon: '🔍' },
          { name: 'GST Reconciliation', icon: '🔄' },
          { name: 'GST Notice Reply', icon: '📧' },
          { name: 'GST LUT Filing', icon: '📄' },
          { name: 'GST Consultation', icon: '💬' }
        ]
      }
    ]
  },
  'Trademark & IPR': {
    icon: '™️',
    subCategories: [
      {
        name: 'Trademark',
        services: [
          { name: 'Trademark Search', icon: '🔍' },
          { name: 'Trademark Registration', icon: '®️' },
          { name: 'Trademark Objection Reply', icon: '⚖️' },
          { name: 'Trademark Renewal', icon: '🔄' },
          { name: 'Trademark Assignment', icon: '📄' }
        ]
      },
      {
        name: 'Copyright',
        services: [
          { name: 'Copyright Registration', icon: '©️' },
          { name: 'Copyright Objection Handling', icon: '⚖️' }
        ]
      },
      {
        name: 'Patent',
        services: [
          { name: 'Patent Filing', icon: '📜' },
          { name: 'Patent Search', icon: '🔍' },
          { name: 'Patent Consultation', icon: '💬' }
        ]
      }
    ]
  },
  'Legal Services': {
    icon: '⚖️',
    subCategories: [
      {
        name: 'Legal Documentation',
        services: [
          { name: 'NDA Drafting', icon: '📄' },
          { name: 'Partnership Agreement', icon: '🤝' },
          { name: 'Employment Agreement', icon: '👔' },
          { name: 'Vendor Agreement', icon: '📦' },
          { name: 'Service Agreement', icon: '📋' }
        ]
      },
      {
        name: 'Legal Advisory',
        services: [
          { name: 'Legal Consultation', icon: '💬' },
          { name: 'Notice Drafting', icon: '📧' },
          { name: 'Legal Notice Reply', icon: '⚖️' },
          { name: 'Contract Review', icon: '🔍' }
        ]
      }
    ]
  },
  'Licenses & Registrations': {
    icon: '🏢',
    subCategories: [
      {
        name: 'Business Licenses',
        services: [
          { name: 'Trade License', icon: '📜' },
          { name: 'Shop & Establishment Registration', icon: '🏪' },
          { name: 'Professional Tax Registration', icon: '💰' }
        ]
      },
      {
        name: 'Industry Licenses',
        services: [
          { name: 'MSME/Udyam Registration', icon: '🏭' },
          { name: 'Labour License', icon: '👷' },
          { name: 'Pollution Certificate', icon: '🌿' },
          { name: 'Factory License', icon: '🏗️' }
        ]
      }
    ]
  },
  'FSSAI': {
    icon: '🍽️',
    subCategories: [
      {
        name: 'Registration',
        services: [
          { name: 'Basic FSSAI Registration', icon: '📝' },
          { name: 'State FSSAI License', icon: '🏛️' },
          { name: 'Central FSSAI License', icon: '🇮🇳' }
        ]
      },
      {
        name: 'Compliance',
        services: [
          { name: 'FSSAI Renewal', icon: '🔄' },
          { name: 'FSSAI Modification', icon: '✏️' },
          { name: 'FSSAI Annual Return Filing', icon: '📊' }
        ]
      }
    ]
  },
  'Import Export': {
    icon: '🌍',
    subCategories: [
      {
        name: 'IEC Services',
        services: [
          { name: 'IEC Registration', icon: '📝' },
          { name: 'IEC Modification', icon: '✏️' },
          { name: 'IEC Renewal', icon: '🔄' }
        ]
      },
      {
        name: 'Export Compliance',
        services: [
          { name: 'RCMC Registration', icon: '📄' },
          { name: 'Export Documentation', icon: '📋' },
          { name: 'DGFT Services', icon: '🏛️' }
        ]
      }
    ]
  },
  'Financial Services': {
    icon: '💰',
    subCategories: [
      {
        name: 'Accounting',
        services: [
          { name: 'Bookkeeping', icon: '📒' },
          { name: 'Accounting Setup', icon: '📊' },
          { name: 'Ledger Maintenance', icon: '📑' }
        ]
      },
      {
        name: 'Payroll',
        services: [
          { name: 'Payroll Processing', icon: '💳' },
          { name: 'Salary Management', icon: '💰' },
          { name: 'PF & ESI Compliance', icon: '🏦' }
        ]
      },
      {
        name: 'Advisory',
        services: [
          { name: 'Financial Planning', icon: '📈' },
          { name: 'CFO Services', icon: '👔' },
          { name: 'Business Financial Advisory', icon: '💬' }
        ]
      }
    ]
  },
  'Tax & Compliance': {
    icon: '📑',
    subCategories: [
      {
        name: 'Income Tax',
        services: [
          { name: 'Individual ITR Filing', icon: '👤' },
          { name: 'Business ITR Filing', icon: '🏢' },
          { name: 'Tax Planning', icon: '📊' }
        ]
      },
      {
        name: 'Compliance',
        services: [
          { name: 'TDS Filing', icon: '📝' },
          { name: 'ROC Compliance', icon: '📋' },
          { name: 'Annual Compliance', icon: '📅' }
        ]
      }
    ]
  },
  'Digital Services': {
    icon: '💻',
    subCategories: [
      {
        name: 'Website Development',
        services: [
          { name: 'Business Website', icon: '🌐' },
          { name: 'E-commerce Website', icon: '🛒' },
          { name: 'Portfolio Website', icon: '🎨' },
          { name: 'Landing Page Design', icon: '📄' }
        ]
      },
      {
        name: 'App Development',
        services: [
          { name: 'Android App Development', icon: '📱' },
          { name: 'iOS App Development', icon: '🍎' },
          { name: 'Flutter App Development', icon: '🚀' }
        ]
      },
      {
        name: 'Branding',
        services: [
          { name: 'Logo Design', icon: '🎯' },
          { name: 'Brand Identity', icon: '🏷️' },
          { name: 'Business Profile Design', icon: '📋' }
        ]
      },
      {
        name: 'Graphic Design',
        services: [
          { name: 'Social Media Creatives', icon: '📱' },
          { name: 'Posters & Flyers', icon: '🖼️' },
          { name: 'Brochures', icon: '📒' },
          { name: 'Banner Design', icon: '🎨' }
        ]
      },
      {
        name: 'Business Growth',
        services: [
          { name: 'Digital Transformation', icon: '🔄' },
          { name: 'Online Presence Setup', icon: '🌐' },
          { name: 'Business Automation', icon: '🤖' }
        ]
      }
    ]
  }
};

// Get main categories
const mainCategories = Object.keys(serviceData);

export default function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const hotServices = SERVICES.filter(s => s.tags.includes('hot')).slice(0, 6);
  const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
  const premiumServices = SERVICES.filter(s => s.tags.includes('premium')).slice(0, 4);
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  const goToSignup = () => navigate('/signup');

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
      setActiveTab('');
    } else {
      setExpandedCategory(category);
      const subCats = serviceData[category]?.subCategories || [];
      if (subCats.length > 0) {
        setActiveTab(subCats[0].name);
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    return serviceData[category]?.icon || '📦';
  };

  const getSubCategories = (category: string) => {
    return serviceData[category]?.subCategories || [];
  };

  const getServicesForTab = (category: string, tabName: string) => {
    const subCats = serviceData[category]?.subCategories || [];
    const found = subCats.find(s => s.name === tabName);
    return found?.services || [];
  };

  const getCategoryName = (category: string) => {
    return category;
  };

  // Helper to get user initial
  const getUserInitial = () => {
    if (user?.username) return user.username.charAt(0).toUpperCase();
    if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return 'U';
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
              C
            </div>
            <span className="font-bold text-lg tracking-tight">File Seva</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Notification */}
            <button className="relative h-10 w-10 flex items-center justify-center rounded-xl text-white/80 hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <Link
              to="/login"
              className="px-4 h-10 flex items-center rounded-xl text-sm font-bold text-white/80 hover:bg-white/10 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 h-10 flex items-center rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6 pb-24">
        {/* Hero Banner Slider - unchanged */}
        <div className="relative h-52 rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            {(() => {
              const slide = SLIDES[currentSlide];
              const Icon = slide.icon;
              return (
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
                >
                  <div className="relative z-10">
                    <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">{slide.title}</h1>
                    <p className="text-white/60 text-sm mb-6">{slide.subtitle}</p>
                    <button
                      onClick={goToSignup}
                      className="px-6 py-3 bg-white text-black rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-transform"
                    >
                      Get Started
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                    <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          <div className="absolute bottom-4 left-8 flex gap-2 z-20">
            {SLIDES.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges - glass effect */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <span className="text-2xl">🔒</span>
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <span className="text-2xl">⚡</span>
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Fast</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <span className="text-2xl">🌍</span>
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Trusted</span>
          </div>
        </div>

        {/* ========== Popular Services – Glass Card ========== */}
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" /> Popular Services
            </h2>
            <Link to="/search" className="text-blue-400 text-sm font-medium hover:text-blue-300">View All</Link>
          </div>

          {/* Level 1: Main Categories - Circle Icons */}
          {!expandedCategory && (
            <div className="grid grid-cols-4 gap-4">
              {mainCategories.slice(0, 8).map((category) => {
                const icon = getCategoryIcon(category);
                return (
                  <div key={category} className="flex flex-col items-center">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full flex flex-col items-center gap-2 text-center group"
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-sm group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-2xl">
                        {icon}
                      </div>
                      <span className="text-[10px] font-medium leading-tight line-clamp-2 text-white/80 group-hover:text-white transition">
                        {category}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* ========== Expanded View ========== */}
          <AnimatePresence>
            {expandedCategory && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-2"
              >
                <button
                  onClick={() => {
                    setExpandedCategory(null);
                    setActiveTab('');
                  }}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back to all services</span>
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-2xl">
                    {getCategoryIcon(expandedCategory)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{getCategoryName(expandedCategory)}</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                  <div className="p-4">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {getSubCategories(expandedCategory).map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => setActiveTab(sub.name)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                            activeTab === sub.name
                              ? 'bg-blue-600 text-white'
                              : 'bg-white/5 text-white/60 hover:bg-white/10'
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="grid grid-cols-4 gap-4">
                          {getServicesForTab(expandedCategory, activeTab).map((service) => {
                            let matchedService = SERVICES.find(s => s.title === service.name);
                            if (!matchedService) {
                              matchedService = SERVICES.find(s => s.title.toLowerCase().trim() === service.name.toLowerCase().trim());
                            }
                            return (
                              <button
                                key={service.name}
                                onClick={() => {
                                  if (matchedService) {
                                    navigate(`/service/${matchedService.id}`);
                                  } else {
                                    const slug = service.name
                                      .toLowerCase()
                                      .replace(/[^a-z0-9]+/g, '-')
                                      .replace(/^-+|-+$/g, '');
                                    navigate(`/service/${slug}`);
                                  }
                                }}
                                className="flex flex-col items-center gap-2 text-center group"
                              >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all text-xl">
                                  {service.icon}
                                </div>
                                <span className="text-[9px] font-medium leading-tight line-clamp-2 text-white/70 group-hover:text-white transition">
                                  {service.name}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="pt-3 border-t border-white/10 mt-3">
                      <button
                        onClick={() => {
                          setExpandedCategory(null);
                          setActiveTab('');
                        }}
                        className="text-white/40 text-sm font-medium flex items-center gap-1 hover:text-white transition"
                      >
                        <ChevronUp className="w-4 h-4" />
                        Less
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ========== HOT Services – Glass Card ========== */}
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" /> HOT Services
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
            {hotServices.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/service/${service.id}`)}
                className="min-w-[240px] text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
                  <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-400">₹{service.price}</span>
                  <span className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold">View</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ========== Trending – Glass Card ========== */}
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" /> Trending
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
            {trendingServices.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/service/${service.id}`)}
                className="min-w-[160px] text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
                <span className="text-xs text-white/40">₹{service.price}</span>
              </button>
            ))}
          </div>
        </section>

        {/* ========== Premium – Glass Card ========== */}
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-500" /> Premium Services
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {premiumServices.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/service/${service.id}`)}
                className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-3xl p-5 border border-white/10 text-left hover:bg-white/5 transition"
              >
                <h3 className="font-bold text-sm mb-2">{service.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
                  <ChevronRight className="w-4 h-4 text-white/20" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ========== Bundles – Glass Card (Enhanced) ========== */}
        <section className="bg-blue-600/10 backdrop-blur-xl border border-blue-500/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Special Bundles</h2>
            <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
          </div>
          <div className="space-y-4">
            {BUNDLES.map((bundle) => (
              <button
                key={bundle.id}
                onClick={goToSignup}
                className="w-full text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
                  <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
                  <span className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold inline-block">Sign Up</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ========== Categories Grid – Glass Card ========== */}
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => navigate(`/search?category=${cat}`)}
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span className="text-sm font-medium">{cat}</span>
                <ChevronRight className="w-4 h-4 text-white/20" />
              </button>
            ))}
          </div>
        </section>

        {/* Final CTA – unchanged */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <p className="text-white/80 text-sm">Create a free account and unlock every service in one place.</p>
          <button
            onClick={goToSignup}
            className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
          >
            Create Free Account
          </button>
        </div>
      </main>

      {/* ========== BOTTOM NAVIGATION (with glass) ========== */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Home</span>
        </button>
        <button onClick={() => navigate('/help')} className="flex flex-col items-center gap-1">
          <HelpCircle className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Help</span>
        </button>

        {/* Services – always visible */}
        <button onClick={() => navigate('/search')} className="flex flex-col items-center gap-1">
          <Package className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Services</span>
        </button>

        {/* Profile (avatar) if logged in, otherwise Login */}
        {user ? (
          <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-lg">
              {getUserInitial()}
            </div>
            <span className="text-[10px] font-medium text-white/40">Profile</span>
          </button>
        ) : (
          <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1">
            <LogIn className="w-6 h-6 text-white/40" />
            <span className="text-[10px] font-medium text-white/40">Login</span>
          </button>
        )}

        <button onClick={() => navigate('/menu')} className="flex flex-col items-center gap-1">
          <Menu className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Menu</span>
        </button>
      </nav>
    </div>
  );
}