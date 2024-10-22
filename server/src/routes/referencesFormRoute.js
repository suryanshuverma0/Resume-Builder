const express = require("express");
const { createReferenceForm ,getReferenceFormDetails } = require("../controllers/referenceFormController");
const auth = require("../middlewares/authMiddlewares");
const router = express.Router();
router.post("/create-reference-form", auth, createReferenceForm);
router.get("/get-reference-form-details", auth, getReferenceFormDetails);

module.exports = router;