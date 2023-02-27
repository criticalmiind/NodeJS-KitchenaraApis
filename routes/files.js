const express = require("express");
const auth = require("../middleware/validation");
const filesController = require("../controller/files");
const validate = require("../helper/validate");
const uploadVideo = require("../helper/uploadVideo");
const uploadPhoto = require("../helper/uploadVideo");
const router = express.Router();

router.get('/video/:filename', filesController.playVideo);
router.get('/photo/:filename', filesController.getPhoto);


module.exports = router;
