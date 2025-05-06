const pool = require("../config/database");

const getAllProdutos = async (validade) => {
    if (!validade) {
        const result = await pool.query(
            `SELECT
                p.id,
                p.name,
                p.validade,
                p.photo,
                f.name AS fornecedor_name
            FROM produtos p
            LEFT JOIN fornecedores f ON p.fornecedor_id = f.id
            `
        );
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT
                p.id,
                p.name,
                p.validade,
                p.photo,
                f.name AS fornecedor_name
            FROM produtos p
            LEFT JOIN fornecedores f ON p.fornecedor_id = f.id
            WHERE p.validade LIKE $1
            `, [`%${validade}%`]);
        return result.rows;
    }
}

const getProdutosById = async (id) => {
    const result = await pool.query (`SELECT * FROM produtos WHERE id = $1`, [id])
    return result.rows
}

const createProdutos = async (name, validade, photo) => {
    const result = await pool.query (`INSERT INTO produtos (name, validade, photo) VALUES ($1, $2, $3) RETURNING *`, [name, validade, photo])
    return result.rows[0]
}

const editProduto = async (id, name) => {
    const result = await pool.query (`UPDATE produtos SET name = $1 WHERE id = $2 RETURNING *`, [name, id])
    return result.rows[0]
}

const deleteProduto = async (id) => {
    const result = await pool.query (`DELETE FROM produtos WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Produto não encontrado." };
    }
    return { message: "Produto deletado com sucesso." };
}

module.exports = {getAllProdutos, getProdutosById, createProdutos, editProduto, deleteProduto}