const express = require("express");

const imageController = require("../controllers/image-controllers");

const router = express.Router();

router.get("/getimages", imageController.getImages);
router.post("/postimages", imageController.postImages);

module.exports = router;
