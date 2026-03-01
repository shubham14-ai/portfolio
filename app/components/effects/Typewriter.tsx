"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function Typewriter({
  text,
  delay = 0,
  speed = 50,
  className = "",
  onComplete,
  showCursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [showBlinkCursor, setShowBlinkCursor] = useState(showCursor);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          onComplete?.();
        }
      };
      
      typeNextChar();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span 
          className={`inline-block w-[3px] h-[1em] bg-[#00f0ff] ml-1 align-middle ${
            !isTyping ? "animate-pulse" : ""
          }`}
          style={{ 
            boxShadow: "0 0 10px #00f0ff, 0 0 20px #00f0ff",
            opacity: showBlinkCursor ? 1 : 0 
          }}
        />
      )}
    </span>
  );
}
