import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import NavbarItem from "./NavbarItem";

const variants = {
  open: { opacity: 1, scaleX: 1, x: 0 },
  closed: { opacity: 0, scaleX: 0, x: "100%" },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
    <div className="fixed top-5 right-8 z-40 flex select-none items-center gap-5 text-lg">
      <motion.div
        className="bg-body bg-hero-brick-wall-purple drop-shadow-pixel-sm flex h-12 origin-right items-center justify-center border-2 border-black"
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
        className="bg-body bg-hero-brick-wall-purple drop-shadow-pixel-sm relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-black"
        onClick={() => setOpen((open) => !open)}
      >
        {open ? (
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
        ) : (
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Navbar;