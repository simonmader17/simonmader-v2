import { useRouter } from "next/router";
import { createRipple } from "../../../lib/ripple";

const BackButton = () => {
  const router = useRouter();

  if (router.pathname === "/") return null;

  return (
    <button
      aria-label="Back button"
      className="fixed top-5 left-5 z-50 flex h-12 w-12 items-center justify-center overflow-hidden border-2 border-secondary bg-primary drop-shadow-pixel-sm bg-hero-brick-wall-primary"
      onPointerDown={(e) => createRipple(e)}
      onClick={() =>
        router.push(
          router.pathname.substring(0, router.pathname.lastIndexOf("/")) || "/"
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );
};

export default BackButton;
