import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Slider from "react-slick";
import NextArrow from "../../shared/Arrows/NextArrow";
import PreArrow from "../../shared/Arrows/PreArrow";

function IndustriesOfHolding({ industries }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="md:p-10 p-5 md:mx-9 md:translate-y-[-25%] bg-lightGray rounded-[5px]">
        <SectionHeader firstWord="Industries" />

        <div className="  mt-10 ">
          <Slider {...settings}>
            {industries.map(({ name, icon }, index) => (
              <React.Fragment key={index}>
                <div className=" industryCard flex flex-col justify-start   items-center md:py-10 py-5 ">
                  <div className="text-3xl text-mainGold">{icon}</div>
                  <p className="text-center mt-2 paragraph font-semibold">
                    {name}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default IndustriesOfHolding;

