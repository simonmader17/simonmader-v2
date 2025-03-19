import Link from "next/link";
import { createRipple } from "../../../../lib/ripple";

const NavbarItemWithoutSubRefs = ({ title, link }) => {
  return (
    <Link href={link} passHref>
      <a
        className="relative flex h-full cursor-pointer items-center justify-center overflow-hidden px-5 hover:bg-fg hover:bg-opacity-20"
        onPointerDown={(e) => createRipple(e)}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavbarItemWithoutSubRefs;
