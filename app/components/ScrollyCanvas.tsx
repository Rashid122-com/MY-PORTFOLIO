'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue, motion } from 'framer-motion';

const FRAME_COUNT = 192;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT).fill(null));
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Directly bind frame tracking to native scroll strictly avoiding unmounted Spring physics bugs
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Premium 3D Interaction 2: Virtual Camera Mouse Parallax
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
  
  // 3D Model dynamically follows the cursor.
  // CSS rotateY: (+) pushes right side back (looks left). (-) pushes right side forward (looks right).
  // Mouse Left (0) -> Model looks Left (rotateY: 8)
  // Mouse Right (1) -> Model looks Right (rotateY: -8)
  const rotateX = useTransform(smoothMouseY, [0, 1], [6, -6]); 
  const rotateY = useTransform(smoothMouseX, [0, 1], [8, -8]);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = `/sequence/frame_${i.toString().padStart(3, '0')}_delay-0.066s.png`;
        img.onload = () => {
            imagesRef.current[i] = img;
            count++;
            setLoadedCount(count);
            if (i === 0) {
               requestAnimationFrame(() => renderFrame(0));
            }
        };
        img.onerror = () => {
            count++;
            setLoadedCount(count);
        };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d', { alpha: false });
    if (!ctx) return;
    
    let targetImg = imagesRef.current[index];
    if (!targetImg || !targetImg.complete) {
        for (let j = index; j >= 0; j--) {
            if (imagesRef.current[j] && imagesRef.current[j].complete) {
                targetImg = imagesRef.current[j];
                break;
            }
        }
    }
    
    if (!targetImg) return; 

    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
       canvas.width = w * dpr;
       canvas.height = h * dpr;
    }
    
    ctx.save();
    ctx.scale(dpr, dpr);
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, w, h);
    
    const canvasRatio = w / h;
    const imgRatio = targetImg.width / targetImg.height;
    
    let drawW, drawH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        offsetX = 0;
        offsetY = (h - drawH) / 2;
    } else {
        drawH = h;
        drawW = h * imgRatio;
        offsetY = 0;
        offsetX = (w - drawW) / 2;
    }

    ctx.drawImage(targetImg, offsetX, offsetY, drawW, drawH);
    ctx.restore();
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
     requestAnimationFrame(() => renderFrame(Math.floor(latest)));
  });

  useEffect(() => {
    const handleResize = () => {
       requestAnimationFrame(() => renderFrame(Math.floor(frameIndex.get())));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#121212]">
      
      {loadedCount < FRAME_COUNT && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-white/50 shadow-2xl flex items-center space-x-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Buffering 3D Assets [{Math.floor((loadedCount / FRAME_COUNT) * 100)}%]</span>
        </div>
      )}

      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden perspective-[1200px] pointer-events-none">
        {/* Hardware-accelerated Virtual Camera tilt. Scale applied to hide edge clipping during severe rotation. */}
        <motion.div 
            style={{ rotateX, rotateY, scale: 1.05 }} 
            className="absolute inset-0 w-full h-full transform-gpu origin-center"
        >
           <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </motion.div>
      </div>
      
    </div>
  );
}
