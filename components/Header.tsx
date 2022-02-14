import { ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

import pepe from "../public/images/pepejam3.gif";

function Header() {
  const [chevronDownIconOpacity, setChevronDownIconOpacity] = useState(1);

  useEffect(() => {
    const onScroll = (): void => {
      setChevronDownIconOpacity((100 - window.scrollY) / 100);
      // console.log((100 - window.scrollY) / 100);
    };

    window.addEventListener("scroll", onScroll);
  }, [chevronDownIconOpacity]);

  return (
    <div className="bg-hero-brick-wall bg-headerFooter flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="sticky top-0">
        <div className="relative h-20">
          <Image
            src={pepe}
            alt="dancing gif"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="mx-auto"
            priority
          />
        </div>
        <p className="font-Graph35 mb-4 mt-0 pl-1 text-4xl">Simon.</p>
      </div>
      <ChevronDownIcon
        className="fixed bottom-0 w-12 animate-bounce text-green-500 transition duration-500 ease-out"
        style={{ opacity: chevronDownIconOpacity }}
      />
    </div>
  );
}

export default Header;
