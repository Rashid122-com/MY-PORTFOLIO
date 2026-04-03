'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT).fill(null));
  const [loadedCount, setLoadedCount] = useState(0);

  // Directly map the 500vh scroll progress to the exact 0-119 image index range
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let count = 0;
    
    // We launch everything into the queue progressively without blocking the screen
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = `/sequence/frame_${i.toString().padStart(3, '0')}_delay-0.066s.png`;
        
        img.onload = () => {
            imagesRef.current[i] = img;
            count++;
            setLoadedCount(count);
            // Draw immediately if it's the very first frame to establish the environment
            if (i === 0) {
               requestAnimationFrame(() => renderFrame(0));
            }
        };
        // Error handling boundary
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
    
    // PROGRESSIVE STREAMING: If the EXACT frame isn't loaded yet, try to draw the closest available previous frame
    let targetImg = imagesRef.current[index];
    if (!targetImg || !targetImg.complete) {
        // Fallback loop scans backwards for the highest index loaded frame
        for (let j = index; j >= 0; j--) {
            if (imagesRef.current[j] && imagesRef.current[j].complete) {
                targetImg = imagesRef.current[j];
                break;
            }
        }
    }
    
    if (!targetImg) return; // Wait silently until at least 1 structure frame loads

    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Retina resolution protection
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
       canvas.width = w * dpr;
       canvas.height = h * dpr;
    }
    
    ctx.save();
    ctx.scale(dpr, dpr);
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    
    // Wipe and reset base background correctly preventing blackout transparency glitches
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, w, h);
    
    // Explicit object-fit: cover implementation resolving the stretched coordinates natively
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

  // Instant scroll tracking cleanly firing
  useMotionValueEvent(frameIndex, "change", (latest) => {
     requestAnimationFrame(() => renderFrame(Math.floor(latest)));
  });

  // Preserve scale bounds dynamically on window manipulation
  useEffect(() => {
    const handleResize = () => {
       requestAnimationFrame(() => renderFrame(Math.floor(frameIndex.get())));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      
      {/* Tiny progressive loader in the corner instead of blocking the whole screen */}
      {loadedCount < FRAME_COUNT && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-white/50 shadow-2xl flex items-center space-x-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Buffering 3D Assets [{Math.floor((loadedCount / FRAME_COUNT) * 100)}%]</span>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full">
        {/* Strictly standard canvas behavior cleanly resolving over physical coordinates */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      </div>
      
    </div>
  );
}
