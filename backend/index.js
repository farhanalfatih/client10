const express = require("express");
const cors = require("cors");
const orderRouter = require("./routes/order");

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // frontend lokal
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Server lokal aktif!");
});

app.use("/order", orderRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server lokal jalan di http://localhost:${PORT}`);
});
