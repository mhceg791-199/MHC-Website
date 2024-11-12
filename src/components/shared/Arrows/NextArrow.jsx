import React from "react";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <>
      <i
        onClick={onClick}
        className="fa-solid fa-chevron-left text-white bg-mainGold py-4 absolute top-[50%] left-3 px-3 text-3xl cursor-pointer "
      ></i>
    </>
  );
}

export default NextArrow;
