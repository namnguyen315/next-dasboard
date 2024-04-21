import GroundIcon from "./iconCustom/GroundIcon";
import InsideWaterTank from "./iconCustom/InsideWaterTank";
import PipeInIcon from "./iconCustom/PipeInIcon";
import PipeOutIcon from "./iconCustom/PipeOutIcon";
import WallIcon from "./iconCustom/WallIcon";

export default function WaterTank() {
  return (
    <div className="w-[calc(100%)] h-[calc(100%_-_70px_-_30px)] bg-slate-950 rounded-[0_0_5px_5px] flex flex-col items-start justify-end relative">
      <div className="flex flex-col items-center relative w-[700px]">
        <div className="relative h-[575px]">
          <div className="absolute top-0 left-[-70px] w-[196px] h-[290px]">
            <PipeInIcon />
          </div>
          <div className="flex flex-col items-center w-[460px] h-full">
            <div className="bg-[linear-gradient(90deg,rgba(135,199,255,1)_0%,rgba(81,159,228,1)_20%,rgba(48,122,189,1)_45%,rgba(17,73,121,1)_75%,rgba(0,50,93,1)_100%)] w-[200px] h-[30px] rounded-[10px_10px_0px_0px]" />
            <div className="bg-[linear-gradient(90deg,rgba(135,199,255,1)_0%,rgba(81,159,228,1)_20%,rgba(48,122,189,1)_45%,rgba(17,73,121,1)_75%,rgba(0,50,93,1)_100%)] w-[440px] h-[545px] relative rounded-[60px_60px_25px_25px]">
              <div
                className="  bg-[linear-gradient(90deg,rgba(145,204,255,1)_0%,rgba(60,155,238,1)_50%,rgba(10,51,87,1)_100%)] 
                            w-[460px] h-[10px] rounded-[5px] absolute bottom-[475px] left-[-10px]"
              >
                <div className="bg-[linear-gradient(0deg,rgba(10,51,87,0.5)_0%,rgba(145,204,255,0.5)_50%,rgba(10,51,87,0.5)_100%)] w-full h-full rounded-[5px]" />
              </div>
              <div
                className="  bg-[linear-gradient(90deg,rgba(145,204,255,1)_0%,rgba(60,155,238,1)_50%,rgba(10,51,87,1)_100%)] 
                            w-[460px] h-[10px] rounded-[5px] absolute bottom-[400px] left-[-10px]"
              >
                <div className="bg-[linear-gradient(0deg,rgba(10,51,87,0.5)_0%,rgba(145,204,255,0.5)_50%,rgba(10,51,87,0.5)_100%)] w-full h-full rounded-[5px]" />
              </div>
              <div
                className="  bg-[linear-gradient(90deg,rgba(145,204,255,1)_0%,rgba(60,155,238,1)_50%,rgba(10,51,87,1)_100%)] 
                            w-[460px] h-[10px] rounded-[5px] absolute bottom-[325px] left-[-10px]"
              >
                <div className="bg-[linear-gradient(0deg,rgba(10,51,87,0.5)_0%,rgba(145,204,255,0.5)_50%,rgba(10,51,87,0.5)_100%)] w-full h-full rounded-[5px]" />
              </div>
              <div
                className="  bg-[linear-gradient(90deg,rgba(145,204,255,1)_0%,rgba(60,155,238,1)_50%,rgba(10,51,87,1)_100%)] 
                            w-[460px] h-[10px] rounded-[5px] absolute bottom-[250px] left-[-10px]"
              >
                <div className="bg-[linear-gradient(0deg,rgba(10,51,87,0.5)_0%,rgba(145,204,255,0.5)_50%,rgba(10,51,87,0.5)_100%)] w-full h-full rounded-[5px]" />
              </div>
              <div
                className="  bg-[linear-gradient(90deg,rgba(145,204,255,1)_0%,rgba(60,155,238,1)_50%,rgba(10,51,87,1)_100%)] 
                            w-[460px] h-[10px] rounded-[5px] absolute bottom-[175px] left-[-10px]"
              >
                <div className="bg-[linear-gradient(0deg,rgba(10,51,87,0.5)_0%,rgba(145,204,255,0.5)_50%,rgba(10,51,87,0.5)_100%)] w-full h-full rounded-[5px]" />
              </div>
              <div
                className="  bg-[linear-gradient(90deg,rgba(145,204,255,1)_0%,rgba(60,155,238,1)_50%,rgba(10,51,87,1)_100%)] 
                            w-[460px] h-[10px] rounded-[5px] absolute bottom-[100px] left-[-10px]"
              >
                <div className="bg-[linear-gradient(0deg,rgba(10,51,87,0.5)_0%,rgba(145,204,255,0.5)_50%,rgba(10,51,87,0.5)_100%)] w-full h-full rounded-[5px]" />
              </div>
              <div
                className="  bg-[linear-gradient(90deg,rgba(145,204,255,1)_0%,rgba(60,155,238,1)_50%,rgba(10,51,87,1)_100%)] 
                            w-[460px] h-[10px] rounded-[5px] absolute bottom-[25px] left-[-10px]"
              >
                <div className="bg-[linear-gradient(0deg,rgba(10,51,87,0.5)_0%,rgba(145,204,255,0.5)_50%,rgba(10,51,87,0.5)_100%)] w-full h-full rounded-[5px]" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-20px] right-[-155px] w-[165px] h-[88px]">
            <PipeOutIcon />
          </div>
          <div className="absolute bottom-[25px] left-[75px]">
            <InsideWaterTank />
          </div>
        </div>
        <WallIcon />
        <GroundIcon />
      </div>
    </div>
  );
}
