import React from "react";

function Paragraph({ p, text = "justify" }) {
  const words = p.split(" ");

  return (
    <p
      className={`mt-5 sm:text-base text-[12px] text-${text} leading-relaxed text-textDark flex flex-wrap gap-[0.3rem]`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="transition-all duration-200 hover:scale-110 hover:text-mainGold hover:font-semibold cursor-default"
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default Paragraph;






// import React from "react";

// function Paragraph({ p, text = "justify" }) {
//   return (
//     <>
//       <p className={`mt-5 sm:text-base text-[12px]  'text-'${text}`}>{p}</p>
//     </>
//   );
// }

// export default Paragraph;
