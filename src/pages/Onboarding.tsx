import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, ShieldCheck, Zap, Package, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    title: "Welcome to Company File Seva",
    description: "Your one-stop solution for all business registrations and legal compliance in India.",
    icon: Rocket,
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Explore 150+ Services",
    description: "From GST to Trademarks, we cover everything your business needs to grow and stay compliant.",
    icon: Package,
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Easy Checkout & Tracking",
    description: "Seamless payment experience and real-time tracking of your service requests.",
    icon: Zap,
    color: "from-orange-500 to-orange-700"
  },
  {
    title: "Secure & Trusted",
    description: "Your documents are safe with us. Join thousands of businesses who trust our expert services.",
    icon: ShieldCheck,
    color: "from-green-500 to-green-700"
  }
];

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current === SLIDES.length - 1) {
      onComplete();
    } else {
      setCurrent(current + 1);
    }
  };

  const SlideIcon = SLIDES[current].icon;

  return (
    <div className="fixed inset-0 bg-[#050505] z-[100] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            className={`w-48 h-48 rounded-[48px] bg-gradient-to-br ${SLIDES[current].color} flex items-center justify-center shadow-2xl shadow-blue-500/20`}
          >
            <SlideIcon className="w-24 h-24 text-white" />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-black leading-tight">{SLIDES[current].title}</h1>
            <p className="text-white/40 text-lg leading-relaxed">{SLIDES[current].description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-blue-500" : "w-2 bg-white/10"
              }`} 
            />
          ))}
        </div>
      </div>

      <div className="p-8 space-y-4 pb-[calc(2rem+env(safe-area-inset-bottom))]">
        <button 
          onClick={handleNext}
          className="w-full h-16 bg-white text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl"
        >
          {current === SLIDES.length - 1 ? "Get Started" : "Next"} <ArrowRight className="w-5 h-5" />
        </button>
        {current < SLIDES.length - 1 && (
          <button 
            onClick={onComplete}
            className="w-full h-12 text-white/40 font-bold text-sm uppercase tracking-widest"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
