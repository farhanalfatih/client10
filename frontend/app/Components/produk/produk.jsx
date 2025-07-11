"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Link from "next/link";

// Kategori tetap statis
const kategoriList = [
  { id: "all", nama: "Semua", icon: null },
  {
    id: "skin",
    nama: "skin",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969422.png",
  },
  {
    id: "minecraft",
    nama: "minecraft",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969425.png",
  },
];

const Produk = () => {
  const [produkData, setProdukData] = useState([]);
  const [kategori, setKategori] = useState("all");

  useEffect(() => {
    const fetchProduk = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Gagal ambil data produk:", error.message);
      } else {
        setProdukData(data);
      }
    };

    fetchProduk();
  }, []);

  const filteredProduk =
    kategori === "all"
      ? produkData
      : produkData.filter((p) => p.kategori === kategori);

  return (
    <section className="px-4 mt-10">
      {/* Judul dan Filter */}
      <div className="mb-6 lg:pl-52">
        <h2 className="text-black font-bold text-2xl mb-4">Produk Populer</h2>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-3 overflow-x-auto pb-2">
          {kategoriList.map((k) => (
            <button
              key={k.id}
              onClick={() => setKategori(k.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition whitespace-nowrap ${
                kategori === k.id
                  ? "border-blue-500 bg-blue-100 text-blue-700"
                  : "border-gray-200 bg-white text-black"
              }`}
            >
              {k.icon && (
                <img
                  src={k.icon}
                  alt={k.nama}
                  className="w-5 h-5 object-contain"
                />
              )}
              <span className="text-sm font-medium">{k.nama}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Produk */}
      {filteredProduk.length === 0 ? (
        <p className="text-gray-500 text-center">Produk tidak ditemukan.</p>
      ) : (
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProduk.map((produk) => (
              <div key={produk.id}>
                <Link href={`/produk/${produk.id}`} className="block h-full">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-4 h-full flex flex-col hover:shadow-xl transition">
                    <img
                      className="w-full h-40 object-cover rounded-xl"
                      src={produk.gambar || "https://placehold.co/600x400"}
                      alt={produk.judul}
                    />
                    <div className="py-4 flex-1">
                      <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                        {produk.judul}
                      </h2>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-red-600 font-semibold text-lg">
                          Rp {produk.harga?.toLocaleString("id-ID") || 0}
                        </span>
                      </div>
                      <p className="p-2">express</p>
                      <p className="text-sm text-gray-500">
                        Stok: {produk.stock ?? "-"}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Produk;
