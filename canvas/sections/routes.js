import * as dao from "./dao.js";

function SectionsController(app) {
  const findAllSections = async (req, res) => {
    const sections = await dao.findAllSections();
    res.json(sections);
  };
  const findSectionsForCourse = async (req, res) => {
    const courseId = req.params["courseId"];
    const sections = await dao.findSectionsForCourse(courseId);
    res.json(sections);
  };
  const findSectionById = async (req, res) => {
    const sectionId = req.params["sectionId"];
    const section = await dao.findSectionById(sectionId);
    res.json(section);
  };
  const createSection = async (req, res) => {
    const courseId = req.params["courseId"];
    const newSection = req.body;
    const section = await dao.createSection(courseId, newSection);
    res.json(section);
  };
  const updateSection = async (req, res) => {
    const sectionId = req.params["sectionId"];
    const newSection = req.body;
    const status = await dao.updateSection(sectionId, newSection);
    res.json(status);
  };
  const removeSection = async (req, res) => {
    const sectionId = req.params["sectionId"];
    const status = await dao.removeSection(sectionId);
    res.json(status);
  };

  app.get("/api/sections", findAllSections);
  app.get("/api/sections/:sectionId", findSectionById);
  app.put("/api/sections/:sectionId", updateSection);
  app.delete("/api/sections/:sectionId", removeSection);
  app.get("/api/courses/:courseId/sections", findSectionsForCourse);
  app.post("/api/courses/:courseId/sections", createSection);
}

export default SectionsController;
