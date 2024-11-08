import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function ContractDetails() {
  const details = [
    {
      icon: "fa-solid fa-phone",
      text: "Tel: 0222676674",
    },
    {
      icon: "fa-solid fa-phone",
      text: "Tel: 0222676654",
    },
    {
      icon: "fa-solid fa-earth-americas",
      text: "info@mosaicholding.com",
    },
    {
      icon: "fa-solid fa-location-dot",
      text: "13 Sayed Zakareya 1179 square, Sheraton",
    },
    {
      icon: "fa-solid fa-location-dot opacity-0",
      text: "#200, 1302 4th Street SW, Calgary, AB  T2R-0X8",
    },
  ];
  return (
    <>
      <SectionHeader firstWord="CONTACT" secondWord="US" />
      <div className="mt-10">
        {details.map((d) => (
          <>
            <div className="flex items-center my-1">
              <i class={` ${d.icon} text-mainGold me-2`}></i>
              <Paragraph p={d.text} className="!my-0 text-lg" />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ContractDetails;
