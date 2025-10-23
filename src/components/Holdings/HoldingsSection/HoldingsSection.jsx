import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import holdings from "../../../data/holding";

function HoldingsSection() {
  const navigate = useNavigate();
  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };

  

  return (
    <section className="w-full py-10 bg-gradient-to-b from-gray-50 to-white shadow-md">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:my-5 xl:w-[80%] w-[90%] mx-auto">
        {holdings.map((hold, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => handleNavigate(hold.link, "firstSection")}
            className="group flex items-center gap-5 bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-tr from-lightGray to-gray-100 overflow-hidden">
              <img
                src={hold.logo}
                alt={hold.text}
                className="object-contain w-14 h-14 transition-transform duration-300 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                loading="lazy"
              />
            </div>

            <p className="text-gray-700 font-medium paragraph group-hover:text-mainGold transition-colors duration-300">
              {hold.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HoldingsSection;