import BtnSwitch from "@/app/ui/components/buttonCustom/BtnSwitch";
import WaterTank from "@/app/ui/components/WaterTank";
import { GiWaterTank } from "react-icons/gi";

export default async function Dashboard() {
  return (
    <main className="w-[100%] h-[100%] flex flex-row space-x-5">
      <div className="bg-[#252836] w-[70%] h-full rounded-[25px] p-[30px] flex flex-col items-center justify-between">
        <div className="w-[300px] h-[70px] bg-slate-950 rounded-[25px] p-[20px] flex flex-row items-center relative">
          <div className=" flex flex-row items-center w-[calc(100%_-_20px)]">
            <GiWaterTank size="30px" color="#4af3f3" />
            <p className="text-slate-200 font-bold w-[calc(100%_-_30px)] text-center truncate p-[0_10px]">
              Water Tank Primary
            </p>
          </div>
          <BtnSwitch position="absolute right-[20px]" />
        </div>

          <WaterTank />
      </div>
      <div className="bg-blue-600 w-[30%] h-full"></div>
    </main>
  );
}
