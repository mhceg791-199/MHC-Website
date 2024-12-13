import React from "react";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <>
      <i
        onClick={onClick}
        className="fa-solid fa-chevron-left text-white bg-mainGold py-2 absolute top-[50%] -translate-y-[50%] left-0 px-3 text-xl cursor-pointer "
      ></i>
    </>
  );
}

export default NextArrow;
