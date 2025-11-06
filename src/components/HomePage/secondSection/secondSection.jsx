import React, { useState } from "react";
import "./secondSection.css";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function SecondSection() {
  const navigate = useNavigate();
  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };
  const [indexHovered, setIndexHoverd] = useState(null);
  const industries = [
    {
      icon: "/homePage/icons/icon1.png",
      hoveringIcon: "/homePage/icons/icon1-white.png",
      name: "Architecture and Urban Planning",
      link: "architechture",
    },
    {
      icon: "/homePage/icons/icon2.png",
      hoveringIcon: "/homePage/icons/icon2-white.png",
      link: "engineer",

      name: "Engineering",
    },
    {
      link: "oil",
      icon: "/homePage/icons/icon3.png",
      hoveringIcon: "/homePage/icons/icon3-white.png",
      name: "Oil and Gas",
    },
    {
      link: "marine",
      icon: "/homePage/icons/icon4.png",
      hoveringIcon: "/homePage/icons/icon4-white.png",
      name: "Marine and Offshore Structures",
    },
    {
      link: "energy",
      icon: "/homePage/icons/icon5.png",
      hoveringIcon: "/homePage/icons/icon5-white.png",
      name: "Energy Management",
    },
  ];

  return (
    <>
      <div className="md:p-10 p-2  bg-black">
        <section className=" text-white w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-2 md:px-16 py-16">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 flex justify-start">
            <h2 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-extrabold leading-none tracking-tight text-mainGold">
              OUR <br /> <span className="pl-8 md:pl-16 inline-block"></span>{" "}
              IMPACT
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
            <h3 className="heading-3 font-semibold mb-6 text-white">
              <span className="bg-secondGold">We move like a boutique</span>,
              deliver like a corporation, and think like a partner.
            </h3>
            <div className="flex gap-1">
              <span className="mt-1 text-mainGold">
                <FaChevronRight size={14} />
              </span>
              <p className="paragraph text-gray-300">
                Founded in 2023, Mosaic Holding Corporation (MHC) is a
                next-generation investment firm headquartered in Calgary, with
                offices in Florida and Cairo. We build our own league —
                acquiring mid-cap companies with strong track records and
                accelerating their growth through an agile, customer-centric
                model that blends creativity with corporate strength.
              </p>
            </div>
            <div className="flex gap-1 my-5">
              <span className="mt-1 text-mainGold">
                <FaChevronRight size={14} />
              </span>
              <p className="paragraph text-gray-300">
                Operating across architecture, engineering, marine structures,
                oil & gas, and energy management, MHC and its subsidiaries
                collectively take pride in delivering over 4,000 projects across
                more than 20 countries.
              </p>
            </div>
            <div className="flex gap-1">
              <span className="mt-1 text-mainGold">
                <FaChevronRight size={14} />
              </span>
              <p className="paragraph text-gray-300">
                Bold in vision and fluid in execution, MHC stands apart — where
                investment meets creation, and growth moves with purpose.{" "}
              </p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 md:px-20 px-5 md:mt-10 ">
          {industries.map(({ icon, hoveringIcon, name, link }, index) => (
            <React.Fragment key={index}>
              <div
                onMouseEnter={() => {
                  setIndexHoverd(index);
                }}
                onMouseLeave={() => {
                  setIndexHoverd(null);
                }}
                className="col-span-1 industryCard flex flex-col justify-start   items-center md:p-10 py-5 "
              >
                <div
                  onClick={() => handleNavigate("/industries", link)}
                  className="flex cursor-pointer items-center justify-center w-12 h-12 rounded-full border-2 bg-icon border-mainGold p-2"
                >
                  <img
                    src={indexHovered === index ? hoveringIcon : icon}
                    alt={name}
                    loading="lazy"
                  />
                </div>{" "}
                <p className="text-center text-mainGold mt-2 paragraph font-bold">
                  {name}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default SecondSection;
