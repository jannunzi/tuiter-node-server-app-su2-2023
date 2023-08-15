import coursesModel from "./model.js";

export const findAllCourses = () => coursesModel.find();
export const findCourseById = (courseId) => coursesModel.findById(courseId);
export const findCourseByTitle = (title) => coursesModel.find({ title });

export const createCourse = (course) => coursesModel.create(course);
export const updateCourse = (courseId, course) =>
  coursesModel.updateOne({ _id: courseId }, { $set: course });
export const removeCourse = (courseId) =>
  coursesModel.deleteOne({ _id: courseId });
