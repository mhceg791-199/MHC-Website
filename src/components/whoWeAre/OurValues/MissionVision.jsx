import { motion } from "framer-motion";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

export default function MissionVision() {
  const data = [
    {
      title: "MISSION",
      description:
        "A modern investment firm that acquires and elevates mid-cap firms, integrating them into a unified structure driven by agility, synergy, and trust. By preserving leadership and empowering people, Mosaic builds a flexible, customer-centric, and globally connected ecosystem for lasting performance.",
    },
    {
      title: "VISION",
      description:
        "To redefine investment firms through a next-generation model of agility, flexibility, and synergy — creating a global ecosystem where architecture and engineering firms grow together while staying customer-centric and true to their identity. Mosaic stands in a league of its own.",
    },
  ];

  return (
    <section className="relative pt-3 pb-16 overflow-hidden">
      {/* خطوط متحركة في الخلفية */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 relative z-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04 }} // ✅ دي أهم سطر
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white/60 backdrop-blur-xl rounded-[30px] p-12 shadow-xl border border-black/5 cursor-pointer"
          >
            {/* Glow خلفي */}
            <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-mainGold/[0.2] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* العنوان */}
            <h3 className="tracking-wide mb-6 text-mainGold">
              <SectionHeader firstWord={item.title} />
            </h3>

            {/* الوصف */}
            <p className="text-gray-600 leading-relaxed text-lg">
              {item.description}
            </p>

            {/* تأثير ضوئي وقت الهوفر */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 w-28 h-28 bg-mainGold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
