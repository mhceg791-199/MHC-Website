import React from "react";
import Paragraph from "../../shared/paragraph";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import IndustriesOfHolding from "../IndustriesOfHolding/IndustriesOfHolding";

function FirstSection({ data, industries }) {
  const { poster, logo, title, text, link = "" } = data;
  return (
    <div className="">
      <img className="w-full lg:h-[70vh] object-cover" src={poster} alt="" />
      <div className="bg-lightGray relative translate-y-[-10%]  sm:mx-10  p-8 md:px-14">
        <div className="flex md:items-stretch items-center">
          <img className="me-5 w-20 object-contain h-20" src={logo} alt="" />
          <div className=" md:mb-0 mb-3">
            <SectionHeader
              firstWord={title.firstWord}
              secondWord={title.secondWord}
              type="verticale"
              link={link}
            />
          </div>
        </div>
        <div className="md:px-16 text-justify">
          {text.map((t, index) => (
            <React.Fragment key={index}>
              <Paragraph p={t} />
            </React.Fragment>
          ))}
        </div>
        <IndustriesOfHolding industries={industries} />
        <br />

        <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
      </div>
    </div>
  );
}

export default FirstSection;
