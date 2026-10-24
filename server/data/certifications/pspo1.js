// PSPO I - Professional Scrum Product Owner I (Scrum.org Replica)
// Pattern: 80 Questions (Multiple-Choice, Multiple-Answer, True/False) in 60 Minutes (85% Passing Score)
const { generatePspo1Exams } = require('../builders/buildPspo1');

const exams = generatePspo1Exams(5, 80);

module.exports = {
  id: "pspo-1",
  name: "PSPO I (Professional Scrum Product Owner I)",
  issuingBody: "Scrum.org",
  level: "Foundation / Intermediate",
  durationMinutes: 60,
  passingScore: 85, // 85% required by Scrum.org
  description: "Official Scrum.org simulation: 80 questions (multiple-choice, multiple-answer, and true/false) in 60 minutes. Tests your fundamental mastery of the Scrum framework and empirical product ownership.",
  examCount: 5,
  questionsPerExam: 80,
  exams
};
