"use client";
import { HeroParallax } from "./ui/hero-parallax";

// Define JSX namespace for TypeScript
declare global {
  namespace JSX {
    interface Element {}
  }
}
export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
type MyHeroProduct = {
  title: string;
  thumbnail: string;
  link?: string;
  svg?: JSX.Element;
};

export const products: MyHeroProduct[] = [
  {
    title: "Docker",
    thumbnail:
      "https://i.postimg.cc/C1h16578/Screenshot-from-2025-07-24-15-46-19.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
        alt="Docker Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Cursor",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=DiGZkjCzyZXn&format=png&color=000000"
        alt="Cursor Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Python",
    thumbnail:
      "https://i.postimg.cc/ydxKZZnL/Screenshot-from-2025-07-24-15-56-29.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
        alt="Python Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },

  {
    title: "Windsurf",
    thumbnail:
      "https://i.postimg.cc/QdzwyyqJ/Screenshot-from-2025-07-24-16-01-50.png",
    svg: (
      <img
        src="https://exafunction.github.io/public/images/blog/announcement/our-commitment-thumbnail.jpg"
        alt="Windsurf Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Framer",
    thumbnail:
      "https://i.postimg.cc/t4VwLH4C/Screenshot-from-2025-07-24-16-39-10.png",
    svg: (
      <img
        src="https://framerusercontent.com/images/S2BUPVxPhWp0j2kXnbQljMAWU.webp"
        alt="Framer Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Django",
    thumbnail:
      "https://i.postimg.cc/NFNprKJk/Screenshot-from-2025-07-24-16-04-03.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=qV-JzWYl9dzP&format=png&color=000000"
        alt="Django Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },

  {
    title: "Vite",
    thumbnail:
      "https://i.postimg.cc/X7PXsntH/Screenshot-from-2025-07-24-16-22-11.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=YO3YqSaTOu5K&format=png&color=000000"
        alt="Vite Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "TailwindCss",
    thumbnail:
      "https://i.postimg.cc/gk81TDTC/Screenshot-from-2025-07-24-16-14-26.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
        alt="TailwindCss Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "React",
    thumbnail:
      "https://i.postimg.cc/FK5zQDr0/Screenshot-from-2025-07-24-16-23-07.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
        alt="React Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Bootstrap",
    thumbnail:
      "https://i.postimg.cc/pXQnkmD2/Screenshot-from-2025-07-24-16-35-17.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000"
        alt="Bootstrap Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Aceturnity ui",
    thumbnail:
      "https://i.postimg.cc/W47qXbtJ/Screenshot-from-2025-07-25-06-21-52.png",
  },

  {
    title: "TypeScript",
    thumbnail:
      "https://i.postimg.cc/Hsv337pq/Screenshot-from-2025-07-24-16-29-11.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
        alt="TypeScript Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "GitHub , Git",
    thumbnail:
      "https://i.postimg.cc/tgcjjgtw/Screenshot-from-2025-07-24-16-25-39.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
        alt="GitHub Git Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Odoo",
    thumbnail:
      "https://i.postimg.cc/CxjB5W6c/Screenshot-from-2025-07-24-16-31-52.png",
    svg: (
      <img
        src="https://images.seeklogo.com/logo-png/32/1/odoo-logo-png_seeklogo-320087.png"
        alt="Odoo Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
  {
    title: "Figma",
    thumbnail:
      "https://i.postimg.cc/dtGGXHKc/Screenshot-from-2025-07-24-16-33-54.png",
    svg: (
      <img
        src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
        alt="Figma Icon"
        width={32}
        height={32}
        loading="lazy"
        style={{ display: 'inline-block' }}
      />
    ),
  },
];
