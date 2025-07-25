import React, { useRef } from "react";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import Navbar from "../../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../../Hooks/useScrollToSection";
import {
  FaDraftingCompass,
  FaCity,
  FaBolt,
  FaOilCan,
  FaLeaf,
} from "react-icons/fa";

import MhcegInNumbers from "../../../components/MhcegPage/MhcegInNumbers/MhcegInNumbers";
function MhcProjects() {
  const industries = [
    {
      name: "Structural & Architectural Engineering",
      icon: <FaDraftingCompass />, // Represents design and engineering
    },
    {
      name: "Urban Planning & Infrastructure",
      icon: <FaCity />, // Represents cityscape and urban infrastructure
    },
    {
      name: "Energy & Industrial Solutions",
      icon: <FaBolt />, // Represents energy solutions
    },
    {
      name: "Oil & Gas Engineering",
      icon: <FaOilCan />, // Represents oil and gas
    },
    {
      name: "Environmental & Sustainability Consulting",
      icon: <FaLeaf />, // Represents environmental consciousness
    },
  ];
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const firstSectionDetails = {
    poster: "/signatureProjects/mhceg/poster.jpg",
    logo: "/signatureProjects/mhceg.png",
    title: { firstWord: "MHCEG" },
    text: [
      "At MHCEG Consultancy, a subsidiary of Mosaic Holding Corporation, we deliver high-quality, customized engineering solutions with efficiency and precision. Our expert team ensures excellence through innovation, integrity, and technical expertise. By leveraging advanced technologies and sustainable practices, we develop tailored strategies that optimize performance and drive long-term success.",
    ],
    link: "https://mhc-eg.com/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSection data={firstSectionDetails} industries={industries} />
      </div>

      <MhcegInNumbers />
    </>
  );
}

export default MhcProjects;
