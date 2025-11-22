import Project from "../models/project.js";

// GET /api/projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find(); // fetch all projects
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
