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

  // Add listeners to make the ripple effect fade out
  button.addEventListener("pointerup", async () =>
    fadeOutRipple(ripple, animationStart)
  );
  button.addEventListener("pointercancel", async () =>
    fadeOutRipple(ripple, animationStart)
  );
  button.addEventListener("pointerleave", async () =>
    fadeOutRipple(ripple, animationStart)
  );
};

const fadeOutRipple = async (ripple: HTMLSpanElement, animationStart) => {
  const animationInterrupt = Date.now();
  let remainingTime = 600 - (animationInterrupt - animationStart);
  if (remainingTime < 200) remainingTime = 200;
  ripple.style.transition = `opacity ${remainingTime}ms linear`;
  if (ripple) ripple.classList.add("ripple-fade-out");
  const removeRipple = async () => {
    await new Promise((res) => setTimeout(res, remainingTime));
    if (ripple) ripple.remove();
  };
  removeRipple();
};

const RippleDemo = () => {
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

export default RippleDemo;
