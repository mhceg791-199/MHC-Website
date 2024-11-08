import React from "react";

function TextWirhArrow({ text, className }) {
  return (
    <>
      <div
        className={`flex items-center mt-4 text-mainGold font-bold ${className}`}
      >
        <p className="me-3 ">{text}</p>
        <i className="fa-solid font-light mt-1 fa-arrow-right-long "></i>
      </div>
    </>
  );
}

export default TextWirhArrow;
