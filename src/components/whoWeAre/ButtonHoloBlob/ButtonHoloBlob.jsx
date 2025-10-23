import { useNavigate } from "react-router-dom";
import liveShape from '../../../assets/whoWeAre/projects/live_stream_shape.png';

function ButtonHoloBlob() {
  const navigate = useNavigate();
  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
  };

  return (
    <div className="flex items-center justify-center h-[30vh] my-6 relative">
      <img
        src={liveShape}
        alt="rotating shape"
        className="absolute w-[220px] h-[220px] animate-spin-slow opacity-70"
      />
      <button onClick={() => handleNavigate('/our-projects', "our-projects")} className="relative flex items-center justify-center w-[135px] h-[135px] rounded-full  heading-3 border-2 border-mainGold z-10">
        Projects
        <span className="absolute w-[165px] h-[165px] rounded-full border-2 border-mainGold z-[-1] animate-glowPulse"></span>
      </button>
    </div>
  );
}

export default ButtonHoloBlob;
