const FornecedorModel = require("../models/FornecedoresModel");

const getAllFornecedores = async (req, res) => {
    try {
        const fornecedores = await FornecedorModel.getAllFornecedores();
        res.status(200).json(fornecedores);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar fornecedores." });
    }
};

const getFornecedor = async (req, res) => {
    try {
        const fornecedor = await FornecedorModel.getFornecedoresById(req.params.id);
        if (!fornecedor) {
            return res.status(404).json({ message: "Fornecedor não encontrado." });
        }
        res.status(200).json(fornecedor);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar fornecedor." });
    }
};

const createFornecedor = async (req, res) => {
    try {
        const { name } = req.body;
        const newFornecedor = await FornecedorModel.createFornecedor(name);
        res.status(201).json(newFornecedor);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar fornecedor." });
    }
};

const updateFornecedor = async (req, res) => {
    try {
        const fornecedor = await FornecedorModel.updateFornecedor(req.params.id, req.body);
        if (!fornecedor) {
            return res.status(404).json({ message: "Fornecedor não encontrado." });
        }
        res.json(fornecedor);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar o bruxo." });
    }
};

const deleteFornecedor = async (req, res) => {
    try {
        const message = await FornecedorModel.deleteFornecedor(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar o fornecedor." });
    }
}

module.exports = { getAllFornecedores, getFornecedor, createFornecedor, updateFornecedor, deleteFornecedor };   