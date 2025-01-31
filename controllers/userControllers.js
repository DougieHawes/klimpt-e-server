import bcrypt from "bcryptjs";

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

    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(salt, password);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(200).json({ msg: "user created successfully. Please sign in" });
  } catch (error) {
    res.status(400).json({ msg: "createUser" });
  }
};
