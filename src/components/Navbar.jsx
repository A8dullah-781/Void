import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP SAME */}
      <div className="hidden md:flex justify-center items-center">
        <div className="bg-[#f2f2f238] glass w-[80vw] lg:w-[60vw] px-6 text-white absolute m-2 rounded-2xl flex justify-between items-center flex-row top-0 h-[7vh] lg:h-[10vh]">
          <div>
            <img src="/images/logo.png" alt="Logo" className="w-[10vw]" />
          </div>

          <div className="flex text-[1.8vw] lg:text-[1.2vw] fontone flex-row gap-5 lg:gap-8 justify-center items-center">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Service", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
            ].map((item) => (
              <Link to={item.path} key={item.name}>
                <div className="relative group cursor-pointer">
                  {item.name}
                  <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                </div>
              </Link>
            ))}

            <Link to="/contact">
              <div className="relative bg-[#F2F2F2] overflow-hidden text-[1.8vw] lg:text-[1.2vw] text-black hover:text-white py-2 px-3.5 rounded-3xl group cursor-pointer">
                <span className="absolute inset-0 bg-blue-400 rounded-3xl scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100"></span>
                <span className="relative z-10">Contact Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex justify-between items-center px-5 py-4 bg-[#1C1C1C] text-white">
        <img src="/images/logo.png" alt="Logo" className="w-[30vw]" />
        <div onClick={() => setOpen(true)} className="cursor-pointer">
          <div className="w-6 h-[2px] bg-white mb-1"></div>
          <div className="w-6 h-[2px] bg-white mb-1"></div>
          <div className="w-6 h-[2px] bg-white"></div>
        </div>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-[#1C1C1C] text-white z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE */}
        <div className="flex justify-end p-5 text-3xl cursor-pointer" onClick={() => setOpen(false)}>
          ×
        </div>

        {/* LOGO */}
        <div className="flex justify-center mt-2">
          <img src="/images/logo.png" className="w-[60vw]" />
        </div>

        {/* LINKS */}
        <div className="flex flex-col items-center gap-4 mt-10 text-[5vw] fontone">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>

          {/* BUTTON */}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <div className="mt-6 glass text-[4.3vw] bg-zinc-800 px-6 py-3 rounded-2xl">
              FREE CONSULTATION
            </div>
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="absolute bottom-26 w-full flex justify-center gap-6 text-lg">
          <FaLinkedinIn className=" hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaFacebookF className=" hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaBehance className=" hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaDribbble className=" hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaInstagram className=" hover:scale-110 transition-all duration-300 cursor-pointer" />
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-18 w-full text-center text-xs text-gray-300">
          © 2025 – All rights reserved
        </div>
      </div>
    </>
  );
};

export default Navbar;