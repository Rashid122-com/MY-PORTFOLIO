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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter mix-blend-plus-lighter">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillData.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.2 }}
              className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-md p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500"
            >
              <h3 className="text-xl font-bold text-white mb-8 tracking-wide">
                {group.category}
              </h3>
              
              <div className="space-y-6">
                {group.items.map((skill, idx) => (
                  <div key={idx} className="group cursor-default">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      {/* Progress Bar Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative"
                      >
                        {/* Glow effect attached to the moving tip */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] opacity-50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
