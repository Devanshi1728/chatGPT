const express = require("express");
const {
  summaryController,
  chatbotController,
  jsConverterController,
  imageController,
  paragraphController,
} = require("../controllers/openAiController");

const router = express.Router();

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chat", chatbotController);
router.post("/js-converter", jsConverterController);
router.post("/scifi-image", imageController);

module.exports = router;
