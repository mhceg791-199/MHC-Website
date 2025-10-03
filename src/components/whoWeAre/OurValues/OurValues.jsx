import SectionHeader from "../../shared/sectionHeader/sectionHeader";
//import Paragraph from "../../shared/paragraph";

function OurValues() {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className=" col-span-3">
          <div className="bg-[url('/whoWeArePage/mission.webp')] bg-center w-[100%] h-[70vh] bg-fixed"></div>

          <div className=" p-5  lg:w-3/5">
            <h2 className="text-large  headerSection font-bold ">
              <span>
                <SectionHeader firstWord="MISSION" />
              </span>
            </h2>{" "}
            <p className="mt-5 sm:text-base text-[12px] text-justify md:w-[90%]">
              MHC is dedicated to enhancing the success of established mid-cap
              companies by providing comprehensive support, resources, and
              strategic insight. Through targeted acquisitions and a hands-on
              approach to value creation, we aim to build a synergistic
              portfolio of industry leaders committed to innovation, quality,
              and positive impact in their fields.
            </p>
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-center p-5">
          <h2 className="text-large  headerSection font-bold ">
            <span>
              <SectionHeader firstWord="VISION" />
            </span>
          </h2>
          <p className="mt-5 sm:text-base text-[12px] text-justify md:w-[81%]">
            To become a premier force in fostering innovation and excellence
            across critical industries, empowering our portfolio companies to
            achieve unprecedented growth through strategic investment,
            operational expertise, and a steadfast commitment to sustainable
            development.
          </p>
        </div>
        <br />
      </div>

      <div className="p-5 md:w-[79%]">
        <SectionHeader firstWord="OUR" secondWord="VALUES" />
        <br />
        <p className="mt-5 sm:text-base text-[12px] text-justify md:w-[68%]">
          At Mosaic Holding Corporation, our management team comprises
          professionals with diverse expertise, dedicated to driving innovation
          and sustainable growth across all our acquisitions.
        </p>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default OurValues;

