const { PrismaClient } = require("@prisma/client");
const token = require("../utility/tokenGenerator");
const { Survey } = new PrismaClient();

exports.addSurvey = async (SurveyData) => {
  const generatedToken = token.generateUniqueToken();
  const newSurvey = await Survey.create({
    data: {
      Token: generatedToken,
      Name: SurveyData.Name,
      Phone_Number: SurveyData.Phone_Number,
      Company_Name: SurveyData.Company_Name,
      Designation: SurveyData.Designation,
    },
  });
  // console.log(newSurvey);
  return newSurvey;
};

exports.getAllSurveys = async () => {
  return await Survey.findMany();
};
exports.getSurveys_ByID = async (Token) => {
  return await Survey.findUnique({
    where: {
      Token,
    },
  });
};
