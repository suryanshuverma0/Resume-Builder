const express = require('express');
const router = express.Router();
const { createSkills, getSkills } = require('../controllers/skillsFormController');
const auth = require('../middlewares/authMiddlewares');

router.post('/create-skill-form', auth, createSkills);
router.get('/get-skills-form-details', auth, getSkills);


module.exports = router;