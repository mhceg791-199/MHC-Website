// import { Link } from "react-router-dom";
// import marqueeLinks from "../../../data/marqueeLinks";

// function Marquee() {
//   return (
//     <div className="absolute z-20 left-1/2 bg-white -translate-x-1/2 bottom-[110px] w-2/3 overflow-hidden border-2 border-mainGold rounded-full group">
//       <div className="marquee-wrapper flex">
//         {/* First version */}
//         <div className="marquee flex items-center whitespace-nowrap bg-white py-3 px-8 space-x-16">
//           {marqueeLinks.map((link, i) => (
//             <Link
//               key={`a-${i}`}
//               to={link.to}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-black text-sm md:text-base hover:opacity-80 hover:text-mainGold transition"
//             >
//               <img src={link.img} alt={link.name} className="w-10 h-10 object-contain" loading="lazy" />
//               <span className="text-md md:text-xl font-medium">{link.name}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Second version (بتخلي الحركة مستمرة) */}
//         <div className="marquee flex items-center whitespace-nowrap bg-white py-3 px-8 space-x-16">
//           {marqueeLinks.map((link, i) => (
//             <Link
//               key={`b-${i}`}
//               to={link.to}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-black text-sm md:text-base hover:opacity-80 hover:text-mainGold transition"
//             >
//               <img src={link.img} alt={link.name} className="w-10 h-10 object-contain" loading="lazy" />
//               <span className="text-md md:text-xl font-medium">{link.name}</span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Marquee;
import { Link } from "react-router-dom";
import marqueeLinks from "../../../data/marqueeLinks";

function Marquee() {
  return (
    <div
      className="absolute z-20 left-1/2 bottom-[130px] md:bottom-[110px] -translate-x-1/2 w-[min(80%,1024px)] overflow-hidden border-2 border-mainGold rounded-full bg-white group"
      role="region"
      aria-label="Partners marquee"
    >
      <div className="marquee-wrapper flex will-change-transform">
        {/* duplicate content for seamless loop */}
        {[0, 1].map((block) => (
          <div
            key={block}
            className="marquee flex items-center whitespace-nowrap bg-white py-3 px-8 space-x-16"
            aria-hidden={block === 1 ? "true" : "false"}
          >
            {marqueeLinks.map((link, i) => (
              <Link
                key={`${block}-${i}`}
                to={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black text-sm md:text-base hover:opacity-90 hover:text-mainGold transition-colors"
              >
                <img
                  src={link.img}
                  alt={link.name}
                  className="w-10 h-10 object-contain flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-md md:text-lg font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
