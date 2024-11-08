import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function IntroductionOfSignatureProjects() {
  return (
    <>
      <div className="mb-5"> 
        <SectionHeader
          firstWord="SINGNATURE"
          secondWord="PROJECTS"
          type="verticle"
        />
      </div>
      <Paragraph
        p="Mosaic Holding Corporation’s acquisitions are engaged in 
impactful projects across sectors, including complex 
Structural Engineering, Innovative Architectural Design, 
and Sustainable Energy Management Solutions."
      />
    </>
  );
}

export default IntroductionOfSignatureProjects;
