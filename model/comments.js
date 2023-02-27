const db = require("../config/database");

module.exports = class Comments {
  constructor() { }

  fetchFoodPostComments(foodId) {
    return db.execute(`
    SELECT c.*, u.*,
    (SELECT COUNT(*) FROM commentsliked cl WHERE cl.commentId = c.commentId) AS likes
    FROM comments c
    JOIN users u ON c.userId = u.userId
    WHERE c.foodId = ${foodId}`);
  }

  postComment(userId, foodId, comment) {
    return db.execute(`INSERT INTO comments SET userId = ${userId}, foodId = ${foodId}, comment = '${comment}', status = 1`);
  }

  updateComment(commentId, comment) {
    return db.execute(`UPDATE comments SET comment = '${comment}' WHERE commentId=${commentId}`);
  }

  deleteComment(commentId) {
    return db.execute(`DELETE FROM comments WHERE commentId = ${commentId}`);
  }
};
