import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { PixelatedDownChevron } from "../../PixelatedIcons";

const Header = ({ children, ...props }) => {
  const [chevronDownIconOpacity, setChevronDownIconOpacity] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const [headerMinHeight, setHeaderMinHeight] = useState(0);

  useEffect(() => {
    const onScroll = (): void => {
      setChevronDownIconOpacity((100 - window.scrollY) / 100);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setHeaderMinHeight(window.innerHeight);
  }, [windowWidth]);

  return (
    <div
      className="bg-hero-brick-wall bg-headerFooter drop-shadow-3xl flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: headerMinHeight == 0 ? "100vh" : `${headerMinHeight}px`,
      }}
      {...props}
    >
      <Parallax speed={windowWidth >= 768 ? -20 : 0}>{children}</Parallax>
      <PixelatedDownChevron
        className="drop-shadow-pixel-sm fixed bottom-0 mb-4 w-12 animate-bounce cursor-pointer text-red-400 transition-opacity duration-500 ease-out md:w-14"
        style={{
          opacity: chevronDownIconOpacity,
          pointerEvents: chevronDownIconOpacity > 0 ? "auto" : "none",
        }}
        onClick={() =>
          window.scrollTo({
            top: headerMinHeight,
            behavior: "smooth",
          })
        }
      />
    </div>
  );
};

export default Header;
