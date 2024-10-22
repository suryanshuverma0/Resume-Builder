const LanguageForm = require("../models/languageFormModel");

const createLanguageForm = async (req, res) => {
  try {
    const { languages } = req.body;

    if (!Array.isArray(languages) || languages.length === 0) {
      return res.status(400).json({ message: "No language data provided." });
    }

    const languageDocs = languages.map((lang) => ({
      user: req.user.id,
      language: lang.language,
    }));

       const data =   await LanguageForm.insertMany(languageDocs);
    res.status(201).json( {data} );
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal server error." });
  }
};

const getLanguageFormDetails = async (req, res) => {
  try {
    const query = {
      user: req.user.id,
    };
    const data = await LanguageForm.find(query).sort({ createdAt: -1 });
    res.status(200).json(data);
    console.log("I am data of language which is fetched from backend ", data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createLanguageForm, getLanguageFormDetails };