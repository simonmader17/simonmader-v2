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

  // Add ripple
  button.insertBefore(ripple, button.firstChild);

  // Add listeners to make the ripple effect fade out
  const animationStart = Date.now();

  const handleFadeOutRipple = () => {
    fadeOutRipple(button, handleFadeOutRipple, ripple, animationStart);
  };

  button.addEventListener("pointerup", handleFadeOutRipple);
  button.addEventListener("pointercancel", handleFadeOutRipple);
  button.addEventListener("pointerleave", handleFadeOutRipple);
};

const fadeOutRipple = (
  button: HTMLElement,
  handleFadeOutRipple: () => void,
  ripple: HTMLSpanElement,
  animationStart: number
) => {
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
  button.removeEventListener("pointerup", handleFadeOutRipple);
  button.removeEventListener("pointercancel", handleFadeOutRipple);
  button.removeEventListener("pointerleave", handleFadeOutRipple);
};

export { createRipple, fadeOutRipple };
