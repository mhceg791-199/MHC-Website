import { useState } from "react";
import TextWirhArrow from "../../shared/TextWithArrow/TextWirhArrow";
import { useNavigate } from "react-router-dom";
import accordionitems from "../../../data/accordionInfo";

function AccordionInfo() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();
  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };

  

  return (
    <div className="w-full md:w-1/2">
      {accordionitems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center py-5 transition-colors duration-300 ${
                isOpen
                  ? "text-mainGold font-semibold"
                  : "text-slate-800 hover:text-mainGold/70"
              }`}
            >
              <span className="heading-3">
                {item.title}
              </span>
              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-mainGold" : "text-slate-800"
                }`}
              >
                {isOpen ? (
                  // Minus icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                ) : (
                  // Plus icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-0 ${
                isOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="text-slate-500 paragraph">
                {item.content}
              </div>
              <div
                onClick={() => handleNavigate(item.page, "firstSection")}
                className="py-2"
              >
                <TextWirhArrow
                  className="justify-start mt-auto cursor-pointer"
                  text="Read More"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AccordionInfo;
