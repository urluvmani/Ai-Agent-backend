const cors = require("cors");
const express = require("express");
const router = require("./routes/ai.route");
const app = express();

app.use(
  cors({
    origin: ["https://ai-mani.vercel.app"], // your frontend domain
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/ai", router);

app.get("/", (req, res) => {
  res.send("Server working fine ✅");
});

module.exports = app;
