'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Premium Interactions: Deep Volumetric Perspective
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Creates inverse depth offsetting against the 3D model camera
  const shiftX = useTransform(smoothMouseX, [0, 1], [-25, 25]);
  const shiftY = useTransform(smoothMouseY, [0, 1], [-25, 25]);

  // Section 1: Hero (Center) - visible from 0-10%
  const opacity1 = useTransform(smoothProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.12], [0, -100]);

  // Section 2: "I build digital experiences" (Left) - appears after 4-5 frames (~8%), stays until 45%
  const opacity2 = useTransform(smoothProgress, [0.08, 0.15, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.08, 0.15, 0.4, 0.5], [100, 0, 0, -100]);

  // Section 3: Skills list (Right) - appears at 50%
  const opacity3 = useTransform(smoothProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.5, 0.6, 0.8, 0.9], [100, 0, 0, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[400vh] pointer-events-none z-10">
      <motion.div 
         style={{ x: shiftX, y: shiftY }}
         className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 overflow-hidden transform-gpu pointer-events-none"
      >
        
        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">Rashid Ali.</h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light drop-shadow-xl">Creative Developer.</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-y-0 left-6 sm:left-12 md:left-24 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white max-w-2xl leading-tight drop-shadow-2xl">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">experiences.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mt-6 max-w-lg drop-shadow-lg">
            Bridging the gap between complex engineering algorithms and pixel-perfect semantic design workflows.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-y-0 right-6 sm:right-12 md:right-24 flex flex-col justify-center text-right items-end">
          <div className="max-w-xl">
             <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8 drop-shadow-xl">Technical Stack</h3>
             <div className="flex flex-wrap justify-end gap-4 pointer-events-auto">
               {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Java'].map((skill, i) => (
                 <span key={i} className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-gray-100 text-sm tracking-wide shadow-2xl transition hover:border-emerald-400/50 hover:bg-emerald-400/10 cursor-default">
                   {skill}
                 </span>
               ))}
             </div>
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
}
