import React from "react";
import { MdOutlineSwapVert } from "react-icons/md";

export default function BtnSwitch({
  size = 25,
  color,
  hoverColor,
  position,
  handleOnClicked,
}: {
  size?: number;
  color?: string;
  hoverColor?: string;
  position?: string;
  handleOnClicked?: () => void;
}) {
  return (
    <button
      onClick={handleOnClicked}
      className={`w-[${size}px] h-[${size}px] ${
        color
          ? color.startsWith("#")
            ? `text-[${color}]`
            : `text-${color}`
          : "text-softCyan"
      } ${
        hoverColor
          ? hoverColor.startsWith("#")
            ? `hover:text-[${hoverColor}]`
            : `hover:text-${hoverColor}`
          : `hover:text-darkBlue`
      }  ${position} transition duration-[0.5s] ease-[ease]`}
    >
      <MdOutlineSwapVert size={`${size}px`} />
    </button>
  );
}
