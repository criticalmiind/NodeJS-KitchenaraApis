const express = require("express");
const auth = require("../middleware/validation");
const userController = require("../controller/user");
const validate = require("../helper/validate");
const uploadVideo = require("../helper/uploadVideo");
const router = express.Router();

router.get("/checkEmail/:email", userController.checkEmail);
router.get("/checkUsername/:username", userController.checkUserName);
router.get("/checkPhoneNumber/:number", userController.checkPhoneNumber);
router.post("/singUp", [validate.signUp], userController.signUp);
router.post("/login", userController.userLogin);

router.get("/checkSession", auth, userController.authentication);
router.post("/uploadVideo", auth, uploadVideo, userController.uploadVideo);
router.get("/browseVideos/limit/:limit/offset/:offset", auth, userController.fetchALlVideos);

router.get('/video/:filename', userController.playVideo);

module.exports = router;
