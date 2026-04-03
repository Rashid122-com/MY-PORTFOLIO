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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter mix-blend-plus-lighter">
            Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full md:mx-auto" />
        </motion.div>

        <div className="space-y-12 md:space-y-0">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full md:pb-24 group ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center dot for timeline */}
                <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex items-center justify-center w-6 h-6 rounded-full bg-[#121212] border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 transition-transform duration-300 group-hover:scale-150" />

                <div className={`w-full md:w-[45%] flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                  <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-lg p-8 rounded-3xl transition-colors duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] w-full group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.1)]">
                    <div className="text-purple-400 font-semibold tracking-widest text-xs uppercase mb-2 block md:hidden">
                      {exp.date}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-gray-400 font-medium mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 tracking-wide">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`hidden md:flex w-full md:w-[45%] ${isEven ? 'justify-end' : 'justify-start'} items-center`}>
                  <p className="text-xl font-medium text-gray-500 tracking-wider">
                    {exp.date}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
