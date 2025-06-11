'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: '296b9f1e-b218-4463-b67a-fe7f65e3ece0'
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message || 'Message sent successfully!');
        setFormData({ ...formData, name: '', email: '', message: '' });
      } else {
        setStatus(result.message || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

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
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-purple-950 to-blue-950 text-white relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">Contact Me</h2>
          <p className="text-lg sm:text-xl text-gray-400 hover:text-gray-300 transition-colors duration-300">Let's connect and build something amazing.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 justify-center items-stretch">
          {/* Left Column: Contact Info */}
          <motion.div
            className="md:w-1/2 bg-transparent rounded-lg p-6 sm:p-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 hover:text-blue-200 transition-colors duration-300">Drop me a message</h3>
            <p className="text-base sm:text-lg text-gray-300 p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-800 to-blue-800 mb-8 leading-relaxed hover:text-gray-200 transition-colors duration-300">
            I’m a motivated Full Stack Developer and AI/ML enthusiast, eager to kickstart my career by contributing to real-world projects. As a fresher, I'm ready to learn, grow, and add value to innovative teams. Open to job opportunities and collaborations—let’s connect!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.43 15.43 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27 12.37 12.37 0 003.1.84c.54.08.94.55.94 1.1s-.4.86-.94.94a13.37 13.37 0 01-3.1.84c-1.5-.08-2.9-.4-4.2-.95a22.25 22.25 0 01-6.59-6.59A13.37 13.37 0 013 4c.08-.54.55-.94 1.1-.94.4-.08.87.16 1.1.28.37.19.74.37 1.09.27L9 3.63a1 1 0 01.27-1.09 12.37 12.37 0 00-.84-3.1c-.08-.54-.55-.94-1.1-.94a13.37 13.37 0 01-3.1-.84c-1.5.08-2.9.4-4.2.95a22.25 22.25 0 01-6.59 6.59A13.37 13.37 0 013 20.37c.08.54.55.94 1.1.94.4.08.87-.16 1.1-.28.37-.19.74-.37 1.09-.27L6.62 10.79z"/></svg>
                </div>
                <span className="text-gray-200 text-lg hover:text-white transition-colors duration-300">+919324318362</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <span className="text-gray-200 text-lg hover:text-white transition-colors duration-300">pathakhimanshu1233@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                </div>
                <span className="text-gray-200 text-lg hover:text-white transition-colors duration-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="md:w-1/2 bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl border border-gray-700 mt-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg sm:text-xl font-medium text-gray-200 mb-2 hover:text-white transition-colors duration-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 text-base sm:text-lg transition-all duration-300 hover:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg sm:text-xl font-medium text-gray-200 mb-2 hover:text-white transition-colors duration-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 text-base sm:text-lg transition-all duration-300 hover:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg sm:text-xl font-medium text-gray-200 mb-2 hover:text-white transition-colors duration-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 text-base sm:text-lg transition-all duration-300 hover:border-blue-500"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg transform hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
              {status && (
                <p className="text-center mt-4 text-primary dark:text-secondary text-base sm:text-lg hover:text-blue-400 dark:hover:text-purple-400 transition-colors duration-300">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 