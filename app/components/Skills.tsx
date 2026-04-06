'use client';

import { motion } from 'framer-motion';

type SkillCat = {
  category: string;
  items: { name: string; level: number }[];
};

const skillData: SkillCat[] = [
  {
    category: "Frontend Architecture",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ]
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Java", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Data Structures", level: 90 },
    ]
  },
  {
    category: "Design & Tooling",
    items: [
      { name: "Git / CI-CD", level: 85 },
      { name: "Figma (UI/UX)", level: 80 },
      { name: "WebGL / Canvas", level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 sm:px-12 md:px-24 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-500"
            />
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-plus-lighter">
              Technical Arsenal
            </h2>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
          </div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto mt-6" 
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {skillData.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: { 
                    duration: 0.7, 
                    ease: [0.34, 1.56, 0.64, 1],
                    type: "spring",
                    stiffness: 100,
                  }
                },
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-md p-8 rounded-3xl hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-500 group cursor-default"
            >
              <motion.h3 
                className="text-xl font-bold text-white mb-8 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 transition-all duration-500"
              >
                {group.category}
              </motion.h3>
              
              <div className="space-y-6">
                {group.items.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="group/skill cursor-default"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-xs font-mono text-purple-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative group-hover/skill:bg-white/20 transition-colors duration-300">
                      {/* Progress Bar Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 via-emerald-500 to-blue-500 rounded-full relative group-hover/skill:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow duration-300"
                      >
                        {/* Animated Glow effect */}
                        <motion.div 
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] opacity-60"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
