import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

function IndustriesOfHolding({ industries }) {
  return (
    <>
      <div className="md:p-10 p-5  bg-lightGray">
        <SectionHeader firstWord="Industries" />

        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2 md:px-20 px-5 mt-10 ">
          {industries.map(({ name }, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 industryCard flex flex-col justify-start   items-center md:p-10 py-5 ">
                <p className="text-center mt-2 paragraph font-bold">{name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default IndustriesOfHolding;
