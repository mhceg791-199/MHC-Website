import { useNavigate } from "react-router-dom";

const words = [
  "Customer-centric",
  "Scalable",
  "Fast",
  "Flexible",
  "Tech-driven",
  "Global by design",
];

export default function ArcWithLogo() {
  const radius =
    window.innerWidth < 640
      ? 140
      : window.innerWidth < 768
      // ? 190
      // : window.innerWidth < 1024
      ? 230
      : 280;

  const navigate = useNavigate();
  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };

  return (
    <div className="relative w-full bg-[#050b11] flex flex-col items-center pt-0 overflow-visible pb-16">
      {/* ===== نصف الدائرة ===== */}
      <div
        className="
        absolute top-[-145px] md:top-[-100px]
        w-[290px] md:w-[400px] h-[300px]
        border-b border-mainGold
        rounded-b-full
        "
      />

      {/* ===== اللوجو ===== */}
      <div className="absolute top-[-42px] left-1/2 -translate-x-1/2">
        <div className="w-24 h-24 rounded-full border-4 border-white bg-white flex items-center justify-center animate-pulseSlow">
          <img src="/logo-c.png" className="w-14 h-14" />
        </div>
      </div>

      {/* ===== الكلمات حول نصف الدائرة ===== */}
      {/* {words.map((text, i) => {
        const angle = Math.PI * (i / (words.length - 1)); // 0 → 180 degrees
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={i}
            className="absolute text-gray-200 paragraph opacity-70"
            style={{
              left: `calc(45.8% + ${x}px)`,
              top: `${y}px`,
            }}
          >
            {text}
          </div>
        );
      })} */}
      {words.map((text, i) => {
        const angle = Math.PI * (i / (words.length - 1)); // 0 → 180 degrees
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        // تحريك الكلمات حسب حجم الشاشة
        const leftShift =
          window.innerWidth < 640
            ? "50%" // موبايل
            : window.innerWidth < 1024
            ? "48%" // تابلت
            : "45.8%"; // ديسكتوب

        return (
          <div
            key={i}
            className="
        absolute text-gray-200 paragraph mt-4 opacity-70
        text-xs sm:text-sm md:text-base responsive md:ms-16
      "
            style={{
              left: `calc(${leftShift} + ${x}px)`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)", // تثبيت أفضل
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </div>
        );
      })}

      {/* ===== خطوط نازلة ===== */}
      <svg className="absolute top-[53px] left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="50%"
            y1="0"
            x2="50%"
            y2="1000"
            stroke="#C5A363"
            strokeWidth="1.5"
            className="beam-line"
            style={{
              opacity: 0.35,
              transformOrigin: "50% 0",
              transform: `rotate(${(i - 6) * 8}deg)`,
              animationDelay: `${i * 0.22}s`,
            }}
          />
        ))}
      </svg>

      {/* ===== المحتوى النصّي المضاف ===== */}
      <div
        className="
    relative z-10 mt-[320px] text-center text-white max-w-2xl px-6 py-8
    backdrop-blur-md bg-white/20 rounded-2xl
    border border-white/10 shadow-xl mx-3
  "
      >
        <h2 className="text-mainGold heading-3 font-bold mb-3 tracking-wide">
          OUR MOSAIC MODEL
        </h2>

        <p className="text-gray-300 text-lg mb-4">
          A Modern, Agile, Flexible Blueprint for Global Expansion
        </p>

        <p className="text-gray-400 mb-4 leading-relaxed">
          We don’t apply one model to every company — we build an investment
          model for each company. Our framework adapts to the DNA of every firm
          we acquire:
        </p>

        <p className="text-gray-400 leading-relaxed mb-4">
          This is why we maintain one of the highest retention rates in the
          industry — and why our companies outperform the market.
        </p>

        <button
          onClick={() => handleNavigate("/who-we-are", "firstSection")}
          className="inline-block mt-6 bg-mainGold text-white py-3 px-6 rounded-lg font-semibold"
        >
          Explore Our Story
        </button>
      </div>
    </div>
  );
}
