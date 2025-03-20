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
      className="flex flex-col items-center justify-center overflow-hidden bg-secondary drop-shadow-3xl bg-hero-brick-wall-secondary"
      style={{
        minHeight: headerMinHeight == 0 ? "100vh" : `${headerMinHeight}px`,
      }}
      {...props}
    >
      <Parallax speed={windowWidth >= 768 ? -20 : 0}>{children}</Parallax>
      <PixelatedDownChevron
        className="fixed bottom-0 mb-4 w-12 animate-bounce cursor-pointer text-accent drop-shadow-pixel-sm transition-opacity duration-500 ease-out md:w-14"
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
