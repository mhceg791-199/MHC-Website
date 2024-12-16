import React, { useContext } from "react";
import CareersDetails from "../../components/CareerPage/CareersDetails/CareersDetails";
import CareerArea from "../../components/CareerPage/CareerArea/CareerArea";
import Navbar from "../../components/shared/Navbar/Navbar";
import { careerModalContext } from "../../context/CareerContext";

function CareerPage() {

  return (
    <>
      <Navbar />
      <CareersDetails />
      {/* <CareerArea /> */}
    </>
  );
}

export default CareerPage;
