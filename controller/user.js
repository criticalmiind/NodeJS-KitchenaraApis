const jwt = require("jsonwebtoken");
const Users = require("../model/users");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const path = require("path");
const baseUrl = require("../config/baseUrl");

let user = new Users();

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
      const result = await user.singUp(payload);
      if (result) {
        return res.status(202).json({ message: " Registered Successfully" });
      } else {
        return next({ code: 404, message: "no data found" });
      }
    } catch (error) {
      return next({ code: 401, message: error });
    }
  } else {
    return next({ code: 400, message: "No Request Found" });
  }
};

const logIn = async (req, res, next) => {
  let email = req.body.email;

  let password = req.body.password;

  if (email && password) {
    try {
      // console.log(password);
      const [data] = await user.logIn(email);
      if (data.length > 0) {
        let check = await bcrypt.compare(password, data[0].password);
        if (!check) {
          return next({ code: 403, message: "Invalid Email or Password" });
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
              return res.status(201).json({ userInfo: data1, token: token });
            }
          );
        });
      } else {
        return next({ code: 404, message: "Invalid Email or Password" });
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
            status: rowsData.status,
          };

          return res.status(202).json({ status: true, userInfo: data1 });
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
        };
        videos.push(data);
      });

      return res.status(201).json({
        videos: videos,
      });
    } else {
      return res.send({ code: 404, "d":req.data,  message: "no data found" });
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

  if (req.body.videoBase64 == undefined) {
    return next({ code: 400, message: "Please upload a file!" });
  }
  let video = req.video;

  let payload = req.body;
  payload['userId'] = req.data.data1.userId
  if (payload) {
    try {
      const result = await user.uploadVideo(payload, video);
      if (result) {
        return res
          .status(201)
          .json({ message: " Video Uploaded Successfully" });
      } else {
        return next({ code: 404, message: "no data found" });
      }
    } catch (error) {
      return next({ code: 401, message: error });
    }
  } else {
    return next({ code: 400, message: "No Request Found" });
  }
};

const playVideo = (req, res) => {
  const filePath = path.join(baseUrl, 'assets', 'foodVideos', req.params.filename);
  res.sendFile(filePath);
}

module.exports = {
  userLogin: logIn,
  authentication: authentication,
  signUp: signUp,
  checkUserName: checkUserName,
  checkEmail: checkEmail,
  checkPhoneNumber: checkPhoneNumber,
  uploadVideo: uploadVideo,
  fetchALlVideos: fetchALlVideos,
  playVideo: playVideo
};
