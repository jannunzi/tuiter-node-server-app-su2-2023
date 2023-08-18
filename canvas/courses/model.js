import mongoose from "mongoose";
import coursesSchema from "./schema.js";

export default mongoose.model("courses", coursesSchema);
