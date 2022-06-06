import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, scaleY: 1, y: 0 },
  closed: { opacity: 0, scaleY: 0, y: "-200%" },
};

const NavbarItemWithSubRefs = ({ title, subRefs }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className="flex h-full cursor-pointer items-center justify-center px-5 hover:bg-white hover:bg-opacity-20"
        onClick={() => setOpen((open) => !open)}
      >
        {subRefs && (
          <div className="relative mr-1 flex h-4 w-4 items-center justify-center">
            <AnimatePresence>
              {open ? (
                <motion.svg
                  key="down"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  style={{ originX: "50%", originY: "50%" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="right"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  style={{ originX: "50%", originY: "50%" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        )}
        {title}
      </span>

      {subRefs && (
        <motion.div
          className="bg-body bg-hero-brick-wall-purple drop-shadow-pixel-sm absolute top-16 left-0 -z-10 flex flex-col border-2 border-black"
          animate={open ? "open" : "closed"}
          variants={variants}
          initial={false}
        >
          {subRefs.map((subRef) => (
            <span
              key={subRef.title}
              className="w-full cursor-pointer px-5 py-1 text-left hover:bg-white hover:bg-opacity-20"
              onClick={() =>
                window.scrollTo({
                  top: (
                    document.querySelector(subRef.link) as HTMLHeadingElement
                  ).offsetTop,
                  behavior: "smooth",
                })
              }
            >
              {subRef.title}
            </span>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default NavbarItemWithSubRefs;
