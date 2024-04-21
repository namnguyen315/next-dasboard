import React from "react";
import LogoApp from "./components/LogoApp";
import NavLink from "./components/NavLink";
import WorkSpace from "./components/WorkSpace";
import AccountUser from "./components/AccountUser";
import BtnToogleSidebar from "./components/buttonCustom/BtnToogleSidebar";

export default function SideBar() {
  return (
    <div className="relative w-[250px] h-[100%] flex flex-col items-center justify-center">
      <div className="h-[96%] w-[95%] flex flex-col box-border space-y-3 justify-center absolute right-0">
        <LogoApp />
        <NavLink />
        <WorkSpace />
        <AccountUser />
        <BtnToogleSidebar />
      </div>
    </div>
  );
}
