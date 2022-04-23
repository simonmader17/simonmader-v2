import { ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createRipple } from "../lib/ripple";

import ich from "../public/images/personal_images/ich.png";
import LayoutTransition from "./LayoutTransition";

function Header() {
  const [chevronDownIconOpacity, setChevronDownIconOpacity] = useState(1);

  useEffect(() => {
    const onScroll = (): void => {
      setChevronDownIconOpacity((100 - window.scrollY) / 100);
    };

    window.addEventListener("scroll", onScroll);
  }, [chevronDownIconOpacity]);

  return (
    <div className="bg-hero-brick-wall bg-headerFooter flex min-h-screen flex-col items-center justify-center">
      <LayoutTransition>
        <div className="sticky top-4 flex flex-col items-center">
          <div
            className="drop-shadow-pixel relative z-10 mb-4 h-64 w-44 cursor-pointer select-none overflow-hidden border-8 border-black md:mb-8 md:h-96 md:w-64"
            onPointerDown={(e) => createRipple(e)}
          >
            <Image
              src={ich}
              alt="ich"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              priority
              className="relative -z-10"
            />
          </div>
          <h1 className="drop-shadow-pixel-sm font-Graph35 mb-4 mt-0 pl-1 text-2xl md:text-4xl">
            Simon Mader
          </h1>
        </div>
      </LayoutTransition>
      <ChevronDownIcon
        className="fixed bottom-0 w-12 animate-bounce text-green-500 transition duration-500 ease-out"
        style={{ opacity: chevronDownIconOpacity }}
      />
    </div>
  );
}

export default Header;
