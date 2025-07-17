const express = require("express");
const router = express.Router();
const { supabase } = require("../supabase"); // udah baner dngan fierla sayua 
const { v4: uuidv4 } = require("uuid");

// POST /orders
router.post("/", async (req, res) => {
  const { nama, gmail, nomor_telpon, idproduct, harga_asli } = req.body;

  // Validasi data
  if (!nama || !gmail || !nomor_telpon || !idproduct || !harga_asli) {
    return res.status(400).json({ error: "Semua data wajib diisi!" });
  }

  const { error } = await supabase
    .from("orders")
    .insert([
      {
        idorder: uuidv4(),
        nama,
        gmail,
        nomor_telpon,
        idproduct,
        harga_asli,
      },
    ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Order berhasil dibuat!" });
});

module.exports = router;
