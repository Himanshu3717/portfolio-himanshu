'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/icons/html.jpg' },
    { name: 'CSS', icon: '/icons/css.png' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'TypeScript', icon: '/icons/typescript.webp' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.png' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind-css.png' },
    { name: 'Node.js', icon: '/icons/nodejs-logo.svg' },
    { name: 'Express.js', icon: '/icons/express js.png' },
    { name: 'MongoDB', icon: '/icons/mongodb.webp' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
    { name: 'Python', icon: '/icons/python.jpeg' },
    { name: 'TensorFlow', icon: '/icons/tensorflow.png' },
    { name: 'Keras', icon: '/icons/keras.png' },
    { name: 'Scikit-learn', icon: '/icons/sk-learn.png' },
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'GitHub', icon: '/icons/github.png' },
    { name: 'Figma', icon: '/icons/figma.png' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-purple-950 to-blue-950 text-white relative overflow-hidden">
      {/* Optional: Add a subtle pattern overlay if desired, e.g., using a background image */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("/images/grid-pattern.png")', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4 hover:from-blue-500 hover:to-purple-500 transition-all duration-300">My Skills</h2>
          <p className="text-lg sm:text-xl text-gray-400 hover:text-gray-300 transition-colors duration-300">Technologies and tools I excel in.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-lg shadow-xl transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl hover:scale-105 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src={skill.icon} 
                  alt={skill.name} 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 