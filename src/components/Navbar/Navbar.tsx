"use client";
import { useState } from "react";
import { MenuItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";


import zrLogo from '../../assets/zr.png';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-4 sm:top-6 inset-x-0 max-w-5xl mx-auto z-50 flex justify-center w-full px-4", className)}
    >
      <div className="flex items-center justify-between w-full max-w-2xl rounded-full bg-white/80 dark:bg-black/80 shadow-input px-4 sm:px-6 md:px-8 py-1 sm:py-2 backdrop-blur-lg mx-auto gap-2">
        <div className="flex-shrink-0">
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center group">
                <img 
                  src={zrLogo} 
                  alt="Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#60a5fa] bg-white/90 rounded-full p-0.5 sm:p-1 shadow-md"
                />
              </a>
            }
          />
        </div>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <a
                href="/Ziad-Ramzy-CV.pdf"
                download="Ziad-Ramzy-CV.pdf"
                className="px-2 sm:px-3 md:px-4 py-1 text-sm sm:text-base text-white font-medium sm:font-semibold shadow transition hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 whitespace-nowrap"
                style={{ display: 'inline-block' }}
              >
                Resume
              </a>
            }
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <span
                className="cursor-pointer px-2 sm:px-3 py-1 text-sm sm:text-base text-white font-medium sm:font-semibold hover:text-blue-400 transition-colors whitespace-nowrap"
                onClick={() => {
                  const section = document.getElementById('projects-section');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </span>
            }
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <span
                className="cursor-pointer px-2 sm:px-3 py-1 text-sm sm:text-base text-white font-medium sm:font-semibold hover:text-blue-400 transition-colors whitespace-nowrap"
                onClick={() => {
                  const section = document.getElementById('contact-section');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar