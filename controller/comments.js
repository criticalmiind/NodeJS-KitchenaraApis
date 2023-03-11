const jwt = require("jsonwebtoken");
const Comments = require("../model/comments");
const CommentsLiked = require("../model/commentsliked");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const path = require("path");
const baseUrl = require("../config/baseUrl");
const { getTimeDiff } = require("../helper/other");

let commentInstance = new Comments();
let commentLikedIns = new CommentsLiked();

const commentPost = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `foodId`
     * - `comment`
     */
  let userId = req.data.data1.userId
  let { foodId, comment } = req.body;

  try {
    await commentInstance.postComment(userId, foodId, comment);
    return res.status(200).json({ message: "Video commented" });
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const updateComment = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `commentId`
     * - `comment`
     */
  let { commentId, comment } = req.body;

  try {
    await commentInstance.updateComment(commentId, comment);
    return res.status(200).json({ message: "Comment updated" });
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const deleteComment = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `commentId`
     */
  let { commentId } = req.params;

  try {
    await commentInstance.deleteComment(commentId);
    return res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const fetchFoodPostComments = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `foodId`
     */
  let { foodId } = req.params;

  try {
    const [result] = await commentInstance.fetchFoodPostComments(foodId, req.userId);
    let commentsList = []
    result.forEach(el => {
      commentsList.push({
        "commentId": el.commentId,
        "userId": el.userId,
        "foodId": el.userId,
        "comment": el.comment,
        "likes": el.likes,
        "username": el.username,
        "fullName": el.fullName,
        "profilePic": el.profilePic,
        "isLiked": el.isLiked,
        "time": getTimeDiff(el.createdAt),
      })
    });
    return res.status(200).json({ data: commentsList });
  } catch (error) {
    return next({ code: 401, message: error });
  }
};

const likeUnlikeComment = async (req, res, next) => {
  /**
     * @dev the payload will contain following properties:
     * - `commentId`
     */
  let userId = req.data.data1.userId
  let commentId = req.params.commentId;

  try {
    const [result] = await commentLikedIns.is_already_liked(userId, commentId);
    if (result.length<1) {
      await commentLikedIns.like(userId, commentId);
      return res.status(200).json({ message: "Comment liked" });
    } else {
      await commentLikedIns.undo_like(userId, commentId);
      return res.status(200).json({ message: "Comment unliked" });
    }
  } catch (error) {
    return next({ code: 401, message: error });
  }
};


module.exports = {
  "commentPost": commentPost,
  "updateComment": updateComment,
  "deleteComment": deleteComment,
  "fetchFoodPostComments": fetchFoodPostComments,
  "likeUnlikeComment": likeUnlikeComment,
};
