const { PrismaClient } = require("@prisma/client");
const { Survey } = new PrismaClient();

exports.addSurvey = async (Survey) => {
  return await Survey.save();
};

exports.getAllSurveys = async () => {
  return await Survey.findMany();
};
