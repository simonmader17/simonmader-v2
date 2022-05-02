const PixelatedDownChevron = ({
  className,
  style,
}: {
  className?: string;
  style?: Object;
}) => {
  return (
    <div
      className={["h-[calc(3rem*4/7)] w-12", className].join(" ")}
      style={style}
    >
      <span className="absolute left-0 top-0 inline-block h-1/4 w-[calc(100%/7)] bg-red-400" />
      <span className="absolute left-[calc(100%/7)] top-1/4 inline-block h-1/4 w-[calc(100%/7)] bg-red-400" />
      <span className="absolute left-[calc(2*100%/7)] top-1/2 inline-block h-1/4 w-[calc(100%/7)] bg-red-400" />
      <span className="absolute left-[calc(3*100%/7)] top-3/4 inline-block h-1/4 w-[calc(100%/7)] bg-red-400" />
      <span className="absolute left-[calc(4*100%/7)] top-1/2 inline-block h-1/4 w-[calc(100%/7)] bg-red-400" />
      <span className="absolute left-[calc(5*100%/7)] top-1/4 inline-block h-1/4 w-[calc(100%/7)] bg-red-400" />
      <span className="absolute left-[calc(6*100%/7)] top-0 inline-block h-1/4 w-[calc(100%/7)] bg-red-400" />
    </div>
  );
};

export default PixelatedDownChevron;
