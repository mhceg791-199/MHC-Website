import React from "react";
import Navbar from "./src/components/shared/Navbar/Navbar";
import Footer from "./src/components/shared/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
