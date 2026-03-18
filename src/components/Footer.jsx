import { FaBehance, FaDribbble, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const links = ["Home", "About us", "Services", "Portfolio"];

  return (
    <footer className="bg-[#111] text-gray-400 px-6 py-14">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
        <div><img className='w-[30vw]' src="/images/logo.png" alt="Logo" /></div>
        <div className='fonttwo -mt-1 pl-[4vw] tracking-[3em] md:text-[1.3vw] text-[1.6vw] md:mt-0 mt-2 font-semibold text-center'>STUDIO</div>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-8 mb-8">
          {links.map((link, i) => (
            <li key={i} className="group relative cursor-pointer">
              <span className="text-sm text-gray-400 group-hover:text-white transition duration-300">
                {link}
              </span>

              {/* sleek underline animation */}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg mb-10">
          {[FaBehance, FaDribbble, FaLinkedinIn, FaFacebookF, FaInstagram].map(
            (Icon, i) => (
              <Icon
                key={i}
                className="cursor-pointer hover:text-white transition duration-300 hover:scale-110"
              />
            )
          )}
        </div>

        {/* Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6 text-xs">
          <p>© 2025 - All rights reserved</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="cursor-pointer hover:text-white transition">
              Terms & Conditions
            </span>
            <span className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}