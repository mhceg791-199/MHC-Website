import DescriptionAbout from "../../shared/DescriptionAbout/DescriptionAbout";

export default function HoldingsAbout() {

    const paragraphs = [
    "Mosaic Holding Corporation (MHC) is a multinational investment firm with a 30-year legacy of operational excellence, formally structured in its current holding iteration in mid-2023. We specialize in strategic leveraged buyouts (LBOs) of mid-cap companies with proven expertise across architecture, engineering, energy, and marine infrastructure sectors. Our portfolio spans 4,000+ projects in 20+ countries, reflecting our global reach and local market proficiency.",
  ];

  return (
    <DescriptionAbout
      id="about-holdings"
      firstWord="Spotlights"
      secondWord=""
      paragraphs={paragraphs}
      particleColors={["#C5A363", "#C5A363"]}
      height= "h-[35vh] md:h-[50vh]"
    />
  )
}
