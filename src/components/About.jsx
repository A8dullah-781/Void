import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom"; // 👈 add this
import Count from "../utils/Count";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const location = useLocation(); // 👈 useLocation hook
  const boxRef = useRef();
  const sectionRef = useRef();
  const countersDesktopRef = useRef();
  const countersMobileRef = useRef();
  const [startCount, setStartCount] = useState(false);

useEffect(() => {
  if (location.pathname !== "/") return;

  const ctx = gsap.context(() => {
    if (!boxRef.current || !sectionRef.current) return;

    const isBelow1024 = window.innerWidth < 1024;

    if (!isBelow1024) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: sectionRef.current,
          pinSpacing:true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1 });

      gsap.fromTo(
        countersDesktopRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: countersDesktopRef.current,
            start: "top 90%",
            onEnter: () => setStartCount(true),
          },
        }
      );
    } else {
      gsap.fromTo(
        countersMobileRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: countersMobileRef.current,
            start: "top 95%",
            onEnter: () => setStartCount(true),
          },
        }
      );
    }

    gsap.fromTo(
  sectionRef.current,
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
);
  }, sectionRef);

  return () => ctx.revert(); // 👈 ONLY CLEANUP THAT WORKS
}, [location.pathname]);

  return (
   <div id="about-wrapper">
    <div id="about"
      ref={sectionRef}
      className="flex flex-col md:flex-row  justify-center overflow-hidden bg-[#1C1C1C] px-[7.5vw] lg:h-screen py-0 md:py-8 lg:py-0 h-full md:gap-15 w-screen items-center"
    >
      <div className=" px-[7.5vw] pt-3 text-center md:text-left md:px-0 h-full bg-[#1C1C1C] text-[#F2F2F2] fontone flex flex-col items-center pr-[4vw] justify-center w-screen md:w-1/2 ">
        <div className="flex flex-col gap-4">
          <div className="text-[12vw] md:px-0 px-[10vw] md:text-left text-center  md:text-[4vw]  leading-none py-2 md:py-0  font-black">
            Studio Philosophy
          </div>
          <div className="text-[3.4vw] md:text-[1.3vw]">
            VOID STUDIO is an interior design practice focused on creating
            spaces that feel intentional, balanced, and timeless. Our work is
            guided by a minimalist philosophy where form, material, and function
            are carefully considered. We believe strong interiors are not
            defined by excess, but by clarity spaces designed to support daily
            life while maintaining a calm and refined presence.
          </div>
          <div className="text-[1.3vw] hidden md:block">
            From residential interiors to commercial spaces, our approach
            remains consistent: thoughtful design, precise execution, and
            lasting relevance.
          </div>
        </div>
        <div
          ref={countersDesktopRef}
          className="justify-start mt-4 -ml-6 gap-10 items-start hidden md:flex flex-row"
        >
          <div className="flex-col flex justify-center items-center">
            <div className="text-[6vw]">
              {startCount && <Count target={11} step={1} speed={140} />}+
            </div>
            <div>Architects & Designers</div>
          </div>
          <div className="flex-col flex justify-center items-center">
            <div className="text-[6vw]">
              {startCount && <Count target={130} step={15} speed={140} />}+
            </div>
            <div>Projects</div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center  items-center h-full px-[7.5vw] md:px-0 w-screen md:w-1/2">
        <div className='h-[30vh] lg:h-[75vh] md:my-0 my-6 relative w-full bg-[url("/images/about.webp")] bg-no-repeat bg-cover rounded-3xl'>
          <div
            ref={boxRef}
            className=" w-[50vw] md:w-[25vw] flex justify-center items-center p-4 lg:p-10 absolute bottom-[-25px] right-[-15px] h-[10vh] md:h-[8vh] lg:h-[20vh] rounded-3xl glassa "
          >
            <p className="text-white text-center fontone text-[3vw] md:text-[1.3vw]">
              “A studio built on thoughtful design, architectural clarity, and
              precise execution.”
            </p>
          </div>
        </div>
      </div>
      <div className="text-[3.5vw] text-center text-white fontone pt-5 md:hidden block">
        From residential interiors to commercial spaces, our approach remains
        consistent: thoughtful design, precise execution, and lasting relevance.
      </div>
      <div
        ref={countersMobileRef}
        className="justify-start text-white fontone py-8  gap-10 items-start md:hidden flex flex-row"
      >
        <div className="flex-col flex justify-center items-center">
          <div className="text-[10vw]">
            {startCount && <Count target={11} step={1} speed={140} />}+
          </div>
          <div className="text-[4vw]">Architects & Designers</div>
        </div>
        <div className="flex-col flex justify-center items-center">
          <div className="text-[10vw]">
            {startCount && <Count target={130} step={15} speed={140} />}+
          </div>
          <div className="text-[4vw]">Projects</div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;

