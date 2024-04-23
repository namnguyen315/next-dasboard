import { MdOutlineSwapVert } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { IoBulb } from "react-icons/io5";
import { FiSpeaker } from "react-icons/fi";
import { GiTheaterCurtains } from "react-icons/gi";
import { PiTelevisionBold } from "react-icons/pi";
import IoTDeviceCard from "./components/IoTDeviceCard";
import { CiSquarePlus } from "react-icons/ci";
import BtnSwitch from "./components/buttonCustom/BtnSwitch";

export default async function ControlerArea() {
  const IoTDevices = [
    {
      production: "Air Conditioner agjsdhgajs",
      nameProduction: "Panasonic N73",
      state: "on",
      icon: <TbAirConditioning size="30px" />,
      data: [
        {
          nameData: "Swing",
          value: "20°C",
        },
      ],
    },
    {
      production: "Smart Lamp",
      nameProduction: "Xiaomi Yeelight",
      state: "on",
      icon: <IoBulb size="30px" />,
      data: [],
    },
    {
      production: "Google Home",
      nameProduction: "Smart Speaker",
      state: "off",
      icon: <FiSpeaker size="30px" />,
      data: [],
    },
    {
      production: "Smart Curtain",
      nameProduction: "Bardi Wifi Curtain",
      state: "off",
      icon: <GiTheaterCurtains size="30px" />,
      data: [
        {
          nameData: "Front",
          value: "Opened",
        },
        {
          nameData: "Left",
          value: "Closed",
        },
      ],
    },
    {
      production: "Smart Tivi",
      nameProduction: "Tivi Sony Smart TV",
      state: "off",
      icon: <PiTelevisionBold size="30px" />,
      data: [],
    },
  ];

  return (
    <div className="w-[200px] flex flex-col h-full space-y-3">
      <div className="flex flex-col h-[120px] relative">
        <div className="flex flex-row w-full relative items-center pt-8">
          <p className="font-bold text-slate-200 pl-3 w-[170px] truncate">
            Living Room
          </p>
          <BtnSwitch position="absolute right-0" />
        </div>
        <button className="flex flex-row w-[95%] h-[40px] bottom-0 p-[5px_10px] absolute bg-[#252836] rounded-md items-center hover:bg-slate-500 transition duration-[0.5s] ease-[ease]">
          <CiSquarePlus size="30px" color="#FEFBF6" />
          <p className="w-[calc(100%_-_30px)] flex justify-center items-center text-[14px] font-bold text-slate-200">
            Add IoT device
          </p>
        </button>
      </div>
      <div className="h-[calc(100%_-_90px)] overflow-y-auto scrollbar w-full space-y-5 ">
        {IoTDevices.map((device, index) => {
          return <IoTDeviceCard device={device} key={index} />;
        })}
      </div>
    </div>
  );
}
