const express = require("express");
const router = express.Router();
const apikey = require("../config/apikey");
const ReportController = require("../controllers/ReportController");

router.use(apikey);
router.get("/csv", ReportController.exportFornecedoresCSV);

module.exports = router;