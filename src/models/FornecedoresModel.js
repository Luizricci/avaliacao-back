const { get } = require("../routes/ProdutosRoutes");
const pool = require("./../config/database")

const getAllFornecedores = async () => {
    const result = await pool.query(
        `SELECT * FROM fornecedores`
    );
    return result.rows
};

const getFornecedoresById = async (id) => {
    const result = await pool.query(
        `SELECT * FROM fornecedores WHERE id = $1`, [id]
    );
    return result.rows[0];
};

const createFornecedor = async (name) => {
    const result = await pool.query(
        `INSERT INTO fornecedores (name) VALUES ($1) RETURNING *`, [name]);
    return result.rows[0];
};

const updateFornecedor = async (id, name) => {
    const result = await pool.query(
        "UPDATE fornecedores SET name = $1 WHERE id = $2 RETURNING *",
        [name, id]
    );
    return result.rows[0];
}

const  deleteFornecedor = async (id) => {
    const result = await pool.query(
        "DELETE FROM fornecedores WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "fornecedor não encontrado." };
    }
    return { message: "fornecedor deletado com sucesso." };
}

module.exports = {getAllFornecedores, getFornecedoresById, createFornecedor, updateFornecedor, deleteFornecedor};