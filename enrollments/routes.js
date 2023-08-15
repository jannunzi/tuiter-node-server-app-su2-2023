import * as dao from "./dao.js";

function EnrollmentsController(app) {
  const findAllEnrollments = async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.json(enrollments);
  };
  const findEnrollmentsForSection = async (req, res) => {
    const sectionId = req.params["sectionId"];
    const enrollments = await dao.findEnrollmentsForSection(sectionId);
    res.json(enrollments);
  };
  const findEnrollmentsForStudent = async (req, res) => {
    const studentId = req.params["studentId"];
    const enrollments = await dao.findEnrollmentsForStudent(studentId);
    res.json(enrollments);
  };
  const createEnrollment = async (req, res) => {
    const newEnrollment = req.body;
    const enrollment = await dao.createEnrollment(newEnrollment);
    res.json(enrollment);
  };
  const removeEnrollment = async (req, res) => {
    const enrollment = req.body;
    const status = await dao.deleteEnrollment(enrollment);
    res.json(status);
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.get("/api/sections/:sectionId/enrollments", findEnrollmentsForSection);
  app.get("/api/students/:studentId/enrollments", findEnrollmentsForStudent);
  app.post("/api/enrollments", createEnrollment);
  app.delete("/api/enrollments", removeEnrollment);
}

export default EnrollmentsController;
