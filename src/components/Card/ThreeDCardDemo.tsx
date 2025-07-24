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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  md:w-lg lg:w-lg  xl:w-2xl  max-w-2xl h-auto rounded-xl p-10 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white flex items-center gap-4"
        >
          {title}
          {floatImgSrc && (
            <img src={floatImgSrc} alt="float" className="inline-block w-40 h-30 rounded-2xl p-1 ml-[12vw]" />
          )}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={mainImgSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
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
