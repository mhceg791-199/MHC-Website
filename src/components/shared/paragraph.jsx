import React from "react";

function Paragraph({ p, text = "justify" }) {
  return (
    <>
      <p className={`mt-5 sm:text-small text-[12px]  'text-'${text}`}>{p}</p>
    </>
  );
}

export default Paragraph;
