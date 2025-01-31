import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
