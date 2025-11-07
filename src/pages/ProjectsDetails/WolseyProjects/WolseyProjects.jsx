import { useRef } from "react";
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
import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails";
import IndustriesOfHolding from "../../../components/ProjectsDetailsPage/IndustriesOfHolding/IndustriesOfHolding";
import NumbersSection from "../../../components/shared/NumbersSection/NumbersSection";
import { wolseyNumbers } from "../../../data/numbers/numbersSection";

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

  const FirstDetails = {
    poster: "/signatureProjects/wolsey/poster.webp",
    logo: "/signatureProjects/wolsey.png",
    title: { firstWord: "WOLSEY STRUCTURAL ", secondWord: "ENGINEERING" },
    text: [
      "Founded in 2006, Wolsey Structural Engineering is a leader in innovative and sustainable structural solutions. With a portfolio spanning thousands of projects across multiple industries, Wolsey specializes in designing resilient, high-performance structures that meet the evolving demands of modern construction.",
      "In 2023, Wolsey Structural Engineering became part of Mosaic Holding Corporation, strengthening its reach and resources while maintaining its commitment to technical excellence and precision engineering, the firm continues to deliver cost-effective, structurally sound solutions that optimize efficiency, durability, and sustainability.",
    ],
    link: "https://www.wolsey.ca/",
  };

  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSectionDetailss data={FirstDetails} />
      </div>

      {industries && <IndustriesOfHolding industries={industries} />}
      <div className="md:p-8 p-5 bg-[#0c0c0c]">
        <NumbersSection
          title="Wolsey in Numbers"
          items={wolseyNumbers}
          columns="sm:grid-cols-6"
        />
      </div>
    </>
  );
}

export default WolseyProjects;
