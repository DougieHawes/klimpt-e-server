import mongoose from "mongoose";

const ImageSchema = mongoose.Schema(
  {
    creator: {
      type: String,
      require: true,
    },
    prompt: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const ImageModel = mongoose.model("Image", ImageSchema);

export default ImageModel;
