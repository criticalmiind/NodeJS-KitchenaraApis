const Stores = require("../model/stores");

let stores = new Stores();

const getHomeData = async (req, res, next) => {
  try {
    let [home] = await stores.getHomeCategories()
    let [popular] = await stores.getPopularCategories()

    return res.status(200).json({
      "data": {
        "popular": popular.map((e) => ({
          "catName": e.catName,
          "catDescription": e.catDescription,
          "catImage": e.catImage,
        })),
        "home": home.map((e) => ({
          "catName": e.catName,
          "catDescription": e.catDescription,
          "catImage": e.catImage
        }))
      }
    });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}


const getStores = async (req, res, next) => {
  /**
    * @dev the payload will contain following properties:
    * - `latlng`
    * - `radius`
    * - `offset`
    * - `limit`
    */

  try {
    let payload = req.body
    payload['lat'] = payload['latlng'].split(",")[0]
    payload['lng'] = payload['latlng'].split(",")[1]
    let [result] = await stores.getStoresByLatLng(payload);
    let data = result.map((e) => ({
      "storeId": e['userId'],
      "username": e['username'],
      "fullName": e['fullName'],
      "email": e['email'],
      "phoneNumber": e['phoneNumber'],
      "profilePic": e['profilePic'],
      "location": e['location'],
      "storeAddress": e['storeAddress'],
      "distance": e['distance']
    }))
    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

const getStoresCategories = async (req, res, next) => {
  /**
    * @dev the payload will contain following properties:
    * - `storeId`
    */

  try {
    let [result] = await stores.getStoresCategories(req.params.storeId);
    let categories = []
    for (let i = 0; i < result.length; i++) {
      const el = result[i];
      let [food] = await stores.getCategoryFoodItems(el['catId'])
      categories.push({
        "catId": el['catId'],
        "catName": el['catName'],
        "catDescription": el['catDescription'],
        "catImage": el['catImage'],
        "items": food.map((f) => ({
          "foodId": f.foodId,
          "storeId": f.userId,
          "storeName": f.fullName,
          "foodName": f.foodName,
          "foodTags": f.foodTags,
          "foodDescription": f.foodDescription,
          "foodPrice": f.foodPrice,
          "foodQty": f.foodQty,
          "foodImage": f.foodImage,
        }))
      })
    };
    // let data = result.map((e) => ({
    //   "catId": e['catId'],
    //   "catName": e['catName'],
    //   "catDescription": e['catDescription'],
    //   "catImage": e['catImage'],
    // }))
    return res.status(200).json({ "data": categories });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

const getStoresFoodItems = async (req, res, next) => {
  /**
    * @dev the payload will contain following properties:
    * - `storeId`
    */

  try {
    let [result] = await stores.getStoresFoodItems(req.params.storeId);
    let data = result.map((e) => ({
      "foodId": e.foodId,
      "category": {
        "catId": e.catId,
        "catName": e.catName,
        "catImage": e.catImage,
      },
      "storeId": e.userId,
      "foodName": e.foodName,
      "foodTags": e.foodTags,
      "foodDescription": e.foodDescription,
      "foodPrice": e.foodPrice,
      "foodQty": e.foodQty,
      "foodImage": e.foodImage,
    }))
    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

const getCategoryFoodItems = async (req, res, next) => {
  /**
    * @dev the payload will contain following properties:
    * - `catId`
    */

  try {
    let [result] = await stores.getCategoryFoodItems(req.params.catId);
    let data = result.map((e) => ({
      "foodId": e.foodId,
      "catId": e.catId,
      "store": {
        "storeId": e['userId'],
        "username": e['username'],
        "fullName": e['fullName'],
        "profilePic": e['profilePic']
      },
      "foodName": e.foodName,
      "foodTags": e.foodTags,
      "foodDescription": e.foodDescription,
      "foodPrice": e.foodPrice,
      "foodQty": e.foodQty,
      "foodImage": e.foodImage,
    }))
    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

const searchString = async (req, res, next) => {
  /**
    * @dev the payload will contain following properties:
    * - `string`
    * - `limit`
    */
  const { limit, string } = req.params
  try {
    let [result] = await stores.searchString(string, limit);
    let data = result.sort(() => Math.random() - 0.5);

    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

const getStoresByCategoryName = async (req, res, next) => {
  /**
    * @dev the payload will contain following properties:
    * - `catName`
    */
  const { catName } = req.params
  try {
    let [result] = await stores.getStoresByCategoryName(catName);
    let data = result.sort(() => Math.random() - 0.5);
    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

module.exports = {
  "getHomeData": getHomeData,
  "getStores": getStores,
  "getStoresCategories": getStoresCategories,
  "getStoresFoodItems": getStoresFoodItems,
  "getCategoryFoodItems": getCategoryFoodItems,
  "searchString": searchString,
  "getStoresByCategoryName": getStoresByCategoryName
};
