"use client";
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setShow(!show);
  const menuAktive = show ? "right-0" : "-right-full";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
      if (window.scrollY > 5) setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTextColorClass = () => {
    if (scroll) {
      return "text-black";
    } else {
      return "text-black";
    }
  };

  return (
    <div
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scroll
          ? "py-4 bg-background/80 backdrop-blur shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 p-5">
        <div className="navbarbox flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="logo">
            <img
              src="https://placehold.co/600x400"
              alt="Logo"
              className="w-20 object-contain drop-shadow-lg"
            />
          </a>

          <ul
            className={` md:flex md:items-center md:justify-center md:gap-8 md:flex-1 md:mx-8
              md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 
              gap-6 fixed ${menuAktive} top-0 w-full h-screen pt-24 md:pt-0 px-6 flex-col rounded-none 
              shadow-lg bg-background font-bold items-start text-left transition-all duration-300 ${getTextColorClass()}`}
          >
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="https://dragonsoof.com/" className="block">
                Beranda
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="/" className="block">
                Cek pesanan
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="/" className="block">
                Bantuan
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <div className="hidden md:block">
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            >
              <i className="ri-login-box-line text-white mr-2"></i> Login
            </a>
          </div>

          {/* Login button for mobile (inside menu) */}
          <div className={`md:hidden fixed ${menuAktive} top-80 w-full px-6 transition-all duration-300`}>
            <a
              href="aurh/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 inline-block"
            >
              <i className="ri-login-box-line text-white mr-2"></i> Login
            </a>
          </div>

          {/* Icon menu mobile */}
          <i
            className={`text-2xl md:hidden block cursor-pointer z-[60] transition-all duration-200 ${
              show ? "ri-close-line" : "ri-menu-3-line"
            } ${getTextColorClass()}`}
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;