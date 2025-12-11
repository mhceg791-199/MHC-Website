import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import Navbar from "../../components/shared/Navbar/Navbar";
import video from "../../assets/whoWeAre/whoWeAre.webm";
import fallback from "../../assets/whoWeAre/mission/fallback.png";
// import ServicesAbout from "../../components/ServicesPage/ServicesAbout/ServicesAbout";
// import SidebarWithScroll from "../../components/ServicesPage/SidebarWithScroll/SidebarWithScroll";
import ScrollHero from "../../components/ServicesPage/ScrollHero/ScrollHero";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <FirstSectionByVideo
        videoSrc={video}
        fallbackImg={fallback}
        title="Services"
      />
      {/* <ServicesAbout /> */}
      <ScrollHero/>
      <>
        {/* <SidebarWithScroll /> */}
      </>
    </>
  );
}
