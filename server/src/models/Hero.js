import mongoose from "mongoose";

const Hero = new mongoose.Schema({
  nickname: {
    type: String,
    default: "UNKNOWN"
  },
  real_name: {
    type: String,
    default: "UNKNOWN"
  },
  origin_description: {
    type: String,
    default: "UNKNOWN"
  },
  superpowers: {
    type: String,
    default: "UNKNOWN"
  },
  catch_phrase: {
    type: String,
    default: "UNKNOWN"
  },
  images: {
    type: String,
  }
});

export default mongoose.model("Hero", Hero);