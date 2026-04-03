'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-6 bg-transparent"
    >
      <div className="flex gap-8 flex-1">
        <button 
          onClick={() => scrollTo('about')} 
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors relative group"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
        </button>
        <button 
          onClick={() => scrollTo('work')} 
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors relative group"
        >
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <a 
          href="https://www.linkedin.com/in/rashid-ali-031270296?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl font-bold tracking-tighter text-white hover:text-purple-400 transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        >
          Rashid Ali
        </a>
      </div>

      <div className="flex gap-8 flex-1 justify-end">
        <button 
          onClick={() => scrollTo('experience')} 
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors relative group hidden sm:block"
        >
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
        </button>
        <button 
          onClick={() => scrollTo('contact')} 
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors relative group"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
        </button>
      </div>
    </motion.nav>
  );
}
