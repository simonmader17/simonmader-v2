import fs from "fs";
import path from "path";
import { useRef, useState } from "react";
import { createRipple } from "../../../lib/ripple";
import Header from "../_app/Header";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import ich from "../../../public/images/personal_images/ich_3.webp";
import ich3 from "../../../public/images/personal_images/ich.webp";
import ich4 from "../../../public/images/personal_images/ich_4.webp";
import ich5 from "../../../public/images/personal_images/ich_5.webp";

const images = [ich, ich3, ich5, ich4];

interface IndexHeaderProps {
  pubkey: string;
}

const IndexHeader = ({ pubkey }: IndexHeaderProps) => {
  const [showIdx, setShowIdx] = useState(0);
  const pgpDialogRef = useRef<HTMLDialogElement>(null);

  const showNextImage = () => {
    setShowIdx((prev) => (prev + 1) % images.length);
  };

  const openModal = () => pgpDialogRef.current?.showModal();
  const closeModal = () => pgpDialogRef.current?.close();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pubkey);
      alert("PGP Key copied to clipboard!");
    } catch (err) {
      alert("Failed to copy PGP Key: " + err);
    }
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
                ) : null,
              )}
            </AnimatePresence>
          </div>
        </div>
        <h1 className="mb-2 mt-0 pl-1 font-PressStart2P text-2xl drop-shadow-pixel-sm md:mb-4 md:text-4xl md:drop-shadow-pixel">
          Simon Mader
        </h1>
        <div className="flex">
          <a
            href="mailto:mail@simonmader.at"
            title="E-Mail"
            target="_blank"
            rel="noreferrer"
            className="icon-gmail-white p-2 leading-none drop-shadow-pixel-sm transition-all hover:text-gmail focus:text-gmail md:text-lg md:leading-none"
          ></a>
          <button
            title="Public PGP Key"
            className="icon-gnuprivacyguard-white p-2 leading-none drop-shadow-pixel-sm transition-all hover:text-gnuprivacyguard focus:text-gnuprivacyguard md:text-lg md:leading-none"
            onClick={openModal}
          ></button>
          <dialog
            ref={pgpDialogRef}
            className="overflow-hidden bg-transparent drop-shadow-pixel"
            onClick={(e) => {
              if (e.target === pgpDialogRef.current) {
                closeModal();
              }
            }}
          >
            <div className="clip-rounded-pixel flex max-h-[90dvh] flex-col bg-fg p-4">
              <h1 className="flex-none drop-shadow-none">Public PGP Key</h1>
              <pre className="min-h-0 flex-1 overflow-auto border-4 border-secondary border-t-white border-l-white p-2 text-left font-DepartureMono text-sm">
                {pubkey}
              </pre>
              <div className="mt-2">
                <p>PGP Fingerprint:</p>
                <pre className="white-space-pre-wrap font-DepartureMono">
                  0C91 2397 109B 5D1F 5D58
                  <br />
                  FAB5 A19A CD01 D8CA E998
                </pre>
              </div>
              <div className="mt-4 flex flex-none justify-center gap-2">
                <button
                  className="border-2 border-gray bg-fg p-2"
                  onClick={handleCopy}
                >
                  Copy
                </button>
                <a
                  className="border-2 border-gray bg-fg p-2"
                  href="/pubkey.asc"
                  download
                >
                  Download
                </a>
                <button
                  className="border-2 border-gray bg-fg p-2"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
          {/* <a
            href="https://www.linkedin.com/in/simonmader/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="icon-linkedin-white p-2 leading-none drop-shadow-pixel-sm transition-all hover:text-linkedin focus:text-linkedin md:text-lg md:leading-none"
          ></a> */}
          <a
            href="https://github.com/simonmader17"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            className="icon-github-white p-2 leading-none drop-shadow-pixel-sm transition-all hover:text-github focus:text-github md:text-lg md:leading-none"
          ></a>
        </div>
      </div>
    </Header>
  );
};

export default IndexHeader;
