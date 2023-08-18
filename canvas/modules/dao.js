import moduleModel from "./model.js";

export const createModule = (module) => moduleModel.create(module);
export const getModulesForCourse = (course) => moduleModel.find({ course });
export const getModuleById = (moduleId) => moduleModel.findById(moduleId);
export const updateModule = (moduleId, moduleUpdates) =>
  moduleModel.updateOne({ _id: moduleId }, { $set: moduleUpdates });
export const deleteModule = (moduleId) =>
  moduleModel.deleteOne({ _id: moduleId });
