// app/produk/[id]/page.jsx
import { supabase } from "../../../utils/supabase";
import React from 'react';

const Page = async ({ params }) => {
  const { id } = params;

  // Ambil data berdasarkan kolom `idorder`, bukan `id`
  const { data: produk, error } = await supabase
    .from("orders")
    .select("idorder, nama, gmail, nomor_telpon, harga_asli, status, created_at")
    .eq("idorder", id) // ✅ PERUBAHAN DI SINI
    .single();

  if (error || !produk) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        Produk tidak ditemukan.
        <br />
        <code>ID dari URL: {id}</code>
        <br />
        <code>Error: {error?.message}</code>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 mt-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Detail Pesanan</h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">ID Pesanan:</span> {produk.idorder}</p>
          <p><span className="font-semibold">Nama:</span> {produk.nama}</p>
          <p><span className="font-semibold">Email:</span> {produk.gmail}</p>
          <p><span className="font-semibold">Nomor Telepon:</span> {produk.nomor_telpon}</p>
          <p><span className="font-semibold">Harga:</span> Rp {produk.harga_asli?.toLocaleString('id-ID')}</p>
          <p><span className="font-semibold">Status:</span> {produk.status}</p>
          <p><span className="font-semibold">Tanggal Order:</span> {new Date(produk.created_at).toLocaleString('id-ID')}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
