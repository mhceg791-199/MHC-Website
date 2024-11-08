import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function OurValues() {
  return (
    <>
      <SectionHeader firstWord="OUR" secondWord="VALUES" />
      <br />
      <Paragraph p="At Mosaic Holding Corporation, our management team comprises professionals with diverse expertise, dedicated to driving innovation and sustainable growth across all our acquisitions." />
      <br />
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="lg:col-span-2 col-span-1 relative">
          <img className="w-full" src="/whoWeArePage/mission.png" alt="" />
          <div className="lg:absolute bottom-0 p-5 left-0 lg:w-3/5">
            <SectionHeader firstWord="MISSION" />
            <Paragraph
              p="MHC is dedicated to enhancing the success of established mid-cap companies by providing comprehensive support,resources, and strategic insight. Through targeted acquisitions and a hands-on approach to value creation, we aim to build a synergistic portfolio of industry leaders
committed to innovation, quality, and positive impact in their fields."
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center p-5">
          <SectionHeader firstWord="VISION" />
          <Paragraph
            p="To become a premier force in fostering innovation and excellence across critical industries, empowering our portfolio companies to achieve unprecedented growth through strategic investment, operational expertise, and a steadfast commitment to sustainable 
development ."
          />
        </div>
      </div>
    </>
  );
}

export default OurValues;
