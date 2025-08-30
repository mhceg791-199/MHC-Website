import  { useEffect, useRef, useState } from "react";
import SecondSection from "../../components/HomePage/secondSection/secondSection";
import FirstSection from "../../components/HomePage/firstSection/firstSection";
import SignatureProject from "../../components/HomePage/signatureProject/signatureProject";
import MhcInNumber from "../../components/HomePage/mhcInNumbers/mhcInNumber";
import { Link } from "react-router-dom";
import { SidebarWithBurgerMenu } from "../../components/shared/Navbar/Sidebar/Sidebar";
import Holdings from "../../components/whoWeAre/Holdings/Holdings";

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
          isScrolled ? "bg-white animationNavbar" : "bg-[rgba(0,0,0,0.5)]"
        }`}
      >
        <Link to="/">
          <img
            className={`${isScrolled ? "w-[28%]" : "w-[35%]"} p-2  `}
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
      <MhcInNumber />
      <div className="md:p-10 p-5">
        <Holdings />
      </div>
      {/* <div className="md:p-10 p-5">
        <SignatureProject />
      </div> */}
    </>
  );
}

export default HomePage;
