'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about-section" className="relative w-full bg-[#121212] py-40 px-6 sm:px-12 md:px-24 z-20 flex justify-center items-center overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#121212] to-[#121212] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], type: "spring", stiffness: 100 }}
        whileHover={{ 
          boxShadow: "0 30px 100px rgba(168, 85, 247, 0.2)",
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className="max-w-4xl w-full bg-white/[0.02] backdrop-blur-xl p-12 md:p-16 rounded-[2.5rem] border border-white/[0.05] shadow-[0_20px_80px_-20px_rgba(168,85,247,0.15)] relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Animated background gradient */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
          <div className="flex-1">
            <motion.h2 
              className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Me</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mb-8" 
            />
          </div>
          
          <motion.div 
            className="flex-[2]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed group-hover:text-gray-100 transition-colors duration-500">
              I'm a passionate Computer Science student and Frontend Developer dedicated to building visually stunning, high-performance web applications. I bridge the gap between complex engineering and seamless design, ensuring every pixel feels right and every interaction matters.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
