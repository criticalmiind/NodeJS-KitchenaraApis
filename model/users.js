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

    singUp({ username, phoneNumber = '', fullName, password, otp = null, userType, email = '', status = 0, profilePic = null }) {
        return db.execute(`INSERT INTO users SET username = '${username}', fullName = '${fullName ? fullName : username}', email = '${email}', phoneNumber = '${phoneNumber}', profilePic = '${profilePic}', password = '${password}', otp = ${otp}, userType = '${userType ? userType : 'user'}', status=${status}`);
    }

    updateProfile({ fullName, email, phoneNumber, password, profilePic, bio, location, storeAddress, userAddresses }, userId) {
        let query = `UPDATE users SET `;
        // if (email) query += `email='${email}', `
        if (fullName) query += `fullName='${fullName}', `
        if (password) query += `password='${password}', `
        if (profilePic) query += `profilePic='${profilePic}', `
        if (bio) query += `bio='${bio}', `
        if (location) query += `location='${location}', `
        if (storeAddress) query += `storeAddress='${storeAddress}', `
        if (userAddresses) query += `userAddresses='${JSON.stringify(userAddresses)}', `
        query += `status=1 WHERE userId=${userId}`
        console.log(query)
        return db.execute(query);
    }

    updateOtp(userId, otp) {
        return db.execute(`UPDATE users SET otp = ${otp} WHERE phoneNumber='${userId}' OR userId='${userId}' OR email='${userId}'`);
    }

    verifyOtp(userId, otp) {
        return db.execute(`SELECT * FROM users WHERE otp = ${otp} AND (phoneNumber='${userId}' OR userId='${userId}' OR email='${userId}')`);
    }

    updateProfileStatus(userId, status) {
        return db.execute(`UPDATE users SET status = ${status}, otp = 0 WHERE phoneNumber='${userId}' OR email='${userId}' OR userId='${userId}'`);
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
          u.userId = '${userId}' OR u.phoneNumber = '${userId}' OR CAST(u.email AS CHAR) = '${userId}'
      GROUP BY 
          u.userId;`);
    }


    uploadVideo({ userId, thumbnail = null, videoDescription = null, location, commentsAllowed }, video) {
        return db.execute(`INSERT INTO  foodposts SET userId = ${userId}, thumbnail='${thumbnail}', videoDescription = '${videoDescription}',location = '${location}',commentsAllowed = ${commentsAllowed}, video = '${video}'`);
    }

    updateVideoThumbnail({ thumbnail, videoId }, userId) {
        let query = `UPDATE foodposts SET thumbnail='${thumbnail}' WHERE foodId = ${videoId} AND userId=${userId}`;
        return db.execute(query);
    }

    fetchALlVideos(userId = '', limit = 10, offset = 0) {
        let query = `
            SELECT DISTINCT fp.*, u.*, 
                COUNT(li.likesId) AS likes, 
                (SELECT COUNT(*) FROM comments cl WHERE cl.foodId = fp.foodId) AS comments, 
                CASE WHEN li.userId = '${userId}' THEN true ELSE false END AS isLiked
            FROM users u
            INNER JOIN foodposts fp ON fp.userId = u.userId
            LEFT JOIN likeditems li ON li.foodId = fp.foodId
            LEFT JOIN comments c ON c.foodId = fp.foodId
            GROUP BY fp.foodId, u.userId, li.likesId, c.commentId
            ORDER BY fp.createdAt DESC LIMIT ${limit} OFFSET ${offset}`
        return db.execute(query)
    }

    fetchUserVideos(sessionUserId='', userId, limit = 10, offset = 0) {
        let query = `
            SELECT DISTINCT fp.*, u.*, 
                COUNT(li.likesId) AS likes, 
                (SELECT COUNT(*) FROM comments cl WHERE cl.foodId = fp.foodId) AS comments, 
                CASE WHEN li.userId = '${sessionUserId}' THEN true ELSE false END AS isLiked
            FROM users u
            INNER JOIN foodposts fp ON fp.userId = u.userId
            LEFT JOIN likeditems li ON li.foodId = fp.foodId
            LEFT JOIN comments c ON c.foodId = fp.foodId
            WHERE fp.userId = ${userId}
            GROUP BY fp.foodId, u.userId, li.likesId, c.commentId
            ORDER BY fp.createdAt DESC LIMIT ${limit} OFFSET ${offset}`
        return db.execute(query)
    }
};
