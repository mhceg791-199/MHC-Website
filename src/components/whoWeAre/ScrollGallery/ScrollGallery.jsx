import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollGallery() {
  useEffect(() => {
    const container = document.querySelector(".scroll-container");

    gsap.utils.toArray(".photo").forEach((photo, i) => {
      gsap.fromTo(
        photo,
        {
          opacity: 0,
          y: 150,
          rotateY: i % 2 === 0 ? -10 : 10,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: photo,
            scroller: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

 

  return (
    <div className="flex flex-col items-center gap-[20px] relative">
      {projects.map(({ image, title }, i) => (
        <div
          className="photo [perspective:1000px] [transform-style:preserve-3d] my-3"
          key={i}
        >
          <div
            className="md:w-[500px] md:h-[500px]
          transition-transform duration-700 ease-[ease]
              hover:scale-[1.05]
              [transform:rotateY(5deg)]
              hover:[transform:rotateY(0deg)_scale(1.05)]"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-[10px]"
            />
            {
              title && 
            <h3 className="heading-3 p-3 text-center bg-white/100 rounded-b-md text-mainGold">
              {title}
            </h3>
            }
          </div>
        </div>
      ))}
    </div>
  );
}