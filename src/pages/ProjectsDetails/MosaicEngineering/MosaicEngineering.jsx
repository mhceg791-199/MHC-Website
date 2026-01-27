import { useRef } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar.jsx";
import useScrollToSection from "../../../Hooks/useScrollToSection.js";
import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails.jsx";
import mosaic from "../../../assets/signatureProjects/engineering.webp";

function MosaicEngineering() {
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const FirstDetails = {
    poster: "/signatureProjects/MosaicEngineering/MosaicEngineering.webp",
    logo: mosaic,
    title: { firstWord: "Mosaic Engineering" },
    text: [
      "Mosaic Engineering is a multidisciplinary engineering firm delivering integrated mechanical, electrical, and structural engineering solutions across complex projects and diverse sectors.",
      "As a subsidiary of Mosaic Holding Corporation, Mosaic Engineering operates within a wider ecosystem of design, engineering, and development expertise — allowing it to move beyond siloed services toward fully coordinated, performance-driven engineering.",
      "We focus on the systems behind the structure: the forces, flows, and frameworks that allow projects to stand, operate, and endure."
    ],
    link: "https://mosaic-eng.com/",
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

export default MosaicEngineering;
