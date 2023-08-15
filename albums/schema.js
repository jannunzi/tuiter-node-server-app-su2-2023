import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
  {
    name: String,
    albumId: String,
  },
  { collection: "albums" }
);

export default albumSchema;
