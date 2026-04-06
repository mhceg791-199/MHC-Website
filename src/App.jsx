import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import CareerModelProvider from "./context/CareerContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lazy Pages
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre/WhoWeAre"));
const IndustriesPage = lazy(() => import("./pages/Industries/Industries"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const TermsPage = lazy(() => import("./pages/Terms/TermsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicyPage"));
const ArupProjects = lazy(() => import("./pages/ProjectsDetails/ArupProjects/ArupProjects"));
const WolseyProjects = lazy(() => import("./pages/ProjectsDetails/WolseyProjects/WolseyProjects"));
const CareerPage = lazy(() => import("./pages/Career/CareerPage"));
const InvestmentPage = lazy(() => import("./pages/InvestmentApproach/InvestmentPage"));
const MhcegProjects = lazy(() => import("./pages/ProjectsDetails/MhcegProjects/MhcegProjects"));
const HoldingsPage = lazy(() => import("./pages/Holdings/Holdings"));
const KallerProjects = lazy(() => import("./pages/ProjectsDetails/KallerProjects/KallerProjects"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MtAcrchProjects = lazy(() => import("./pages/ProjectsDetails/MtAcrchProjects/MtAcrchProjects"));
const NewsPage = lazy(() => import("./pages/News/NewsPage"));
const MosaicRealState = lazy(() => import("./pages/ProjectsDetails/MosaicRealState/MosaicRealState"));
const OurHistory = lazy(() => import("./pages/Projects/Projects"));
const DattaAndTayefi = lazy(() => import("./pages/ProjectsDetails/DattaAndTayefi/DattaAndTayefi"));
const IndigenousProject = lazy(() => import("./pages/ProjectsDetails/IndigenousProject/IndigenousProject"));
const ServicesPage = lazy(() => import("./pages/Services/Services"));
const MosaicImports = lazy(() => import("./pages/ProjectsDetails/MosaicImports/MosaicImports"));
const MosaicPropertyManagement = lazy(() => import("./pages/ProjectsDetails/MosaicPropertyManagement/MosaicPropertyManagement"));
const MosaicEngineering = lazy(() => import("./pages/ProjectsDetails/MosaicEngineering/MosaicEngineering"));

// Components (ممكن تسيبهم عادي أو تخليهم lazy لو تقال)
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "./components/shared/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Layout>
      <CareerModelProvider>
        <Suspense
          fallback={
            <div style={{ textAlign: "center", padding: "50px" }}>
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-projects" element={<OurHistory />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/wolsey" element={<WolseyProjects />} />
            <Route path="/mt-arch" element={<MtAcrchProjects />} />
            <Route path="/mosaic-realState" element={<MosaicRealState />} />
            <Route path="/datta-and-tayefi" element={<DattaAndTayefi />} />
            <Route path="/indigenous-mosaic" element={<IndigenousProject />} />
            <Route path="/mosaic-imports" element={<MosaicImports />} />
            <Route path="/mosaic-property-management" element={<MosaicPropertyManagement />} />
            <Route path="/mosaic-engineering" element={<MosaicEngineering />} />
            <Route path="/mhceg" element={<MhcegProjects />} />
            <Route path="/arup" element={<ArupProjects />} />
            <Route path="/kaller" element={<KallerProjects />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<CareerPage />} />
            <Route path="/investment-approach" element={<InvestmentPage />} />
            <Route path="/holdings" element={<HoldingsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </CareerModelProvider>

      <ScrollToTop />
      <ScrollToTopButton />
    </Layout>
  );
}

export default App;