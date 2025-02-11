import React, { useRef } from "react";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
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
import KallerInNumbers from "../../../components/KallerPage/KallerWithNumber/KallerWithNumber";

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
  const firstSectionDetails = {
    poster: "/signatureProjects/arup-datta/poster.webp",
    logo: "/signatureProjects/kaller.png",
    title: { firstWord: "Kallers", secondWord: "Architecture" },
    text: [
      "Kallers Architecture, founded by Joseph B. Kaller in 1984, specializes in residential, commercial, and interior design. The firm offers a full range of architectural and engineering services, with expertise in corporate interiors. They focus on delivering innovative, client-centered solutions. Kaller Architecture fosters strong, long-term client relationships through its commitment to integrity and excellence.",
    ],
    link: "https://www.kallerarchitects.com/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSection data={firstSectionDetails} industries={industries} />
      </div>
      <KallerInNumbers />
    </>
  );
}

export default KallerProjects;
