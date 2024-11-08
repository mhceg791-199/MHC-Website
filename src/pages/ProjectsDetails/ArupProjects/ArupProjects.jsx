import React from "react";
import ProjectSlider from "../../../components/ProjectsDetailsPage/ProjectCard/projectSilder/SliderOfProjects";
import FirstSection from "../../../components/ProjectsDetailsPage/FirstSection/FirstSection";
import ProjectDetails from "../../../components/ProjectsDetailsPage/ProjectCard/ProjectDetails/ProjectDetails";

function ArupProjects() {
  const projectsDetails = [
    {
      images: [
        { src: "/signatureProjects/arup-datta/p11.jpg", width: 420 },
        { src: "/signatureProjects/arup-datta/p12.jpg", width: 600 },
        { src: "/signatureProjects/arup-datta/p13.jpg", width: 420 },

        ,
      ],
      title: "Walden Heights Community,  Calgary, Alberta",
      texts: [
        "The Canadian property award winner in 2015-2016 in Architecture Multi- Residence, stands out for integrating modern and sustainable design elements with community-centric spaces. Key features include natural light optimization, energy efficiency, and a high-density layout that promotes environmental responsibility. The project has been recognized for its innovation in creating functional yet visually striking living spaces that emphasize sustainability and enhance urban lifestyles. ",
        "The master plan meticulously adheres to all Multi-Family M2 zoning and ARP guidelines, achieving a harmonious blend of architectural style and regulatory compliance. Building elevation and massing strategies have been skillfully integrated to complement the existing architecture while maximizing natural light and minimizing shadow impact. This thoughtfully designed complex comprises 276 units across three structures: a 125-unit assisted living facility, an affordable senior residence accommodating 85 residents, and a western-facing building with 66 rental units, each designed to foster a vibrant and inclusive community.",
      ],
    },
    {
      images: [
        { src: "/signatureProjects/arup-datta/p21.jpg", width: 420 },
        { src: "/signatureProjects/arup-datta/p22.jpg", width: 600 },
        { src: "/signatureProjects/arup-datta/p23.jpg", width: 420 },
      ],
      title: "Multigenerational Housing, Calgary, Alberta",
      texts: [
        "This project showcases a remarkable residential design celebrated for blending functionality with aesthetic appeal. It has earned The Canadian property award 2017-2018 in Architecture Multi-Residence, emphasizing environmentally conscious materials and energy-efficient solutions. This residential senior’s housing complex enhances both form and function, providing a comfortable living space that meets high sustainability standards.",
        "Located in the northeast community of Skyview Ranch, this project spans 2.58 hectares and embodies a vision for creating an exceptional Seniors Assisted Living facility—a true 'community within a community.' The development offers 120 assisted living units, a daycare accommodating 72 children, and a versatile amenity area with seating for 200. It also features spaces for a library, crafts, a bistro, health services, and communal and family dining, along with a multi-family housing building with approximately 40 units. Additionally, it integrates a previously completed seniors' residence by the same client.",
        "Carefully designed to capture optimal natural light across all building surfaces, the project includes beautifully landscaped 'pocket parks,' which are fully connected by pathways and link seamlessly with the regional pathway network. These inviting outdoor spaces are designed to be enjoyed by both residents and the broader community.",
      ],
    },
    {
      images: [
        { src: "/signatureProjects/arup-datta/p31.jpg", width: 420 },
        { src: "/signatureProjects/arup-datta/p32.jpg", width: 600 },
        { src: "/signatureProjects/arup-datta/p33.jpg", width: 420 },
      ],
      title: "Callaghan Ravines, Edmonton, Alberta",
      texts: [
        "A significant residential multifamily design that has garnered industry recognition for its innovative architecture and sustainable features, earning The Canadian property award 2014-2015 in Architecture Multi-Residence. This project integrates modern aesthetics with functional design elements, emphasizing energy efficiency and community-focused layouts. Its accolades reflect excellence in architectural design and environmental consciousness, distinguishing it as a forward-thinking contribution to residential architecture. ",
        "Masterfully designed across 6.41 hectares in a distinctive prairie landscape, this timeless 'Heritage Resort' development provides an unparalleled, eco-friendly lifestyle within the vibrant city of Edmonton. The residence offerings include a range of villas, townhomes, luxury apartment buildings with 11 and 17 stories, a 32-unit apartment-style structure, and three high-rise towers, collectively comprising 353 premium condominium units. Exterior finishes feature high-quality materials such as stone, brick, acrylic stucco, curtain wall glazing, and concrete.",
      ],
    },
    {
      images: [
        { src: "/signatureProjects/arup-datta/p41.jpg", width: 420 },
        { src: "/signatureProjects/arup-datta/p42.jpg", width: 600 },
        { src: "/signatureProjects/arup-datta/p43.jpg", width: 420 },
      ],
      title: "South Pointe Lexus, Edmonton, Alberta, Canada",
      texts: [
        "This commercial mixed-use project has earned recognition for its innovative design that seamlessly blends retail, office, and other functional spaces. Celebrated for its architectural excellence and commitment to sustainability, it has received The Canadian property award winner in 2014-2015 for best Retail Architecture, demonstrating a high standard in creating vibrant, multi-purpose urban environments. ",
        "Located at the prominent intersection of Ellerslie Road and Calgary Trail in South Edmonton, this 50,700-square-foot luxury auto retail complex is one of Alberta’s largest. It features a showroom for new, pre-owned, and hybrid vehicles, a full-service area, car wash, and Edmonton's first car display tower. The project optimizes onsite parking and incorporates eye-catching elements like media walls, ramps, and a striking Lexus-branded canopy, creating an iconic landmark for the city. With double-height glazing, an open retail layout, a lounge, and a waterfall feature, it provides a premier customer experience. The project has earned approval from the Edmonton Urban Design Committee.",
      ],
    },
  ];

  const firstSectionDetails = {
    poster: "/signatureProjects/arup-datta/poster.jpg",
    logo: "/signatureProjects/arup.png",
    title: { firstWord: "ARUP DATTA", secondWord: "ARCHITECT" },
    text: "As the founding principal of ARUP DATTA ARCHITECT LTD (ADAL) has been involved in designing major Architectural and Master Planning projects in Canada and abroad for over 40 years. Mr. Datta has led design teams for large mixed-use complexes, educational, cultural and institutional projects in Canada, USA, Europe, Africa, Middle East and S.E. Asia.",
  };
  return (
    <>
      <FirstSection data={firstSectionDetails} />

      {projectsDetails.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectSlider data={project.images} />
          <ProjectDetails data={project} />
        </React.Fragment>
      ))}
    </>
  );
}

export default ArupProjects;
