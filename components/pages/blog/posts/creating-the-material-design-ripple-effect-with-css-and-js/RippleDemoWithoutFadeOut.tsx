import React, { useRef, useState } from "react";
// @ts-ignore
import motion from "motion";

const createRipple = (event: React.MouseEvent<Element, MouseEvent>) => {
  // Create ripple
  const button = event.currentTarget as HTMLElement;
  const ripple = document.createElement("span");

  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${
    event.clientX - button.getBoundingClientRect().left - radius
  }px`;
  ripple.style.top = `${
    event.clientY - button.getBoundingClientRect().top - radius
  }px`;
  ripple.classList.add("ripple");

  // Add ripple
  button.insertBefore(ripple, button.firstChild);
};

const removeRipples = (button: HTMLDivElement) => {
  const ripples = button.querySelectorAll(".ripple");
  ripples.forEach((ripple) => ripple.remove());
};

const RippleDemoWithoutFadeOut = () => {
  const button = useRef(null);

  const [rotate, setRotate] = useState(0);

  return (
    <div className="my-5 grid grid-cols-1 place-items-center">
      <div className="flex items-center">
        <div
          className="clip-rounded-pixel relative m-6 cursor-pointer bg-black bg-opacity-50 p-10 text-2xl"
          onPointerDown={(e) => createRipple(e)}
          ref={button}
        >
          Click me!
        </div>
        <div
          className="clip-rounded-pixel cursor-pointer bg-black bg-opacity-50"
          onClick={() => {
            setRotate((rotate) => rotate - 180);
            removeRipples(button.current as HTMLDivElement);
          }}
        >
          <motion.svg
            animate={{ rotate: rotate }}
            xmlns="http://www.w3.org/2000/svg"
            className="m-4 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default RippleDemoWithoutFadeOut;
