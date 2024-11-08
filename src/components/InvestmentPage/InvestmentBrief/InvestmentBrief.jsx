import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function InvestmentBrief() {
  return (
    <>
      <div className="mt-20">
        <SectionHeader firstWord="INVESTMENT" secondWord="APPROACH" />
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <div className="mt-3">
              <Paragraph
                p="Mosaic Holding Corporation’s investment approach is a cohesive strategy that unites precision, ethics, and client focus into a cohesive strategy for sustainable growth.Through market analysis, diversified investments, and 
            proactive risk management, each element complements the 
            others to adapt to market dynamics and foster long-term 
            success."
              />

              <img src="./investmentPage/2.png" alt="" />
            </div>
          </div>

          <div className="col-span-1 m-auto">
            <img className="text-center" src="/investmentPage/1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestmentBrief;
