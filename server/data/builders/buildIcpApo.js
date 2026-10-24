// Comprehensive ICP-APO Question Pool Builder (ICAgile Replica)
// Format: 35 Questions per Mock Exam, 60 Minutes Timebox, 80% Passing Score (40+ Unique Question Bank)

const { buildBalancedExamQuestions } = require('./examUtils');

const icpPool = [
  {
    domain: "Adaptive Mindset",
    type: "single",
    text: "What fundamental shift defines the transition from a traditional Project Manager to an Agile Product Owner under ICAgile principles?",
    options: [
      "Shifting from managing project constraints (scope, time, budget) to maximizing customer value, outcomes, and business agility",
      "Writing longer technical specification documents",
      "Assigning more JIRA tickets per developer each morning",
      "Eliminating the need for software testing"
    ],
    correctAnswers: [0],
    explanation: "ICAgile emphasizes shifting from predictive execution (controlling iron triangle constraints) to adaptive value maximization (delivering validated business outcomes).",
    references: "ICAgile Learning Roadmap - Agile Product Ownership"
  },
  {
    domain: "Continuous Discovery",
    type: "single",
    text: "What is the primary objective of formulating backlog items as 'Hypotheses' rather than 'Requirements'?",
    options: [
      "To make stories look like university science projects",
      "To acknowledge that until real users interact with the feature in production, its value is an unproven assumption that must be empirically tested",
      "To allow developers to skip writing code",
      "To avoid having acceptance criteria"
    ],
    correctAnswers: [1],
    explanation: "In complex product environments, requirements are untested assumptions. Framing them as hypotheses encourages small-batch validation and reduces waste.",
    references: "ICAgile - Hypothesis-Driven Product Development"
  },
  {
    domain: "Customer Empathy & Research",
    type: "single",
    text: "Which method helps the Product Owner uncover latent, unspoken customer needs most effectively?",
    options: [
      "Observational contextual inquiry (shadowing customers in their natural workflow) and Jobs-to-be-Done timeline interviews",
      "Asking customers 'Do you want a button that does everything?'",
      "Quarterly sales commission spreadsheets",
      "Internal developer brainstorming"
    ],
    correctAnswers: [0],
    explanation: "Contextual observation and JTBD interviews reveal actual behavioral struggles and emotional triggers rather than superficial opinions.",
    references: "ICAgile Customer Discovery Competencies"
  },
  {
    domain: "Value-Driven Backlog",
    type: "single",
    text: "When should a Product Owner remove or archive an item from the Product Backlog?",
    options: [
      "Only when the product is completely decommissioned",
      "As soon as discovery or data reveals that the item no longer provides positive economic value or alignment with the strategic direction",
      "Never; every idea must be preserved forever to respect whoever suggested it",
      "Only on December 31st"
    ],
    correctAnswers: [1],
    explanation: "A healthy backlog is kept lean and focused. Deprecating stale or low-value items prevents cognitive clutter and false promises.",
    references: "ICAgile - Product Backlog Hygiene"
  },
  {
    domain: "Lean Experiments & Prototyping",
    type: "single",
    text: "What characterizes a 'Wizard of Oz' experiment in lean product discovery?",
    options: [
      "The front-end interface looks fully automated to the user, but the back-end processing is performed manually by team members to validate demand before building automation",
      "The Product Owner wears a costume during sprint review",
      "The team uses magical estimation numbers",
      "The product is released only in Kansas"
    ],
    correctAnswers: [0],
    explanation: "In a Wizard of Oz experiment, users experience what appears to be a functional product, but humans fulfill the backend manually to prove willingness-to-use.",
    references: "The Lean Startup & ICAgile Discovery"
  },
  {
    domain: "Outcome vs Output",
    type: "single",
    text: "Which of the following represents an authentic Customer OUTCOME metric rather than an engineering Output metric?",
    options: [
      "Average time required for a clinician to document patient triage reduced from 14 minutes to 3 minutes",
      "45 story points completed in Sprint 6",
      "1,200 lines of Python code committed to GitHub",
      "99 unit tests created"
    ],
    correctAnswers: [0],
    explanation: "Outcomes measure changes in human behavior and customer success (reducing triage documentation time). Points and code volume are outputs.",
    references: "Outcome-Driven Innovation & ICAgile"
  },
  {
    domain: "Facilitation & Alignment",
    type: "single",
    text: "When facilitating a collaborative roadmapping workshop with executive stakeholders, what is the best practice for visual organization?",
    options: [
      "Organizing by Now / Next / Later time horizons mapped to strategic themes and measurable problem statements rather than fixed calendar delivery dates",
      "Using a 3-year microscopic Microsoft Project Gantt chart",
      "Listing all features alphabetically by developer name",
      "Refusing to show any roadmap to executives"
    ],
    correctAnswers: [0],
    explanation: "Theme-based Now/Next/Later roadmaps communicate strategic intent and sequential priority without creating false certainty around distant dates.",
    references: "Janna Bastow - Theme-Based Roadmaps & ICAgile"
  },
  {
    domain: "Value Stream & Flow",
    type: "single",
    text: "In Value Stream Mapping, what is the difference between 'Lead Time' and 'Process Time (Touch Time)'?",
    options: [
      "Lead Time is the total clock elapsed time from request to delivery; Process Time is the actual active time someone is working on the item",
      "Lead Time is the developer's salary; Process Time is server costs",
      "They are identical terms",
      "Lead Time is only used in manufacturing factories"
    ],
    correctAnswers: [0],
    explanation: "Lead Time encompasses waiting queues and delays. Process Time is actual value-add effort. The ratio determines Flow Efficiency.",
    references: "Lean Enterprise & ICAgile Value Streams"
  },
  {
    domain: "Lean Experiments & Prototyping",
    type: "single",
    text: "How does a 'Concierge' experiment differ from a 'Wizard of Oz' experiment?",
    options: [
      "In a Concierge experiment, the customer is fully aware that the service is being provided manually by a human, validating the value proposition personally",
      "Concierge experiments only take place in 5-star hotels",
      "There is no difference",
      "Concierge experiments always require writing machine-learning code"
    ],
    correctAnswers: [0],
    explanation: "In a Concierge test, the service is explicitly human and high-touch; in Wizard of Oz, the human backend is disguised behind a digital interface.",
    references: "Lean UX & ICAgile Customer Validation"
  },
  {
    domain: "Stakeholder Collaboration",
    type: "single",
    text: "When managing diverse stakeholders with conflicting interests, what tool helps map their Influence vs Interest?",
    options: [
      "The Mendelow Stakeholder Matrix (Manage Closely, Keep Informed, Keep Satisfied, Monitor)",
      "A poker table",
      "A secret ballot box",
      "A burndown chart"
    ],
    correctAnswers: [0],
    explanation: "The Mendelow Power/Interest Matrix categorizes stakeholders to tailor engagement strategies and communication frequency appropriately.",
    references: "Mendelow Stakeholder Matrix & ICAgile"
  },
  {
    domain: "Continuous Discovery",
    type: "single",
    text: "What is the primary danger of the 'Build Trap' as described by Melissa Perri?",
    options: [
      "An organization measures success by shipping features rather than by solving real customer problems and achieving strategic outcomes",
      "Developers getting physically trapped in an office building",
      "Running out of sticky notes during a story mapping session",
      "Using open-source software"
    ],
    correctAnswers: [0],
    explanation: "The Build Trap occurs when product organizations focus entirely on the velocity of shipping features (outputs) while losing sight of customer value (outcomes).",
    references: "Escaping the Build Trap - Melissa Perri"
  },
  {
    domain: "Customer Empathy & Research",
    type: "single",
    text: "What does the 'Confirmation' element of Ron Jeffries' 3Cs represent in User Stories?",
    options: [
      "The explicit acceptance criteria and automated tests that confirm the story is successfully completed",
      "An email from the CEO confirming their approval",
      "A signed contract from the customer",
      "A developer's verbal promise"
    ],
    correctAnswers: [0],
    explanation: "Confirmation represents the agreed-upon acceptance criteria and verification tests that confirm the story satisfies customer intent.",
    references: "Ron Jeffries - Essential XP & 3Cs"
  },
  {
    domain: "Value-Driven Backlog",
    type: "single",
    text: "What does 'Backlog Pruning' mean in Agile Product Ownership?",
    options: [
      "Regularly removing obsolete, outdated, or low-value items to maintain focus, transparency, and manageable backlog size",
      "Deleting all stories that take longer than 2 days to build",
      "Cutting down trees near the company campus",
      "Hiding bugs from stakeholders"
    ],
    correctAnswers: [0],
    explanation: "Pruning keeps the backlog manageable and transparent by discarding low-priority ideas that will likely never be built.",
    references: "ICAgile - Backlog Management"
  },
  {
    domain: "Lean Experiments & Prototyping",
    type: "single",
    text: "What is a 'Smoke Test' or 'Painted Door' test in lean experimentation?",
    options: [
      "A link or button offering a capability that does not yet exist, measuring customer click-through intent before building the underlying functionality",
      "Testing fire alarms in the computer server room",
      "A test that purposely crashes the database",
      "An automated security scan"
    ],
    correctAnswers: [0],
    explanation: "Painted-door tests present an apparent feature option to measure customer demand and conversion intent before investing development effort.",
    references: "The Lean Startup - Smoke Tests"
  },
  {
    domain: "Outcome vs Output",
    type: "single",
    text: "How should an Agile Product Owner formulate an effective Objective and Key Result (OKR)?",
    options: [
      "Objective: Qualitative inspiring destination; Key Results: 3 to 5 quantitative, outcome-oriented metrics that measure progress toward that destination",
      "Objective: Build 10 Jira tickets; Key Results: Write 500 lines of code",
      "Objective: Work overtime; Key Results: Drink 4 coffees per day",
      "Objective: Never change plans; Key Results: Deliver 100% of original Gantt scope"
    ],
    correctAnswers: [0],
    explanation: "OKRs connect inspiring strategic objectives with measurable, quantitative outcome metrics (Key Results) that track real progress.",
    references: "Measure What Matters - John Doerr"
  },
  {
    domain: "Facilitation & Alignment",
    type: "single",
    text: "In Liberating Structures, what is the purpose of the '1-2-4-All' facilitation technique?",
    options: [
      "To engage 100% of participants simultaneously by progressing from individual reflection (1), to pairs (2), to quads (4), to whole group alignment (All)",
      "A countdown timer used before rocket launches",
      "A mathematical formula for calculating velocity",
      "A code review checklist"
    ],
    correctAnswers: [0],
    explanation: "1-2-4-All ensures every voice is heard and rapidly synthesizes group intelligence from quiet reflection to full consensus.",
    references: "Liberating Structures - 1-2-4-All"
  },
  {
    domain: "Value Stream & Flow",
    type: "single",
    text: "What does 'Little's Law' establish in lean flow management?",
    options: [
      "Cycle Time = Work in Progress (WIP) / Throughput",
      "Velocity = Story Points x Team Size",
      "Cost = Hours x Rate",
      "Quality = Tests / Bugs"
    ],
    correctAnswers: [0],
    explanation: "Little's Law ($WIP = TH \times CT$) proves that limiting Work in Progress directly reduces cycle time and accelerates delivery flow.",
    references: "Little's Law & Lean Flow"
  },
  {
    domain: "Customer Empathy & Research",
    type: "single",
    text: "What is the primary difference between quantitative data and qualitative user research?",
    options: [
      "Quantitative data tells you WHAT is happening at scale; qualitative research tells you WHY it is happening and how users feel",
      "Quantitative is for marketing; qualitative is for finance",
      "There is no difference",
      "Qualitative data can only be represented by pie charts"
    ],
    correctAnswers: [0],
    explanation: "Quantitative analytics reveal user behavioral patterns and conversion drop-offs; qualitative user interviews reveal the emotional drivers and reasons why.",
    references: "ICAgile - User Research Competencies"
  },
  {
    domain: "Adaptive Mindset",
    type: "single",
    text: "What is the 'Cone of Uncertainty' in product management?",
    options: [
      "A visual model showing that variance and estimation error are highest at project inception and narrow over time as empirical learning occurs",
      "A safety traffic cone placed in the engineering hallway",
      "A chart showing developer burnout rates",
      "An optical illusion used in UX design"
    ],
    correctAnswers: [0],
    explanation: "The Cone of Uncertainty illustrates how initial estimates have high variance that decreases as working increments deliver empirical reality.",
    references: "Steve McConnell - Software Estimation & Cone of Uncertainty"
  },
  {
    domain: "Lean Experiments & Prototyping",
    type: "single",
    text: "What is an 'Assumption Mapping' workshop designed to identify?",
    options: [
      "Assumptions with High Impact and High Uncertainty, which should be prioritized for immediate discovery experiments",
      "Assumptions that are 100% proven and require no testing",
      "Assumptions made by HR about developer compensation",
      "Assumptions regarding competitor stock prices"
    ],
    correctAnswers: [0],
    explanation: "Assumption mapping plots assumptions on Importance vs Certainty; items that are critical but uncertain represent the highest discovery risk.",
    references: "Testing Business Ideas - David Bland & Alex Osterwalder"
  },
  {
    domain: "Outcome vs Output",
    type: "single",
    text: "What is a 'North Star Metric' for a digital product?",
    options: [
      "A single key metric that best captures the core customer value delivered and serves as the leading indicator of long-term sustainable business success",
      "The total number of Jira tickets marked Done this month",
      "The astrological sign of the company founder",
      "The number of software developers employed"
    ],
    correctAnswers: [0],
    explanation: "A North Star Metric aligns the entire company around the fundamental exchange of customer value and commercial growth (e.g. Spotify: time spent listening).",
    references: "Amplitude - North Star Playbook"
  },
  {
    domain: "Value-Driven Backlog",
    type: "single",
    text: "How does 'Cost of Delay Divided by Duration' (CD3) optimize backlog ordering?",
    options: [
      "It prioritizes items that deliver the highest economic return per unit of time and capacity, maximizing total value over time",
      "It makes the backlog order random",
      "It ensures that large complex projects always get built first",
      "It eliminates the need to estimate effort"
    ],
    correctAnswers: [0],
    explanation: "CD3 (equivalent to WSJF) schedules the most valuable short jobs first, drastically reducing the total economic penalty of delay.",
    references: "Black Swan Farming & Joshua Arnold"
  },
  {
    domain: "Customer Empathy & Research",
    type: "single",
    text: "In the Jobs-to-be-Done (JTBD) framework, what does 'Hiring a product' mean?",
    options: [
      "A customer choosing to use a product to make progress in a specific life or work struggle",
      "Signing an employment contract with software",
      "Hiring a full-time software developer",
      "Paying for an annual software warranty"
    ],
    correctAnswers: [0],
    explanation: "Clayton Christensen's JTBD theory states that customers do not buy products; they 'hire' them to help them make progress in specific situations.",
    references: "Clayton Christensen - Jobs to be Done"
  },
  {
    domain: "Facilitation & Alignment",
    type: "single",
    text: "What is the 'Lean Coffee' facilitation format used for in agile collaboration?",
    options: [
      "A structured, agenda-less meeting where participants propose topics, vote on them, and discuss them in democratic timeboxes",
      "Drinking expensive coffee during meetings",
      "A meeting exclusively for software architects",
      "A session where developers review coffee machine operations"
    ],
    correctAnswers: [0],
    explanation: "Lean Coffee is a democratic, participant-driven meeting format using dot voting and timeboxing to discuss the most relevant topics.",
    references: "Jim Benson - Lean Coffee"
  },
  {
    domain: "Value Stream & Flow",
    type: "single",
    text: "Which of the following are examples of the 8 Lean Wastes (TIMWOODS) in digital product development?",
    options: [
      "Handoff delays, partially done work, context switching, and building unwanted features",
      "Using dual monitors",
      "Writing clean unit tests",
      "Conducting daily standup meetings"
    ],
    correctAnswers: [0],
    explanation: "Lean wastes in software include Partially Done Work, Extra Features (gold plating), Delays/Waiting, Handoffs, and Defect rework.",
    references: "Mary & Tom Poppendieck - Lean Software Development"
  },
  {
    domain: "Adaptive Mindset",
    type: "single",
    text: "Why is psychological safety essential for high-performing product discovery teams?",
    options: [
      "It empowers team members to challenge assumptions, admit failed experiments, share unconventional ideas, and learn without fear of reprimand",
      "It guarantees that developers will never make mistakes",
      "It eliminates all workplace deadlines",
      "It gives everyone an automatic bonus"
    ],
    correctAnswers: [0],
    explanation: "Amy Edmondson's research shows psychological safety is the foundation of innovation and continuous empirical learning in complex domains.",
    references: "Amy Edmondson - The Fearless Organization"
  },
  {
    domain: "Continuous Discovery",
    type: "single",
    text: "What is an 'Opportunity Solution Tree' (OST) designed to prevent?",
    options: [
      "Jumping straight from a desired business outcome to a favorite pet feature solution without exploring the underlying customer problem space",
      "Planting trees in the server room",
      "Developers asking for higher salaries",
      "Product Owners writing user stories"
    ],
    correctAnswers: [0],
    explanation: "Teresa Torres' OST structures thinking so teams map multiple customer opportunities and test multiple solution ideas before committing capital.",
    references: "Continuous Discovery Habits - Teresa Torres"
  },
  {
    domain: "Lean Experiments & Prototyping",
    type: "single",
    text: "What does 'Minimum Viable Product' (MVP) mean in Lean Startup methodology?",
    options: [
      "The smallest version of a new product that enables a team to collect the maximum amount of validated customer learning with the least effort",
      "A buggy, broken software release",
      "A 500-page functional requirements document",
      "A software product that has zero features"
    ],
    correctAnswers: [0],
    explanation: "Eric Ries defines an MVP as the fastest vehicle to test fundamental value and growth hypotheses with real market feedback.",
    references: "The Lean Startup - Eric Ries"
  },
  {
    domain: "Outcome vs Output",
    type: "single",
    text: "What is Goodhart's Law in metric management?",
    options: [
      "When a measure becomes a target, it ceases to be a good measure because people optimize to game the number rather than the intent",
      "Software gets faster every 18 months",
      "Developers write better code after eating lunch",
      "All code contains bugs"
    ],
    correctAnswers: [0],
    explanation: "Goodhart's Law warns that targeting proxy metrics (like velocity or bug counts) incentivizes gaming and causes unintended dysfunctional behavior.",
    references: "Marilyn Strathern & Goodhart's Law"
  },
  {
    domain: "Value-Driven Backlog",
    type: "single",
    text: "What is the primary benefit of decomposing large backlog items into small vertical slices?",
    options: [
      "Enables rapid flow, faster feedback loops, earlier value realization, and limits financial risk to small iterations",
      "Increases the number of Jira tickets to impress executive managers",
      "Eliminates the need for automated testing",
      "Allows developers to work without communicating"
    ],
    correctAnswers: [0],
    explanation: "Small vertical slices deliver end-to-end functionality, accelerating empirical feedback and reducing cycle time.",
    references: "ICAgile - Vertical User Story Slicing"
  },
  {
    domain: "Customer Empathy & Research",
    type: "single",
    text: "What is a 'Customer Journey Map'?",
    options: [
      "A visual timeline illustrating the step-by-step experience, emotions, touchpoints, and friction points a user encounters while achieving a specific goal with a product",
      "A road atlas showing driving directions to the customer's office",
      "A list of database table foreign keys",
      "A financial invoice sent to customers"
    ],
    correctAnswers: [0],
    explanation: "Customer Journey Maps visualize the user's end-to-end emotional and functional journey, highlighting friction and opportunities for delight.",
    references: "User Journey Mapping & ICAgile"
  },
  {
    domain: "Facilitation & Alignment",
    type: "single",
    text: "How should a Product Owner facilitate backlog refinement to maximize team engagement?",
    options: [
      "Present the customer problem and desired outcome, share context and data, and collaboratively explore solution options and acceptance criteria with Developers",
      "Read a 40-page document line-by-line while developers remain silent",
      "Assign tasks to developers without answering their questions",
      "Refuse to explain why the feature is needed"
    ],
    correctAnswers: [0],
    explanation: "Refinement is an active dialogue: the PO presents problems and business context, inviting developers to co-create technical and user solutions.",
    references: "ICAgile - Facilitation in Backlog Refinement"
  },
  {
    domain: "Value Stream & Flow",
    type: "single",
    text: "What is 'WIP Limit' in Kanban and Lean product delivery?",
    options: [
      "A constraint on the maximum number of work items allowed in a workflow state at one time, preventing bottlenecks and multitasking",
      "A limit on developer working hours",
      "A restriction on how many emails a Product Owner can send",
      "A rule that limits the size of database queries"
    ],
    correctAnswers: [0],
    explanation: "Work in Progress (WIP) limits force teams to finish existing work before pulling new work, improving flow efficiency and reducing cycle time.",
    references: "Kanban Guide - Work in Progress (WIP) Limits"
  },
  {
    domain: "Adaptive Mindset",
    type: "single",
    text: "What does an 'Empirical Process' rely on for decision making?",
    options: [
      "Observation, real-world evidence, experimentation, and continuous inspection and adaptation rather than theoretical upfront speculation",
      "Astrology and crystal balls",
      "Copying competitor press releases",
      "Strict compliance with 5-year plans"
    ],
    correctAnswers: [0],
    explanation: "Empiricism asserts that knowledge comes from experience and making decisions based on what is observed and verified in reality.",
    references: "Empirical Process Control & ICAgile"
  },
  {
    domain: "Continuous Discovery",
    type: "single",
    text: "What is the 'Two-Pizza Rule' popularized by Amazon in agile product development?",
    options: [
      "Agile teams should be small enough to be fed by two pizzas (typically 5 to 9 people), maximizing communication efficiency and ownership",
      "Teams must eat pizza every Friday",
      "Developers can only write two classes per day",
      "Product Owners must pay for team lunches"
    ],
    correctAnswers: [0],
    explanation: "Small, autonomous cross-functional teams (5-9 people) minimize communication overhead and maintain rapid decision velocity.",
    references: "Amazon Product Principles & ICAgile"
  },
  {
    domain: "Lean Experiments & Prototyping",
    type: "single",
    text: "What is an A/B split test in product optimization?",
    options: [
      "Directing traffic randomly between two variants (A and B) to measure statistically significant differences in user conversion or engagement behavior",
      "Testing two different brands of computers",
      "Splitting developers into two competing teams",
      "A test that is run only on Tuesdays"
    ],
    correctAnswers: [0],
    explanation: "A/B testing evaluates real user behavioral changes against a control variant under identical market conditions.",
    references: "Experimentation Works - Stefan Thomke"
  },
  {
    domain: "Outcome vs Output",
    type: "single",
    text: "What is 'Vanity Metric' versus an 'Actionable Metric'?",
    options: [
      "A vanity metric looks impressive (e.g. total app downloads) but does not inform future decisions; an actionable metric directly ties to business health and informs strategy (e.g. 30-day retention)",
      "A vanity metric is only used by actors; an actionable metric is used by lawyers",
      "They are identical terms",
      "A vanity metric is always a negative number"
    ],
    correctAnswers: [0],
    explanation: "Eric Ries distinguishes vanity metrics (which inflate egos without showing business health) from actionable metrics that drive empirical decisions.",
    references: "The Lean Startup - Vanity vs Actionable Metrics"
  },
  {
    domain: "Customer Empathy & Research",
    type: "single",
    text: "What is 'Confirmation Bias' and how does an agile Product Owner guard against it?",
    options: [
      "The tendency to search for and favor information that confirms prior personal beliefs; guarded against by actively seeking disconfirming evidence and using blind experiments",
      "Confirming hotel reservations on business trips",
      "A software bug in email confirmation systems",
      "Developers agreeing with each other"
    ],
    correctAnswers: [0],
    explanation: "Confirmation bias blinds product managers to customer rejection. Rigorous experiment design deliberately tests hypotheses to disprove assumptions.",
    references: "Thinking, Fast and Slow - Daniel Kahneman"
  },
  {
    domain: "Value-Driven Backlog",
    type: "single",
    text: "What does 'Sunk Cost Fallacy' lead an undisciplined product organization to do?",
    options: [
      "Continue investing in a failing feature simply because a substantial amount of time, money, and emotional energy has already been spent on it",
      "Sell software below manufacturing cost",
      "Cancel all engineering projects immediately",
      "Spend all budget on advertising"
    ],
    correctAnswers: [0],
    explanation: "The sunk cost fallacy causes teams to throw good money after bad. Empiricism evaluates future expected value regardless of past spent capital.",
    references: "Behavioral Economics for Product Managers"
  },
  {
    domain: "Facilitation & Alignment",
    type: "single",
    text: "What is the primary role of the Agile Product Owner when working with senior executives?",
    options: [
      "Acts as a strategic business partner: transparently sharing outcome metrics, educating on empirical governance, and managing expectations through trade-off curves",
      "Acts as an order-taker clerk who says yes to every demand",
      "Avoids talking to executives to prevent interruptions",
      "Blames developers for executive displeasure"
    ],
    correctAnswers: [0],
    explanation: "The PO is an empowered business leader who collaborates with executives as an equal partner, anchoring strategy to validated customer outcomes.",
    references: "ICAgile - Enterprise Product Leadership"
  }
];

// Helper to generate 5 full mock exams of exactly 35 questions each
function generateIcpExams(examCount = 5, questionsPerExam = 35) {
  const exams = [];
  for (let e = 1; e <= examCount; e++) {
    const examQuestions = buildBalancedExamQuestions(icpPool, questionsPerExam, e, 'icp');

    exams.push({
      id: `icp-mock-${e}`,
      title: `ICP-APO - Practice Exam ${e} (ICAgile Replica Simulation)`,
      examNumber: e,
      durationMinutes: 60,
      passingScore: 80,
      questions: examQuestions
    });
  }
  return exams;
}

module.exports = {
  icpPool,
  generateIcpExams
};
