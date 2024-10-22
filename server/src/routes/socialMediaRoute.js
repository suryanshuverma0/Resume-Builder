const express = require("express");
const {createSocialMedia, getSocialMediaLinks} = require("../controllers/socialMediaController");

const auth = require("../middlewares/authMiddlewares");

const router = express.Router();

router.post("/create-social-media", auth, createSocialMedia);
router.get("/get-social-media-links", auth, getSocialMediaLinks);

module.exports = router;