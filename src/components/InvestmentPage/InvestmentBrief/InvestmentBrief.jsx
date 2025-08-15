import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function InvestmentBrief() {
  return (
    <>
      <div className="mt-28">
        <SectionHeader firstWord="INVESTMENT" secondWord="APPROACH" />
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <div className="mt-3">
              <Paragraph
                p="Mosaic Holding Corporation executes a disciplined investment philosophy that harmonizes financial precision, ethical governance, and client-aligned outcomes. Our integrated framework combines rigorous market intelligence with diversified portfolio optimization and advanced risk mitigation - creating a dynamic engine for sustainable value creation across market cycles. "
              />

              <img className="w-[70%]" src="./investmentPage/2.png" alt="" />
            </div>
          </div>

          <div className="col-span-1 m-auto">
            <img className="text-center" src="/investmentPage/1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestmentBrief;
