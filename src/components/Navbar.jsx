import React from 'react'

const Navbar = () => {
  return (
 <div className='flex justify-center items-center'>
       <div className='bg-[#f2f2f238] glass w-[60vw] px-6 text-white absolute m-2 rounded-2xl flex justify-between items-center flex-row  top-0 h-[10vh]'>
     <div><img src="/images/logo.png" alt="Logo" className="w-[10vw]" /></div>
  <div className='flex text-[1.2vw] fontone flex-row gap-8 justify-center items-center'>
  <div className="relative group">
    Home
    <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
  </div>

  <div className="relative group">
    About Us
    <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
  </div>

  <div className="relative group">
    Service
    <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
  </div>

  <div className="relative group">
    Portfolio
    <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
  </div>

<div className="relative bg-[#F2F2F2] overflow-hidden text-[1.2vw] text-black py-2 px-3.5 rounded-3xl group">
  <span className="absolute inset-0 bg-blue-400 rounded-3xl scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100"></span>
  <span className="relative z-10">Contact Us</span>
</div>




</div>

    </div>
 </div>
  )
}

export default Navbar