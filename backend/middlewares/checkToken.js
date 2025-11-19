import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}


