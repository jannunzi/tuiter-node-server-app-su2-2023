function GnrxRoutes(app, collectionName, dao) {
  const create = async (req, res) => {
    const obj = await dao.create(req.body);
    res.json(obj);
  };
  const createManyToMany = async (req, res) => {
    const many1 = req.params.many1;
    const id1 = req.params.id1;
    const many2 = req.params.many2;
    const id2 = req.params.id2;
    const obj = await dao.createManyToMany({
      [many1]: id1,
      [many2]: id2,
    });
  };
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
  app.post(`/api/${many1}/${id1}/${many2}/${id2}`, createManyToMany);
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

export default GnrxRoutes;
