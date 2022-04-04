import mongoose from "mongoose";

const Hero = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    default: "UNKNOWN"
  },
  real_name: {
    type: String,
    required: true,
    default: "UNKNOWN"
  },
  origin_description: {
    type: String,
    required: true,
    default: "UNKNOWN"
  },
  superpowers: {
    type: String,
    required: true,
    default: "UNKNOWN"
  },
  catch_phrase: {
    type: String,
    required: true,
    default: "UNKNOWN"
  },
  images: {
    type: String,
  }
});

export default mongoose.model("Hero", Hero);