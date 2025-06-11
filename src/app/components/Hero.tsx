'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900 text-white py-16 sm:py-20">
      {/* Optional: Add a subtle pattern overlay if desired, e.g., using a background image */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("/images/grid-pattern.png")', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white hover:text-gray-200 transition-colors duration-300">
              Hi, I'm <span className="text-blue-300 hover:text-blue-200 transition-colors duration-300">Himanshu Pathak</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-gray-200 hover:text-gray-100 transition-colors duration-300">
              Full Stack Developer & AI/ML Enthusiast
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl md:max-w-none mx-auto md:mx-0 hover:text-gray-200 transition-colors duration-300">
              Passionate about building innovative solutions and exploring the frontiers of technology.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="#contact" 
                className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base transform hover:scale-105 inline-block"
              >
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                download="Himanshu_Pathak_Resume.pdf"
                className="px-5 py-2 sm:px-6 sm:py-3 border-2 border-blue-600 text-blue-300 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base transform hover:scale-105 inline-block"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg relative transition-transform duration-300 hover:scale-105">
              <Image 
                src="/profile.png" 
                alt="Himanshu Pathak"
                fill 
                className="object-cover transition-transform duration-300 hover:scale-110"
                priority 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 