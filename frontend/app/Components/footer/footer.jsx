import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const paymentLogos = [
    {
      name: "dana",
      url: "https://toppng.com/uploads/preview/gopay-logo-png-image-11602832247bqoygm0jf3.png",
    },
    {
      name: "gopay",
      url: "https://toppng.com/uploads/preview/gopay-logo-png-image-11602832247bqoygm0jf3.png",
    },
    {
      name: "ovo",
      url: "https://toppng.com/uploads/preview/gopay-logo-png-image-11602832247bqoygm0jf3.png",
    },
    // Tambahkan lainnya sesuai kebutuhan
  ];

  return (
    <footer className="bg-white border-t text-gray-700 py-10 px-4 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo dan Deskripsi */}
        <div className="md:col-span-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Telkom_Indonesia_2021.svg"
            alt="Logo"
            className="w-12 h-12 mb-3"
          />
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi magni
            dicta quaerat, suscipit laborum, tempore praesentium obcaecati
            reprehenderit facilis enim nihil beatae libero saepe labore officiis
            nobis cumque earum dignissimos?
          </p>
          <p className="text-xs text-gray-500">
            © 2025 senovshop. All rights reserved.
          </p>
        </div>

        {/* Ikuti Kami */}
        <div className="relative lg:left-30 lg:top-10">
          <h3 className="font-semibold mb-2">Ikuti Kami</h3>
          <div className="flex space-x-3 mt-1">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-gray-600 hover:text-black text-lg"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="text-gray-600 hover:text-black text-lg"
              rel="noopener noreferrer"
            >
              <i className="ri-youtube-line"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              className="text-gray-600 hover:text-black text-lg"
              rel="noopener noreferrer"
            >
              <i className="ri-tiktok-line"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Metode Pembayaran */}
      <div className="max-w-7xl mx-auto mt-10">
        <h4 className="font-semibold mb-3">Mendukung Pembayaran</h4>
        <div className="flex flex-wrap gap-3">
          {paymentLogos.map((pay) => (
            <div
              key={pay.name}
              className="bg-white border rounded-md px-3 py-1"
            >
              <img
                src={pay.url}
                alt={pay.name}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
