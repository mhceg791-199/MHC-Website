import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "../../../shared/Arrows/NextArrow";
import PreArrow from "../../../shared/Arrows/PreArrow";
import "./SliderOfProjects.css";
function ProjectSlider({ data }) {
  const [isMobile, setIsMobil] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobil(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  var settings = {
    className: "slider variable-width",
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: !isMobile,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
  };
  return (
    <div className="slider-container mt-[-10px] mx-0 overflow-hidden">
      <Slider {...settings}>
        {console.log(data)}
        {data.map(({ src, width }, index) => (
          <React.Fragment key={index}>
            <div style={{ width }} className="bg-black h-[418px]">
              <img className="w-full h-full border-4 border-white" src={src} alt="" />
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
