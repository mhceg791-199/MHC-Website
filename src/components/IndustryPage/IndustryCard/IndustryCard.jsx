import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function IndustryCard({
  img,
  firstWord,
  secondWord,
  type = "vertical",
  p,
  icon,
  link,
}) {
  return (
    <div className="bg-bl mb-0">
      <img className="w-full lg:h-[60vh] object-cover" src={img} alt="" />
      <div className="bg-lightGray relative md:translate-y-[-12%] translate-y-[-3%]  sm:mx-10  p-8 md:px-14">
        <div className="flex items-center">
          <div className=" border-[3px] me-5 border-mainGold text-mainGold rounded-full flex justify-center  w-16 h-16 items-center ">
            <img className="w-[70%] " src={icon} alt="" />
          </div>
          <SectionHeader
            firstWord={firstWord}
            secondWord={secondWord}
            type={type}
            link={link}
          />
        </div>
        <div className="md:px-16 text-justify">
          <Paragraph p={p} />
        </div>
        <br />

        <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
      </div>
    </div>
  );
}

export default IndustryCard;
