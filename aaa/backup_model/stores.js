const db = require("../config/database");

module.exports = class Stores {
  constructor() { }

  getHomeCategories() {
    return db.execute(`SELECT DISTINCT * FROM categories WHERE isHome = 1 GROUP BY catName`)
  }

  getPopularCategories() {
    return db.execute(`SELECT DISTINCT * FROM categories WHERE isPopular = 1 GROUP BY catName`)
  }

  getStoresByLatLng({ lat, lng, offset = 0, limit = 10, radius = 6371 }) {
    return db.execute(`
      SELECT * 
      FROM (
        SELECT u.*, 
              (${radius} * 2 * ASIN(SQRT(POWER(SIN((${lat} - SUBSTRING_INDEX(location, ',', 1)) * pi()/180 / 2), 2) + COS(${lat} * pi()/180) * COS(SUBSTRING_INDEX(location, ',', 1) * pi()/180) * POWER(SIN((${lng} - SUBSTRING_INDEX(location, ',', -1)) * pi()/180 / 2), 2)))) AS distance
        FROM users u
        WHERE u.status = 1
      ) AS temp
      WHERE distance <= 2 AND userType = 'store'
      LIMIT ${offset}, ${limit};
    `)
  }

  getStoresCategories(userId) {
    return db.execute(`SELECT * FROM categories WHERE userId = ${userId};`)
  }

  getStoresFoodItems(userId) {
    return db.execute(`SELECT fi.*, c.* FROM fooditems fi JOIN categories c ON fi.catId = c.catId WHERE fi.userId = ${userId} AND fi.foodDeleted = 0;`)
  }

  getCategoryFoodItems(catId) {
    return db.execute(`SELECT fi.*, u.* FROM fooditems fi JOIN users u ON fi.userId = u.userId WHERE fi.catId = ${catId} AND fi.foodDeleted = 0;`)
  }

  searchString(string, limit = 10) {
    return db.execute(`
      SELECT DISTINCT userType AS type, userId AS id, fullName AS name, profilePic AS image, username, 'null' AS price 
      FROM users 
      WHERE (username LIKE '%${string}%' OR fullName LIKE '%${string}%') AND status = 1
      UNION
      SELECT DISTINCT 'food' AS type, foodId AS id, foodName AS name, foodImage AS image, 'null' AS username, foodPrice AS price 
      FROM fooditems 
      WHERE (foodName LIKE '%${string}%' OR foodTags LIKE '%${string}%') AND foodDeleted = 0
      UNION
      SELECT DISTINCT 'category' AS type, catId AS id, catName AS name, catImage AS image, 'null' AS username, 'null' AS price 
      FROM categories 
      WHERE catName LIKE '%${string}%' 
      LIMIT ${limit}
    `)
  }

  getStoresByCategoryName(catName, offset = 0, limit = 10) {
    return db.execute(`
      SELECT DISTINCT u.* 
      FROM users u
      INNER JOIN categories c ON u.userId = c.userId
      WHERE c.catName LIKE '%${catName}%' 
      LIMIT ${offset}, ${limit};
    `)
  }
};
