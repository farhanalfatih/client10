const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const orderRouter = require('../routes/order');

// Middleware
app.use(cors({
  origin: "https://client10.vercel.app", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Server aktif dari Vercel!");
});

app.use("/order", orderRouter);

// Wajib: Export handler untuk Vercel
module.exports = app;
module.exports.handler = serverless(app);
