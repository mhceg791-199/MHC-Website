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
      height="h-[58vh] md:h-[65vh]"
    />
  );
}

export default AboutMHC;

// import DescriptionAbout from "../../shared/DescriptionAbout/DescriptionAbout";

// function AboutMHC() {
//   const paragraphs = [
//     "It began centuries ago — in the golden eras of creation — when builders and artisans found beauty in what was once broken.",

//     "From scattered fragments, they shaped mosaics: pieces of different origins united with purpose to form perfect harmony. Each piece unique. Each one essential. Together, they built something timeless.",
//   ];

//   const paragraphs2 = [
//     "That same idea defines Mosaic Holding Corporation (MHC).",
//   ];

//   const paragraphs3 = [
//     "Founded in 2023 and headquartered in Calgary, with offices in Florida and Cairo, MHC was built on the belief that true strength lies in connection — in the harmony between vision, innovation, and human ingenuity.",

//     "We are a modern investment firm acquiring and accelerating mid-cap companies with strong track records across architecture, engineering, marine structures, oil & gas, and energy management.",

//     "Through an agile, customer-centric model, we empower each company with the tools and structure to grow — while preserving its identity as part of a greater whole.",
//   ];

//   const paragraphs4 = [
//     "This is how the Mosaic grows: individual firms becoming a connected ecosystem — a living network of talent, creativity, and innovation that adapts, scales, and builds across continents.",

//     "With leading names like Wolsey Structural Engineering, ADAL ARUP Datta Architect Ltd., Kaller Architecture, and MHCEG Consultancy, we continue to expand a platform defined by integrity, innovation, and shared growth.",
//   ];

//   return (
//     <DescriptionAbout
//       id="about-mhc"
//       firstWord="Our "
//       secondWord="Story"
//       paragraphs={paragraphs}
//       paragraphs2={paragraphs2}
//       paragraphs3={paragraphs3}
//       paragraphs4={paragraphs4}
//       particleColors={["#C5A363", "#C5A363"]}
//       height="h-[100vh] md:h-[85vh]"
//     />
//   );
// }

// export default AboutMHC;