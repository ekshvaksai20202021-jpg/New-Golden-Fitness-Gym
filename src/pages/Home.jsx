import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import Marquee from '../components/ui/Marquee';
import MagneticButton from '../components/ui/MagneticButton';
import { siteConfig } from '../config/site';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Staggered Text Reveal
      gsap.from(".hero-char", {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      });

      // Scroll Indicator fade
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "30% top",
          scrub: true
        }
      });

      // Stats counter
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isK = counter.getAttribute('data-k') === 'true';
        
        ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 },
              onUpdate: function() {
                counter.innerHTML = Math.round(this.targets()[0].innerHTML) + (isK ? 'K+' : '+');
              }
            });
          }
        });
      });

      // Wipes on images
      const revealImages = document.querySelectorAll('.reveal-img');
      revealImages.forEach(img => {
        gsap.from(img, {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          }
        });
      });
      
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <Helmet>
        <title>{siteConfig.gymName} - {siteConfig.tagline}</title>
        <meta name="description" content={siteConfig.tagline} />
      </Helmet>

      <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-background">
        <div 
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${siteConfig.galleryImages[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="relative h-full flex flex-col items-center justify-center pt-20 px-4 z-10">
          <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-display text-center uppercase tracking-tighter flex flex-wrap justify-center overflow-hidden">
            {siteConfig.gymName.split('').map((char, i) => (
              <span key={i} className={`hero-char inline-block ${char === ' ' ? 'w-[3vw]' : ''}`}>
                {char}
              </span>
            ))}
          </h1>
          <p className="hero-char mt-8 text-xl md:text-3xl font-bold uppercase tracking-widest text-accent">
            {siteConfig.tagline}
          </p>
          
          <div className="hero-char mt-12">
            <MagneticButton to="/membership" className="bg-accent text-background font-bold px-10 py-5 uppercase tracking-widest text-lg hover:bg-white transition-colors">
              Start Training
            </MagneticButton>
          </div>
        </div>

        <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 uppercase tracking-widest text-xs font-bold">
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-foreground/30 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-accent"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />
          </div>
        </div>
      </div>

      <div className="py-8 bg-accent text-background rotate-[-2deg] scale-105 my-24 border-y-4 border-foreground overflow-hidden">
        <Marquee 
          text="NO EXCUSES • JUST REPS • LIFT HEAVY • STAY HUMBLE •" 
          className="text-6xl font-display uppercase tracking-widest py-2"
          speed={2}
        />
      </div>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 border-t border-b border-foreground/20 py-16">
          <div className="text-center">
            <h3 className="text-6xl md:text-8xl font-display text-accent mb-2 stat-number" data-target={siteConfig.stats.members / 1000} data-k="true">0</h3>
            <p className="uppercase tracking-widest text-sm font-bold text-foreground/70">Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl md:text-8xl font-display text-accent mb-2 stat-number" data-target={siteConfig.stats.trainers}>0</h3>
            <p className="uppercase tracking-widest text-sm font-bold text-foreground/70">Expert Trainers</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl md:text-8xl font-display text-accent mb-2 stat-number" data-target={siteConfig.stats.years}>0</h3>
            <p className="uppercase tracking-widest text-sm font-bold text-foreground/70">Years Strong</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl md:text-8xl font-display text-accent mb-2 stat-number" data-target={siteConfig.stats.sqft / 1000} data-k="true">0</h3>
            <p className="uppercase tracking-widest text-sm font-bold text-foreground/70">Sq Ft Space</p>
          </div>
        </div>
      </section>

      {/* Why Us / About Teaser */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[15vw] font-display text-foreground/5 select-none leading-none z-0">
              01
            </div>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-widest mb-8 relative z-10">
              Raw. <span className="text-stroke">Unfiltered.</span> <br/> Real Results.
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-lg relative z-10">
              We aren't a wellness spa. We are a gritty, industrial training facility built for people who want to put in the work. State-of-the-art equipment meets an old-school work ethic.
            </p>
            <MagneticButton to="/about" className="border border-foreground px-8 py-4 uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-colors relative z-10 flex items-center gap-2">
              Our Story <ArrowUpRight size={20} />
            </MagneticButton>
          </div>
          <div className="relative aspect-[4/5] w-full reveal-img overflow-hidden" data-cursor="view">
            <img src={siteConfig.galleryImages[1]} alt="Gym floor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Programs Teaser */}
      {siteConfig.programs.length > 0 && (
        <section className="py-32 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 flex justify-between items-end">
            <div>
              <div className="text-accent font-bold uppercase tracking-widest mb-4">02 // The Work</div>
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-widest">Programs</h2>
            </div>
            <Link to="/programs" className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest hover:text-accent transition-colors">
              View All <ArrowUpRight size={24} />
            </Link>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.programs.slice(0, 2).map(program => (
              <div key={program.id} className="group relative aspect-[16/9] overflow-hidden" data-cursor="view">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl md:text-5xl font-display text-white uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">{program.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/80 mt-2">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/programs" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest hover:text-accent transition-colors">
              View All <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-40 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={siteConfig.galleryImages[3]} alt="Join CTA" className="w-full h-full object-cover opacity-30 grayscale" loading="lazy" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-9xl font-display uppercase tracking-widest mb-8">
            Time to <span className="text-accent block">Commit</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            {siteConfig.offers[0]}
          </p>
          <MagneticButton to="/membership" className="bg-accent text-background font-bold px-12 py-6 uppercase tracking-widest text-xl hover:bg-white transition-colors">
            Claim Your Spot
          </MagneticButton>
        </div>
      </section>

    </PageTransition>
  );
}
