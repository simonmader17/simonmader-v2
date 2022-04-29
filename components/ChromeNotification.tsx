import Image from "next/image";
import { useEffect, useState } from "react";
import chrome_icon from "../public/images/Google_Chrome_icon_(September_2014).svg";

declare const InstallTrigger: any;

function ChromeNotification() {
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    setIsFirefox(typeof InstallTrigger !== "undefined");
  }, []);

  const hide = (id: string): void => {
    document.querySelector(id).classList.add("hidden");
  };

  return (
    <>
      {isFirefox && (
        <div
          id="chrome-notification"
          className="drop-shadow-3xl fixed top-4 right-4 z-50 flex w-80 items-center rounded-xl bg-black bg-opacity-50 p-2"
        >
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
            onClick={() => hide("#chrome-notification")}
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
      )}
    </>
  );
}

export default ChromeNotification;
