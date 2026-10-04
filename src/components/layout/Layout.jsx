import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import WhatsAppButton from '../ui/WhatsAppButton';
import { siteConfig } from '../../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Initialize Lenis & GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {siteConfig.showPrototypeBadge && (
        <div className="fixed top-0 left-0 right-0 bg-accent text-background text-xs font-bold py-1 px-4 text-center z-[100] uppercase tracking-widest">
          Prototype / Sample Design
        </div>
      )}
      
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow pt-[40px] md:pt-[0px] w-full overflow-hidden">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
