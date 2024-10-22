const ProjectForm = require("../models/projectFormModel");

const createProject = async (req, res) => {
  try {
    const { projects } = req.body;
    if (!Array.isArray(projects) || projects.length === 0) {
      return res.status(400).json({ message: "No project data provided." });
    }

    const ProjectDocs = projects.map((project) => ({
      user: req.user.id,
      title: project.title,
      summary: project.summary,
      link: project.link,
    }));

    const savedProject = await ProjectForm.insertMany(ProjectDocs);
    res.status(201).json({ savedProject });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal server error." });
  }
};

const getProjectFormDetails = async (req, res) => {
  try {
    const query = {
      user: req.user.id,
    };
    const data = await ProjectForm.find(query).sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProject, getProjectFormDetails };
