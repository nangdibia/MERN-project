const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;

  if (!authorization) {
    console.log("authorization token required");
    return res.json({ error: "authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.json({ error: "Request not verified" });
  }
};

module.exports = {
  requireAuth,
};
