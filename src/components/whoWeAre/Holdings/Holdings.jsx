import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import TextWirhArrow from "../../shared/TextWithArrow/TextWirhArrow";
import "./Holdings.css";
import { useNavigate } from "react-router-dom";
function Holdings() {
  const navigate = useNavigate();
  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };
  const holdings = [
    {
      logo: "/whoWeArePage/wolsey.png",
      text: "Founded in 2006 by Danny Wolsey, P.Eng., Wolsey Structural Engineering is a leader in innovative and sustainable structural solutions. With a portfolio spanning thousands of projects across multiple industries, Wolsey specializes in designing resilient, high-performance structures that meet the evolving demands of modern construction.",
      link: "/wolsey",
    },

    {
      logo: "/whoWeArePage/mhceg.png",
      text: "A division of MHC, launched in 2023, we specialize in architecture, structural engineering, electromechanical systems, and oil and gas. Our expertise ensures efficient frameworks and optimized electromechanical systems, delivering innovative, high-performance engineering solutions for various industries and complex projects.",
      link: "/mhceg",
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
    {
      logo: "/signatureProjects/mt-arch.png",
      text: "MT-Arch, a subsidiary of Mosaic Holding Corporation, is a Calgary-based architectural firm known for its bold integration of experience and innovation. Established in 2005, the studio delivers full-spectrum architectural services that prioritize value, community, and creativity",
      link: "/mt-arch",
    },
  ];
  return (
    <>
      <SectionHeader firstWord="HOLDINGS" link="/holdings" />
      <br />
      <br />
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
        {holdings.map((h, index) => (
          <React.Fragment key={index}>
            <div className="col-span-1 px-5 border-lightGray onHover border-2 ">
              <div className="  py-0 pb-5 flex h-full flex-col ">
                <img className=" p-5 w-3/4 m-auto my-0" src={h.logo} alt="" />
                <Paragraph p={h.text} text={"center"} />

                <div
                  className="cursor-pointer"
                  onClick={() => handleNavigate(h.link, "firstSection")}
                >
                  <TextWirhArrow
                    className="justify-center opacity-0 mt-auto readMore"
                    text="Read More"
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Holdings;
