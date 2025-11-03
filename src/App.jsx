import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../layout";

import HomePage from "./pages/Home/HomePage";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import IndustriesPage from "./pages/Industries/Industries";
import ContactPage from "./pages/Contact/ContactPage";

// import TermsPage from "./pages/Terms/TermsPage";
// import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
// import ArupProjects from "./pages/ProjectsDetails/ArupProjects/ArupProjects";
// import WolseyProjects from "./pages/ProjectsDetails/WolseyProjects/WolseyProjects";
// import KallerProjects from "./pages/ProjectsDetails/KallerProjects/KallerProjects";
// import MtAcrchProjects from "./pages/ProjectsDetails/MtAcrchProjects/MtAcrchProjects.jsx";
// import MosaicRealState from "./pages/ProjectsDetails/MosaicRealState/MosaicRealState.jsx";
// import OurHistory from "./pages/Projects/Projects.jsx";
// import DattaAndTayefi from "./pages/ProjectsDetails/DattaAndTayefi/DattaAndTayefi.jsx";
// import IndigenousProject from "./pages/ProjectsDetails/IndigenousProject/IndigenousProject.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CareerPage from "./pages/Career/CareerPage";
import CareerModelProvider from "./context/CareerContext";
import InvestmentPage from "./pages/InvestmentApproach/InvestmentPage";
import MhcegProjects from "./pages/ProjectsDetails/MhcegProjects/MhcegProjects";
import HoldingsPage from "./pages/Holdings/Holdings";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewsPage from "./pages/News/NewsPage.jsx";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton.jsx";
import Loader from "./components/shared/Loading/Loading.jsx";

const TermsPage = lazy(() => import("./pages/Terms/TermsPage"));
const PrivacyPolicyPage = lazy(() =>
  import("./pages/PrivacyPolicy/PrivacyPolicyPage")
);
const ArupProjects = lazy(() =>
  import("./pages/ProjectsDetails/ArupProjects/ArupProjects")
);
const WolseyProjects = lazy(() =>
  import("./pages/ProjectsDetails/WolseyProjects/WolseyProjects")
);
const KallerProjects = lazy(() =>
  import("./pages/ProjectsDetails/KallerProjects/KallerProjects")
);
const MtAcrchProjects = lazy(() =>
  import("./pages/ProjectsDetails/MtAcrchProjects/MtAcrchProjects.jsx")
);
const MosaicRealState = lazy(() =>
  import("./pages/ProjectsDetails/MosaicRealState/MosaicRealState.jsx")
);
const OurHistory = lazy(() => import("./pages/Projects/Projects.jsx"));
const DattaAndTayefi = lazy(() =>
  import("./pages/ProjectsDetails/DattaAndTayefi/DattaAndTayefi.jsx")
);
const IndigenousProject = lazy(() =>
  import("./pages/ProjectsDetails/IndigenousProject/IndigenousProject.jsx")
);

function App() {
  return (
    <>
      <Layout>
        <CareerModelProvider>
          <Suspense
            fallback={<div className="text-center p-10"><Loader/></div>}
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
              <Route
                path="/indigenous-mosaic"
                element={<IndigenousProject />}
              />
              <Route path="/mhceg" element={<MhcegProjects />} />
              <Route path="/arup" element={<ArupProjects />} />
              <Route path="/kaller" element={<KallerProjects />} />
              <Route path="/people" element={<CareerPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<CareerPage />} />
              <Route path="/investment-approach" element={<InvestmentPage />} />
              <Route path="/holdings" element={<HoldingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </CareerModelProvider>
        <ScrollToTopButton />
      </Layout>
    </>
  );
}

export default App;
