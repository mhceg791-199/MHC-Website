import React, { useRef } from "react";
import IndustryCard from "../../components/IndustryPage/IndustryCard/IndustryCard";
import EngineerCard from "../../components/IndustryPage/EngineerCard/EngineerCard";

import Navbar from "../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../Hooks/useScrollToSection";

function IndustriesPage() {
  const architecturalRef = useRef(null);
  const oilAndGasRef = useRef(null);
  const engineerRef = useRef(null);
  const marineRef = useRef(null);
  const energyRef = useRef(null);

  const refs = {
    architechture: architecturalRef,
    oil: oilAndGasRef,
    engineer: engineerRef,
    marine: marineRef,
    energy: energyRef,
  };

  useScrollToSection(refs);
  return (
    <>
      <Navbar />
      <div ref={architecturalRef}>
        <IndustryCard
          img="/industryPage/1.webp"
          firstWord="Architecture and"
          secondWord="Urban Planning"
          p="Mosaic Holding Corporation commands a strong position in global architecture, delivering end-to-end services from conceptual design to project execution. Our architectural division drives innovation in both commercial and residential developments, merging aesthetic vision with functional practicality. Operating in a $410 billion global market (2024), we capitalize on urbanization trends, sustainable design demands, and digital transformation in the built environment. The sector continues demonstrating robust 6-8% annual growth, reflecting sustained value in architectural equities."
          icon="/homePage/icons/icon1.png"
          link="/arup"
        />
      </div>
      <div ref={engineerRef}>
        <EngineerCard />
      </div>
      <div ref={oilAndGasRef}>
        <IndustryCard
          img="/industryPage/3.webp"
          firstWord="Oil and"
          secondWord="Gas"
          type="horizontal"
          p="MHC maintains strategic involvement in the $4.5 trillion global oil and gas sector, which continues to drive industrial and transportation markets despite energy transitions. Our activities balance traditional energy expertise with forward-looking sustainability initiatives, creating value across the energy spectrum."
          icon="/homePage/icons/icon3.png"
        />
      </div>
      <div ref={marineRef}>
        <IndustryCard
          img="/industryPage/4.webp"
          firstWord="Marine and Offshore"
          secondWord="Structures"
          p="Specializing in complex marine infrastructure, MHC delivers solutions for both traditional energy (oil rigs) and renewable projects (offshore wind farms). This $128 billion market (2024) reflects growing investment in energy transition infrastructure and port modernization worldwide. "
          icon="/homePage/icons/icon4.png"
        />
      </div>
      <div ref={energyRef}>
        <IndustryCard
          img="/industryPage/5.webp"
          firstWord="Energy "
          type="horizontal"
          secondWord="Management"
          p="MHC's sustainable energy solutions help industrial clients optimize consumption through advanced storage and smart distribution technologies. Our $46 billion global energy management division combines renewable integration with legacy system optimization, reducing environmental impact while maintaining operational efficiency."
          icon="/homePage/icons/icon5.png"
        />
      </div>
    </>
  );
}

export default IndustriesPage;
