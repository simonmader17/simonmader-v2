import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PixelatedX } from "../../PixelatedIcons";

import chrome_icon from "../../../public/images/Google_Chrome_icon_(September_2014).svg";

declare const InstallTrigger: any;

const ChromeNotification = () => {
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    setIsFirefox(typeof InstallTrigger !== "undefined");
  }, []);

  const [closed, setClosed] = useState(false);

  if (!isFirefox || closed) return null;

  return (
    <div className="drop-shadow-pixel-sm fixed top-5 left-5 z-50">
      <div className="bg-body bg-hero-brick-wall-purple flex w-80 items-center border-2 border-black p-2">
        <div className="relative m-4 h-12 w-12 flex-shrink-0">
          <Image
            src={chrome_icon}
            alt="Chrome Icon"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className="text-left">For a better experience use Chrome :)</p>
        <button
          className="self-start rounded-full p-2 transition-colors hover:bg-white hover:bg-opacity-10"
          onClick={() => setClosed(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChromeNotification;
