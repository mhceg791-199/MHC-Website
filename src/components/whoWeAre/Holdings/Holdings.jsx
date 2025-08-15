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
      text: "Founded in 2006 by Danny Wolsey, P.Eng., Wolsey Structural Engineering is a leader in innovative and sustainable structural solutions. Acquired by MHC in 2023, the firm has delivered 1,000+ projects across 10+ countries, specializing in resilient, high-performance designs for modern construction. Under Danny Wolsey’s leadership, Wolsey continues to deliver cost-effective. ",
      link: "/wolsey",
    },

    {
      logo: "/whoWeArePage/mhceg.png",
      text: "Launched in 2023, MHC Egypt Consultancy (MHCEG) is the regional arm of MHC, offering integrated expertise in architecture, engineering, and oil & gas. Our team delivers high-quality, customized solutions through innovation, advanced technologies, and sustainable practices. MHCEG bridges global standards with Middle Eastern vision, ensuring optimized performance and long-term growth. ",
      link: "/mhceg",
    },
    {
      logo: "/whoWeArePage/kaller.png",
      text: "Founded by Joseph B. Kaller in 1984, Kaller Architecture boasts 33 years of practice and 1,000+ projects across residential, commercial, and interior design. A MHC subsidiary, the firm excels in client-centered solutions, combining aesthetic innovation with functional excellence. Its enduring client relationships are built on integrity and a commitment to transformative design.",
      link: "/kaller",
    },
    {
      logo: "/whoWeArePage/arup.png",
      text: "A globally renowned multidisciplinary firm with 28 years of domestic and 40+ years of international expertise, ADAL became a MHC subsidiary in 2023. Founded by Arup Datta (IIT Kharagpur alumnus), the firm delivers award-winning master planning, interior design, and architectural projects across Canada, the USA, Asia, and the Middle East. ADAL’s legacy blends sustainability, functionality, and community impact. ",
      link: "/arup",
    },
    {
      logo: "/signatureProjects/mt-arch.png",
      text: "A Calgary-based MHC subsidiary established in 2005, MT-Arch merges bold creativity with hands-on project management. From schematic design to municipal compliance, the firm navigates complex regulations while prioritizing community value. Its full-spectrum services include development strategy, tendering, and construction oversight, shaping impactful environments across Alberta and beyond.",
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
