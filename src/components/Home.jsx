import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

const Home = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const textRef = useRef();
  const marqueeRef = useRef();

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

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 1.3 },
    ).fromTo(marqueeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const boxes = (
    <>
      <div className='h-[28vh] lg:h-[40vh] w-[45vw] md:w-[22vw] lg:w-[15vw] mt-[5vh] ml-5 rounded-tr-[3vw] rounded-xl bg-[url("/images/marquee/mone.webp")] bg-no-repeat bg-cover'></div>
      <div className='h-[28vh] lg:h-[40vh] w-[45vw] md:w-[22vw] lg:w-[15vw] mt-[5vh] rounded-bl-[3vw] rounded-xl bg-[url("/images/marquee/mtwo.webp")] bg-no-repeat bg-cover'></div>
      <div className='h-[28vh] lg:h-[40vh] w-[45vw] md:w-[22vw] lg:w-[15vw] mt-[5vh] rounded-tr-[3vw] rounded-xl bg-[url("/images/marquee/mthree.webp")] bg-no-repeat bg-cover'></div>
      <div className='h-[28vh] lg:h-[40vh] w-[45vw] md:w-[22vw] lg:w-[15vw] mt-[5vh] rounded-bl-[3vw] rounded-xl bg-[url("/images/marquee/mfour.webp")] bg-no-repeat bg-cover'></div>
      <div className='h-[28vh] lg:h-[40vh] w-[45vw] md:w-[22vw] lg:w-[15vw] mt-[5vh] rounded-tr-[3vw] rounded-xl bg-[url("/images/marquee/mfive.webp")] bg-no-repeat bg-cover'></div>
      <div className='h-[28vh] lg:h-[40vh] w-[45vw] md:w-[22vw] lg:w-[15vw] mt-[5vh] rounded-bl-[3vw] rounded-xl bg-[url("/images/marquee/msix.webp")] bg-no-repeat bg-cover'></div>
    </>
  );

  return (
    <>
      <div
        id="home"
        className="bg-[#1C1C1C] w-screen pt-[7vh] md:pt-0 h-full lg:h-screen"
      >
        <div className="text-white pt-[5vh] md:pt-[12vh] lg:pt-[18vh] flex flex-col justify-center items-center ">
          <div
            ref={textRef}
            className="flex flex-col justify-center items-center"
          >
            <div>
              <img
                className="w-[80vw] md:w-[60vw] lg:w-[40vw]"
                src="/images/logo.webp"
                alt="Logo"
              />
            </div>
            <div className="fonttwo -mt-1 pl-[10vw] md:pl-[6vw] lg:pl-[4vw] tracking-[3.5em] text-[3vw] md:text-[2vw] lg:text-[1.3vw] font-semibold text-center">
              STUDIO
            </div>
            <div className="fontone mt-4 tracking-normal font-light  text-[4vw] md:text-[3vw] lg:text-[1.2vw]">
              Interior design studio based in London
            </div>
            <div
              onClick={() => handleNavClick("contact")}
              className="mt-6 glass block md:hidden text-[4.3vw] bg-zinc-50 text-black px-6 py-3 rounded-2xl cursor-pointer"
            >
              FREE CONSULTATION
            </div>
          </div>

          <div ref={marqueeRef} className="overflow-hidden w-full">
            <div className="marquee">
              <div className="flex gap-5">{boxes}</div>
              <div className="flex gap-5">{boxes}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
