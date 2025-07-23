const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const orderRouter = require("../routes/order");

const app = express();

app.use(cors({
  origin: "https://client10.vercel.app", // ganti dengan domain frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Server aktif dari Vercel!");
});

app.use("/order", orderRouter);

module.exports = app;
module.exports.handler = serverless(app); // wajib untuk Vercel
