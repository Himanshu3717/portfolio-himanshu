'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'InstaWiz – Instagram Automation Platform',
      description: 'Developed a full-stack web app to automate Instagram tasks like DMs, comments, and media handling using OAuth and token-based API integration.',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Clerk Auth', 'Instagram Graph API'],
      resultImpact: 'Improved user productivity by automating 70% of Instagram tasks and reducing manual effort. Enhanced system reliability with secure token management and real-time automation feedback.',
      image: '/InstaWiz.webp',
      link: '#',
      github: 'https://github.com/Himanshu3717/InstaWiz',
    },
    {
      title: 'ExamHub – Exam Preparation & Management Platform',
      description: 'Built a full-stack web app using the T3 Stack to list and manage exam information with features like scraping, email alerts, and dark mode UI.',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'tRPC', 'Prisma', 'PostgreSQL', 'Clerk Auth', 'Cheerio', 'Recharts'],
      resultImpact: 'Automated exam data collection via scraping to reduce manual effort, while delivering a responsive user experience with secure login and real-time features.',
      image: '/Examhub.jpeg',
      link: '#',
      github: 'https://github.com/Himanshu3717/ExamHub',
    },
    {
      title: 'Pitchify',
      description: 'Startup Idea Platform Empowering entrepreneurs to pitch and showcase their startup ideas.',
      technologies: ['Next.js', 'React.js', 'Sanity', 'NextAuth'],
      resultImpact: 'Created a platform that facilitates idea sharing and collaboration among aspiring entrepreneurs, enhancing visibility and connection.',
      image: '/startups.jpeg',
      link: '#',
      github: '#',
    },
    {
      title: 'Plant Disease Detection',
      description: 'AI-Powered Plant Disease Detection System.',
      technologies: ['TensorFlow', 'Keras', 'Pandas', 'Matplotlib', 'Seaborn'],
      resultImpact: 'Developed a deep learning model for automated plant disease classification, achieving high accuracy in identifying various diseases.',
      image: '/plant disease.jpeg',
      link: '#',
      github: '#',
    },
    {
      title: 'AI Trainer',
      description: 'AI-Based Fitness Trainer for Exercise Detection.',
      technologies: ['KivyMD', 'Mediapipe', 'OpenCV', 'TensorFlow', 'Python'],
      resultImpact: 'Built a real-time AI-powered fitness trainer capable of accurately tracking and analyzing user movements for multiple exercises.',
      image: '/ai trainer.jpeg',
      link: '#',
      github: '#',
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-purple-950 to-blue-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("/images/grid-pattern.png")', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4 hover:from-blue-500 hover:to-purple-500 transition-all duration-300">Recent Work</h2>
          <p className="text-lg sm:text-xl text-gray-400 hover:text-gray-300 transition-colors duration-300">A collection of projects I've worked on.</p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col mb-16 sm:mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 sm:gap-12 group p-6 rounded-lg shadow-xl bg-gradient-to-br from-purple-800 to-blue-800`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full md:w-1/2 relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left p-4 sm:p-0">
              <p className="text-blue-400 font-semibold mb-1 sm:mb-2 hover:text-blue-300 transition-colors duration-300">Featured Project</p>
              <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-400 transition-all duration-300">
                {project.title}
              </h3>
              <div className="p-5 sm:p-6 rounded-lg shadow-xl mb-5 sm:mb-6 transition-all duration-300 bg-gradient-to-br from-purple-800 to-blue-800 hover:shadow-2xl">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                <p className="text-gray-400 text-xs sm:text-sm italic mb-3 sm:mb-4 hover:text-gray-300 transition-colors duration-300">Tools/Methods/Frameworks: {project.technologies.join(', ')}</p>
                <p className="text-gray-300 text-sm sm:text-base hover:text-gray-200 transition-colors duration-300">Result/Impact: {project.resultImpact}</p>
              </div>
              <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                {project.github && (
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.683-.233.683-.586 0-.29-.01-1.055-.015-2.075-2.78-.607-3.37-1.353-3.37-1.353-.454-1.15-.15-1.465-.15-1.465.35-.246.024-.242.024-.242.388.03.59.398.59.398.347.59.9.418 1.113.318.036-.247.135-.418.238-.517-2.654-.298-5.46-1.308-5.46-5.839 0-1.29.462-2.349 1.22-3.17-.123-.298-.53-1.5.107-3.132 0 0 .993-.32 3.25-.12.94-.26 1.944-.39 2.943-.398 1.00-.008 2.003.12 2.943.398 2.257-.2 3.25.12 3.25.12.638 1.632.23 2.834.107 3.132.758.821 1.22 1.88 1.22 3.17 0 4.542-2.81 5.532-5.474 5.822.42.36.808 1.096.808 2.222 0 1.606-.015 2.896-.015 3.286 0 .357.21.674.688.587C21.137 20.2 24 16.445 24 12.017 24 6.484 19.522 2 12 2Z" clipRule="evenodd" /></svg>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;