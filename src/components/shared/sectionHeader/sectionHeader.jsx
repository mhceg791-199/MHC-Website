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

  const content = type === "horizontal" ? (
    <span className={`${line ? "hoverOneLine" : ""}`}>
      <span>{firstWord}</span>
      <span> {secondWord}</span>
    </span>
  ) : (
    <span
      className={`${
        line ? "border-b-half" : ""
      } sm:text-large text-[20px] font-semibold tracking-wider`}
    >
      <p className="my-0 leading-">{firstWord}</p>
      <p className="leading-3 my-0">{secondWord}</p>
    </span>
  );

  return link ? (
    <Link
      to={link}
      target="_blank"
      className={`cursor-pointer text-${fontSize} headerSection font-bold`}
    >
      {content}
    </Link>
  ) : (
    <span
      className={`cursor-default text-${fontSize} headerSection font-bold`}
    >
      {content}
    </span>
  );
}

export default SectionHeader;