import Image from "next/image";

const BlurredBgImageContainer = ({
  bgSrc,
  bgAlt,
  bgPosition = "top",
  children,
  ...props
}) => {
  return (
    <div
      className={`relative z-10 m-4 ${bgSrc ? "drop-shadow-pixel" : ""}`}
      {...props}
    >
      <div className="clip-rounded-pixel absolute inset-0 h-full">
        {bgSrc ? (
          <div className="absolute inset-0 -z-10 -m-[8px] h-[calc(100%+16px)] w-[calc(100%+16px)] blur-sm">
            <div className="relative h-full">
              <Image
                src={bgSrc}
                alt={bgAlt}
                layout="fill"
                objectFit="cover"
                objectPosition={bgPosition}
                placeholder="blur"
              />
            </div>
          </div>
        ) : null}
        <div
          className={`clip-rounded-pixel absolute inset-0 z-0 bg-secondary ${
            bgSrc ? "bg-opacity-70" : "bg-opacity-50 backdrop-blur"
          }`}
        ></div>
      </div>
      <div className="relative h-full p-6">{children}</div>
    </div>
  );
};

export default BlurredBgImageContainer;
