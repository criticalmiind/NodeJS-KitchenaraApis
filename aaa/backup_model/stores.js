const _0x156a40=_0x5a3a;(function(_0x1d4ad4,_0x45e1aa){const _0x94fd6d=_0x5a3a,_0x34ef03=_0x1d4ad4();while(!![]){try{const _0x5422a7=parseInt(_0x94fd6d(0x1e1))/0x1*(parseInt(_0x94fd6d(0x1f3))/0x2)+-parseInt(_0x94fd6d(0x1e9))/0x3+parseInt(_0x94fd6d(0x1ec))/0x4*(-parseInt(_0x94fd6d(0x1e6))/0x5)+-parseInt(_0x94fd6d(0x1fa))/0x6*(-parseInt(_0x94fd6d(0x1e5))/0x7)+parseInt(_0x94fd6d(0x1db))/0x8+-parseInt(_0x94fd6d(0x1f7))/0x9*(-parseInt(_0x94fd6d(0x1f8))/0xa)+-parseInt(_0x94fd6d(0x1fd))/0xb;if(_0x5422a7===_0x45e1aa)break;else _0x34ef03['push'](_0x34ef03['shift']());}catch(_0x5cfa79){_0x34ef03['push'](_0x34ef03['shift']());}}}(_0x4f01,0xb8ead));const db=require(_0x156a40(0x1ef));module['exports']=class Stores{constructor(){}[_0x156a40(0x1e7)](){const _0x25036e=_0x156a40;return db['execute'](_0x25036e(0x1f9));}[_0x156a40(0x1e0)](){const _0x370ddd=_0x156a40;return db[_0x370ddd(0x1f1)](_0x370ddd(0x1f6));}[_0x156a40(0x1e3)]({lat:_0x48e27c,lng:_0x3f75de,offset:offset=0x0,limit:limit=0xa,radius:radius=0x18e3}){const _0xdfdedc=_0x156a40;return db[_0xdfdedc(0x1f1)](_0xdfdedc(0x1fc)+radius+'\x20*\x202\x20*\x20ASIN(SQRT(POWER(SIN(('+_0x48e27c+_0xdfdedc(0x1eb)+_0x48e27c+_0xdfdedc(0x1e4)+_0x3f75de+_0xdfdedc(0x1f2)+offset+',\x20'+limit+_0xdfdedc(0x1dd));}[_0x156a40(0x1de)](_0x1ec234){const _0x43ee9a=_0x156a40;return db[_0x43ee9a(0x1f1)](_0x43ee9a(0x1ee)+_0x1ec234+';');}['getStoresFoodItems'](_0x186638){const _0x1ac32b=_0x156a40;return db['execute'](_0x1ac32b(0x1f0)+_0x186638+_0x1ac32b(0x1ed));}[_0x156a40(0x1fb)](_0x3d4a4f){const _0x494023=_0x156a40;return db[_0x494023(0x1f1)](_0x494023(0x1f5)+_0x3d4a4f+'\x20AND\x20fi.foodDeleted\x20=\x200;');}['searchString'](_0x2d8ebe,_0x49d95e=0xa){const _0x49d01a=_0x156a40;return db[_0x49d01a(0x1f1)](_0x49d01a(0x1dc)+_0x2d8ebe+_0x49d01a(0x1e2)+_0x2d8ebe+_0x49d01a(0x1e8)+_0x2d8ebe+_0x49d01a(0x1df)+_0x2d8ebe+'%\x27)\x20AND\x20foodDeleted\x20=\x200\x0a\x20\x20\x20\x20\x20\x20UNION\x0a\x20\x20\x20\x20\x20\x20SELECT\x20DISTINCT\x20\x27category\x27\x20AS\x20type,\x20catId\x20AS\x20id,\x20catName\x20AS\x20name,\x20catImage\x20AS\x20image,\x20\x27null\x27\x20AS\x20username,\x20\x27null\x27\x20AS\x20price\x20\x0a\x20\x20\x20\x20\x20\x20FROM\x20categories\x20\x0a\x20\x20\x20\x20\x20\x20WHERE\x20catName\x20LIKE\x20\x27%'+_0x2d8ebe+'%\x27\x20\x0a\x20\x20\x20\x20\x20\x20LIMIT\x20'+_0x49d95e+_0x49d01a(0x1ea));}['getStoresByCategoryName'](_0x188d70,_0x10e360=0x0,_0x36729f=0xa){const _0x3be17e=_0x156a40;return db[_0x3be17e(0x1f1)](_0x3be17e(0x1f4)+_0x188d70+'%\x27\x20\x0a\x20\x20\x20\x20\x20\x20LIMIT\x20'+_0x10e360+',\x20'+_0x36729f+_0x3be17e(0x1dd));}};function _0x5a3a(_0x371754,_0x4dead3){const _0x4f0197=_0x4f01();return _0x5a3a=function(_0x5a3a02,_0x1cb2c0){_0x5a3a02=_0x5a3a02-0x1db;let _0x244e24=_0x4f0197[_0x5a3a02];return _0x244e24;},_0x5a3a(_0x371754,_0x4dead3);}function _0x4f01(){const _0x2c7959=['getStoresCategories','%\x27\x20OR\x20foodTags\x20LIKE\x20\x27%','getPopularCategories','275IYupiZ','%\x27\x20OR\x20fullName\x20LIKE\x20\x27%','getStoresByLatLng','\x20*\x20pi()/180)\x20*\x20COS(SUBSTRING_INDEX(location,\x20\x27,\x27,\x201)\x20*\x20pi()/180)\x20*\x20POWER(SIN((','275338mNtnSP','2415rhmudx','getHomeCategories','%\x27)\x20AND\x20status\x20=\x201\x0a\x20\x20\x20\x20\x20\x20UNION\x0a\x20\x20\x20\x20\x20\x20SELECT\x20DISTINCT\x20\x27food\x27\x20AS\x20type,\x20foodId\x20AS\x20id,\x20foodName\x20AS\x20name,\x20foodImage\x20AS\x20image,\x20\x27null\x27\x20AS\x20username,\x20foodPrice\x20AS\x20price\x20\x0a\x20\x20\x20\x20\x20\x20FROM\x20fooditems\x20\x0a\x20\x20\x20\x20\x20\x20WHERE\x20(foodName\x20LIKE\x20\x27%','4169544bNbSQQ','\x0a\x20\x20\x20\x20','\x20-\x20SUBSTRING_INDEX(location,\x20\x27,\x27,\x201))\x20*\x20pi()/180\x20/\x202),\x202)\x20+\x20COS(','4112eveIAS','\x20AND\x20fi.foodDeleted\x20=\x200;','SELECT\x20*\x20FROM\x20categories\x20WHERE\x20userId\x20=\x20','../config/database','SELECT\x20fi.*,\x20c.*\x20FROM\x20fooditems\x20fi\x20JOIN\x20categories\x20c\x20ON\x20fi.catId\x20=\x20c.catId\x20WHERE\x20fi.userId\x20=\x20','execute','\x20-\x20SUBSTRING_INDEX(location,\x20\x27,\x27,\x20-1))\x20*\x20pi()/180\x20/\x202),\x202))))\x20AS\x20distance\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20users\x20u\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20u.status\x20=\x201\x0a\x20\x20\x20\x20\x20\x20)\x20AS\x20temp\x0a\x20\x20\x20\x20\x20\x20WHERE\x20distance\x20<=\x202\x20AND\x20userType\x20=\x20\x27store\x27\x0a\x20\x20\x20\x20\x20\x20LIMIT\x20','5366jymAOU','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20DISTINCT\x20u.*\x20\x0a\x20\x20\x20\x20\x20\x20FROM\x20users\x20u\x0a\x20\x20\x20\x20\x20\x20INNER\x20JOIN\x20categories\x20c\x20ON\x20u.userId\x20=\x20c.userId\x0a\x20\x20\x20\x20\x20\x20WHERE\x20c.catName\x20LIKE\x20\x27%','SELECT\x20fi.*,\x20u.*\x20FROM\x20fooditems\x20fi\x20JOIN\x20users\x20u\x20ON\x20fi.userId\x20=\x20u.userId\x20WHERE\x20fi.catId\x20=\x20','SELECT\x20DISTINCT\x20*\x20FROM\x20categories\x20WHERE\x20isPopular\x20=\x201\x20GROUP\x20BY\x20catName','11914758BFMmWJ','10zeOYBV','SELECT\x20DISTINCT\x20*\x20FROM\x20categories\x20WHERE\x20isHome\x20=\x201\x20GROUP\x20BY\x20catName','192HLQFpm','getCategoryFoodItems','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20*\x20\x0a\x20\x20\x20\x20\x20\x20FROM\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20u.*,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(','19320620BNrRrT','8638704dYmgyf','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20DISTINCT\x20userType\x20AS\x20type,\x20userId\x20AS\x20id,\x20fullName\x20AS\x20name,\x20profilePic\x20AS\x20image,\x20username,\x20\x27null\x27\x20AS\x20price\x20\x0a\x20\x20\x20\x20\x20\x20FROM\x20users\x20\x0a\x20\x20\x20\x20\x20\x20WHERE\x20(username\x20LIKE\x20\x27%',';\x0a\x20\x20\x20\x20'];_0x4f01=function(){return _0x2c7959;};return _0x4f01();}
// const db = require("../config/database");

// module.exports = class Stores {
//   constructor() { }

//   getHomeCategories() {
//     return db.execute(`SELECT DISTINCT * FROM categories WHERE isHome = 1 GROUP BY catName`)
//   }

//   getPopularCategories() {
//     return db.execute(`SELECT DISTINCT * FROM categories WHERE isPopular = 1 GROUP BY catName`)
//   }

//   getStoresByLatLng({ lat, lng, offset = 0, limit = 10, radius = 6371 }) {
//     return db.execute(`
//       SELECT * 
//       FROM (
//         SELECT u.*, 
//               (${radius} * 2 * ASIN(SQRT(POWER(SIN((${lat} - SUBSTRING_INDEX(location, ',', 1)) * pi()/180 / 2), 2) + COS(${lat} * pi()/180) * COS(SUBSTRING_INDEX(location, ',', 1) * pi()/180) * POWER(SIN((${lng} - SUBSTRING_INDEX(location, ',', -1)) * pi()/180 / 2), 2)))) AS distance
//         FROM users u
//         WHERE u.status = 1
//       ) AS temp
//       WHERE distance <= 2 AND userType = 'store'
//       LIMIT ${offset}, ${limit};
//     `)
//   }

//   getStoresCategories(userId) {
//     return db.execute(`SELECT * FROM categories WHERE userId = ${userId};`)
//   }

//   getStoresFoodItems(userId) {
//     return db.execute(`SELECT fi.*, c.* FROM fooditems fi JOIN categories c ON fi.catId = c.catId WHERE fi.userId = ${userId} AND fi.foodDeleted = 0;`)
//   }

//   getCategoryFoodItems(catId) {
//     return db.execute(`SELECT fi.*, u.* FROM fooditems fi JOIN users u ON fi.userId = u.userId WHERE fi.catId = ${catId} AND fi.foodDeleted = 0;`)
//   }

//   searchString(string, limit = 10) {
//     return db.execute(`
//       SELECT DISTINCT userType AS type, userId AS id, fullName AS name, profilePic AS image, username, 'null' AS price 
//       FROM users 
//       WHERE (username LIKE '%${string}%' OR fullName LIKE '%${string}%') AND status = 1
//       UNION
//       SELECT DISTINCT 'food' AS type, foodId AS id, foodName AS name, foodImage AS image, 'null' AS username, foodPrice AS price 
//       FROM fooditems 
//       WHERE (foodName LIKE '%${string}%' OR foodTags LIKE '%${string}%') AND foodDeleted = 0
//       UNION
//       SELECT DISTINCT 'category' AS type, catId AS id, catName AS name, catImage AS image, 'null' AS username, 'null' AS price 
//       FROM categories 
//       WHERE catName LIKE '%${string}%' 
//       LIMIT ${limit}
//     `)
//   }

//   getStoresByCategoryName(catName, offset = 0, limit = 10) {
//     return db.execute(`
//       SELECT DISTINCT u.* 
//       FROM users u
//       INNER JOIN categories c ON u.userId = c.userId
//       WHERE c.catName LIKE '%${catName}%' 
//       LIMIT ${offset}, ${limit};
//     `)
//   }
// };