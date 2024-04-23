export default function WaterFlowGauge({
  size,
  position,
  handleOnClicked,
}: {
  size?: string;
  position?: string;
  handleOnClicked?: () => void;
}) {
  const value = 2.3;
  const mapValue = (
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
  ) => {
    return (
      ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) +
      toLow
    ).toFixed(1);
  };
  const rigleRotate = mapValue(value, 0, 6, -45, 225);
  const numTick = 6;
  const unit = "L/M";
  const rotateTick = [];
  const rotateSubTick = [];

  for (let index = 0; index <= numTick; index++) {
    rotateTick.push((270 / numTick) * (index + 1) - (270 / numTick + 45));
  }
  for (let index = 1; index <= numTick * 10; index++) {
    if ((index - 1) % 10 !== 0) {
      rotateSubTick.push(
        `rotate-[${
          (270 / (numTick * 10)) * index - (270 / (numTick * 10) + 45)
        }]`
      );
    }
  }

  return (
    <div
      className={` w-[200px] h-[200px] relative flex justify-center items-center select-none`}
    >
      <div className="w-[98%] h-[98%] relative flex content-center items-center justify-center shadow-[0px_5px_8px_#00000045] bg-[linear-gradient(0deg,rgba(78,78,78,1)_0%,rgba(215,215,215,1)_99%,rgba(236,236,236,1)_100%)] rounded-[15%] before:content-[] before:bg-gauge-g-body before:bg-repeat before:absolute before:opacity-10 before:rounded-[15%] before:inset-0">
        <div className="g-ring w-[94%] h-[94%] relative flex content-center items-center justify-center bg-[linear-gradient(180deg,rgba(78,78,78,1)_0%,rgba(215,215,215,1)_99%,rgba(236,236,236,1)_100%)] rounded-[50%]">
          <div className="g-rivets absolute w-full h-full left-0 top-0">
            {[
              "top-[10px] left-[10px]",
              "top-[10px] right-[10px]",
              "bottom-[10px] right-[10px]",
              "bottom-[10px] left-[10px]",
            ].map((element, index) => (
              <div
                key={index}
                className={`g-rivet absolute ${element} w-[10px] h-[10px] bg-[linear-gradient(135deg,#adadad_0%,#d3d3d3_51%,#d1d1d1_68%,#8c8c8c_100%)] shadow-[0px_2px_4px_#000,-1px_-1px_5px_rgba(0,0,0,0.2)] border rounded-[50px] border-solid border-[rgba(255,255,255,0.1)] before:content-[""] before:absolute before:w-[4px] before:h-[4px] before:shadow-[inset_0px_1px_2px_#222] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-[50%] before:border-b-[rgba(255,255,255,0.3)] before:border-b before:border-solid before:left-2/4 before:top-2/4`}
              ></div>
            ))}
          </div>
          <div className="g-plate overflow-hidden w-[93%] h-[93%] relative shadow-[inset_0_0_15px_#000000a3] bg-[radial-gradient(circle,#dd8400_3%,rgb(196_205_209)_1%,rgb(177_183_186)_40%,rgb(191_193_194)_100%)] rounded-[50%]">
            <div className="g-ticks absolute w-full h-full left-0 top-0 drop-shadow-Gauge-ticks-ds">
              {rotateTick.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={`rotate-[${value}] w-full h-[1px] absolute top-[50%] left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_2%,rgba(0,0,0,0.6)_2%,rgba(0,0,0,0.6)_10%,rgba(0,0,0,0)_10%)]`}
                  />
                );
              })}
            </div>
            <div className="g-ticks absolute w-full h-full left-0 top-0 drop-shadow-Gauge-ticks-ds">
              {rotateSubTick.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={`${value} w-full h-[1px] absolute top-[50%] left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_2%,rgba(0,0,0,0.6)_2%,rgba(0,0,0,0.6)_6%,rgba(0,0,0,0)_6%)]`}
                  />
                );
              })}
            </div>
            <div className="g-nums absolute w-full h-full text-[#000000a1] top-0 drop-shadow-Gauge-ticks-ds">
              {rotateTick.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={`g-num pl-[20px] absolute h-[20px top-1/2 left-1/2 w-full rotate-[${value}] -translate-x-2/4 -translate-y-2/4`}
                  >
                    <p
                      className={`w-[20px] h-[20px] rotate-[${-value}] text-center`}
                    >
                      {index}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className={`g-label absolute text-center w-full -translate-x-2/4 text-[#000000a1] left-2/4 top-[58%] drop-shadow-Gauge-ticks-ds text-[10px] after:content-["${unit}"] after:text-[15px] after:absolute after:w-full after:h-full after:left-0 after:top-full`}
            >
              Water Flow
            </div>
            <div
              className={`g-needle rotate-[${rigleRotate}] transition-transform duration-[1s] absolute w-full h-[2%] bg-[linear-gradient(90deg,rgba(2,0,36,0)_0,rgba(0,0,0,0)_15%,#001100_15%,#001100_50%,rgba(0,0,0,0)_50%)] left-0 top-[49%]`}
            ></div>
            <div className="g-needle-ring absolute w-[15px] h-[15px] bg-[#001100] -translate-x-2/4 -translate-y-2/4 shadow-[0_1px_4px_#0000009c] rounded-[50%] left-2/4 top-2/4 drop-shadow-Gauge-ticks-ds"></div>
            <div className="g-val absolute text-center w-20 -translate-x-2/4 text-[18px] text-[#000000a1] left-2/4 bottom-[5%] drop-shadow-Gauge-ticks-ds">
              {value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
