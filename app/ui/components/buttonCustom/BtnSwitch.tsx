import React from "react";
import { MdOutlineSwapVert } from "react-icons/md";

export default function BtnSwitch({
  size = 25,
  color = "#4af3f3",
  hoverColor = "#275daf",
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
      className={`w-[${size}px] h-[${size}px] text-[${color}] hover:text-[${hoverColor}] ${position} transition duration-[0.5s] ease-[ease]`}
    >
      <MdOutlineSwapVert size={`${size}px`} />
    </button>
  );
}
