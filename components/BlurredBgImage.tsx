import Image from "next/image";

const BlurredBgImage = ({ src, alt, objectPosition = "top" }) => {
  return (
    <div className="absolute inset-0 -z-10 -m-[8px] h-[calc(100%+16px)] w-[calc(100%+16px)] blur-sm">
      <div className="relative h-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition={objectPosition}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default BlurredBgImage;
