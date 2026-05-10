import { motion } from 'framer-motion';
import { Home, Download, ArrowUpRight, Copy } from 'lucide-react';
import Starfield from './components/Starfield';

function App() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    // Could add a toast here
  };

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 font-sans selection:bg-zinc-800 flex flex-col items-center">
      
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
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[4px] border-[#111111] object-cover shadow-2xl bg-[#111111]"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white"
          >
            Lakshya Kapoor
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-500 font-medium tracking-tight mb-8"
          >
            Building AI-Powered Digital Experiences
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed mb-10 space-y-4"
          >
            <p>
              I design and develop modern full stack applications focused on intelligent systems, scalable architecture, and
              immersive user experiences. My work combines frontend engineering, backend systems, and applied AI to
              build products that feel fast, polished, and impactful.
            </p>
            <p>
              Currently exploring SaaS, machine learning systems, and interactive web interfaces.
            </p>
          </motion.div>

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

        {/* ============================================================ */}
        {/* MY WORK SECTION */}
        {/* ============================================================ */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-14">
            My Work
          </h2>

          <div className="flex flex-col gap-12">

            {/* Project 1 — Emporium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden bg-[#1a1a1c] border border-zinc-700/40">
                <div className="relative group cursor-pointer">
                  <img
                    src="/project-emporium.png"
                    alt="Emporium — AI-powered CRM platform"
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium">
                      View Project
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight italic">Emporium</h3>
                    <a href="#" className="w-9 h-9 rounded-full border border-zinc-600/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors" aria-label="View Emporium project">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    AI-powered CRM and customer engagement platform built from zero to production. 0→1 product vision, marketing
                    website, onboarding, dashboard UX, and design system.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project 2 — EleeN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden bg-[#1a1a1c] border border-zinc-700/40">
                <div className="relative group cursor-pointer">
                  <img
                    src="/project-eleen.png"
                    alt="EleeN — Enterprise SaaS platform"
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium">
                      View Project
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight italic">EleeN</h3>
                    <a href="#" className="w-9 h-9 rounded-full border border-zinc-600/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors" aria-label="View EleeN project">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    Enterprise SaaS platform with modern dark-themed design. Product strategy, landing page, platform architecture, and end-to-end user experience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project 3 — Nexus AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden bg-[#1a1a1c] border border-zinc-700/40">
                <div className="relative group cursor-pointer">
                  <img
                    src="/project-nexus.png"
                    alt="Nexus AI — Analytics dashboard"
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium">
                      View Project
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight italic">Nexus AI</h3>
                    <a href="#" className="w-9 h-9 rounded-full border border-zinc-600/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors" aria-label="View Nexus AI project">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    AI-powered analytics platform with real-time data visualization, machine learning model monitoring, and intelligent insights dashboard.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>
        
      </main>
    </div>
  );
}

export default App;
