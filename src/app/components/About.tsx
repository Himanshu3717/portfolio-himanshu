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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">About Me</h2>
          <div className="w-20 h-1 bg-primary dark:bg-secondary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/3 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary dark:border-secondary shadow-lg relative">
              <Image 
                src="/profile.jpg"
                alt="Himanshu Pathak"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 text-dark dark:text-light"
            >
              Full Stack Developer & AI/ML Enthusiast
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 mb-6"
            >
              Enthusiastic about the AI revolution and eager to be a contributing part of it. Passionate about leveraging problem-solving skills, adaptability and technical expertise to drive innovation in software development.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Name: <span className="text-gray-600 dark:text-gray-400">Himanshu Pathak</span></p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Email: <span className="text-gray-600 dark:text-gray-400">pathakhimanshu1233@gmail.com</span></p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Phone: <span className="text-gray-600 dark:text-gray-400">+919324318362</span></p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Location: <span className="text-gray-600 dark:text-gray-400">Mumbai, Maharashtra, India</span></p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="https://www.linkedin.com/in/himanshu-pathak-10a9b9256/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://github.com/Himanshu3717/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 