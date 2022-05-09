const express = require("express");
const surveyService = require("../service/Survey.service");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("get all survey");
  const surveys = await surveyService.getAllSurveys();
  res.send(surveys);
});

module.exports = router;
