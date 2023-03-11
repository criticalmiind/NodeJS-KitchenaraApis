const express = require("express");
const auth = require("../middleware/validation");
const pass_session = require("../middleware/identify_session");
const userController = require("../controller/user");
const userRequestsController = require("../controller/userRequests");
const googleController = require("../controller/google_auth");
const commentsController = require("../controller/comments");
const followingController = require("../controller/following");
const validate = require("../helper/validate");
const uploadVideo = require("../helper/uploadVideo");
const uploadPhoto = require("../helper/uploadPhoto");
const router = express.Router();

router.post("/google/signup", googleController.signUp);
router.post("/google/signin", googleController.signIn);
router.get("/checkEmail/:email", userController.checkEmail);
router.get("/checkUsername/:username", userController.checkUserName);
router.get("/checkPhoneNumber/:number", userController.checkPhoneNumber);
router.post("/signup", [validate.signUp], userController.signUp);
router.post("/login", userController.userLogin);
router.post("/forgot/password", userController.forgotPassword);

router.get("/checkSession", auth, userController.authentication);
router.post("/verify/otp", auth, userController.verifyOtp);
router.post("/update/profile", auth, uploadPhoto, userController.updateProfile);
router.post("/reset/passsword", auth, userController.updateProfile);
router.get("/profile/by/id/:userId", userController.getUserProfileById);
router.get("/get/profile", auth, userController.getUserProfile);

// Videos
router.post("/uploadVideo", auth, uploadVideo, userController.uploadVideo);
router.post("/upload/thumbnail", auth, uploadPhoto, userController.uploadVideoThumbnail);
router.get("/browseVideos/limit/:limit/offset/:offset", pass_session, userController.fetchALlVideos);
router.get("/fetch/videos/limit/:limit/offset/:offset", auth, userController.fetchUserVideos);

// Comments, Likes
router.get("/video/like/unlike/:foodId", auth, userController.likeUnlikeFoodPost);
router.post("/video/comment", auth, commentsController.commentPost);
router.post("/video/update/comment", auth, commentsController.updateComment);
router.get("/video/delete/comment/:commentId", auth, commentsController.deleteComment);
router.get("/video/fetch/comments/:foodId", pass_session, commentsController.fetchFoodPostComments);
router.get("/video/comment/like/unlike/:commentId", auth, commentsController.likeUnlikeComment);

// Follow/Unfollow
router.get("/follow/unfollow/:followId", auth, followingController.followUnfollow);
router.get("/is/follow/:followId", auth, followingController.isFollow);
router.get("/followers/list", auth, followingController.followersList);
router.get("/following/list", auth, followingController.followingList);

// Orders
router.post("/submit/order", auth, userController.submitOrder);
router.get("/get/orders/:filter", auth, userController.getOrdersList);
router.get("/get/order/by/id/:orderId", auth, userController.getOrderById);
router.get("/get/order/status/:orderId", auth, userController.getOrderStatus);

// Requests
router.post("/submit/request", auth, userRequestsController.submitRequest);


module.exports = router;
