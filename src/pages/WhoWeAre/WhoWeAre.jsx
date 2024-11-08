import React, { useEffect, useRef } from "react";
import AboutMHC from "../../components/whoWeAre/AboutMHC/AboutMHC";
import Management from "../../components/whoWeAre/Management/Management";
import FirstSection from "../../components/whoWeAre/firstSection/FirstSection";
import OurValues from "../../components/whoWeAre/OurValues/OurValues";
import Holdings from "../../components/whoWeAre/Holdings/Holdings";
import OurJourney from "../../components/whoWeAre/ourJourney/OurJourney";
import { useLocation } from "react-router-dom";

function WhoWeAre() {
  const firstSectionRef = useRef(null); // Add reference for Management section
  const managementRef = useRef(null); // Add reference for Management section
  const valuesRef = useRef(null); // Add reference for Management section
  const journeyRef = useRef(null); // Add reference for Management section
  const holdingsRef = useRef(null); // Add reference for Management section
  const location = useLocation();
  const scrollToSection = (ref) => {
    const offsetTop = ref.current.offsetTop;
    window.scrollTo({
      top: offsetTop - 70,
    });
  };

  useEffect(() => {
    // Check if location has a state with scrollTo section
    if (location.state?.scrollTo === "management") {
      scrollToSection(managementRef);
    }
    if (location.state?.scrollTo === "firstSection") {
      scrollToSection(firstSectionRef);
    }
    if (location.state?.scrollTo === "values") {
      scrollToSection(valuesRef);
    }
    if (location.state?.scrollTo === "journey") {
      scrollToSection(journeyRef);
    }
    if (location.state?.scrollTo === "holdings") {
      scrollToSection(holdingsRef);
    }
  }, [location]);
  return (
    <>
      <div ref={firstSectionRef}>
        <FirstSection />
      </div>
      <br />
      <br />
      <div className="px-8">
        <AboutMHC />
        <br />
        <br />
        <div ref={managementRef}>
          <Management />
        </div>
        <br />
        <div ref={valuesRef}>
          <OurValues />
        </div>
      </div>
      <div ref={journeyRef} className="px-8 bg-lightGray py-8">
        <OurJourney />
      </div>
      <div ref={holdingsRef} className="px-8 py-8">
        <Holdings />
      </div>
    </>
  );
}

export default WhoWeAre;
