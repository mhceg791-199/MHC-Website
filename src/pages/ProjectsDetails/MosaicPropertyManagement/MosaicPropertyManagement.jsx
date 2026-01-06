import { useRef } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar.jsx";
import useScrollToSection from "../../../Hooks/useScrollToSection.js";
import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails.jsx";
import mosaic from "../../../assets/signatureProjects/mosaicPropertyManagement.webp";

function MosaicPropertyManagement() {
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const FirstDetails = {
    poster: "/signatureProjects/mosaicPropertyManagement/MosaicPropertyManagement.webp",
    logo: mosaic,
    title: { firstWord: "Mosaic Property Management" },
    text: [
      "Mosaic Property Management is the operational backbone of the Mosaic Holding ecosystem, dedicated to the strategic oversight, care, and long-term performance of real estate assets. We go beyond traditional property management by combining operational excellence, tenant experience, and asset value optimization into one integrated approach.",
      "Our role is to ensure that every Mosaic-managed property operates seamlessly — from day-to-day functionality to long-term positioning. We manage residential, commercial, and mixed-use properties with a focus on efficiency, transparency, and durability, protecting the value of each asset while enhancing the experience of those who use it."
    ],
    // link: "/mosaic-imports",
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

export default MosaicPropertyManagement;
