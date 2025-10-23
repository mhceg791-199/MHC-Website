// import IndustryCard from "../../IndustryPage/IndustryCard/IndustryCard";

import IndustryCard from "../../Holdings/IndustryCard/IndustryCard";

function FirstSectionDetailss({ data, industries }) {
  //   const { poster, title } = data;
  const { poster, logo, title, text, link } = data;

  console.log(data);

  return (
    <div className="hoding-details">
      {/* background image */}
      <img
        className="w-full lg:h-[70vh] object-cover"
        src={poster}
        alt={title}
      />

      {/* containt details */}
      <div className="slider-container md:mx-5 overflow-hidden md:translate-y-[-25%]">
        <div className="mx-auto py-8">
          <IndustryCard
            img={logo}
            firstWord={title.firstWord}
            secondWord={title.secondWord}
            type="vertical"
            p={text}
            icon=""
            link={link}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSectionDetailss;
