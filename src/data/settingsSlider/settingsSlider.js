
const settingsSlider = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "180px",
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "80px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

export default settingsSlider;