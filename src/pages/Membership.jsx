import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import MagneticButton from '../components/ui/MagneticButton';
import { siteConfig } from '../config/site';

export default function Membership() {
  const [activePlan, setActivePlan] = useState(siteConfig.membershipPlans.find(p => p.featured)?.id || siteConfig.membershipPlans[0]?.id);

  if (!siteConfig.membershipPlans.length) return null;

  return (
    <PageTransition>
      <Helmet>
        <title>Membership | {siteConfig.gymName}</title>
        <meta name="description" content="View our membership plans and pricing." />
      </Helmet>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-9xl font-display uppercase tracking-widest mb-6">
            <span className="text-stroke">Join the</span> Ranks
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Simple pricing. No hidden fees. Select a plan and start putting in the work.
          </p>
        </div>

        {/* Offers ticker */}
        {siteConfig.offers.length > 0 && (
          <div className="bg-accent text-background py-3 px-6 text-center font-bold uppercase tracking-widest text-sm mb-16 overflow-hidden">
             <div className="animate-pulse">
                {siteConfig.offers[0]}
             </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {siteConfig.membershipPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative p-8 md:p-12 border ${plan.featured ? 'border-accent bg-foreground/5 shadow-2xl lg:-translate-y-4' : 'border-foreground/20 hover:border-foreground/50'} transition-all duration-300 group`}
              onMouseEnter={() => setActivePlan(plan.id)}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background font-bold px-6 py-2 uppercase tracking-widest text-xs">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-3xl font-display uppercase tracking-widest mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-display">₹{plan.price}</span>
                <span className="text-foreground/50 text-sm font-bold uppercase">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton 
                to="/contact" 
                className={`w-full py-4 uppercase tracking-widest font-bold text-center transition-colors block ${plan.featured ? 'bg-accent text-background hover:bg-white' : 'border-2 border-foreground hover:bg-foreground hover:text-background'}`}
              >
                Select Plan
              </MagneticButton>
            </div>
          ))}
        </div>

        {/* FAQs */}
        {siteConfig.faqs.length > 0 && (
          <div className="mt-32 max-w-3xl mx-auto">
            <h2 className="text-5xl font-display uppercase tracking-widest mb-12 text-center">FAQ</h2>
            <div className="space-y-8">
              {siteConfig.faqs.map((faq, i) => (
                <div key={i} className="border-b border-foreground/20 pb-6">
                  <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                  <p className="text-foreground/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
