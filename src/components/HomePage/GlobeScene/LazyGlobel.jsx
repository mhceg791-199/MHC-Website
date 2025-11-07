// src/components/LazyGlobe.jsx
import React, { useEffect, useRef, useState, Suspense } from "react";

// ✅ Lazy import للـ Globe الحقيقي
const Global = React.lazy(() => import("./Global"));

export default function LazyGlobe() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[90vh] w-full">
      {visible ? (
        <Suspense fallback={<div className="text-center py-20 text-white">Loading Globe...</div>}>
          <Global />
        </Suspense>
      ) : null}
    </div>
  );
}
