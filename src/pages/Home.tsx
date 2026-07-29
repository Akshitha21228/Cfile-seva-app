// import { useState, useEffect, useRef } from 'react';
// import { Search, Rocket, TrendingUp, Flame, Star, Package, ChevronRight } from 'lucide-react';
// import { SERVICES, BUNDLES, Service } from '../data/services';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'motion/react';
// import { useCart } from '../context/CartContext';
// import { useToast } from '../context/ToastContext';
// import { AdBanner } from '../components/AdBanner';
// import { logEvent } from '../services/analytics';

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

// export function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const navigate = useNavigate();
//   const { addToCart, addBundleToCart } = useCart();
//   const { showToast } = useToast();

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));
//   const hotServices = SERVICES.filter(s => s.tags.includes('hot'));
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium'));
//   const topSelling = SERVICES.filter(s => s.tags.includes('top-selling')).slice(0, 8);

//   const isActionInProgress = useRef(false);

//   const handleAddToCart = (service: Service) => {
//     if (isActionInProgress.current) return;
//     isActionInProgress.current = true;
//     addToCart(service);
//     showToast(`${service.title} added to cart`, 'success');
//     logEvent('add_to_cart', { service_id: service.id, price: service.price });
//     setTimeout(() => { isActionInProgress.current = false; }, 500);
//   };

//   const handleAddBundle = (bundle: typeof BUNDLES[0]) => {
//     if (isActionInProgress.current) return;
//     isActionInProgress.current = true;
//     addBundleToCart(bundle.services);
//     showToast(`${bundle.title} added to cart`, 'success');
//     logEvent('add_bundle_to_cart', { bundle_id: bundle.id, price: bundle.price });
//     setTimeout(() => { isActionInProgress.current = false; }, 500);
//   };

//   const handleTalkToExpert = () => {
//     const message = "Hello, I need custom help with my business services.";
//     window.open(`https://wa.me/${import.meta.env.VITE_SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
//   };

//   return (
//     <div className="space-y-8 px-4 pb-12">
//       {/* Hero Banner Slider */}
//       <div 
//         className="relative h-48 rounded-3xl overflow-hidden cursor-pointer"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setIsPaused(false)}
//       >
//         <AnimatePresence mode="wait">
//           {(() => {
//             const slide = SLIDES[currentSlide];
//             const Icon = slide.icon;
//             return (
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//               >
//                 <div className="relative z-10">
//                   <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">
//                     {slide.title}
//                   </h1>
//                   <p className="text-white/60 text-sm">{slide.subtitle}</p>
//                 </div>
//                 <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                   <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                 </div>
//               </motion.div>
//             );
//           })()}
//         </AnimatePresence>
        
//         {/* Indicators */}
//         <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//           {SLIDES.map((_, idx) => (
//             <div 
//               key={idx} 
//               className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* AI Search Bar */}
//       <div className="relative group">
//         <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
//           <Search className="w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search for GST, Trademark, etc..."
//           className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
//           onFocus={() => navigate('/search')}
//         />
//       </div>

//       {/* Ad Banner */}
//       <AdBanner />

//       {/* Popular Services */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//           </h2>
//           <Link to="/search" className="text-blue-400 text-sm font-medium">View All</Link>
//         </div>
//         <div className="grid grid-cols-4 gap-4">
//           {topSelling.map((service) => (
//             <Link key={service.id} to={`/service/${service.id}`} className="flex flex-col items-center gap-2 text-center">
//               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
//                 <Package className="w-6 h-6 text-blue-400" />
//               </div>
//               <span className="text-[10px] font-medium leading-tight line-clamp-2">{service.title}</span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* HOT Services Slider */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//           </h2>
//         </div>
//         <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//           {hotServices.map((service) => (
//             <div key={service.id} className="min-w-[240px] bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between">
//               <div>
//                 <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                 <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-blue-400">₹{service.price}</span>
//                 <button 
//                   onClick={() => handleAddToCart(service)}
//                   className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TRENDING Slider */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//           </h2>
//         </div>
//         <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//           {trendingServices.map((service) => (
//             <Link key={service.id} to={`/service/${service.id}`} className="min-w-[160px] bg-white/5 rounded-3xl p-4 border border-white/10">
//               <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                 <Rocket className="w-5 h-5 text-blue-400" />
//               </div>
//               <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//               <span className="text-xs text-white/40">₹{service.price}</span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* PREMIUM Grid */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <Star className="w-5 h-5 text-purple-500" /> Premium Services
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {premiumServices.slice(0, 4).map((service) => (
//             <Link key={service.id} to={`/service/${service.id}`} className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10">
//               <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//               <div className="flex items-center justify-between">
//                 <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* Bundles */}
//       <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold">Special Bundles</h2>
//           <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//         </div>
//         <div className="space-y-4">
//           {BUNDLES.map((bundle) => (
//             <div key={bundle.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between">
//               <div>
//                 <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                 <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 <div className="mt-2 flex gap-1">
//                   {bundle.tags.map(tag => (
//                     <span key={tag} className="text-[8px] uppercase font-bold px-1.5 py-0.5 bg-white/10 rounded-md text-white/60">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                 <button 
//                   onClick={() => handleAddBundle(bundle)}
//                   className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold hover:bg-white/90 transition-colors"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Categories */}
//       <section>
//         <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//         <div className="grid grid-cols-2 gap-3">
//           {categories.map((cat) => (
//             <button 
//               key={cat}
//               onClick={() => navigate(`/search?category=${cat}`)}
//               className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors"
//             >
//               <span className="text-sm font-medium">{cat}</span>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//         <h2 className="text-2xl font-bold">Need Custom Help?</h2>
//         <p className="text-white/80 text-sm">Our experts are ready to assist you with your business needs.</p>
//         <button 
//           onClick={handleTalkToExpert}
//           className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//         >
//           Talk to Expert
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from 'react';
// import { Search, Rocket, TrendingUp, Flame, Star, Package, ChevronRight, Home, HelpCircle, LogIn, Menu } from 'lucide-react';
// import { SERVICES, BUNDLES, Service } from '../data/services';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'motion/react';
// import { useCart } from '../context/CartContext';
// import { useToast } from '../context/ToastContext';
// import { AdBanner } from '../components/AdBanner';
// import { logEvent } from '../services/analytics';

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

// export function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const navigate = useNavigate();
//   const { addToCart, addBundleToCart } = useCart();
//   const { showToast } = useToast();

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const categories = Array.from(new Set(SERVICES.map(s => s.category)));
//   const hotServices = SERVICES.filter(s => s.tags.includes('hot'));
//   const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
//   const premiumServices = SERVICES.filter(s => s.tags.includes('premium'));
//   const topSelling = SERVICES.filter(s => s.tags.includes('top-selling')).slice(0, 8);

//   const isActionInProgress = useRef(false);

//   const handleAddToCart = (service: Service) => {
//     if (isActionInProgress.current) return;
//     isActionInProgress.current = true;
//     addToCart(service);
//     showToast(`${service.title} added to cart`, 'success');
//     logEvent('add_to_cart', { service_id: service.id, price: service.price });
//     setTimeout(() => { isActionInProgress.current = false; }, 500);
//   };

//   const handleAddBundle = (bundle: typeof BUNDLES[0]) => {
//     if (isActionInProgress.current) return;
//     isActionInProgress.current = true;
//     addBundleToCart(bundle.services);
//     showToast(`${bundle.title} added to cart`, 'success');
//     logEvent('add_bundle_to_cart', { bundle_id: bundle.id, price: bundle.price });
//     setTimeout(() => { isActionInProgress.current = false; }, 500);
//   };

//   const handleTalkToExpert = () => {
//     const message = "Hello, I need custom help with my business services.";
//     window.open(`https://wa.me/${import.meta.env.VITE_SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
//   };

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
//     <div className="space-y-8 px-4 pb-20">
//       {/* Header */}
     

//       {/* ========== Registration & License Section ========== */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="p-4 border-b border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-800">Registration & License</h2>
//         </div>
        
//         <div className="p-4 space-y-4">
//           {/* Business Registration */}
//           <div>
//             <h3 className="text-sm font-medium text-gray-700 mb-2">Business Registration</h3>
//             <div className="flex flex-wrap gap-2">
//               {SERVICES.filter(s => s.category === 'Business Registration').slice(0, 6).map((service) => (
//                 <span 
//                   key={service.id}
//                   className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition"
//                   onClick={() => navigate(`/service/${service.id}`)}
//                 >
//                   {service.title.replace(' Registration', '').replace(' Company', '').trim()}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Licenses */}
//           <div>
//             <h3 className="text-sm font-medium text-gray-700 mb-2">Licenses</h3>
//             <div className="flex flex-wrap gap-2">
//               {SERVICES.filter(s => s.category === 'Licenses & Registrations').slice(0, 5).map((service) => (
//                 <span 
//                   key={service.id}
//                   className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition"
//                   onClick={() => navigate(`/service/${service.id}`)}
//                 >
//                   {service.title.replace(' Registration', '').replace(' License', '').replace(' Certification', '').trim()}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Trademark */}
//           <div>
//             <h3 className="text-sm font-medium text-gray-700 mb-2">Trademark</h3>
//             <div className="flex flex-wrap gap-2">
//               {SERVICES.filter(s => s.category === 'Trademark & IPR').slice(0, 4).map((service) => (
//                 <span 
//                   key={service.id}
//                   className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition"
//                   onClick={() => navigate(`/service/${service.id}`)}
//                 >
//                   {service.title.replace(' Registration', '').replace(' Filing', '').trim()}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* More */}
//           <div className="pt-2 border-t border-gray-100">
//             <button 
//               onClick={() => navigate('/search')}
//               className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700"
//             >
//               More 
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ========== Business & Compliance Section ========== */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="p-4 border-b border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-800">Business & Compliance</h2>
//         </div>
        
//         <div className="p-4 space-y-4">
//           {/* GST Services */}
//           <div>
//             <h3 className="text-sm font-medium text-gray-700 mb-2">GST Services</h3>
//             <div className="grid grid-cols-2 gap-2">
//               {SERVICES.filter(s => s.category === 'GST Services').slice(0, 6).map((service) => (
//                 <div 
//                   key={service.id}
//                   className="px-3 py-2 bg-gray-50 text-gray-700 text-xs rounded-lg border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition text-center"
//                   onClick={() => navigate(`/service/${service.id}`)}
//                 >
//                   {service.title.replace('GST ', '').replace(' Filing', '').replace(' Registration', '').trim()}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="pt-2 border-t border-gray-100">
//             <div className="grid grid-cols-2 gap-2">
//               {['Income Tax', 'Trademark', 'MSME', 'IEC'].map((item) => (
//                 <button 
//                   key={item}
//                   onClick={() => navigate(`/search?q=${item}`)}
//                   className="px-3 py-2 bg-gray-50 text-gray-700 text-xs rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition text-center"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Banner Slider */}
//       <div 
//         className="relative h-48 rounded-3xl overflow-hidden cursor-pointer"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setIsPaused(false)}
//       >
//         <AnimatePresence mode="wait">
//           {(() => {
//             const slide = SLIDES[currentSlide];
//             const Icon = slide.icon;
//             return (
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
//               >
//                 <div className="relative z-10">
//                   <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">
//                     {slide.title}
//                   </h1>
//                   <p className="text-white/60 text-sm">{slide.subtitle}</p>
//                 </div>
//                 <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
//                   <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
//                 </div>
//               </motion.div>
//             );
//           })()}
//         </AnimatePresence>
        
//         {/* Indicators */}
//         <div className="absolute bottom-4 left-8 flex gap-2 z-20">
//           {SLIDES.map((_, idx) => (
//             <div 
//               key={idx} 
//               className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* AI Search Bar */}
//       <div className="relative group">
//         <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
//           <Search className="w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search for GST, Trademark, etc..."
//           className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
//           onFocus={() => navigate('/search')}
//         />
//       </div>

//       {/* Ad Banner */}
//       <AdBanner />

//       {/* Popular Services - Categories View */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <Star className="w-5 h-5 text-yellow-500" /> Popular Services
//           </h2>
//           <Link to="/search" className="text-blue-400 text-sm font-medium">View All</Link>
//         </div>
//         <div className="grid grid-cols-4 gap-4">
//           {categories.slice(0, 8).map((category) => {
//             const icon = categoryIcons[category] || '📦';
//             return (
//               <button 
//                 key={category} 
//                 onClick={() => navigate(`/search?category=${encodeURIComponent(category)}`)} 
//                 className="flex flex-col items-center gap-2 text-center"
//               >
//                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors text-2xl">
//                   {icon}
//                 </div>
//                 <span className="text-[10px] font-medium leading-tight line-clamp-2">{category}</span>
//               </button>
//             );
//           })}
//         </div>
//       </section>

//       {/* HOT Services Slider */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <Flame className="w-5 h-5 text-orange-500" /> HOT Services
//           </h2>
//         </div>
//         <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//           {hotServices.map((service) => (
//             <div key={service.id} className="min-w-[240px] bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between">
//               <div>
//                 <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
//                 <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-blue-400">₹{service.price}</span>
//                 <button 
//                   onClick={() => handleAddToCart(service)}
//                   className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TRENDING Slider */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <TrendingUp className="w-5 h-5 text-green-500" /> Trending
//           </h2>
//         </div>
//         <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
//           {trendingServices.map((service) => (
//             <Link key={service.id} to={`/service/${service.id}`} className="min-w-[160px] bg-white/5 rounded-3xl p-4 border border-white/10">
//               <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
//                 <Rocket className="w-5 h-5 text-blue-400" />
//               </div>
//               <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
//               <span className="text-xs text-white/40">₹{service.price}</span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* PREMIUM Grid */}
//       <section>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold flex items-center gap-2">
//             <Star className="w-5 h-5 text-purple-500" /> Premium Services
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {premiumServices.slice(0, 4).map((service) => (
//             <Link key={service.id} to={`/service/${service.id}`} className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10">
//               <h3 className="font-bold text-sm mb-2">{service.title}</h3>
//               <div className="flex items-center justify-between">
//                 <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
//                 <ChevronRight className="w-4 h-4 text-white/20" />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* Bundles */}
//       <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold">Special Bundles</h2>
//           <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
//         </div>
//         <div className="space-y-4">
//           {BUNDLES.map((bundle) => (
//             <div key={bundle.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between">
//               <div>
//                 <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
//                 <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
//                 <div className="mt-2 flex gap-1">
//                   {bundle.tags.map(tag => (
//                     <span key={tag} className="text-[8px] uppercase font-bold px-1.5 py-0.5 bg-white/10 rounded-md text-white/60">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
//                 <button 
//                   onClick={() => handleAddBundle(bundle)}
//                   className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold hover:bg-white/90 transition-colors"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Categories Grid */}
//       <section>
//         <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
//         <div className="grid grid-cols-2 gap-3">
//           {categories.map((cat) => (
//             <button 
//               key={cat}
//               onClick={() => navigate(`/search?category=${cat}`)}
//               className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors"
//             >
//               <span className="text-sm font-medium">{cat}</span>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
//         <h2 className="text-2xl font-bold">Need Custom Help?</h2>
//         <p className="text-white/80 text-sm">Our experts are ready to assist you with your business needs.</p>
//         <button 
//           onClick={handleTalkToExpert}
//           className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
//         >
//           Talk to Expert
//         </button>
//       </div>

//       {/* ========== Bottom Navigation ========== */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
//         <button 
//           onClick={() => navigate('/')} 
//           className="flex flex-col items-center gap-1"
//         >
//           <Home className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Home</span>
//         </button>
//         <button 
//           onClick={() => navigate('/help')} 
//           className="flex flex-col items-center gap-1"
//         >
//           <HelpCircle className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Help</span>
//         </button>
//         <button 
//           onClick={() => navigate('/login')} 
//           className="flex flex-col items-center gap-1"
//         >
//           <LogIn className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Login</span>
//         </button>
//         <button 
//           onClick={() => navigate('/menu')} 
//           className="flex flex-col items-center gap-1"
//         >
//           <Menu className="w-6 h-6 text-white/40" />
//           <span className="text-[10px] font-medium text-white/40">Menu</span>
//         </button>
//       </nav>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from 'react';
import { Search, Rocket, TrendingUp, Flame, Star, Package, ChevronRight, Home as HomeIcon, HelpCircle, LogIn, Menu } from 'lucide-react';
import { SERVICES, BUNDLES, Service } from '../data/services';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { AdBanner } from '../components/AdBanner';
import { logEvent } from '../services/analytics';

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

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const { addToCart, addBundleToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const categories = Array.from(new Set(SERVICES.map(s => s.category)));
  const hotServices = SERVICES.filter(s => s.tags.includes('hot'));
  const trendingServices = SERVICES.filter(s => s.tags.includes('trending'));
  const premiumServices = SERVICES.filter(s => s.tags.includes('premium'));
  const topSelling = SERVICES.filter(s => s.tags.includes('top-selling')).slice(0, 8);

  const isActionInProgress = useRef(false);

  const handleAddToCart = (service: Service) => {
    if (isActionInProgress.current) return;
    isActionInProgress.current = true;
    addToCart(service);
    showToast(`${service.title} added to cart`, 'success');
    logEvent('add_to_cart', { service_id: service.id, price: service.price });
    setTimeout(() => { isActionInProgress.current = false; }, 500);
  };

  const handleAddBundle = (bundle: typeof BUNDLES[0]) => {
    if (isActionInProgress.current) return;
    isActionInProgress.current = true;
    addBundleToCart(bundle.services);
    showToast(`${bundle.title} added to cart`, 'success');
    logEvent('add_bundle_to_cart', { bundle_id: bundle.id, price: bundle.price });
    setTimeout(() => { isActionInProgress.current = false; }, 500);
  };

  const handleTalkToExpert = () => {
    const message = "Hello, I need custom help with my business services.";
    window.open(`https://wa.me/${import.meta.env.VITE_SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Category icons mapping
  const categoryIcons: Record<string, string> = {
    'Business Registration': '📋',
    'GST Services': '💰',
    'Trademark & IPR': '⚖️',
    'FSSAI': '🍽️',
    'Import Export': '🌐',
    'Tax & Compliance': '📊',
    'Legal Services': '⚖️',
    'Digital Services': '💻',
    'Licenses & Registrations': '📜',
    'Document Services': '📄',
    'Expert Services': '👨‍💼',
    'Marketing': '📢',
    'Intellectual Property': '🧠',
    'Financial Services': '🏦'
  };

  return (
    <div className="space-y-8 px-4 pb-20">
      {/* Header */}
     

      {/* ========== Registration & License Section ========== */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Registration & License</h2>
        </div>
        
        <div className="p-4 space-y-4">
          {/* Business Registration */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Business Registration</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES.filter(s => s.category === 'Business Registration').slice(0, 6).map((service) => (
                <span 
                  key={service.id}
                  className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition"
                  onClick={() => navigate(`/service/${service.id}`)}
                >
                  {service.title.replace(' Registration', '').replace(' Company', '').trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Licenses */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Licenses</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES.filter(s => s.category === 'Licenses & Registrations').slice(0, 5).map((service) => (
                <span 
                  key={service.id}
                  className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition"
                  onClick={() => navigate(`/service/${service.id}`)}
                >
                  {service.title.replace(' Registration', '').replace(' License', '').replace(' Certification', '').trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Trademark */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Trademark</h3>
            <div className="flex flex-wrap gap-2">
              {SERVICES.filter(s => s.category === 'Trademark & IPR').slice(0, 4).map((service) => (
                <span 
                  key={service.id}
                  className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition"
                  onClick={() => navigate(`/service/${service.id}`)}
                >
                  {service.title.replace(' Registration', '').replace(' Filing', '').trim()}
                </span>
              ))}
            </div>
          </div>

          {/* More */}
          <div className="pt-2 border-t border-gray-100">
            <button 
              onClick={() => navigate('/search')}
              className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700"
            >
              More 
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ========== Business & Compliance Section ========== */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Business & Compliance</h2>
        </div>
        
        <div className="p-4 space-y-4">
          {/* GST Services */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">GST Services</h3>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.filter(s => s.category === 'GST Services').slice(0, 6).map((service) => (
                <div 
                  key={service.id}
                  className="px-3 py-2 bg-gray-50 text-gray-700 text-xs rounded-lg border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition text-center"
                  onClick={() => navigate(`/service/${service.id}`)}
                >
                  {service.title.replace('GST ', '').replace(' Filing', '').replace(' Registration', '').trim()}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-2 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-2">
              {['Income Tax', 'Trademark', 'MSME', 'IEC'].map((item) => (
                <button 
                  key={item}
                  onClick={() => navigate(`/search?q=${item}`)}
                  className="px-3 py-2 bg-gray-50 text-gray-700 text-xs rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition text-center"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner Slider */}
      <div 
        className="relative h-48 rounded-3xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
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
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} p-8 flex flex-col justify-center`}
              >
                <div className="relative z-10">
                  <h1 className="text-3xl font-bold leading-tight mb-2 whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-white/60 text-sm">{slide.subtitle}</p>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                  <Icon className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-8 flex gap-2 z-20">
          {SLIDES.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* AI Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search for GST, Trademark, etc..."
          className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
          onFocus={() => navigate('/search')}
        />
      </div>

      {/* Ad Banner */}
      <AdBanner />

      {/* Popular Services - Categories View */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" /> Popular Services
          </h2>
          <Link to="/search" className="text-blue-400 text-sm font-medium">View All</Link>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {categories.slice(0, 8).map((category) => {
            const icon = categoryIcons[category] || '📦';
            return (
              <button 
                key={category} 
                onClick={() => navigate(`/search?category=${encodeURIComponent(category)}`)} 
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors text-2xl">
                  {icon}
                </div>
                <span className="text-[10px] font-medium leading-tight line-clamp-2">{category}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* HOT Services Slider */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" /> HOT Services
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
          {hotServices.map((service) => (
            <div key={service.id} className="min-w-[240px] bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{service.title}</h3>
                <p className="text-white/40 text-xs line-clamp-2 mb-4">{service.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-blue-400">₹{service.price}</span>
                <button 
                  onClick={() => handleAddToCart(service)}
                  className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING Slider */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" /> Trending
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
          {trendingServices.map((service) => (
            <Link key={service.id} to={`/service/${service.id}`} className="min-w-[160px] bg-white/5 rounded-3xl p-4 border border-white/10">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                <Rocket className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold text-sm mb-1 line-clamp-2">{service.title}</h3>
              <span className="text-xs text-white/40">₹{service.price}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PREMIUM Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-500" /> Premium Services
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {premiumServices.slice(0, 4).map((service) => (
            <Link key={service.id} to={`/service/${service.id}`} className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10">
              <h3 className="font-bold text-sm mb-2">{service.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-400">₹{service.price}</span>
                <ChevronRight className="w-4 h-4 text-white/20" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bundles */}
      <section className="bg-blue-600/10 -mx-4 px-4 py-8 rounded-[40px] border-y border-blue-500/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Special Bundles</h2>
          <span className="bg-blue-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Best Value</span>
        </div>
        <div className="space-y-4">
          {BUNDLES.map((bundle) => (
            <div key={bundle.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1">{bundle.title}</h3>
                <p className="text-white/40 text-xs">{bundle.services.length} Services included</p>
                <div className="mt-2 flex gap-1">
                  {bundle.tags.map(tag => (
                    <span key={tag} className="text-[8px] uppercase font-bold px-1.5 py-0.5 bg-white/10 rounded-md text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-blue-400 mb-2">₹{bundle.price}</div>
                <button 
                  onClick={() => handleAddBundle(bundle)}
                  className="px-6 py-2 bg-white text-black rounded-xl text-xs font-bold hover:bg-white/90 transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => navigate(`/search?category=${cat}`)}
              className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-colors"
            >
              <span className="text-sm font-medium">{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Need Custom Help?</h2>
        <p className="text-white/80 text-sm">Our experts are ready to assist you with your business needs.</p>
        <button 
          onClick={handleTalkToExpert}
          className="w-full h-14 bg-white text-black rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
        >
          Talk to Expert
        </button>
      </div>

      {/* ========== Bottom Navigation ========== */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5 h-16" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <button 
          onClick={() => navigate('/')} 
          className="flex flex-col items-center gap-1"
        >
          <HomeIcon className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Home</span>
        </button>
        <button 
          onClick={() => navigate('/help')} 
          className="flex flex-col items-center gap-1"
        >
          <HelpCircle className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Help</span>
        </button>
        <button 
          onClick={() => navigate('/login')} 
          className="flex flex-col items-center gap-1"
        >
          <LogIn className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Login</span>
        </button>
        <button 
          onClick={() => navigate('/menu')} 
          className="flex flex-col items-center gap-1"
        >
          <Menu className="w-6 h-6 text-white/40" />
          <span className="text-[10px] font-medium text-white/40">Menu</span>
        </button>
      </nav>
    </div>
  );
}