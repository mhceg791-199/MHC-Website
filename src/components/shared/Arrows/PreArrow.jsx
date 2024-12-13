import React from "react";

function PreArrow(props) {
  const { className, style, onClick } = props;

  return (
    <>
      <i
        onClick={onClick}
        className="fa-solid fa-chevron-right text-white bg-mainGold absolute top-[50%] right-0 z-30 py-2 px-3 text-xl cursor-pointer translate-y-[-50%] "
      ></i>
    </>
  );
}

export default PreArrow;
