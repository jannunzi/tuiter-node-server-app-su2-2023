import GenericModel from "./model.js";
import GenericDao from "./dao.js";
import GenericRoutes from "./routes.js";
import GenericSchema from "./schema.js";

function GenericApi(app, collectionName, schemaConfig) {
  const schema = GenericSchema(collectionName, schemaConfig);
  const model = GenericModel(collectionName, schema);
  const dao = GenericDao(model);
  const routes = GenericRoutes(app, collectionName, dao);
  return routes;
}

export default GenericApi;
