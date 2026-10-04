import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee({ text, direction = 1, speed = 1, className = "" }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let xPercent = 0;
    let requestAnimationFrameId;

    const animate = () => {
      if (!textRef.current) return;
      
      if (xPercent < -50) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -50;
      }
      
      gsap.set(textRef.current, { xPercent: xPercent });
      
      requestAnimationFrameId = requestAnimationFrame(animate);
      xPercent -= 0.005 * speed * direction;
    };

    requestAnimationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestAnimationFrameId);
    };
  }, [direction, speed]);

  // We repeat the text many times to ensure it overflows the screen twice,
  // so moving it by 50% loops it seamlessly.
  const repeatedText = Array(10).fill(text);

  return (
    <div ref={containerRef} className={`relative overflow-hidden flex whitespace-nowrap ${className}`}>
      <div ref={textRef} className="flex whitespace-nowrap w-max">
        {repeatedText.map((t, i) => (
          <span key={i} className="pr-8">{t}</span>
        ))}
      </div>
    </div>
  );
}
