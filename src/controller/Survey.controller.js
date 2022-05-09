const express = require("express");
const { valid } = require("joi");
const surveyService = require("../service/Survey.service");
const { surveyValidator } = require("../utility/survey.validator");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("get all survey");
  // console.log(await surveyService.getSurveys_ByID("ps1nxm"));
  const surveys = await surveyService.getAllSurveys();
  res.send(surveys);
});

router.post("/", async (req, res) => {
  // validate request data
  const validatedValue = surveyValidator.validate(req.body);
  if (validatedValue.error)
    return res.status(400).send(validatedValue.error.details);

  console.log(validatedValue);
  const newSurvey = await surveyService.addSurvey(validatedValue.value);
  console.log(newSurvey);
  res.send({ Token: newSurvey.Token });
});

module.exports = router;
