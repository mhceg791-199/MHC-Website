import { SidebarWithBurgerMenu } from "./Sidebar/Sidebar";
import { Link } from "react-router-dom";
import ChristmasOrnaments from "../ChristmasOrnaments/ChristmasOrnaments";
import FallingStars from "../FallingStars/FallingStars";

function Navbar() {
  return (
    <>
      <div className="bg-white flex justify-between items-center  px-5 md:px-10 fixed top-0 left-0 right-0 shadow-xl  z-40">
        <FallingStars />
        <Link to="/">
          <img
            className=" p-2 w-[35%] md:w-[24%]"
            src="/images/logoWithBlack.png"
            alt="Mosaic Holding Corporation MHC"
          />

          {/* Santa Hat */}
          <div className="absolute -top-1 left-3 md:left-8 scale-x-[-1]">
            <img
              src="/images/santa-hat.png"
              alt="Santa Hat"
              className="w-10 md:w-16 rotate-[10deg] animate-santa"
            />
          </div>

          <ChristmasOrnaments />
        </Link>
        <SidebarWithBurgerMenu />
      </div>
    </>
  );
}

export default Navbar;
