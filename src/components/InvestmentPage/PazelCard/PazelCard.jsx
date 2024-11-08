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
      <div className="rounded-2xl p-10 pb-0 bg-[#34363B]  rounded-bl-none">
        <h3 className="text-mainGold mb-3">{title}</h3>
        <p className="text-white">{texts.text1}</p>
      </div>
      <div className="rounded-2xl   rounded-br-2xl  ">
        <div className="grid grid-cols-5 ">
          <div className="col-span-4 pb-10 ps-10 rounded-tl-none  rounded-2xl rounded-tr-none bg-[#34363B]">
            <p className="text-white ">{texts.text2}</p>
          </div>
          <div className="col-span-1 relative bg-white rounded-2xl rounded-r-none rounded-bl-none">
            <div className="absolute w-full h-full bg-[#34363B] -z-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}
// bg-[#34363B]
//    analysis, advanced risk management, & strong ethical standards to achieve long-term financial success.
export default PazelCard;
