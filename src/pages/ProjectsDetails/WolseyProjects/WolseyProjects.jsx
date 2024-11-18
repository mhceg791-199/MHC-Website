import React from "react";
import ProjectSlider from "../../../components/ProjectsDetailsPage/ProjectCard/projectSilder/SliderOfProjects";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import ProjectDetails from "../../../components/ProjectsDetailsPage/ProjectCard/ProjectDetails/ProjectDetails";
import Navbar from "../../../components/shared/Navbar/Navbar";

function WolseyProjects() {
  const projectsDetails = [
    {
      images: [
        { src: "/signatureProjects/wolsey/p11.jpg", width: 420 },
        { src: "/signatureProjects/wolsey/p12.jpg", width: 600 },
        { src: "/signatureProjects/wolsey/p13.jpg", width: 420 },

        ,
      ],
      title: "The Vanuatu Temple",
      texts: [
        "strategically situated in the heart of Port Vila, is envisioned as a sacred 9,000-square-foot single-story structure composed of prefabricated modules, blending modern construction techniques with timeless architectural principles. Designed to embody serenity and reverence, this religious edifice serves as a tranquil house of worship, where individuals and families can gather for reflection, prayer, and communal activities. The layout thoughtfully incorporates spaces for worship and meditation, fostering an environment conducive to spiritual growth and connection.",
        "Surrounded by the stunning natural beauty of Vanuatu, the temple is strategically placed to harmonize with its picturesque landscape, allowing visitors to experience the calming influence of nature while engaging in their spiritual practices. The design emphasizes open spaces and natural light, creating an inviting atmosphere that encourages contemplation and community bonding. In addition to its primary purpose as a place of worship, the temple aims to strengthen the local community by hosting events, educational programs, and gatherings that promote faith and unity among residents. Ultimately, the Vanuatu Temple stands as a beacon of hope and spirituality, reflecting the values and aspirations of those it serves while contributing to the rich cultural tapestry of the region.",
      ],
    },
    {
      images: [
        { src: "/signatureProjects/wolsey/p21.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p22.webp", width: 600 },
        { src: "/signatureProjects/wolsey/p24.webp", width: 420 },
        { src: "/signatureProjects/wolsey/p25.webp", width: 420 },
      ],
      title: "Hyundai Calgary Dealership",
      texts: [
        "Currently under construction, stands at the forefront of MHC's ambitious New Dealership Experience (NDE), a transformative initiative designed to revolutionize customer interaction with the Hyundai brand. This innovative dealership embodies a commitment to redefining the automotive retail experience by integrating cutting-edge technology, modern design, and a focus on customer satisfaction. Inspired by the tranquility of Nature Emotion Park, the state-of-the-art facility spans an impressive 2,500 square meters, seamlessly blending indoor and outdoor elements to create an inviting atmosphere that enhances the overall shopping experience. The design prioritizes a customer-centric approach, incorporating interactive displays, comfortable lounges, and dedicated areas for consultations, ensuring that every visitor feels welcomed and valued. As part of the NDE, this dealership aims to deliver a holistic experience that resonates with the principles of 'Modern Premium,' reflecting Hyundai's commitment to quality, innovation, and sustainability.",
      ],
    },
  ];

  const firstSectionDetails = {
    poster: "/signatureProjects/wolsey/poster.jpg",
    logo: "/signatureProjects/wolsey.png",
    title: { firstWord: "WOLSEY STRUCTURAL ", secondWord: "ENGINEERING" },
    text: "Wolsey Structural Engineering, Ltd. exemplifies its commitment to innovative design and excellence through its pivotal role in the development of significant projects: the Vanuatu Temple and the Hyundai Calgary dealership.",
  };
  return (
    <>
      <Navbar />
      <FirstSection data={firstSectionDetails} />

      {projectsDetails.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectSlider data={project.images} />
          <ProjectDetails data={project} />
        </React.Fragment>
      ))}
    </>
  );
}

export default WolseyProjects;
