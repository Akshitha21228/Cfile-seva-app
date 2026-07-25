import { ReactNode, useState } from 'react';
import { Navbar } from './Navbar';
import { BottomNav } from './BottomNav';
import { Drawer } from './Drawer';
import { ToastContainer } from './ToastContainer';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

export function Layout({ children }: { children: ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <div className="pt-[calc(4rem+env(safe-area-inset-top))] pb-[calc(5rem+env(safe-area-inset-bottom))]">
        <Navbar onMenuClick={() => setIsDrawerOpen(true)} />

        <AnimatePresence>
          {isDrawerOpen && (
            <Drawer onClose={() => setIsDrawerOpen(false)} />
          )}
        </AnimatePresence>

        <main className="relative z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <BottomNav />
        <ToastContainer />
      </div>

      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
