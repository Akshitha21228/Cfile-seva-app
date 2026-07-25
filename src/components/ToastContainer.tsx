import { motion, AnimatePresence } from 'motion/react';
import { useToast } from '../context/ToastContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { clsx } from 'clsx';

export function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-[calc(1rem+env(safe-area-inset-top))] left-0 right-0 z-[100] flex flex-col items-center pointer-events-none px-4 gap-2">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={clsx(
              "pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg backdrop-blur-md border min-w-[280px] max-w-md",
              toast.type === 'success' && "bg-green-500/20 border-green-500/30 text-green-100",
              toast.type === 'error' && "bg-red-500/20 border-red-500/30 text-red-100",
              toast.type === 'info' && "bg-blue-500/20 border-blue-500/30 text-blue-100"
            )}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-green-400" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-blue-400" />}
            
            <span className="flex-1 text-sm font-medium">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
