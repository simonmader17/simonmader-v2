import BlurredBgImage from "./BlurredBgImage";

const BlurredBgImageContainer = ({
  bgSrc,
  bgAlt,
  bgPosition = "top",
  children,
  ...props
}) => {
  return (
    <div className="drop-shadow-pixel relative z-10 m-4" {...props}>
      <div className="clip-rounded-pixel h-full">
        <BlurredBgImage src={bgSrc} alt={bgAlt} objectPosition={bgPosition} />
        <div className="h-full rounded-xl bg-black bg-opacity-70 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlurredBgImageContainer;
