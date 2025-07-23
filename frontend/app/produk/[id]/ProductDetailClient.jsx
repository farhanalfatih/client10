"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductImageSlider from "../../Components/ProductImageSlider";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function ProductDetailClient({ produk }) {
  const [tabIndex, setTab] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [qty, setQty] = useState(1);
  const router = useRouter();

  const images = Array.isArray(produk.gambar)
    ? produk.gambar
    : produk.gambar?.split(",") || ["https://placehold.co/600x400"];

  const handleLanjutCheckout = () => {
    const checkoutData = {
      ...produk,
      qty,
      total: qty * produk.harga,
    };
    localStorage.setItem("checkoutProduk", JSON.stringify(checkoutData));
    router.push("/page/checkout");
  };

  return (
    <div className="min-h-screen py-10 px-4 mt-20">
      {/* 🖥️ Desktop Mode: 60% - 40% Grid */}
      <div className="max-w-6xl mx-auto hidden md:grid grid-cols-5 gap-8">
        {/* Kiri - Produk */}
        <div className="col-span-3 bg-white shadow-xl rounded-2xl p-6">
          <ProductImageSlider images={images} />
          <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
            {produk.judul}
          </h1>
          <p className="text-lg text-gray-500 mb-2">
            Stok:{" "}
            <span className="font-semibold text-gray-700">
              {produk.stock ?? "-"}
            </span>
          </p>
          <p className="text-2xl font-bold text-red-600 mb-4">
            Rp {produk.harga?.toLocaleString("id-ID") || 0}
          </p>
          <div className="text-sm text-gray-600 whitespace-pre-line">
            {produk.deskripsi || "Tidak ada deskripsi produk."}
          </div>
        </div>

        {/* Kanan - Checkout */}
        <div className="col-span-2 bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-4 mt-20">
            {/* Qty */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Jumlah</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                  className="w-8 h-8 text-xl rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  −
                </button>
                <span className="w-10 text-center border rounded px-2 py-1">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="w-8 h-8 text-xl rounded-full bg-blue-500 text-white hover:bg-blue-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center border-t pt-4">
              <p className="font-semibold text-sm">Subtotal</p>
              <p className="font-bold text-orange-600">
                Rp {(qty * produk.harga).toLocaleString("id-ID")}
              </p>
            </div>

            {/* Catatan */}
            <div>
              <label className="text-sm font-medium block mb-1">
                Catatan (opsional)
              </label>
              <textarea
                rows={2}
                placeholder="Contoh: Kirim cepat ya"
                className="w-full border rounded-md px-3 py-2 text-sm resize-none"
              />
            </div>
          </div>

          {/* Tombol Checkout */}
          <button
            onClick={handleLanjutCheckout}
            className="mt-6 w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold"
          >
            Lanjut ke Checkout
          </button>
        </div>
      </div>

      {/* 📱 Mobile Mode: Drawer Checkout */}
      <div className="md:hidden max-w-2xl mx-auto">
        <ProductImageSlider images={images} />
        <h1 className="text-xl font-bold text-gray-800 mt-4 mb-2">
          {produk.judul}
        </h1>
        <p className="text-lg text-gray-500 mb-2">
          Stok:{" "}
          <span className="font-semibold text-gray-700">
            {produk.stock ?? "-"}
          </span>
        </p>
        <p className="text-xl font-bold text-red-600 mb-4">
          Rp {produk.harga?.toLocaleString("id-ID") || 0}
        </p>

        {/* Tombol buka drawer */}
        <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
          <DrawerTrigger asChild>
            <button className="fixed bottom-4 left-4 right-4 z-50 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700">
              Beli Sekarang
            </button>
          </DrawerTrigger>
          <DrawerContent className="p-6 rounded-t-2xl">
            <DrawerHeader>
              <DrawerTitle>Checkout</DrawerTitle>
            </DrawerHeader>
            <div className="space-y-4">
                 <div className="flex gap-5">
                  <img src={produk.gambar} className="w-29 h-20 object-cover" alt="" />
                <div className="grid">
                    <div className="">
                      {produk.judul}
                     </div>
                  <div className="">
                    <span>stock: </span>{produk.stock}
                  </div>
                </div>
              </div>
              {/* Qty */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Jumlah</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 text-xl rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="w-10 text-center border rounded px-2 py-1">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((prev) => prev + 1)}
                    className="w-8 h-8 text-xl rounded-full bg-blue-500 text-white hover:bg-blue-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center border-t pt-4">
                <p className="font-semibold text-sm">Subtotal</p>
                <p className="font-bold text-orange-600">
                  Rp {(qty * produk.harga).toLocaleString("id-ID")}
                </p>
              </div>

              {/* Tombol Lanjut */}
              <DrawerFooter>
                <button
                  onClick={handleLanjutCheckout}
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold"
                >
                  Lanjut ke Checkout
                </button>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Info Toko */}
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
            <a href="#" className="text-blue-600 hover:underline">
              Lihat Toko
            </a>
          </p>
        </div>
      </div>

      {/* Tab Deskripsi */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 text-sm font-medium">
            {["Deskripsi Produk", "Deskripsi Game", "Persyaratan Sistem"].map(
              (tab, i) => (
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
              )
            )}
          </nav>
        </div>

        <div className="mt-4 bg-white p-4 rounded-xl shadow-sm text-sm leading-relaxed whitespace-pre-line">
          {tabIndex === 0 && (
            <div>{produk.deskripsi || "Tidak ada deskripsi produk."}</div>
          )}
          {tabIndex === 1 && (
            <div>
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
        </div>
      </div>
    </div>
  );
}
