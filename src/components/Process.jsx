// import React, { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useLocation } from "react-router-dom"
// gsap.registerPlugin(ScrollTrigger)

// const Process = () => {
//   const processPin = useRef(null)
//   const headingRef = useRef(null)
//   const cardsRef = useRef([])
//   const imgsRef = useRef([])
//   const location = useLocation()

//   cardsRef.current = []
//   imgsRef.current = []

//   const addCardRef = el => {
//     if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el)
//   }
//   const addImgRef = el => {
//     if (el && !imgsRef.current.includes(el)) imgsRef.current.push(el)
//   }

//   useEffect(() => {
//     if (location.pathname !== "/") return

//     const ctx = gsap.context(() => {
//       // Heading + first card + first img - scroll enter hote hi
//       gsap.fromTo(
//         [headingRef.current, cardsRef.current[0], imgsRef.current[0]],
//         { y: 20, opacity: 0, filter: "blur(8px)" },
//         {
//           y: 0,
//           opacity: 1,
//           filter: "blur(0px)",
//           duration: 0.5,
//           scrollTrigger: {
//             trigger: processPin.current,
//             start: "top center",
//             toggleActions: "play none none none"
//           }
//         }
//       )

//       // Baaki cards + images timeline (2nd onward)
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: processPin.current,
//           start: "top top",
//           end: "+=300%",
//           scrub: true,
//           pin: true,
//         }
//       })

//       cardsRef.current.slice(1).forEach((card, i) => {
//         const img = imgsRef.current[i+1]
//         const prevImg = imgsRef.current[i]
//         tl.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "+=0.2")
//         tl.fromTo(img, { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.5 }, "-=0.3")
//         tl.to(prevImg, { filter: "blur(8px)", duration: 0.5 }, "-=0.2")
//       })
//     }, processPin)

//     return () => ctx.revert()
//   }, [location.pathname])

//   if (location.pathname !== "/") return null

//   return (
//     <div ref={processPin} className="h-screen w-screen fontone hidden xl:flex flex-col bg-[#1c1c1c]">
//       {/* Heading */}
//       <div ref={headingRef} className="h-[30%] w-screen flex justify-center items-center flex-col text-white">
//         <div className="text-[4vw] font-bold">Our Process</div>
//         <div className="text-[1.3vw] text-center font-extralight">
//           A structured approach that transforms <br /> ideas into meaningful spaces.
//         </div>
//       </div>

//       {/* Cards + Images */}
//       <div className="h-[70%] w-screen px-[7.5vw] flex justify-center items-center">
//         <div className="flex flex-row justify-between h-[80%] w-full">

//           {/* Left Column */}
//           <div className="relative h-full w-[43%]">
//             <div ref={addCardRef} className="glass rounded-3xl text-white p-2 h-[26vh] w-[13vw] absolute top-0 left-0 opacity-0">
//               <div className="h-[45%] flex justify-center items-center w-full">
//                 <div className='bg-[url("/images/process/lone.webp")] bg-no-repeat bg-center h-[10vh] w-full'></div>
//               </div>
//               <div className="h-[55%] flex flex-col justify-center items-center w-full">
//                 <div className="text-[1.3vw]">Discover</div>
//                 <div className="text-[0.8vw] text-center font-extralight">
//                   We understand your vision, space, and requirements before touching the design.
//                 </div>
//               </div>
//             </div>
//             <img ref={addImgRef} className="absolute top-[15%] left-[50%] opacity-0" src="/images/process/vone.webp" alt="" />

//             <div ref={addCardRef} className="glass rounded-3xl text-white p-2 h-[26vh] w-[13vw] absolute bottom-0 right-0 opacity-0">
//               <div className="h-[45%] flex justify-center items-center w-full">
//                 <div className='bg-[url("/images/process/ltwo.webp")] bg-no-repeat bg-center h-[10vh] w-full'></div>
//               </div>
//               <div className="h-[55%] flex flex-col -mt-2 justify-center items-center w-full">
//                 <div className="text-[1.3vw]">Design</div>
//                 <div className="text-[0.8vw] text-center font-extralight">
//                   We translate ideas into thoughtful layouts, materials, and visual concepts.
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="relative h-full w-[43%]">
//             <img ref={addImgRef} className="absolute bottom-[15%] left-[-15%] opacity-0" src="/images/process/vtwo.webp" alt="" />

//             <div ref={addCardRef} className="glass rounded-3xl text-white p-2 h-[26vh] w-[13vw] absolute top-0 left-0 opacity-0">
//               <div className="h-[45%] flex justify-center items-center w-full">
//                 <div className='bg-[url("/images/process/lthree.webp")] bg-no-repeat bg-center h-[10vh] w-full'></div>
//               </div>
//               <div className="h-[55%] flex flex-col justify-center items-center w-full">
//                 <div className="text-[1.3vw]">Visualize</div>
//                 <div className="text-[0.8vw] text-center font-extralight">
//                   High-quality visuals help you experience the space before execution.
//                 </div>
//               </div>
//             </div>

//             <img ref={addImgRef} className="absolute top-[15%] left-[50%] opacity-0" src="/images/process/vone.webp" alt="" />

//             <div ref={addCardRef} className="glass rounded-3xl text-white p-2 h-[26vh] w-[13vw] absolute bottom-0 right-0 opacity-0">
//               <div className="h-[45%] flex justify-center items-center w-full">
//                 <div className='bg-[url("/images/process/lfour.webp")] bg-no-repeat bg-center h-[10vh] w-full'></div>
//               </div>
//               <div className="h-[55%] flex flex-col -mt-3 justify-center items-center w-full">
//                 <div className="text-[1.3vw]">Deliver</div>
//                 <div className="text-[0.8vw] text-center font-extralight">
//                   High-quality visuals help you experience the space before execution.
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Process

import React from 'react'

const Process = () => {
  return (
    <div>Process</div>
  )
}

export default Process