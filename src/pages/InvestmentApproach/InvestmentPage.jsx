import  { useRef } from "react";
import InvestmentBrief from "../../components/InvestmentPage/InvestmentBrief/InvestmentBrief";
import PazelCard from "../../components/InvestmentPage/PazelCard/PazelCard";
import NormalCard from "../../components/InvestmentPage/NormalCard/NormalCard";
import Navbar from "../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../Hooks/useScrollToSection.js";

function InvestmentPage() {
  const firstSection = useRef(null);


  const refs = {
    firstSection: firstSection,

  };

  useScrollToSection(refs);
  const investmentDetails = {
    pz1: {
      title: "Sophisticated Risk Mitigation Framework",
      text: "Our risk management paradigm forms a core pillar of our investment philosophy, integrating advanced analytical models with proactive hedging strategies to navigate market volatility and optimize performance. This comprehensive framework safeguards investor capital while empowering the confident pursuit of strategic growth objectives.",
    },
    pz2: {
      title: "Sustainable Value Creation Philosophy",
      text: "Mosaic Holding Corporation drives enduring growth through a disciplined investment framework that blends rigorous due diligence, structured risk controls, and steadfast ethical governance. This unified approach ensures sustained financial excellence while fostering resilience, accountability, and long-term stakeholder value.",
    },
    pz3: {
      title: "Fundamentals-Driven Investment Selection",
      text: "We strategically deploy capital toward enterprises with strong fundamentals, resilient market positions, and scalable operational models. This disciplined methodology balances sustainable value creation with prudent capital preservation, ensuring consistent returns and enduring growth through all market cycles.",
    },
    normal1: {
      title: "Comprehensive Market Intelligence",
      text: "Our investment methodology is steered by a cadre of specialized analysts who conduct exhaustive examinations of macroeconomic trends, emerging sector opportunities, and global financial indicators. This disciplined approach facilitates dynamic, growth-oriented strategies that harmonize tactical responsiveness with structural stability for our clientele.",
    },
    normal2: {
      title: "Transparent Governance & Adaptive Execution",
      text: "Mosaic Holding Corporation upholds rigorous transparency standards, providing stakeholders with detailed performance analytics that reinforce institutional trust. Our adaptive execution model delivers bespoke, data-driven solutions aligned with client priorities and evolving market dynamics, ensuring precision and consistency across all operations.",
      className: "bg-[#E2C595]",
    },
    normal3: {
      title: "Strategically Diversified Asset Allocation",
      text: "We employ deliberate diversification across geographies and industry verticals to construct resilient portfolios. This measured approach ensures consistent performance while maintaining strategic flexibility to capitalize on evolving global opportunities. Through continuous monitoring and adaptive rebalancing, we sustain optimal risk-adjusted returns and long-term portfolio strength.",
    },
  };
  return (
    <>
      <Navbar />
      <div ref={firstSection} className="md:px-10 px-5">
        <InvestmentBrief />
        <div className="my-10 gap-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="lg:col-span-1 md:col-span-1 col-span-1">
            <PazelCard data={investmentDetails.pz1} />
          </div>
          <div className="lg:col-span-2 md:col-span-1 col-span-1">
            <NormalCard data={investmentDetails.normal1} />
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-1">
            <PazelCard data={investmentDetails.pz2} />
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-1">
            <PazelCard data={investmentDetails.normal2} />
          </div>
          <div className="lg:col-span-2 md:col-span-1 col-span-1">
            <NormalCard data={investmentDetails.normal3} />
          </div>
          <div className="lg:col-span-1 md:col-span-1 col-span-1">
            <PazelCard data={investmentDetails.pz3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestmentPage;
