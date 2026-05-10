import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import Starfield from '../components/Starfield';
import { supabase } from '../lib/supabase';
import schedulrImg from '../assets/project-schedulr.png';
import quickBidImg from '../assets/project-quickbid.png';
import aquafootprintImg from '../assets/project-aquafootprint.png';
import profilePic from '../assets/profile-pic.jpg';

export default function Home() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <>
      {/* Starfield Banner Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-visible mb-20"
      >
        <Starfield className="w-full h-full rounded-2xl" />
        
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-zinc-700/50 text-zinc-300 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide flex items-center gap-2 pointer-events-none z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
          Try hovering
        </div>
        
        <div className="absolute -bottom-10 left-8 md:left-12 z-20">
          <img 
            src={profilePic} 
            alt="Lakshya Kapoor" 
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
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-500 font-medium mb-10"
        >
          Building AI-Powered Digital Experiences
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-zinc-400 text-lg leading-relaxed space-y-6 mb-12"
        >
          <p>
            I design and develop modern full stack applications focused on intelligent systems, scalable architecture, and immersive user experiences. My work combines frontend engineering, backend systems, and applied AI to build products that feel fast, polished, and impactful.
          </p>
          <p>
            Currently exploring SaaS, machine learning systems, and interactive web interfaces.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 bg-[#1c1c1e] hover:bg-[#2c2c2e] text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            View work
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-500" />
          </button>
          <a 
            href="https://drive.google.com/file/d/1odoUdZCXTGj6MNZ-9pBesp1AYWpGH90f/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 bg-[#1c1c1e] hover:bg-[#2c2c2e] text-zinc-300 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            Download CV
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform text-zinc-500" />
          </a>
        </motion.div>
      </div>

      {/* MY WORK SECTION */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-14">
          My Work
        </h2>

        <div className="flex flex-col gap-12">
          {/* Project 1 — Schedulr */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden bg-[#1a1a1c] border border-zinc-700/40">
              <a href="https://schedulr-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative group block cursor-pointer">
                <img
                  src={schedulrImg}
                  alt="Schedulr — Full Stack Healthcare Platform"
                  className="w-full h-auto max-h-[380px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium">
                    Visit Live Site
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight italic">Schedulr</h3>
                  <a href="https://schedulr-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-zinc-600/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors" aria-label="View Schedulr project">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Engineered a modern full stack healthcare platform designed for efficient appointment scheduling and streamlined user interaction. Focused on scalable backend architecture, secure authentication systems, and responsive frontend experiences using modern web technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project 2 — QuickBid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden bg-[#1a1a1c] border border-zinc-700/40">
              <a href="https://quick-bid-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative group block cursor-pointer">
                <img
                  src={quickBidImg}
                  alt="QuickBid — Real-Time Bidding Platform"
                  className="w-full h-auto max-h-[380px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium">
                    Visit Live Site
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight italic">QuickBid</h3>
                  <a href="https://quick-bid-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-zinc-600/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors" aria-label="View QuickBid project">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Engineered a real-time bidding platform focused on speed, scalability, and seamless live user interaction using modern full stack technologies. Built responsive real-time systems with synchronized updates, WebSocket communication, and optimized backend workflows for smooth auction experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project 3 — AquaFootprint AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden bg-[#1a1a1c] border border-zinc-700/40">
              <a href="https://aqua-footprint-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative group block cursor-pointer">
                <img
                  src={aquafootprintImg}
                  alt="AquaFootprint AI — Sustainable Agriculture Platform"
                  className="w-full h-auto max-h-[380px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium">
                    Visit Live Site
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
              <div className="px-6 py-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight italic">AquaFootprint AI</h3>
                  <a href="https://aqua-footprint-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-zinc-600/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors" aria-label="View AquaFootprint AI project">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Engineered an AI-powered water footprint calculator for sustainable agriculture. Integrated satellite data and real-time climate inputs to provide accurate insights, optimize water usage, and promote climate-resilient farming practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-8"
      >
        <div className="w-full h-px bg-zinc-800/60 mb-10" />
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
          Experience
        </h2>

        <div className="flex flex-col relative">
          <div className="absolute left-[21px] top-[44px] bottom-[44px] w-px bg-zinc-800/60" />

          {/* Experience 1 */}
          <div 
            className="group flex items-start gap-6 cursor-pointer transition-all duration-300 relative z-10"
            onClick={() => setExpandedExp(expandedExp === 0 ? null : 0)}
          >
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5 overflow-hidden border border-zinc-800">
              <img src="https://www.google.com/s2/favicons?domain=celebaltech.com&sz=128" alt="Celebal Technologies" className="w-full h-full object-contain p-1" />
            </div>
            
            <div className={`flex-1 ${expandedExp === 0 ? '' : 'pb-6'}`}>
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
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5 overflow-hidden border border-zinc-800">
              <img src="https://www.google.com/s2/favicons?domain=xprodigitals.com&sz=128" alt="Xpro Digitals" className="w-full h-full object-contain p-1" />
            </div>
            
            <div className={`flex-1 ${expandedExp === 1 ? '' : 'pb-6'}`}>
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

      {/* WHAT DO I USE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-8 mb-12"
      >
        <div className="w-full h-px bg-zinc-800/60 mb-8" />
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
          What do I use
        </h2>

        <div className="flex flex-col gap-4">
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
                <div key={`${dupeIdx}-${i}`} className="flex items-center gap-2.5 bg-[#1c1c1e] border border-zinc-800/50 px-4 py-2 rounded-full text-sm text-zinc-300 whitespace-nowrap shrink-0">
                  <img src={tool.logo} alt={tool.name} className="w-4 h-4 shrink-0" />
                  <span>{tool.name}</span>
                </div>
              )))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-3 animate-marquee-right" style={{ width: 'max-content' }}>
              {[...Array(2)].map((_, dupeIdx) => [
                { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
                { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/vlc/orange' },
                { name: 'JWT Auth', logo: 'https://cdn.simpleicons.org/jsonwebtokens/white' },
                { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
                { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
                { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
                { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
              ].map((tool, i) => (
                <div key={`${dupeIdx}-${i}`} className="flex items-center gap-2.5 bg-[#1c1c1e] border border-zinc-800/50 px-4 py-2 rounded-full text-sm text-zinc-300 whitespace-nowrap shrink-0">
                  <img src={tool.logo} alt={tool.name} className={`w-4 h-4 shrink-0 ${tool.invert ? 'invert' : ''}`} />
                  <span>{tool.name}</span>
                </div>
              )))}
            </div>
          </div>
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
                <div key={`${dupeIdx}-${i}`} className="flex items-center gap-2.5 bg-[#1c1c1e] border border-zinc-800/50 px-4 py-2 rounded-full text-sm text-zinc-300 whitespace-nowrap shrink-0">
                  <img src={tool.logo} alt={tool.name} className={`w-4 h-4 shrink-0 ${tool.invert ? 'invert' : ''}`} />
                  <span>{tool.name}</span>
                </div>
              )))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* WHAT I DO BEST SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-8 mb-12"
      >
        <div className="w-full h-px bg-zinc-800/60 mb-8" />
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
          What I Do Best
        </h2>

        <div className="flex flex-col" onMouseLeave={() => setHoveredSkill(null)}>
          {[
            { num: '01', title: 'Building Digital Experiences', desc: 'Creating modern, responsive, and intuitive interfaces that balance performance, usability, and visual clarity.' },
            { num: '02', title: 'Problem Solving Through Technology', desc: 'Approaching challenges with a builder mindset, turning complex ideas into simple, scalable, and effective solutions.' },
            { num: '03', title: 'Clean & Scalable Development', desc: 'Writing maintainable, structured, and efficient code with a focus on scalability, consistency, and long-term usability.' },
            { num: '04', title: 'Continuous Learning & Innovation', desc: 'Constantly exploring new technologies, improving workflows, and pushing creative and technical boundaries through experimentation.' }
          ].map((item, i) => (
            <div key={i} className="group cursor-default" onMouseEnter={() => setHoveredSkill(i)}>
              <div className={`flex items-baseline gap-6 py-5 border-b border-zinc-800/40 transition-all duration-300 ${hoveredSkill !== null && hoveredSkill !== i ? 'opacity-30' : 'opacity-100'}`}>
                <span className={`text-xs font-mono transition-colors duration-300 ${hoveredSkill === i ? 'text-white' : 'text-zinc-500'}`}>{item.num}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
                  <AnimatePresence>
                    {hoveredSkill === i && (
                      <motion.p initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: 'auto', opacity: 1, marginTop: 12 }} exit={{ height: 0, opacity: 0, marginTop: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="text-zinc-500 text-sm leading-relaxed overflow-hidden">
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
    </>
  );
}
