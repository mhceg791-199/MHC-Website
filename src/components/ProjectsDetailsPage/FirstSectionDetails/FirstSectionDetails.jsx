// // import IndustryCard from "../../IndustryPage/IndustryCard/IndustryCard";

// import IndustryCard from "../../Holdings/IndustryCard/IndustryCard";

// function FirstSectionDetailss({ data, industries }) {
//   //   const { poster, title } = data;
//   const { poster, logo, title, text, link } = data;

//   console.log(data);

//   return (
//     <div className="hoding-details">
//       {/* background image */}
//       <img
//         className="w-full lg:h-[70vh] object-cover"
//         src={poster}
//         alt={title}
//       />

//       {/* containt details */}
//       <div className="slider-container md:mx-5 overflow-hidden md:translate-y-[-25%]">
//         <div className="mx-auto py-8">
//           <IndustryCard
//             img={logo}
//             firstWord={title.firstWord}
//             secondWord={title.secondWord}
//             type="vertical"
//             p={text}
//             icon=""
//             link={link}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FirstSectionDetailss;
import { useState, useEffect } from "react";
import IndustryCard from "../../Holdings/IndustryCard/IndustryCard";

function FirstSectionDetailss({ data }) {
  const { poster, logo, title, text, link } = data;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = poster;
    img.onload = () => setIsLoaded(true);
  }, [poster]);

  return (
    <div className="relative hoding-details w-full min-h-[70vh] bg-black overflow-hidden">
      
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${poster})`,
        }}
      />

      {/* تأثير الـ Blur أثناء التحميل */}
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full bg-gray-800 animate-pulse blur-md" />
      )}

      
      <div className="relative z-10 flex justify-center items-center md:translate-y-[-20%]">
        <div className="mx-auto py-8 w-full md:w-[85%]">
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
