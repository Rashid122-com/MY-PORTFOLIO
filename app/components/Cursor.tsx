'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Track raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Apply aggressive spring physics to eliminate jank while mapping much more closely to real-time.
  // We use ultra-low mass and high stiffness so it snaps instantly, avoiding "laggy" sensations.
  const springConfig = { damping: 30, stiffness: 800, mass: 0.01 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the cursor size (standard size = 16px -> -8)
      mouseX.set(e.clientX - (isHovering ? 24 : 8));
      mouseY.set(e.clientY - (isHovering ? 24 : 8));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Broadly detect interactive tags
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isHovering]);

  return (
    <motion.div
      style={{
        left: smoothX,
        top: smoothY,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)',
        border: isHovering ? '1px solid rgba(255,255,255,0.8)' : '0px solid rgba(255,255,255,0)'
      }}
      transition={{ duration: 0.2 }}
      className="fixed pointer-events-none z-[100] rounded-full mix-blend-difference hidden md:block"
    />
  );
}
