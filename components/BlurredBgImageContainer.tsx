import Image from "next/image";

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
        <div className="h-full rounded-xl bg-black bg-opacity-70 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlurredBgImageContainer;
