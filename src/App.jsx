// import "./App.css";
// import HomePage from "./pages/Home/HomePage";

// import Layout from "../layout";
// import { Route, Routes } from "react-router-dom";
// import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
// import IndustriesPage from "./pages/Industries/Industries";
// import ContactPage from "./pages/Contact/ContactPage";

// import TermsPage from "./pages/Terms/TermsPage";
// import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ArupProjects from "./pages/ProjectsDetails/ArupProjects/ArupProjects";
// import WolseyProjects from "./pages/ProjectsDetails/WolseyProjects/WolseyProjects";
// import CareerPage from "./pages/Career/CareerPage";
// import CareerModelProvider from "./context/CareerContext";
// import InvestmentPage from "./pages/InvestmentApproach/InvestmentPage";
// import MhcegProjects from "./pages/ProjectsDetails/MhcegProjects/MhcegProjects";
// import HoldingsPage from "./pages/Holdings/Holdings";
// import KallerProjects from "./pages/ProjectsDetails/KallerProjects/KallerProjects";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import MtAcrchProjects from "./pages/ProjectsDetails/MtAcrchProjects/MtAcrchProjects.jsx";
// import NewsPage from "./pages/News/NewsPage.jsx";
// import MosaicRealState from "./pages/ProjectsDetails/MosaicRealState/MosaicRealState.jsx";

// function App() {
//   return (
//     <>
//       <Layout>
//         <CareerModelProvider>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/who-we-are" element={<WhoWeAre />} />
//             <Route path="/industries" element={<IndustriesPage />} />
//             <Route path="/contact-us" element={<ContactPage />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//             <Route path="/tearms-conditions" element={<TermsPage />} />
//             <Route path="/wolsey" element={<WolseyProjects />} />
//             <Route path="/mt-arch" element={<MtAcrchProjects />} />
//             <Route path="/mosaic-realestate" element={<MosaicRealState />} />
//             <Route path="/mhceg" element={<MhcegProjects />} />
//             <Route path="/arup" element={<ArupProjects />} />
//             <Route path="/kaller" element={<KallerProjects />} />
//             <Route path="/careers" element={<CareerPage />} />
//             <Route path="/news" element={<NewsPage />} />
//             <Route path="/news/:id" element={<CareerPage />} />
//             <Route path="/investment-approach" element={<InvestmentPage />} />
//             <Route path="/holdings" element={<HoldingsPage />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </CareerModelProvider>
//       </Layout>
//     </>
//   );
// }

// export default App;

import "./App.css";
import HomePage from "./pages/Home/HomePage";

import Layout from "../layout";
import { Route, Routes } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import IndustriesPage from "./pages/Industries/Industries";
import ContactPage from "./pages/Contact/ContactPage";

import TermsPage from "./pages/Terms/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArupProjects from "./pages/ProjectsDetails/ArupProjects/ArupProjects";
import WolseyProjects from "./pages/ProjectsDetails/WolseyProjects/WolseyProjects";
import CareerPage from "./pages/Career/CareerPage";
import CareerModelProvider from "./context/CareerContext";
import InvestmentPage from "./pages/InvestmentApproach/InvestmentPage";
import MhcegProjects from "./pages/ProjectsDetails/MhcegProjects/MhcegProjects";
import HoldingsPage from "./pages/Holdings/Holdings";
import KallerProjects from "./pages/ProjectsDetails/KallerProjects/KallerProjects";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MtAcrchProjects from "./pages/ProjectsDetails/MtAcrchProjects/MtAcrchProjects.jsx";
import NewsPage from "./pages/News/NewsPage.jsx";
import MosaicRealState from "./pages/ProjectsDetails/MosaicRealState/MosaicRealState.jsx";
import OurHistory from "./pages/Projects/Projects.jsx";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton.jsx";
function App() {
  return (
    <>
      <Layout>
        <CareerModelProvider>
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
        </CareerModelProvider>
        <ScrollToTopButton />
      </Layout>
    </>
  );
}

export default App;
