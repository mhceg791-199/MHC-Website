import Navbar from "../../components/shared/Navbar/Navbar";
// import ScrollGallery from "../../components/whoWeAre/ScrollGallery/ScrollGallery";
// import liveShape from "../../assets/whoWeAre/projects/live_stream_shape.png";

export default function OurHistory() {
  return (
    <>
      <Navbar />


      {/* <section className="relative bg-black w-full h-screen overflow-hidden our-projects architechture">
        <img
          src={liveShape}
          alt="rotating shape"
          className="absolute top-[10%] left-[30%] w-[40rem] h-[40rem] 
                     -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
        />

        

        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="scroll-container relative w-full h-auto max-h-[80vh] overflow-y-auto no-scrollbar px-4">
            <ScrollGallery />
          </div>
        </div>
      </section> */}
    </>
  );
}
