import DomeGallery from "../../components/CareerPage/CareerGallery/CareerGallery";
import CareersDetails from "../../components/CareerPage/CareersDetails/CareersDetails";
import Navbar from "../../components/shared/Navbar/Navbar";
// import ScrollCards from "../../components/whoWeAre/ScrollCards/ScrollCards";

function CareerPage() {
  return (
    <>
      <Navbar />
      <div style={{ width: "99vw", height: "80vh" }}>
        <DomeGallery />
      </div>
      <CareersDetails />

      {/* <ScrollCards/> */} 
      {/* <CareerArea /> */}
    </>
  );
}

export default CareerPage;
