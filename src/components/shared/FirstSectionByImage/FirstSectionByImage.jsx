import { useEffect, useState } from "react";
import SectionHeader from "../sectionHeader/sectionHeader";

function FirstSectionByImage({
  imgSrc,
  title = "Default Title",
  titleClassName = "heading-3 font-extrabold mb-3 tracking-wide drop-shadow-md",
  height = "h-[80vh]",
  overlayColor = "bg-black/50",
  description,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#first-section-image");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="first-section-image"
      className={`relative w-full ${height} overflow-hidden ${
        !imgSrc ? "bg-[#f8f8f8]" : ""
      }`}
    >
      {/*  خلفية الصورة (تظهر فقط لو imgSrc موجود) */}
      {imgSrc && isVisible && (
        <img
          src={imgSrc}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {/*  Overlay */}
      {imgSrc && <div className={`absolute inset-0 ${overlayColor}`}></div>}

      {/*  content */}
      <div className={`relative z-10 flex flex-col justify-center h-full  px-4 md:px-24 ${imgSrc ? "text-white" : "text-black"}`}>
        <SectionHeader firstWord={title} />
        <p className={`my-6 md:max-w-[850px] paragraph leading-relaxed ${imgSrc ? "text-gray-300" : ""}`}>
          {description}
        </p>
      </div>
    </section>
  );
}

export default FirstSectionByImage;
