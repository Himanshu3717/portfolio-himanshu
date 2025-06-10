'use client';

import React from 'react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'Pitchify',
      description: 'Startup Idea Platform Empowering entrepreneurs to pitch and showcase their startup ideas.',
      technologies: ['Next.js', 'React.js', 'Sanity', 'NextAuth'],
      highlights: [
        'Developed a dynamic web platform for entrepreneurs to share and gain exposure for their ideas.',
        'Designed an intuitive and user-friendly interface to enhance engagement and discovery.'
      ],
      image: '/images/pitchify.jpg',
      link: '#'
    },
    {
      title: 'Plant Disease Detection',
      description: 'AI-Powered Plant Disease Detection System.',
      technologies: ['TensorFlow', 'Keras', 'Pandas', 'Matplotlib', 'Seaborn'],
      highlights: [
        'Developed a deep learning model for automated plant disease classification using image datasets.',
        'Preprocessed images and implemented data augmentation techniques for improved model performance.',
        'Built a Convolutional Neural Network (CNN) to extract features and classify plant diseases.',
        'Evaluated the model using validation metrics and optimized accuracy through hyperparameter tuning.'
      ],
      image: '/images/plant-disease.jpg',
      link: '#'
    },
    {
      title: 'AI Trainer',
      description: 'AI-Based Fitness Trainer for Exercise Detection.',
      technologies: ['KivyMD', 'Mediapipe', 'OpenCV', 'TensorFlow', 'Python'],
      highlights: [
        'Developed a real-time AI-powered fitness trainer using computer vision for exercise tracking.',
        'Integrated Mediapipe\'s Pose Estimation to detect and analyze body movements.',
        'Built an interactive KivyMD-based UI for a seamless user experience.',
        'Implemented exercise recognition for Biceps Curls, Push-ups, Pull-ups, and Squats.'
      ],
      image: '/images/ai-trainer.jpg',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">Projects</h2>
          <div className="w-20 h-1 bg-primary dark:bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark dark:text-light">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.highlights.map((highlight, hlIndex) => (
                      <li key={hlIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={project.link}
                  className="inline-block px-4 py-2 bg-primary dark:bg-secondary text-white rounded hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 