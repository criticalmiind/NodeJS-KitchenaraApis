const jwt = require("jsonwebtoken");

module.exports = function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  //   checking

  if (!bearerHeader) return next({ code: 403, message: "User Authorization string is required in header!" });

  //split at space
  const bearer = bearerHeader.split(" ");
  //get token from array
  const bearerToken = bearer[1];

  req.token = bearerToken;
  jwt.verify(req.token, "secretKey", (err, data) => {
    if (err) {
      return next({ code: 403, message: "Access denied" });
    }
    req.data = data;
    next();
  });
};
