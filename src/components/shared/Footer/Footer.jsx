import { Link, useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {
  const nav = useNavigate();

  return (
    <>
      <div className="grid md:grid-cols-10 grid-cols-1 px-5 py-3 gap-5 bg-mainGold text-white">
        <div
          className="md:col-span-2 col-span-1 flex justify-center lg:px-8 cursor-pointer"
          onClick={() => nav("/")}
        >
          <img
            className="object-contain md:w-3/4 w-1/2 m-auto"
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="md:col-span-5 col-span-1 flex md:items-start items-center flex-col justify-center  ">
          <p className="text-md md:text-start text-center font-semibold">
            <Link to="/who-we-are" className="me-2">About |</Link>
            <Link to="/holdings" className="me-2">Holdings |</Link>
            <Link to="/our-projects" className="me-2">Projects |</Link>
            <Link to="/people" className="me-2">Careers |</Link>
            <Link to="/News" className="me-2">News </Link>
            <br />
            <Link to="/contact-us" className="me-2">Contact Us |</Link>
            <Link to="/privacy-policy" className="me-2">Privacy Policy |</Link>
            <Link to="/tearms-conditions" className="me-2">Terms & Conditions </Link>
          </p>
          <p className="text-sm mt-2">
            © 2024 Mosaic Holding Corporation, All rights reserved
          </p>
        </div>
        <div className="md:col-span-3 col-span-1  justify-evenly  flex items-center">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default Footer;
