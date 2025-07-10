"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductImageSlider from "../../Components/ProductImageSlider";

export default function ProductDetailClient({ produk }) {
  const [tabIndex, setTab] = useState(0);
  const router = useRouter(); // <-- Tambahkan ini

  const images = Array.isArray(produk.gambar)
    ? produk.gambar
    : produk.gambar?.split(",") || ["https://placehold.co/600x400"];

  const handleBuyNow = () => {
    // Simpan produk ke localStorage
    localStorage.setItem("checkoutProduk", JSON.stringify(produk));
    // Arahkan ke halaman checkout
    router.push("/page/checkout");
  };
  return (
    <div className="min-h-screen py-10 px-4 mt-40">
      {/* Konten Utama Produk */}
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <ProductImageSlider images={images} />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {produk.judul}
            </h1>

            <p className="text-lg text-gray-500 mb-2">
              Stok:{" "}
              <span className="font-semibold text-gray-700">
                {produk.stock ?? "-"}
              </span>
            </p>

            <p className="text-2xl font-bold text-red-600 mb-6">
              Rp {produk.harga?.toLocaleString("id-ID") || 0}
            </p>
          </div>

          <button
            onClick={handleBuyNow}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Beli Sekarang
          </button>
        </div>
      </div>

      {/* Informasi Toko */}
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl flex items-center gap-5">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.P0NHhGE_xgDNSjEdu0NDrAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Foto Toko senovshop"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800">senovshop</p>
          <p className="text-sm text-gray-500">toko minecraft terpercaya</p>
          <p>
            <a href="" className="text-blue-600">
              lihat toko
            </a>
          </p>
        </div>
      </div>

      {/* Tab Deskripsi */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 text-sm font-medium">
            {[
              "Deskripsi Produk",
              "Deskripsi Game",
              "Persyaratan Sistem",
              "Panduan Aktivasi",
            ].map((tab, i) => (
              <button
                key={i}
                onClick={() => setTab(i)}
                className={`px-4 py-2 border-b-2 transition ${
                  tabIndex === i
                    ? "border-blue-600 text-black font-semibold"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-4 bg-white p-4 rounded-xl shadow-sm text-sm leading-relaxed whitespace-pre-line">
          {tabIndex === 0 && (
            <>
              <div>{produk.deskripsi || "Tidak ada deskripsi produk."}</div>
            </>
          )}
          {tabIndex === 1 && (
            <div className="">
              <p className="font-semibold">The World Is Your Playground!</p>
              With Minecraft Java & Bedrock Edition (PC), the world is made of
              blocks! Explore, mine, craft, and survive in an endless world!
              <p className="font-semibold mt-4">It's All About Exploring!</p>
              Countless possibilities await. Build anything, anywhere, anytime.
            </div>
          )}
          {tabIndex === 2 && (
            <div>
              Minimal: OS Windows 10, RAM 4 GB, GPU Intel HD Graphics 4000,
              Storage 1 GB.
            </div>
          )}
          {tabIndex === 3 && (
            <div>
              Panduan aktivasi akan dikirim setelah pembelian melalui email atau
              WhatsApp.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
