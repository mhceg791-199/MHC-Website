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
function WolseyProjects() {
  const vanuatu = useRef(null);
  const hyundai = useRef(null);

  const refs = { vanuatu, hyundai };
  useScrollToSection(refs);
  const projectsDetails = [
    {
      images: [
        { src: "/signatureProjects/wolsey/p11.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p12.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p13.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p14.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p15.webp", width: 420 },

        ,
      ],
      title: "Aqsarniit Hotel and Conference Centre",
      texts: [
        "The hotel designed by Bird Construction in Iqaluit, Nunavut, is named the Aqsarniit Hotel and Conference Centre. It is located at 1730 Federal Road, Iqaluit, Nunavut, X0A 1L0. This modern facility includes 94 guest rooms and suites, a 7,200-square-foot conference center, dining facilities, and a lounge. Its design reflects Inuit culture, with features such as LED-lit glass evoking the Northern Lights and a drum circle-inspired conference space​",
      ],
      sectionRef: vanuatu,
    },
    {
      images: [
        { src: "/signatureProjects/wolsey/p21.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p22.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p24.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p25.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p26.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p27.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p28.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p29.webp", width: 600 },
      ],
      title: "CKE Community Center",
      texts: [
        "The CKE Community Centre, designed by Casola Koppe Architects, is located at 1015 - 73 Avenue SW, Calgary, Alberta, T2V 0R9. This facility serves the Chinook Park, Kelvin Grove, and Eagle Ridge neighborhoods, offering spaces for events, recreational programs, and community activities.",
      ],
      sectionRef: hyundai,
    },
    {
      images: [
        { src: "/signatureProjects/wolsey/p31.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p32.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p34.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p35.webp", width: 600 },
      ],
      title: "Warman Home Centre Communiplex",
      texts: [
        "The Warman buildings originally associated with CTM Design Services Ltd. are located in Warman, Saskatchewan, Canada. These facilities have undergone developments, and one notable project in the city is the Warman Home Centre Communiplex (previously referred to as the Legends Centre). The Communiplex serves as a hub for recreation and cultural activities and is central to the city's continued growth. Recent expansions and upgrades have added modern features to the facility",
      ],
      sectionRef: hyundai,
    },
    {
      images: [
        { src: "/signatureProjects/wolsey/p41.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p42.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p43.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p44.webp", width: 600 },
      ],
      title: "Mission 19",
      texts: [
        "The 'Mission 19' development designed by Advent Development Corporation Ltd., led by architect Harvey Russell, is a residential project located in Calgary, Alberta. The project has garnered attention for its design and potential contribution to the city's multi-residential landscape. Unfortunately, I wasn't able to find detailed pictures or exact plans for this project at this moment.",
      ],

      sectionRef: hyundai,
    },
  ];
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

  const firstSectionDetails = {
    poster: "/signatureProjects/wolsey/poster.jpg",
    logo: "/signatureProjects/wolsey.png",
    title: { firstWord: "WOLSEY STRUCTURAL ", secondWord: "ENGINEERING" },
    text: [
      "Founded in 2006 by Danny Wolsey, LEED AP, P.Eng., Wolsey Holdings delivers luxurious corporate solutions designed to elevate businesses and enhance professional environments. Specializing in bespoke office designs, high-end furnishings, and tailored consultancy, we craft sophisticated spaces that reflect your brand’s identity and foster success.",
      "With decades of global experience spanning four continents and projects in over ten countries, Danny’s leadership has positioned Wolsey as a trusted name in innovative and sustainable design. In 2023, Wolsey Structural Engineering joined Mosaic Holding Corporation, strengthening its reputation for excellence and collaboration.",
    ],
    link: "https://wolsey-website.vercel.app/",
  };
  return (
    <>
      <Navbar />
      <FirstSection data={firstSectionDetails} industries={industries} />
      {/* <IndustriesOfHolding industries={industries} /> */}
      {projectsDetails.map((project, index) => (
        <React.Fragment key={index}>
          <div ref={project.sectionRef}>
            <ProjectSlider data={project.images} />
          </div>
          <ProjectDetails data={project} />
        </React.Fragment>
      ))}
    </>
  );
}

export default WolseyProjects;
