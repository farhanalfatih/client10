"use client";
import React from "react";
import Navbar from "./Components/navbar/navbar";
import Benner from "./Components/benner/Benner";
import Produk from "./Components/produk/produk";
import Footer from "./Components/footer/footer";
import InstagramEmbed from "./Components/InstagramEmbed";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true,     // animasi hanya sekali
    });
  }, []);
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

        <section className="mt-20 px-4 sm:px-8 md:px-16 lg:px-24">
          <h2 className=" text-black font-bold text-2xl absolute left-52 mt-[-30]">
            Berita Terkini
          </h2>
          <div className="grid gap-1 justify-center md:grid-cols-3">
            <InstagramEmbed  link="https://www.instagram.com/p/DJ5hKQpvAGN/?img_index=1" />
            <InstagramEmbed link="https://www.instagram.com/p/DJ5hKQpvAGN/?img_index=1" />
            <InstagramEmbed link="https://www.instagram.com/p/DJ5hKQpvAGN/?img_index=1" />
          </div>
          
        </section>

        <div className="mt-50 p-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
