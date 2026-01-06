import { useRef } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar.jsx";
import useScrollToSection from "../../../Hooks/useScrollToSection.js";
import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails.jsx";

function IndigenousProject() {
 
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const FirstDetails = {
    poster: "/signatureProjects/indigenous/indigenous.webp",
    logo: "/signatureProjects/Indigenous.webp",
    title: { firstWord: "Indigenous Mosaic Company" },
    text: [
      "Indigenous Mosaic Company (IMC) is an architecture and engineering powerhouse born from the partnership between Chiniki Group of Companies and Mosaic Holding Corporation.",
      "Built on trust, driven by creativity, and powered by purpose, Indigenous Mosaic is where heritage meets high performance — uniting ancestral wisdom with modern engineering to design a future that feels both authentic and advanced. We don’t just build structures; we build meaning — connecting land, culture, and innovation into one agile ecosystem. IMC brings together the depth of Indigenous heritage with world-class A&E and EPCM expertise to deliver projects that are technically exceptional, environmentally responsible, and culturally alive."
    ],
    link: "https://indigenousmosaic.com/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSectionDetailss data={FirstDetails} />
      </div>
    </>
  );
}

export default IndigenousProject;

