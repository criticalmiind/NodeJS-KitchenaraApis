const db = require("../config/database");

module.exports = class Users {
  constructor() { }

  checkUsername(username) {
    return db.execute(`SELECT * FROM  users WHERE username = '${username}'`);
  }

  checkEmail(email) {
    return db.execute(`SELECT * FROM  users WHERE email = '${email}'`);
  }

  CheckPhoneNumber(phoneNumber) {
    return db.execute(`SELECT * FROM  users WHERE phoneNumber = '${phoneNumber}'`);
  }

  logIn(loginId) {
    return db.execute(`SELECT * FROM  users where email = '${loginId}' OR phoneNumber = '${loginId}' OR username = '${loginId}';`);
  }

  singUp({ username, phoneNumber, password, otp, userType, email }) {
    return db.execute(`INSERT INTO users SET username = '${username}', phoneNumber = '${phoneNumber}', password = '${password}', otp = ${otp}, userType = '${userType ? userType : 'user'}', status=0`);
  }

  updateProfile({ fullName, email, phoneNumber, password, profilePic, bio, location, storeAddress }, userId) {
    let query = `UPDATE users SET `;
    if (email) query += `email='${email}', `
    if (fullName) query += `fullName='${fullName}', `
    if (password) query += `password='${password}', `
    if (profilePic) query += `profilePic='${profilePic}', `
    if (bio) query += `bio='${bio}', `
    if (location) query += `location='${location}', `
    if (storeAddress) query += `storeAddress='${storeAddress}', `
    query += `status=1 WHERE userId=${userId}`
    return db.execute(query);
  }

  updateOtp(userId, otp) {
    return db.execute(`UPDATE users SET otp = ${otp} WHERE phoneNumber=${userId} OR email=${userId} OR userId=${userId}`);
  }

  verifyOtp(userId, otp) {
    console.log
    return db.execute(`SELECT * FROM users WHERE otp = ${otp} AND (phoneNumber=${userId} OR email=${userId} OR userId=${userId})`);
  }

  updateProfileStatus(userId, status) {
    return db.execute(`UPDATE users SET status = ${status}, otp = '' WHERE phoneNumber=${userId} OR email=${userId} OR userId=${userId}`);
  }

  uploadVideo({ userId, videoDescription, location, commentsAllowed }, video) {
    return db.execute(`INSERT INTO  foodposts SET userId = ${userId}, videoDescription = '${videoDescription}',location = '${location}',commentsAllowed = ${commentsAllowed}, video = '${video}'`);
  }

  userProfileById(userId) {
    return db.execute(`
      SELECT u.*,
          COUNT(DISTINCT f1.followId) AS totalFollowing,
          COUNT(DISTINCT f2.followId) AS totalFollowers,
          COUNT(DISTINCT fp.foodId) AS totalVideos
      FROM 
          users u
          LEFT JOIN following f1 ON u.userId = f1.userId -- To count the number of users this user is following
          LEFT JOIN following f2 ON u.userId = f2.followerId -- To count the number of users following this user
          LEFT JOIN foodposts fp ON u.userId = fp.userId -- To count the number of videos this user
      WHERE 
          u.userId = '${userId}' OR u.email = '${userId}' OR u.phoneNumber = '${userId}'
      GROUP BY 
          u.userId;`);
  }

  fetchALlVideos(userId, limit = 10, offset = 0) {
    return db.execute(`
    SELECT u.*, fp.*, COUNT(li.likesId) AS likes, COUNT(comment.commentId) AS comments
    FROM users u
    INNER JOIN foodposts fp ON fp.userId = u.userId
    LEFT JOIN likeditems li ON li.foodId = fp.foodId
    LEFT JOIN comments comment ON comment.foodId = fp.foodId
    WHERE fp.userId = ${userId}
    GROUP BY fp.foodId
    ORDER BY fp.createdAt DESC LIMIT ${limit} OFFSET ${offset}`)
  }

};
