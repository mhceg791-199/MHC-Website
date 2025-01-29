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
      text: "Established in 2006, we provide innovative corporate solutions, offering office designs, furnishings, and consultancy. Committed to excellence, we create professional environments that enhance businesses, ensuring projects meet clients’ unique needs with superior quality, functionality, and attention to detail.",
      link: "/wolsey",
    },

    {
      logo: "/whoWeArePage/mhceg.png",
      text: "A division of MHC, launched in 2023, we specialize in architecture, structural engineering, electromechanical systems, and oil and gas. Our expertise ensures efficient frameworks and optimized electromechanical systems, delivering innovative, high-performance engineering solutions for various industries and complex projects.",
    },
    {
      logo: "/whoWeArePage/kaller.png",
      text: "Founded by Joseph B. Kaller in 1984, Kaller Architecture specializes in residential, commercial, and interior design. We offer architectural and engineering services, focusing on corporate interiors, delivering high-quality, client-centered solutions built on integrity, innovation, and long-term professional relationships.",
      link: "/kaller",
    },
    {
      logo: "/whoWeArePage/arup.png",
      text: "Founded in 1988, we specialize in design and engineering solutions for the built environment. We focus on sustainability, providing architecture, interior design, and project management services that ensure excellence, creativity, and functionality tailored to meet clients’ unique project requirements.",
      link: "/arup",
    },
  ];
  return (
    <>
      <SectionHeader firstWord="HOLDINGS" />
      <br />
      <br />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {holdings.map((h, index) => (
          <React.Fragment key={index}>
            <div className="col-span-1 px-5 border-lightGray onHover border-2 ">
              <div className="  py-0 pb-5 flex h-full flex-col ">
                <img className=" p-5 w-3/4 m-auto my-0" src={h.logo} alt="" />
                <Paragraph p={h.text} text={"center"} />
                {h.link && (
                  <Link to={h.link}>
                    <TextWirhArrow
                      className="justify-center opacity-0 mt-auto readMore"
                      text="Read More"
                    />
                  </Link>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Holdings;
