'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Programming',
      items: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Next.js', 'Express.js', 'Node.js']
    },
    {
      category: 'Database Management',
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'NoSQL']
    },
    {
      category: 'AI & Machine Learning',
      items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP', 'Computer Vision', 'Artificial Intelligence']
    },
    {
      category: 'Development Tools',
      items: ['Git', 'GitHub', 'Jenkins', 'Jira', 'Postman', 'REST API', 'Cloud Computing', 'Sanity Studio']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">Skills</h2>
          <div className="w-20 h-1 bg-primary dark:bg-secondary mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillCategory, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-secondary">{skillCategory.category}</h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    variants={skillVariants}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "var(--primary)",
                      color: "white"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 