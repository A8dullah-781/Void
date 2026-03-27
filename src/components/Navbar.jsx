import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const lastScroll = useRef(0);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };
  useEffect(() => {
  const target =
    window.innerWidth >= 768 ? desktopRef.current : mobileRef.current;

  if (!target) return;

  gsap.fromTo(
    target,
    { opacity: 0, },
    { opacity: 1, duration: 1.2, delay:0.5, ease: "power2.out" }
  );
  
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const target =
        window.innerWidth >= 768 ? desktopRef.current : mobileRef.current;

      if (!target) return;

      if (currentScroll > lastScroll.current) {
        gsap.to(target, { y: "-100%", duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(target, { y: "0%", duration: 0.4, ease: "power2.out" });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div
        ref={desktopRef}
        className="hidden md:flex justify-center items-center fixed top-0 w-full z-50"
      >
        <div className="bg-[#f2f2f238] glass w-[80vw] lg:w-[60vw] px-6 text-white m-2 rounded-2xl flex justify-between items-center flex-row h-[6vh] lg:h-[10vh]">
          <div>
            <img src="/images/logo.png" alt="Logo" className="w-[10vw]" />
          </div>

          <div className="flex text-[1.8vw] lg:text-[1.2vw] fontone flex-row gap-5 lg:gap-8 justify-center items-center">
            {[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about" },
              { name: "Service", id: "services" },
              { name: "Portfolio", path: "/portfolio" },
            ].map((item) =>
              item.id ? (
                <div
                  key={item.name}
                  className="relative group cursor-pointer"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                </div>
              ) : (
                <div
                  key={item.name}
                  className="relative group cursor-pointer"
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                </div>
              )
            )}

            <div
              onClick={() => handleNavClick("contact")}
              className="relative bg-[#F2F2F2] overflow-hidden text-[1.8vw] lg:text-[1.2vw] text-black hover:text-white py-2 px-3.5 rounded-3xl group cursor-pointer"
            >
              <span className="absolute inset-0 bg-blue-400 rounded-3xl scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100"></span>
              <span className="relative z-10">Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE TOP BAR */}
      <div
        ref={mobileRef}
        className="md:hidden fixed top-0 w-full z-50 flex justify-between items-center px-5 py-4 bg-[#1C1C1C] text-white"
      >
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
        <div
          className="flex justify-end p-5 text-3xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ×
        </div>

        <div className="flex justify-center mt-2">
          <img src="/images/logo.png" className="w-[60vw]" />
        </div>

        <div className="flex flex-col items-center gap-4 mt-10 text-[5vw] fontone">
          <div onClick={() => handleNavClick("home")}>Home</div>
          <div onClick={() => handleNavClick("services")}>Services</div>
          <div onClick={() => handleNavClick("about")}>About Us</div>

          <div
            onClick={() => handleNavClick("contact")}
            className="mt-6 glass text-[4.3vw] bg-zinc-800 px-6 py-3 rounded-2xl"
          >
            FREE CONSULTATION
          </div>
        </div>

        <div className="absolute bottom-26 w-full flex justify-center gap-6 text-lg">
          <FaLinkedinIn className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaFacebookF className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaBehance className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaDribbble className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="hover:scale-110 transition-all duration-300 cursor-pointer" />
        </div>

        <div className="absolute bottom-18 w-full text-center text-xs text-gray-300">
          © 2025 – All rights reserved
        </div>
      </div>
    </>
  );
};

export default Navbar;