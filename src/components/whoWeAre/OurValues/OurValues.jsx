import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s1 from "../../../assets/whoWeAre/mission/m1.webp";
import FirstSectionByImage from "../../shared/FirstSectionByImage/FirstSectionByImage";
import OurValuesSection from "../../CareerPage/OurValues/OurValues";
import MissionVision from "./MissionVision";

gsap.registerPlugin(ScrollTrigger);

function OurValues() {
  return (
    <>
      {/* <FirstSectionByImage
        imgSrc={s1}
        title="MISSION"
        overlayColor="bg-black/60"
        height="h-[35vh] md:h-[70vh]"
        description="A modern investment firm that acquires and elevates mid-cap firms, integrating them into a unified structure driven by agility, synergy, and trust. By preserving leadership and empowering people, Mosaic builds a flexible, customer-centric, and globally connected ecosystem for lasting performance."
      />

      <FirstSectionByImage
        imgSrc=""
        title="VISION"
        overlayColor="bg-black/60"
        height="h-[30vh] md:h-[70vh]"
        description="To redefine investment firms through a next-generation model of agility, flexibility, and synergy — creating a global ecosystem where architecture and engineering firms grow together while staying customer-centric and true to their identity. Mosaic stands in a league of its own."
      /> */}
      <MissionVision />
      <OurValuesSection />
    </>
  );
}

export default OurValues;
