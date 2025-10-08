import React, { useState } from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import "./secondSection.css";
import Paragraph from "../../shared/paragraph";
import { useNavigate } from "react-router-dom";
// import Icon from "../../../assets/icon.svg";

function SecondSection() {
  const navigate = useNavigate();
  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };
  const [indexHovered, setIndexHoverd] = useState(null);
  const industries = [
    {
      icon: "/homePage/icons/icon1.png",
      hoveringIcon: "/homePage/icons/icon1-white.png",
      name: "Architecture and Urban Planning",
      link: "architechture",
    },
    {
      icon: "/homePage/icons/icon2.png",
      hoveringIcon: "/homePage/icons/icon2-white.png",
      link: "engineer",

      name: "Engineering",
    },
    {
      link: "oil",
      icon: "/homePage/icons/icon3.png",
      hoveringIcon: "/homePage/icons/icon3-white.png",
      name: "Oil and Gas",
    },
    {
      link: "marine",
      icon: "/homePage/icons/icon4.png",
      hoveringIcon: "/homePage/icons/icon4-white.png",
      name: "Marine and Offshore Structures",
    },
    {
      link: "energy",
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
          p="Founded in 2023, Mosaic Holding Corporation (MHC) brings expertise in SME leveraged buyouts, acquiring mid-cap companies with strong track records. Collectively, MHC and its subsidiaries take pride in managing and delivering over 4,000 projects across more than 20 countries. MHC provides critical technical, financial, and workforce support in industries such as architecture, structural, electrical, and mechanical engineering, marine and offshore structures, oil and gas, and energy management."
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 md:px-20 px-5 mt-10 ">
          {industries.map(({ icon, hoveringIcon, name, link }, index) => (
            <React.Fragment key={index}>
              <div
                onMouseEnter={() => {
                  setIndexHoverd(index);
                }}
                onMouseLeave={() => {
                  setIndexHoverd(null);
                }}
                className="col-span-1 industryCard flex flex-col justify-start   items-center md:p-10 py-5 "
              >
                <div
                  onClick={() => handleNavigate("/industries", link)}
                  className="flex cursor-pointer items-center justify-center w-12 h-12 rounded-full border-2 bg-icon border-mainGold p-2"
                >
                  <img
                    src={indexHovered === index ? hoveringIcon : icon}
                    alt={`${name} Mosaic Holding Corporation MHC`}
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
