import MhcInNumber from "../mhcInNumbers/mhcInNumber";

export default function GlobalContent() {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 relative">
      <h2 className="heading-3 font-bold mb-6 leading-tight">
        We Build <span className="text-mainGold">Global Impact</span>
      </h2>

      <p className="text-gray-300 mb-8 md:max-w-[450px] paragraph leading-relaxed">
        Headquartered in Calgary with hubs in Florida and Cairo, MHC is expanding its footprint across continents — building diversity, growth, and global impact through every project.
      </p>

      {/* Numbers Section */}
      <div className="w-full max-w-[500px]">
        <MhcInNumber />
      </div>
    </div>
  );
}
