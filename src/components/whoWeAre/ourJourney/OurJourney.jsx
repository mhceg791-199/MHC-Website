import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import TimeLine from "./timeLine/TimeLine";

function OurJourney() {
  return (
    <>
      <SectionHeader firstWord="OUR" secondWord="JOURNEY" />
      <div className="grid md:grid-cols-7 grid-cols-3 mt-9">
        <div className="md:col-span-1  col-start-2 text-white  bg-mainGold flex flex-col justify-center items-center m-auto  p-6 lg:text-large text-base">
          <div className="flex flex-col md:py-14 items-center ">
            <p className="mb-1">OUR</p>
            <p className="mb-1">JOURNEY</p>
            <p className="mb-1">BEGINS IN</p>
          </div>
        </div>
        <div className="md:col-span-6 col-span-4 mt-5 md:mt-0 flex items-center">
          <TimeLine />
        </div>
      </div>
    </>
  );
}

export default OurJourney;
