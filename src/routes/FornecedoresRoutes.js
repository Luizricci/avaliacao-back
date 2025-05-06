const express = require('express');
const router = express.Router();
const FornecedoresController = require("../controllers/FornecedoresController");

router.get("/", FornecedoresController.getAllFornecedores);
router.get("/:id", FornecedoresController.getFornecedor);
router.post("/", FornecedoresController.createFornecedor);
router.put("/:id", FornecedoresController.updateFornecedor);
router.delete("/:id", FornecedoresController.deleteFornecedor);

module.exports = router;