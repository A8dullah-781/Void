import React from "react";
import { portfolioTwo } from "../constants/constant";

const PortfolioTwo = () => {
  return (
    <div className="flex fontone  flex-col bg-[#1c1c1c] justify-center items-center w-screen">
      <div className='md:h-[50vh] h-[40vh] rounded-3xl md:rounded-none md:m-0 m-4 lg:h-screen w-[90vw] md:w-screen flex justify-center items-start bg-[url("/images/portfolio/twoMain.png")] bg-cover bg-center bg-no-repeat'>
        <div className="h-[40vh] text-white flex justify-center items-center md:w-[50vw] md:mt-0 lg:mt-[16vh] -mt-[10vh]  flex flex-col">
          <div className="text-center text-[10vw] md:text-[6vw] leading-none uppercase font-bold md:font-semibold">
            Forest Edge <br /> Residence
          </div>
          <div className="flex flex-row md:w-[30vw] gap-10 md:gap-0  text-[4vw] md:text-[1.4vw] justify-between items-center">
            <div>&#40; Residential Project &#41;</div>
            <div>2024</div>
          </div>
        </div>
      </div>
      <div className="h-full py-8 md:py-16 px-[7.5vw] text-white fontone  w-screen">
        <div className="text-[6vw] text-center md:text-[2.6vw] font-bold">Project Overview:</div>
        <div className="text-[4vw] text-center md:text-left md:text-[1.8vw] font-light leading-none mt-4">
         Forest Edge Residence is a modern luxury bedroom concept inspired by nature. It features a deep forest green accent wall, an olive green upholstered bed, and warm walnut furniture with matte black details. Soft neutral textures and warm ambient lighting create a calm, premium hotel-like atmosphere with a clean contemporary feel.
        </div>
      </div>
      <div className="h-full w-screen text-white px-[7.5vw]">
        <div className="text-[2.6vw]  font-bold">Color Palette:</div>

     <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-4 py-8">
  {portfolioTwo.map((item, index) => (
    <div key={index} className="palet flex flex-col md:w-[20vw] w-[35vw] lg:w-[12vw] justify-center text-center items-center">
      
      <div 
        style={{ backgroundColor: item.color }}
        className="md:h-36 lg:h-46 h-32 w-full"
      ></div>

      <div className="py-2 lg:text-[1.3vw] font-semibold">{item.title}</div>

      <div className="text-[3vw] md:text-[1vw]">{item.desc}</div>

    </div>
  ))}
</div>

      </div>
      <div className="flex flex-row px-[7.5vw] py-4 md:h-[30vh] lg:h-[60vh] w-screen gap-4">
        <div className="h-full rounded-2xl w-1/2 bg-[url('/images/portfolio/twoOne.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="h-full rounded-2xl w-1/2 bg-[url('/images/portfolio/twoTwo.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="flex flex-col mb-4 gap-4 ">
      <div className="h-[40vh] lg:h-[80vh] py-4 w-[85vw] bg-[url('/images/portfolio/twoThree.png')] bg-cover bg-center bg-no-repeat rounded-2xl "></div>
      <div className="h-[40vh] lg:h-[80vh] py-4 w-[85vw] bg-[url('/images/portfolio/twoFour.png')] bg-cover bg-center bg-no-repeat rounded-2xl "></div>
      </div>
    </div>
  );
};

export default PortfolioTwo;
