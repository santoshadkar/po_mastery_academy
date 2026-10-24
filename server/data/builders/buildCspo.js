// Comprehensive CSPO Question Pool Builder (Scrum Alliance Replica)
// Format: 35 Questions per Mock Exam, 60 Minutes Timebox, 75% Passing Score (40+ Unique Question Bank)

const { buildBalancedExamQuestions } = require('./examUtils');

const cspoPool = [
  {
    domain: "Scrum Alliance PO Competencies",
    type: "single",
    text: "According to the Scrum Alliance, which individual has the final authority to accept user stories as meeting the acceptance criteria?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The QA Manager",
      "The Project Manager"
    ],
    correctAnswers: [1],
    explanation: "The Product Owner is accountable for product value and ensuring stories satisfy customer intent and acceptance criteria.",
    references: "Scrum Alliance CSPO Learning Objectives"
  },
  {
    domain: "User Stories & 3Cs",
    type: "single",
    text: "What are Ron Jeffries' 3Cs of a User Story?",
    options: [
      "Code, Compile, Commit",
      "Card, Conversation, Confirmation",
      "Customer, Cost, Criteria",
      "Capacity, Velocity, Constraints"
    ],
    correctAnswers: [1],
    explanation: "Card (token for a conversation), Conversation (dialogue to flesh out details), and Confirmation (acceptance criteria verifying success).",
    references: "Ron Jeffries - Essential XP & Scrum Alliance"
  },
  {
    domain: "User Stories & INVEST",
    type: "single",
    text: "What does the 'I' in the INVEST model for User Stories represent?",
    options: [
      "Immediate",
      "Independent (as free from dependencies on other stories as possible)",
      "Iterative",
      "Immutable"
    ],
    correctAnswers: [1],
    explanation: "Independent means stories can be worked on and released without strict sequencing or tight coupling with other stories.",
    references: "Bill Wake - INVEST Criteria"
  },
  {
    domain: "User Stories & INVEST",
    type: "single",
    text: "What does the 'N' in the INVEST model represent?",
    options: [
      "Non-functional",
      "Negotiable (not an inflexible contract; details co-created with developers)",
      "Normalized",
      "Necessary"
    ],
    correctAnswers: [1],
    explanation: "Negotiable: user stories are invitations to conversation, not rigid legal contracts.",
    references: "Bill Wake - INVEST Criteria"
  },
  {
    domain: "User Stories & INVEST",
    type: "single",
    text: "What does the 'V' in the INVEST model represent?",
    options: [
      "Velocity-driven",
      "Valuable (delivers observable benefit to users or customers)",
      "Verified",
      "Variable"
    ],
    correctAnswers: [1],
    explanation: "Valuable: every story should deliver discernible value to the customer or business.",
    references: "Bill Wake - INVEST Criteria"
  },
  {
    domain: "User Stories & INVEST",
    type: "single",
    text: "What does the 'E' in the INVEST model represent?",
    options: [
      "Executory",
      "Estimable (developers understand it sufficiently to gauge relative effort)",
      "Exclusive",
      "Enterprise"
    ],
    correctAnswers: [1],
    explanation: "Estimable: the story has enough clarity for Developers to provide relative sizing.",
    references: "Bill Wake - INVEST Criteria"
  },
  {
    domain: "User Stories & INVEST",
    type: "single",
    text: "What does the 'S' in the INVEST model represent?",
    options: [
      "Synchronous",
      "Small (sized to fit comfortably within a single Sprint)",
      "Scoped",
      "Standard"
    ],
    correctAnswers: [1],
    explanation: "Small: stories must be small enough to complete within one sprint timebox.",
    references: "Bill Wake - INVEST Criteria"
  },
  {
    domain: "User Stories & INVEST",
    type: "single",
    text: "What does the 'T' in the INVEST model represent?",
    options: [
      "Technical",
      "Testable (clear acceptance criteria allow objective verification)",
      "Timeboxed",
      "Tactical"
    ],
    correctAnswers: [1],
    explanation: "Testable: acceptance criteria must provide unambiguous tests for verification.",
    references: "Bill Wake - INVEST Criteria"
  },
  {
    domain: "Product Vision & Strategy",
    type: "single",
    text: "What is Geoffrey Moore's Product Vision statement template structure?",
    options: [
      "For [target], Who [need], The [product] is a [category], That [benefit], Unlike [competitor], Our product [differentiation]",
      "We build [product] by [date] for [cost] using [technology]",
      "As a [role], I want [feature], so that [value]",
      "Given [context], When [action], Then [outcome]"
    ],
    correctAnswers: [0],
    explanation: "Geoffrey Moore's classic elevator pitch format: For (customer) Who (need) The (product) is a (category) That (benefit) Unlike (competitor) Our product (differentiator).",
    references: "Crossing the Chasm - Geoffrey Moore"
  },
  {
    domain: "Prioritization Techniques",
    type: "single",
    text: "In the Kano Model, how are 'Delighters' or 'Attractive' features defined?",
    options: [
      "Features that cause dissatisfaction if absent, but do not increase satisfaction when present",
      "Unexpected innovations that delight customers and create competitive differentiation, but do not cause dissatisfaction if absent",
      "Mandatory regulatory compliance requirements",
      "Features that customers actively despise"
    ],
    correctAnswers: [1],
    explanation: "Attractive features (delighters) create high satisfaction and delight when present, but their absence does not cause dissatisfaction because users did not expect them.",
    references: "Noriaki Kano - Kano Model"
  },
  {
    domain: "Prioritization Techniques",
    type: "single",
    text: "In MoSCoW prioritization, what capacity guideline is typically recommended for 'Must Have' stories in a release?",
    options: [
      "No more than 60% of total team capacity, preserving buffer for Should Haves and Could Haves",
      "100% of capacity to guarantee everything gets built",
      "Exactly 20%",
      "0%"
    ],
    correctAnswers: [0],
    explanation: "DSDM/Agile guidelines recommend allocating no more than ~60% capacity to 'Must Have' items to ensure scope flexibility when uncertainties arise.",
    references: "Agile Project Management - MoSCoW Rules"
  },
  {
    domain: "Customer Discovery & Personas",
    type: "single",
    text: "Why do Product Owners create Proto-Personas and Customer Personas?",
    options: [
      "To fill out HR diversity reports",
      "To anchor team empathy around real user archetypes, behaviors, motivations, and pain points rather than generic 'users'",
      "To generate stock photography for marketing brochures",
      "To eliminate the need to ever speak to real customers"
    ],
    correctAnswers: [1],
    explanation: "Personas embody user archetypes with specific goals, pains, and behaviors, enabling team empathy and focused value creation.",
    references: "User Centered Design & Scrum Alliance"
  },
  {
    domain: "Story Mapping & Slicing",
    type: "single",
    text: "In Jeff Patton's User Story Mapping, what forms the horizontal 'Backbone' of the map?",
    options: [
      "The list of database foreign keys",
      "The chronological narrative flow of high-level user activities and steps across their customer journey",
      "The velocity burndown chart over 12 sprints",
      "The names of engineering team members"
    ],
    correctAnswers: [1],
    explanation: "The backbone of a user story map represents the chronological narrative flow of user activities and tasks.",
    references: "User Story Mapping - Jeff Patton"
  },
  {
    domain: "Stakeholder Collaboration",
    type: "single",
    text: "What is the primary role of the Product Owner during the Sprint Retrospective?",
    options: [
      "To judge individual developers and hand out penalties",
      "To participate as an equal Scrum Team member, inspecting collaboration, backlog refinement effectiveness, and identifying continuous improvements",
      "The Product Owner is forbidden from attending the Retrospective",
      "To renegotiate story point estimates"
    ],
    correctAnswers: [1],
    explanation: "The PO is an equal member of the Scrum Team at the Retrospective, collaborating on team effectiveness, quality, and mutual trust.",
    references: "Scrum Guide 2020 & Scrum Alliance"
  },
  {
    domain: "Product Economics & Business Value",
    type: "single",
    text: "What does 'Cost of Delay' (CoD) quantify for a Product Owner?",
    options: [
      "The financial and strategic cost incurred over time by postponing the delivery of a feature or initiative",
      "The price of developer coffee",
      "The penalty paid to cloud providers for idle servers",
      "The hourly rate of the Scrum Master"
    ],
    correctAnswers: [0],
    explanation: "Cost of Delay measures the recurring economic impact (lost revenue, customer attrition, compliance fines) of delivering a feature later rather than sooner.",
    references: "Donald Reinertsen - Principles of Product Development Flow"
  },
  {
    domain: "Story Slicing & SPIDR",
    type: "single",
    text: "In Mike Cohn's SPIDR method for slicing large user stories, what does the 'D' represent?",
    options: [
      "Duration",
      "Data (slicing by data types, ranges, or supported formats)",
      "Database",
      "Deadline"
    ],
    correctAnswers: [1],
    explanation: "SPIDR stands for Spike, Paths, Interfaces, Data, and Rules. Slicing by Data means supporting basic data first before expanding to complex data variations.",
    references: "Mike Cohn - Slicing User Stories with SPIDR"
  },
  {
    domain: "Story Slicing & SPIDR",
    type: "single",
    text: "In the SPIDR story splitting model, what does the 'R' stand for?",
    options: [
      "Refactoring",
      "Rules (relaxing business rules or validation constraints initially to deliver a working slice)",
      "Release",
      "Retrospective"
    ],
    correctAnswers: [1],
    explanation: "Rules: splitting complex business logic by relaxing strict validation constraints in early iterations and adding advanced rules incrementally.",
    references: "Mike Cohn - Slicing User Stories with SPIDR"
  },
  {
    domain: "Acceptance Criteria & BDD",
    type: "single",
    text: "What is the standard syntax for Behavior-Driven Development (BDD) Acceptance Criteria?",
    options: [
      "Given [initial context], When [event occurs], Then [expected outcome]",
      "As a [role], I want [feature], so that [benefit]",
      "Task -> Subtask -> Story -> Epic",
      "If -> Else -> While"
    ],
    correctAnswers: [0],
    explanation: "BDD uses Given-When-Then syntax (Gherkin format) to state testable, unambiguous acceptance criteria.",
    references: "Dan North - Behavior Driven Development"
  },
  {
    domain: "Scrum Alliance PO Competencies",
    type: "single",
    text: "How should a Product Owner handle non-functional requirements like security, performance, and accessibility?",
    options: [
      "Ignore them until after the product launches",
      "Incorporate them either into the Definition of Done or as explicit Product Backlog items",
      "Transfer them to an external vendor",
      "Force developers to work unpaid weekends"
    ],
    correctAnswers: [1],
    explanation: "Non-functional requirements must either be embedded in the Definition of Done (if global) or tracked as explicit Product Backlog items.",
    references: "Scrum Alliance CSPO Competencies"
  },
  {
    domain: "Product Vision & Strategy",
    type: "single",
    text: "What is the primary purpose of Roman Pichler's Product Canvas?",
    options: [
      "To replace the Product Backlog entirely",
      "To connect the product vision with customer personas, value proposition, and actionable product backlog items on a single visible sheet",
      "To calculate individual developer compensation",
      "To draw wireframes of mobile screens"
    ],
    correctAnswers: [1],
    explanation: "The Product Canvas combines Agile product management and Lean Startup by connecting vision, target personas, and the product roadmap.",
    references: "Roman Pichler - Product Canvas"
  },
  {
    domain: "Prioritization Techniques",
    type: "single",
    text: "In Luke Hohmann's Innovation Games, how does 'Buy a Feature' work?",
    options: [
      "Customers use play money with fixed budgets to purchase their most desired features, revealing authentic value trade-offs",
      "Developers buy features on an online auction",
      "The Product Owner sells features to competitors",
      "Stakeholders bribe the Scrum Master"
    ],
    correctAnswers: [0],
    explanation: "Buy a Feature gives stakeholders play currency with a constrained budget, forcing collaborative negotiation and revealing real priorities.",
    references: "Luke Hohmann - Innovation Games"
  },
  {
    domain: "Prioritization Techniques",
    type: "single",
    text: "What are the four components of RICE scoring?",
    options: [
      "Reach, Impact, Confidence, Effort",
      "Revenue, Iterations, Customers, Expenses",
      "Risk, Interest, Cost, Execution",
      "Role, Intent, Context, Evaluation"
    ],
    correctAnswers: [0],
    explanation: "RICE = (Reach x Impact x Confidence) / Effort. It provides an objective quantitative prioritization index.",
    references: "Intercom - RICE Scoring Model"
  },
  {
    domain: "Story Mapping & Slicing",
    type: "single",
    text: "What is a 'Walking Skeleton' in user story mapping and iterative development?",
    options: [
      "A developer who works late at night",
      "A tiny implementation of the system that performs an end-to-end customer function linking all architectural layers, proving viability",
      "A broken build that fails all tests",
      "An empty Jira project with no stories"
    ],
    correctAnswers: [1],
    explanation: "A Walking Skeleton is a minimal end-to-end architectural slice that proves technical viability and links all layers before adding features.",
    references: "Alistair Cockburn - Walking Skeleton"
  },
  {
    domain: "Customer Discovery & Personas",
    type: "single",
    text: "What are the four quadrants of an Empathy Map?",
    options: [
      "Says, Thinks, Does, Feels",
      "Cost, Price, Profit, Loss",
      "North, South, East, West",
      "Input, Process, Output, Storage"
    ],
    correctAnswers: [0],
    explanation: "An Empathy Map captures customer reality across four quadrants: Says, Thinks, Does, and Feels, along with Pains and Gains.",
    references: "Dave Gray - Empathy Mapping"
  },
  {
    domain: "Scrum Alliance PO Competencies",
    type: "single",
    text: "A stakeholder demands that a feature be added to the current sprint. What is the Product Owner's best response?",
    options: [
      "Explain that active sprint scope is protected to achieve the agreed Sprint Goal; add the request to the Product Backlog for upcoming refinement",
      "Add it immediately and tell developers to cancel their lunches",
      "Block the stakeholder on email",
      "Quit the company"
    ],
    correctAnswers: [0],
    explanation: "The PO protects the active Sprint and team focus, capturing new requests into the Product Backlog for transparent future prioritization.",
    references: "Scrum Alliance - Product Owner Facilitation"
  },
  {
    domain: "Product Economics & Business Value",
    type: "single",
    text: "What does 'Flow Efficiency' measure in an agile product value stream?",
    options: [
      "Active Touch Time / Total Lead Time multiplied by 100%",
      "How fast developers type code in lines per hour",
      "The water flow rate of office fountains",
      "The percentage of meetings that end on time"
    ],
    correctAnswers: [0],
    explanation: "Flow Efficiency = (Active Work Time / Total Lead Time) x 100%. In typical software teams, it is often under 15% due to handoff and queue waste.",
    references: "Lean Software Development & Flow Efficiency"
  },
  {
    domain: "Release Planning & Metrics",
    type: "single",
    text: "What does a Cumulative Flow Diagram (CFD) reveal to a Product Owner?",
    options: [
      "Work in Progress (WIP), bottlenecks, and cycle time trends across workflow stages",
      "The salary of individual engineers",
      "The company's stock price fluctuations",
      "The number of coffee cups consumed per day"
    ],
    correctAnswers: [0],
    explanation: "A CFD illustrates WIP bands over time; widening bands reveal bottlenecks, while band slopes show arrival and departure rates.",
    references: "Kanban & Agile Metrics - Daniel Vacanti"
  },
  {
    domain: "Story Slicing & SPIDR",
    type: "single",
    text: "In the Hamburger method of user story splitting, how are steps organized?",
    options: [
      "Layers of quality and fidelity (e.g. manual -> automated -> optimized) are layered across each functional step like ingredients in a burger",
      "Stories are named after fast-food restaurants",
      "All stories are made exactly 5 story points",
      "Developers eat hamburgers during refinement"
    ],
    correctAnswers: [0],
    explanation: "Gojko Adzic's Hamburger method breaks each functional step into depth levels (from rudimentary manual to sophisticated automated) to slice thin MVPs.",
    references: "Gojko Adzic - Slicing User Stories"
  },
  {
    domain: "Customer Discovery & Personas",
    type: "single",
    text: "What is an 'Anti-Persona' in product management?",
    options: [
      "A profile of a user archetype that your product is deliberately NOT designed for, helping the team avoid scope bloat",
      "A malicious hacker",
      "A developer who hates agile",
      "A fake customer created to inflate marketing leads"
    ],
    correctAnswers: [0],
    explanation: "An Anti-Persona clearly defines who the product is NOT for, providing clear boundaries to prevent diluting the core value proposition.",
    references: "User Centered Design - Anti-Personas"
  },
  {
    domain: "Acceptance Criteria & BDD",
    type: "single",
    text: "Why should Acceptance Criteria be written collaboratively with Developers rather than handed off as edicts?",
    options: [
      "Shared understanding creates better solutions, uncovers edge cases early, and fosters shared commitment",
      "Developers cannot read without Product Owners in the room",
      "The Scrum Master requires meeting minutes",
      "It makes the meeting last longer"
    ],
    correctAnswers: [0],
    explanation: "Collaboration across the 'Three Amigos' (PO, Developer, QA) builds shared understanding and catches defects before code is ever written.",
    references: "Three Amigos & Behavior Driven Development"
  },
  {
    domain: "Product Vision & Strategy",
    type: "single",
    text: "What is the difference between a Minimum Viable Product (MVP) and a Minimum Marketable Feature (MMF)?",
    options: [
      "An MVP validates core learning hypotheses with least effort; an MMF delivers the smallest discrete bundle of marketable value to paying customers",
      "They are identical terms with no difference",
      "MVP is for hardware; MMF is for software",
      "MMF is only used by sales teams"
    ],
    correctAnswers: [0],
    explanation: "MVP focuses on learning and validating customer hypotheses; MMF focuses on the smallest unit of commercial delivery that creates tangible market value.",
    references: "Software by Numbers - Mark Denne & Jane Cleland-Huang"
  },
  {
    domain: "Prioritization Techniques",
    type: "single",
    text: "What does the 2x2 'Value vs Effort' matrix help a Product Owner identify as 'Quick Wins'?",
    options: [
      "High Value, Low Effort features",
      "Low Value, High Effort features",
      "Low Value, Low Effort features",
      "High Value, High Effort features"
    ],
    correctAnswers: [0],
    explanation: "High Value, Low Effort items are 'Quick Wins' or low-hanging fruit that should typically be prioritized early.",
    references: "Agile Estimation and Planning - Mike Cohn"
  },
  {
    domain: "Scrum Alliance PO Competencies",
    type: "single",
    text: "What is the primary indicator of a successful Sprint Planning event from a Product Owner's perspective?",
    options: [
      "The Scrum Team commits to a clear, valuable Sprint Goal and selects a coherent forecast of backlog items to achieve it",
      "All 8 hours of the timebox were fully consumed",
      "The Product Owner assigned individual tasks to every developer",
      "Zero questions were asked during the meeting"
    ],
    correctAnswers: [0],
    explanation: "Sprint Planning is successful when the team aligns on Why the Sprint is valuable (Sprint Goal), What can be done, and How it will be achieved.",
    references: "Scrum Guide 2020 & Scrum Alliance"
  },
  {
    domain: "Release Planning & Metrics",
    type: "single",
    text: "Why should a Product Owner avoid comparing story point velocity across different Scrum Teams?",
    options: [
      "Velocity is a relative, localized measure unique to each team's estimation scale and cannot be normalized across teams",
      "It violates corporate copyright laws",
      "Developers will stop using computers",
      "All teams must have identical velocity"
    ],
    correctAnswers: [0],
    explanation: "Story points are relative to each team. Comparing velocities across teams encourages point gaming and destroys genuine estimation utility.",
    references: "Scrum Alliance - Estimation & Velocity"
  },
  {
    domain: "Customer Discovery & Personas",
    type: "single",
    text: "In the Jobs-to-be-Done (JTBD) framework, what are the 'Four Forces' that influence a customer's decision to switch products?",
    options: [
      "Push of current situation, Pull of new solution, Habit of the present, Anxiety of the new",
      "Price, Quality, Brand, Advertising",
      "Speed, Memory, CPU, Storage",
      "Internal, External, Technical, Commercial"
    ],
    correctAnswers: [0],
    explanation: "The 4 forces of JTBD are: Push (pain of current state), Pull (attraction of new product), Habit (inertia of current ways), and Anxiety (fear of the unknown).",
    references: "Competing Against Luck - Clayton Christensen"
  },
  {
    domain: "Product Economics & Business Value",
    type: "single",
    text: "What does 'Technical Debt' do to the long-term cost of change in software?",
    options: [
      "Increases the cost of change exponentially, making every future feature take longer and cost more to deliver",
      "Reduces the cost of change to zero",
      "Has no effect on software costs",
      "Guarantees that the software will never have bugs"
    ],
    correctAnswers: [0],
    explanation: "Technical debt incurs compound interest: over time, architectural decay and messy code make future modifications increasingly expensive and risky.",
    references: "Ward Cunningham - Technical Debt Metaphor"
  },
  {
    domain: "Acceptance Criteria & BDD",
    type: "single",
    text: "What should happen if during refinement, the team discovers a story has 25 complex acceptance criteria?",
    options: [
      "The story is too large and should be sliced into smaller, independent user stories",
      "Keep it as a single story to win story points",
      "Delete all acceptance criteria to simplify development",
      "Cancel the sprint"
    ],
    correctAnswers: [0],
    explanation: "A story with 25 acceptance criteria is an Epic in disguise. It should be split into smaller, independent, testable stories meeting the INVEST criteria.",
    references: "Agile Coaching Institute - Story Splitting"
  },
  {
    domain: "Product Vision & Strategy",
    type: "single",
    text: "What role does an 'Elevator Pitch' play for a Product Owner communicating with stakeholders?",
    options: [
      "Provides a clear, concise 30-second articulation of target customer, problem, product differentiation, and unique value proposition",
      "Sells elevators to building contractors",
      "Replaces the entire Product Backlog",
      "Is only used when standing in physical elevators"
    ],
    correctAnswers: [0],
    explanation: "The elevator pitch crystallizes product vision into a concise, memorable summary that aligns team members, executives, and customers.",
    references: "Geoffrey Moore - Crossing the Chasm"
  },
  {
    domain: "Scrum Alliance PO Competencies",
    type: "single",
    text: "How does the Product Owner demonstrate the Scrum value of 'Focus'?",
    options: [
      "By protecting the team from unrelated distractions and keeping everyone aligned to the single Sprint Goal and Product Goal",
      "By staring at the screen for 8 hours without blinking",
      "By refusing to speak to anyone outside the team",
      "By locking the office doors"
    ],
    correctAnswers: [0],
    explanation: "Focus in Scrum means directing collective energy toward clear, valuable goals rather than scattering attention across competing low-value demands.",
    references: "Scrum Guide 2020 - Scrum Values"
  },
  {
    domain: "Prioritization Techniques",
    type: "single",
    text: "What is the primary benefit of relative estimation (e.g. Planning Poker) over absolute hourly estimation?",
    options: [
      "Humans are significantly faster and more accurate at judging relative size than predicting exact absolute hours in complex domains",
      "Planning poker cards look pretty on desks",
      "It eliminates all uncertainty forever",
      "It allows developers to work without thinking"
    ],
    correctAnswers: [0],
    explanation: "Relative sizing abstracts away individual speed differences and acknowledges the cone of uncertainty in complex knowledge work.",
    references: "Mike Cohn - Agile Estimating and Planning"
  }
];

// Helper to generate 5 full mock exams of exactly 35 questions each
function generateCspoExams(examCount = 5, questionsPerExam = 35) {
  const exams = [];

  for (let e = 1; e <= examCount; e++) {
    const examQuestions = buildBalancedExamQuestions(cspoPool, questionsPerExam, e, 'cspo');

    exams.push({
      id: `cspo-mock-${e}`,
      title: `CSPO - Practice Exam ${e} (Scrum Alliance Replica Simulation)`,
      examNumber: e,
      durationMinutes: 60,
      passingScore: 75,
      questions: examQuestions
    });
  }

  return exams;
}

module.exports = {
  cspoPool,
  generateCspoExams
};
