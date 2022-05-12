const PixelatedDownChevron = ({
  className,
  style,
}: {
  className?: string;
  style?: Object;
}) => {
  return (
    <div className={`text-red-400 ${className}`} style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 28 16"
      >
        <rect width="4" height="4" x="0" y="0" />
        <rect width="4" height="4" x="4" y="4" />
        <rect width="4" height="4" x="8" y="8" />
        <rect width="4" height="4" x="12" y="12" />
        <rect width="4" height="4" x="16" y="8" />
        <rect width="4" height="4" x="20" y="4" />
        <rect width="4" height="4" x="24" y="0" />
      </svg>
    </div>
  );
};

export default PixelatedDownChevron;
