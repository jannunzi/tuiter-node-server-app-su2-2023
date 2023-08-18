import mongoose from "mongoose";

function GenericSchema(collectionName, schemaConfig) {
  const schema = mongoose.Schema(schemaConfig, { collection: collectionName });
  return schema;
}

export default GenericSchema;
