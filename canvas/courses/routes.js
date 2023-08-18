import * as dao from "./dao.js";

function CoursesController(app) {
  const findAllCourses = async (req, res) => {
    const title = req.query.title;
    if (title) {
      const course = await dao.findCourseByTitle(title);
      return res.json(course);
    }

    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  const findCourseById = async (req, res) => {
    const courseId = req.params["courseId"];
    const course = await dao.findCourseById(courseId);
    res.json(course);
  };
  const createCourse = async (req, res) => {
    const newCourse = req.body;
    const course = await dao.createCourse(newCourse);
    res.json(course);
  };
  const updateCourse = async (req, res) => {
    const courseId = req.params["courseId"];
    const newCourse = req.body;
    const status = await dao.updateCourse(courseId, newCourse);
    res.json(status);
  };
  const removeCourse = async (req, res) => {
    const courseId = req.params["courseId"];
    const status = await dao.removeCourse(courseId);
    res.json(status);
  };

  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:courseId", findCourseById);
  app.post("/api/courses", createCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", removeCourse);
}

export default CoursesController;
