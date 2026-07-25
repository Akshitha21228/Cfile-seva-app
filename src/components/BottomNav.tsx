// import { Home, Search, Briefcase, HelpCircle, User } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import { clsx } from 'clsx';

// export function BottomNav() {
//   const location = useLocation();

//   const navItems = [
//     { icon: Home, label: 'Home', path: '/' },
//     { icon: Search, label: 'Search', path: '/search' },
//     { icon: Briefcase, label: 'My Services', path: '/my-services', highlight: true },
//     { icon: HelpCircle, label: 'Help', path: '/help' },
//     { icon: User, label: 'Profile', path: '/profile' },
//   ];

//   return (
//     <nav 
//       className="fixed bottom-0 left-0 right-0 h-[calc(5rem+env(safe-area-inset-bottom))] z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5"
//       style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
//     >
//       {navItems.map((item) => {
//         const isActive = location.pathname === item.path;
//         const Icon = item.icon;

//         if (item.highlight) {
//           return (
//             <Link
//               key={item.path}
//               to={item.path}
//               className="relative -top-6 flex flex-col items-center"
//             >
//               <div className={clsx(
//                 "w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300",
//                 isActive 
//                   ? "bg-blue-600 scale-110 shadow-blue-500/40" 
//                   : "bg-gradient-to-br from-blue-500 to-purple-600 shadow-purple-500/20"
//               )}>
//                 <Icon className="w-7 h-7 text-white" />
//               </div>
//               <span className={clsx(
//                 "text-[10px] font-medium mt-1 transition-colors",
//                 isActive ? "text-blue-400" : "text-white/40"
//               )}>
//                 {item.label}
//               </span>
//             </Link>
//           );
//         }

//         return (
//           <Link
//             key={item.path}
//             to={item.path}
//             className="flex flex-col items-center gap-1"
//           >
//             <Icon className={clsx(
//               "w-6 h-6 transition-all duration-300",
//               isActive ? "text-blue-400 scale-110" : "text-white/40"
//             )} />
//             <span className={clsx(
//               "text-[10px] font-medium transition-colors",
//               isActive ? "text-blue-400" : "text-white/40"
//             )}>
//               {item.label}
//             </span>
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }
import { Home, HelpCircle, LogIn, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
    { icon: LogIn, label: 'Login', path: '/login', highlight: true },
    { icon: Menu, label: 'Menu', path: '/menu' },
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 h-[calc(5rem+env(safe-area-inset-bottom))] z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        if (item.highlight) {
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative -top-6 flex flex-col items-center"
            >
              <div className={clsx(
                "w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300",
                isActive 
                  ? "bg-blue-600 scale-110 shadow-blue-500/40" 
                  : "bg-gradient-to-br from-blue-500 to-purple-600 shadow-purple-500/20"
              )}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className={clsx(
                "text-[10px] font-medium mt-1 transition-colors",
                isActive ? "text-blue-400" : "text-white/40"
              )}>
                {item.label}
              </span>
            </Link>
          );
        }

        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1"
          >
            <Icon className={clsx(
              "w-6 h-6 transition-all duration-300",
              isActive ? "text-blue-400 scale-110" : "text-white/40"
            )} />
            <span className={clsx(
              "text-[10px] font-medium transition-colors",
              isActive ? "text-blue-400" : "text-white/40"
            )}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}