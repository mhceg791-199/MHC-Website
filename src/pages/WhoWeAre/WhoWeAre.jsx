import { useRef } from "react";
import AboutMHC from "../../components/whoWeAre/AboutMHC/AboutMHC";
import FirstSection from "../../components/whoWeAre/firstSection/FirstSection";
import OurValues from "../../components/whoWeAre/OurValues/OurValues";
import Navbar from "../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../Hooks/useScrollToSection";
import CarouselSection from "../../components/whoWeAre/Carousel/CarouselSection";
import ButtonHoloBlob from "../../components/whoWeAre/ButtonHoloBlob/ButtonHoloBlob";

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
      <OurValues />
      <ButtonHoloBlob />
    </>
  );
}

export default WhoWeAre;
