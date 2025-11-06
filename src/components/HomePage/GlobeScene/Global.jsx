import GlobeScene from "./GlobeScene";
import GlobalContent from "./GlobalContent";

export default function Global() {
  return (
    <section
      className="
        flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-screen gap-8  md:px-12 px-5 py-10
         bg-[#050b11] text-white relative overflow-hidden"
    >
      {/* LEFT SIDE CONTENT */}
      <GlobalContent/>

      {/* RIGHT SIDE - Globe */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative z-0">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px]">
          <GlobeScene />
        </div>
      </div>
    </section>
  );
}