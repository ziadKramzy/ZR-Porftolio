"use client";
import { useState } from "react";
import { MenuItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";


import zrLogo from '../../assets/zr.png';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 flex justify-center w-full", className)}
    >
      <div className="flex items-center justify-between w-full max-w-xl rounded-full bg-white/80 dark:bg-black/80 shadow-input px-10 py-[0.3rem] backdrop-blur-lg mx-auto gap-2">
        <MenuItem
          setActive={setActive}
          active={active}
          item={
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center group">
              <img src={zrLogo} alt="Logo" className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#60a5fa] bg-white/90 rounded-full p-1 shadow-md" />
            </a>
          }
        />
        <div className="flex items-center gap-2">
          <MenuItem
  setActive={setActive}
  active={active}
  item={
    <a
      href="/Ziad-Ramzy-CV.pdf"
      download="Ziad-Ramzy-CV.pdf"
      className="px-4  text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
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
      className="cursor-pointer"
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
      className="cursor-pointer"
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