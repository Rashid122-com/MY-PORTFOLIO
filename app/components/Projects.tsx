'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Algorithm Visualizer",
      category: "Data Structures",
      description: "An interactive web app built to visualize complex data structures and algorithms in real-time, utilizing React and custom DOM manipulations.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    },
    {
      title: "Campus Connect",
      category: "Fullstack Platform",
      description: "A comprehensive Next.js platform for university students to share resources, featuring a real-time database and secure authentication architecture.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000",
    },
    {
      title: "WebGL Portfolio Engine",
      category: "Interactive Prototype",
      description: "Exploring high-performance rendering techniques with HTML Canvas and Framer Motion to create cinematic scroll experiences.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000",
    }
  ];

  return (
    <section id="work" className="relative w-full bg-[#121212] py-40 px-6 sm:px-12 md:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-plus-lighter">
              Selected Work
            </h2>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-6" 
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 60, rotateY: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateY: 0,
                  transition: { 
                    duration: 0.8, 
                    ease: [0.34, 1.56, 0.64, 1],
                    type: "spring",
                    stiffness: 100,
                  }
                },
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.06] hover:shadow-[0_30px_120px_rgba(168,85,247,0.25)] flex flex-col h-[550px] cursor-pointer perspective"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none z-10 group-hover:shadow-[inset_0_0_30px_rgba(168,85,247,0.1)] transition-shadow duration-700" />
              
              <div className="relative w-full h-[55%] overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent group-hover:via-[#121212]/30 transition-all duration-700" />
              </div>
              
              <div className="relative flex-1 p-8 flex flex-col justify-end z-20">
                <motion.p 
                  className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-[0.2em]"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {project.category}
                </motion.p>
                <motion.h3 
                  className="text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 font-light leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-500"
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="absolute opacity-0 group-hover:opacity-100 bottom-8 right-8 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white flex items-center justify-center hover:shadow-[0_10px_40px_rgba(52,211,153,0.3)] transition-shadow"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
