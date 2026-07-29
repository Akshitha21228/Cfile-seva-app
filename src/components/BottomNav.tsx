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

// import { Home, HelpCircle, LogIn, Menu } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import { clsx } from 'clsx';

// export function BottomNav() {
//   const location = useLocation();

//   const navItems = [
//     { icon: Home, label: 'Home', path: '/' },
//     { icon: HelpCircle, label: 'Help', path: '/help' },
//     { icon: LogIn, label: 'Login', path: '/login', highlight: true },
//     { icon: Menu, label: 'Menu', path: '/menu' },
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
import { Home, HelpCircle, LogIn, Menu, Package, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { useAuth } from '../context/AuthContext';

export function BottomNav() {
  const { user } = useAuth();
  const location = useLocation();

  const getUserInitial = () => {
    if (user?.username) return user.username.charAt(0).toUpperCase();
    if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return 'U';
  };

  // Base nav items (always shown)
  const baseItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
    { icon: Menu, label: 'Menu', path: '/menu' },
  ];

  // Conditionally add Services and Profile/Login
  let dynamicItems;
  if (user) {
    dynamicItems = [
      { icon: Package, label: 'Services', path: '/search' },
      {
        // Profile as avatar circle
        type: 'avatar',
        label: 'Profile',
        path: '/profile',
        initial: getUserInitial(),
      },
    ];
  } else {
    dynamicItems = [
      { icon: LogIn, label: 'Login', path: '/login', highlight: true },
    ];
  }

  // Combine: Home, Help, [dynamic], Menu
  const navItems = [
    baseItems[0],
    baseItems[1],
    ...dynamicItems,
    baseItems[2],
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 h-[calc(5rem+env(safe-area-inset-bottom))] z-50 px-6 flex items-center justify-between backdrop-blur-2xl bg-black/60 border-t border-white/5"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        // Special rendering for the avatar (Profile) item
        if (item.type === 'avatar') {
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1"
            >
              <div className={clsx(
                "w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg transition-all duration-300",
                isActive && "ring-2 ring-blue-400 ring-offset-2 ring-offset-black"
              )}>
                {item.initial}
              </div>
              <span className={clsx(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-blue-400" : "text-white/40"
              )}>
                {item.label}
              </span>
            </Link>
          );
        }

        // Highlight button (Login)
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

        // Regular items
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