import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

function Header() {
  const [chevronDownIconOpacity, setChevronDownIconOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      setChevronDownIconOpacity((100 - window.scrollY) / 100);
      // console.log((100 - window.scrollY) / 100);
    };

    window.addEventListener("scroll", onScroll);
  }, [chevronDownIconOpacity]);

  return (
    <div id="my-header" className="bg-hero-brick-wall bg-headerFooter flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="sticky top-0">
        <img className="relative mx-auto h-20" src="/images/pepejam3.gif" />
        <p className="font-Graph35 mb-4 mt-0 pl-1 text-4xl">Simon.</p>
      </div>
      <ChevronDownIcon
        className="fixed bottom-0 w-12 animate-bounce text-green-500 transition duration-500 ease-out"
        style={{ opacity: chevronDownIconOpacity }}
      />
    </div>
  );
}

export default Header;
