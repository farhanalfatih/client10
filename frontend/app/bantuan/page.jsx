import React from "react";
import Navbar from "../Components/navbar/navbar";
import Footer from  "../Components/footer/footer";

const page = () => {
  return (
    <>
      {/* <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div> */}
      <div className="mt-50">
        <div className="max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg transition-all duration-300">
          <h1 className="text-2xl font-bold mb-4">Bantuan</h1>
          <p className="text-gray-700 mb-6">
            Halaman bantuan ini menyediakan informasi dan panduan untuk membantu
            Anda dalam menggunakan layanan kami. Jika Anda memiliki pertanyaan
            atau membutuhkan bantuan lebih lanjut, silakan hubungi tim dukungan
            kami melalui tombol di bawah ini.
          </p>
          <div className="">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
              Hubungi Kami 
            </button>
          </div>
        </div>
      </div>

        {/* <div className="mt-50 p-10">
          <Footer />
        </div> */}
    </>
  );
};

export default page;
