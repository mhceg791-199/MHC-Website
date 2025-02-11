import React, { useRef } from "react";
import ProjectSlider from "../../../components/ProjectsDetailsPage/ProjectCard/projectSilder/SliderOfProjects";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import ProjectDetails from "../../../components/ProjectsDetailsPage/ProjectCard/ProjectDetails/ProjectDetails";
import Navbar from "../../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../../Hooks/useScrollToSection";
import {
  FaBuilding,
  FaCar,
  FaCubes,
  FaHome,
  FaStore,
  FaTools,
  FaTree,
  FaUniversity,
  FaWarehouse,
} from "react-icons/fa";
import WolseyInNumbers from "../../../components/WolseyPage/wolsetInNumbers/wolseyInNumbers";
function WolseyProjects() {
  const industries = [
    {
      name: "Multifamily",
      icon: <FaBuilding />,
    },
    {
      name: "Retail Commercial",
      icon: <FaStore />,
    },
    {
      name: "Office Warehouse",
      icon: <FaWarehouse />,
    },
    {
      name: "Dealerships",
      icon: <FaCar />,
    },
    {
      name: "Specialty Fabrication",
      icon: <FaTools />,
    },
    {
      name: "Municipal Institution",
      icon: <FaUniversity />,
    },
    {
      name: "Landscape Elements",
      icon: <FaTree />,
    },
    {
      name: "Modular Structures",
      icon: <FaCubes />,
    },
    {
      name: "Single Family Residential",
      icon: <FaHome />,
    },
  ];
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const firstSectionDetails = {
    poster: "/signatureProjects/wolsey/poster.jpg",
    logo: "/signatureProjects/wolsey.png",
    title: { firstWord: "WOLSEY STRUCTURAL ", secondWord: "ENGINEERING" },
    text: [
      "Founded in 2006 by Danny Wolsey, LEED AP, P.Eng., Wolsey Holdings delivers luxurious corporate solutions designed to elevate businesses and enhance professional environments. Specializing in bespoke office designs, high-end furnishings, and tailored consultancy, we craft sophisticated spaces that reflect your brand’s identity and foster success.",
      "With decades of global experience spanning four continents and projects in over ten countries, Danny’s leadership has positioned Wolsey as a trusted name in innovative and sustainable design. In 2023, Wolsey Structural Engineering joined Mosaic Holding Corporation, strengthening its reputation for excellence and collaboration.",
    ],
    link: "https://www.wolsey.ca/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSection data={firstSectionDetails} industries={industries} />
      </div>

      <WolseyInNumbers />
    </>
  );
}

export default WolseyProjects;
