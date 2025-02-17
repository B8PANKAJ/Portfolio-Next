import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // User has scrolled past 50px
      } else {
        setIsScrolled(false); // At the top of the page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      data-aos="fade-down"
      data-aos-duration="1500"
      className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen py-3 shadow ${
        isScrolled ? "bg-white text-gray-900" : "bg-transparent text-black"
      } transition-colors duration-300 backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg`}
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <p className="font-extrabold text-2xl italic font-cursive">
                {" "}
                Pankaj
              </p>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              href="#about-me"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black"
            >
              Projects
            </a>
            <a
              href="#education"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black"
            >
              Education
            </a>
            <a
              href="#contact"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 focus:outline-none hover:text-white"
              onClick={handleDropdownToggle}
            >
              {showDropdown ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {showDropdown && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <a
              href="#about-me"
              className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100  hover:text-black"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black"
            >
              Projects
            </a>
            <a
              href="#education"
              className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black"
            >
              Education
            </a>
            <a
              href="#contact"
              className="block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-black"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
