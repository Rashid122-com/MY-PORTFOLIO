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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            Tools & Technologies
          </h2>
          <p className="text-lg text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            My primary stack for building scalable, high-performance web applications and fluid UI/UX.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center justify-center p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm cursor-pointer overflow-hidden transition-colors hover:bg-white/[0.05] hover:border-white/[0.1] shadow-2xl"
            >
              {/* Highlight Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/0 var(--hover-color) opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className={`text-gray-500 transition-colors duration-500 mb-6 drop-shadow-xl ${tech.color}`}>
                {tech.icon}
              </div>
              <h3 className="text-white font-medium tracking-wide">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
