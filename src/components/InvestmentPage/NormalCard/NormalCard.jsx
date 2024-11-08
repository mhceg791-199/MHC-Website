import React from "react";

function NormalCard({ data }) {
  const { title, text, className } = data;
  return (
    <>
      <div
        className={` p-10 text-center bg-lightGray h-full rounded-2xl flex flex-col justify-center items-center ${className} `}
      >
        <h3 className="font-bold mb-4 text-lg  ">{title}</h3>
        <p className="text-lg  ">{text}</p>
      </div>
    </>
  );
}

export default NormalCard;
