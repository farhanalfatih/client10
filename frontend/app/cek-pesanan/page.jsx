import React from "react";
import Navbar from "../Components/navbar/navbar";
import Footer from "../Components/footer/footer";
const Page = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="mt-32">
        {" "}
        {/* Ubah dari mt-50 ke mt-32 (tailwind tidak punya mt-50) */}
        <div className="max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg transition-all duration-300">
          <h1 className="text-2xl font-bold text-center">Cek Pesanan</h1>
          <p className="text-center mt-4">
            Masukkan nomor pesanan Anda untuk melihat detail.
          </p>

          {/* Form Input */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <input
              type="text"
              placeholder="Masukkan No. Pesanan"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-1/2"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
              Cek Pesanan
            </button>
          </div>

          {/* Tabel Pesanan */}
          <div className="overflow-x-auto mt-10">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No. Pesanan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Contoh data */}
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">01/01/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">Diproses</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800">
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-50 p-10">
        <Footer />
      </div>
    </>
  );
};

export default Page;
