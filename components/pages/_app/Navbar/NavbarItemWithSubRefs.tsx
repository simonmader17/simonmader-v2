import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const NavbarItemWithSubRefs = ({ title, subRefs }) => {
  const [open, setOpen] = useState(false);

  const md = useMediaQuery("(min-width: 768px)");

  const variants = md
    ? {
        open: { opacity: 1, scaleY: 1, y: 0 },
        closed: { opacity: 0, scaleY: 0, y: "-100%" },
      }
    : {
        open: { opacity: 1, scaleY: 1, y: 0 },
        closed: { opacity: 0, scaleY: 0, y: "100%" },
      };

  return (
    <>
      <span
        className="flex h-full cursor-pointer items-center justify-center px-5 font-bold hover:bg-white hover:bg-opacity-20"
        onClick={() => setOpen((open) => !open)}
      >
        {subRefs && (
          <motion.svg
            animate={open ? "open" : "closed"}
            variants={
              md
                ? {
                    open: { rotate: 90 },
                    closed: { rotate: 0 },
                  }
                : {
                    open: { rotate: -90 },
                    closed: { rotate: 0 },
                  }
            }
            style={{ originX: "50%", originY: "50%" }}
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-4 w-4"
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
        {title}
      </span>

      {subRefs && (
        <motion.div
          className="absolute left-0 -z-10 flex flex-col border-2 border-black bg-body bg-hero-brick-wall-purple md:top-16 ltmd:bottom-16 ltmd:origin-bottom"
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
