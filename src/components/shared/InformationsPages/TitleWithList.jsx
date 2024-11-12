import React from "react";
import TitleWithText from "./TitleWithText";

function TitleWithList({ title, text, list }) {
  return (
    <>
      <div className="my-11">
        <TitleWithText title={title} paragraph={text} />

        {list &&
          list.map((text, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center my-2 ">
                <i class="fa-solid fa-circle text-xs text-mainGold "></i>{" "}
                <p className={` sm:text-small text-[12px] ms-3 text-justify`}>
                  {text}
                </p>
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
}

export default TitleWithList;
