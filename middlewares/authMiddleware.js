import authService from "../utils/authService.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Access Denied" });
  try {
    if (typeof token !== "string") {
      return res.status(403).json({ message: "Token not found" });
    }
    const { data } = authService.verifyToken(token, process.env.JWT_SECRET);
    if (data) {
      req.id = data;
      next();
    } else {
      return res.status(403).json({ message: "Session expired. Please login" });
    }
  } catch (error) {
    return res.status(403).json({ message: "Session expired" });
  }
};

export default authMiddleware;
