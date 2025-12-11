import displayDataEnd from "../../../data/displayData/displayDataEnd";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import DataCardsSlider from "./DataCardsSlider";

export default function EndText({textRef}) {
  return (
    <div
        ref={textRef}
        className="absolute text-center md:text-auto md:right-28 top-[33%] md:top-[40%] max-w-lg text-white w-[90%] md:w-auto left-4 md:left-auto"
      >
        <h2 className="heading-3 text-mainGold font-bold mb-4">
            <SectionHeader firstWord="WHO WE ARE"/>
        </h2>

        <p className="mb-7 text-gray-300 leading-relaxed">
          We acquire strong, founder-led businesses — especially mid-cap
          companies built on trust — and give them what they need to dominate
          the next era.
          <br />
          Yet we protect the most important thing:
        </p>

        <DataCardsSlider displayData={displayDataEnd} />

        <p className="text-gray-300 leading-relaxed">
          This is our signature model — the rare balance of corporate firepower
          with founder-first culture.
        </p>
      </div>
  )
}

