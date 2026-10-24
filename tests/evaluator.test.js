const test = require('node:test');
const assert = require('node:assert/strict');

const certifications = require('../server/data/certifications');
const chapters = require('../server/data/chapters');

test('Evaluation Logic - Chapter Assessment Grading', (t) => {
  const ch1 = chapters[0];
  const perfectAnswers = {};
  ch1.assessment.forEach(q => {
    perfectAnswers[q.id] = q.answer;
  });

  // Calculate score manually
  let correct = 0;
  ch1.assessment.forEach(q => {
    if (perfectAnswers[q.id] === q.answer) correct++;
  });
  const scorePercent = Math.round((correct / ch1.assessment.length) * 100);
  assert.equal(scorePercent, 100);
  assert.ok(scorePercent >= 80, '100% score should pass');

  // Test failed score (0 correct)
  const failedAnswers = {};
  ch1.assessment.forEach(q => {
    failedAnswers[q.id] = (q.answer + 1) % q.options.length;
  });
  let failedCorrect = 0;
  ch1.assessment.forEach(q => {
    if (failedAnswers[q.id] === q.answer) failedCorrect++;
  });
  const failedPercent = Math.round((failedCorrect / ch1.assessment.length) * 100);
  assert.equal(failedPercent, 0);
  assert.ok(failedPercent < 80, '0% score should fail');
});

test('Evaluation Logic - Multi-Select Questions in Mock Exams', (t) => {
  const pspo1 = certifications.find(c => c.id === 'pspo-1');
  const mock1 = pspo1.exams[0];
  const multiQ = mock1.questions.find(q => q.type === 'multiple');
  assert.ok(multiQ, 'PSPO I Mock 1 should have multi-select question');

  const correctAnswers = multiQ.correctAnswers;
  assert.ok(correctAnswers.length > 1, 'Multi-select must have multiple correct answers');

  // Exact match
  const userSelectedCorrect = [...correctAnswers];
  const isMatch = correctAnswers.slice().sort().every((v, i) => v === userSelectedCorrect.slice().sort()[i]);
  assert.ok(isMatch, 'User selecting exact correct answers must evaluate as true');

  // Partial match should not be full credit in strict certification exams
  const partialSelected = [correctAnswers[0]];
  const isPartialMatch = correctAnswers.length === partialSelected.length &&
    correctAnswers.slice().sort().every((v, i) => v === partialSelected.slice().sort()[i]);
  assert.equal(isPartialMatch, false, 'Partial selection should evaluate as false');
});

test('Passing Threshold Verification per Track', (t) => {
  const pspo1 = certifications.find(c => c.id === 'pspo-1');
  assert.equal(pspo1.passingScore, 85, 'PSPO I threshold must be 85%');

  const pspo2 = certifications.find(c => c.id === 'pspo-2');
  assert.equal(pspo2.passingScore, 85, 'PSPO II threshold must be 85%');

  const cspo = certifications.find(c => c.id === 'cspo');
  assert.equal(cspo.passingScore, 75, 'CSPO threshold must be 75%');

  const safe = certifications.find(c => c.id === 'safe-popm');
  assert.equal(safe.passingScore, 75, 'SAFe POPM threshold must be 75%');

  const icp = certifications.find(c => c.id === 'icp-apo');
  assert.equal(icp.passingScore, 80, 'ICP-APO threshold must be 80%');
});
