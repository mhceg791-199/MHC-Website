// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// import mosaic from "../../../assets/signatureProjects/logo.webp";
// import mhceg from "../../../assets/signatureProjects/mhceg.webp";
// import indigenous from "../../../assets/signatureProjects/Indigenous.webp";
// import mainLogo from "../../../assets/signatureProjects/mhc.png";

// const holdings = [
//   { text: "Wolsey", logo: "/signatureProjects/wolsey.png", link: "/wolsey" },
//   { text: "MHCEG Consultancy", logo: mhceg, link: "/mhceg" },
//   { text: "Kaller Architecture", logo: "/signatureProjects/kaller.png", link: "/kaller" },
//   { text: "Datta And Tayefi", logo: "/signatureProjects/datta.png", link: "/datta-and-tayefi" },
//   { text: "Mosaic Real Estate", logo: mosaic, link: "/mosaic-realState" },
//   { text: "Indigenous Mosaic Company", logo: indigenous, link: "/indigenous-mosaic" },
// ];

// export default function HoldingsOrbit() {
//   const containerRef = useRef(null);
//   const orbitRefs = useRef([]);

//   useEffect(() => {
//     orbitRefs.current.forEach((orbit, i) => {
//       gsap.to(orbit, {
//         rotate: 360,
//         duration: 30 + i * 10,
//         repeat: -1,
//         ease: "linear",
//         transformOrigin: "50% 50%",
//       });
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-[100vh] bg-[#f7f5f2] overflow-hidden flex items-center justify-center"
//     >
//       {/* اللوجو الرئيسي */}
//       <div className="absolute w-[160px] h-[160px] rounded-full bg-white shadow-xl flex items-center justify-center z-20">
//         <img
//           src={mainLogo}
//           alt="Holding Logo"
//           className="w-[80%] h-[80%] object-contain"
//         />
//       </div>

//       {/* الدوائر */}
//       {[450, 650].map((size, i) => (
//         <div
//           key={i}
//           ref={(el) => (orbitRefs.current[i] = el)}
//           className="absolute rounded-full border border-black/10"
//           style={{ width: size, height: size }}
//         >
//           {/* اللوجوهات جوه كل دايرة */}
//           {(i === 0 ? holdings.slice(0, 3) : holdings.slice(3)).map(
//             (item, index) => {
//               const angle =
//                 (360 / (i === 0 ? 3 : holdings.length - 3)) * index;
//               const radius = size / 2 - 50;

//               return (
//                 <a
//                   key={index}
//                   href={item.link}
//                   className="absolute w-[70px] h-[70px] bg-white rounded-xl shadow-md flex items-center justify-center"
//                   style={{
//                     top: "50%",
//                     left: "50%",
//                     transform: `
//                       rotate(${angle}deg)
//                       translate(${radius}px)
//                       rotate(-${angle}deg)
//                     `,
//                   }}
//                 >
//                   <img
//                     src={item.logo}
//                     alt={item.text}
//                     className="w-[65%] h-[65%] object-contain"
//                   />
//                 </a>
//               );
//             }
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import centerLogo from "../../../assets/signatureProjects/mhc.png";
// import holdings from "../../../data/holding";

// export default function HoldingsOrbit() {
//   // أحجام أصغر
//   const leftRings = [130, 210, 290];
//   const rightRings = [130, 210, 290];

//   const offsetX = 340; // المسافة بين المركز والأقراص

//   const half = Math.ceil(holdings.length / 2);
//   const leftItems = holdings.slice(0, half);
//   const rightItems = holdings.slice(half);

//   const [rotationLeft, setRotationLeft] = useState(0);
//   const [rotationRight, setRotationRight] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotationLeft((p) => p + 0.25);
//       setRotationRight((p) => p - 0.25);
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   // عشوائية ثابتة للزوايا (مش بتتغير كل رندر)
//   const randAngles = useState(
//     holdings.map(() => Math.random() * Math.PI * 2)
//   )[0];

//   const renderRingItems = (items, rings, rotation, side) =>
//     rings.map((radius, ringIndex) =>
//       items.map((item, itemIndex) => {
//         const baseAngle = randAngles[itemIndex] || 0;
//         const finalAngle =
//           baseAngle + (rotation * Math.PI) / 180 * (ringIndex % 2 === 0 ? 1 : -1);

//         const x =
//           Math.cos(finalAngle) * radius +
//           (side === "left" ? -offsetX : offsetX);
//         const y = Math.sin(finalAngle) * radius;

//         return (
//           <div
//             key={`${item.text}-${ringIndex}`}
//             className="absolute"
//             style={{
//               transform: `translate(${x}px, ${y}px)`,
//             }}
//           >
//             <div className="bg-white p-2 rounded-xl shadow-md hover:scale-110 transition">
//               <img
//                 src={item.logo}
//                 alt={item.text}
//                 className="w-10 h-10 object-contain"
//               />
//             </div>
//           </div>
//         );
//       })
//     );

//   return (
//     <div className="relative w-full h-[850px] bg-[#faf9f7] flex items-center justify-center overflow-hidden">

//       {/* اللوجو الأساسي */}
//       <div className="absolute z-40 bg-white p-6 rounded-[40px] shadow-2xl">
//         <img
//           src={centerLogo}
//           className="w-28 h-28 object-contain"
//         />
//       </div>

//       {/* الحلقات اليسار */}
//       {leftRings.map((r, i) => (
//         <div
//           key={`left-ring-${i}`}
//           className="absolute rounded-full border border-gray-400/70"
//           style={{
//             width: r * 2,
//             height: r * 2,
//             transform: `translateX(-${offsetX}px)`,
//           }}
//         />
//       ))}

//       {/* الحلقات اليمين */}
//       {rightRings.map((r, i) => (
//         <div
//           key={`right-ring-${i}`}
//           className="absolute rounded-full border border-gray-400/70"
//           style={{
//             width: r * 2,
//             height: r * 2,
//             transform: `translateX(${offsetX}px)`,
//           }}
//         />
//       ))}

//       {/* لوجوهات اليسار */}
//       {renderRingItems(leftItems, leftRings, rotationLeft, "left")}

//       {/* لوجوهات اليمين */}
//       {renderRingItems(rightItems, rightRings, rotationRight, "right")}
//     </div>
//   );
// }

/////////////////////////////////////
import { useEffect, useState } from "react";
import centerLogo from "../../../assets/signatureProjects/mhc.png";
import holdings from "../../../data/holdinsOrbits";

export default function HoldingsOrbit() {
  const leftRings = [130, 210, 290];
  const rightRings = [130, 210, 290];
  const offsetX = 340;

  const [rotationLeft, setRotationLeft] = useState(0);
  const [rotationRight, setRotationRight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationLeft((p) => p + 0.25);
      setRotationRight((p) => p - 0.25);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // تقسيم اللوجوهات على الحلقات بدون تكرار
  const splitItems = (items, ringsCount) => {
    const perRing = Math.ceil(items.length / ringsCount);
    return Array.from({ length: ringsCount }, (_, i) =>
      items.slice(i * perRing, (i + 1) * perRing)
    );
  };

  const half = Math.ceil(holdings.length / 2);
  const leftItems = splitItems(holdings.slice(0, half), leftRings.length);
  const rightItems = splitItems(holdings.slice(half), rightRings.length);

  // زوايا عشوائية ثابتة
  const randAngles = useState(
    holdings.map(() => Math.random() * Math.PI * 2)
  )[0];

  const renderRingItems = (itemsByRing, rings, rotation, side) =>
    rings.map((radius, ringIndex) =>
      itemsByRing[ringIndex]?.map((item, itemIndex) => {
        const baseAngle = randAngles[itemIndex] || 0;
        const direction = ringIndex % 2 === 0 ? 1 : -1;

        const angle = baseAngle + ((rotation * Math.PI) / 180) * direction;

        const x =
          Math.cos(angle) * radius + (side === "left" ? -offsetX : offsetX);

        const y = Math.sin(angle) * radius;

        return (
          <div
            key={`${item.text}-${ringIndex}`}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div
              className="p-3 rounded-2xl hover:scale-110 transition"
              style={{ cursor: item.link ? "pointer" : "default" }}
              onClick={() => {
                if (item.link) {
                  // لو الرابط داخلي في الموقع (router)
                  if (item.link.startsWith("/")) {
                    window.location.href = item.link;
                  } else {
                    // لو رابط خارجي
                    window.open(item.link, "_blank");
                  }
                }
              }}
            >
              <img
                src={item.logo}
                alt={item.text}
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>
        );
      })
    );

  return (
    <div className="relative w-full h-[700px] bg-[#faf9f7] flex items-center justify-center overflow-hidden">
      {/* اللوجو الأساسي */}
      <div className="absolute z-30 bg-white p-6 rounded-[40px] shadow-2xl">
        <img src={centerLogo} className="w-28 h-28 object-contain" />
      </div>

      {/* حلقات اليسار */}
      {leftRings.map((r, i) => (
        <div
          key={`left-ring-${i}`}
          className="absolute rounded-full border border-mainGold/80"
          style={{
            width: r * 2,
            height: r * 2,
            transform: `translateX(-${offsetX}px)`,
          }}
        />
      ))}

      {/* حلقات اليمين */}
      {rightRings.map((r, i) => (
        <div
          key={`right-ring-${i}`}
          className="absolute rounded-full border border-mainGold/80"
          style={{
            width: r * 2,
            height: r * 2,
            transform: `translateX(${offsetX}px)`,
          }}
        />
      ))}

      {/* عناصر اليسار */}
      {renderRingItems(leftItems, leftRings, rotationLeft, "left")}

      {/* عناصر اليمين */}
      {renderRingItems(rightItems, rightRings, rotationRight, "right")}
    </div>
  );
}
