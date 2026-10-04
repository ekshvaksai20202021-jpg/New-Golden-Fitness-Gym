import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/ui/PageTransition';
import { siteConfig } from '../config/site';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline items staggered fade up
      gsap.from(".timeline-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
        }
      });

      // Image reveals
      const revealImages = document.querySelectorAll('.reveal-img');
      revealImages.forEach(img => {
        gsap.from(img, {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <Helmet>
        <title>About Us | {siteConfig.gymName}</title>
        <meta name="description" content={`Learn about the story and facilities of ${siteConfig.gymName}.`} />
      </Helmet>

      <div ref={containerRef} className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-7xl md:text-9xl font-display uppercase tracking-widest mb-8">
            Our <span className="text-stroke">Story</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-foreground/80">
            <p>
              Founded {siteConfig.stats.years} years ago, {siteConfig.gymName} was built on a simple premise: fitness isn't a luxury, it's a discipline. We stripped away the juice bars, the spa treatments, and the fluff. What's left is pure, unadulterated training space.
            </p>
            <p>
              Located in the heart of {siteConfig.city}, our {siteConfig.stats.sqft.toLocaleString()} sq ft facility is designed for athletes, by athletes. Whether you're a powerlifter, a yogi, or someone just starting their journey, you'll find your ground here.
            </p>
          </div>
        </div>

        {/* Big Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          <div className="md:col-span-8 aspect-video reveal-img overflow-hidden relative">
            <img src={siteConfig.galleryImages[0]} alt="Gym facility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
          </div>
          <div className="md:col-span-4 aspect-square md:aspect-auto md:h-full reveal-img overflow-hidden relative">
            <img src={siteConfig.galleryImages[2]} alt="Weights" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
          </div>
        </div>

        {/* Timeline / Mission */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 timeline-container">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-display uppercase tracking-widest sticky top-32">The Mission</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-12">
            <div className="timeline-item border-l-4 border-accent pl-8 py-2">
              <h3 className="text-3xl font-display uppercase tracking-widest mb-4">No Ego, Only Effort</h3>
              <p className="text-foreground/70">Leave your ego at the door. Everyone here is working on themselves. Respect the iron, respect each other.</p>
            </div>
            <div className="timeline-item border-l-4 border-accent pl-8 py-2">
              <h3 className="text-3xl font-display uppercase tracking-widest mb-4">World-Class Equipment</h3>
              <p className="text-foreground/70">Eleiko barbells, Rogue racks, and dedicated platforms. We invest in gear that handles heavy loads and high volume.</p>
            </div>
            <div className="timeline-item border-l-4 border-accent pl-8 py-2">
              <h3 className="text-3xl font-display uppercase tracking-widest mb-4">Community Driven</h3>
              <p className="text-foreground/70">With over {siteConfig.stats.members}+ active members, you aren't just joining a gym. You're joining a tribe that pushes you further.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
