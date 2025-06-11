'use client';

import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    duration: '2022-2026',
    degree: 'B. Tech in Information Technology (Specialization in AI/ML)',
    institution: 'Vidyalankar Institute of Technology, Mumbai, India',
    score: 'GPA: 9.84/10',
    details: 'Among the top 5% of the batch. Relevant Coursework: Data Structures, Algorithms, Database Management, Software Engineering.',
  },
  {
    duration: '2020-2022',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Vani Vidyalaya Junior College, Mumbai, India',
    score: '80.33%',
    details: '',
  },
  {
    duration: '2019-2020',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Mithila English High School, Mumbai, India',
    score: '89.80%',
    details: '',
  },
];

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-16 sm:py-20 bg-gradient-to-br from-purple-950 to-blue-950 text-white relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">Education</h2>
          <p className="text-lg sm:text-xl text-gray-400 hover:text-gray-300 transition-colors duration-300">My academic journey and qualifications.</p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-purple-800 to-blue-800"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left">
                <p className="text-blue-300 text-lg sm:text-xl font-semibold mb-2 hover:text-blue-200 transition-colors duration-300">{item.duration}</p>
                <p className="text-gray-400 text-sm sm:text-base hover:text-gray-300 transition-colors duration-300">{item.institution}</p>
                <p className="text-gray-400 text-sm sm:text-base mt-1 hover:text-gray-300 transition-colors duration-300">{item.score}</p>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white hover:text-blue-300 transition-colors duration-300">{item.degree}</h3>
                {item.details && <p className="text-gray-300 text-base sm:text-lg leading-relaxed p-4 rounded-lg shadow-md bg-gradient-to-br from-purple-800 to-blue-800 hover:text-gray-200 transition-colors duration-300">{item.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 