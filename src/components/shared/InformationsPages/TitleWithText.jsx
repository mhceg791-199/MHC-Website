import React from "react";

function TitleWithText({ title, paragraph }) {
  return (
    <div className="my-6">
      <h2 className="text-base text-mainGold headerSection font-bold ">
        <>
          <span>
            <span className=" ">{title}</span>
          </span>
        </>
      </h2>
      <p className={` sm:text-sm text-[12px] text-justify mt-1`}>
        {paragraph}
      </p>
    </div>
  );
}

export default TitleWithText;
