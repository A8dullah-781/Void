import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Featured = () => {
  const featuredPin = useRef(null)
  const imgPin = useRef(null)
  const track = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {
    // featured section pin (normal)
    ScrollTrigger.create({
      trigger: featuredPin.current,
      start: "top top",
      end: "+=100%", // ya jitna height chaahe featured ka
      pin: true,
    })
  }, featuredPin)

  return () => ctx.revert()
}, [])

useEffect(() => {
  const ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(track.current.children)

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imgPin.current,
        start: "top top",
        end: () => "+=" + imgPin.current.offsetWidth * (sections.length - 1),
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    })
  }, imgPin)

  return () => ctx.revert()
}, [])

  return (
    <div className="lg:flex hidden flex-col w-screen">
      <div
        ref={featuredPin}
        className="text-black z-10 bg-white w-screen z-10 text-[5vw] h-[40vh] font-bold fontone flex justify-center items-center"
      >
        Feature Projects
      </div>

      <div ref={imgPin} className="h-screen w-screen z-20 overflow-hidden bg-black relative">
        <div ref={track} className="flex h-full">
          <div className="w-screen h-screen bg-amber-600 bg-[url('/images/feature/fone.webp')] bg-no-repeat bg-cover flex-shrink-0"></div>
          <div className="w-screen h-screen bg-amber-600 bg-[url('/images/feature/ftwo.webp')] bg-no-repeat bg-cover flex-shrink-0"></div>
          <div className="w-screen h-screen bg-amber-600 bg-[url('/images/feature/fthree.webp')] bg-no-repeat bg-cover flex-shrink-0"></div>
          <div className="w-screen h-screen bg-amber-600 bg-[url('/images/feature/ffour.webp')] bg-no-repeat bg-cover flex-shrink-0"></div>
        </div>
      </div>
    </div>
  )
}

export default Featured