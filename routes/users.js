const express = require("express");
const auth = require("../middleware/validation");
const userController = require("../controller/user");
const storeController = require("../controller/stores");
const commentsController = require("../controller/comments");
const followingController = require("../controller/following");
const validate = require("../helper/validate");
const uploadVideo = require("../helper/uploadVideo");
const uploadPhoto = require("../helper/uploadPhoto");
const router = express.Router();

router.get("/checkEmail/:email", userController.checkEmail);
router.get("/checkUsername/:username", userController.checkUserName);
router.get("/checkPhoneNumber/:number", userController.checkPhoneNumber);
router.post("/singUp", [validate.signUp], userController.signUp);
router.post("/login", userController.userLogin);
router.post("/forgot/password", userController.forgotPassword);

router.get("/checkSession", auth, userController.authentication);
router.post("/verify/otp", auth, userController.verifyOtp);
router.post("/update/profile", auth, uploadPhoto, userController.updateProfile);
router.get("/profile/by/id/:userId", userController.getUserProfileById);

// Videos, Comments, Likes
router.post("/uploadVideo", auth, uploadVideo, userController.uploadVideo);
router.get("/browseVideos/limit/:limit/offset/:offset", auth, userController.fetchALlVideos);
router.get("/video/like/unlike/:foodId", auth, userController.likeUnlikeFoodPost);
router.post("/video/comment", auth, commentsController.commentPost);
router.post("/video/update/comment", auth, commentsController.updateComment);
router.get("/video/delete/comment/:commentId", auth, commentsController.deleteComment);
router.get("/video/fetch/comments/:foodId", auth, commentsController.fetchFoodPostComments);
router.get("/video/comment/like/unlike/:commentId", auth, commentsController.likeUnlikeComment);

// Follow/Unfollow
router.get("/follow/unfollow/:followId", auth, followingController.followUnfollow);
router.get("/is/follow/:followId", auth, followingController.isFollow);
router.get("/followers/list", auth, followingController.followersList);
router.get("/following/list", auth, followingController.followingList);

// // Stores
// router.post("/stores/list", storeController.getStores);
// router.get("/stores/categories/:storeId", storeController.getStoresCategories);
// router.get("/stores/food/items/:storeId", storeController.getStoresFoodItems);
// router.get("/stores/category/food/items/:catId", storeController.getCategoryFoodItems);
// router.get("/stores/get/by/category/name/:offset/:limit/:catName", storeController.getStoresByCategoryName);


// // Search
// router.get("/search/:limit/:string", storeController.searchString);


module.exports = router;
