import video from "../../../assets/whoWeAre/whoWeAre.webm";
import fallback from "../../../assets/whoWeAre/mission/fallback.png";
import FirstSectionByVideo from "../../shared/FirstSectionByVideo/FirstSectionByVideo";
// import FirstSectionByVideo from "../../shared/FirstSectionVideo/FirstSectionByVideo";

function FirstSection() {
  return (
    <>
      <FirstSectionByVideo
        videoSrc={video}
        fallbackImg={fallback}
        title="Who We Are"
      />
    </>
  );
}

export default FirstSection;

