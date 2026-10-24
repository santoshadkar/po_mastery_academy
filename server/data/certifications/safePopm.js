// SAFe POPM - SAFe 6.0 Product Owner / Product Manager (Scaled Agile Replica)
// Full-Length Exam Simulator (45 Authentic Questions per Mock Exam, matching the official 45-question exam format)
const { generateSafeExams } = require('../builders/buildSafePopm');

const exams = generateSafeExams(5, 45);

module.exports = {
  id: "safe-popm",
  name: "SAFe POPM (SAFe 6.0 Product Owner / Product Manager)",
  issuingBody: "Scaled Agile",
  level: "Intermediate / Enterprise",
  durationMinutes: 90,
  passingScore: 75, // 75% standard for SAFe 6.0 POPM certification
  description: "Validates your expertise in delivering continuous value within an enterprise Agile Release Train (ART), mastering PI Planning, WSJF prioritization, Customer Centricity, and coordinating with Product Management. Full 45-question exam replicas.",
  examCount: 5,
  questionsPerExam: 45,
  exams
};
