"use client";
import React from "react";
import Navbar from "./Components/navbar/navbar";
import Benner from "./Components/benner/Benner";
import Produk from "./Components/produk/produk";
import Footer from "./Components/footer/footer";
import InstagramEmbed from "./Components/InstagramEmbed";
import Marquee from "./Components/testimoni/testimoni";
import { useEffect } from "react";

const page = () => {
  return (
    <>
      <div className="">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <div className="mt-40 z-40">
          <Benner />
        </div>

        <div className="mt-20">
            <div className="max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg transition-all duration-300"></div>
        </div>

        <div className="mt-30 z-30">
          <div className="">
            <Produk />
          </div>
        </div>

        <div className="mt-30 z-20">
          <h2 className="px-4 text-black font-bold text-2xl absolute left-52 mt-[-30]">
            Apa kata mereka
          </h2>
          <div className="max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg transition-all duration-300">
            <Marquee />
          </div>
        </div>

        <div className="mt-30 p-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
