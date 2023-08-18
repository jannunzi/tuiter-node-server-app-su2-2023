import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    startDate: { type: Date, default: Date.now },
  },
  { collection: "courses" }
);

export default coursesSchema;
