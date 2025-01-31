/* eslint-disable no-undef */
const { verify } = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    // eslint-disable-next-line no-undef
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

// eslint-disable-next-line no-undef
module.exports=authMiddleware;
