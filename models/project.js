import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    stack: { type: String },
    image: { type: String }, // path to image or URL
    live: { type: String }, // live preview URL
    github: { type: String }, // GitHub repo URL
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
