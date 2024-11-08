import React from "react";
import Paragraph from "../../shared/paragraph";
import { Link } from "react-router-dom";

function Holdings() {
  return (
    <>
      <h2 className="mb-8 text-xl font-bold"> Spotlights</h2>
      <div className="flex items-center justify-start ps-5">
        <Link to="/wolsey-projects">
          <img className="pe-4" src="/signatureProjects/wolsey.png" alt="" />
        </Link>
        <Paragraph p="Wolsey" />
      </div>
      <div className="flex my-3 items-center justify-start ps-5">
        <Link to="/arup-projects">
          <img className="pe-4" src="/signatureProjects/arup.png" alt="" />
        </Link>
        <Paragraph p="Arup Datta Architect" />
      </div>
      <div className="flex my-3 items-center justify-start ps-5">
        <img className="pe-4" src="/signatureProjects/mhceg.png" alt="" />
        <Paragraph p="MHCEG Consultancy" />
      </div>
    </>
  );
}

export default Holdings;
