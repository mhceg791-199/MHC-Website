import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import TextWirhArrow from "../../shared/TextWithArrow/TextWirhArrow";
import "./Holdings.css";
import { Link } from "react-router-dom";
function Holdings() {
  const holdings = [
    {
      logo: "/whoWeArePage/wolsey.png",
      text: "Established in 2006, is a leading provider of innovative and luxurious corporate solutions designed to elevate businesses and enhance professional environments. With a commitment to quality and excellence, we offer a diverse range of services, including bespoke office designs, high-end furnishings, and tailored consultancy to meet the unique needs of our clients.",
      link: "/wolsey-projects",
    },
    {
      logo: "/whoWeArePage/arup.png",
      text: "Established in 1988, is a dynamic and innovative company specializing in design and engineering solutions for the built environment. With a commitment to excellence and sustainability, we provide a wide range of services, including architecture, interior design, and project management.",
      link: "/arup-projects",
    },
    {
      logo: "/whoWeArePage/mhceg.png",
      text: "A division of MHC established in mid-2023, delivers integrated expertise across architecture, structural and electromechanical engineering, and the oil and gas sectors. Specializing in innovative design and engineering solutions, MHCEG excels in developing advanced structural frameworks and optimizing electromechanical systems for a wide range of projects.",
      link: "/mhceg-projects",
    },
  ];
  return (
    <>
      <SectionHeader firstWord="HOLDINGS" />
      <br />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {holdings.map((h, index) => (
          <React.Fragment key={index}>
            <div className="col-span-1  border-lightGray onHover border-2 ">
              <div className=" p-10 py-0 pb-5 flex h-full flex-col ">
                <img className="p-10 pb-0" src={h.logo} alt="" />
                <Paragraph p={h.text} text={"center"} />
                <Link to={h.link}>
                  <TextWirhArrow
                    className="justify-center opacity-0 mt-auto readMore"
                    text="Read More"
                  />
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Holdings;
