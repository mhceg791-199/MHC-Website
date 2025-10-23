// import React, { useEffect, useRef } from "react";
// import AboutMHC from "../../components/whoWeAre/AboutMHC/AboutMHC";
// import Management from "../../components/whoWeAre/Management/Management";
// import FirstSection from "../../components/whoWeAre/firstSection/FirstSection";
// import OurValues from "../../components/whoWeAre/OurValues/OurValues";
// import Holdings from "../../components/whoWeAre/Holdings/Holdings";
// import OurJourney from "../../components/whoWeAre/ourJourney/OurJourney";
// import Navbar from "../../components/shared/Navbar/Navbar";
// import useScrollToSection from "../../Hooks/useScrollToSection";
// import Investment from "../../components/HomePage/investment/investment";

// function WhoWeAre() {
//   const firstSection = useRef(null); // Add reference for Management section
//   const values = useRef(null); // Add reference for Management section
//   const journey = useRef(null); // Add reference for Management section
//   const investment = useRef(null); // Add reference for Management section

//   const refs = {
//     firstSection,
//     values,
//     journey,
//     investment,
//   };

//   useScrollToSection(refs);
//   return (
//     <>
//       <Navbar />
//       <div ref={firstSection}>
//         <FirstSection />
//       </div>
//       <br />
//       <br />
//       <div className="px-8">
//         <AboutMHC />
//      <br />
//         {/* <div ref={managementRef}>
//           <Management />
//         </div> */}

//         <div ref={values}>
//           <OurValues />
//         </div>
//       </div>
//       <div ref={journey} className="px-8 bg-lightGray py-8">
//         <OurJourney />
//       </div>
//       <div ref={investment} className="px-8 py-8">
//         <Investment />
//       </div>
//     </>
//   );
// }

// export default WhoWeAre;


import { useRef } from "react";
import AboutMHC from "../../components/whoWeAre/AboutMHC/AboutMHC";
import FirstSection from "../../components/whoWeAre/firstSection/FirstSection";
// import OurValues from "../../components/whoWeAre/OurValues/OurValues";
import Navbar from "../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../Hooks/useScrollToSection";
import CarouselSection from "../../components/whoWeAre/Carousel/CarouselSection";
// import ButtonHoloBlob from "../../components/whoWeAre/ButtonHoloBlob/ButtonHoloBlob";

function WhoWeAre() {
  const firstSection = useRef(null); // Add reference for Management section
  const values = useRef(null);

  const refs = {
    firstSection,
    values,
  };

  useScrollToSection(refs);

  return (
    <>
      <Navbar />
       <div ref={firstSection}>
        <FirstSection />
      </div>
      <AboutMHC />
      <CarouselSection />
{/*
      
      <div ref={values}>
        <OurValues />
      </div>

      <ButtonHoloBlob /> */}
    </>
  );
}

export default WhoWeAre;
