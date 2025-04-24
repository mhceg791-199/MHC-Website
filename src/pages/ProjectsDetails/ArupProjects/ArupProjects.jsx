import React, { useRef } from "react";
import ProjectSlider from "../../../components/ProjectsDetailsPage/ProjectCard/projectSilder/SliderOfProjects";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import ProjectDetails from "../../../components/ProjectsDetailsPage/ProjectCard/ProjectDetails/ProjectDetails";
import Navbar from "../../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../../Hooks/useScrollToSection";
import IndustriesOfHolding from "../../../components/ProjectsDetailsPage/IndustriesOfHolding/IndustriesOfHolding";
import {
  FaCity,
  FaPaintBrush,
  FaHome,
  FaBuilding,
  FaRegClipboard,
  FaHospital,
  FaTree,
  FaTheaterMasks,
  FaWater,
  FaFileContract,
} from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import ArupInNumber from "../../../components/ArupPage/ArupInNumber/ArupInNumber";

function ArupProjects() {
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);

  const industries = [
    {
      name: "Master and Urban Planning",
      icon: <FaCity />,
    },
    {
      name: "Interior Design",
      icon: <FaPaintbrush />,
    },
    {
      name: "Residential (Single and multifamily)",
      icon: <FaHome />,
    },
    {
      name: "Commercial",
      icon: <FaBuilding />,
    },
    {
      name: "Administrative",
      icon: <FaRegClipboard />,
    },
    {
      name: "Health Care, Cultural Buildings",
      icon: <FaHospital />,
    },
    {
      name: "Theme Park",
      icon: <FaTree />,
    },
    {
      name: "Set Designs",
      icon: <FaTheaterMasks />,
    },
    {
      name: "Water Features",
      icon: <FaWater />,
    },
    {
      name: "Building Booklet and Permits",
      icon: <FaFileContract />,
    },
  ];
  const firstSectionDetails = {
    poster: "/signatureProjects/arup-datta/p12.webp",
    logo: "/signatureProjects/arup.png",
    title: { firstWord: "ARUP DATTA", secondWord: "ARCHITECT" },
    text: [
      "A proud subsidiary of Mosaic Holding Corporation, is a globally renowned multidisciplinary firm with over 40 years of expertise in exceptional design and architecture. Backed by a skilled team of architects, interior designers, and project managers, ADAL delivers innovative solutions across residential, commercial, and institutional sectors.",
      "The firm excels in master planning, interior design, and diverse architectural projects, providing technical services such as building booklets and permit facilitation, ensuring seamless project execution.",
      "ADAL’s founder, Arup Datta, is a celebrated architect and graduate of IIT Kharagpur, who brought his expertise to Canada in 1974 and founded the firm in 1988. His visionary leadership has guided ADAL to deliver award-winning designs across Canada, the USA, Europe, and beyond. Recognized for blending budget-consciousness with aesthetic excellence, Mr. Datta’s approach emphasizes functionality, sustainability, and community impact.",
      "Operating in Canada, the USA, and across Asia and the Middle East, ADAL continues to shape transformative spaces worldwide, with a legacy rooted in innovation, quality, and enduring design.",
    ],
    link: "https://www.adal.ca/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSection data={firstSectionDetails} industries={industries} />
      </div>
      <ArupInNumber />
    </>
  );
}

export default ArupProjects;
