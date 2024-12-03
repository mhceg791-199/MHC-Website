import React from "react";
import Paragraph from "../../shared/paragraph";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

function FirstSection({ data }) {
  const { poster, logo, title, text, link = "" } = data;
  return (
    <div className="">
      <img className="w-full lg:h-[70vh] object-cover" src={poster} alt="" />
      <div className="bg-lightGray relative translate-y-[-20%]  sm:mx-10  p-8 md:px-14">
        <div className="flex items-stretch">
          <img className="me-5 w-20 h-20" src={logo} alt="" />
          <SectionHeader
            firstWord={title.firstWord}
            secondWord={title.secondWord}
            type="verticale"
            link={link}
          />
        </div>
        {text.map((t, index) => (
          <React.Fragment key={index}>
            <Paragraph p={t} />
          </React.Fragment>
        ))}
        <br />

        <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
      </div>
    </div>
  );
}

export default FirstSection;
