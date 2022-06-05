import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface Ref {
  title: string;
  link: string;
}

interface INavbarItem {
  title: string;
  link: string;
  subRefs?: Ref[];
}

const variants = {
  open: { opacity: 1, scaleY: 1, y: 0 },
  closed: { opacity: 0, scaleY: 0, y: "-200%" },
};

const NavbarItem = ({ title, link, subRefs }: INavbarItem) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="relative h-full">
      {router.pathname === link ? (
        <div className="h-full">
          <span
            className="flex h-full cursor-pointer items-center justify-center px-5 hover:bg-white hover:bg-opacity-20"
            onClick={() => setOpen((open) => !open)}
          >
            {subRefs &&
              (open ? (
                <svg
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
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
                </svg>
              ))}
            {title}
          </span>

          {subRefs && (
            <motion.div
              className="bg-body bg-hero-brick-wall-purple drop-shadow-pixel-sm absolute top-16 left-0 -z-10 flex flex-col border-2 border-black"
              animate={open ? "open" : "closed"}
              variants={variants}
            >
              {subRefs.map((subRef) => (
                <span
                  key={subRef.title}
                  className="w-full cursor-pointer px-5 py-1 text-left hover:bg-white hover:bg-opacity-20"
                  onClick={() =>
                    window.scrollTo({
                      top: (
                        document.querySelector(
                          subRef.link
                        ) as HTMLHeadingElement
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
        </div>
      ) : (
        <Link href={link} passHref>
          <a className="flex h-full cursor-pointer items-center justify-center px-5 hover:bg-white hover:bg-opacity-20">
            {title}
          </a>
        </Link>
      )}
    </div>
  );
};

export default NavbarItem;
