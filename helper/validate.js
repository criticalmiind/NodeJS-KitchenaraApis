const { body, validationResult } = require("express-validator");

module.exports.signUp = [
  // password must be at least 5 chars long
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password Must be atleast 5 Chars Long"),
];

module.exports.checkIds = [
  body("employeeId").isEmpty(),
  body("adminId").isEmpty(),
];
