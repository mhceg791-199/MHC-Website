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
      "Mosaic Real Estate Holding owns the distinguished Dorchester Square Administrative Building, a premier asset in the heart of Calgary. This eleven-story office tower spans 100,000 square feet and is recognized for its architectural presence and prime location. Dorchester Square stands as a signature property within Calgary’s business landscape.",
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
