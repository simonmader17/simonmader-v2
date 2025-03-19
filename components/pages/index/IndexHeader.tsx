import { useState } from "react";
import { createRipple } from "../../../lib/ripple";
import Header from "../_app/Header";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import ich from "../../../public/images/personal_images/ich_3.webp";
import ich3 from "../../../public/images/personal_images/ich.webp";
import ich4 from "../../../public/images/personal_images/ich_4.webp";
import ich5 from "../../../public/images/personal_images/ich_5.webp";

const images = [ich, ich3, ich5, ich4];

const IndexHeader = () => {
  const [showIdx, setShowIdx] = useState(0);

  const showNextImage = () => {
    setShowIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <Header>
      <div className="my-4 flex flex-col items-center">
        <div className="drop-shadow-pixel">
          <div
            className="clip-rounded-pixel relative z-10 mb-4 h-64 w-44 cursor-pointer select-none overflow-hidden md:mb-8 md:h-96 md:w-64"
            onPointerDown={(e) => createRipple(e)}
            onClick={showNextImage}
          >
            <AnimatePresence initial={false}>
              {images.map((img) =>
                images.indexOf(img) == showIdx ? (
                  <motion.div
                    key={images.indexOf(img)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "linear" }}
                  >
                    <Image
                      src={img}
                      alt="Simon Mader"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      priority
                      className="relative -z-10"
                    />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
        <h1 className="drop-shadow-pixel-sm md:drop-shadow-pixel font-PressStart2P mb-2 mt-0 pl-1 text-2xl md:mb-4 md:text-4xl">
          Simon Mader
        </h1>
        <div className="flex">
          <a
            href="mailto:mail@simonmader.at"
            title="E-Mail"
            target="_blank"
            rel="noreferrer"
            className="icon-gmail-white drop-shadow-pixel-sm hover:text-gmail focus:text-gmail p-2 leading-none transition-all md:text-lg md:leading-none"
          ></a>
          <a
            href="https://www.linkedin.com/in/simonmader/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="icon-linkedin-white drop-shadow-pixel-sm hover:text-linkedin focus:text-linkedin p-2 leading-none transition-all md:text-lg md:leading-none"
          ></a>
          <a
            href="https://github.com/simonmader17"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            className="icon-github-white drop-shadow-pixel-sm hover:text-github focus:text-github p-2 leading-none transition-all md:text-lg md:leading-none"
          ></a>
        </div>
      </div>
    </Header>
  );
};

export default IndexHeader;
