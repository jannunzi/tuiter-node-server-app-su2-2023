import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    role: { type: String, enum: ["admin", "faculty", "student"] },
  },
  { collection: "users" }
);

export default userSchema;
