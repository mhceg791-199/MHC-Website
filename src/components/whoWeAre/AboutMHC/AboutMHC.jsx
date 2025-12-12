import DescriptionAbout from "../../shared/DescriptionAbout/DescriptionAbout";

function AboutMHC() {
  const paragraphs = [
    "It began with a belief: nothing powerful is built from one piece alone.",
    "Centuries ago, artisans transformed scattered fragments into mosaics — individual pieces, each with its own shape, character, and history — reassembled into a masterpiece far stronger and more beautiful than the sum of its parts.",
  ];

  const paragraphs2 = [
    "That philosophy is the heart of Mosaic Holding Corporation, a modern global investment firm.",
  ];

  const paragraphs3 = [
    "Founded in 2023, we envisioned a firm that could elevate people, companies, and industries by creating harmony between what already works and what the future demands.",
    "Today, that idea has become a global investment model — a place where vision meets structure, agility meets global reach, and human ingenuity meets advanced technology.",
  ];

  const paragraphs4 = [
    "MHC is not an evolution of traditional investment — it is a new category entirely.",
  ];

  return (
    <DescriptionAbout
      id="about-mhc"
      firstWord="Our "
      secondWord="Story"
      paragraphs={paragraphs}
      paragraphs2={paragraphs2}
      paragraphs3={paragraphs3}
      paragraphs4={paragraphs4}
      particleColors={["#C5A363", "#C5A363"]}
      height="h-[62vh] md:h-[65vh]"
    />
  );
}

export default AboutMHC;