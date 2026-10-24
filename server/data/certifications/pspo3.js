// PSPO III - Professional Scrum Product Owner III (Scrum.org Replica)
// Pattern: 35 Questions (Mix of Multiple-Choice, Multi-Select, True/False, and Written/Essay Questions) in 120 Minutes (85% Passing Score)
const { generatePspo3Exams } = require('../builders/buildPspo3');

const exams = generatePspo3Exams(5, 35);

module.exports = {
  id: "pspo-3",
  name: "PSPO III (Professional Scrum Product Owner III)",
  issuingBody: "Scrum.org",
  level: "Expert / Executive Mastery",
  durationMinutes: 120,
  passingScore: 85,
  description: "Official Scrum.org simulation: 35 questions (mix of multiple-choice, multi-select, true/false, and written/essay questions) in 120 minutes. Tests distinguished enterprise-level product leadership, portfolio governance, and complex dilemma resolution.",
  examCount: 5,
  questionsPerExam: 35,
  hasMixedQuestions: true,
  isEssayBased: true,
  exams
};
