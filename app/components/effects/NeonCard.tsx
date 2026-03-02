"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "magenta" | "purple" | "green" | "gray";
  hoverScale?: number;
}

const glowColors = {
  cyan: {
    border: "rgba(0, 240, 255, 0.3)",
    shadow: "0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.1)",
    hoverShadow: "0 0 30px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0, 240, 255, 0.05)",
  },
  magenta: {
    border: "rgba(255, 0, 160, 0.3)",
    shadow: "0 0 20px rgba(255, 0, 160, 0.3), 0 0 40px rgba(255, 0, 160, 0.1)",
    hoverShadow: "0 0 30px rgba(255, 0, 160, 0.5), 0 0 60px rgba(255, 0, 160, 0.2), inset 0 0 20px rgba(255, 0, 160, 0.05)",
  },
  purple: {
    border: "rgba(123, 45, 255, 0.3)",
    shadow: "0 0 20px rgba(123, 45, 255, 0.3), 0 0 40px rgba(123, 45, 255, 0.1)",
    hoverShadow: "0 0 30px rgba(123, 45, 255, 0.5), 0 0 60px rgba(123, 45, 255, 0.2), inset 0 0 20px rgba(123, 45, 255, 0.05)",
  },
  green: {
    border: "rgba(0, 255, 157, 0.3)",
    shadow: "0 0 20px rgba(0, 255, 157, 0.3), 0 0 40px rgba(0, 255, 157, 0.1)",
    hoverShadow: "0 0 30px rgba(0, 255, 157, 0.5), 0 0 60px rgba(0, 255, 157, 0.2), inset 0 0 20px rgba(0, 255, 157, 0.05)",
  },
  gray: {
    border: "rgba(120, 120, 120, 0.3)",
    shadow: "0 0 15px rgba(120, 120, 120, 0.2), 0 0 30px rgba(120, 120, 120, 0.1)",
    hoverShadow: "0 0 25px rgba(120, 120, 120, 0.4), 0 0 50px rgba(120, 120, 120, 0.15), inset 0 0 15px rgba(120, 120, 120, 0.05)",
  },
};

export function NeonCard({
  children,
  className = "",
  glowColor = "cyan",
  hoverScale = 1.02,
}: NeonCardProps) {
  const colors = glowColors[glowColor];

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden ${className}`}
      style={{
        background: "rgba(18, 18, 26, 0.8)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${colors.border}`,
        boxShadow: colors.shadow,
      }}
      whileHover={{
        scale: hoverScale,
        boxShadow: colors.hoverShadow,
        borderColor: glowColor === "cyan" ? "rgba(0, 240, 255, 0.6)" : 
                    glowColor === "magenta" ? "rgba(255, 0, 160, 0.6)" :
                    glowColor === "purple" ? "rgba(123, 45, 255, 0.6)" :
                    glowColor === "gray" ? "rgba(120, 120, 120, 0.6)" :
                    "rgba(0, 255, 157, 0.6)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff] opacity-50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff] opacity-50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff] opacity-50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff] opacity-50" />
      
      {children}
    </motion.div>
  );
}
