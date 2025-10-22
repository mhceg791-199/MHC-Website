import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import AccordionInfo from "../AccordionInfo/AccordionInfo";
import BlockInfo from "../BlockInfo/BlockInfo";

function InfoSignature() {

  return (
    <div className="md:p-10 p-5">
       <div className="heading-3 font-bold md:mt-6 leading-tight md:px-6">
        <SectionHeader firstWord="Holdings" />
      </div>
      <section className="w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 ">
        {/* LEFT SIDE */}
        <AccordionInfo />

        {/* RIGHT SIDE */}
        <BlockInfo />
      </section>
    </div>
  );
}

export default InfoSignature;
