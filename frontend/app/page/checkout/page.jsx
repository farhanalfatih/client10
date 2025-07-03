"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [email, setEmail] = useState("rahif9504@gmail.com");
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);

  const price = 2500000;

  const checkVoucher = () => {
    if (voucher.toUpperCase() === "SENOVSHOP") {
      setDiscount(1000000);
    } else {
      setDiscount(0);
      alert("Voucher tidak valid!");
    }
  };

  const finalPrice = price - discount;

  return (
    <div className="min-h-screen bg-[#0f1e2e] text-white px-4 py-10 ">
      <div>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.P0NHhGE_xgDNSjEdu0NDrAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Checkout Logo"
          className="mx-auto mb-6 w-32 h-32 rounded-full shadow-lg border-4 border-teal-400"
        />
        <h1 className="text-5xl font-bold text-center text-teal-400 mb-10">
          Checkout
        </h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#192a3e] rounded-xl p-4 shadow-lg">
          <div className="p-2">
            <h2 className="text-xl font-semibold mb-1">
              Minecraft Java Dan Badrock
            </h2>
            <a href="#" className="text-sm text-teal-400 hover:underline">
              Detail product
            </a>
          </div>
          <img
            src="/Screenshot_1.png"
            alt=""
            className="w-full h-auto rounded-lg mb-4"
          />
        </div>

        <div className="bg-[#192a3e] rounded-xl p-6 shadow-lg space-y-6">
          <div className="mt-5">
            <div>
              <label className="block text-sm mb-1">Gmail:</label>
              <input
                type="email"
                className="w-full bg-[#0f1e2e] border border-gray-600 rounded-lg p-2 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm mb-1 mt-5">Nomor Telpon:</label>
              <div className=""></div>
              <input
                type="number"
                className="w-full bg-[#0f1e2e] border border-gray-600 rounded-lg p-2 text-white"
                // value={}
              />
              <p className="text-xs text-gray-400 mt-2">
                Pastikan Email dan Nomor Telpon yang Anda masukkan benar. karna
                Kami akan mengirimkan informasi selanjutnya malalui Gmail yang
                Anda masukkan.
              </p>
            </div>

            {/* Voucher */}
            <div>
              <label className="block text-sm mb-1 mt-5">Voucher</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="SENOVSHOP"
                  className="flex-1 bg-[#0f1e2e] border border-gray-600 rounded-l-lg p-2 text-white"
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                />
                <button
                  onClick={checkVoucher}
                  className="bg-teal-500 hover:bg-teal-600 px-4 rounded-r-lg text-white font-medium"
                >
                  Check
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-700 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>minecraft java dan badrock</span>
                <span>Rp {price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>Rp {price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-400">
                <span>Diskon</span>
                <span>- Rp {discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-600 pt-2">
                <span>Total</span>
                <span>Rp {finalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-teal-500 hover:bg-teal-600 py-3 rounded-lg font-semibold text-white">
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
