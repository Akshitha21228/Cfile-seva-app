import { useState, useEffect } from 'react';
import { Search as SearchIcon, X, ArrowLeft, Package, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Search() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(SERVICES);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem('recent_searches');
    return saved ? JSON.parse(saved) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = SERVICES.filter(s => {
      const searchStr = `${s.title} ${s.category} ${s.description} ${s.tags.join(' ')}`.toLowerCase();
      const matchesQuery = searchStr.includes(query.toLowerCase());
      const matchesCategory = initialCategory ? s.category === initialCategory : true;
      return matchesQuery && matchesCategory;
    });
    setResults(filtered);
  }, [query, initialCategory]);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim() && !recentSearches.includes(q)) {
      const newRecent = [q, ...recentSearches].slice(0, 5);
      setRecentSearches(newRecent);
      localStorage.setItem('recent_searches', JSON.stringify(newRecent));
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')} 
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search services..."
            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              <X className="w-5 h-5 text-white/40 hover:text-white" />
            </button>
          )}
        </div>
      </div>

      {initialCategory && (
        <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1.5 rounded-full w-fit">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{initialCategory}</span>
          <button onClick={() => navigate('/search')} className="hover:text-white text-blue-400">
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Recent Searches */}
      {!query && recentSearches.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest">
          {results.length} Services Found
        </h3>
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {results.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Link
                  to={`/service/${service.id}`}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Package className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm mb-0.5">{service.title}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider font-bold">{service.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-400 text-sm">₹{service.price}</div>
                    <ChevronRight className="w-4 h-4 text-white/20 ml-auto mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {results.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                <SearchIcon className="w-10 h-10 text-white/10" />
              </div>
              <p className="text-white/40 font-medium">No services found for "{query}"</p>
              <button 
                onClick={() => setQuery('')}
                className="text-blue-400 text-sm font-bold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
