import { Parallax } from "react-scroll-parallax";

interface IParallaxBackground {
  className?: string;
}

const ParallaxBackground = ({ className }: IParallaxBackground) => {
  return (
    <Parallax
      speed={-100}
      className={[
        "absolute inset-0 -z-10 bg-primary bg-hero-brick-wall-primary",
        className,
      ].join(" ")}
    />
  );
};

export default ParallaxBackground;
