const Following = require("../model/following");
let following = new Following();

const isFollow = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `followId`
     */
  let userId = req.data.data1.userId
  let followId = req.params.followId;
  try {
    const [result] = await following.is_following(userId, followId);
    if (result.length > 0) {
      return res.status(200).json({ "state": true });
    } else {
      return res.status(200).json({ "state": false });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const followUnfollow = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `followId`
     */
  let userId = req.data.data1.userId
  let followId = req.params.followId;

  try {
    const [result] = await following.is_following(userId, followId);
    if (result.length < 1) {
      await following.follow(userId, followId);
      return res.status(200).json({ message: "Followed" });
    } else {
      await following.unfollow(userId, followId);
      return res.status(200).json({ message: "Unfollow" });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const followersList = async (req, res, next) => {
  let userId = req.data.data1.userId

  try {
    const [result] = await following.get_followers(userId);
    let data = []
    result.forEach(el => {
      data.push({
        "userId": el.userId,
        "username": el.username,
        "fullName": el.fullName,
        "profilePic": el.profilePic,
      })
    });
    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const followingList = async (req, res, next) => {
  let userId = req.data.data1.userId

  try {
    const [result] = await following.get_following(userId);
    let data = []
    result.forEach(el => {
      data.push({
        "userId": el.userId,
        "username": el.username,
        "fullName": el.fullName,
        "profilePic": el.profilePic,
      })
    });
    return res.status(200).json({ "data": data });
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

module.exports = {
  "followUnfollow": followUnfollow,
  "isFollow": isFollow,
  "followingList": followingList,
  "followersList": followersList
};
