// import React, { useEffect, useRef, useState, Suspense } from "react";

// // ✅ Lazy import للـ Globe الحقيقي
// const Global = React.lazy(() => import("./Global"));

// export default function LazyGlobe() {
//   const ref = useRef();
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="min-h-[90vh] w-full">
//       {visible ? (
//         <Suspense fallback={<div className="text-center py-20 text-white">Loading Globe...</div>}>
//           <Global />
//         </Suspense>
//       ) : null}
//     </div>
//   );
// }
import { useEffect, useRef, useState, Suspense } from "react";
import Global from "./Global";

// const Global = React.lazy(() => import("./Global"));

export default function LazyGlobe() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

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

  // ✅ فعل الأنيميشن بعد ظهور المكون
  useEffect(() => {
    if (visible) {
      setTimeout(() => setFadeIn(true), 50);
    }
  }, [visible]);

  return (
    <div ref={ref} className="min-h-[90vh] w-full">
      {visible ? (
        <Suspense fallback={<div className="text-center py-20 text-white">Loading Globe...</div>}>

          {/* ✅ أنيميشن دخول ناعم — من غير ما نلعب في الـ width */}
          <div
            className={`
              transition-opacity duration-[100ms] ease-out
              ${fadeIn ? "opacity-100" : "opacity-0"}
            `}
          >
            <Global />
          </div>

        </Suspense>
      ) : null}
    </div>
  );
}
