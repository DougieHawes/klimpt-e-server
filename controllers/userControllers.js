import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/UserModel.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    const usernameExists = await User.findOne({ username });
    const userExists = await User.findOne({ email });

    if (usernameExists) {
      res.status(400).json({ msg: "username taken" });
    }
    if (userExists) {
      res.status(400).json({ msg: "invalid credentials" });
    }
    if (password !== confirmPassword) {
      res.status(400).json({ msg: "passwords don't match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(200).json({ msg: "user created successfully. Please sign in" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!email || !password) {
      return res.status(400).json({ msg: "fill in both fields" });
    }
    if (!isMatch || !user) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
