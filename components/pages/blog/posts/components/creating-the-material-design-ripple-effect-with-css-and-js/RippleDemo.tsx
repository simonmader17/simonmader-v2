import React from "react";
import { createRipple } from "../../../../../../lib/ripple";

const RippleDemo = ({ text }) => {
  return (
    <div className="my-5 grid grid-cols-1 place-items-center">
      <div
        className="clip-rounded-pixel relative m-6 cursor-pointer bg-secondary bg-opacity-50 p-10 text-2xl select-none"
        onPointerDown={(e) => createRipple(e)}
      >
        {text}
      </div>
    </div>
  );
};

export default RippleDemo;
