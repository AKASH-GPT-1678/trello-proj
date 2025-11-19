
import jwt from "jsonwebtoken";

const decodeToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return next();

  const token = authHeader.split(" ")[1];
  console.log("TOKEN:", token);

  if (!token) {
    return res.status(401).json({ message: "Token missing", verified: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // no await needed
    req.user = decoded;
    console.log("DECODED:", decoded);
    next();
  } catch (err) {
    console.error(err);
    return res.status(403).json({ message: "Invalid or expired token", verified: false });
  }
};


export default decodeToken;

