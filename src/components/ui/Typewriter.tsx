"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
  render?: (displayed: string) => React.ReactNode;
  onDone?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 35, className, render, onDone }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 1;
    setDisplayed(text.slice(0, 1)); // Start with the first character
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  if (render) {
    return <span className={className}>{render(displayed)}</span>;
  }
  return <span className={className}>{displayed}</span>;
};

export default Typewriter;
