import { useRef } from "react";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection.jsx";
import Navbar from "../../../components/shared/Navbar/Navbar.jsx";
import useScrollToSection from "../../../Hooks/useScrollToSection.js";
import {
  FaStore,
  FaHome,
  FaLandmark
} from "react-icons/fa";
function MosaicRealState() {
  const industries = [
    {
      name: "Administrative",
      icon: <FaLandmark />, // Landmark = government/administrative offices
    },
    {
      name: "Residential Buildings",
      icon: <FaHome />, // Better for homes/residential
    },
    {
      name: "Commercial Buildings",
      icon: <FaStore />, // Storefronts work well for commercial
    }
  ];
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const firstSectionDetails = {
    poster: "/signatureProjects/mosaicRealstate/poster.webp",
    logo: "/signatureProjects/mosaicRealstate/logo.png",
    title: { firstWord: "Mosaic Real State" },
    text: [
      "Mosaic Real Estate Holding, established in 2025, is an ambitious and forward-thinking player in the property sector, laying a strong foundation for growth across residential, commercial, and administrative real estate domains. Though newly founded, the company has already made a significant strategic entry into the market with the acquisition of the well-known Dorchester Administrative Building—a premier administrative facility located in the heart of Calgary. This distinguished eleven-story tower, with a built-up area of 101,393 square feet, will continue its legacy as an",
      "exclusive, top-tier administrative center, celebrated for its architectural distinction andn unrivaled location.Bolstered by its pivotal role within the renowned MHC group, Mosaic Real State Holding gains access to unparalleled resources and expertise, positioning the company to steward this iconic property with excellence and vision.",
    ],
    // link: "https://www.mt-arch.ca/",
  };
  return (
    <>
      <Navbar />
      <div ref={firstSectionRef}>
        <FirstSection data={firstSectionDetails} industries={industries} />
      </div>

      {/* <MTArchInNumber /> */}
    </>
  );
}

export default MosaicRealState;
