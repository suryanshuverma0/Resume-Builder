const ExperienceForm = require("../models/experienceFormModel");

const createExperienceForm = async (req, res) => {
  try {
    const { experiences } = req.body;

    if (!Array.isArray(experiences) || experiences.length === 0) {
      return res.status(400).json({ message: "No experience data provided." });
    }

    const experienceDocs = experiences.map((exp) => ({
      user: req.user.id,
      jobTitle: exp.jobTitle,
      organization: exp.organization,
      city: exp.city,
      startDate: exp.startDate,
      endDate: exp.endDate,
      currentlyWorking: exp.currentlyWorking,
      summary: exp.summary,
    }));

    const savedExperiences = await ExperienceForm.insertMany(experienceDocs);

    res.status(201).json({ savedExperiences });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal server error." });
  }
}

const getExperienceFormDetails = async (req, res) => {
  try {
    const query = {
      user: req.user.id,
    };
    const data = await ExperienceForm.find(query).sort({ createdAt: -1 });
    res.status(200).json(data);
    console.log("I am data of experience which is fetched from backend ", data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createExperienceForm , getExperienceFormDetails };