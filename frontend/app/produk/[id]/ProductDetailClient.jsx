"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductImageSlider from "../../Components/ProductImageSlider";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
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

          {/* Tombol Beli untuk Tablet & Laptop */}
          <div className="hidden md:block mt-4">
            <button
              onClick={() => setOpenDrawer(true)}
              className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition font-semibold"
            >
              Beli Sekarang
            </button>
          </div>

          {/* Drawer Trigger */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
            <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
              <DrawerTrigger asChild>
                <button className="w-full py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition font-semibold">
                  Beli Sekarang
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader className="border-b">
                  <DrawerTitle className="text-lg font-bold">
                    Informasi Pesanan
                  </DrawerTitle>
                </DrawerHeader>

                <div className="px-4 py-4 space-y-4">
                  {/* Nama Produk & Kategori */}
                  <div className="flex gap-5">
                    <div className="w-16 h-16 rounded-md object-cover">
                      <img src={produk.gambar} alt="" />
                    </div>
                    <div className="grid">
                      <p className="font-semibold text-base">{produk.judul}</p>
                      <p className="text-sm text-gray-500">{produk.kategori}</p>
                    </div>
                  </div>

                  {/* Harga dan Stok */}
                  <div className="flex items-center gap-2">
                    <p className="text-red-600 font-bold text-lg">
                      Rp {produk.harga?.toLocaleString("id-ID")}
                    </p>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                      Stok {produk.stock}
                    </span>
                  </div>

                  {/* Catatan */}
                  <div>
                    <label className="text-sm font-medium">
                      Catatan untuk Penjual (opsional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Kirim cepat ya"
                      className="w-full mt-1 border rounded-md px-3 py-2 text-sm resize-none"
                    />
                  </div>

                  {/* Qty */}
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-4 justify-between">
                      <p className="text-sm font-medium">Jumlah</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setQty((prev) => Math.max(1, prev - 1))
                          }
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
                  </div>

                  {/* Subtotal */}
                  <div className="border-t pt-4 flex justify-between items-center">
                    <p className="font-semibold text-sm">Subtotal</p>
                    <p className="font-bold text-orange-600">
                      Rp {(qty * produk.harga).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                <DrawerFooter className="px-4">
                  <button
                    onClick={handleLanjutCheckout}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold"
                  >
                    Lanjut ke Checkout
                  </button>
                  <DrawerClose asChild>
                    <button className="w-full text-sm py-2 text-gray-500 hover:text-black">
                      Batal
                    </button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
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
          ,
        </div>
      </div>
    </div>
  );
}
