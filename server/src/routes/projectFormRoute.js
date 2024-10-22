const express = require('express');
const { createProject, getProjectFormDetails } = require('../controllers/projectFormController');
const auth = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/create-project-form', auth, createProject);
router.get('/get-project-form-details', auth, getProjectFormDetails);

module.exports = router;