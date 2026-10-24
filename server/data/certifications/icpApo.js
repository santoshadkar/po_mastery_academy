// ICP-APO - ICAgile Certified Professional in Agile Product Ownership (ICAgile Replica)
// Full-Length Exam Simulator (35 Questions per Mock Exam, 5 Full Exams = 175 Questions)
const { generateIcpExams } = require('../builders/buildIcpApo');

const exams = generateIcpExams(5, 35);

module.exports = {
  id: "icp-apo",
  name: "ICP-APO (ICAgile Certified Professional in Agile Product Ownership)",
  issuingBody: "ICAgile",
  level: "Intermediate / Adaptive",
  durationMinutes: 60,
  passingScore: 80,
  description: "Validates your adaptive product ownership capabilities, customer-centric value delivery, continuous discovery techniques, and hypothesis-driven experimentation. Full 35-question exam replicas.",
  examCount: 5,
  questionsPerExam: 35,
  exams
};
