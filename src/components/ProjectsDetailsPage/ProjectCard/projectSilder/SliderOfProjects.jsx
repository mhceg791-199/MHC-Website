import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "../../../shared/Arrows/NextArrow";
import PreArrow from "../../../shared/Arrows/PreArrow";
import "./SliderOfProjects.css";

function ProjectSlider({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    className: "slider variable-width",
    infinite: true,
    slidesToShow: isMobile ? 1 : 3, // Show more slides on larger screens
    slidesToScroll: 1,
    variableWidth: !isMobile, // Enable variable width only on larger screens
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets or smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false, // Disable variable width
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false, // Disable variable width
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-0 overflow-hidden">
      <Slider {...settings}>
        {data.map(({ src, width }, index) => (
          <React.Fragment key={index}>
            <div
              style={{ width: isMobile ? "100%" : width }}
              className="bg-black h-[418px]"
            >
              <img
                className="w-full h-full border-4 object-cover border-white"
                src={src}
                alt=""
              />
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
