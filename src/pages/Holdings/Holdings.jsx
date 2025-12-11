import Navbar from "../../components/shared/Navbar/Navbar";
import video from "../../assets/whoWeAre/whoWeAre.webm";
import fallback from "../../assets/whoWeAre/mission/fallback.png";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import HoldingsAbout from "../../components/Holdings/HoldingsAbout/HoldingsAbout";
// import HoldingsSection from "../../components/Holdings/HoldingsSection/HoldingsSection";
// import IndustrySlider from "../../components/Holdings/IndustrySlider/IndustrySlider";
import HoldingsOrbit from "../../components/Holdings/HoldingsOrbit/HoldingsOrbit";
import HoldingSlider from "../../components/Holdings/HoldingSlider/HoldingSlider";
import WavesSection from "../../components/Holdings/WavesSection/WavesSection";

function HoldingsPage() {
  return (
    <>
      <Navbar />
      <FirstSectionByVideo
        videoSrc={video}
        fallbackImg={fallback}
        title="Holdings"
      />
      <HoldingsAbout />
      <HoldingsOrbit/>
      <WavesSection/>
      {/* <HoldingsSection /> */}
      <HoldingSlider/>
      {/* <IndustrySlider /> */}
    </>
  );
}

export default HoldingsPage;
