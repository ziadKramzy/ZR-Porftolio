"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
  render?: (displayed: string) => React.ReactNode;
  onDone?: () => void;
  highlightTerms?: string[]; // Terms to highlight in bold blue
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 35, className, render, onDone, highlightTerms = [] }) => {
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

  // Memoize the highlight function
  const highlightText = useCallback((content: string) => {
    if (highlightTerms.length === 0) return content;
    
    let result = content;
    highlightTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      result = result.replace(regex, `<span class="font-bold text-blue-400">$&</span>`);
    });
    return result;
  }, [highlightTerms]);

  // Memoize the highlighted content
  const highlightedContent = useMemo(() => {
    return highlightText(displayed);
  }, [displayed, highlightText]);

  if (render) {
    return <span className={className}>{render(displayed)}</span>;
  }

  if (highlightTerms.length > 0) {
    return (
      <span 
        className={className}
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
      />
    );
  }

  return <span className={className}>{displayed}</span>;
};

export default React.memo(Typewriter);
