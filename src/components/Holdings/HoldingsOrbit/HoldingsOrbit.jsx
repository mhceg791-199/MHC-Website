import { useEffect, useState } from "react";
import centerLogo from "../../../assets/signatureProjects/mhc.png";
import holdings from "../../../data/holdinsOrbits";

export default function HoldingsOrbit() {
  /* ================= RESPONSIVE ================= */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  /* ================= FILTER DATA ================= */
  const filteredHoldings = isMobile
    ? holdings.filter((item) => item.mobile === true)
    : holdings;

  /* ================= CONFIG ================= */
  // Desktop
  const leftRings = [130, 210, 290];
  const rightRings = [130, 210, 290];
  const offsetX = 340;

  // Mobile
  const mobileRings = [120, 180];

  /* ================= ROTATION ================= */
  const [rotationLeft, setRotationLeft] = useState(0);
  const [rotationRight, setRotationRight] = useState(0);
  const [rotationMobile, setRotationMobile] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationLeft((p) => p + 0.25);
      setRotationRight((p) => p - 0.25);
      setRotationMobile((p) => p + 0.2);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  /* ================= HELPERS ================= */
  const splitItems = (items, ringsCount) => {
    const perRing = Math.ceil(items.length / ringsCount);
    return Array.from({ length: ringsCount }, (_, i) =>
      items.slice(i * perRing, (i + 1) * perRing)
    );
  };

  const half = Math.ceil(filteredHoldings.length / 2);

  const leftItems = splitItems(
    filteredHoldings.slice(0, half),
    leftRings.length
  );

  const rightItems = splitItems(
    filteredHoldings.slice(half),
    rightRings.length
  );

  const mobileItems = splitItems(filteredHoldings, mobileRings.length);

  /* زوايا عشوائية ثابتة */
  const [randAngles] = useState(
    filteredHoldings.map(() => Math.random() * Math.PI * 2)
  );

  /* ================= RENDER ITEMS ================= */
  const renderRingItems = (itemsByRing, rings, rotation, side = "center") =>
    rings.map((radius, ringIndex) =>
      itemsByRing[ringIndex]?.map((item, itemIndex) => {
        const baseAngle = randAngles[itemIndex] || 0;
        const direction = ringIndex % 2 === 0 ? 1 : -1;
        const angle = baseAngle + ((rotation * Math.PI) / 180) * direction;

        let x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;

        if (side === "left") x -= offsetX;
        if (side === "right") x += offsetX;

        return (
          <div
            key={`${item.text}-${ringIndex}-${itemIndex}`}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div
              className="p-3 rounded-2xl hover:scale-110 transition"
              style={{ cursor: item.link ? "pointer" : "default" }}
              onClick={() => {
                if (!item.link) return;
                item.link.startsWith("/")
                  ? (window.location.href = item.link)
                  : window.open(item.link, "_blank");
              }}
            >
              <img
                src={item.logo}
                alt={item.text}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
          </div>
        );
      })
    );

  /* ================= JSX ================= */
  return (
    <div className="relative w-full h-[470px] md:h-[700px] bg-[#faf9f7] flex items-center justify-center overflow-hidden">
      {/* ================= CENTER LOGO ================= */}
      <div className="absolute z-30 bg-white p-6 rounded-[40px] shadow-2xl">
        <img
          src={centerLogo}
          className="w-24 h-24 md:w-28 md:h-28 object-contain"
          alt="MHC"
        />
      </div>

      {/* ================= MOBILE ================= */}
      {isMobile && (
        <>
          {mobileRings.map((r, i) => (
            <div
              key={`mobile-ring-${i}`}
              className="absolute rounded-full border border-mainGold/80"
              style={{ width: r * 2, height: r * 2 }}
            />
          ))}

          {renderRingItems(mobileItems, mobileRings, rotationMobile)}
        </>
      )}

      {/* ================= DESKTOP ================= */}
      {!isMobile && (
        <>
          {leftRings.map((r, i) => (
            <div
              key={`left-ring-${i}`}
              className="absolute rounded-full border border-mainGold/80"
              style={{
                width: r * 2,
                height: r * 2,
                transform: `translateX(-${offsetX}px)`,
              }}
            />
          ))}

          {rightRings.map((r, i) => (
            <div
              key={`right-ring-${i}`}
              className="absolute rounded-full border border-mainGold/80"
              style={{
                width: r * 2,
                height: r * 2,
                transform: `translateX(${offsetX}px)`,
              }}
            />
          ))}

          {renderRingItems(leftItems, leftRings, rotationLeft, "left")}
          {renderRingItems(rightItems, rightRings, rotationRight, "right")}
        </>
      )}
    </div>
  );
}