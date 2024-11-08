import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import { MdOutlineEngineering } from "react-icons/md";

function EngineerCard() {
  return (
    <>
      <div className="">
        <img
          className="w-full lg:h-[70vh] object-cover"
          src="/industryPage/2.jpg"
          alt=""
        />
        <div className="bg-lightGray relative translate-y-[-10%]  sm:mx-10  p-8 md:px-14">
          <div className="flex items-stretch">
            <MdOutlineEngineering className="text-[65px] border-[3px] me-5 border-mainGold text-mainGold rounded-full p-3" />
            <SectionHeader firstWord="Engineering" />
          </div>
          <Paragraph p="Mosaic Holding Corporation’s engineering arm is multi-disciplinary, encompassing several specialized fields:" />
          <br />
          <br />
          <div className="flex items-stretch">
            <SectionHeader firstWord="Structural" secondWord="Engineering" />
          </div>
          <Paragraph p="Through Wolsey Structural Engineering, MHC provides top-tier structural solutions, ensuring the integrity and safety of building frameworks. This branch specializes in designing robust and efficient structures that withstand natural and man-made stresses. From high-rise buildings to complex infrastructure projects. This market is expected to reach $112 billion in 2024, with a compounded annual growth rate (CAGR) of 5.1%." />
          <br />
          <br />
          <div className="flex items-stretch">
            <SectionHeader firstWord="Electrical" secondWord="Engineering" />
          </div>
          <Paragraph p="MHC offers comprehensive electrical engineering services, which are integral to the design, installation, and maintenance of electrical systems in various facilities. This includes the design of power systems, lighting, and controls that meet the latest standards of efficiency and sustainability. In 2024, it holds a market valuation of $234 billion, with a 6% CAGR projected through 2028." />
          <br />
          <br />
          <div className="flex items-stretch">
            <SectionHeader firstWord="Mechanical" secondWord="Engineering" />
          </div>
          <Paragraph p="This division focuses on the design, operation, and maintenance of mechanical systems that drive HVAC, plumbing, and other critical building infrastructure. MHC’s mechanical engineering, which is valued at $440 billion globally services ensure systems operate at optimal performance, enhancing both energy efficiency and comfort for end users." />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default EngineerCard;
