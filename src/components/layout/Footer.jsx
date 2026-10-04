import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-8 border-t border-foreground/10 relative overflow-hidden">
      {/* Huge Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none flex justify-center -translate-y-1/4">
        <span className="text-[20vw] font-display whitespace-nowrap leading-none text-foreground text-stroke">{siteConfig.gymName}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <h2 className="text-4xl font-display text-accent mb-4">{siteConfig.gymName}</h2>
            <p className="text-foreground/80 mb-6 max-w-sm">
              {siteConfig.tagline}
            </p>
            <p className="text-foreground/80 mb-2">{siteConfig.address}</p>
            <p className="text-accent font-bold text-lg mb-2">{siteConfig.phone}</p>
            <a href={`mailto:${siteConfig.email}`} className="text-foreground/80 hover:text-accent transition-colors block mb-4">{siteConfig.email}</a>
            <div className="flex gap-4">
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors underline uppercase tracking-widest text-sm font-bold">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display uppercase tracking-widest mb-6">Explore</h3>
            <ul className="flex flex-col gap-3">
              {['About', 'Programs', 'Trainers', 'Membership', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-foreground/70 hover:text-accent transition-colors uppercase tracking-wider text-sm font-bold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-display uppercase tracking-widest mb-6">Hours</h3>
            <div className="text-foreground/70 flex flex-col gap-2">
              {siteConfig.openingHours.split(' | ').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          {/* Action */}
          <div>
            <h3 className="text-xl font-display uppercase tracking-widest mb-6">Ready?</h3>
            <Link 
              to="/membership" 
              className="inline-block bg-accent text-background font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {siteConfig.gymName}. All rights reserved.</p>
          <p>Prototype Design by Agent</p>
        </div>
      </div>
    </footer>
  );
}
