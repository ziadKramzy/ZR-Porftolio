"use client";
import { motion } from "motion/react";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string | React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(typeof item === "string" ? item : "")}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="cursor-pointer px-3 py-1 rounded-full transition-colors duration-200 group"
        style={{ display: "inline-block" }}
      >
        {typeof item === "string" ? (
          <span className={`transition-colors duration-200 ${
            ['Resume', 'Projects', 'Contact'].includes(item) 
              ? 'group-hover:text-blue-500' 
              : 'text-black dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300'
          }`}>
            {item}
          </span>
        ) : (
          // Just render the item as is for non-string items
          item
        )}
      </motion.div>
      {active !== null && children && (
        <motion.div
          layoutId="navbar"
          className="absolute left-1/2 top-full z-20 mt-8 w-max -translate-x-1/2 rounded-2xl border border-black/[0.2] dark:border-white/[0.2] bg-white dark:bg-black shadow-xl"
        >
          <motion.div
            layout
            className="w-max h-full p-4"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="transition-colors duration-200 hover:text-blue-400 relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="transition-colors duration-200 hover:text-blue-400 flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="transition-colors duration-200 hover:text-blue-400 shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="transition-colors duration-200 hover:text-blue-400 text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="transition-colors duration-200 hover:text-blue-400 text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="transition-colors duration-200 hover:text-blue-400 text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
