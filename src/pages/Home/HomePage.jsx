import React, { useEffect, useRef, useState } from "react";
import SecondSection from "../../components/HomePage/secondSection/secondSection";
import FirstSection from "../../components/HomePage/firstSection/firstSection";
import SignatureProject from "../../components/HomePage/signatureProject/signatureProject";
import MhcInNumber from "../../components/HomePage/mhcInNumbers/mhcInNumber";
import Investment from "../../components/HomePage/investment/investment";
import { Link } from "react-router-dom";
import { SidebarWithBurgerMenu } from "../../components/shared/Navbar/Sidebar/Sidebar";

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const secondSection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffset = secondSection.current?.offsetTop || 0;
      setIsScrolled(window.scrollY > sectionOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`flex justify-between items-center  px-10 fixed top-0 left-0 right-0 z-40 ${
          isScrolled ? "bg-white animationNavbar" : ""
        }`}
      >
        <Link to="/">
          <img
            className=" p-2"
            src={isScrolled ? "/images/logoWithBlack.png" : "/images/logo.png"}
            alt=""
          />
        </Link>
        <SidebarWithBurgerMenu inHomePage={!isScrolled} />
      </div>
      <FirstSection />
      <div ref={secondSection}>
        <SecondSection />
      </div>
      <div className="md:p-10 p-5">
        <SignatureProject />
      </div>
      <MhcInNumber />
      <div className="md:p-10 p-5">
        <Investment />
      </div>
    </>
  );
}

export default HomePage;
