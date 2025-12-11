import SectionHeader from "../../shared/sectionHeader/sectionHeader";

export default function Deliver({ logoTextRef, logoRef }) {
  return (
    <div className="absolute top-[65%] inset-0 flex flex-col justify-center items-center pointer-events-none">
      {/* Container النص */}
      <div
        ref={logoTextRef}
        className="relative text-center text-white max-w-xl z-20"
      >
        <h2 className="heading-3 text-mainGold font-bold mb-4">
          <SectionHeader firstWord="WHAT WE DELIVER" />
        </h2>
        <p className="fade-item paragraph mb-6 text-gray-300">
          Clarity, continuity, and global strength — for founders and clients
          alike.
        </p>
        <p className="fade-item paragraph mb-8 text-gray-400">
          We elevate companies without disrupting their culture, and empower
          clients without breaking the relationships they value.
        </p>
      </div>

      {/* اللوجو خلف النص */}
      <img
        ref={logoRef}
        src="logo-c.png"
        alt="logo"
        className="absolute inset-0 w-[150px] h-[150px] rounded-full z-10 mx-auto my-auto "
      />
    </div>
  );
}
