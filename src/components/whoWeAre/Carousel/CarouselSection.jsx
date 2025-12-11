import { lazy, Suspense } from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
const LazyCarousel = lazy(() => import("./Carousel"));

function CarouselSection() {
  return (
    <>
      <div className={` md:ms-20 mb-6 text-center md:text-start`}>
        <SectionHeader firstWord={"INVESTMENT APPROACH"} />
      </div>
      <div className="flex items-center justify-center my-10 h-[600px] w-full">
        <div className="w-[95%]">
          <Suspense
            fallback={<div className="text-white text-center">Loading...</div>}
          >
            <LazyCarousel />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default CarouselSection;

