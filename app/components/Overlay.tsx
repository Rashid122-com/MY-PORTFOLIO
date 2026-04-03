'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Section 1: Hero (Center) [0% scroll]
  const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.25], [0, -100]);

  // Section 2: "I build digital experiences" (Left) [30% scroll]
  const opacity2 = useTransform(smoothProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.25, 0.35, 0.45, 0.55], [100, 0, 0, -100]);

  // Section 3: Skills list (Right) [60% scroll]
  const opacity3 = useTransform(smoothProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.55, 0.65, 0.75, 0.85], [100, 0, 0, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-24 overflow-hidden">
        
        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">Rashid Ali.</h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light">Creative Developer.</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-y-0 left-6 sm:left-12 md:left-24 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-2xl leading-tight">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">experiences.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mt-6 max-w-lg">
            Bridging the gap between complex engineering algorithms and pixel-perfect semantic design workflows.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-y-0 right-6 sm:right-12 md:right-24 flex flex-col justify-center text-right items-end">
          <div className="max-w-xl">
             <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">Technical Stack</h3>
             <div className="flex flex-wrap justify-end gap-4 pointer-events-auto">
               {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Java'].map((skill, i) => (
                 <span key={i} className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-gray-100 text-sm tracking-wide shadow-2xl">
                   {skill}
                 </span>
               ))}
             </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
