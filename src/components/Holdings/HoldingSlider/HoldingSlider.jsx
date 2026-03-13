import industriesHoldings from "../../../data/industriesHoldings";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
// import homeSlider from "../../../data/homeSlider";
import SliderAnimatedCard from "./SliderAnimatedCard";

export default function HoldingSlider() {
  return (
    <section className="py-6 md:py-16 overflow-hidden bg-[#faf9f7] relative text-center">
      <h3 className="heading-3 mb-4  text-center">
        <SectionHeader firstWord="OUR INDUSTRIES" />
      </h3>

      <h4 className="text-lg font-semibold text-gray-600">
        We invest where the world is built.
      </h4>
      <p className="mb-8 text-center max-w-[19rem] md:max-w-3xl mx-auto paragraph text-gray-600">
        MHC focuses on sectors that shape economies and define nations:
      </p>

      {/* الضباب */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-72 bg-gradient-to-r from-[#f9ecd2] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 md:w-72 bg-gradient-to-l from-[#f9ecd2] to-transparent z-10 pointer-events-none" />

      <div className="slider-wrapper mb-8">
        <div className="slider-track">
          {[...industriesHoldings, ...industriesHoldings].map((h, i) => (
            <SliderAnimatedCard key={i} title={h.title} />
          ))}
        </div>
      </div>

      <div className="text-center paragraph max-w-[19rem] md:max-w-3xl  mx-auto text-lg text-gray-600">
        Together, they form a strategic network — connected, agile, and built for global expansion.
      </div>

      <style>{`
        .slider-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .slider-track {
          display: flex;
          gap: 32px;
          animation: scroll 22s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
