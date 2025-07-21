const express = require("express");
const router = express.Router();
const { supabase } = require("../supabase");
const { v4: uuidv4 } = require("uuid");

// Tes koneksi
router.get("/", (req, res) => {
  res.json({ message: "Order endpoint aktif!" });
});

// Buat order baru
router.post("/", async (req, res) => {
  const { nama, gmail, nomor_telpon, idproduct, harga_asli } = req.body;

  console.log("✅ Incoming order:", req.body);

  if (!nama || !gmail || !nomor_telpon || !idproduct || harga_asli == null) {
    console.log("❌ Data tidak lengkap");
    return res.status(400).json({ error: "Semua data wajib diisi!" });
  }

  if (typeof harga_asli !== "number") {
    return res.status(400).json({ error: "Harga harus berupa angka!" });
  }

  const idorder = uuidv4();

  const { error } = await supabase
    .from("orders")
    .insert([{ idorder, nama, gmail, nomor_telpon, idproduct, harga_asli }]);

  if (error) {
    console.log("❌ Error insert Supabase:", error.message);
    return res.status(500).json({ error: "Gagal menyimpan data order" });
  }

  console.log("✅ Order disimpan:", idorder);
  res.json({ message: "Order berhasil dibuat!", idorder });
});

// Ambil detail order
router.get("/:idorder", async (req, res) => {
  const { idorder } = req.params;

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("idorder", idorder)
    .single();

  if (error || !data) {
    console.log("❌ Order tidak ditemukan:", error?.message || "Not found");
    return res.status(404).json({ error: "Pesanan tidak ditemukan" });
  }

  res.json(data);
});


module.exports = router;
