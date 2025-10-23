import { useEffect } from "react";
import fallback from "../../assets/whoWeAre/mission/fallback.png";
import Map from "../../components/ContractPage/map/map";
import Navbar from "../../components/shared/Navbar/Navbar";
import video from "../../assets/whoWeAre/whoWeAre.webm";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import ContactMapDetails from "../../components/ContractPage/ContactMapDetails/ContactMapDetails";
import ContactForm from "../../components/ContractPage/ContactForm/ContactForm";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <FirstSectionByVideo
        videoSrc={video}
        fallbackImg={fallback}
        title="Contact Us"
      />

      
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 text-black px-6 md:px-16 items-start">
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full md:w-10/12">
            <ContactForm />
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <div className="w-full md:w-10/12">
            <ContactMapDetails />
          </div>
        </div>
      </div>

      <Map />
    </>
  );
}

export default ContactPage;
