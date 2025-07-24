"use client";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface ThreeDCardDemoProps {
  title?: string;
  description?: string;
  floatImgSrc?: string;
  mainImgSrc?: string;
  linkHref?: string;
  linkText?: string;
  gitHubLink?: string;
}

export function ThreeDCardDemo({
  title = "Make things float in air",
  description = "Hover over this card to unleash the power of CSS perspective",
  floatImgSrc = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
  mainImgSrc = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  linkHref = "https://twitter.com/mannupaaji",
  linkText = "LIVE LINK →",
  gitHubLink = "https://github.com/",
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="w-full h-full">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 sm:p-6 md:p-8 border flex flex-col max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardItem
            translateZ="50"
            className="text-xl sm:text-2xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          {floatImgSrc && (
            <CardItem
              translateZ="50"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-24 rounded-xl overflow-hidden"
            >
              <img 
                src={floatImgSrc} 
                alt={title} 
                className="w-full h-full object-contain"
              />
            </CardItem>
          )}
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm sm:text-base mt-2 dark:text-neutral-300 flex-grow"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 flex-grow flex items-center">
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl overflow-hidden">
            <img
              src={mainImgSrc}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-6 sm:mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href={linkHref}
            target="__blank"
            className="group px-4 py-2 rounded-xl text-xs font-normal dark:text-white transition-all duration-200 hover:scale-105"
          >
            <span className="transition-colors duration-200 group-hover:text-blue-500 dark:group-hover:text-blue-400">
              {linkText}
            </span>
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={gitHubLink}
            target="__blank"
            className="group px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
            aria-label="GitHub Repository"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
              className="inline-block align-middle transition-all duration-200 group-hover:invert group-hover:brightness-200"
            />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
