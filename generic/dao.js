function GenericDao(genericModel) {
  console.log("GenericDao");
  const create = (obj) => genericModel.create(obj);
  const findAll = () => genericModel.find();
  const findById = (id) => genericModel.findById(id);
  const update = (_id, obj) => genericModel.updateOne({ _id }, { $set: obj });
  const remove = (_id) => genericModel.deleteOne({ _id });
  return {
    create,
    findAll,
    findById,
    update,
    remove,
  };
}

export default GenericDao;
