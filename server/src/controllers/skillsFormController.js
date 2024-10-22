const SkillsForm = require("../models/skillsFormModel")
const createSkills = async (req, res) => {
    try {
        const { skills } = req.body;
        if (!Array.isArray(skills) || skills.length === 0) {
            return res.status(400).json({ message: "No skills data provided." });
        }

        const skillDocs = skills.map((skill) => ({
            user: req.user.id,
            skill: skill.skill,
            level: skill.level,
        }));

        const savedSkills = await SkillsForm.insertMany(skillDocs);
        res.status(201).json({ savedSkills });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
}

const getSkills = async (req, res) => { 
    try {
        const query = {
          user:  req.user.id
        }
        const skills = await SkillsForm.find(query).sort({createdAt: -1});
        res.status(200).json( skills );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
}

module.exports = { createSkills, getSkills };
