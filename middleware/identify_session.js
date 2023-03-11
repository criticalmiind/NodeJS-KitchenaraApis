const jwt = require("jsonwebtoken");

module.exports = function checkIfLogin(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(req.token, "secretKey", (err, data) => {
      if (err) return next();
      req.data = data
      req.userId = data.data1.userId
      next();
    });
  }else{
    next();
  }
};
