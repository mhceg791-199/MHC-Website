// import { useEffect, useRef, useState } from "react";
// import SecondSection from "../../components/HomePage/secondSection/secondSection";
// import FirstSection from "../../components/HomePage/firstSection/firstSection";
// import SignatureProject from "../../components/HomePage/signatureProject/signatureProject";
// import MhcInNumber from "../../components/HomePage/mhcInNumbers/mhcInNumber";
// import { Link } from "react-router-dom";
// import { SidebarWithBurgerMenu } from "../../components/shared/Navbar/Sidebar/Sidebar";
// import Holdings from "../../components/whoWeAre/Holdings/Holdings";
// import Loader from "../../components/shared/Loading/Loading";

// function HomePage() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const secondSection = useRef(null);
//   useEffect(() => {
//     const handleScroll = () => {
//       const sectionOffset = secondSection.current?.offsetTop || 0;
//       setIsScrolled(window.scrollY > sectionOffset);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       <div
//         className={`flex justify-between items-center  px-10 fixed top-0 left-0 right-0 z-40 ${
//           isScrolled ? "bg-white animationNavbar" : "bg-[rgba(0,0,0,0.5)]"
//         }`}
//       >
//         <Link to="/">
//           <img
//             className={`${isScrolled ? "w-[28%]" : "w-[35%]"} p-2  `}
//             src={isScrolled ? "/images/logoWithBlack.png" : "/images/logo.png"}
//             alt="Mosaic Holding Corporation MHC"
//           />
//         </Link>
//         <SidebarWithBurgerMenu inHomePage={!isScrolled} />
//       </div>
//       {<Loader /> && <FirstSection />}
//       <div ref={secondSection}>
//         <SecondSection />
//       </div>
//       <MhcInNumber />
//       <div className="md:p-10 p-5">
//         <Holdings />
//       </div>
//       {/* <div className="md:p-10 p-5">
//         <SignatureProject />
//       </div> */}
//     </>
//   );
// }

// export default HomePage;


import { useEffect, useRef, useState } from "react";
import FirstSection from "../../components/HomePage/firstSection/firstSection";
import { Link } from "react-router-dom";
import { SidebarWithBurgerMenu } from "../../components/shared/Navbar/Sidebar/Sidebar";
import Loader from "../../components/shared/Loading/Loading";
import Marquee from "../../components/HomePage/Marquee/Marquee";
import SecondSection from "../../components/HomePage/secondSection/secondSection";
// import InfoSignature from "../../components/HomePage/infoSignature/infoSignature";
// import SignatureSlider from "../../components/HomePage/Slider/slider";
// import Global from "../../components/HomePage/GlobeScene/Global";

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const secondSection = useRef(null);
  

  useEffect(() => {
    const handleScroll = () => {
      if (!secondSection.current) return;

      const sectionTop = secondSection.current.offsetTop;
      const sectionHeight = secondSection.current.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // start from SecondSection
      setIsScrolled(window.scrollY > sectionBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`flex justify-between items-center px-10 fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          isScrolled ? "bg-white animationNavbar" : "bg-[rgba(0,0,0,0.5)]"
        }`}
      >
        <Link to="/">
          <img
            className={`${isScrolled ? "w-[28%]" : "w-[35%]"} p-2 transition-all duration-300`}
            src={isScrolled ? "/images/logoWithBlack.png" : "/images/logo.png"}
            alt="Mosaic Holding Corporation MHC"
          />
        </Link>
        <SidebarWithBurgerMenu inHomePage={!isScrolled} />
      </div>

       {<Loader /> && <FirstSection scrollTarget={secondSection} />}
      <Marquee />

      <div ref={secondSection}>
        <SecondSection />
      </div>
{/*
      <InfoSignature />
      <SignatureSlider/>
      <Global /> */}
    </>
  );
}

export default HomePage;
