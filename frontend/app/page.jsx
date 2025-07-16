"use client";
import React, { useState } from "react";
import Navbar from "./Components/navbar/navbar";
import Benner from "./Components/benner/Benner";
import Produk from "./Components/produk/produk";
import Footer from "./Components/footer/footer";
import Marquee from "./Components/testimoni/testimoni";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);

    // Scroll ke elemen dengan id="produk"
    const el = document.getElementById("produk");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const produkList = [
    {
      title: "Minecraft Premium",
      image: "/CARD.png",
      category: "minecraft",
    },
    {
      title: "Jasa skin",
      image: "/CARD.png",
      category: "skin",
    },
    {
      title: "Marketplace Minecraft",
      image: "/CARD.png",
      category: "jasa-setup",
    },
  ];

  return (
    <div>
      <div className="mt-40 z-40">
        <Benner />
      </div>

      <div className="mt-20">
        <div className="max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg transition-all duration-300">
          <h1 className="font-bold text-2xl text-center mb-10">
            kamu lagi cari kebutuhan minecraft apa?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {produkList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(item.category)}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:grayscale transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-yellow-400 text-2xl font-extrabold text-center drop-shadow-md">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👇 Bagian Produk berdasarkan category */}
      <div className="mt-30 z-30" id="produk">
        <Produk category={selectedCategory} />
      </div>

      <div className="mt-40">
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Testimoni kami
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Yuk intip orang orang yg puas dengan layanan atau produk kami!!!.
        </p>
        <Marquee />
      </div>
    </div>
  );
};

export default Page;
