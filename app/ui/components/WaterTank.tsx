"use client";

import { useState } from "react";
import BtnShutDown from "./buttonCustom/BtnShutDown";
import WaterFlowGauge from "./gaugesCustom/WaterFlowGauge";
import FrontTank from "./iconCustom/FrontTank";
import GroundIcon from "./iconCustom/GroundIcon";
import InsideWaterTank from "./iconCustom/InsideWaterTank";
import LidWaterTank from "./iconCustom/LidWaterTank";
import PipeInIcon from "./iconCustom/PipeInIcon";
import PipeOutIcon from "./iconCustom/PipeOutIcon";
import WallIcon from "./iconCustom/WallIcon";

export default function WaterTank() {
  const [outletState, setOutletState] = useState("on");
  const [inletState, setInletState] = useState("on");

  const handleOnclick = (params: "inlet" | "outlet") => {
    if (params === "inlet") {
      setInletState(inletState === "on" ? "off" : "on");
    }
    if (params === "outlet") {
      setOutletState(outletState === "on" ? "off" : "on");
    }
  };

  return (
    <div className="w-[calc(100%)] h-[calc(100%_-_70px_-_30px)] bg-slate-950 rounded-[0_0_5px_5px] flex flex-row justify-between relative">
      <div className="flex flex-col items-center justify-end w-[700px] relative">
        <div className="bg-[linear-gradient(315deg,rgba(184,158,244,1)_20%,rgba(137,183,254,1)_49%)] h-[50px] w-[200px] mb-[30px] flex justify-center items-center rounded-[10px]">
          <div className="bg-backGroundColor1 h-[46px] w-[196px] rounded-[10px] flex justify-between items-center p-[0_10px]">
            <p className=" font-bold text-slate-400 w-[110px]">Water Level :</p>
            <p className=" w-[calc(100%_-_110px)] h-full bg-clip-text text-transparent font-bold flex justify-center items-center bg-[linear-gradient(315deg,rgba(184,158,244,1)_20%,rgba(137,183,254,1)_49%)]">
              100%
            </p>
          </div>
        </div>
        <LidWaterTank />
        <div className="relative z-30">
          <div className=" w-[196px] h-[290px] absolute top-[-65px] left-[-70px]">
            <PipeInIcon />
          </div>
          <div className="w-[165px] h-[88px] absolute bottom-[-15px] right-[-160px]">
            <PipeOutIcon />
          </div>
          <div>
            <FrontTank />
          </div>
        </div>
        <WallIcon />
        <GroundIcon />
        <div
          className="absolute z-0 w-[420px] h-[490px] bottom-[70px] left-[calc(50%_-_210px)] 
        bg-[linear-gradient(90deg,rgba(15,15,15,1)_0%,rgba(58,100,103,1)_30%,rgba(147,221,226,1)_50%,rgba(58,100,103,1)_70%,rgba(15,15,15,1)_100%)] "
        ></div>
        <div className="bg-[url(/images/Water2.png)] animate-water-level2-30 bg-repeat-x w-[420px] h-[490px] absolute bottom-[70px] left-[calc(50%_-_210px)] z-20 "></div>
        <div className="bg-[url(/images/Water1.png)] animate-water-level1-30 bg-repeat-x w-[420px] h-[490px] absolute bottom-[70px] left-[calc(50%_-_210px)] z-10 "></div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div>
          <WaterFlowGauge />
        </div>
        <div className="w-full h-[80px] relative flex items-center justify-center ">
          {inletState === "on" ? (
            <div className="w-full h-full absolute rounded-full bg-[linear-gradient(45deg,rgba(225,124,247,1)_12%,rgba(250,255,153,1)_34%,rgba(64,141,255,1)_65%,rgba(251,255,177,1)_86%)] "></div>
          ) : null}
          <div className="w-[calc(100%_-_4px)]  z-10 h-[76px] bg-backGroundColor1 flex flex-row rounded-full items-center justify-center p-[0_20px_0_20px]">
            <div className="w-[35px] h-[35px] rounded-full bg-backGroundColorRoot text-slate-200 flex items-center justify-center font-bold">
              {inletState.toUpperCase()}
            </div>
            <p className="text-center w-[calc(100%_-_70px)] text-[14px] font-bold text-slate-200">
              Inlet water valve
            </p>
            <BtnShutDown
              state={inletState}
              handleOnClicked={() => handleOnclick("inlet")}
            />
          </div>
        </div>
        <div className="mb-[200px] w-full h-[80px] flex items-center relative justify-center ">
          {outletState === "on" ? (
            <div className="w-full h-full rounded-full absolute bg-[linear-gradient(45deg,rgba(225,124,247,1)_12%,rgba(250,255,153,1)_34%,rgba(64,141,255,1)_65%,rgba(251,255,177,1)_86%)] "></div>
          ) : null}
          <div className="w-[calc(100%_-_4px)] z-10 h-[76px] bg-backGroundColor1 flex flex-row rounded-full items-center justify-center p-[0_20px_0_20px]">
            <div className="w-[35px] h-[35px] rounded-full bg-backGroundColorRoot text-slate-200 flex items-center justify-center font-bold">
              {outletState.toUpperCase()}
            </div>
            <p className="text-center w-[calc(100%_-_70px)] text-[14px] font-bold text-slate-200">
              Outlet water valve
            </p>
            <BtnShutDown
              state={outletState}
              handleOnClicked={() => handleOnclick("outlet")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="absolute bottom-[25px] left-[75px]">
            <InsideWaterTank />
          </div> */
}
