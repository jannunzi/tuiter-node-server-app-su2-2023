import GnrxModel from "./model.js";
import GnrxDao from "./dao.js";
import GnrxRoutes from "./routes.js";
import GnrxSchema from "./schema.js";
import config from "./config.js";
import mongoose from "mongoose";

function GnrxApi({ app, collection, schema, one, many, many1, many2 }) {
  let c = collection || config.collection || "";
  let s = schema || config.schema || "";
  if (many1 && many2) {
    c = `${many1}2${many2}`;
    s = {
      [many1]: { type: mongoose.Schema.Types.ObjectId, ref: many1 },
      [many2]: { type: mongoose.Schema.Types.ObjectId, ref: many2 },
    };
  }
  const schema = GnrxSchema(c, s);
  const model = GnrxModel(c, schema);
  const dao = GnrxDao(model);
  const routes = GnrxRoutes(app, c, dao);
  return routes;
}

export default GnrxApi;
