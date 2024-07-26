import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.authorization;

  const isValidToken = jwt.verify(token, "PASSWORD123");

  if (!isValidToken) {
    return res.status(401).json({ message: "Auth failed" });
  }

  return next();
};
