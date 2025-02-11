import jwt from "jsonwebtoken";

export const tokenValid = (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.json({ valid: false });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, user: decoded });
  } catch (error) {
    res.json({ valid: false, message: "invalid token" });
  }
};
