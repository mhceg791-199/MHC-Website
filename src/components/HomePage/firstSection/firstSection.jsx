import { Typewriter } from "react-simple-typewriter";
import firstSection from "../../../assets/homePage/firstSection.webm";
import fallback from "../../../assets/homePage/fallback.webp";

function FirstSection({ scrollTarget }) {
  const handleScrollDown = () => {
    if (scrollTarget?.current) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        poster={fallback}
        src={firstSection}
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[5px]"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-wide drop-shadow-md">
          Mosaic Holding Corporation
        </h1>

        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl md:mt-3 font-medium text-white">
          <span className="text-mainGold font-semibold">
            <Typewriter
              words={["Where Capital Meets Creation"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h3>
      </div>

      {/* arrow */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll Down"
        className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 text-mainGold animate-bounce"
      >
        <i className="fa-solid fa-arrow-down text-lg sm:text-xl md:text-2xl lg:text-3xl"></i>
      </button>
    </section>
  );
}

export default FirstSection;
