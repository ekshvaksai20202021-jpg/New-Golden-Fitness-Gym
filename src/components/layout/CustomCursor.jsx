import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isLink = target.closest('a') || target.closest('button') || target.closest('[role="button"]');
      const isDraggable = target.closest('[data-cursor="drag"]');
      const isViewable = target.closest('[data-cursor="view"]');

      if (isDraggable) {
        setIsHovering(true);
        setHoverText("DRAG");
      } else if (isViewable) {
        setIsHovering(true);
        setHoverText("VIEW");
      } else if (isLink) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? (hoverText ? 4 : 2) : 1,
          opacity: isHovering && hoverText ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? (hoverText ? 1.5 : 0.5) : 1,
          opacity: hoverText ? 1 : 0,
          backgroundColor: hoverText ? "var(--accent)" : "transparent"
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {hoverText && (
          <span className="text-[10px] font-bold text-background tracking-widest">{hoverText}</span>
        )}
      </motion.div>
    </>
  );
}
