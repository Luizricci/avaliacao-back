const { format } = require("@fast-csv/format")

const FornecedoresModel = require("../models/FornecedoresModel");

const exportFornecedoresCSV  = async (req, res) => {
    try {
        const Fornecedores = await FornecedoresModel.getAllFornecedores();
        res.setHeader("Content-Disposition", "attachment; filename=Fornecedores.csv");
        res.setHeader("Content-type", "text-csv")

        const csvStream = format({headers: true})

        csvStream.pipe(res);

        Fornecedores.forEach((fornecedor) => {
            csvStream.write({
                Id: fornecedor.id,
                Nome: fornecedor.name,
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({message: "erro ao gerar o CSV"})
    }
}

module.exports = {exportFornecedoresCSV};