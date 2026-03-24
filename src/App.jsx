import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Text from "./components/Text";
import About from "./components/About";
import ServiceSide from "./components/ServiceSide";
import Featured from "./components/Featured";
import Testmonial from "./components/Testmonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Process from "./components/Process";
import Work from "./components/Work";

import Portfolio from "../pages/Portfolio";
import PortfolioOne from "../pages/PortfolioOne";
import PortfolioTwo from "../pages/PortfolioTwo";
import PortfolioThree from "../pages/PortfolioThree";
import PortfolioFour from "../pages/PortfolioFour";

// Scroll top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Text />
              <About />
              <Work />
              <ServiceSide />
              <Featured />
              <Process />
              <Testmonial />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolio />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/projectOne"
          element={
            <>
              <PortfolioOne />
              <Footer />
            </>
          }
        />
        <Route
          path="/projectTwo"
          element={
            <>
              <PortfolioTwo />
              <Footer />
            </>
          }
        />
        <Route
          path="/projectThree"
          element={
            <>
              <PortfolioThree />
              <Footer />
            </>
          }
        />
        <Route
          path="/projectFour"
          element={
            <>
              <PortfolioFour />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;