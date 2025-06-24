import React from "react";
import ASA from "../../../public/Screenshot_1.png";

const Card = ({ ...props }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" {...props}>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-4 h-full flex flex-col">
        <img
          className="w-full h-64 object-cover rounded-xl"
          src="/Screenshot_1.png"
          alt="Gambar Produk"
        />
        <div className="py-4 flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Judul Produk</h2>
          <p className="text-gray-600 text-sm">
            Ini adalah deskripsi singkat dari produk. Tersedia dalam jumlah
            terbatas dan kualitas terbaik.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-gray-400 line-through text-sm">
              Rp 150.000
            </span>
            <span className="text-red-600 font-semibold text-lg">
              Rp 99.000
            </span>
          </div>
        </div>
        <div className="mt-4">
          <a href="">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
              Pesan Sekarang
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
