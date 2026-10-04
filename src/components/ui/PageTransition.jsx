import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Wipe effect on enter */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-accent pointer-events-none"
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="fixed inset-0 z-[9998] bg-background pointer-events-none"
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </motion.div>
  );
}
