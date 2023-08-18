import mongoose from "mongoose";

function GenericModel(collectionName, genericSchema) {
  console.log("generic model");
  const genericModel = mongoose.model(collectionName, genericSchema);
  return genericModel;
}

export default GenericModel;
