import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import { siteConfig } from '../config/site';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!siteConfig.galleryImages.length) return null;

  return (
    <PageTransition>
      <Helmet>
        <title>Gallery | {siteConfig.gymName}</title>
      </Helmet>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen">
        <h1 className="text-7xl md:text-9xl font-display uppercase tracking-widest mb-16 text-center">
          The <span className="text-stroke">Yard</span>
        </h1>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {siteConfig.galleryImages.map((src, i) => (
            <div 
              key={i} 
              className="break-inside-avoid cursor-pointer overflow-hidden group"
              onClick={() => setSelectedImage(src)}
              data-cursor="view"
            >
              <img 
                src={src} 
                alt={`Gallery ${i + 1}`} 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Lightbox" 
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
