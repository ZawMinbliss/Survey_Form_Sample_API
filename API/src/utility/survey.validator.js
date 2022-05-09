const Joi = require("joi");

module.exports.surveyValidator = Joi.object({
  Name: Joi.string().required(),
  Phone_Number: Joi.string().required(),
  Company_Name: Joi.string().required(),
  Designation: Joi.string().required(),
});
