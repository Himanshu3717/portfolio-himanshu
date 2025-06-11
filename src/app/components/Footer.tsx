'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-800 dark:bg-gray-950 text-white py-10 sm:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 sm:mb-8">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-0 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">
            HP
          </Link>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-lg">
            <Link href="#home" className="hover:text-blue-300 transition-colors duration-300">Home</Link>
            <Link href="#about" className="hover:text-blue-300 transition-colors duration-300">About</Link>
            <Link href="#skills" className="hover:text-blue-300 transition-colors duration-300">Skills</Link>
            <Link href="#projects" className="hover:text-blue-300 transition-colors duration-300">Projects</Link>
            <Link href="#contact" className="hover:text-blue-300 transition-colors duration-300">Contact</Link>
          </nav>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-800 pt-6 sm:pt-8 text-gray-400 text-sm sm:text-base">
          <p className="hover:text-gray-300 transition-colors duration-300">&copy; {new Date().getFullYear()} Himanshu Pathak. All rights reserved.</p>
          <p className="mt-2 hover:text-gray-300 transition-colors duration-300">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 