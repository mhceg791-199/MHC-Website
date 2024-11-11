import React from "react";
import InvestmentBrief from "../../components/InvestmentPage/InvestmentBrief/InvestmentBrief";
import PazelCard from "../../components/InvestmentPage/PazelCard/PazelCard";
import NormalCard from "../../components/InvestmentPage/NormalCard/NormalCard";
import Navbar from "../../components/shared/Navbar/Navbar";

function InvestmentPage() {
  const investmentDetails = {
    pz1: {
      title: "SUSTAINABLE GROWTH STRATEGY",
      text: "Mosaic Holding Corporation drives sustainable growth through a strategic, client-focused investment approach that combines rigorous analysis, advanced risk management, & strong ethical standards to achieve long-term financial success.",
    },
    pz2: {
      title: "DIVERSIFIED PORTFOLIOS",
      text: "We prioritize diversification to manage risk and ensure steady returns. By spreading assets across sectors and regions, our portfolios remain resilient and adaptable, supporting clients' long-term financial goals amid market changes",
    },
    pz3: {
      title: "TRANSPARENCY & AGILITY",
      text: "Mosaic Holding Corporation is dedicated to transparent operations, offering clients regular, detailed performance reports that foster trust. Our adaptive approach ensures tailored investment solutions that align with market dynamics and each client's unique needs, driving long-term success and sustainability",
    },
    normal1: {
      title: "COMPREHENSIVE MARKET ANALYSIS",
      text: "Our investment strategy is guided by expert analysts who rigorously research market trends, global indicators, and new opportunities. This approach enables adaptive, growth-focused strategies that balance short-term agility with long-term resilience for our clients.",
    },
    normal2: {
      title: "VALUE-DRIVEN INVESTMENTS",
      text: "We invest in high-potential companies with strong fundamentals and market resilience, prioritizing long-term growth and stable returns. This approach ensures enduring value and maximizes clients’ capital.",
      className: "bg-[#E2C595]",
    },
    normal3: {
      title: "ADVANCED RISK MANAGEMENT",
      text: "Our risk management approach is core to our investment philosophy, combining advanced analytics and proactive strategies to mitigate market volatility and optimize returns. This dynamic framework safeguards capital and empowers clients to pursue their financial goals confidently.",
    },
  };
  return (
    <>
      <Navbar />
      <div className="md:px-10 px-5">
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
            <NormalCard data={investmentDetails.normal2} />
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
