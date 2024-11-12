import React from "react";

function PreArrow(props) {
  const { className, style, onClick } = props;

  return (
    <>
      <i
        onClick={onClick}
        className="fa-solid fa-chevron-right text-white bg-mainGold absolute top-[50%] right-3 z-30 py-4 px-3 text-3xl cursor-pointer "
      ></i>
    </>
  );
}

export default PreArrow;
