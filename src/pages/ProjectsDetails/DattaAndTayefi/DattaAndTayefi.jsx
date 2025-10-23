import { useRef } from "react";
import Navbar from "../../../components/shared/Navbar/Navbar.jsx";
import useScrollToSection from "../../../Hooks/useScrollToSection.js";
// import FirstSectionDetailss from "../../../components/ProjectsDetailsPage/FirstSectionDetails/FirstSectionDetails.jsx";

function DattaAndTayefi() {
  // const industries = [
  //   {
  //     name: "Administrative",
  //     icon: <FaLandmark />, // Landmark = government/administrative offices
  //   },
  //   {
  //     name: "Residential Buildings",
  //     icon: <FaHome />, // Better for homes/residential
  //   },
  //   {
  //     name: "Commercial Buildings",
  //     icon: <FaStore />, // Storefronts work well for commercial
  //   },
  // ];
  const firstSectionRef = useRef(null);
  const refs = {
    firstSection: firstSectionRef,
  };

  useScrollToSection(refs);
  const FirstDetails = {
    poster: "/signatureProjects/kaller/featured-img.jpg",
    logo: "/signatureProjects/datta.png",
    title: { firstWord: "Datta And Tayefi" },
    text: [
      "A subsidiary of Mosaic Holding Corporation (MHC), DATTA & TAYEFI unites the legacies of Arup Datta Architect and Max Tayefi Architect  into a single, future-driven design practice. The firm blends decades of award-winning architectural excellence with a contemporary approach to sustainability, digital design, and cultural relevance. From civic landmarks to commercial and residential spaces, DATTA & TAYEFI creates environments that are intelligent, expressive, and deeply human — where heritage meets innovation and every structure tells a story of purpose, precision, and art.",
    ],
    // link: "https://www.mt-arch.ca/",
  };
  return (
    <>
      <Navbar />
      {/* <div ref={firstSectionRef}>
        <FirstSectionDetailss data={FirstDetails} />
      </div> */}
    </>
  );
}

export default DattaAndTayefi;



{/* {industries && <IndustriesOfHolding industries={industries} />} */}
{/* <MTArchInNumber /> 
<NumbersSection
        title="MT-Arch in Numbers"
        items={MTArchNumbers}
        columns="sm:grid-cols-4"
      />
*/}