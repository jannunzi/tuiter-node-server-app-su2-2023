import mongoose from "mongoose";
import enrollmentsSchema from "./schema.js";

const Enrollments = mongoose.model("Enrollments", enrollmentsSchema);

export default Enrollments;
