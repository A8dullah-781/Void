import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TestmonialsCards } from "../../constants/constant.js";
import { FreeMode } from "swiper/modules";

const Star = memo(({ type = "full", isDesktop }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={type === "empty" ? "none" : "#1c1c1c"}
      stroke="#1c1c1c"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={
        type === "half"
          ? { clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }
          : {}
      }
      className="inline-block"
    >
      <polygon points="12 2 15 10 23 10 17 15 19 23 12 18 5 23 7 15 1 10 9 10" />
    </svg>
  );
});

const Testmonial = () => {
  return (
    <div className="w-screen h-full pb-8 px-[5vw] bg-[#1c1c1c]">
      <div className="flex justify-center md:justify-between  items-center text-white py-[4vh] lg:py-10">
        <div className="text-[10vw] fontone text-[#F2F2F2] text-center md:text-left md:text-[4.5vw] font-bold ">
          Clients Feedback
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {TestmonialsCards.map((card) => {
          const full = Math.floor(card.rating);
          const half = card.rating % 1 >= 0.5;
          const isDesktop =
            typeof window !== "undefined" && window.innerWidth >= 1024;

          return (
            <SwiperSlide key={card.id}>
              <div className="md:h-[17vh] lg:h-[40vh] bg-[#F2F2F2] rounded-3xl p-5 md:p-[1vw] text-[#1c1c1c]  flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={card.image}
                    loading="lazy"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm md:text-[1vw] font-semibold">
                      {card.name}
                    </p>
                    <p className="text-xs md:text-[1vw] opacity-70">
                      {card.title}
                    </p>

                    <div className="flex gap-1 my-1 items-center">
                      {Array.from({ length: 5 }).map((_, i) => {
                        if (i < full)
                          return (
                            <Star key={i} type="full" isDesktop={isDesktop} />
                          );
                        if (i === full && half)
                          return (
                            <Star key={i} type="half" isDesktop={isDesktop} />
                          );
                        return (
                          <Star key={i} type="empty" isDesktop={isDesktop} />
                        );
                      })}
                      <span className="text-xs md:text-[1vw] ml-2">
                        ({card.rating})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-[1.1vw] text-center">
                  {card.descriptionOne}
                </p>

                <p className="text-xs md:text-[1vw] text-center opacity-70 mt-1">
                  {card.descriptionTwo}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="text-center pt-7 text-[#FFFFFF]">
        &lt; Drag to see more reviews &gt;
      </div>
    </div>
  );
};

export default Testmonial;
