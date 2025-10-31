import React, { useContext } from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import CareerModal from "../CareerModel/CareerModel";
import { careerModalContext } from "../../../context/CareerContext";

function CareerArea() {
  const { setOpen } = useContext(careerModalContext);
  const openModal = () => {
    setOpen(true);
  };
  const areas = [
    "Architecture & Urban Design",
    "Engineering",
    "Oil & Gas",
    "Project Control",
    "Marine & Offshore Structures",
    "Energy Management",
    "Marketing Team",
    "Operations",
    "HR",
    "IT",
    "Accounting & Finance",
    "Office Manager",
  ];
  return (
    <>
      <div>
        <CareerModal />
      </div>
      <div className="px-10">
        <div className="m-auto my-5">
          <SectionHeader firstWord="CAREER" secondWord="AREAS" />
        </div>
        <div className="grid grid-cols-4 gap-11 my-10">
          {areas.map((area, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 bg-lightGray rounded-xl p-12 flex justify-center flex-col items-center">
                <h3 className="text-lg font-bold text-center mb-2">{area}</h3>
                <button
                  onClick={openModal}
                  className="border-2 border-mainGold rounded-3xl px-5 py-1 text-mainGold"
                >
                  View Opportunities
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="m-auto flex justify-center m">
          <button
            onClick={openModal}
            className="bg-mainGold px-14 rounded-full text-white mb-10 py-4 text-xl "
          >
            JOIN OUR TEAM
          </button>
        </div>
      </div>
    </>
  );
}

export default CareerArea;
