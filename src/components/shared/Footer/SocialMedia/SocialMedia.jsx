import React from "react";

function SocialMedia() {
  return (
    <>
      <div className="grid grid-cols-4  justify-evenly">
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <i className="fa-brands fa-instagram text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <i className="fa-brands fa-facebook text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <i className="fa-brands fa-x-twitter text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <i className="fa-brands fa-linkedin text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
