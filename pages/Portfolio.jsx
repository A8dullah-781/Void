import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleViewProject = (index) => {
    switch(index){
      case 0: navigate("/projectOne"); break;
      case 1: navigate("/projectTwo"); break;
      case 2: navigate("/projectThree"); break;
      case 3: navigate("/projectFour"); break;
      default: break;
    }
  }

  return (
    <>
      <div className="flex mt-[6vh] lg:mt-[8vh] min-h-screen w-full items-center flex-col bg-[#1c1c1c] fontone">
        <div className="uppercase text-white font-medium py-10 mt-8 font-[200] text-[5vw]">
          Our work :
        </div>

        <div className="md:flex hidden flex-col">

          {/* Card 1 */}
          <div className="fontone text-white flex py-6 gap-10 flex-row px-[7.5vw] h-full w-screen ">
            <div className="h-[30vh] lg:h-[70vh] w-1/2 bg-[url('/images/work/wone.png')] bg-no-repeat bg-cover"></div>
            <div className="h-[30vh] lg:h-[70vh] w-1/2 flex flex-col p-8 items-start justify-center gap-4 bg-[#1c1c1c]">
              <div className="text-[4vw] font-bold uppercase leading-none">
                Shadow line <br /> Residence
              </div>
              <div className="text-[1vw]">Residential Project</div>
              <div className="text-[1vw]">
                Shadowline Residence is a modern residential interior concept
                built around a bold grey and black palette, clean architectural
                lines, and premium minimal furniture. Soft ambient lighting,
                rich textures, and balanced spacing create a calm yet luxurious
                living experience with a strong contemporary identity.
              </div>
              <div 
                onClick={() => handleViewProject(0)} 
                className="btn-slide bg-amber-50 mt-4 text-[1.2vw] px-6 py-3 cursor-pointer"
              >
                <span className="bg-slide"></span>
                <span className="text-slide">View Project</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fontone text-white flex py-6 gap-10 flex-row px-[7.5vw] h-full w-screen ">
            <div className="h-[30vh] lg:h-[70vh]  w-1/2 flex flex-col p-8 items-start justify-center gap-4 bg-[#1c1c1c]">
              <div className="text-[4vw] font-bold uppercase leading-none">
                Forest Edge <br /> Residence
              </div>
              <div className="text-[1vw]">Residential Project</div>
              <div className="text-[1vw]">
                Forest Edge Residence is a modern luxury bedroom concept inspired by nature. It features a deep forest green accent wall, an olive green upholstered bed, and warm walnut furniture with matte black details. Soft neutral textures and warm ambient lighting create a calm, premium hotel-like atmosphere with a clean contemporary feel.
              </div>
              <div 
                onClick={() => handleViewProject(1)} 
                className="btn-slide bg-amber-50 mt-4 text-[1.2vw] px-6 py-3 cursor-pointer"
              >
                <span className="bg-slide"></span>
                <span className="text-slide">View Project</span>
              </div>
            </div>
            <div className="h-[30vh] lg:h-[70vh] w-1/2 bg-[url('/images/work/wtwo.png')] bg-no-repeat bg-cover"></div>
          </div>

          {/* Card 3 */}
          <div className="fontone text-white flex py-6 gap-10 flex-row px-[7.5vw] h-full w-screen ">
            <div className="h-[30vh] lg:h-[70vh] w-1/2 bg-[url('/images/work/wthree.png')] bg-no-repeat bg-cover"></div>
            <div className="h-[30vh] lg:h-[70vh] w-1/2 flex flex-col p-8 items-start justify-center gap-4 bg-[#1c1c1c]">
              <div className="text-[4vw] font-bold uppercase leading-none">
                Forge Gym
              </div>
              <div className="text-[1vw]">Commercial Project</div>
              <div className="text-[1vw]">
                Forge Gym is a modern, high-end fitness space combining sleek black equipment, warm wood accents, and clean industrial design. Every zone from strength and cardio to functional training and recovery is purposefully laid out for flow, performance, and a premium, energetic atmosphere.
              </div>
              <div 
                onClick={() => handleViewProject(2)} 
                className="btn-slide bg-amber-50 mt-4 text-[1.2vw] px-6 py-3 cursor-pointer"
              >
                <span className="bg-slide"></span>
                <span className="text-slide">View Project</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="fontone text-white flex py-6 gap-10 flex-row px-[7.5vw] h-full w-screen ">
            <div className="h-[35vh] lg:h-[70vh] w-1/2 flex flex-col p-8 items-start justify-center gap-4 bg-[#1c1c1c]">
              <div className="text-[4vw] font-bold uppercase leading-none">
                Vertex <br /> Workspace
              </div>
              <div className="text-[1vw]">Commercial Project</div>
              <div className="text-[1vw]">
                Vertex Workspace is a modern office interior designed to enhance productivity and collaboration within a clean, professional environment. The layout balances open workstations, private cabins, and meeting spaces to support diverse work styles. A refined material palette of wood, glass, and subtle stone finishes creates a cohesive identity, while strategic lighting and natural elements add warmth and depth. The result is a functional, visually strong workspace that reflects efficiency and contemporary corporate culture.
              </div>
              <div 
                onClick={() => handleViewProject(3)} 
                className="btn-slide bg-amber-50 mt-4 text-[1.2vw] px-5 py-2 cursor-pointer"
              >
                <span className="bg-slide"></span>
                <span className="text-slide">View Project</span>
              </div>
            </div>
            <div className="h-[35vh] lg:h-[70vh] w-1/2 bg-[url('/images/work/wfour.png')] bg-no-repeat bg-cover"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;