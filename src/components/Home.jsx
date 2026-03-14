import React from 'react'

const Home = () => {
    const boxes = (
  <> 
    <div className='h-[40vh] w-[15vw] mt-[5vh] ml-5 rounded-tr-[3vw] rounded-xl 
    bg-[url("/images/marquee/mone.png")] bg-no-repeat bg-cover '></div>
    <div className='h-[40vh] w-[15vw] mt-[5vh] rounded-bl-[3vw] rounded-xl 
    bg-[url("/images/marquee/mtwo.png")] bg-no-repeat bg-cover'></div>
    <div className='h-[40vh] w-[15vw] mt-[5vh] rounded-tr-[3vw] rounded-xl 
    bg-[url("/images/marquee/mthree.png")] bg-no-repeat bg-cover'></div>
    <div className='h-[40vh] w-[15vw] mt-[5vh] rounded-bl-[3vw] rounded-xl 
    bg-[url("/images/marquee/mfour.png")] bg-no-repeat bg-cover'></div>
    <div className='h-[40vh] w-[15vw] mt-[5vh] rounded-tr-[3vw] rounded-xl 
    bg-[url("/images/marquee/mfive.png")] bg-no-repeat bg-cover'></div>
    <div className='h-[40vh] w-[15vw] mt-[5vh] rounded-bl-[3vw] rounded-xl 
    bg-[url("/images/marquee/msix.png")] bg-no-repeat bg-cover'></div>
  </>
);

  return (
    <div className='bg-[#1C1C1C] w-screen h-screen'>
       <div className='text-white pt-[18vh] flex flex-col justify-center items-center '>
        <div><img className='w-[40vw]' src="/images/logo.png" alt="Logo" /></div>
        <div className='fonttwo -mt-1 pl-[4vw] tracking-[3.5em] text-[1.3vw] font-semibold text-center'>STUDIO</div>
        <div className='fontone mt-4 tracking-normal font-light text-[1.2vw]'>Interior design studio based in London</div>
      <div className="overflow-hidden w-full">
  <div className="marquee">
    <div className="flex gap-5">
      {boxes}
    </div>
    <div className="flex gap-5">
      {boxes}
    </div>
  </div>
</div>

       </div>
    </div>
  )
}

export default Home