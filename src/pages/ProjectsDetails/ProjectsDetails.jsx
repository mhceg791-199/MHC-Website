import React from "react";
import FirstSection from "../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import ProjectCard from "../../components/ProjectsDetailsPage/ProjectCard/ProjectCard";

function ProjectsDetails() {
  return (
    <>
      <ProjectCard />
      <FirstSection
        img="/signatureProjects/wolsey/poster.jpg"
        firstWord="WOLSEY STRUCTURAL "
        secondWord="ENGINEERING"
        p="Wolsey Structural Engineering, Ltd. exemplifies its commitment to innovative design and excellence 
through its pivotal role in the development of significant projects: the Vanuatu Temple and the 
Hyundai Calgary dealership."
        icon=""
      />
    </>
  );
}

export default ProjectsDetails;
