import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "faculty", "student"],
    },
    dateOfHire: { type: Date, default: Date.now() },
  },
  { collection: "users" }
);

export default userSchema;
