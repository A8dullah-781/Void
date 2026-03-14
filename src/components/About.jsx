import React from "react";
import Count from "../utils/Count";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const boxRef = useRef();
  const sectionRef = useRef();
  const countersRef = useRef();

  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    if (!boxRef.current || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, ease: "none" });

    gsap.fromTo(
      countersRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: countersRef.current,
          start: "top 90%",
          onEnter: () => setStartCount(true),
        },
      },
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-row justify-center overflow-hidden bg-[#1C1C1C] px-[7.5vw] h-screen w-screen items-center"
    >
      <div className=" h-full bg-[#1C1C1C] text-[#F2F2F2] fontone flex flex-col items-center pr-[4vw] justify-center w-1/2 ">
        <div className="flex flex-col gap-4">
          <div className="text-[4vw] font-black">Studio Philosophy</div>
          <div className="text-[1.3vw]">
            VOID STUDIO is an interior design practice focused on creating
            spaces that feel intentional, balanced, and timeless. Our work is
            guided by a minimalist philosophy where form, material, and function
            are carefully considered. We believe strong interiors are not
            defined by excess, but by clarity spaces designed to support daily
            life while maintaining a calm and refined presence.
          </div>
          <div className="text-[1.3vw]">
            From residential interiors to commercial spaces, our approach
            remains consistent: thoughtful design, precise execution, and
            lasting relevance.
          </div>
        </div>
        <div
          ref={countersRef}
          className="justify-start -mt-4 -ml-6 gap-10 items-start flex flex-row"
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

      <div className=" flex justify-center  items-center h-full w-1/2">
        <div className='h-[75vh] relative w-full bg-[url("/images/about.png")] bg-no-repeat bg-cover rounded-3xl'>
          <div
            ref={boxRef}
            className="w-[25vw] flex justify-center items-center p-10 absolute bottom-[-25px] right-[-15px] h-[20vh] rounded-3xl glass "
          >
            <p className="text-white text-center fontone text-[1.3vw]">
              “A studio built on thoughtful design, architectural clarity, and
              precise execution.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
