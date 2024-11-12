import React from "react";
import { SidebarWithBurgerMenu } from "./Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between items-center  px-10 fixed top-0 left-0 right-0 shadow-xl  z-40">
        <Link to="/">
          <img
            className=" p-2 w-[28%]"
            src="/images/logoWithBlack.png"
            alt=""
          />
        </Link>
        <SidebarWithBurgerMenu />
      </div>
    </>
  );
}

export default Navbar;
