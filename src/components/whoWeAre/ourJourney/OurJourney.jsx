import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import TimeLine from "./timeLine/TimeLine";

function OurJourney() {
  return (
    <>
      <SectionHeader firstWord="OUR" secondWord="JOURNEY" />
      <div className="grid grid-cols-7 mt-9">
        <div className="col-span-1 text-white  bg-mainGold flex flex-col justify-center items-center p-6 lg:text-large text-base">
          <div className="flex flex-col py-14 items-start">
            <p className="mb-1">OUR</p>
            <p className="mb-1">JOURNEY</p>
            <p className="mb-1">BEGINS IN</p>
          </div>
        </div>
        <div className="col-span-6 flex items-center">
          <TimeLine />
        </div>
      </div>
    </>
  );
}

export default OurJourney;
