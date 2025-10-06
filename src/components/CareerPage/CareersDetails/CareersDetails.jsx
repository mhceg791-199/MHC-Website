import React, { useContext } from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import CareerModal from "../CareerModel/CareerModel";
import { careerModalContext } from "../../../context/CareerContext";

function CareersDetails() {
  const { setOpen } = useContext(careerModalContext);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <CareerModal />
      <div className="h-[70vh]">
        <img
          className="w-full object-cover h-full"
          src="/careerPage/poster.jpg"
          alt="career Mosaic Holding Corporation MHC"
        />
      </div>
      <div className="bg-lightGray p-10 py-20">
        <SectionHeader firstWord="MHC CAREER" secondWord="OPPORTUNITIES" />
      </div>
      <div className="mt-5 p-10">
        <h3 className="text-large font-semibold  text-mainGold">
          Your Future with Mosaic Holding Corporation
          </h3>
        <h3 className="text-lg font-semibold mt-5 ">
          Empowerment Through Collective Excellence
        </h3>
        <Paragraph p="Joining Mosaic Holding Corporation represents an opportunity to engage with a global collective of visionary professionals dedicated to transformative industry leadership. We equip our teams with strategic resources, intellectual capital, and institutional support to achieve professional excellence, harnessing our organization's integrated financial and technical mastery. At MHC, your expertise will directly contribute to pioneering initiatives shaping international markets. " />
        <Paragraph
          p="From distinguished engineers to strategic business leaders and financial specialists, MHC curates purposeful career pathways for professionals seeking substantive global impact. Our expanding ecosystem of portfolio companies offers unparalleled cross-sector exposure, each contributing specialized domain excellence to our collective capability. "
        />
        <Paragraph
          p="MHC cultivates an environment where diverse perspectives converge to drive innovation. Our corporate ethos celebrates individual brilliance while fostering collaborative synergy – a reflection of our worldwide operations and commitment to inclusive excellence. "
        />
      </div>
      <div className="bg-lightGray p-10 py-20">
        <h3 className="text-center text-mainGold text-large font-semibold">
          JOIN MHC TEAM NOW
        </h3>
        <div className="w-11/12 text-center m-auto">
          <Paragraph
            p="For those compelled to redefine industry standards alongside peers who champion ambition and professional growth, Mosaic Holding Corporation awaits. Explore our current opportunities and align with an organization committed to amplifying your potential while advancing sector-wide transformation."
            text="center"
          />
        </div>
        <div className="m-auto flex justify-center mt-10">
          <button
            onClick={openModal}
            className="bg-mainGold px-14 rounded-full text-white  py-4 text-xl "
          >
            JOIN OUR TEAM
          </button>
        </div>
      </div>
    </>
  );
}

export default CareersDetails;
