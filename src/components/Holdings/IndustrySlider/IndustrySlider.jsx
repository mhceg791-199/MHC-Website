import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import industrySlides from "../../../data/industrySlides";
import settingsSlider from "../../../data/settingsSlider/settingsSlider";
import IndustryCard from "../IndustryCard/IndustryCard";

export default function IndustrySlider() {
  return (
    <div className="slider-container  bg-gray-50 overflow-hidden">
      <div className="mx-auto py-8">
        <Slider {...settingsSlider}>
          {industrySlides.map((slide, index) => (
            <div key={index}>
              <IndustryCard {...slide} />
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
}
