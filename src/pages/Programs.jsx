import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/ui/PageTransition';
import MagneticButton from '../components/ui/MagneticButton';
import { siteConfig } from '../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function Programs() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  useEffect(() => {
    if (!siteConfig.programs.length) return;

    let ctx = gsap.context(() => {
      if (isDesktop && scrollContainerRef.current) {
        // Horizontal scroll effect on desktop
        const sections = gsap.utils.toArray('.program-card');
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + scrollContainerRef.current.offsetWidth
          }
        });
      } else {
         // Vertical fade up on mobile
         const sections = gsap.utils.toArray('.program-card');
         sections.forEach(sec => {
           gsap.from(sec, {
             opacity: 0,
             y: 50,
             duration: 1,
             scrollTrigger: {
               trigger: sec,
               start: "top 80%",
             }
           });
         });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  if (!siteConfig.programs.length) return null;

  return (
    <PageTransition>
      <Helmet>
        <title>Programs | {siteConfig.gymName}</title>
        <meta name="description" content="Explore our training programs and classes." />
      </Helmet>

      <div ref={containerRef} className="pt-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <h1 className="text-7xl md:text-9xl font-display uppercase tracking-widest mb-6">
            The <span className="text-stroke">Work</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Pick your poison. From raw strength to metabolic conditioning, our programs are designed to break you down and build you back stronger.
          </p>
        </div>

        {/* Desktop: Horizontal Scroll Container. Mobile: Vertical flex */}
        <div 
          ref={scrollContainerRef} 
          className={`flex ${isDesktop ? 'flex-row h-[70vh] w-[400vw] lg:w-[300vw]' : 'flex-col gap-12 px-6 pb-24'}`}
        >
          {siteConfig.programs.map((program, i) => (
            <div 
              key={program.id} 
              className={`program-card relative group ${isDesktop ? 'w-screen h-full px-6 lg:px-12 flex-shrink-0' : 'w-full aspect-[4/5]'}`}
            >
              <div className="w-full h-full relative overflow-hidden flex items-end">
                <div className="absolute inset-0 z-0">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                
                <div className="relative z-10 p-8 md:p-16 w-full max-w-4xl">
                  <div className="text-accent font-bold text-xl mb-4">0{i + 1}</div>
                  <h2 className="text-5xl md:text-8xl font-display uppercase tracking-widest mb-6">{program.title}</h2>
                  <p className="text-lg md:text-2xl text-foreground/90 mb-8 max-w-2xl">{program.description}</p>
                  <MagneticButton to="/membership" className="border border-white/50 px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-background transition-colors backdrop-blur-sm">
                    Join Program
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isDesktop && <div className="h-32" /> /* Spacer for after pin */}
      </div>
    </PageTransition>
  );
}
