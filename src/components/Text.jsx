import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className="bg-[#1C1C1C] px-[7.5vw] lg:py-0 py-10 w-screen flex justify-center items-center h-full lg:h-[65vh]">
      <div
        ref={textRef}
        className="fontone text-white text-[3.5vw] md:text-[2.2vw] text-center md:font-semibold"
      >
        "At VOID STUDIO, we approach interior design with clarity and intention,
        shaping spaces through balance, proportion, and thoughtful restraint. By
        stripping away the unnecessary, we allow materials, light, and structure
        to define the experience, resulting in interiors that feel calm,
        purposeful, and enduring. Every project is a careful composition that
        supports how a space is lived in creating refined environments that
        remain both functional and relevant over time."
      </div>
    </div>
  );
};

export default Text;
