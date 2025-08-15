import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import Slider from "./slider/Slider";

function SignatureProject() {
  return (
    <>
      <SectionHeader firstWord="OUR HOLDING'S" secondWord="PROJECTS" />
      <Paragraph
        p="Mosaic Holding Corporation’s acquisitions are engaged in impactful projects across sectors, including complex Structural Engineering, Innovative Architectural Design, and Sustainable Energy Management Solutions, leveraging global expertise for regional transformation. "
      />
      <Slider />
    </>
  );
}

export default SignatureProject;
