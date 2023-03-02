const jwt = require("jsonwebtoken");
const Users = require("../model/users");
const OrderDetails = require("../model/orderdetails");
const LikeItems = require("../model/likeditems");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const path = require("path");
const baseUrl = require("../config/baseUrl");

let user = new Users();
let order = new OrderDetails();
let likeditems = new LikeItems();

const checkUserName = async (req, res, next) => {
  let username = req.params.username;

  try {
    const [result] = await user.checkUsername(username);
    if (result.length > 0) {
      return res.status(409).json({ userNameAvailable: false });
    } else {
      return res.status(200).json({ userNameAvailable: true });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const checkEmail = async (req, res, next) => {
  let email = req.params.email;

  try {
    const [result] = await user.checkEmail(email);
    if (result.length > 0) {
      return res.status(409).json({ emailAvailable: false });
    } else {
      return res.status(200).json({ emailAvailable: true });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const checkPhoneNumber = async (req, res, next) => {
  let number = req.params.number;

  try {
    const [result] = await user.CheckPhoneNumber(number);
    if (result.length > 0) {
      return res.status(409).json({ numberAvailable: false });
    } else {
      return res.status(200).json({ numberAvailable: true });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const getUserProfileById = async (req, res, next) => {
  let userId = req.params.userId;

  try {
    const [result] = await user.userProfileById(userId);
    if (result.length > 0) {
      delete (result[0]['password'])
      // delete(result[0]['phone'])
      // delete(result[0]['email'])
      // delete(result[0]['userType'])
      // delete(result[0]['createdAt'])
      // delete(result[0]['username'])
      return res.status(200).json({ data: result[0] });
    } else {
      return next({ code: 401, message: "no user profile found!" });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const signUp = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `username`,
     * - `phoneNumber`,
     * - `password`,
     * - `email`,
     */
  let payload = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next({
      code: 401,
      message: errors,
    });
  }
  const salt = await bcrypt.genSalt(10);
  payload.password = await bcrypt.hash(payload.password, salt);
  if (payload.phoneNumber && payload.password) {
    try {
      payload['otp'] = Math.floor(1000 + Math.random() * 9000);
      const d = await user.singUp(payload);
      if (d) {
        let userId = d.length > 0 ? d[0]['insertId'] : false
        const [result] = await user.userProfileById(userId?userId:payload.phoneNumber);
        let data1 = {
          userId: result[0].userId,
          username: result[0].username,
          email: result[0].email,
          fullName: result[0].fullName,
          phoneNumber: result[0].phoneNumber,
          profilePic: result[0].profilePic,
          bio: result[0].bio,
          userType: result[0].userType,
          location: result[0].location,
          storeAddress: result[0].storeAddress,
          status: result[0].status,
        }

        let { token } = await generateToken(data1)
        return res.status(200).json({ "token": token, "message": "Registered Successfully! Please Verify Otp!", "otp": payload['otp'] });
      } else {
        return next({ code: 404, message: "no data found" });
      }
    } catch (error) {
      return next({ code: 401, message: error + "" });
    }
  } else {
    return next({ code: 400, message: "No Request Found" });
  }
};

const updateProfile = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
        username
        fullName
        email
        phoneNumber
        password
        profilePic
        bio
        userType
        location,
        storeAddress
     */
  let payload = req.body;

  if (payload.password) {
    const salt = await bcrypt.genSalt(10);
    payload.password = await bcrypt.hash(payload.password, salt);
  }

  try {
    const result = await user.updateProfile(payload, req.data.data1.userId);
    if (result) {
      return res.status(200).json({ message: "Profile updated successfully" });
    } else {
      return next({ code: 404, message: "Profile session expired!" });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const logIn = async (req, res, next) => {
  let email = req.body.email;

  let password = req.body.password;

  if (email && password) {
    try {
      const [data] = await user.logIn(email);
      if (data.length > 0) {
        let check = await bcrypt.compare(password, data[0].password);
        if (!check) {
          return next({ code: 403, message: "Invalid Credentials" });
        }
        data.forEach((rowsData) => {
          let data1 = {
            userId: rowsData.userId,
            username: rowsData.username,
            email: rowsData.email,
            fullName: rowsData.fullName,
            phoneNumber: rowsData.phoneNumber,
            profilePic: rowsData.profilePic,
            bio: rowsData.bio,
            userType: rowsData.userType,
            location: rowsData.location,
            storeAddress: rowsData.storeAddress,
            status: rowsData.status,
          };
          jwt.sign(
            { data1 },
            "secretKey",
            { expiresIn: "1d" },
            (err, token) => {
              if (err) {
                return res.status(401).json({ message: err });
              }
              return res.status(200).json({ "userInfo": data1, token: token });
            }
          );
        });
      } else {
        return next({ code: 401, message: "Invalid Email or Password" });
      }
    } catch (err) {
      return next({ code: 401, message: err });
    }
  } else {
    return next({ code: 400, message: "No Request Found" });
  }
};

const authentication = async (req, res, next) => {
  let email = req.data.data1.email;

  if (email) {
    try {
      // console.log(password);
      const [data] = await user.logIn(email);
      if (data.length > 0) {
        data.forEach((rowsData) => {
          let data1 = {
            userId: rowsData.userId,
            username: rowsData.username,
            email: rowsData.email,
            fullName: rowsData.fullName,
            phoneNumber: rowsData.phoneNumber,
            profilePic: rowsData.profilePic,
            bio: rowsData.bio,
            userType: rowsData.userType,
            location: rowsData.location,
            storeAddress: rowsData.storeAddress,
            status: rowsData.status,
          };

          return res.status(202).json({ status: true, "userInfo": data1 });
        });
      } else {
        return next({ status: false, code: 401, message: "Invalid Email or Password" });
      }
    } catch (err) {
      return next({ status: false, code: 401, message: err });
    }
  } else {
    return next({ status: false, code: 400, message: "Email is required" });
  }
};

const fetchALlVideos = async (req, res, next) => {
  /**
   * @dev the payload will contain following properties:
   * - `limit`,
   * - `offset`,
   */
  try {
    const videos = [];
    const { userId } = req.data.data1
    const { limit, offset } = req.params
    const [result] = await user.fetchALlVideos(userId, limit, offset);
    if (result.length > 0) {
      result.forEach((rowsData) => {
        let data = {
          foodId: rowsData.foodId,
          userId: rowsData.userId,
          video: rowsData.video,
          videoDescription: rowsData.videoDescription,
          location: rowsData.location,
          commentsAllowed: rowsData.commentsAllowed,
          username: rowsData.username,
          profilePic: rowsData.profilePic,
          bio: rowsData.bio,
          userType: rowsData.userType,
          likes: rowsData.likes,
          comments: rowsData.comments,
        };
        videos.push(data);
      });

      return res.status(200).json({
        videos: videos,
      });
    } else {
      return res.send({ code: 404, "d": req.data, message: "no data found" });
      // return next({ code: 404, "",  message: "no data found" });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const uploadVideo = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `userId`,
     * - `videoDescription`,
     * - `location`,
     * - `commentsAllowed`,
     */

  if (req.file == undefined) {
    return next({ code: 400, message: "Please upload a file!" });
  }

  let video = `${req.protocol}://${req.headers.host}/api/get/video/${req.file.filename}`;

  let payload = req.body;
  payload['userId'] = req.data.data1.userId
  if (payload) {
    try {
      const result = await user.uploadVideo(payload, video);
      if (result) {
        return res
          .status(200)
          .json({ message: " Video Uploaded Successfully" });
      } else {
        return next({ code: 404, message: "no data found" });
      }
    } catch (error) {
      return next({ code: 401, message: error + "" });
    }
  } else {
    return next({ code: 400, message: "No Request Found" });
  }
};

const likeUnlikeFoodPost = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `foodId`
     */
  let userId = req.data.data1.userId
  let foodId = req.params.foodId;

  try {
    const [result] = await likeditems.is_already_liked(userId, foodId);
    if (result.length < 1) {
      await likeditems.like(userId, foodId);
      return res.status(200).json({ message: "video Liked" });
    } else {
      await likeditems.undo_like(userId, foodId);
      return res.status(200).json({ message: "Video Unliked" });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const forgotPassword = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `userId`
     */
  try {
    const [result] = await user.userProfileById(req.body.userId);
    if (result.length < 1) return res.status(401).json({ "message": "No user registered with this id!" });

    let otp = Math.floor(1000 + Math.random() * 9000);
    let d = await user.updateOtp(result[0].userId, otp);

    if (d) {
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
        "status": result[0].status,
      }
      let { token } = await generateToken(data1)
      return res.status(200).json({ "token": token, "message": "Otp sent successfully!", "otp": otp });

      // jwt.sign(
      //   { data1 },
      //   "secretKey",
      //   { expiresIn: "1d" },
      //   (err, token) => {
      //     if (err) {
      //       return res.status(401).json({ "message": err });
      //     }
      //     return res.status(200).json({ "token": token, "message": "Otp sent successfully!", "otp":payload['otp'] });
      //   }
      // );
    } else {
      return res.status(401).json({ message: "Invalid Request!" });
    }
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

const verifyOtp = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `otp`
     */
  try {
    let [result] = await user.verifyOtp(req.data.data1.userId, req.body.otp);
    if (result.length > 0) {
      await user.updateProfileStatus(req.data.data1.userId, 1)
      return res.status(200).json({ message: "Otp Verified!", "userInfo": req.data.data1 });
    } else {
      return res.status(401).json({ message: "Inavlid Otp! Please try again!" });
    }
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
}

function generateToken(data1) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { data1 },
      "secretKey",
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          reject({ "token": false });
        }
        resolve({ "token": token });
      }
    );
  });
}

const submitOrder = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - storeId, deliveryLocation, deliveryAddress, totalBill, paymentMethod, isPayed, json
     */
  let userId = req.data.data1.userId
  let { storeId, deliveryLocation, deliveryAddress, totalBill = 0, paymentMethod = 'cod', isPayed = 0, json } = req.body;
  err = false;
  if (!userId) err = 'User session is expired!'
  if (!storeId) err = 'Store Id is required!'
  if (!deliveryAddress) err = 'Delivery Address is required!'
  if (!deliveryLocation) err = 'Delivery Latitude & Longitude is required!'
  if (!totalBill) err = 'Total Bill Amount is required!'
  if (!json) err = 'Minimum one order is required in json!'

  try {
    const d = await order.submitOrder({
      "userId": userId,
      "storeId": storeId,
      "deliveryAddress": deliveryAddress,
      "deliveryLocation": deliveryLocation,
      "totalBill": totalBill,
      "paymentMethod": paymentMethod,
      "isPayed": isPayed,
      "json": json
    });
    if (d) {
      let orderId = d.length > 0 ? d[0]['insertId'] : false
      const [result] = await order.getOrderById(orderId);
      let data = result.length > 0 ? result[0] : {}
      data['json'] = (!data.json && data.json != '') ? JSON.parse(data.json) : {}
      return res.status(200).json({ "message": "Order submitted successfully!", "data": data });
    } else {
      return next({ code: 401, message: "Unkown Error Please logout and login again!" });
    }
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
};

const getOrdersList = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - filter
     */
  let userId = req.data.data1.userId
  try {
    const [result] = await order.getOrdersByUserId(userId, req.params.filter)
    data = []
    result.forEach(el => {
      el['json'] = (!el.json && el.json != '') ? JSON.parse(el.json) : {}
      data.push(el)
    });
    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
};


const getOrderById = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - orderId
     */
  try {
    const [result] = await order.getOrderById(req.params.orderId);
    let data = result.length > 0 ? result[0] : {}
    data['json'] = (!data.json && data.json != '') ? JSON.parse(data.json) : {}
    return res.status(200).json({ "data": result });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
};

const getOrderStatus = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - orderId
     */
  try {
    const [result] = await order.getOrderById(req.params.orderId);
    let data = result.length > 0 ? result[0] : {}
    return res.status(200).json({ "status": data.status });
  } catch (error) {
    return next({ code: 401, message: error + "" });
  }
};


module.exports = {
  "userLogin": logIn,
  "authentication": authentication,
  "signUp": signUp,
  "forgotPassword": forgotPassword,
  "verifyOtp": verifyOtp,
  "updateProfile": updateProfile,
  "checkUserName": checkUserName,
  "checkEmail": checkEmail,
  "checkPhoneNumber": checkPhoneNumber,
  "uploadVideo": uploadVideo,
  "fetchALlVideos": fetchALlVideos,
  "getUserProfileById": getUserProfileById,
  "likeUnlikeFoodPost": likeUnlikeFoodPost,
  "submitOrder": submitOrder,
  "getOrdersList": getOrdersList,
  "getOrderById": getOrderById,
  "getOrderStatus": getOrderStatus
};
