import React, { useState, useRef, useEffect } from 'react'
import { Projects } from '../../constants/constant'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imgRef = useRef(null)
  const textRef = useRef(null)
  const navigate = useNavigate()

  const nextSlide = () => {
    if(currentIndex < Projects.length - 1) setCurrentIndex(currentIndex + 1)
  }

  const prevSlide = () => {
    if(currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const handleViewProject = () => {
    // Navigate to dynamic project routes
    switch(currentIndex){
      case 0: navigate("/projectOne"); break;
      case 1: navigate("/projectTwo"); break;
      case 2: navigate("/projectThree"); break;
      case 3: navigate("/projectFour"); break;
      default: break;
    }
  }

  useEffect(() => {
    // Image fade
    gsap.fromTo(imgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    )
    // Text fade
    gsap.fromTo(textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.2 }
    )
  }, [currentIndex])

  return (
    <div className='block md:hidden fontone h-[50vh] gap-3 text-white w-screen flex flex-col justify-center items-center bg-[#1c1c1c]'>

      {/* Image Wrapper */}
      <div className='relative flex items-center justify-center w-[80vw] h-[30vh]'>

        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button 
            onClick={prevSlide}
            className='absolute -left-8 text-white text-[6vw]'
          >
            <MdOutlineArrowBackIos />
          </button>
        )}

        {/* Image Div */}
        <div
          ref={imgRef}
          style={{ backgroundImage: `url(${Projects[currentIndex].img})` }}
          className='h-full w-full bg-cover bg-center'
        ></div>

        {/* Right Arrow */}
        {currentIndex < Projects.length - 1 && (
          <button 
            onClick={nextSlide}
            className='absolute -right-8 text-white text-[6vw]'
          >
            <MdOutlineArrowForwardIos />
          </button>
        )}

      </div>

      {/* Text */}
      <div ref={textRef} className='flex gap-2 flex-col items-center mt-2'>
        <div className='text-[5vw]'>{Projects[currentIndex].title}</div>
        <div className='text-[2.5vw]'>({Projects[currentIndex].neiche})</div>
      </div>

      {/* View Project */}
      <div 
        onClick={handleViewProject} 
        className='text-[3vw] bg-amber-50 mt-2 text-black px-4 py-2 rounded-3xl cursor-pointer'
      >
        View Project
      </div>

    </div>
  )
}

export default Work