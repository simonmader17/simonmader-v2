import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MutableRefObject, useRef, useState } from "react";
import { createRipple } from "../../../lib/ripple";
import Header from "../_app/Header";

import signalCode from "../../../public/images/signal-username-qr-code.png";

import ich3 from "../../../public/images/personal_images/ich.webp";
import ich from "../../../public/images/personal_images/ich_3.webp";
import ich4 from "../../../public/images/personal_images/ich_4.webp";
import ich5 from "../../../public/images/personal_images/ich_5.webp";

const images = [ich, ich3, ich5, ich4];

interface IndexHeaderProps {
  pubkey: string;
}

const IndexHeader = ({ pubkey }: IndexHeaderProps) => {
  const [showIdx, setShowIdx] = useState(0);
  const pgpDialogRef = useRef<HTMLDialogElement>(null);
  const signalDialogRef = useRef<HTMLDialogElement>(null);

  const showNextImage = () => {
    setShowIdx((prev) => (prev + 1) % images.length);
  };

  const openModal = (dialogRef: MutableRefObject<HTMLDialogElement>) =>
    dialogRef.current?.showModal();
  const closeModal = (dialogRef: MutableRefObject<HTMLDialogElement>) =>
    dialogRef.current?.close();

  const handleCopy = async (text: string, success: string, failure: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(success);
    } catch (err) {
      alert(failure + ": " + err);
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
                ) : null
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
            className="icon-gmail-white p-2 text-xl leading-none drop-shadow-pixel-sm transition-all hover:text-gmail focus:text-gmail md:text-3xl md:leading-none"
          ></a>
          <button
            title="Public PGP Key"
            className="icon-gnuprivacyguard-white p-2 text-xl leading-none drop-shadow-pixel-sm transition-all hover:text-gnuprivacyguard focus:text-gnuprivacyguard md:text-3xl md:leading-none"
            onClick={() => openModal(pgpDialogRef)}
          ></button>
          <dialog
            ref={pgpDialogRef}
            className="overflow-hidden bg-transparent drop-shadow-pixel"
            onClick={(e) => {
              if (e.target === pgpDialogRef.current) {
                closeModal(pgpDialogRef);
              }
            }}
          >
            <div className="clip-rounded-pixel flex max-h-[90dvh] flex-col bg-fg p-4">
              <h1 className="flex-none drop-shadow-none">Public PGP Key</h1>
              <pre
                className="min-h-0 flex-1 overflow-auto border-8 border-fg1 p-2 text-left font-DepartureMono text-sm"
                style={{ borderStyle: "ridge" }}
              >
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
                  className="border-4 border-fg3 bg-fg1 p-2"
                  style={{ borderStyle: "ridge" }}
                  onClick={() =>
                    handleCopy(
                      pubkey,
                      "PGP Key copied to clipboard!",
                      "Failed to copy PGP Key"
                    )
                  }
                >
                  Copy
                </button>
                <a
                  className="border-4 border-fg3 bg-fg1 p-2"
                  style={{ borderStyle: "ridge" }}
                  href="/pubkey.asc"
                  download
                >
                  Download
                </a>
                <button
                  className="border-4 border-red2 bg-red2 p-2 font-bold text-fg"
                  style={{ borderStyle: "ridge" }}
                  onClick={() => closeModal(pgpDialogRef)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
          <button
            title="Signal"
            className="icon-signal-white p-2 text-xl leading-none drop-shadow-pixel-sm transition-all hover:text-signal focus:text-signal md:text-3xl md:leading-none"
            onClick={() => openModal(signalDialogRef)}
          ></button>
          <dialog
            ref={signalDialogRef}
            className="overflow-hidden bg-transparent drop-shadow-pixel"
            onClick={(e) => {
              if (e.target === signalDialogRef.current) {
                closeModal(signalDialogRef);
              }
            }}
          >
            <div className="clip-rounded-pixel flex max-h-[90dvh] flex-col bg-fg p-4">
              <div className="clip-rounded-pixel w-64 drop-shadow-pixel md:w-96">
                <Image
                  src={signalCode}
                  alt="Signal QR Code"
                  placeholder="blur"
                  className="clip-rounded-pixel scale-110"
                />
              </div>
              <div className="mt-4 flex flex-none justify-center gap-2">
                <button
                  className="border-4 border-fg3 bg-fg1 p-2"
                  style={{ borderStyle: "ridge" }}
                  onClick={() =>
                    handleCopy(
                      "https://signal.me/#eu/FdIJ6nHg7_nBrql3zlphZAd0-7XzeJBh1StLJSHVHyLLSBmdURpO8qEn0bw2M0CB",
                      "Signal link copied to clipboard!",
                      "Failed to copy Signal link"
                    )
                  }
                >
                  Copy link
                </button>
                <button
                  className="border-4 border-red2 bg-red2 p-2 font-bold text-fg"
                  style={{ borderStyle: "ridge" }}
                  onClick={() => closeModal(signalDialogRef)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
          <a
            href="https://github.com/simonmader17"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            className="icon-github-white p-2 text-xl leading-none drop-shadow-pixel-sm transition-all hover:text-github focus:text-github md:text-3xl md:leading-none"
          ></a>
        </div>
      </div>
    </Header>
  );
};

export default IndexHeader;
