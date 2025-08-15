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
      text: "Our risk management paradigm constitutes a fundamental pillar of our investment ethos, integrating cutting-edge analytical models with preemptive hedging strategies to navigate market volatility while optimizing performance. This sophisticated apparatus protects investor capital while enabling confident pursuit of strategic objectives.",
    },
    pz2: {
      title: "Sustainable Value Creation Philosophy",
      text: "Mosaic Holding Corporation cultivates enduring growth through a principled investment framework that synthesizes rigorous due diligence, comprehensive risk protocols, and unwavering ethical governance to deliver sustained financial excellence.",
    },
    pz3: {
      title: "Fundamentals-Driven Investment Selection",
      text: "We strategically allocate capital to enterprises demonstrating robust underlying economics, defensible market positions, and scalable operational models. This disciplined methodology prioritizes sustainable value accretion while optimizing capital preservation across market cycles.",
    },
    normal1: {
      title: "Comprehensive Market Intelligence",
      text: "Our investment methodology is steered by a cadre of specialized analysts who conduct exhaustive examination of macroeconomic trends, emerging sector opportunities, and global financial indicators. This disciplined approach facilitates dynamic, growth-oriented strategies that harmonize tactical responsiveness with structural stability for our clientele.",
    },
    normal2: {
      title: "Transparent Governance & Adaptive Execution",
      text: "Mosaic Holding Corporation maintains rigorous transparency standards, providing stakeholders with granular performance analytics to foster institutional trust. Our nimble execution framework delivers bespoke solutions attuned to both client-specific requirements and prevailing market conditions, ensuring optimal alignment with long-term objectives.",
      className: "bg-[#E2C595]",
    },
    normal3: {
      title: "Strategically Diversified Asset Allocation",
      text: "We employ deliberate diversification across geographies and industry verticals to construct resilient portfolios. This measured approach ensures consistent performance while maintaining strategic flexibility to capitalize on evolving global opportunities.",
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
