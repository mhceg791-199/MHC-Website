import React, { useEffect, useRef } from "react";
import AboutMHC from "../../components/whoWeAre/AboutMHC/AboutMHC";
import Management from "../../components/whoWeAre/Management/Management";
import FirstSection from "../../components/whoWeAre/firstSection/FirstSection";
import OurValues from "../../components/whoWeAre/OurValues/OurValues";
import Holdings from "../../components/whoWeAre/Holdings/Holdings";
import OurJourney from "../../components/whoWeAre/ourJourney/OurJourney";
import Navbar from "../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../Hooks/useScrollToSection";

function WhoWeAre() {
  const firstSection = useRef(null); // Add reference for Management section
  const managementRef = useRef(null); // Add reference for Management section
  const values = useRef(null); // Add reference for Management section
  const journey = useRef(null); // Add reference for Management section
  const holdings = useRef(null); // Add reference for Management section

  const refs = {
    firstSection,
    values,
    journey,
    holdings,
  };

  useScrollToSection(refs);
  return (
    <>
      <Navbar />
      <div ref={firstSection}>
        <FirstSection />
      </div>
      <br />
      <br />
      <div className="px-8">
        <AboutMHC />
        <br />
        <br />
        {/* <div ref={managementRef}>
          <Management />
        </div> */}
        <br />
        <div ref={values}>
          <OurValues />
        </div>
      </div>
      <div ref={journey} className="px-8 bg-lightGray py-8">
        <OurJourney />
      </div>
      <div ref={holdings} className="px-8 py-8">
        <Holdings />
      </div>
    </>
  );
}

export default WhoWeAre;
