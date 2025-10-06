import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function InvestmentBrief() {
  return (
    <>
      <div className="mt-28 text-center">
        <SectionHeader firstWord="INVESTMENT" secondWord="APPROACH" />
        
        <div className="mt-6 max-w-4xl mx-auto">
          <Paragraph
            p="Mosaic Holding Corporation executes a disciplined investment philosophy that harmonizes financial precision, ethical governance, and client-aligned outcomes. Our integrated framework combines rigorous market intelligence with diversified portfolio optimization and advanced risk mitigation - creating a dynamic engine for sustainable value creation across market cycles."
          />
        </div>

        <div className="mt-8 h-[60vh] mx-auto">
          <img
            className="w-full h-full mx-auto rounded-lg object-cover"
            src="/investmentPage/killer2.jpg"
            alt="Investment"
          />
        </div>
      </div>
    </>
  );
}

export default InvestmentBrief;


