import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

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
import Portfolio from "../pages/Portfolio";
import Work from "./components/Work";
import PortfolioOne from "../pages/PortfolioOne";
import PortfolioTwo from "../pages/PortfolioTwo";
import PortfolioThree from "../pages/PortfolioThree";
import PortfolioFour from "../pages/PortfolioFour";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => t,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

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
              <PortfolioThree/>
              <Footer />
            </>
          }
        />
        <Route
          path="/projectFour"
          element={
            <>
              <PortfolioFour/>
              <Footer />
            </>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
