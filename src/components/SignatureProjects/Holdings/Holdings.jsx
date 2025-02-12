import React from "react";
import { Link } from "react-router-dom";

function Holdings() {
  const holding = [
    {
      text: "Wolsey",
      logo: "/signatureProjects/wolsey.png",
      link: "/wolsey",
    },
    {
      text: "Arup Datta Architect",
      logo: "/signatureProjects/arup.png",
      link: "/arup",
    },
    {
      text: "MHCEG Consultancy",
      logo: "/signatureProjects/mhceg.png",
      link: "/mhceg",
    },
    {
      text: "Kaller Architecture",
      logo: "/signatureProjects/kaller.png",
      link: "/kaller",
    },
  ];
  return (
    <>
      <h2 className="mb-4 text-xl font-bold"> Spotlights</h2>

      {holding.map((hold, index) => (
        <div
          key={index}
          className="grid grid-cols-4 xl:w-[75%] w-full my-1   justify-start "
        >
          <Link
            className="col-span-1 flex justify-start cursor-pointer "
            to={hold.link}
          >
            <img className="me-3 object-cover p-1" src={hold.logo} alt="" />
          </Link>
          <p
            className={`mt-0 col-span-3 flex items-center justify-start ps-5 sm:text-small text-[12px] `}
          >
            {hold.text}
          </p>
        </div>
      ))}
    </>
  );
}

export default Holdings;
