import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import logo from "../assets/brandLogo/logo.webp";
import whitelogo from "../assets/brandLogo/logo-white.png";
import { motion } from "motion/react";

const serviceOptions = [
  { label: "Website Designing", path: "/services/website-designing" },
  { label: "Website Development", path: "/services/website-development" },
  { label: "PPC Google Ads", path: "/services/ppc-google-ads" },
  {
    label: "Search Engine Optimization",
    path: "/services/search-engine-optimization",
  },
  {
    label: "Social Media Optimization",
    path: "/services/social-media-optimization",
  },
  { label: "GMB Promotion", path: "/services/gmb-promotion" },
  { label: "Youtube Marketing", path: "/services/youtube-marketing" },
  { label: "Video Editing", path: "/services/video-editing" },
];

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "#", label: "Services" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigateToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="flex items-center justify-between h-12 w-[90vw] bg-transparent backdrop-blur-sm px-2 rounded-sm border border-gray-400/20">
          {/* logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={whitelogo} alt="Brand-logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center border border-l-white/25 border-r-white/25 border-transparent space-x-2 bg-black/35 px-4 py-1 rounded">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key={link.path} className="group relative">
                    <Link
                      to={link.path}
                      onClick={handleNavigateToTop}
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

                    <div
                      className="
    pointer-events-none
    absolute left-0 top-full w-72
    rounded-2xl
    border border-fuchsia-500/20
    bg-black/95
    backdrop-blur-2xl
    shadow-[0_10px_20px_rgba(168,85,247,0.25)]
    p-3

    opacity-0
    invisible
    -translate-y-3
    scale-95

    transition-all
    duration-300
    ease-out

    group-hover:opacity-100
    group-hover:visible
    group-hover:translate-y-0
    group-hover:scale-100
    group-hover:pointer-events-auto
  "
                    >
                      <ul className="space-y-2">
                        {serviceOptions.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.path}
                              onClick={handleNavigateToTop}
                              className="
          group/item
          relative
          flex
          overflow-hidden
          rounded-xl
          px-4
          py-3
          text-sm
          font-medium
          text-white/70
          transition-all
          duration-300
          cursor-pointer

          hover:bg-gradient-to-r
          hover:from-fuchsia-600/20
          hover:to-purple-600/20

          hover:text-white
          hover:translate-x-2
          hover:shadow-lg
        "
                            >
                              <span className="absolute left-0 top-0 h-full w-1 bg-fuchsia-500 scale-y-0 transition-transform duration-300 group-hover/item:scale-y-100"></span>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavigateToTop}
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
              );
            })}
          </div>

          {/* Desktop Button */}
          <Link
            to="/contact"
            onClick={handleNavigateToTop}
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 h-screen px-4 mt-2 bg-black/80 backdrop-blur-sm rounded border border-white/20"
          >
            <div className="flex flex-col space-y-4 pt-2 border-t border-white/20">
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div key={link.path} className="flex flex-col gap-2">
                      <Link
                        to={link.path}
                        onClick={handleNavigateToTop}
                        className={`${
                          location.pathname === link.path
                            ? "text-[#89298D] font-semibold"
                            : "text-white hover:text-[#89298D]"
                        } transition-colors`}
                      >
                        {link.label}
                      </Link>
                      <div className="ml-3 flex flex-col gap-1 border-l border-white/15 pl-3">
                        {serviceOptions.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={handleNavigateToTop}
                            className="text-sm text-white/70 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleNavigateToTop}
                    className={`${
                      location.pathname === link.path
                        ? "text-[#89298D] font-semibold"
                        : "text-white hover:text-[#89298D]"
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Get In Touch Button on Mobile */}
              <Link
                to="/contact"
                onClick={handleNavigateToTop}
                className="px-4 py-2 hover:bg-[#6b1f6b] text-white rounded transition-colors cursor-grab w-fit"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
