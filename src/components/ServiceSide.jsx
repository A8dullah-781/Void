import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpertiseCards } from "../../constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
  if (!trackRef.current || !sectionRef.current) return;

  const ctx = gsap.context(() => {
    const scrollWidth = trackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    // screen width ke hisaab se start/end
    const isMobile = window.innerWidth < 1024;
    const startPos = isMobile ? "top 13%" : "top top";
    const endPos = isMobile
      ? "+=" + (scrollWidth - windowWidth) / 2 // mobile me chhota scroll distance
      : "+=" + (scrollWidth - windowWidth);   // desktop same

    gsap.to(trackRef.current, {
      x: -(scrollWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: startPos,
        end: endPos,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.to(".hero", {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: trackRef.current,
        start: isMobile ? "left left" : "left left",
        end: () => "+=" + trackRef.current.scrollWidth / (isMobile ? 40 : 10),
        scrub: 1,
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section id="services" className="bg-[#1C1C1C] overflow-hidden relative">
      {/* mobile */}
       <div className="md:hidden fontone w-screen px-[7.5vw]">
      <div className="font-bold text-[12vw] text-center py-6 text-[#FFFFFF] leading-none">
        What We <br /> Provide?
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        grabCursor={true}
      >
        {ExpertiseCards.map((card) => (
          <SwiperSlide key={card.id} className="w-[90vw] py-8">
            <div className="bg-[#F2F2F2] fontone h-[38vh] rounded-4xl p-[5vw] flex justify-between text-black flex-col">
              <div className="flex flex-col justify-center items-start">
                <div className="font-semibold leading-none h-[10vh] bg-amber-800 text-[6vw]">
                  {card.title}
                </div>
                <div className="font-normal mt-4 text-[3vw]">{card.description}</div>
              </div>
              <div className="flex w-[15vw] ml-auto">
                <img src={card.logo} alt={card.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       <div className="text-center pb-6 text-[#FFFFFF]">
        &lt; Drag to see more reviews &gt;
      </div>
    </div>
      {/* desktop */}
      <div ref={sectionRef} className="md:block  hidden">
        <div className="hero w-[80vw] fixed left-0 fontone  md:h-[40vh]  lg:h-screen px-[7.5vw] flex items-center justify-start z-10 opacity-100">
          <div className="font-bold text-[6.5vw] text-[#FFFFFF] leading-none">
            What We <br /> Provide?
          </div>
        </div>

        <div ref={trackRef} className="flex lg:h-full md:h-[40vh] relative z-0">
          <div className="w-[80vw]  md:h-[40vh]  lg:h-screen flex-shrink-0 bg-[#1C1C1C] text-white flex items-center justify-center"></div>

          {ExpertiseCards.map((card) => (
            <div
              key={card.id}
              className="card w-[33vw]  md:h-[40vh]  lg:h-screen flex-shrink-0  text-white flex items-center justify-center"
            >
              <div className="bg-[#F2F2F2] w-[90%] fontone h-[60%] rounded-4xl p-[2vw] flex justify-between text-black flex-col">
                <div className="flex flex-col justify-center items-start">
                  <div className="font-semibold leading-none mb-2  md:h-[5vh]  lg:h-[13vh]  text-[2.5vw]">
                    {card.title}
                  </div>
                  <div className="font-normal text-[1.2vw]">
                    {card.description}
                  </div>
                </div>
                <div className="flex w-[5vw] ml-auto">
                  <img src={card.logo} alt={card.title} />
                </div>
              </div>
            </div>
          ))}

          <div className="w-[33vw] h-screen flex-shrink-0 bg-[#1C1C1C] text-white flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
