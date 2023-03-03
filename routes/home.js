const express = require("express");
const storeController = require("../controller/stores");
const router = express.Router();

// home data
router.get("/data", storeController.getHomeData);

module.exports = router;
