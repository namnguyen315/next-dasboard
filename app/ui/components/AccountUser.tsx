import Image from "next/image";
import React from "react";
import { MdOutlineSwapVert } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

export default function AccountUser() {
  return (
    <div className="h-[calc(100%_-_40%_-_25%_-_120px)] bg-[#252836] flex flex-col items-center rounded-[5px_5px_15px_15px]">
      <div className=" w-[90%] flex flex-row items-center mt-[30px] space-x-3">
        <Image
          src="/images/avatarUser.png"
          alt="avatar user"
          width={50}
          height={50}
          className="bg-white rounded-full"
        />
        <div className="flex flex-col w-[calc(100%_-_62px)]">
          <div className="flex flex-row w-full relative">
            <p className="w-[calc(100%_-_25px)] font-bold text-slate-200 truncate  h-full items-center justify-start flex">
              NTNam315
            </p>
            <button className="absolute right-0 top-0 text-[#FEFBF6] hover:text-[#7BC9FF] transition duration-[0.5s] ease-[ease]">
              <MdOutlineSwapVert size="25px" />
            </button>
          </div>
          <p className="w-full text-slate-400 text-[12px] mt-[10px] truncate">
            namguyen3152001xtnd@gmail.com
          </p>
        </div>
      </div>
      <button className="w-[90%] h-[40px] bg-[#3F4562] pl-[20px] space-x-5 items-center mt-[45px] rounded-md flex flex-row hover:bg-slate-500 transition duration-[0.5s] ease-[ease]">
        <IoExitOutline size="25px" color="#FEFBF6" />
        <p className="font-bold text-slate-200">Sign Out</p>
      </button>
    </div>
  );
}
