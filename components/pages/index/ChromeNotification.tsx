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

  const ref = useRef();

  return (
    <>
      {isFirefox && (
        <div ref={ref} className="md:drop-shadow-3xl fixed top-4 right-4 z-50">
          <div className="clip-rounded-pixel flex w-80 items-center rounded-xl bg-black bg-opacity-50 p-2">
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
              onClick={() => (ref.current as HTMLDivElement).remove()}
            >
              <PixelatedX className="h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChromeNotification;
