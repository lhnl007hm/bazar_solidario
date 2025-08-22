require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

const authRoutes = require("./src/routes/auth");
const itemRoutes = require("./src/routes/items");

const PORT = process.env.PORT || 5000;

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado!"))
  .catch((err) => console.error(err));

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
