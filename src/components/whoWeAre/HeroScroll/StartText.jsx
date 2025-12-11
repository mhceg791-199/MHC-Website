import displayData from "../../../data/displayData/displayData";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import DataCardsSlider from "./DataCardsSlider";

export default function StartText({centerTitleRef}) {
  return (
    <div
        ref={centerTitleRef}
        className="absolute top-[16%] md:top-[25%] left-1/2 -translate-x-1/2
             text-white text-center opacity-100 z-30 md:max-w-2xl w-[90%] md:w-auto"
      >
        <h3 className="fade-item heading-3 font-semibold mb-4">
          <SectionHeader firstWord="WHO WE ARE" />
        </h3>

        <p className="fade-item paragraph font-semibold mb-6 text-gray-300">
          A Modern Global Investment Firm Built for the Next Generation of
          Growth
        </p>

        <p className="fade-item paragraph mb-8 text-gray-400">
          Headquartered in Calgary, with strategic offices in Florida and Cairo,
          MHC is redefining how mid-cap companies grow, transform, and scale
          through:
        </p>

        <DataCardsSlider displayData={displayData} />
      </div>
  )
}
