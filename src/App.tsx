import { motion } from 'framer-motion';
import { Home, Download, ArrowUpRight, Copy } from 'lucide-react';
import Starfield from './components/Starfield';

function App() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    // Could add a toast here
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-zinc-100 font-sans selection:bg-zinc-800 flex flex-col items-center">
      
      {/* Top Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl px-6 pt-12 flex justify-between items-center z-20 relative"
      >
        <button className="flex items-center gap-2 bg-[#1c1c1e] hover:bg-[#2c2c2e] transition-colors px-4 py-2 rounded-full text-sm font-medium text-zinc-300">
          <Home size={16} />
          <span>Home</span>
        </button>

        <div className="flex gap-3">
          <button className="bg-[#1c1c1e] hover:bg-[#2c2c2e] transition-colors px-4 py-2 rounded-full text-sm font-medium text-zinc-300">
            Contact Me
          </button>
          <button className="bg-[#1c1c1e] hover:bg-[#2c2c2e] transition-colors px-4 py-2 rounded-full text-sm font-medium text-zinc-300">
            My CV
          </button>
        </div>
      </motion.nav>

      {/* Main Content Container */}
      <main className="w-full max-w-4xl px-6 pt-16 pb-24 z-10 relative flex flex-col">
        
        {/* Starfield Banner Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-visible mb-20"
        >
          {/* The interactive Starfield Component */}
          <Starfield className="w-full h-full rounded-2xl" />
          
          {/* Avatar Overlapping Bottom Edge */}
          <div className="absolute -bottom-10 left-8 md:left-12 z-20">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="Profile" 
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[4px] border-[#0e0e10] object-cover shadow-2xl bg-[#0e0e10]"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="pl-2 md:pl-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white"
          >
            Ramy Baiche
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-500 font-medium tracking-tight mb-8"
          >
            Product Designer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed mb-10"
          >
            Hey, I'm Ramy Baiche, a Senior Product Designer working remotely from 🇩🇿 Algeria. I
            currently lead design across SaaS and AI products, and collaborate with
            teams in the UK and MENA on platforms like Emporium and EleeN.
          </motion.p>

          {/* Copy Email Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-2 mb-10 text-sm font-medium text-white"
          >
            <span>Press</span>
            <kbd className="bg-[#1c1c1e] px-2 py-0.5 rounded text-white font-mono text-xs shadow-inner">
               M
            </kbd>
            <span>to copy my email</span>
            <button onClick={copyEmail} className="ml-2 text-zinc-500 hover:text-white transition-colors" aria-label="Copy email">
              <Copy size={14} />
            </button>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-2 bg-[#1c1c1e] hover:bg-[#2c2c2e] text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium transition-all">
              View work
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-500" />
            </button>
            <button className="group flex items-center gap-2 bg-[#1c1c1e] hover:bg-[#2c2c2e] text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium transition-all">
              Download CV
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform text-zinc-500" />
            </button>
          </motion.div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
