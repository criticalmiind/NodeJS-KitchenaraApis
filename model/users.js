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

  logIn(email) {
    return db.execute(`SELECT * FROM  users where email = '${email}' `);
  }

  singUp({ username, phoneNumber, password, email }) {
    return db.execute(`INSERT INTO users SET username = '${username}', phoneNumber = '${phoneNumber}', password = '${password}',userType = '${userType ? userType : 'mobileUser'}',`);
  }

  uploadVideo({ userId, videoDescription, location, commentsAllowed }, video) {
    return db.execute(`INSERT INTO  foodposts SET userId = ${userId}, videoDescription = '${videoDescription}',location = '${location}',commentsAllowed = ${commentsAllowed}, video = '${video}'`);
  }
  
  fetchALlVideos(userId, limit=10, offset=0) {
    return db.execute(`SELECT u.*, fp.*  from users u, foodposts fp WHERE fp.userId = ${userId} ORDER BY fp.createdAt DESC LIMIT ${limit} OFFSET ${offset}`);
  }
  
  // fetchALlVideos(limit=10, offset=0) {
  //   return db.execute(`SELECT u.*, fp.*  from users u, foodposts fp WHERE fp.userId = u.userId ORDER BY fp.createdAt DESC LIMIT ${limit} OFFSET ${offset}`);
  // }
};
