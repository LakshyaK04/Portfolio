import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon } from 'lucide-react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { supabase } from './lib/supabase';
import { useState, useEffect } from 'react';

function Navigation() {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-4xl px-6 pt-12 flex justify-between items-center z-20 relative"
    >
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-[#1c1c1e] hover:bg-[#2c2c2e] transition-colors px-4 py-2 rounded-full text-sm font-medium text-zinc-300"
      >
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>

      <div className="flex gap-3">
        <Link 
          to="/contact" 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            location.pathname === '/contact' 
            ? 'bg-white text-black' 
            : 'bg-[#1c1c1e] hover:bg-[#2c2c2e] text-zinc-300'
          }`}
        >
          Contact Me
        </Link>
        <a 
          href="https://drive.google.com/file/d/1odoUdZCXTGj6MNZ-9pBesp1AYWpGH90f/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#1c1c1e] hover:bg-[#2c2c2e] transition-colors px-4 py-2 rounded-full text-sm font-medium text-zinc-300 flex items-center"
        >
          My CV
        </a>
      </div>
    </motion.nav>
  );
}


function Footer({ visitorCount }: { visitorCount: number }) {
  const getOrdinalSuffix = (num: number) => {
    const n = Math.floor(num);
    const j = n % 10,
          k = n % 100;
    if (j === 1 && k !== 11) {
      return "st";
    }
    if (j === 2 && k !== 12) {
      return "nd";
    }
    if (j === 3 && k !== 13) {
      return "rd";
    }
    return "th";
  };


  return (
    <footer id="contact" className="w-full mt-24 mb-8">
      <div className="w-full h-px bg-zinc-800/60 mb-0" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between py-10 gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold text-xl italic tracking-tight">Lakshya Kapoor</span>
          <span className="text-zinc-500 text-sm">
            📍 Based in India, developing worldwide 🌍
          </span>
          <span className="text-zinc-400 text-sm flex items-center gap-1.5 mt-1">
            🎉 You're the{" "}
            {visitorCount > 0
              ? `${visitorCount}${getOrdinalSuffix(visitorCount)}`
              : "..."}{" "}
            visitor
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-zinc-800/60" />

      <div className="flex justify-between items-center py-6">
        <span className="text-zinc-500 text-sm">
          © 2026 Lakshya Kapoor
        </span>
        <div className="flex items-center gap-5">
          <a href="mailto:kapoorlakshya42@gmail.com" className="text-zinc-400 hover:text-white transition-colors" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/kapoorlakshya42" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://x.com/LakshyaKap04" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://github.com/LakshyaK04" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    async function handleVisitorCount() {
      // Get current count
      const { data } = await supabase
        .from('visitors')
        .select('count')
        .eq('id', 1)
        .single();
      
      if (data) {
        setVisitorCount(data.count);

        // Increment on every reload
        const { error } = await supabase
          .from('visitors')
          .update({ count: data.count + 1 })
          .eq('id', 1);
      }
    }
    handleVisitorCount();

    // Set up real-time listener
    const subscription = supabase
      .channel('visitors')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'visitors' }, (payload) => {
        setVisitorCount(payload.new.count);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#111111] text-zinc-100 font-sans selection:bg-zinc-800 flex flex-col items-center">
        <Navigation />
        
        <main className="w-full max-w-4xl px-6 pt-16 pb-24 z-10 relative flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <Footer visitorCount={visitorCount} />
        </main>
      </div>
    </Router>
  );
}

export default App;
