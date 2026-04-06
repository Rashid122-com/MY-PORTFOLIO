'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after a while
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] py-32 px-6 sm:px-12 md:px-24 z-20 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 item-center">
        
        {/* Contact Info */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Let's <br /> Collaborate.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 font-light mb-12 group-hover:text-gray-200 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to build something amazing? Drop a message and let's get talking about your next big idea.
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" 
            />
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.input 
                    required 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all duration-300 peer" 
                    whileFocus={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border border-purple-500/0 peer-focus:border-purple-500/50 shadow-[0_0_0_0_rgba(168,85,247,0)] peer-focus:shadow-[0_0_20px_0_rgba(168,85,247,0.2)] pointer-events-none transition-all duration-500" 
                  />
                </motion.div>
                
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.input 
                    required 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all duration-300 peer" 
                    whileFocus={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border border-purple-500/0 peer-focus:border-purple-500/50 shadow-[0_0_0_0_rgba(168,85,247,0)] peer-focus:shadow-[0_0_20px_0_rgba(168,85,247,0.2)] pointer-events-none transition-all duration-500" 
                  />
                </motion.div>

                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.textarea 
                    required 
                    rows={4} 
                    placeholder="What are we building?"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all duration-300 resize-none peer" 
                    whileFocus={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border border-purple-500/0 peer-focus:border-purple-500/50 shadow-[0_0_0_0_rgba(168,85,247,0)] peer-focus:shadow-[0_0_20px_0_rgba(168,85,247,0.2)] pointer-events-none transition-all duration-500" 
                  />
                </motion.div>

                <motion.button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="relative w-full overflow-hidden bg-white text-black font-semibold rounded-2xl px-6 py-4 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="relative z-10"
                    animate={{ opacity: isSubmitting ? [1, 0.6, 1] : 1 }}
                    transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], type: "spring", stiffness: 100 }}
                className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-3xl p-12 text-center"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#4ade80" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </motion.svg>
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Message Sent!
                </motion.h3>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  I'll get back to you as soon as possible.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
