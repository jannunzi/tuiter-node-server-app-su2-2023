import enrollmentsModel from "./model.js";

export const findAllEnrollments = () => enrollmentsModel.find();
export const findEnrollmentsForSection = (sectionId) =>
  enrollmentsModel.find({ section: sectionId }).populate("student").exec();
export const findEnrollmentsForStudent = (studentId) =>
  enrollmentsModel.find({ student: studentId }).populate("section").exec();

export const createEnrollment = (enrollment) =>
  enrollmentsModel.create(enrollment);

export const deleteEnrollment = (enrollment) =>
  enrollmentsModel.deleteOne(enrollment);
