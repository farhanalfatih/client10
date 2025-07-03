import React from 'react';

const DetailProductPage = () => {
  const product = {
    name: 'Nama Produk Contoh',
    price: 150000,
    image: 'https://via.placeholder.com/400x300', // ganti dengan gambar asli
    description: 'Ini adalah deskripsi lengkap dari produk. Menjelaskan fitur, manfaat, dan detail penting lainnya.',
    stock: 12,
    rating: 4.5,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gambar Produk */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Detail Produk */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-green-600 font-semibold mb-2">Rp {product.price.toLocaleString()}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500 mb-2">Stok: {product.stock}</p>
            <p className="text-sm text-yellow-500">⭐ {product.rating} / 5</p>
          </div>

          {/* Tombol */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Beli Sekarang
            </button>
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
