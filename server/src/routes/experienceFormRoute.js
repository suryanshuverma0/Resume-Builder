const express = require('express');
const { createExperienceForm , getExperienceFormDetails} = require('../controllers/experienceFormController');
const auth = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/create-experience-form', auth, createExperienceForm);
router.get('/get-experience-form-details', auth, getExperienceFormDetails);

module.exports = router;