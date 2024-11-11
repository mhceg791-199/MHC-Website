import React from "react";
import CareersDetails from "../../components/CareerPage/CareersDetails/CareersDetails";
import CareerArea from "../../components/CareerPage/CareerArea/CareerArea";
import Navbar from "../../components/shared/Navbar/Navbar";

function CareerPage() {
  return (
    <>
      <Navbar />
      <CareersDetails />
      <CareerArea />
    </>
  );
}

export default CareerPage;
