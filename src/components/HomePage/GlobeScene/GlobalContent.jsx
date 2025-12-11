import MhcInNumber from "../mhcInNumbers/mhcInNumber";

export default function GlobalContent() {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 relative">
     <h2 className="heading-3 font-bold mb-6 leading-tight">
        GLOBAL PRESENCE
      </h2>
      <h4 className="text-base md:text-2xl font-semibold mb-2 leading-tight">
        A Global Footprint.
        <span className="text-mainGold"> A Unified Vision.</span>
      </h4>

      <p className="text-gray-300 md:max-w-[450px] paragraph leading-relaxed">
        With offices in Calgary, Florida, and Cairo, and more than 4,000 global
        projects delivered across 20+ countries, MHC stands at the intersection
        of Western innovation and Middle Eastern development.{" "}
      </p>

      <p className="text-gray-300 mb-8 md:max-w-[450px] paragraph leading-relaxed">
        We operate where growth is accelerating, where cities are rising, and
        where industries are transforming.
      </p>

      {/* Numbers Section */}
      <div className="w-full max-w-[500px]">
        <MhcInNumber />
      </div>
    </div>
  );
}
