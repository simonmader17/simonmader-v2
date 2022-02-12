import { useEffect } from "react";

function NavbarItem({ text, to }) {
  const scrollTo = (scrollToDestination) => {
    if (scrollToDestination == "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const toElement = document.querySelector(scrollToDestination);
      const y = toElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <li className="cursor-pointer p-4" onClick={() => scrollTo(to)}>
      {text}
    </li>
  );
}

function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector(".my-navbar");
    const navbarHeight = navbar.getBoundingClientRect().height;
    console.log(navbarHeight);
    const tailwindAttr = "top-[-" + navbarHeight + "px]";
    const header = document.querySelector("#my-header");
    header.firstChild.classList.replace(
      "top-0",
      "top-[" + navbarHeight + "px]"
    );

    const options = {
      rootMargin: -navbarHeight + "px 0px 0px 0px",
    };
    const navbarObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add("top-0");
          navbar.classList.remove(tailwindAttr);
        } else {
          navbar.classList.remove("top-0");
          navbar.classList.add(tailwindAttr);
        }
      });
    }, options);

    navbarObserver.observe(header);
  });

  return (
    <div className="my-navbar invisible fixed top-0 z-[100] w-full bg-black bg-opacity-50 transition-all duration-300 ease-in-out md:visible">
      <ul className="flex">
        <NavbarItem text="Über mich" to="#about" />
        <NavbarItem text="Kenntnisse" to="#qualifications" />
        <NavbarItem text="Zertifikate" to="#certificates" />
        <NavbarItem text="Schullaufbahn" to="#education" />
        <NavbarItem text="Berufserfahrung" to="#career" />
        <NavbarItem text="Sonstiges" to="#others" />
      </ul>
    </div>
  );
}

export default Navbar;
