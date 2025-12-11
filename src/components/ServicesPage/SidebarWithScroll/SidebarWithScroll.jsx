import { useState } from "react";
import DotGrid from "../DotGrid/DotGrid";

const sections = [
  {
    title: "01 — ACQUISITION & ELEVATION",
    nameTobic: "ACQUISITION",
    content: (
      <>
        <p>We acquire exceptional companies and build their global futures.</p>

        <p className="mt-4 font-semibold">MHC specializes in acquiring:</p>
        <ul className="list-disc ml-6 mt-1">
          <li>Strong family businesses</li>
          <li>Founder-led firms</li>
          <li>High-performing mid-cap companies</li>
        </ul>

        <p className="mt-4 font-semibold">We elevate them through:</p>
        <ul className="list-disc ml-6 mt-1">
          <li>Global expansion strategy</li>
          <li>Corporate-level governance</li>
          <li>Technology & digital transformation</li>
          <li>AI-powered operational systems</li>
          <li>Financial structuring</li>
          <li>Talent development & leadership architecture</li>
          <li>Cross-company synergy</li>
        </ul>
      </>
    ),
  },

  {
    title: "02 — PROJECT DELIVERY SUPPORT (A–Z CLIENT JOURNEY)",
    nameTobic: "DELIVERY",
    content: (
      <>
        <p>
          We support every project — from the first conversation to long-term
          performance.
        </p>

        <h3 className="mt-5 font-semibold">Initial Consultation</h3>
        <p>Understanding vision, pressure points, and priorities.</p>

        <h3 className="mt-5 font-semibold">Strategic Planning</h3>
        <p>Risk mapping, timelines, feasibility, technology assessment.</p>

        <h3 className="mt-5 font-semibold">Design & Engineering</h3>
        <p>
          Full Architecture & Engineering (A&E) scope with advanced digital
          tools and integrated delivery.
        </p>

        <h3 className="mt-5 font-semibold">Implementation & Oversight</h3>
        <p>
          Quality, speed, contract management, integrated workflows across
          regions.
        </p>

        <h3 className="mt-5 font-semibold">Delivery & Lifecycle</h3>
        <p>
          Operational support, sustainability compliance, long-term continuity.
        </p>

        <p className="mt-5 font-bold">
          One standard. One ecosystem. One Mosaic.
        </p>
      </>
    ),
  },

  {
    title: "03 — INDUSTRY CAPABILITIES",
    nameTobic: "INDUSTRY",
    content: (
      <>
        <p>Specialized expertise across sectors that shape economies.</p>

        <h3 className="mt-5 font-semibold">Architecture & Engineering</h3>
        <p>Design, technical excellence, integrated project delivery.</p>

        <h3 className="mt-5 font-semibold">Structural Engineering</h3>
        <p>
          Modular systems, high-rise, industrial, and advanced technical
          solutions.
        </p>

        <h3 className="mt-5 font-semibold">
          Real Estate & Property Development
        </h3>
        <p>
          Concept development, feasibility, design, and execution alignment.
        </p>

        <h3 className="mt-5 font-semibold">Oil & Gas</h3>
        <p>Infrastructure design, operational support, engineering systems.</p>

        <h3 className="mt-5 font-semibold">Marine & Offshore Structures</h3>
        <p>Coastal, ports, maritime engineering solutions.</p>

        <h3 className="mt-5 font-semibold">Energy & Infrastructure</h3>
        <p>Power systems, pipelines, sustainable energy planning.</p>
      </>
    ),
  },

  {
    title: "04 — TECHNOLOGY & DIGITAL TRANSFORMATION",
    nameTobic: "TECHNOLOGY",
    content: (
      <>
        <p>We modernize operations, delivery, and decision-making.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>AI-driven project management</li>
          <li>Digital engineering platforms</li>
          <li>ERP integration</li>
          <li>Cyber & data security frameworks</li>
          <li>Predictive analytics</li>
          <li>Automation & workflow optimization</li>
        </ul>
      </>
    ),
  },

  {
    title: "05 — GLOBAL EXPANSION & MARKET ENTRY",
    nameTobic: "GLOBAL",
    content: (
      <>
        <p> We open new markets for our companies — and new horizons for their clients.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Canada & USA</li>
          <li>Middle East & North Africa</li>
          <li>Gulf region emerging opportunities</li>
          <li>Cross-border compliance & localization</li>
          <li>Regional strategy & leadership placement</li>
        </ul>
      </>
    ),
  },
];

export default function FullPageWidget() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r p-6 space-y-3 overflow-y-auto">
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition
              ${
                active === i
                  ? "bg-mainGold text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {section.nameTobic}
          </button>
        ))}
      </aside>

      {/* Content Area */}
      <main className="flex-1 relative overflow-hidden">
        <div className="relative w-full h-full">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#f7f5f5"
            activeColor="#C5A363"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full transition-transform duration-500"
          style={{ transform: `translateY(-${active * 100}vh)` }}
        >
          {sections.map((section, i) => (
            <section key={i} className="w-full h-screen p-16 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              <div className="text-gray-700 leading-relaxed text-lg">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
