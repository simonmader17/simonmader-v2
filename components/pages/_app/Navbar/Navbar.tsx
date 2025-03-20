import { AnimatePresence, motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createRipple } from "../../../../lib/ripple";
import NavbarItem from "./NavbarItem";

const variants = {
  open: { opacity: 1, scaleX: 1, x: 0 },
  closed: { opacity: 0, scaleX: 0, x: "100%" },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  const { t } = useTranslation("meta");

  const refTree = [
    {
      title: "Portfolio",
      link: "/",
      subRefs: [
        { title: t("navbar.about"), link: "#about" },
        { title: t("navbar.projects"), link: "#projects" },
        { title: t("navbar.qualifications"), link: "#qualifications" },
        { title: t("navbar.certificates"), link: "#certificates" },
        { title: t("navbar.career"), link: "#career" },
        { title: t("navbar.education"), link: "#education" },
        { title: t("navbar.others"), link: "#others" },
      ],
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];

  return (
    <div className="pointer-events-none fixed right-8 z-40 flex select-none items-center gap-5 text-lg md:top-5 ltmd:bottom-5">
      <motion.div
        className="pointer-events-auto flex h-12 origin-right items-center justify-center border-2 border-secondary bg-primary drop-shadow-pixel-sm bg-hero-brick-wall-primary"
        animate={open ? "open" : "closed"}
        variants={variants}
        initial={false}
      >
        {refTree.map((ref) => (
          <NavbarItem
            key={ref.title}
            title={ref.title}
            link={ref.link}
            subRefs={ref.subRefs}
          />
        ))}
      </motion.div>

      <div
        className="pointer-events-auto relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden border-2 border-secondary bg-primary drop-shadow-pixel-sm bg-hero-brick-wall-primary"
        onPointerDown={(e) => createRipple(e)}
        onClick={() => setOpen((open) => !open)}
      >
        <AnimatePresence initial={false}>
          {open ? (
            <motion.svg
              key="X"
              initial={{ opacity: 0, rotate: -360 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -360 }}
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-6 w-6"
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
            </motion.svg>
          ) : (
            <motion.svg
              key="O"
              initial={{ opacity: 0, rotate: 360 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 360 }}
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
