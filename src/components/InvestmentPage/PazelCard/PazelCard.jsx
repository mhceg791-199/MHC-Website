import React, { useEffect, useState } from "react";
import "./PazelCard.css";
function PazelCard({ data }) {
  const { title, text } = data;

  const [texts, setTexts] = useState("");
  const dividText = (text) => {
    const text1 = text.split(" ").slice(0, 22).join(" ");
    const text2 = text.split(" ").slice(22).join(" ");
    setTexts({ text1, text2 });
    return text1, text2;
  };

  useEffect(() => {
    dividText(text);
  }, []);

  return (
    <>
      <div className="rounded-2xl p-5 h-full   bg-[#34363B] ">
        <h3 className="text-mainGold mb-3">{title}</h3>
        <p className="text-white">
          {texts.text1}
          {texts.text2}
        </p>
      </div>
     
    </>
  );
}
// bg-[#34363B]
//    analysis, advanced risk management, & strong ethical standards to achieve long-term financial success.
export default PazelCard;
