function GenericRoutes(app, collectionName, dao) {
  console.log("GenericRoutes");

  const create = async (req, res) => {
    const obj = await dao.create(req.body);
    res.json(obj);
  };
  //   const createRelation = async (req, res) => {
  //     const obj = dao.createRelation({
  //       ...req.body,
  //       [collectionName]: req.params.id,
  //     });
  //   };
  const findAll = async (req, res) => {
    const all = await dao.findAll();
    res.json(all);
  };
  const findById = async (req, res) => {
    const result = await dao.findById(req.params.id);
    res.json(result);
  };
  const update = async (req, res) => {
    const status = await dao.update(req.params.id, req.body);
    res.json(status);
  };
  const remove = async (req, res) => {
    const status = await dao.remove(req.params.id);
    res.json(status);
  };
  //   const removeRelation = async (req, res) => {
  //     const status = await dao.removeRelation(req.params.id);
  //     res.json(status);
  //   };

  app.post(`/api/${collectionName}`, create);
  //   app.post(`/api/${collectionName}/:id/${childCollectionName}`, createRelation);
  app.get(`/api/${collectionName}`, findAll);
  app.get(`/api/${collectionName}/:id`, findById);
  app.put(`/api/${collectionName}/:id`, update);
  app.delete(`/api/${collectionName}/:id`, remove);
  //   app.delete(
  //     `/api/${collectionName}/:id/${childCollectionName}`,
  //     removeRelation
  //   );
}

export default GenericRoutes;
