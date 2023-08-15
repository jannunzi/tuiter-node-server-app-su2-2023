import mongoose from "mongoose";
import albumLikesSchema from "./schema.js";

const albumLikesModel = mongoose.model("albumLikes", albumLikesSchema);

export default albumLikesModel;
