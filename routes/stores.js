const express = require("express");
const storeController = require("../controller/stores");
const router = express.Router();

// Stores
router.post("/list", storeController.getStores);
router.get("/categories/:storeId", storeController.getStoresCategories);
router.get("/food/items/:storeId", storeController.getStoresFoodItems);
router.get("/category/food/items/:catId", storeController.getCategoryFoodItems);
router.get("/get/by/category/name/:offset/:limit/:catName", storeController.getStoresByCategoryName);


// Search
router.get("/search/:limit/:string", storeController.searchString);


module.exports = router;
