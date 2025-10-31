import SectionHeader from "../../shared/sectionHeader/sectionHeader";

function ContractDetails() {
  const details = [
    // {
    //   icon: "fa-solid fa-phone",
    //   text: "Tel: 0222676674",
    // },
    // {
    //   icon: "fa-solid fa-phone",
    //   text: "Tel: 0222676654",
    // },
    {
      icon: "fa-solid fa-earth-americas",
      text: "info@mosaicholding.com",
    },
    {
      icon: "fa-solid fa-location-dot",
      text: "#200, 1302 4th Street SW, Calgary, AB  T2R-0X8",
    },
  ];
  return (
    <>
      <SectionHeader firstWord="CONTACT" secondWord="US" />
      <div className="mt-10">
        {details.map((d) => (
          <>
            <div className="flex items-center my-3">
              <i className={` ${d.icon} text-mainGold me-2`}></i>
              <p className={` sm:text-small md:text-2xl `}>{d.text}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ContractDetails;
