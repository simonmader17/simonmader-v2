import Image from "next/image";
import { useEffect, useState } from "react";
import { createRipple } from "../../../lib/ripple";
import { Parallax } from "react-scroll-parallax";
import { PixelatedDownChevron } from "../../PixelatedIcons";

import ich from "../../../public/images/personal_images/ich.png";

const Header = () => {
  const [chevronDownIconOpacity, setChevronDownIconOpacity] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const [headerMinHeight, setHeaderMinHeight] = useState("100vh");

  useEffect(() => {
    const onScroll = (): void => {
      setChevronDownIconOpacity((100 - window.scrollY) / 100);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setHeaderMinHeight(`${window.innerHeight}px`);
  }, [windowWidth]);

  return (
    <div
      className="bg-hero-brick-wall bg-headerFooter drop-shadow-3xl flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: `${headerMinHeight}`,
      }}
    >
      <Parallax speed={windowWidth >= 768 ? -20 : 0}>
        <div className="my-4 flex flex-col items-center">
          <div className="drop-shadow-pixel">
            <div
              className="clip-rounded-pixel relative z-10 mb-4 h-64 w-44 cursor-pointer select-none overflow-hidden md:mb-8 md:h-96 md:w-64"
              onPointerDown={(e) => createRipple(e)}
            >
              <Image
                src={ich}
                alt="Simon Mader"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                priority
                className="relative -z-10"
              />
            </div>
          </div>
          <h1 className="drop-shadow-pixel-sm md:drop-shadow-pixel font-PressStart2P mb-2 mt-0 pl-1 text-2xl md:mb-4 md:text-4xl">
            Simon Mader
          </h1>
          <div className="flex space-x-4">
            <a
              href="mailto:mail@simonmader.at"
              title="E-Mail"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-gmail-white drop-shadow-pixel-sm md:text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/simonmader/"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-linkedin-white drop-shadow-pixel-sm md:text-lg" />
            </a>
            <a
              href="https://github.com/simonmader17"
              title="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-github-white drop-shadow-pixel-sm md:text-lg" />
            </a>
          </div>
        </div>
      </Parallax>
      <PixelatedDownChevron
        className="drop-shadow-pixel-sm fixed bottom-0 mb-4 w-12 animate-bounce cursor-pointer text-red-400 transition-opacity duration-500 ease-out md:w-14"
        style={{
          opacity: chevronDownIconOpacity,
          pointerEvents: chevronDownIconOpacity > 0 ? "auto" : "none",
        }}
        onClick={() =>
          window.scrollTo({
            top: (document.querySelector("#about") as HTMLParagraphElement)
              .offsetTop,
            behavior: "smooth",
          })
        }
      />
    </div>
  );
};

export default Header;
