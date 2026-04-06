'use client';

import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, SiFigma } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function TechStack() {
  const stack = [
    { name: 'Next.js', icon: <SiNextdotjs size={48} />, color: 'group-hover:text-white' },
    { name: 'React', icon: <SiReact size={48} />, color: 'group-hover:text-[#61DAFB]' },
    { name: 'TypeScript', icon: <SiTypescript size={48} />, color: 'group-hover:text-[#3178C6]' },
    { name: 'Tailwind', icon: <SiTailwindcss size={48} />, color: 'group-hover:text-[#06B6D4]' },
    { name: 'Motion', icon: <SiFramer size={48} />, color: 'group-hover:text-[#0055FF]' },
    { name: 'Java', icon: <FaJava size={48} />, color: 'group-hover:text-[#B07219]' },
    { name: 'Node.js', icon: <SiNodedotjs size={48} />, color: 'group-hover:text-[#339933]' },
    { name: 'Figma', icon: <SiFigma size={48} />, color: 'group-hover:text-[#F24E1E]' },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 sm:px-12 md:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-cyan-500"
            />
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Tools & Technologies
            </h2>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
          </div>
          <motion.p 
            className="text-lg text-gray-400 font-light mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My primary stack for building scalable, high-performance web applications and fluid UI/UX.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stack.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.6, y: 30 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    ease: [0.34, 1.56, 0.64, 1],
                    type: "spring",
                    stiffness: 120,
                  }
                },
              }}
              whileHover={{ 
                y: -16,
                scale: 1.08,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative flex flex-col items-center justify-center p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm cursor-pointer overflow-hidden transition-all hover:bg-white/[0.08] hover:border-white/[0.1] hover:shadow-[0_25px_80px_rgba(168,85,247,0.2)] shadow-2xl"
            >
              {/* Animated Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Icon Container with hover animation */}
              <motion.div 
                className={`text-gray-500 transition-all duration-500 mb-6 drop-shadow-xl ${tech.color} relative z-10`}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ 
                  scale: 1.2,
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))"
                }}
              >
                {tech.icon}
              </motion.div>
              
              <motion.h3 
                className="text-white font-medium tracking-wide relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 transition-all duration-500"
              >
                {tech.name}
              </motion.h3>

              {/* Bottom accent line animation */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
