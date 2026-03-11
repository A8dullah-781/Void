import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExpertiseCards } from "../../constants/constant"

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScroll() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {

    const scrollWidth = trackRef.current.scrollWidth
    const windowWidth = window.innerWidth

    gsap.to(trackRef.current, {
      x: -(scrollWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=" + (scrollWidth - windowWidth),
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })

gsap.to(".hero", {
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: trackRef.current,
    start: "left left",       
    end: () => "+=" + (trackRef.current.scrollWidth  / 10),
    scrub: 1,
  }
})

  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
  <section ref={sectionRef} className="h- bg-[#1C1C1C] overflow-hidden relative">

 <div className="hero w-[80vw] fixed left-0 fontone h-screen px-[7.5vw] flex items-center justify-start z-10 opacity-100">
  <div className="font-bold text-[6.5vw] text-[#FFFFFF] leading-none">What We <br /> Provide?</div>
</div>

<div ref={trackRef} className="flex relative z-0">
  <div className="w-[80vw] h-screen flex-shrink-0 bg-[#1C1C1C] text-white flex items-center justify-center"></div>

  {ExpertiseCards.map((card) => (
    <div
      key={card.id}
      className="card w-[33vw] h-screen flex-shrink-0  text-white flex items-center justify-center"
    >
      <div className="bg-[#F2F2F2] w-[90%] fontone h-[60%] rounded-4xl p-[1.5vw] flex justify-between text-black flex-col">
        <div className="flex flex-col justify-center items-start">
          <div className="font-semibold leading-none mb-2 h-[13vh]  text-[2.7vw]">{card.title}</div>
          <div className="font-normal text-[1.2vw]">{card.description}</div>
        </div>
        <div className="flex w-[5vw] ml-auto">
          <img src={card.logo} alt={card.title} />
        </div>
      </div>
    </div>
  ))}

  <div className="w-[33vw] h-screen flex-shrink-0 bg-[#1C1C1C] text-white flex items-center justify-center"></div>
</div>

</section>
  )
}