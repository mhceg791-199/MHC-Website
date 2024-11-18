import React from "react";
import ProjectSlider from "../../../components/ProjectsDetailsPage/ProjectCard/projectSilder/SliderOfProjects";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import ProjectDetails from "../../../components/ProjectsDetailsPage/ProjectCard/ProjectDetails/ProjectDetails";
import Navbar from "../../../components/shared/Navbar/Navbar";

function MhcegProjects() {
  const projectsDetails = [
    {
      images: [
        { src: "/signatureProjects/mhceg/p11.webp", width: 420 },
        { src: "/signatureProjects/mhceg/p12.webp", width: 600 },
        { src: "/signatureProjects/mhceg/p13.webp", width: 420 },

        ,
      ],
      title: "Pyramids Mall",
      texts: [
        "Pyramids Mall stands as a remarkable retail development within Egypt’s vibrant new capital, designed to blend modernity with contemporary aesthetics and create an immersive shopping experience. This expansive project, covering a total area of 18,000 square meters, reflects a sophisticated design phase that typically spans five months, with execution timelines adaptable to the contractor's and owner's specific needs. Drawing inspiration from futuristic concepts—like the sleek lines of a spacecraft and the organic appeal of a lush forest—the mall integrates extensive glass elements and verdant, forest-like greenery to create a unique and dynamic atmosphere. Emphasizing sustainability, the design incorporates eco-friendly, locally sourced materials and cutting-edge solar panels strategically placed on the roof. Pyramids Mall is not only an architectural landmark but also a pioneering model of sustainable retail, setting new standards for commercial spaces in the region.",
      ],
    },
  ];

  const firstSectionDetails = {
    poster: "/signatureProjects/mhceg/poster.webp",
    logo: "/signatureProjects/mhceg.png",
    title: { firstWord: "MHCEG", secondWord: "CONSULTANCY" },
    text: "MHCEG Commitment to sustainable development and enhancing the quality of life in MENA, Canada and the rest of the worldis at the forefront of our mission. With our expertise, collaborative approach, and unwavering commitment to excellence, westriveto exceed our clients' expectations and contribute to the progress of local communities.",
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

export default MhcegProjects;
