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
import SignatureProjectsPage from "./pages/SignatureProjects/SignatureProjects";
import CareerPage from "./pages/Career/CareerPage";
import CareerModelProvider from "./context/CareerContext";
import InvestmentPage from "./pages/InvestmentApproach/InvestmentPage";
import MhcegProjects from "./pages/ProjectsDetails/MhcegProjects/MhcegProjects";
function App() {
  return (
    <>
      <Layout>
        <CareerModelProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/tearms-conditions" element={<TermsPage />} />
            <Route path="/wolsey-projects" element={<WolseyProjects />} />
            <Route path="/mhceg-projects" element={<MhcegProjects />} />
            <Route path="/arup-projects" element={<ArupProjects />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/investment-approach" element={<InvestmentPage />} />
            <Route
              path="/signatureProjects"
              element={<SignatureProjectsPage />}
            />
          </Routes>
        </CareerModelProvider>
      </Layout>
    </>
  );
}

export default App;
