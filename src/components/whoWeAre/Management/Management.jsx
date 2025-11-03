import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import TextWirhArrow from "../../shared/TextWithArrow/TextWirhArrow";

const Management = React.forwardRef(() => {
  return (
    <>
      <SectionHeader
        firstWord="MANAGEMENT"
        secondWord="TEAM"
        type="horizontal"
      />
      <Paragraph p="At Mosaic Holding Corporation, our management team comprises professionals with diverse expertise, dedicated to driving innovation and sustainable growth across all our acquisitions." />
      <br />
      <br />
      <div className="grid grid-cols-6 ">
        <div className="col-span-2 lg:col-span-1">
          <img
            className="object-contain"
            src="/whoWeArePage/management.jpg"
            alt="management"
          />
        </div>
        <div className="col-span-4 lg:col-span-1  text-white bg-mainGold flex lg:text-large text-base flex-col justify-center items-center">
          <p>OMAR ATTABY</p>
          <p>O.A-Canada</p>
        </div>
        <div className="lg:col-span-4 col-span-6  bg-lightGray p-3 flex justify-center flex-col">
          <Paragraph
            p="Omar Attaby is the Chairman of Mosaic Holding and has been at the
            forefront of Dubai’s remarkable economic growth and development
            journey for over 37 years. With a corporate leadership trajectory
            dating back to 1985, Sheikh Ahmed has achieved extraordinary
            success. He is currently the President of Dubai Civil Aviation
            Authority (DCAA), the Chairman of Emirates NBD, the Chairman of
            Dubai Airports and the Chairman and Chief Executive of Emirates
            Airline and Group, which includes Dnata. Sheikh Ahmed also holds
            several influential government positions, including serving as
            Second Vice Chairman of the Executive Council of…"
          />
          {/* <TextWirhArrow text="MANAGEMENT TEAM" /> */}
        </div>
      </div>
      <br />
      <br />
    </>
  );
});

export default Management;
