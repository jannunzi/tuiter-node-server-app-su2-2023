import mongoose from "mongoose";
const moduleSchema = mongoose.Schema(
  {
    name: String,
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  },
  { collection: "modules" }
);

export default moduleSchema;
