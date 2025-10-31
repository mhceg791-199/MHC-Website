import Footer from "./src/components/shared/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
