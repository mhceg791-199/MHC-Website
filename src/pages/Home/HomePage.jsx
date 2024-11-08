import React from "react";
import SecondSection from "../../components/HomePage/secondSection/secondSection";
import FirstSection from "../../components/HomePage/firstSection/firstSection";
import SignatureProject from "../../components/HomePage/signatureProject/signatureProject";
import MhcInNumber from "../../components/HomePage/mhcInNumbers/mhcInNumber";
import Investment from "../../components/HomePage/investment/investment";

function HomePage() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <div className="md:p-10 p-5">
        <SignatureProject />
      </div>
      <MhcInNumber />
      <div className="md:p-10 p-5">
        <Investment />
      </div>
    </>
  );
}

export default HomePage;
