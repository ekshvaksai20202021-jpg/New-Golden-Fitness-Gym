import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/ui/PageTransition';
import MagneticButton from '../components/ui/MagneticButton';
import { siteConfig } from '../config/site';

export default function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Page Not Found | {siteConfig.gymName}</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* Giant background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10 select-none">
          <span className="text-[40vw] font-display leading-none">404</span>
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-display uppercase tracking-widest mb-6">Dead End</h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 uppercase tracking-wider">
            Looks like you've maxed out your reps here.
          </p>
          <MagneticButton to="/" className="bg-accent text-background font-bold px-12 py-6 uppercase tracking-widest text-lg hover:bg-white transition-colors">
            Back to Home
          </MagneticButton>
        </div>
      </div>
    </PageTransition>
  );
}
