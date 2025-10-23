import { useEffect, useState } from "react";

function FirstSectionByVideo({
  videoSrc,
  fallbackImg,
  title = "Default Title",
  titleClassName = "heading-3 font-extrabold mb-3 tracking-wide drop-shadow-md",
  height = "h-[80vh]",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#first-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="first-section" className={`relative w-full ${height} overflow-hidden`}>
      {isVisible && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={fallbackImg}
          src={videoSrc}
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className={titleClassName}>{title}</h1>
      </div>

      <button
        type="button"
        aria-label="Scroll Down"
        className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 text-mainGold animate-bounce"
      >
        <i className="fa-solid fa-arrow-down text-lg sm:text-xl md:text-2xl lg:text-3xl"></i>
      </button>
    </section>
  );
}

export default FirstSectionByVideo;
