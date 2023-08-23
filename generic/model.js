import mongoose from "mongoose";

function GnrxModel(collectionName, genericSchema) {
  console.log("generic model");
  const genericModel = mongoose.model(collectionName, genericSchema);
  return genericModel;
}

export default GnrxModel;
