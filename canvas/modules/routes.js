import * as dao from "./dao";
function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const newModule = await dao.createModule({
      ...req.body,
      course: req.params.courseId,
    });
    res.json(newModule);
  };
  const getModulesForCourse = async (req, res) => {
    const modules = await dao.getModulesForCourse(req.params.courseId);
    res.json(modules);
  };
  const getModuleById = async (req, res) => {
    const module = await dao.getModuleById(req.params.moduleId);
    res.json(module);
  };
  const updateModule = async (req, res) => {
    const status = await dao.updateModule(req.params.moduleId, req.body);
    res.json(status);
  };
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };

  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", getModulesForCourse);
  app.get("/api/modules/:moduleId", getModuleById);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
