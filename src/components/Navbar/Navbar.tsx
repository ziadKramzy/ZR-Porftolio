import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MenuItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";

function Navbar({ className }: { className?: string }) {
  const zrLogo = "https://i.postimg.cc/tgv492KB/zr.webp"
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-3 left-3 right-auto sm:top-6 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto sm:max-w-5xl z-50 flex flex-col items-start sm:items-center w-auto sm:w-full px-0 sm:px-4",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between w-auto sm:w-full max-w-2xl rounded-full bg-white/80 dark:bg-black/80 shadow-input px-3 sm:px-6 md:px-8 py-1 sm:py-2 backdrop-blur-lg mx-0 sm:mx-auto gap-1 sm:gap-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center group"
        >
          <img
            src={zrLogo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#60a5fa] bg-white/90 rounded-full p-0.5 sm:p-1 shadow-md"
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center gap-1 sm:gap-2 md:gap-4">
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <span
                className="cursor-pointer px-2 sm:px-3 py-1 text-sm sm:text-base text-white font-medium sm:font-semibold hover:text-blue-400 transition-colors whitespace-nowrap"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About Me
              </span>
            }
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <span
                className="cursor-pointer px-2 sm:px-3 py-1 text-sm sm:text-base text-white font-medium sm:font-semibold hover:text-blue-400 transition-colors whitespace-nowrap"
                onClick={() =>
                  document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })
                }
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
                onClick={() =>
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </span>
            }
          />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className={`w-6 h-6 transition-transform ${mobileOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={cn(
          "fixed inset-0 z-40 sm:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-64 max-w-[80%] bg-black/90 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col py-6 px-4 transform transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-white font-semibold text-lg">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            <button
              className="text-left w-full px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => {
                setMobileOpen(false);
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Me
            </button>
            <button
              className="text-left w-full px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => {
                setMobileOpen(false);
                document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </button>
            <button
              className="text-left w-full px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => {
                setMobileOpen(false);
                document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;