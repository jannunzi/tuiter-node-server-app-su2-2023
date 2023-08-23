import mongoose from "mongoose";

function GnrxSchema(collectionName, schemaConfig) {
  const schema = mongoose.Schema(schemaConfig, { collection: collectionName });
  return schema;
}

export default GnrxSchema;
