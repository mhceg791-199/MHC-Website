import { useContext } from "react";
import Paragraph from "../../shared/paragraph";
import { careerModalContext } from "../../../context/CareerContext";
import DescriptionAbout from "../../shared/DescriptionAbout/DescriptionAbout";
import OurValuesSection from "../OurValues/OurValues";

function CareersDetails() {
  const { setOpen } = useContext(careerModalContext);
  const openModal = () => {
    setOpen(true);
  };
  const paragraphs = [
    "We Don’t Offer Jobs — We Build Careers.",

    "Join a global collective of innovators shaping the future of design, engineering, and investment.",

    "At Mosaic Holding Corporation, your talent grows through purposeful pathways and cross-sector opportunities that inspire impact, creativity, and leadership — across borders and industries.",

    "Empowerment Through Collective Excellence.",
  ];
  return (
    <>
      <DescriptionAbout
        id="Careers-mhc"
        firstWord="Your Future with "
        secondWord="Mosaic Holding Corporation"
        paragraphs={paragraphs}
        particleColors={["#C5A363", "#C5A363"]}
        height = "h-[35vh] md:h-[60vh]"
      />

      <OurValuesSection />

      <div className="bg-lightGray p-10 py-10 md:py-20">
        <h3 className="text-center text-mainGold heading-3 font-semibold">
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
            className="bg-mainGold px-14 rounded-full text-white  py-4 heading-3 "
          >
            JOIN OUR TEAM
          </button>
        </div>
      </div>
    </>
  );
}

export default CareersDetails;
