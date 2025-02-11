import React from "react";
import "./sectionHeader.css";
import { Link } from "react-router-dom";

function SectionHeader({
  firstWord,
  secondWord,
  fontSize = "large",
  type = "horizontal",
  line = true,
  link = "",
}) {
  return (
    <>
      <Link
        to={link}
        target="_blank"
        className={`${
          link ? "cursor-pointer" : "cursor-default"
        } text-${fontSize}   headerSection font-bold `}
      >
        {type == "horizontal" ? (
          <>
            <span className={`${line ? "hoverOneLine" : ""}`}>
              <span className=" ">{firstWord}</span>
              <span> {secondWord}</span>
            </span>
          </>
        ) : (
          <>
            <span
              className={` ${
                line ? "border-b-half" : ""
              } sm:text-large text-[20px] font-semibold tracking-wider`}
            >
              <p className="my-0 leading-">{firstWord}</p>
              <p className="leading-3 my-0">{secondWord}</p>
            </span>
          </>
        )}
      </Link>
    </>
  );
}

export default SectionHeader;
