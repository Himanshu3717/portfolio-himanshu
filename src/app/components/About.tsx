'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-purple-950 to-blue-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("/images/grid-pattern.png")', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white hover:text-blue-300 transition-colors duration-300">About Me</h2>
          <div className="w-16 h-1 sm:w-20 bg-blue-500 mx-auto transition-all duration-300 group-hover:w-24"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/3 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg relative transition-transform duration-300 hover:scale-105"> 
              <Image 
                src="/profile.png" 
                alt="Himanshu Pathak"
                fill 
                className="object-cover transition-transform duration-300 hover:scale-110"
                priority 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white hover:text-blue-300 transition-colors duration-300"
            >
              Full Stack Developer & AI/ML Enthusiast
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-800 to-blue-800 mb-5 sm:mb-6 leading-relaxed hover:text-gray-200 transition-colors duration-300"
            >
              Enthusiastic about the AI revolution and eager to be a contributing part of it. Passionate about leveraging problem-solving skills, adaptability and technical expertise to drive innovation in software development.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 sm:mb-6"
            >
              <div>
                <p className="text-gray-200 font-medium text-sm sm:text-base hover:text-white transition-colors duration-300">Name: <span className="text-gray-300 hover:text-gray-200 transition-colors duration-300">Himanshu Pathak</span></p>
              </div>
              <div>
                <p className="text-gray-200 font-medium text-sm sm:text-base hover:text-white transition-colors duration-300">Email: <span className="text-gray-300 hover:text-gray-200 transition-colors duration-300">pathakhimanshu1233@gmail.com</span></p>
              </div>
              <div>
                <p className="text-gray-200 font-medium text-sm sm:text-base hover:text-white transition-colors duration-300">Phone: <span className="text-gray-300 hover:text-gray-200 transition-colors duration-300">+919324318362</span></p>
              </div>
              <div>
                <p className="text-gray-200 font-medium text-sm sm:text-base hover:text-white transition-colors duration-300">Location: <span className="text-gray-300 hover:text-gray-200 transition-colors duration-300">Mumbai, Maharashtra, India</span></p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
            >
              <a 
                href="https://www.linkedin.com/in/himanshu-pathak-10a9b9256/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base transform hover:scale-105"
              >
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Himanshu3717/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors flex items-center gap-2 text-sm sm:text-base transform hover:scale-105"
              >
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 