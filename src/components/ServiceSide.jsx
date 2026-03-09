import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScroll() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {

    const scrollWidth = trackRef.current.scrollWidth
    const windowWidth = window.innerWidth

    // Horizontal scroll of panels
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

    // Hero fade out
  // Hero fade out on horizontal scroll
gsap.to(".hero", {
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: trackRef.current, // horizontal track trigger
    start: "left left",        // jab horizontal scroll start ho
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
  <div className="w-[80vw] h-screen flex-shrink-0 bg-[#1C1C1C] text-white flex items-center justify-center">
  </div>


  <div className="card w-[33vw] h-screen flex-shrink-0 bg-gray-900  text-white flex items-center justify-center">
    <div className="bg-[#F2F2F2] w-[80%] fontone h-[60%] rounded-4xl p-[1.3vw] flex justify-between text-black flex-col ">
     <div className="flex flex-col justify-center items-start">
       <div className="font-semibold mb-2 text-[2.7vw]">Our Expertise</div>
      <div className="font-normal text-[1.2vw]">We design functional, aesthetic, and well-planned spaces that align with your lifestyle and business needs from concept to final visualization.</div>
     </div>
      <div className="flex justify-end"><img src="/images/servicelogo/slogoOne.png" alt="" /></div>
    </div>
  </div>

  
  <div className="w-[33vw] h-screen flex-shrink-0 bg-gray-900 text-white flex items-center justify-center">
    Panel 3 content
  </div>
  
</div>

</section>
  )
}