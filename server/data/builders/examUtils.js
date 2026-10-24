// Utility for Ensuring 100% Unique Questions & Uniform Option Distribution across Mock Exams

function balanceQuestion(q, singleIdx, pairIdx) {
  if (q.type === 'essay' || !q.options || q.options.length < 2) {
    return q;
  }

  // Handle True/False questions: keep True at 0, False at 1
  if (q.type === 'true_false' || (q.options.length === 2 && q.options[0] === 'True')) {
    return {
      ...q,
      options: [...q.options],
      correctAnswers: [...q.correctAnswers]
    };
  }

  // Handle 4-option Single-Choice
  if (q.options.length === 4 && q.correctAnswers.length === 1) {
    const curIdx = q.correctAnswers[0];
    const targetIdx = singleIdx % 4;
    const newOptions = [...q.options];
    const temp = newOptions[curIdx];
    newOptions[curIdx] = newOptions[targetIdx];
    newOptions[targetIdx] = temp;

    return {
      ...q,
      options: newOptions,
      correctAnswers: [targetIdx]
    };
  }

  // Handle 4-option Multi-Select (2 correct)
  if (q.options.length === 4 && q.correctAnswers.length === 2) {
    const pairs = [
      [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]
    ];
    const targetPair = pairs[pairIdx % pairs.length];
    const correctOpts = q.correctAnswers.map(idx => q.options[idx]);
    const incorrectOpts = q.options.filter((_, idx) => !q.correctAnswers.includes(idx));

    const newOptions = new Array(4);
    newOptions[targetPair[0]] = correctOpts[0];
    newOptions[targetPair[1]] = correctOpts[1];

    let incIdx = 0;
    for (let i = 0; i < 4; i++) {
      if (i !== targetPair[0] && i !== targetPair[1]) {
        newOptions[i] = incorrectOpts[incIdx++];
      }
    }

    return {
      ...q,
      options: newOptions,
      correctAnswers: targetPair
    };
  }

  // Handle 5-option Single-Choice
  if (q.options.length === 5 && q.correctAnswers.length === 1) {
    const curIdx = q.correctAnswers[0];
    const targetIdx = singleIdx % 5;
    const newOptions = [...q.options];
    const temp = newOptions[curIdx];
    newOptions[curIdx] = newOptions[targetIdx];
    newOptions[targetIdx] = temp;

    return {
      ...q,
      options: newOptions,
      correctAnswers: [targetIdx]
    };
  }

  return {
    ...q,
    options: [...q.options],
    correctAnswers: [...q.correctAnswers]
  };
}

/**
 * Selects exactly `count` unique questions from `pool` for `examNumber`.
 * Guaranteed 0 duplicates within the exam.
 * Automatically distributes answer choices uniformly across A, B, C, D.
 */
function buildBalancedExamQuestions(pool, count, examNumber, idPrefix) {
  if (pool.length < count) {
    throw new Error(`Pool size (${pool.length}) is smaller than required exam count (${count}) for ${idPrefix}! Must expand pool.`);
  }

  // Deterministic rotation offset per exam so exams draw distinct subsets/orders
  const offset = ((examNumber - 1) * Math.floor(pool.length / 5)) % pool.length;
  const examQuestions = [];

  let singleCounter = examNumber % 4;
  let pairCounter = examNumber % 6;

  for (let i = 0; i < count; i++) {
    const pIdx = (offset + i) % pool.length;
    const baseQ = pool[pIdx];

    const balancedQ = balanceQuestion(baseQ, singleCounter, pairCounter);
    if (baseQ.correctAnswers && baseQ.correctAnswers.length === 1 && baseQ.options && baseQ.options.length >= 4) {
      singleCounter = (singleCounter + 1) % 4;
    } else if (baseQ.correctAnswers && baseQ.correctAnswers.length === 2) {
      pairCounter = (pairCounter + 1) % 6;
    }

    examQuestions.push({
      id: `${idPrefix}_m${examNumber}_q${i + 1}`,
      type: balancedQ.type || (balancedQ.correctAnswers?.length > 1 ? "multiple" : "single"),
      domain: balancedQ.domain,
      text: balancedQ.text,
      options: balancedQ.options,
      correctAnswers: balancedQ.correctAnswers,
      explanation: balancedQ.explanation,
      references: balancedQ.references,
      rubric: balancedQ.rubric
    });
  }

  return examQuestions;
}

module.exports = {
  balanceQuestion,
  buildBalancedExamQuestions
};
