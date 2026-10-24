// PSPO II - Professional Scrum Product Owner II (Scrum.org Replica)
// Pattern: 40 Questions (Scenario-based Multiple-Choice & Multi-Select) in 60 Minutes (85% Passing Score)
const { generatePspo2Exams } = require('../builders/buildPspo2');

const exams = generatePspo2Exams(5, 40);

module.exports = {
  id: "pspo-2",
  name: "PSPO II (Professional Scrum Product Owner II)",
  issuingBody: "Scrum.org",
  level: "Advanced",
  durationMinutes: 60,
  passingScore: 85,
  description: "Official Scrum.org simulation: 40 scenario-based questions in 60 minutes. Evaluates your ability to apply the Scrum framework, Evidence-Based Management (EBM), and value maximization to complex, real-world enterprise dilemmas.",
  examCount: 5,
  questionsPerExam: 40,
  exams
};
