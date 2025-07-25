"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants, MotionValue } from "framer-motion";
import { useSpring } from "framer-motion";



export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link?: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-1000, 0]), springConfig);
  const translateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [1000, 0]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 0.2], [-1000, 0]), springConfig);

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

import Typewriter from "./Typewriter";
import { useCallback } from "react";

export const Header = () => {
  // Texts for typing
  const name = "Ziad Ramzy";
  const title = "Full-Stack Developer";
  const description =
    "Passionate Full-Stack Developer and ITI graduate with real-world project experience. Skilled in both front-end and back-end, delivering robust and scalable solutions. Dedicated to continuous learning and build.";

  // Animation variants for the navbar
  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const renderHeading = useCallback(
    (displayed: string) => {
      const [namePart, ...rest] = displayed.split("\n");
      return (
        <>
          <span className="bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent font-extrabold">{namePart}</span>
          {rest.length > 0 && (
            <><br />{rest.join("\n")}</>
          )}
        </>
      );
    },
    []
  );

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white min-h-[4.5rem] md:min-h-[8rem]">
          <Typewriter
            text={`${name}\n${title}`}
            speed={32}
            className="whitespace-pre-line"
            render={renderHeading}
          />
        </h1>
      </motion.div>
      <motion.p 
        className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 min-h-[5rem] md:min-h-[7rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            delay: 1.5,
            duration: 0.8,
            ease: "easeOut"
          }
        }}
      >
        <Typewriter 
          text={description} 
          speed={10}
          className="inline"
        />
      </motion.p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link?: string;
    thumbnail: string;
    svg?: React.ReactNode;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 flex items-center space-x-2 text-white">
        <span className="text-3xl font-bold">{product.title}</span>
        {product.svg && (
          <span className="w-8 h-8 flex items-center">{product.svg}</span>
        )}
      </div>
    </motion.div>
  );
};
