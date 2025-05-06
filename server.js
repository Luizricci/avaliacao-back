require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const produtosRoutes = require("./src/routes/ProdutosRoutes");
const fornecedoresRoutes = require("./src/routes/FornecedoresRoutes");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/produtos", produtosRoutes);
app.use("/api/fornecedores", fornecedoresRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
