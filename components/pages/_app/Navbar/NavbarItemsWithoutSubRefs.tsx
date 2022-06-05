import Link from "next/link";

const NavbarItemWithoutSubRefs = ({ title, link }) => {
  return (
    <Link href={link} passHref>
      <a className="flex h-full cursor-pointer items-center justify-center px-5 hover:bg-white hover:bg-opacity-20">
        {title}
      </a>
    </Link>
  );
};

export default NavbarItemWithoutSubRefs;
