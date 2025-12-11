import { forwardRef } from "react";

const MiniSpheres = forwardRef(({ leftSphereRef, rightSphereRef }, ref) => {
  return (
    <>
      {/* الكورة الصغيرة - شمال */}
      <div
        ref={leftSphereRef}
        className="absolute left-32 top-80
                   w-[160px] h-[160px] rounded-full
                   bg-gradient-to-b from-[#c5a363] to-[#7e632d]
                   shadow-xl z-20
                   animate-float"
      />

      {/* الكورة الصغيرة - يمين */}
      <div
        ref={rightSphereRef}
        className="absolute top-[27rem] right-32
                   w-[160px] h-[160px] rounded-full
                   bg-gradient-to-b from-[#c5a363] to-[#7e632d]
                   shadow-xl z-20
                   animate-float-slow"
      />
    </>
  );
});

export default MiniSpheres;
