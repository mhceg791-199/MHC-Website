import { FaRegLightbulb } from "react-icons/fa";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import { MdOutlineEngineering } from "react-icons/md";

function EngineerCard() {
  return (
    <>
      <div className="">
        <img
          className="w-full lg:h-[70vh] object-cover"
          src="/industryPage/2.webp"
          alt=""
        />
        <div className="bg-lightGray relative translate-y-[-10%]  sm:mx-10  p-8 md:px-14">
          <div className="flex items-center">
            <div className=" border-[3px] me-5 border-mainGold text-mainGold rounded-full flex justify-center  w-16 h-16 items-center ">
              <img
                className="w-[70%] "
                src="/homePage/icons/icon2.png"
                alt=""
              />
            </div>{" "}
            <SectionHeader firstWord="Engineering Solutions" link="/wolsey" />
          </div>
          <Paragraph p="Our multi-disciplinary engineering expertise spans critical infrastructure domains: " />
          <br />
          <br />
          <div className=" md:px-16 flex items-stretch">
            <SectionHeader
              firstWord="Structural"
              secondWord="Engineering"
              fontSize="lg"
            />
          </div>
          <div className="md:px-16 text-justify">
            <Paragraph p="Through Wolsey Structural Engineering, MHC delivers cutting-edge structural solutions that ensure building integrity and longevity. We specialize in resilient designs for high-rises and complex infrastructure, addressing both natural and operational stresses. This $112 billion market (2024) maintains steady 5.1% CAGR growth, underscoring the enduring need for structural innovation." />
          </div>
          <br />
          <br />
          <div className="md:px-16 flex items-stretch">
            <SectionHeader
              firstWord="Electrical"
              secondWord="Engineering"
              fontSize="lg"
            />
          </div>
          <div className="md:px-16 text-justify">
            <Paragraph p="MHC's comprehensive electrical engineering services encompass power systems, lighting, and smart controls designed for efficiency and sustainability. Our solutions meet evolving global standards in this $234 billion market (2024), which projects 6% CAGR through 2028 as electrification and smart infrastructure demands accelerate." />
          </div>
          <br />
          <br />
          <div className="md:px-16 flex items-stretch">
            <SectionHeader
              firstWord="Mechanical"
              secondWord="Engineering"
              fontSize="lg"
            />
          </div>
          <div className="md:px-16 text-justify">
            <Paragraph p="We optimize critical building systems through advanced HVAC, plumbing, and mechanical infrastructure design. MHC's $440 billion global mechanical engineering services ensure peak operational performance while enhancing energy efficiency and user comfort across all project types." />
          </div>
          <br />

          <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default EngineerCard;
