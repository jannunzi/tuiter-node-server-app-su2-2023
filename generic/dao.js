function GnrxDao(genericModel) {
  console.log("GnrxDao");
  const create = (obj) => genericModel.create(obj);
  const createManyToMany = (manyToMany) => genericModel.create(manyToMany);
  const createOneToMany = (one, many) => {};
  const findManyToMany = (many1, many2) => {};
  const findOneToMany = (one, many) => {};
  const findAll = () => genericModel.find();
  const findById = (id) => genericModel.findById(id);
  const update = (_id, obj) => genericModel.updateOne({ _id }, { $set: obj });
  const remove = (_id) => genericModel.deleteOne({ _id });
  const removeManyToMany = (many1, many2) => {};
  const removeOneToMany = (one, many) => {};
  return {
    create,
    createManyToMany,
    createOneToMany,
    findAll,
    findById,
    findOneToMany,
    findManyToMany,
    update,
    remove,
    removeOneToMany,
    removeManyToMany,
  };
}

export default GnrxDao;
