import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Text from './components/Text';
import About from './components/About';
import ServiceSide from './components/ServiceSide';
import Featured from './components/Featured';
import Testmonial from './components/Testmonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,      // scroll animation speed
      easing: (t) => t,   // linear easing
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // cleanup on unmount
  }, []);

  return (
    <div>
      <Navbar/>
      <Home/>
      <Text/>
      <About/>
      <ServiceSide/>
      <Featured/>
      <Testmonial/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;