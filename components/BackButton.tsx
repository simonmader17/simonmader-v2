import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname != "/" && (
        <div className="group fixed top-0 left-0 z-20 m-4">
          <button
            className="drop-shadow-pixel-sm group-hover:drop-shadow-pixel bg-body bg-hero-brick-wall-purple h-12 w-12 rounded-full border-2 border-black text-xl transition-[filter] md:text-3xl"
            onClick={() => router.push("/")}
          >
            {"<"}
          </button>
        </div>
      )}
    </>
  );
};

export default BackButton;
