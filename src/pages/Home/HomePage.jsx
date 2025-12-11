import { useEffect, useRef, useState } from "react";
import FirstSection from "../../components/HomePage/firstSection/firstSection";
import { Link } from "react-router-dom";
import { SidebarWithBurgerMenu } from "../../components/shared/Navbar/Sidebar/Sidebar";
import SecondSection from "../../components/HomePage/secondSection/secondSection";
import Marquee from "../../components/HomePage/marquee/marquee";
// import InfoSignature from "../../components/HomePage/infoSignature/infoSignature";
// import SignatureSlider from "../../components/HomePage/Slider/slider";
import LazyGlobe from "../../components/HomePage/GlobeScene/LazyGlobel";
import WhoWeAreSection from "../../components/HomePage/WhoWeAreSection/WhoWeAreSection";
import WhatWeDoSection from "../../components/HomePage/WhatWeDo/WhatWeDo";
import MosaicModel from "../../components/HomePage/MosaicModel/MosaicModel";
// import Global from "../../components/HomePage/GlobeScene/Global";
// const Global = React.lazy(() =>
//   import("../../components/HomePage/GlobeScene/Global")
// ); 

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const secondSection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!secondSection.current) return;

      const sectionTop = secondSection.current.offsetTop;
      const sectionBottom = sectionTop + secondSection.current.offsetHeight;

      const scrolled = window.scrollY > sectionBottom;

      requestAnimationFrame(() => {
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`flex justify-between items-center px-2 md:px-10 fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          isScrolled ? "bg-white animationNavbar" : "bg-[rgba(0,0,0,0.5)]"
        }`}
      >
        <Link to="/">
          <img
            className={`${
              isScrolled ? "w-1/2 md:w-[28%]" : "w-[35%]"
            } p-2 transition-all duration-300`}
            src={isScrolled ? "/images/logoWithBlack.png" : "/images/logo.png"}
            alt="Mosaic Holding Corporation MHC"
          />
        </Link>
        <SidebarWithBurgerMenu inHomePage={!isScrolled} />
      </div>

      <FirstSection scrollTarget={secondSection} />
      <Marquee />

      <div ref={secondSection}>
        <SecondSection />
      </div>
      {/* <InfoSignature /> */}
      {/* <SignatureSlider /> */}
      <WhoWeAreSection/>
      <WhatWeDoSection/>
      <MosaicModel/>
      <LazyGlobe/>
      {/* <Suspense fallback={null}>
        <Global />
      </Suspense> */}
    </>
  );
}

export default HomePage;
