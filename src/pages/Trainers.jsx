import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/ui/PageTransition';
import { siteConfig } from '../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function Trainers() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!siteConfig.trainers.length) return;

    const ctx = gsap.context(() => {
      gsap.from(".trainer-card", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trainers-grid",
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!siteConfig.trainers.length) return null;

  return (
    <PageTransition>
      <Helmet>
        <title>Trainers | {siteConfig.gymName}</title>
        <meta name="description" content="Meet the expert trainers at our facility." />
      </Helmet>

      <div ref={containerRef} className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <h1 className="text-7xl md:text-9xl font-display uppercase tracking-widest mb-6">
            The <span className="text-stroke">Squad</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            No cheerleaders here. Just experienced coaches who know how to push you past your limits safely and effectively.
          </p>
        </div>

        <div className="trainers-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card group relative aspect-[3/4] overflow-hidden bg-foreground/5 cursor-crosshair">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:-translate-y-4"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-display uppercase tracking-widest mb-2 text-white">{trainer.name}</h3>
                
                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {trainer.specialties.map(spec => (
                    <span key={spec} className="text-xs uppercase tracking-widest font-bold bg-accent text-background px-3 py-1">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
