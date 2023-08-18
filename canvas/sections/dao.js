import sectionsModel from "./model.js";

export const findAllSections = () => sectionsModel.find();
export const findSectionById = (sectionId) =>
  sectionsModel.findById(sectionId).populate("course", "title").exec();
export const findSectionsForCourse = (courseId) =>
  sectionsModel.find({ course: courseId });
export const createSection = (courseId, section) =>
  sectionsModel.create({ ...section, course: courseId });
export const updateSection = (sectionId, section) =>
  sectionsModel.updateOne({ _id: sectionId }, { $set: section });
export const removeSection = (sectionId) =>
  sectionsModel.deleteOne({ _id: sectionId });
