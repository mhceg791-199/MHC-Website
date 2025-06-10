import  { useRef } from "react";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import Navbar from "../../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../../Hooks/useScrollToSection";

function MtAcrchProjects() {

  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const firstSectionDetails = {
    poster: "/signatureProjects/wolsey/poster.webp",
    logo: "/signatureProjects/mt-arch.png",
    title: { firstWord: "MT-ARCH", secondWord: "ARCHITECT" },
    text: [
      "MT-Arch, a subsidiary of Mosaic Holding Corporation, is a Calgary-based architectural firm known for its bold integration of experience and innovation. Established in 2005, the studio delivers full-spectrum architectural services that prioritize value, community, and creativity. ",
      "With a hands-on approach from concept to construction, MT-Arch specializes in more than just design, they manage projects, consult on development strategy, and serve as active liaisons with city authorities. Their comprehensive methodology spans consultation, community engagement, schematic design, detailed development, and construction oversight. The firm also ensures compliance with all municipal codes and facilitates smooth tendering and contract negotiations.",
      "Whether crafting visual concepts or navigating complex regulations, MT-Arch brings out the true potential in each project. With a mission to build not just structures but lasting impact, they continue to shape meaningful environments across Alberta and beyond.",
    ],
    link: "https://www.mt-arch.ca/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSection data={firstSectionDetails}  />
      </div>

      {/* <WolseyInNumbers /> */}
    </>
  );
}

export default MtAcrchProjects;
