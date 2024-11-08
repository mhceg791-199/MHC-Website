import React from "react";
import { SidebarWithBurgerMenu } from "./Sidebar/Sidebar";

function Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between items-center  px-10 fixed top-0 left-0 right-0 shadow-xl  z-40">
        <img className=" p-2" src="/images/logoWithBlack.png" alt="" />
        <SidebarWithBurgerMenu />
      </div>
    </>
  );
}

export default Navbar;
