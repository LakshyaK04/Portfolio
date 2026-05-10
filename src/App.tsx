import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Download, ArrowUpRight, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import Starfield from './components/Starfield';

function App() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

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

        {/* ============================================================ */}
        {/* EXPERIENCE SECTION */}
        {/* ============================================================ */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mt-32 mb-20"
        >
          <div className="w-full h-px bg-zinc-800/60 mb-16" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
            Experience
          </h2>

          <div className="flex flex-col relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[21px] top-[44px] bottom-[44px] w-px bg-zinc-800/60" />

            {/* Experience 1 */}
            <div 
              className="group flex items-start gap-6 cursor-pointer transition-all duration-300 relative z-10"
              onClick={() => setExpandedExp(expandedExp === 0 ? null : 0)}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#5C45FD] flex items-center justify-center shrink-0 mt-0.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7H19M5 12H19M5 17H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Content */}
              <div className={`flex-1 ${expandedExp === 0 ? '' : 'pb-10'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white text-lg tracking-tight">
                    <span className="font-bold">Emporium / IONIK</span> <span className="text-zinc-500 font-normal">- Co-Founder & Product Designer</span>
                  </h3>
                  {expandedExp === 0 ? (
                    <ChevronUp size={20} className="text-zinc-400 mt-0.5" />
                  ) : (
                    <ChevronDown size={20} className="text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-zinc-500 text-sm">
                  <span>Full-time</span>
                  <span>May 2023 → Present</span>
                  <span>Remote (London / Global)</span>
                </div>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {expandedExp === 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm leading-relaxed marker:text-zinc-600 bg-[#1a1a1c] rounded-xl px-6 py-4">
                        <li>Led 0→1 product vision for an AI CRM and customer engagement platform</li>
                        <li>Built complete design system from foundation to production</li>
                        <li>Shipped platform from concept to live product with measurable adoption</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Experience 2 */}
            <div 
              className="group flex items-start gap-6 cursor-pointer transition-all duration-300 relative z-10"
              onClick={() => setExpandedExp(expandedExp === 1 ? null : 1)}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#0a1f11] border border-emerald-900/50 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="4" fill="#10b981" fillOpacity="0.5"/>
                </svg>
              </div>
              
              {/* Content */}
              <div className={`flex-1 ${expandedExp === 1 ? '' : 'pb-10'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white text-lg tracking-tight">
                    <span className="font-bold">EleeN</span> <span className="text-zinc-500 font-normal">- Lead Product Designer</span>
                  </h3>
                  {expandedExp === 1 ? (
                    <ChevronUp size={20} className="text-zinc-400 mt-0.5" />
                  ) : (
                    <ChevronDown size={20} className="text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-zinc-500 text-sm">
                  <span>Part-time</span>
                  <span>Aug 2023 → Present</span>
                  <span>Remote (Saudi Arabia)</span>
                </div>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {expandedExp === 1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm leading-relaxed marker:text-zinc-600 bg-[#1a1a1c] rounded-xl px-6 py-4">
                        <li>Designed end-to-end Enterprise SaaS platform for B2B clients</li>
                        <li>Created comprehensive data visualization interfaces and dashboards</li>
                        <li>Delivered complete product strategy and design across Arabic and English interfaces</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================================ */}
        {/* WHAT I DO BEST SECTION */}
        {/* ============================================================ */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mt-32 mb-20"
        >
          <div className="w-full h-px bg-zinc-800/60 mb-16" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
            What I Do Best
          </h2>

          <div 
            className="flex flex-col"
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {[
              {
                num: '01',
                title: 'From zero to one',
                desc: "I don't wait for briefs to be perfect. I take ambiguity and shape it into flows, interfaces, and prototypes \u2014 iterating until the product feels inevitable."
              },
              {
                num: '02',
                title: 'Systems over screens',
                desc: 'I build the rules, not just the pages. Token systems, component libraries, and documentation that let teams ship faster without losing coherence.'
              },
              {
                num: '03',
                title: 'Strategy meets craft',
                desc: 'I connect business goals to pixel-level decisions. Every layout, interaction, and micro-copy choice is rooted in user needs and product strategy.'
              },
              {
                num: '04',
                title: 'Design speaks code',
                desc: 'I bridge the gap between design and engineering. I understand frontend architecture and write production-aware specs that developers actually want to build.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group cursor-default"
                onMouseEnter={() => setHoveredSkill(i)}
              >
                <div className={`flex items-baseline gap-6 py-7 border-b border-zinc-800/40 transition-all duration-300 ${
                  hoveredSkill !== null && hoveredSkill !== i ? 'opacity-40' : 'opacity-100'
                }`}>
                  <span className={`text-xs font-mono transition-colors duration-300 ${
                    hoveredSkill === i ? 'text-white' : 'text-zinc-600'
                  }`}>
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                      hoveredSkill === i ? 'text-white' : 'text-zinc-400'
                    }`}>
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {hoveredSkill === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="text-zinc-500 text-sm leading-relaxed overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        
      </main>
    </div>
  );
}

export default App;
