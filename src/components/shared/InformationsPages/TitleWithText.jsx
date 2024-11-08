import React from "react";

function TitleWithText({ title, paragraph }) {
  return (
    <div className="my-6">
      <h2 className="text-large text-mainGold headerSection font-bold ">
        <>
          <span>
            <span className=" ">{title}</span>
          </span>
        </>
      </h2>
      <p className={` sm:text-small text-[12px] text-justify mt-1`}>
        {paragraph}
      </p>
    </div>
  );
}

export default TitleWithText;
