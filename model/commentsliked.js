const db = require("../config/database");

module.exports = class CommentsLiked {
  constructor() { }

  is_already_liked(userId, commentId) {
    return db.execute(`SELECT * FROM commentsliked where userId = ${userId} AND commentId = ${commentId}`);
  }

  like(userId, commentId) {
    return db.execute(`INSERT INTO commentsliked SET userId = ${userId}, commentId = ${commentId}, status = 1`);
  }

  undo_like(userId, commentId) {
    return db.execute(`DELETE FROM commentsliked WHERE userId = ${userId} AND commentId = ${commentId}`);
  }
};
