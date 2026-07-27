import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import logo from "../assets/brandLogo/logo.webp";
import whitelogo from "../assets/brandLogo/logo-white.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="flex items-center justify-between h-12 w-[90vw] bg-transparent backdrop-blur-sm px-2 rounded-sm border border-gray-400/20">
          {/* logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={whitelogo} alt="Brand-logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center border border-l-white/25 border-r-white/25 border-transparent space-x-2 bg-black/15 px-4 py-1 rounded">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group flex items-center gap-1 tracking-wide text-white transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <i className="ri-arrow-right-s-fill"></i>
                </span>

                <span
                  className={`transition-transform duration-300 ease-out group-hover:scale-95 text-sm ${
                    location.pathname === link.path
                      ? "underline underline-offset-4"
                      : ""
                  }`}
                >
                  {link.label}
                </span>

                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <i className="ri-arrow-left-s-fill"></i>
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <Link
            to="/contact"
            className="hidden md:block px-4 text-[0.9rem] hover:py-2 duration-300 ease-in-out hover:animate-pulse tracking-normal text-[#6b1f6b] rounded transition-colors cursor-grab"
          >
            Get In Touch
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <i className="ri-close-large-fill"></i>
            ) : (
              <i className="ri-bar-chart-horizontal-line"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 pt-2 border-t border-white/20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    location.pathname === link.path
                      ? "text-[#89298D] font-semibold"
                      : "text-white hover:text-[#89298D]"
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Get In Touch Button on Mobile */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:bg-[#6b1f6b] text-white rounded transition-colors cursor-grab w-fit"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
