"use client";
import React, { useState } from "react";
import Link from 'next/link'; 

const Page = () => {
  const [idorder, setIdorder] = useState("");
  const [pesanan, setPesanan] = useState(null);
  const [error, setError] = useState("");

  const handleCekPesanan = async () => {
    setError("");
    setPesanan(null);

    if (!idorder ) {
      return setError("Nomor pesanan wajib diisi");
    }
    
    try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/order/${idorder}`);
      if (!res.ok) {
        throw new Error("Pesanan tidak ditemukan");
      }

      const data = await res.json();
      setPesanan(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className=" min-h-screen bg-gray-100">
        <div className=" mt-52 max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg transition-all duration-300">
          <h1 className="text-3xl font-bold text-center">Cek Pesanan</h1>
          <p className="text-center mt-4 text-gray-600">
            Masukkan nomor pesanan Anda untuk melihat detail.
          </p>

          {/* Form Input */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <input
              type="text"
              placeholder="Masukkan No. Pesanan"
              value={idorder}
              onChange={(e) => setIdorder(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleCekPesanan}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
            >
              Cek Pesanan
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
          )}

          {/* Tabel Pesanan */}
          {pesanan && (
            <div className="overflow-x-auto mt-10">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      No. Pesanan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-100 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.idorder}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.nama}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pesanan.status || "Belum ada"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/cek-pesanan/${pesanan.idorder}`}>
                        <p className="text-blue-700 hover:underline">
                          Lihat Detail
                        </p>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
