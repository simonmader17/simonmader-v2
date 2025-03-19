import { Parallax } from "react-scroll-parallax";

interface IParallaxBackground {
  className?: string;
}

const ParallaxBackground = ({ className }: IParallaxBackground) => {
  return (
    <Parallax
      speed={-100}
      className={[
        "bg-hero-brick-wall-primary bg-primary absolute inset-0 -z-10",
        className,
      ].join(" ")}
    />
  );
};

export default ParallaxBackground;
