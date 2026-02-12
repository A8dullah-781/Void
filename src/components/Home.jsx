import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#1C1C1C] w-screen h-screen'>
       <div className='text-white pt-[18vh] flex flex-col justify-center items-center '>
        <div><img className='w-[40vw]' src="/images/logo.png" alt="Logo" /></div>
        <div className='fonttwo -mt-1 pl-[4vw] tracking-[3.5em] text-[1.3vw] font-semibold text-center'>STUDIO</div>
        <div className='fontone mt-4 tracking-normal font-light text-[1.2vw]'>Interior design studio based in London</div>
       </div>
    </div>
  )
}

export default Home