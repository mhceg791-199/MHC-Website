import React from "react";
import SectionHeader from "../sectionHeader/sectionHeader";

function FirstSection({ firstWord, secondWord, paragraph }) {
  return (
    <>
      <div className="bg-lightGray mt-16   md:px-20 px-5     py-8 pt-10">
        <SectionHeader firstWord={firstWord} secondWord={secondWord} />

        <p className={`mt-5 sm:text-small text-[12px] text-justify `}>
          {paragraph}
        </p>
      </div>
    </>
  );
}

export default FirstSection;
