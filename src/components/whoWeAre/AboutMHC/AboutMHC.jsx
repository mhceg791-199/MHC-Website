import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function AboutMHC() {
  return (
    <>
      <br />
      <div className="md:w-3/4 m-auto text-center">
        <SectionHeader
          firstWord="ABOUT MOSAIC"
          secondWord="HOLDING CORPORATION"
        />
      </div>
      <br />
      <div className="md:w-3/4 m-auto text-center">
        <Paragraph
          p="Mosaic Holding Corporation (MHC) is a multinational investment firm with a 30-year legacy of operational excellence, formally structured in its current holding iteration in mid-2023. We specialize in strategic leveraged buyouts (LBOs) of mid-cap companies with proven expertise across architecture, engineering, energy, and marine infrastructure sectors. Our portfolio spans 4,000+ projects in 20+ countries, reflecting our global reach and local market proficiency. "
        />
        <Paragraph
          p="Through our unique acquisition model, we empower companies by providing comprehensive technical, financial, and operational support while preserving their brand identity and market strengths. Our current holdings include industry leaders such as Wolsey Structural Engineering (acquired 2023), ADAL ARUP DATTA ARCHITECT LTD. (acquired 2023), Kaller Architecture (33-year subsidiary), and MHCEG Consultancy (established 2023 as our Middle East gateway). "
        />
        <Paragraph p="Guided by our core values of integrity, innovation, and cross-cultural collaboration, we maintain a 95% retention rate with acquired companies. MHC combines global best practices with regional expertise to transform mid-market firms into international contenders. As we expand through MHCEG in the Middle East, we remain committed to delivering sustainable growth and technical excellence across all our sectors of operation. " />
      </div>
    </>
  );
}

export default AboutMHC;
