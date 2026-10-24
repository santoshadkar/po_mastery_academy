// CSPO - Certified Scrum Product Owner (Scrum Alliance Replica)
// Full-Length Exam Simulator (35 Questions per Mock Exam, 5 Full Exams = 175 Questions)
const { generateCspoExams } = require('../builders/buildCspo');

const exams = generateCspoExams(5, 35);

module.exports = {
  id: "cspo",
  name: "CSPO (Certified Scrum Product Owner)",
  issuingBody: "Scrum Alliance",
  level: "Foundation / Intermediate",
  durationMinutes: 60,
  passingScore: 75,
  description: "Validates your practical understanding of the Scrum framework through the Scrum Alliance lens, emphasizing customer empathy, backlog refinement, stakeholder facilitation, and continuous collaboration. Full 35-question exam replicas.",
  examCount: 5,
  questionsPerExam: 35,
  exams
};
