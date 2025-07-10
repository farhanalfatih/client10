'use client';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [formSaved, setFormSaved] = useState(false);
  const [openForm, setOpenForm] = useState(true);
  const [produk, setProduk] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    nama: '',
    hp: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('checkoutProduk');
    if (stored) {
      setProduk(JSON.parse(stored));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nama.trim()) newErrors.nama = 'Nama wajib diisi';
    if (!formData.hp.trim()) newErrors.hp = 'Nomor HP wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSimpan = () => {
    if (validateForm()) {
      setFormSaved(true);
      setOpenForm(false);
    }
  };

  const handleEdit = () => {
    setOpenForm(true);
    setFormSaved(false);
  };

  if (!produk) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Memuat data produk...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="flex bg-blue-950 p-10">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.P0NHhGE_xgDNSjEdu0NDrAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          className="mx-auto mb-6 w-20 h-20 rounded-full shadow-lg border-4"
          alt="logo"
        />
      </div>

      {/* Konten */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid md:grid-cols-3 gap-6">
        {/* Kiri */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold">Pembayaran</h2>

          {/* Produk */}
          <div className="flex items-center border p-4 rounded-md gap-4">
            <img
              src={produk.gambar?.split(',')[0] || "/placeholder.jpg"}
              alt={produk.judul}
              className="w-14 h-14 rounded-md object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-sm">{produk.judul}</h4>
              <p className="text-xs text-gray-500">{produk.kategori}</p>
            </div>
            <div className="text-right text-sm font-medium">
              Rp{produk.harga?.toLocaleString('id-ID')} x 1
            </div>
          </div>

          {/* Formulir Pembelian */}
          <details open={openForm && !formSaved} className="border rounded-md">
            <summary className="cursor-pointer font-semibold p-4 bg-gray-100">
              Formulir Pembelian
            </summary>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input
                  type="text"
                  placeholder="Nama lengkap"
                  className="w-full border p-2 rounded"
                  value={formData.nama}
                  onChange={(e) =>
                    setFormData({ ...formData, nama: e.target.value })
                  }
                />
                {errors.nama && (
                  <p className="text-xs text-red-500 mt-1">{errors.nama}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  className="w-full border p-2 rounded"
                  value={formData.hp}
                  onChange={(e) =>
                    setFormData({ ...formData, hp: e.target.value })
                  }
                />
                {errors.hp && (
                  <p className="text-xs text-red-500 mt-1">{errors.hp}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email (Gmail)</label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full border p-2 rounded"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <p className="text-sm text-gray-500">
                Isi formulir ini dengan benar karena akun akan dikirim ke Gmail.
              </p>

              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                onClick={handleSimpan}
              >
                Simpan
              </button>
            </div>
          </details>

          {/* Metode Pembayaran */}
          <details className="border rounded-md" open={formSaved}>
            <summary className="cursor-pointer font-semibold p-4 bg-gray-100">
              Metode Pembayaran
            </summary>
            <div className="p-4">
              {!formSaved ? (
                <p className="text-sm text-red-500">
                  Harap isi dan simpan formulir terlebih dahulu.
                </p>
              ) : (
                <div className="border p-4 rounded-md flex justify-between items-center">
                  <div>
                    <img src="/gopay.png" alt="Gopay" className="w-20 mb-1" />
                    <p className="text-sm text-gray-500">Biaya: IDR 10.693</p>
                  </div>
                  <button className="text-sm px-3 py-1 border rounded text-blue-500">
                    Ganti
                  </button>
                </div>
              )}
            </div>
          </details>
        </div>

        {/* Ringkasan Pembayaran */}
        <div className="bg-gray-50 p-6 rounded-md shadow">
          <h3 className="font-semibold mb-4">Detail Pembayaran</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Pesanan</span>
              <span>Rp{produk.harga?.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Admin</span>
              <span>Rp10.693</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-base">
              <span>Total Pembayaran</span>
              <span>
                Rp
                {produk.harga
                  ? (produk.harga + 10693).toLocaleString('id-ID')
                  : 0}
              </span>
            </div>
          </div>

          <button
            className={`mt-6 w-full py-2 rounded font-medium ${
              formSaved
                ? 'bg-orange-500 hover:bg-orange-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!formSaved}
          >
            Bayar
          </button>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Pembayaran Aman 100% Dijamin oleh{" "}
            <span className="text-blue-600 font-medium">Trade Guard</span>
          </p>
        </div>
      </div>
    </main>
  );
}
