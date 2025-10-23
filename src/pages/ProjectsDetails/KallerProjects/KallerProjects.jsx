import { useRef } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../../Hooks/useScrollToSection";
import {
  FaHome,
  FaBuilding,
  FaPaintBrush,
  FaShoppingBag,
  FaHotel,
  FaUniversity,
  FaBalanceScale,
  FaLayerGroup,
} from "react-icons/fa";
import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails";
import IndustriesOfHolding from "../../../components/ProjectsDetailsPage/IndustriesOfHolding/IndustriesOfHolding";
import NumbersSection from "../../../components/shared/NumbersSection/NumbersSection";
import { KallerNumbers } from "../../../data/numbers/numbersSection";

function KallerProjects() {
  const industries = [
    {
      name: "Residential",
      icon: <FaHome />, // Represents homes
    },
    {
      name: "Civic and Cultural",
      icon: <FaBalanceScale />, // Represents public and cultural institutions
    },
    {
      name: "Commercial",
      icon: <FaBuilding />, // Represents office and commercial spaces
    },
    {
      name: "Interiors",
      icon: <FaPaintBrush />, // Represents design and decoration
    },
    {
      name: "Retail",
      icon: <FaShoppingBag />, // Represents shopping and retail spaces
    },
    {
      name: "Hospitality",
      icon: <FaHotel />, // Represents hotels and hospitality services
    },
    {
      name: "Mix Use",
      icon: <FaLayerGroup />, // Represents mixed-use developments
    },
    {
      name: "Education",
      icon: <FaUniversity />, // Represents schools and universities
    },
  ];
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const FirstDetails = {
    poster: "/signatureProjects/kaller/poster.webp",
    logo: "/signatureProjects/kaller.png",
    title: { firstWord: "Kaller", secondWord: "Architecture" },
    text: [
      "Kaller Architecture, founded by Joseph B. Kaller in 1984, specializes in residential, commercial, and interior design. The firm offers a full range of architectural and engineering services, with expertise in corporate interiors. They focus on delivering innovative, client-centered solutions. Kaller Architecture fosters strong, long-term client relationships through its commitment to integrity and excellence.",
    ],
    link: "https://www.kallerarchitects.com/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSectionDetailss data={FirstDetails}/>
      </div>
      {industries && <IndustriesOfHolding industries={industries} />}
      <NumbersSection
        title="MHCEG in Numbers"
        items={KallerNumbers}
        columns="sm:grid-cols-4"
      />
    </>
  );
}

export default KallerProjects;
