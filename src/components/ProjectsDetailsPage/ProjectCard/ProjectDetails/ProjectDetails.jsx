import React from "react";
import Paragraph from "../../../shared/paragraph";

function ProjectDetails({ data }) {
  const { title, texts } = data;
  return (
    <>
      <div className="px-10 mb-10">
        <h2 className="text-center mb-5 mt-2 text-xl font-bold">{title}</h2>
        {texts.map((text, index) => (
          <React.Fragment key={index}>
            <Paragraph p={text} text="center" />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default ProjectDetails;
