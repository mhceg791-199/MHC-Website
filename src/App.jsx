import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Layout from "../layout";
import CareerModelProvider from "./context/CareerContext";

// ✅ Lazy imports for code splitting
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
const MtAcrchProjects = lazy(() => import("./pages/ProjectsDetails/MtAcrchProjects/MtAcrchProjects.jsx"));
const NewsPage = lazy(() => import("./pages/News/NewsPage.jsx"));
const MosaicRealState = lazy(() => import("./pages/ProjectsDetails/MosaicRealState/MosaicRealState.jsx"));

// ✅ Spinner component for fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-mainGold border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

// ✅ Prefetch helper for images
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

// ✅ App component
function App() {
  useEffect(() => {
    // ✅ Preload important pages in background
    import("./pages/WhoWeAre/WhoWeAre");
    import("./pages/Contact/ContactPage");

    // ✅ Prefetch important hero images
    preloadImage("/assets/homePage/firstSection.webm");
    preloadImage("/assets/images/hero-who-we-are.jpg");
    preloadImage("/assets/images/hero-contact.jpg");
  }, []);

  return (
    <Layout>
      <CareerModelProvider>
        {/* Suspense fallback with spinner */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/tearms-conditions" element={<TermsPage />} />
            <Route path="/wolsey" element={<WolseyProjects />} />
            <Route path="/mt-arch" element={<MtAcrchProjects />} />
            <Route path="/mosaic-realState" element={<MosaicRealState />} />
            <Route path="/mhceg" element={<MhcegProjects />} />
            <Route path="/arup" element={<ArupProjects />} />
            <Route path="/kaller" element={<KallerProjects />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<CareerPage />} />
            <Route path="/investment-approach" element={<InvestmentPage />} />
            <Route path="/holdings" element={<HoldingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </CareerModelProvider>
    </Layout>
  );
}

export default App;