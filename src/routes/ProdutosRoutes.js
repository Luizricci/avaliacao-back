const express = require('express');
const router = express.Router();
const upload = require("../config/upload");
const apikey = require("../config/apikey");
const produtosController = require("../controllers/ProdutosController");

router.use(apikey);

router.get("/", produtosController.getAllProdutos);
router.get("/:id", produtosController.getById);
router.post("/", upload.single("photo"),produtosController.createProdutos);
router.put("/:id", upload.single("photo"), produtosController.editProdutos);
router.delete("/:id", produtosController.deleteProduto);

module.exports = router;