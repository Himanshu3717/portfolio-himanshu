'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="w-16 h-16 border-4 border-primary dark:border-secondary border-t-transparent rounded-full"
      />
    </motion.div>
  );
};

export default LoadingScreen; 