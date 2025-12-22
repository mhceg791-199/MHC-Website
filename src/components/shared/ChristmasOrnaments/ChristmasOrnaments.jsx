import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ChristmasOrnaments() {
  const ornamentsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ornamentsRef.current,
      {
        y: -40,
        opacity: 0,
        rotate: -5,
      },
      {
        y: 0,
        opacity: 1,
        rotate: 5,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        onComplete: () => {
          // Swing animation
          gsap.to(ornamentsRef.current, {
            rotate: -5,
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      }
    );
  }, []);

  return (
    <div className="pointer-events-none absolute top-0 left-32 md:left-60 flex gap-6 z-50">
      {[1].map((_, i) => (
        <img
          key={i}
          ref={(el) => (ornamentsRef.current[i] = el)}
          src="/images/christmas-ornament.png"
          alt="Christmas Ornament"
          className="w-6 md:w-8 origin-top"
          style={{ transformOrigin: "top center" }}
        />
      ))}
    </div>
  );
}
