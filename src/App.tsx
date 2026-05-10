import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Download, ArrowUpRight, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import Starfield from './components/Starfield';
import { supabase } from './lib/supabase';

function App() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [visitorCount, setVisitorCount] = useState(0);
  const hasCountedRef = useRef(false);

  useEffect(() => {
    if (hasCountedRef.current) return;
    hasCountedRef.current = true;

    async function incrementVisitor() {
      // Increment the count in Supabase
      const { data: current } = await supabase
        .from('visitors')
        .select('count')
        .eq('id', 1)
        .single();

      const newCount = (current?.count || 0) + 1;

      await supabase
        .from('visitors')
        .update({ count: newCount })
        .eq('id', 1);

      setVisitorCount(newCount);
    }

    incrementVisitor();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("kapoorlakshya42@gmail.com");
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
          className="w-full mt-20"
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
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5 overflow-hidden border border-zinc-800">
                <img src="https://www.google.com/s2/favicons?domain=celebaltech.com&sz=128" alt="Celebal Technologies" className="w-full h-full object-contain p-1" />
              </div>
              
              {/* Content */}
              <div className={`flex-1 ${expandedExp === 0 ? '' : 'pb-10'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white text-lg tracking-tight">
                    <span className="font-bold">Celebal Technologies</span> <span className="text-zinc-500 font-normal">- Full Stack Intern</span>
                  </h3>
                  {expandedExp === 0 ? (
                    <ChevronUp size={20} className="text-zinc-400 mt-0.5" />
                  ) : (
                    <ChevronDown size={20} className="text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-zinc-500 text-sm">
                  <span>Internship</span>
                  <span>May 2026 → Present</span>
                  <span>Remote</span>
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
                      <ul className="list-disc pl-10 pr-6 py-4 space-y-2 text-zinc-400 text-sm leading-relaxed marker:text-zinc-600 bg-[#1a1a1c] rounded-xl">
                        <li>Building & optimizing modern MERN stack web applications</li>
                        <li>Developing scalable backend systems & clean user interfaces</li>
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
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5 overflow-hidden border border-zinc-800">
                <img src="https://www.google.com/s2/favicons?domain=xprodigitals.com&sz=128" alt="Xpro Digitals" className="w-full h-full object-contain p-1" />
              </div>
              
              {/* Content */}
              <div className={`flex-1 ${expandedExp === 1 ? '' : 'pb-10'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white text-lg tracking-tight">
                    <span className="font-bold">Xpro Digitals</span> <span className="text-zinc-500 font-normal">- SEO Intern</span>
                  </h3>
                  {expandedExp === 1 ? (
                    <ChevronUp size={20} className="text-zinc-400 mt-0.5" />
                  ) : (
                    <ChevronDown size={20} className="text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-zinc-500 text-sm">
                  <span>Internship</span>
                  <span>Feb 2026 → Present</span>
                  <span>Remote</span>
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
                      <ul className="list-disc pl-10 pr-6 py-4 space-y-2 text-zinc-400 text-sm leading-relaxed marker:text-zinc-600 bg-[#1a1a1c] rounded-xl">
                        <li>Managed website content & maintained service pages for clarity and seamless UX</li>
                        <li>Optimized web pages using SEO best practices to improve search visibility & digital presence</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ============================================================ */}
        {/* WHAT DO I USE SECTION */}
        {/* ============================================================ */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mt-16 mb-20"
        >
          <div className="w-full h-px bg-zinc-800/60 mb-12" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
            What do I use
          </h2>

          <div className="flex flex-col gap-4">
            {/* Row 1 - Scroll Left */}
            <div className="overflow-hidden">
              <div className="flex gap-3 animate-marquee-left" style={{ width: 'max-content' }}>
                {[...Array(2)].map((_, dupeIdx) => [
                  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                  { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
                  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
                  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
                  { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
                ].map((tool, i) => (
                  <div
                    key={`${dupeIdx}-${i}`}
                    className="flex items-center gap-2.5 bg-[#1c1c1e] border border-zinc-800/50 px-4 py-2 rounded-full text-sm text-zinc-300 whitespace-nowrap shrink-0"
                  >
                    <img src={tool.logo} alt={tool.name} className="w-4 h-4 shrink-0" />
                    <span>{tool.name}</span>
                  </div>
                )))}
              </div>
            </div>

            {/* Row 2 - Scroll Right */}
            <div className="overflow-hidden">
              <div className="flex gap-3 animate-marquee-right" style={{ width: 'max-content' }}>
                {[...Array(2)].map((_, dupeIdx) => [
                  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
                  { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
                  { name: 'JWT Auth', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg' },
                  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
                  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
                  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
                  { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
                ].map((tool, i) => (
                  <div
                    key={`${dupeIdx}-${i}`}
                    className="flex items-center gap-2.5 bg-[#1c1c1e] border border-zinc-800/50 px-4 py-2 rounded-full text-sm text-zinc-300 whitespace-nowrap shrink-0"
                  >
                    <img src={tool.logo} alt={tool.name} className={`w-4 h-4 shrink-0 ${tool.invert ? 'invert' : ''}`} />
                    <span>{tool.name}</span>
                  </div>
                )))}
              </div>
            </div>

            {/* Row 3 - Scroll Left */}
            <div className="overflow-hidden">
              <div className="flex gap-3 animate-marquee-left" style={{ width: 'max-content', animationDuration: '24s' }}>
                {[...Array(2)].map((_, dupeIdx) => [
                  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert: true },
                  { name: 'Render', logo: 'https://cdn.simpleicons.org/render/46E3B7' },
                  { name: 'Axios', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg', invert: true },
                  { name: 'Mongoose', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg' },
                  { name: 'React Router', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg' },
                  { name: 'npm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
                  { name: 'bcrypt', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                  { name: 'dotenv', logo: 'https://cdn.simpleicons.org/dotenv/ECD53F' },
                ].map((tool, i) => (
                  <div
                    key={`${dupeIdx}-${i}`}
                    className="flex items-center gap-2.5 bg-[#1c1c1e] border border-zinc-800/50 px-4 py-2 rounded-full text-sm text-zinc-300 whitespace-nowrap shrink-0"
                  >
                    <img src={tool.logo} alt={tool.name} className={`w-4 h-4 shrink-0 ${tool.invert ? 'invert' : ''}`} />
                    <span>{tool.name}</span>
                  </div>
                )))}
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
          className="w-full mt-16 mb-20"
        >
          <div className="w-full h-px bg-zinc-800/60 mb-12" />
          
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
                title: 'Building Digital Experiences',
                desc: 'Creating modern, responsive, and intuitive interfaces that balance performance, usability, and visual clarity.'
              },
              {
                num: '02',
                title: 'Problem Solving Through Technology',
                desc: 'Approaching challenges with a builder mindset, turning complex ideas into simple, scalable, and effective solutions.'
              },
              {
                num: '03',
                title: 'Clean & Scalable Development',
                desc: 'Writing maintainable, structured, and efficient code with a focus on scalability, consistency, and long-term usability.'
              },
              {
                num: '04',
                title: 'Continuous Learning & Innovation',
                desc: 'Constantly exploring new technologies, improving workflows, and pushing creative and technical boundaries through experimentation.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group cursor-default"
                onMouseEnter={() => setHoveredSkill(i)}
              >
                <div className={`flex items-baseline gap-6 py-7 border-b border-zinc-800/40 transition-all duration-300 ${
                  hoveredSkill !== null && hoveredSkill !== i ? 'opacity-30' : 'opacity-100'
                }`}>
                  <span className={`text-xs font-mono transition-colors duration-300 ${
                    hoveredSkill === i ? 'text-white' : 'text-zinc-500'
                  }`}>
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                      hoveredSkill === i ? 'text-white' : 'text-white'
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

        {/* ============================================================ */}
        {/* FOOTER */}
        {/* ============================================================ */}

        <footer className="w-full mt-24 mb-8">
          <div className="w-full h-px bg-zinc-800/60 mb-0" />
          
          {/* Top row */}
          <div className="flex justify-between items-center py-6">
            <span className="text-zinc-400 text-sm flex items-center gap-1.5">
              📍 Based in India, developing worldwide 🌍
            </span>
            <span className="text-zinc-400 text-sm flex items-center gap-1.5">
              🎉 You're the {visitorCount > 0 ? `${visitorCount}${visitorCount === 1 ? 'st' : visitorCount === 2 ? 'nd' : visitorCount === 3 ? 'rd' : 'th'}` : '...'} visitor
            </span>
          </div>

          <div className="w-full h-px bg-zinc-800/60" />

          {/* Bottom row */}
          <div className="flex justify-between items-center py-6">
            <span className="text-zinc-500 text-sm">
              © 2026 Lakshya Kapoor
            </span>
            <div className="flex items-center gap-5">
              {/* Email */}
              <a href="mailto:kapoorlakshya42@gmail.com" className="text-zinc-400 hover:text-white transition-colors" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/kapoorlakshya42" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/LakshyaKap04" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/LakshyaK04" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
