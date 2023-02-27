const db = require("../config/database");

module.exports = class Users {
  constructor() { }

  is_already_liked(userId, foodId) {
    return db.execute(`SELECT * FROM likeditems where userId = ${userId} AND foodId = ${foodId}`);
  }

  like(userId, foodId) {
    return db.execute(`INSERT INTO likeditems SET userId = ${userId}, foodId = ${foodId}, status = 1`);
  }

  undo_like(userId, foodId) {
    return db.execute(`DELETE FROM likeditems WHERE userId = ${userId} AND foodId = ${foodId}`);
  }
};
