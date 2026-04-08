import blocks from "../../../data/blocks";

export default function HoldingsCircularCluster() {
  const radius = 180;

  return (
    <div className="relative w-full md:w-2/3 flex justify-center items-center py-20">
      {/* ✅ Mobile Layout: Grid 2 Columns */}
      <div className="grid grid-cols-2 gap-5 px-5 sm:hidden w-full place-items-center">
        {/* Main logo first */}
        <div className="col-span-2 flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full bg-white shadow-xl border-4 border-[#C5A363] flex items-center justify-center">
            <img
              src="/images/mhc.jpg"
              className="w-16 h-16 object-contain"
              alt="Main Logo"
            />
          </div>
        </div>

        {/* Companies */}
        {blocks.map((item, i) => (
          <div
            key={i}
            className="bg-white w-32 p-3 rounded-xl shadow-md flex flex-col gap-2 items-center justify-center"
          >
            <img
              src={item.img}
              className="w-14 h-14 object-contain"
              alt={item.name}
            />
            <p className="text-sm text-gray-800 text-center mt-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Desktop Circular Layout */}
      <div className="hidden sm:flex relative w-2/3 justify-center items-center">
        {/* Main Logo */}
        <div className="relative z-20">
          <div className="w-36 h-36 rounded-full bg-white shadow-xl border-4 border-[#C5A363] flex items-center justify-center">
            <img
              src="/images/mhc.png"
              className="w-24 h-24 object-contain"
              alt="Main Logo"
            />
          </div>
        </div>

        {/* Circular Companies */}
        {blocks.map((company, index) => {
          const angle = (index / blocks.length) * 2 * Math.PI;
          const randomOffset = Math.random() * 35 - 18;
          const x = (radius + randomOffset) * Math.cos(angle);
          const y = (radius + randomOffset) * Math.sin(angle);

          return (
            <div
              key={index}
              className="group absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              {/* Card */}
              <div className="bg-white w-28 shadow-lg rounded-xl p-5 border border-gray-100 transition-transform group-hover:scale-110 relative">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-14 h-14 mx-auto object-contain"
                />
              </div>

              {/* ✅ Tooltip Name (Appears Outside the Card) */}
              <div
                className="
          absolute left-1/2 -bottom-6 
          -translate-x-1/2 opacity-0 pointer-events-none
          group-hover:opacity-100 group-hover:-bottom-10
          transition-all duration-300
          bg-black text-white text-xs px-3 py-1 rounded-lg shadow-lg
          whitespace-nowrap
        "
              >
                {company.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
