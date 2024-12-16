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
          alt=""
        />
      </div>
      <div className="bg-lightGray p-10 py-20">
        <SectionHeader firstWord="MHC CAREER" secondWord="OPPORTUNITIES" />
      </div>
      <div className="mt-5 p-10">
        <h3 className="text-large font-semibold  text-mainGold">
          Your future with MHC
        </h3>
        <h3 className="text-lg font-semibold mt-5 ">
          Empower, innovate, excel:{" "}
        </h3>
        <Paragraph p="Joining MHC means becoming part of a diverse network of forward-thinking professionals united by a shared passion for driving industry advancement. We empower our teams with the resources, knowledge, and support they need to excel, leveraging the combined technical and financial expertise within our organization. At MHC, you can be confident that your contributions will be integral to impactful projects across international markets." />
        <Paragraph
          p="Whether you’re an experienced engineer, an astute business strategist, or a passionate finance professional, MHC offers a range of rewarding careers tailored to those seeking dynamic and impactful work. We are continuously 
expanding our expertise across our portfolio companies each bringing unique industry insights and robust 
capabilities 
in their respective fields."
        />
        <Paragraph
          p="MHC is deeply committed to building a workplace that embraces diverse perspectives and celebrates individual 
contributions. We believe in fostering a culture of inclusivity that reflects our global operations and values the 
unique experiences each team member brings to our shared mission."
        />
      </div>
      <div className="bg-lightGray p-10 py-20">
        <h3 className="text-center text-mainGold text-large font-semibold">
          READY TO JOIN US
        </h3>
        <div className="w-11/12 text-center m-auto">
          <Paragraph
            p="If you are inspired to shape the future alongside a team that values your ambitions and supports your growth, Mosaic Holding Corporation is the place for you. Discover our current opportunities and join a company that invests in your 
          potential to drive industry evolution."
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
