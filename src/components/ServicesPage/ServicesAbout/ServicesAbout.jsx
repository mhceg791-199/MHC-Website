import DescriptionAbout from "../../shared/DescriptionAbout/DescriptionAbout";

export default function ServicesAbout() {

    const paragraphs = [
    "We Take Companies Further — and Clients All the Way.",
    "MHC delivers a full-spectrum growth and execution platform for the companies we acquire and the clients they serve."
  ];

  return (
    <DescriptionAbout
      id="about-services"
      firstWord="Our Services"
      secondWord=""
      paragraphs={paragraphs}
      particleColors={["#C5A363", "#C5A363"]}
      height= "h-[35vh] md:h-[35vh]"
    />
  )
}
