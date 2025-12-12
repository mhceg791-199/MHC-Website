import { motion } from "framer-motion";

// تعريف الألوان الجديدة كمتغيرات CSS
const COLORS = {
  mainGold: "#C5A363",
  secondGold: "rgba(197, 163, 99, 0.5)",
  lightGray: "#EDEDED",
};

// متغيرات حركة ظهور النص
const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  }, // حركة بطيئة وفخمة
};

// متغيرات حركة ظهور البطاقات
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function WhoWeAreSection() {
  return (
    // الخلفية رمادية فاتحة جداً
    <section
      style={{ backgroundColor: COLORS.lightGray }}
      className="relative w-full overflow-hidden text-gray-800 py-4 md:py-16"
    >
      {/* 1. تأثير النقش/الختم الذهبي الخفيف في الخلفية */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          // إضافة خطوط أو شبكة خفيفة جداً بلون ذهبي ثانوي
          backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.secondGold}, ${COLORS.secondGold} 2px, transparent 2px, transparent 20px)`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-2 md:gap-12">
          {/* العمود الأيسر: العنوان والقيمة الأساسية */}
          <div className="lg:col-span-5 space-y-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              <span style={{ color: COLORS.mainGold }}>WHO WE ARE</span>
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-2xl lg:text-4xl font-bold leading-tight border-b-4 pb-4 !mt-2"
              style={{ borderColor: COLORS.mainGold }} // الخط الذهبي الفاصل
            >
              We Create the Models Others Try to Follow.
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 font-medium"
            >
              MHC is built for one mission: to transform strong companies into
              global leaders —{" "}
              <span
                style={{ color: COLORS.mainGold }}
                className="font-semibold"
              >
                without changing the soul that made them great.
              </span>
            </motion.p>
          </div>

          {/* العمود الأيمن: المحتوى التفصيلي والدمج */}
          <div className="lg:col-span-7 pt-4">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              transition={{ delay: 0.5 }}
              className="text-base text-gray-600 mb-10 border-l-4 pl-4"
              style={{ borderColor: COLORS.secondGold }} // خط فاصل خفيف
            >
              We give acquired businesses the firepower of a modern investment
              firm — structure, governance, systems, AI-powered operations, and
              risk mitigation — while preserving their culture, founders,
              relationships, and client trust.
            </motion.p>

            {/* شريط أفضل ما في العالمين (Best of Both Worlds) */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                The best of both worlds:
              </h3>

              {/* البطاقات مع حركة الظهور المتتابعة */}
              {["Clients", "Companies", "MHC"].map((label, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="p-5 rounded-lg shadow-md relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
                  style={{ borderLeft: `5px solid ${COLORS.mainGold}` }} // شريط ذهبي سميك
                >
                  <span
                    className="text-lg font-extrabold block"
                    style={{ color: COLORS.mainGold }}
                  >
                    {label}
                  </span>
                  <p className="text-gray-700 text-sm mt-1">
                    {label === "Clients" &&
                      "Still work with the people they trust, maintaining continuity and strong relationships."}
                    {label === "Companies" &&
                      "Scale with modern, international capabilities and robust, AI-powered systems."}
                    {label === "MHC" &&
                      "Provides the global strategy, capital, and operational engine behind their exponential growth."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
