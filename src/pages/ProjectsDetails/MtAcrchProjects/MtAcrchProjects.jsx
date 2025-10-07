import  { useRef } from "react";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import Navbar from "../../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../../Hooks/useScrollToSection";
import MTArchInNumber from "../../../components/MT-ArchPage/MT-ArchInNumber/MT-ArchInNumber.jsx";
import {
  FaBuilding,
  FaStore,
  FaWarehouse,
  FaHotel,
  FaIndustry,
  FaCity,
  FaHome,
} from "react-icons/fa";
function MtAcrchProjects() {
 const industries = [
  {
    name: "Residential Buildings",
    icon: <FaHome />, // Better for homes/residential
  },
  {
    name: "Commercial Buildings",
    icon: <FaStore />, // Storefronts work well for commercial
  },
  {
    name: "Office Spaces",
    icon: <FaBuilding />, // Tall building fits office space
  },
  {
    name: "Hospitality",
    icon: <FaHotel />, // Specific to hotels/hospitality
  },
  {
    name: "Industrial Buildings",
    icon: <FaIndustry />, // Perfect for factories/industrial
  },
  {
    name: "Mixed-Use Developments",
    icon: <FaCity />, // Represents a mix of buildings/urban feel
  },
  {
    name: "Apartments",
    icon: <FaWarehouse />, // Multi-unit structure, better than tree
  },
];
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const firstSectionDetails = {
    poster: "/signatureProjects/wolsey/poster2.jpg",
    logo: "/signatureProjects/mt--archCircle.png",
    title: { firstWord: "MT-ARCH", secondWord: "ARCHITECT" },
    text: [
      "MT-Arch, a subsidiary of Mosaic Holding Corporation, is a Calgary-based architectural firm known for its bold integration of experience and innovation. Established in 2005, the studio delivers full-spectrum architectural services that prioritize value, community, and creativity.",
      "With a hands-on approach from concept to construction, MT-Arch specializes in more than just design — it manages projects, consults on development strategy, and serves as an active liaison with city authorities. Its comprehensive methodology spans consultation, community engagement, schematic design, detailed development, and construction oversight. The firm also ensures compliance with all municipal codes and facilitates smooth tendering and contract negotiations.",
      "Whether crafting visual concepts or navigating complex regulations, MT-Arch brings out the true potential in every project. With a mission to build not just structures but lasting impact, the firm continues to shape meaningful environments across Alberta and beyond.",
    ],
    link: "https://www.mt-arch.ca/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSection data={firstSectionDetails}  industries={industries} />
      </div>

      <MTArchInNumber />
    </>
  );
}

export default MtAcrchProjects;
