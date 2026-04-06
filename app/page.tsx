'use client';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from "./components/Navbar";
import BackgroundBlobs from "./components/BackgroundBlobs";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return <h1>Portfolio is Live 🚀</h1>;
}

export default function Home() {
  return <h1>Portfolio Updated 🚀</h1>;
}
export default function Home() {
  return (
    <AnimatePresence>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-[#121212] flex flex-col selection:bg-purple-500/30 overflow-x-hidden relative"
      >
        <BackgroundBlobs />
        
        <Navbar />

        <div id="about" className="relative w-full h-[400vh]">
          <ScrollyCanvas />
          <Overlay />
        </div>
        
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Skills />
        <Contact />
        
        <footer className="w-full py-12 px-6 sm:px-12 md:px-24 bg-[#0a0a0a] border-t border-white/5 flex flex-col md:flex-row items-center justify-between z-20 relative">
          <p className="text-gray-500 text-sm font-light tracking-wide">© {new Date().getFullYear()} Rashid Ali. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">GITHUB</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">LINKEDIN</a>
          </div>
        </footer>
      </motion.main>
    </AnimatePresence>
  );
}
