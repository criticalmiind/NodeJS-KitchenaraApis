const Users = require("../model/users");
const { generateToken } = require("../helper/other");
const FB = require('fb');

const user = new Users()

const signUp = async (req, res, next) => {
  let accessToken = req.body.accessToken;
  try {
    let fbUser = await FB.api('me', { fields: ['id', 'name', 'email', 'picture.width(500)'], access_token: accessToken });
    const [result] = await user.checkEmail(fbUser.email);
    if (result.length > 0) {
      return res.status(401).json({ message: "User already registered, please login!" });
    }
    let payload = {
      "username": fbUser.name,
      "password": fbUser.id,
      "email": fbUser.email,
      "fullName": fbUser.name,
      "profilePic": fbUser.picture.data.url,
      "status": 1
    }
    const d = await user.singUp(payload);
    if (d) {
      let userId = d.length > 0 ? d[0]['insertId'] : false
      const [result] = await user.userProfileById(userId ? userId : payload.email);
      let data1 = {
        "userId": result[0].userId,
        "username": result[0].username,
        "email": result[0].email,
        "fullName": result[0].fullName,
        "phoneNumber": result[0].phoneNumber,
        "profilePic": result[0].profilePic,
        "bio": result[0].bio,
        "userType": result[0].userType,
        "location": result[0].location,
        "storeAddress": result[0].storeAddress,
        "userAddresses": [],
        "status": result[0].status,
      }

      let { token } = await generateToken(data1)
      return res.status(200).json({ "token": token, "data": data1, "message": `Registered Successfully!` });
    } else {
      return next({ code: 401, message: "Invalid facebook auth token please try again" });
    }
  } catch (error) {
    return res.status(401).json({ "error": true, "message": "Invalid facebook auth token please try again!", "debug": error });
  }
};

const signIn = async (req, res, next) => {
  let accessToken = req.body.accessToken;
  try {
    let fbUser = await FB.api('me', { fields: ['id', 'name', 'email', 'picture.width(500)'], access_token: accessToken });
    const [d] = await user.checkEmail(fbUser.email);
    if (d.length < 1) {
      return res.status(401).json({ message: "User not registered, please registered first!" });
    }
    const [result] = await user.userProfileById(fbUser.email);
    let data1 = {
      "userId": result[0].userId,
      "username": result[0].username,
      "email": result[0].email,
      "fullName": result[0].fullName,
      "phoneNumber": result[0].phoneNumber,
      "profilePic": result[0].profilePic,
      "bio": result[0].bio,
      "userType": result[0].userType,
      "location": result[0].location,
      "storeAddress": result[0].storeAddress,
      "userAddresses": [],
      "status": result[0].status,
  }

  let { token } = await generateToken(data1)
  return res.status(200).json({ "token": token, "data":data1, "message": `Login Successfully!` });
} catch (error) {
  return res.status(401).json({ "error": true, "message": "Invalid google auth token please try again!", "debug": error });
}
};

module.exports = {
"signUp": signUp,
"signIn": signIn
}