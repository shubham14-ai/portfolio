"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export function GlitchText({ text, className = "", as: Component = "span" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      animate={isGlitching ? {
        x: [0, -2, 2, -2, 2, 0],
        opacity: [1, 0.8, 1, 0.8, 1, 1],
      } : {}}
      transition={{ duration: 0.3 }}
    >
      <Component className="relative z-10">{text}</Component>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 -z-10 text-[#ff00a0] opacity-70"
            style={{ clipPath: "inset(0 0 50% 0)", transform: "translate(-2px, -2px)" }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 -z-10 text-[#00f0ff] opacity-70"
            style={{ clipPath: "inset(50% 0 0 0)", transform: "translate(2px, 2px)" }}
          >
            {text}
          </span>
        </>
      )}
    </motion.span>
  );
}
