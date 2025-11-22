import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaFigma } from 'react-icons/fa';
import { SlidingLogoMarquee, type SlidingLogoMarqueeItem } from "@/components/ui/SlidingLogoMarquee";

const Footer: React.FC = () => {
  const logos: SlidingLogoMarqueeItem[] = [
    {
      id: "linkedin",
      content: <FaLinkedin className="text-white text-3xl sm:text-4xl" />,
      href: "https://www.linkedin.com/in/ziad-khaled-ramzy/",
    },
    {
      id: "github",
      content: <FaGithub className="text-white text-3xl sm:text-4xl" />,
      href: "https://github.com/ziadKramzy",
    },
    {
      id: "facebook",
      content: <FaFacebook className="text-white text-3xl sm:text-4xl" />,
      href: "https://www.facebook.com/ziyad.khaled.9/",
    },
    {
      id: "instagram",
      content: <FaInstagram className="text-white text-3xl sm:text-4xl" />,
      href: "https://www.instagram.com/ziad.k_ramzy?igsh=MW1hbzkweWJ1cGR2dA%3D%3D&utm_source=qr",
    },
    {
      id:"Figma",
      content:<FaFigma className="text-white text-3xl sm:text-4xl" />,
      href:"https://www.figma.com/@ziadramzy",
    },
  

  ];

  return (
    <footer className="w-full  border-t border-gray-800">
      <div className="mx-auto px-4 py-8">
        <SlidingLogoMarquee
          items={logos}
          speed={20}
          height="120px"
          enableBlur={true}
          blurIntensity={2}
          pauseOnHover={true}
          showGridBackground={true}
          showControls={false}
          onItemClick={(item) => console.log("Clicked:", item.id)}
        />
        <div className="mt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Ziad Ramzy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;