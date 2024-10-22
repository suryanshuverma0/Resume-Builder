const express = require('express');
const router = express.Router();
const { createLanguageForm, getLanguageFormDetails } = require('../controllers/languageFormController');
const auth = require('../middlewares/authMiddlewares');

router.post('/create-language-form',auth, createLanguageForm);
router.get('/get-language-form-details',auth, getLanguageFormDetails);

module.exports = router;