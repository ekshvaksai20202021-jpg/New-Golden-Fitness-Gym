import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import MagneticButton from '../components/ui/MagneticButton';
import { siteConfig } from '../config/site';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 4000);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact | {siteConfig.gymName}</title>
      </Helmet>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-7xl md:text-9xl font-display uppercase tracking-widest mb-16">
          Get in <span className="text-stroke">Touch</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-display uppercase tracking-widest mb-8">Drop a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="NAME" 
                  required
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-4 px-2 text-lg uppercase focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30 font-bold tracking-wider"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="PHONE" 
                  required
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-4 px-2 text-lg uppercase focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30 font-bold tracking-wider"
                />
              </div>
              <div>
                <textarea 
                  placeholder="GOAL (OPTIONAL)" 
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-4 px-2 text-lg uppercase focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30 font-bold tracking-wider resize-none"
                />
              </div>
              
              <div className="pt-4">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent font-bold uppercase tracking-widest text-lg p-4 border border-accent inline-block"
                  >
                    Message Received. We'll hit you up.
                  </motion.div>
                ) : (
                  <button type="submit" className="bg-accent text-background font-bold px-12 py-4 uppercase tracking-widest text-lg hover:bg-white transition-colors w-full md:w-auto">
                    Send It
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-display uppercase tracking-widest mb-4 text-foreground/50">Location</h3>
              <p className="text-2xl font-bold">{siteConfig.address}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-display uppercase tracking-widest mb-4 text-foreground/50">Contact</h3>
              <p className="text-2xl font-bold hover:text-accent transition-colors">
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </p>
              <p className="text-xl hover:text-accent transition-colors mt-2">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-display uppercase tracking-widest mb-4 text-foreground/50">Hours</h3>
              <div className="text-xl font-bold flex flex-col gap-2">
                {siteConfig.openingHours.split(' | ').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* Map Placeholder or Embed */}
            <div className="aspect-video w-full border-2 border-foreground/10 grayscale hover:grayscale-0 transition-all duration-700 p-2">
               <iframe 
                  src={siteConfig.mapEmbedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gym Location"
                />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
