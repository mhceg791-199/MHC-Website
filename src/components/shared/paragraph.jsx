// import React from "react";

// function Paragraph({ p, text = "justify" }) {
//   const words = p.split(" ");

//   return (
//     <p
//       className={`mt-5 sm:text-base text-[12px] text-${text} leading-relaxed text-textDark flex flex-wrap gap-[0.4rem]`}
//     >
//       {words.map((word, index) => (
//         <span
//           key={index}
//           className="transition-all duration-200 hover:text-mainGold hover:scale-105 inline-block cursor-default"
//         >
//           {word}
//         </span>
//       ))}
//     </p>
//   );
// }

// export default Paragraph;

function Paragraph({ p, text = "justify" }) {
  // لو p عبارة عن array نعمل map عليها
  if (Array.isArray(p)) {
    return (
      <div className="space-y-2">
        {p.map((para, index) => (
          <p
            key={index}
            className={`mt-2 sm:text-base paragraph 'text-'${text}`}
          >
            {para}
          </p>
        ))}
      </div>
    );
  }

  // لو p نص واحد فقط
  return (
    <p className={`mt-2 sm:text-base paragraph 'text-'${text}`}>
      {p}
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
