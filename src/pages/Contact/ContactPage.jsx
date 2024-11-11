import React, { useEffect } from "react";
import ContractDetails from "../../components/ContractPage/contractDetails/contractDetails";
import Map from "../../components/ContractPage/map/map";
import Navbar from "../../components/shared/Navbar/Navbar";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen mt-10 md:mt- text-black items-center px-10">
        <div className="col-span-1">
          <ContractDetails />
        </div>
        <div className="col-span-1">
          <Map />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
