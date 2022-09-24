import { useRouter } from "next/router";
import NavbarItemWithoutSubRefs from "./NavbarItemWithoutSubRefs";
import NavbarItemWithSubRefs from "./NavbarItemWithSubRefs";

interface Ref {
  title: string;
  link: string;
}

interface INavbarItem {
  title: string;
  link: string;
  subRefs?: Ref[];
}

const NavbarItem = ({ title, link, subRefs }: INavbarItem) => {
  const router = useRouter();

  return (
    <div className="relative h-full">
      {router.pathname === link ? (
        <NavbarItemWithSubRefs title={title} subRefs={subRefs} />
      ) : (
        <NavbarItemWithoutSubRefs title={title} link={link} />
      )}
    </div>
  );
};

export default NavbarItem;
