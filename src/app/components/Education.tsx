'use client';

import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B. Tech in Information Technology (Specialization in AI/ML)',
      institution: 'Vidyalankar Institute Of Technology',
      gpa: 'GPA: 9.84',
      duration: 'Jan 2022 — Dec 2026',
      location: 'Vadala, India'
    },
    {
      degree: 'HSC',
      institution: 'Vani Vidyalaya Junior College',
      gpa: 'GPA: 80.33',
      duration: 'Jan 2020 — Dec 2022',
      location: 'Mulund, India'
    },
    {
      degree: 'SSC',
      institution: 'Mithila English High School',
      gpa: 'GPA: 89.80',
      duration: 'Jan 2019 — Dec 2020',
      location: 'Thane, India'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">Education</h2>
          <div className="w-20 h-1 bg-primary dark:bg-secondary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-primary dark:text-secondary">{edu.degree}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{edu.duration}</span>
                </div>
                <h4 className="text-lg font-medium text-dark dark:text-light mb-2">{edu.institution}</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <span className="text-gray-700 dark:text-gray-300">{edu.gpa}</span>
                  <span className="text-gray-600 dark:text-gray-400">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 