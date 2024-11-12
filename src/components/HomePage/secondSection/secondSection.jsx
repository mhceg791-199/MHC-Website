import React, { useRef, useState } from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import "./secondSection.css";
import Paragraph from "../../shared/paragraph";
// import Icon from "../../../assets/icon.svg";

function SecondSection() {
  const [indexHovered, setIndexHoverd] = useState(null);
  const industries = [
    {
      icon: "/homePage/icons/icon1.png",
      hoveringIcon: "/homePage/icons/icon1-white.png",
      name: "Architecture and urban planning",
    },
    {
      icon: "/homePage/icons/icon2.png",
      hoveringIcon: "/homePage/icons/icon2-white.png",

      name: "Engineering",
    },
    {
      icon: "/homePage/icons/icon3.png",
      hoveringIcon: "/homePage/icons/icon3-white.png",
      name: "Oil and gas",
    },
    {
      icon: "/homePage/icons/icon4.png",
      hoveringIcon: "/homePage/icons/icon4-white.png",
      name: "Marine and offshore structures",
    },
    {
      icon: "/homePage/icons/icon5.png",
      hoveringIcon: "/homePage/icons/icon5-white.png",
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
          {industries.map(({ icon, hoveringIcon, name }, index) => (
            <React.Fragment key={index}>
              <div
                onMouseEnter={() => {
                  console.log(index);
                  
                  setIndexHoverd(index);
                }}
                onMouseLeave={() => {
                  setIndexHoverd(null);
                }}
                className="col-span-1 industryCard flex flex-col justify-start   items-center md:p-10 py-5 "
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 bg-icon border-mainGold p-2">
                  {/* <i className={`${icon} text-mainGold  icon text-2xl`}></i> */}
                  {console.log(indexHovered)}
                  <img
                    src={indexHovered === index ? hoveringIcon : icon}
                    alt=""
                  />
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
