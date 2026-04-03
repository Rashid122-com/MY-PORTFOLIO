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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter mix-blend-plus-lighter">
            Selected Work
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.04] hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(168,85,247,0.15)] flex flex-col h-[550px]"
            >
              {/* Inner Glow Hack */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />
              
              <div className="relative w-full h-[55%] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
              </div>
              
              <div className="relative flex-1 p-8 flex flex-col justify-end z-20">
                <p className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-[0.2em] transform transition-transform duration-500 group-hover:-translate-y-1">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed line-clamp-3 transform transition-transform duration-500 group-hover:-translate-y-1">
                  {project.description}
                </p>
                
                <div className="absolute opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 bottom-8 right-8">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
