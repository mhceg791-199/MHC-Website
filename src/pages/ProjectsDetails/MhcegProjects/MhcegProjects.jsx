import { useRef } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../../Hooks/useScrollToSection";
import {
  FaDraftingCompass,
  FaCity,
  FaBolt,
  FaOilCan,
  FaLeaf,
} from "react-icons/fa";

import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails";
import IndustriesOfHolding from "../../../components/ProjectsDetailsPage/IndustriesOfHolding/IndustriesOfHolding";
import NumbersSection from "../../../components/shared/NumbersSection/NumbersSection";
import { MHCEGNumbers } from "../../../data/numbers/numbersSection";
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
  const FirstDetails = {
    poster: "/signatureProjects/mhceg/poster.webp",
    logo: "/signatureProjects/mhceg.png",
    title: { firstWord: "MHCEG Consultancy" },
    text: [
      "At MHCEG Consultancy, a subsidiary of Mosaic Holding Corporation, we deliver high-quality, customized engineering solutions with efficiency and precision. Our expert team ensures excellence through innovation, integrity, and technical expertise. By leveraging advanced technologies and sustainable practices, we develop tailored strategies that optimize performance and drive long-term success.",
    ],
    link: "https://mhc-eg.com/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSectionDetailss data={FirstDetails} />
      </div>
      {industries && <IndustriesOfHolding industries={industries} />}
      <NumbersSection
        title="MHCEG in Numbers"
        items={MHCEGNumbers}
        columns="sm:grid-cols-4"
      />
    </>
  );
}

export default MhcProjects;
