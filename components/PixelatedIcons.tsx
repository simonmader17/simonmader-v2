const PixelatedExternalLink = ({ ...props }: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 13 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="2" width="4" height="1" />
      <rect x="2" y="3" width="1" height="7" />
      <rect x="3" y="10" width="7" height="1" />
      <rect x="10" y="6" width="1" height="4" />
      <rect x="9" y="3" width="1" height="1" />
      <rect x="8" y="4" width="1" height="1" />
      <rect x="7" y="5" width="1" height="1" />
      <rect x="6" y="6" width="1" height="1" />
      <path d="M12 1H8V2H10V3H11V5H12V1Z" />
    </svg>
  );
};

const PixelatedDownChevron = ({ ...props }: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 7 4"
    >
      <rect width="1" height="1" x="0" y="0" />
      <rect width="1" height="1" x="1" y="1" />
      <rect width="1" height="1" x="2" y="2" />
      <rect width="1" height="1" x="3" y="3" />
      <rect width="1" height="1" x="4" y="2" />
      <rect width="1" height="1" x="5" y="1" />
      <rect width="1" height="1" x="6" y="0" />
    </svg>
  );
};

const PixelatedX = ({ ...props }: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 11 11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="1" height="1" />
      <rect x="3" y="3" width="1" height="1" />
      <rect x="4" y="4" width="1" height="1" />
      <rect x="5" y="5" width="1" height="1" />
      <rect x="6" y="6" width="1" height="1" />
      <rect x="7" y="7" width="1" height="1" />
      <rect x="8" y="8" width="1" height="1" />
      <rect x="6" y="4" width="1" height="1" />
      <rect x="7" y="3" width="1" height="1" />
      <rect x="8" y="2" width="1" height="1" />
      <rect x="4" y="6" width="1" height="1" />
      <rect x="3" y="7" width="1" height="1" />
      <rect x="2" y="8" width="1" height="1" />
    </svg>
  );
};

export { PixelatedExternalLink, PixelatedDownChevron, PixelatedX };
