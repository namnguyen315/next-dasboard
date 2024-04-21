import { IoIosArrowBack } from "react-icons/io";
export default function BtnToogleSidebar() {
  return (
    <button className="absolute w-[50px] h-[40px] pl-1 rounded-[50%_0_0_50%] bg-slate-950 right-0 top-[50%] hover:bg-slate-600 transition duration-[0.5S] ease-[ease]">
      <IoIosArrowBack color="#4af3f3" size="30px" />
    </button>
  );
}
