import firstSection from '../../../assets/homePage/firstSection.webm';

function FirstSection() {
  return (
    <>
      <video
        className="w-full h-[80vh] object-cover"
        autoPlay
        muted
        loop
        src={firstSection}
      ></video>
    </>
  );
}

export default FirstSection;
