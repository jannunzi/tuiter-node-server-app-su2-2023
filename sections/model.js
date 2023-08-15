import mongoose from "mongoose";
import sectionsSchema from "./schema.js";

export default mongoose.model("sections", sectionsSchema);
