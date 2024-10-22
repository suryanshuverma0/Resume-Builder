const express = require("express");
const {
  createAchievementForm,
  getAchievementFormDetails,
} = require("../controllers/achievementFormController");
const auth = require("../middlewares/authMiddlewares");

const router = express.Router();

router.post("/create-achievement-form", auth, createAchievementForm);
router.get("/get-achievement-form-details", auth, getAchievementFormDetails);

module.exports = router;
