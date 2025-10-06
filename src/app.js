// app.js
const express = require('express');
const router = require('./routes/ai.route');
const cors = require("cors")


const app = express();
app.use(cors())
app.use(express.json())

// Attach router
app.use("/ai", router);

module.exports = app;
