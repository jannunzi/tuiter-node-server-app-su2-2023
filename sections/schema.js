import mongoose from "mongoose";
const sectionsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    maxStudents: Number,
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  },
  { collection: "sections" }
);

export default sectionsSchema;
