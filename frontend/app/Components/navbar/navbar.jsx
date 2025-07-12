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
      <div className="container mx-auto px-4 p-3">
        <div className="navbarbox flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between gap-5">
            <a href="/" className="logo">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.P0NHhGE_xgDNSjEdu0NDrAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Logo senovhop"
                className="w-10 h-10 rounded-full shadow-lg border-4"
              />
            </a>
            <h1 className="text-sm font-bold">SENOVSHOP</h1>
          </div>

          <ul
            className={` md:flex md:items-center md:justify-center md:gap-8 md:flex-1 md:mx-8
              md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 
              gap-6 fixed ${menuAktive} top-0 w-full h-screen pt-24 md:pt-0 px-6 flex-col rounded-none 
              shadow-lg bg-background font-bold items-start text-left transition-all duration-300 ${getTextColorClass()}`}
          >
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="/" className="block">
                Beranda
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="/cek-pesanan" className="block">
                Cek pesanan
              </a>
            </li>
            <li className="opacity-90 hover:opacity-100 px-3 py-1">
              <a href="/bantuan" className="block">
                Bantuan
              </a>
            </li>
          </ul>

          <div className="hidden md:block">
            <a
              href="/auth/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            >
              {/* <i className="ri-login-box-line text-white mr-2"></i> Login */}
              Discord
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
