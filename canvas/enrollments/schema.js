import mongoose from "mongoose";

const enrollmentsSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sections",
    },
  },
  { collection: "enrollments" }
);

export default enrollmentsSchema;
