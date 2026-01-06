import { useRef } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar.jsx";
import useScrollToSection from "../../../Hooks/useScrollToSection.js";
// import { FaStore, FaHome, FaLandmark } from "react-icons/fa";
import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails.jsx";
// import IndustriesOfHolding from "../../../components/ProjectsDetailsPage/IndustriesOfHolding/IndustriesOfHolding.jsx";
import mosaic from "../../../assets/signatureProjects/imports.webp";

function MosaicImports() {
//   const industries = [
//     {
//       name: "Administrative",
//       icon: <FaLandmark />, // Landmark = government/administrative offices
//     },
//     {
//       name: "Residential Buildings",
//       icon: <FaHome />, // Better for homes/residential
//     },
//     {
//       name: "Commercial Buildings",
//       icon: <FaStore />, // Storefronts work well for commercial
//     },
//   ];
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const FirstDetails = {
    poster: "/signatureProjects/mosaicImports/mosaic-imports.webp",
    logo: mosaic,
    title: { firstWord: "Mosaic Imports" },
    text: [
      "Mosaic Imports is a specialized trading and sourcing arm under Mosaic Holding Corporation, created to support the full spectrum of construction, architecture, and engineering needs through high-quality imported materials and systems.",
      "The company focuses on identifying, sourcing, and supplying essential building and finishing materials from global markets — spanning structural, architectural, mechanical, electrical, plumbing, and interior requirements. Mosaic Imports operates as a standalone commercial entity, serving a broad client base that includes developers, contractors, engineering firms, architects, and project owners across multiple sectors.",
      "By centralizing procurement expertise and global supplier relationships, Mosaic Imports enables efficiency, consistency, and reliability across projects of all scales — from individual developments to complex, multi-disciplinary builds."
    ],
    // link: "/mosaic-imports",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSectionDetailss data={FirstDetails} />
      </div>
      {/* {industries && <IndustriesOfHolding industries={industries} />} */}
      {/* <MTArchInNumber /> 
      <NumbersSection
              title="MT-Arch in Numbers"
              items={MTArchNumbers}
              columns="sm:grid-cols-4"
            />
      */}
    </>
  );
}

export default MosaicImports;
