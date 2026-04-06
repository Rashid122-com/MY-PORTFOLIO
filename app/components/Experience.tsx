'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer (Freelance)",
      company: "Independent Practice",
      date: "2024 - Present",
      description: "Developing highly interactive, production-ready web interfaces for various clients. Focusing on cutting-edge Next.js architecture, Tailwind CSS optimization, and flawless responsive design.",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      role: "Computer Science Undergraduate",
      company: "University",
      date: "2023 - Present",
      description: "Building strong foundational knowledge in software engineering, algorithms, and data structures. Actively participating in hackathons and leading collaborative open-source projects.",
      skills: ["Java", "Data Structures", "Algorithms", "Git"]
    },
    {
      role: "Lead UI/UX Prototype Developer",
      company: "Academic Capstone Group",
      date: "2023 - 2024",
      description: "Architected the frontend layer for an academic capstone project. Spearheaded the integration of fluid animations and state management, boosting user retention metrics in testing phases.",
      skills: ["TypeScript", "UI/UX Design", "Figma", "Redux"]
    }
  ];

  return (
    <section id="experience" className="relative w-full bg-[#121212] py-32 px-6 sm:px-12 md:px-24 z-20 overflow-hidden">
      
      {/* Decorative vertical glowing line */}
      <div className="absolute left-6 sm:left-12 md:left-[calc(50%-1px)] top-40 bottom-20 w-[2px] bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-blue-500/0 hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:text-center"
        >
          <div className="flex items-center justify-center md:justify-center gap-4">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-purple-500"
            />
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-plus-lighter">
              Experience
            </h2>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
          </div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full md:mx-auto mt-6" 
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
              },
            },
          }}
          className="space-y-12 md:space-y-0"
        >
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50, x: isEven ? -30 : 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    x: 0,
                    transition: { 
                      duration: 0.7, 
                      ease: [0.34, 1.56, 0.64, 1],
                      type: "spring",
                      stiffness: 100,
                    }
                  },
                }}
                whileHover={{ x: isEven ? -5 : 5 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full md:pb-24 group ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center dot for timeline */}
                <motion.div 
                  className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex items-center justify-center w-6 h-6 rounded-full bg-[#121212] border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 transition-transform duration-300 group-hover:scale-150"
                  whileHover={{ scale: 1.8 }}
                  animate={{ boxShadow: ["0_0_15px_rgba(168,85,247,0.8)", "0_0_30px_rgba(168,85,247,1)", "0_0_15px_rgba(168,85,247,0.8)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className={`w-full md:w-[45%] flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                  <motion.div 
                    className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-lg p-8 rounded-3xl transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.1] w-full hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)] group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.1)] group"
                    whileHover={{ scale: 1.02, y: -6 }}
                  >
                    <motion.div 
                      className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-2 block md:hidden"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {exp.date}
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-500"
                    >
                      {exp.role}
                    </motion.h3>
                    <h4 className="text-lg text-gray-400 font-medium mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      {exp.skills.map((skill, sIdx) => (
                        <motion.span 
                          key={sIdx} 
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 tracking-wide group-hover:bg-white/10 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className={`hidden md:flex w-full md:w-[45%] ${isEven ? 'justify-end' : 'justify-start'} items-center`}>
                  <motion.p 
                    className="text-xl font-medium text-gray-500 tracking-wider group-hover:text-purple-400 transition-colors duration-300"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {exp.date}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
