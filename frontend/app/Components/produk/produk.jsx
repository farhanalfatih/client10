"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import Link from "next/link";
import { RiPaintBrushLine, RiFlashlightLine } from "react-icons/ri";

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
        <p className="text-gray-500 text-center p-10">Produk tidak ditemukan.</p>
      ) : (
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredProduk.map((produk) => {
              const hargaAsli = produk.harga_asli || produk.harga + 10000;
              const diskonPersen = Math.round(
                ((hargaAsli - produk.harga) / hargaAsli) * 100
              );

              return (
                <Link href={`/produk/${produk.id}`} key={produk.id}>
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition h-full flex flex-col">
                    <img
                      src={produk.gambar || "https://placehold.co/600x400"}
                      alt={produk.judul}
                      className="w-full h-36 object-cover"
                    />

                    {/* Label */}
                    <div className="px-4 pt-2">
                      <span className="inline-flex items-center gap-1 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full">
                        <RiPaintBrushLine className="text-sm" />
                        {produk.kategori}
                      </span>
                    </div>

                    {/* Info Produk */}
                    <div className="px-4 pb-4 flex-1">
                      <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                        {produk.judul}
                      </h2>

                      <div className="flex justify-between text-xs text-gray-600 items-center mt-2">
                        <div className="flex items-center gap-1">
                          <RiFlashlightLine />
                          <span>PEMBUATAN CEPAT</span>
                        </div>
                        <span>Stok: {produk.stock ?? "-"}</span>
                      </div>

                      <div className="mt-2">
                        <p className="text-xs text-gray-500 line-through">
                          Dari Rp{" "}
                          {(
                            produk.harga_asli || produk.harga + 10000
                          ).toLocaleString("id-ID")}
                        </p>
                        <p className="text-green-600 text-xs font-bold">
                          -
                          {Math.round(
                            ((produk.harga_asli - produk.harga) /
                              produk.harga_asli) *
                              100
                          ) || 0}
                          %
                        </p>
                        <p className="text-lg font-bold text-black">
                          Rp {produk.harga?.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>

                    {/* Tombol */}
                    <div className="p-4 pt-0">
                      <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 transition">
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Produk;
