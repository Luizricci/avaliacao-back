const ProdutosModel = require('../models/ProdutosModel');

const getAllProdutos = async (req, res) => {
    try {
        const {validade} = req.query;
        const produtos = await ProdutosModel.getAllProdutos(validade);
        res.json(produtos) 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os produtos.' });
    }
}

const getById = async (req, res) => {
    try {
        const produto = await ProdutosModel.getProdutosById(req.params.id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado.' });
        }
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produto.' });
    }
}

const createProdutos = async (req, res) => {
    try {
        const { name, validade, fornecedor_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newProduto = await ProdutosModel.createProdutos(name, validade, photo, fornecedor_id);
        res.status(201).json(newProduto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar produto.' });
        
    }
}

const editProdutos = async (req, res) => {
    try {
        const { name } = req.body;
        const produto = await ProdutosModel.editProduto(req.params.id, name);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado.' });
        }
        res.status(202).json(produto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao editar produto.' });
    }
}

const deleteProduto = async (req, res) => {
    try {
        const result = await ProdutosModel.deleteProduto(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto.' });
    }
}




module.exports = {getAllProdutos, getById, createProdutos, editProdutos, deleteProduto}