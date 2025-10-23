import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slideHoldings from "../../../data/slideData";

function Carousel() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { arrows: true },
      },
      {
        breakpoint: 768,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center items-center py-8 ">
      <div className="w-[95%] md:w-[92%] lg:w-[90%] border-2 rounded-3xl  border-lightGray p-7">
        <Slider {...settings}>
          {slideHoldings.map((item, i) => (
            <div key={i} className="p-2">
              <div className="relative h-[75vh] rounded-3xl overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute bottom-10 left-10 text-white max-w-[600px] z-10">
                  <h2 className="heading-3 font-bold mb-4 text-mainGold">
                    {item.title}
                  </h2>
                  <h5 className="font-bold mb-1 text-white">
                    {item.preph}
                  </h5>
                  <p className="paragraph text-gray-300">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

// الأسهم
function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-6 bottom-6 z-20 flex items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow-md text-gray-700 hover:bg-white cursor-pointer backdrop-blur-sm"
    >
      <FaChevronRight size={18} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-20 bottom-6 z-20 flex items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow-md text-gray-700 hover:bg-white cursor-pointer backdrop-blur-sm"
    >
      <FaChevronLeft size={18} />
    </div>
  );
}

export default Carousel;
