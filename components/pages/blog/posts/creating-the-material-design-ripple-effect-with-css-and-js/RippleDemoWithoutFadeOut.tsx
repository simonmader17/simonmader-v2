import React from "react";

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
  const animationStart = Date.now();

  // Add ripple
  button.insertBefore(ripple, button.firstChild);
};

const RippleDemoWithoutFadeOut = () => {
  return (
    <div className="my-5 grid grid-cols-1 place-items-center">
      <div
        className="clip-rounded-pixel relative m-6 cursor-pointer bg-black bg-opacity-50 p-10 text-2xl"
        onPointerDown={(e) => createRipple(e)}
      >
        Click me!
      </div>
    </div>
  );
};

export default RippleDemoWithoutFadeOut;
