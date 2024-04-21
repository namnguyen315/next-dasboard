import ControlerArea from "../ui/ControlerArea";
import SideBar from "../ui/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] bg-slate-950 items-center">
      <SideBar />
      <div className=" h-[96%] w-[calc(100%_-_250px_-_40px)] ml-[20px] space-x-5 flex-row flex">
        <ControlerArea />
        <div className="w-[calc(100%_-_200px)] h-full">{children}</div>
      </div>
    </div>
  );
}
