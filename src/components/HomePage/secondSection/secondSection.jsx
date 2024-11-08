import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import "./secondSection.css";
import Paragraph from "../../shared/paragraph";
// import Icon from "../../../assets/icon.svg";

function SecondSection() {
  const industries = [
    {
      icon: "fa-regular fa-lightbulb",
      name: "Architecture and urban planning",
    },
    {
      icon: "fa-solid fa-brain",
      name: "Engineering",
    },
    {
      icon: "fa-solid fa-helmet-safety",
      name: "Oil and gas",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      name: "Marine and offshore structures",
    },
    {
      icon: "fa-solid fa-gear",
      name: "Energy Management",
    },
  ];
  return (
    <>
      <div className="md:p-10 p-5  bg-lightGray">
        <SectionHeader firstWord="OUR" secondWord="IMPACT" />
        <Paragraph
          p="Founded in 2023, Mosaic Holding Corporation (MHC) specializes in SME
        leveraged buyouts, acquiring mid-cap companies with strong track
        records. MHC provides critical technical, financial, and workforce
        support across industries including architecture, structural,
        electrical, and mechanical engineering, marine and offshore structures,
        oil and gas, and energy management.
      "
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 md:px-20 px-5 mt-10 ">
          {industries.map(({ icon, name }, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 industryCard flex flex-col justify-start   items-center md:p-10 py-5 ">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 bg-icon border-mainGold p-3">
                  <i className={`${icon} text-mainGold  icon text-2xl`}></i>
                </div>{" "}
                <p className="text-center mt-2 paragraph font-bold">{name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default SecondSection;
