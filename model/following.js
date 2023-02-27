const db = require("../config/database");

module.exports = class Users {
  constructor() { }

  is_following(userId, followerId) {
    return db.execute(`SELECT * FROM following where userId = ${userId} AND followerId = ${followerId}`);
  }

  follow(userId, followerId) {
    return db.execute(`INSERT INTO following SET userId = ${userId}, followerId = ${followerId}, status = 1`);
  }

  unfollow(userId, followerId) {
    return db.execute(`DELETE FROM following WHERE userId = ${userId} AND followerId = ${followerId}`);
  }

  get_followers(userId) {
    return db.execute(`
    SELECT u.*
    FROM users u
    INNER JOIN following f ON f.followerId = u.userId
    WHERE f.userId = ${userId}
    `);
  }

  get_following(userId) {
    return db.execute(`
    SELECT u.*
    FROM users u
    JOIN following f ON u.userId = f.followerId
    WHERE f.userId = ${userId}
    `);
  }
};
