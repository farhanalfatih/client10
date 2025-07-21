"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("orderId");
    if (id) {
      setOrderNumber(id);
    } else {
      // Kalau tidak ada ID, redirect kembali
      router.push("/");
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0f1e2e] text-white px-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
        alt="Success"
        className="w-28 h-28 mb-6"
      />

      <h1 className="text-4xl font-bold text-teal-400 mb-2">Pembayaran Berhasil!</h1>
      <p className="text-gray-300 max-w-md mb-4">
        Terima kasih telah melakukan pembelian. Informasi lebih lanjut akan kami kirimkan ke email Anda.
      </p>

      {/* Kode Pesanan */}
      <div className="bg-[#0f1e2e] border border-teal-500 rounded-lg p-4 mb-4 w-full max-w-md">
        <h2 className="text-sm text-gray-400 mb-2">Nomor Pesanan Anda</h2>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg text-teal-400 tracking-wider">
            {orderNumber}
          </span>
          <button
            onClick={handleCopy}
            className="text-sm bg-teal-500 hover:bg-teal-600 px-3 py-1 rounded-lg transition"
          >
            {copied ? "Tersalin!" : "Salin"}
          </button>
        </div>
      </div>

      <button
        onClick={() => router.push("/")}
        className="mt-2 bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg font-medium transition"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}
