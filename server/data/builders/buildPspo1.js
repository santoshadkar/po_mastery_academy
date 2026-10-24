// Comprehensive Authentic Question Pool Builder for PSPO I (Scrum.org Replica)
// Format: 80 Questions per Mock Exam, 60 Minutes Timebox, 85% Passing Score
// Question Types: Multiple-Choice, Multiple-Answer, True/False

const pspo1Pool = [
  // --- ACCOUNTABILITIES & SCRUM FRAMEWORK ---
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Who has the final accountability for the content and order of the Product Backlog?",
    options: [
      "The Lead Architect and Engineering Director",
      "The Product Owner alone",
      "The Scrum Master and Developers jointly",
      "The Project Management Office (PMO)"
    ],
    correctAnswers: [1],
    explanation: "According to the Scrum Guide 2020, the Product Owner is solely accountable for effective Product Backlog management, including developing, explicitly communicating, and ordering Product Backlog items.",
    references: "Scrum Guide 2020 - Product Owner Accountability"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Can the Product Owner delegate the work of writing user stories and ordering the Product Backlog to Developers or Business Analysts?",
    options: [
      "No, the Product Owner must personally write and order every single item in the backlog management tool",
      "Yes, the Product Owner may represent the work or have others do it, but the Product Owner remains accountable for the decisions and value",
      "Yes, and once delegated, the Product Owner is relieved of all accountability",
      "Only if approved by executive leadership in a formal delegation charter"
    ],
    correctAnswers: [1],
    explanation: "The Scrum Guide explicitly states: 'The Product Owner may do the above work or may delegate the responsibility to others. Regardless, the Product Owner remains accountable.'",
    references: "Scrum Guide 2020 - The Product Owner"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "A CEO tells the Developers to drop their current Sprint Backlog items and immediately work on a personal pet feature. How should the Developers respond according to Scrum?",
    options: [
      "Comply immediately because the CEO holds final executive authority",
      "Politely inform the CEO that changes to product priorities must go through the Product Owner, who is solely accountable for backlog ordering",
      "Pause the Sprint and initiate a formal grievance process",
      "Work overtime in secret without informing the Product Owner"
    ],
    correctAnswers: [1],
    explanation: "For the Product Owner to succeed, the entire organization must respect their decisions. Those who want to change the Product Backlog must convince the Product Owner.",
    references: "Scrum Guide 2020 - The Product Owner"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Who is accountable for creating a plan for the Sprint, known as the Sprint Backlog?",
    options: [
      "The Product Owner",
      "The Developers",
      "The Scrum Master",
      "The Scrum Team collaboratively with the Project Manager"
    ],
    correctAnswers: [1],
    explanation: "The Sprint Backlog is created by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint.",
    references: "Scrum Guide 2020 - Sprint Backlog"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "What is the primary accountability of the Scrum Master towards the Product Owner?",
    options: [
      "Ordering the Product Backlog on behalf of the Product Owner",
      "Helping find techniques for effective Product Goal definition and Product Backlog management",
      "Assigning daily tasks to Developers to ensure the Product Owner's velocity is met",
      "Deciding which features get released to production"
    ],
    correctAnswers: [1],
    explanation: "The Scrum Master serves the Product Owner by helping find techniques for effective Product Goal definition and Product Backlog management, and facilitating stakeholder collaboration.",
    references: "Scrum Guide 2020 - Scrum Master Service to Product Owner"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: The Product Owner is the only person empowered to cancel a Sprint.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. A Sprint can be cancelled before the Sprint timebox is over. Only the Product Owner has the authority to cancel the Sprint (typically if the Sprint Goal becomes obsolete).",
    references: "Scrum Guide 2020 - Sprint Cancellation"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: The Product Owner can be a committee of representatives from marketing, sales, and engineering.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. The Product Owner is one person, not a committee. The Product Owner may represent the needs of many stakeholders in the Product Backlog, but must remain a single individual.",
    references: "Scrum Guide 2020 - The Product Owner"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: In Scrum, the Product Owner decides HOW the Developers will build the Increment.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Developers are self-managing. While the Product Owner defines WHAT is valuable and WHY, no one else tells the Developers HOW to turn items of the Product Backlog into Increments of value.",
    references: "Scrum Guide 2020 - Developers"
  },
  {
    domain: "Scrum Accountabilities",
    type: "multiple",
    text: "Which TWO of the following are explicit accountabilities of the Product Owner in Scrum? (Select two)",
    options: [
      "Developing and explicitly communicating the Product Goal",
      "Creating the Sprint Goal during Sprint Retrospective",
      "Ordering Product Backlog items to maximize value",
      "Estimating the work effort in story points for each item",
      "Managing the day-to-day task assignments of Developers"
    ],
    correctAnswers: [0, 2],
    explanation: "Product Owner accountabilities include developing and explicitly communicating the Product Goal, creating and clearly communicating Product Backlog items, and ordering Product Backlog items.",
    references: "Scrum Guide 2020 - Product Owner Accountabilities"
  },
  {
    domain: "Scrum Accountabilities",
    type: "multiple",
    text: "When multiple Scrum Teams work together on a single product, what is required? (Select two)",
    options: [
      "There must be one single Product Backlog",
      "There must be one Product Owner for each individual Scrum Team",
      "There must be exactly one Product Owner accountable for the overall product",
      "Each team must maintain a separate disconnected Product Goal",
      "Teams must merge all their code only at the end of the quarter"
    ],
    correctAnswers: [0, 2],
    explanation: "Multiple Scrum Teams working on the same product must share ONE Product Backlog, ONE Product Goal, and ONE Product Owner.",
    references: "Scrum Guide 2020 - Multiple Scrum Teams"
  },

  // --- PRODUCT GOAL & SPRINT GOAL ---
  {
    domain: "Product & Sprint Goals",
    type: "single",
    text: "What is the commitment for the Product Backlog in the 2020 Scrum Guide?",
    options: [
      "Definition of Done",
      "The Product Goal",
      "The Sprint Goal",
      "The Release Burndown Target"
    ],
    correctAnswers: [1],
    explanation: "The commitment for the Product Backlog is the Product Goal. It describes a future state of the product which can serve as a target for the Scrum Team to plan against.",
    references: "Scrum Guide 2020 - Product Goal"
  },
  {
    domain: "Product & Sprint Goals",
    type: "single",
    text: "How many Product Goals can a Scrum Team actively pursue at a single time?",
    options: [
      "As many as the stakeholders demand",
      "Exactly one Product Goal at a time; the team must fulfill or abandon one before taking on the next",
      "Up to three, provided each is assigned to a distinct sub-team",
      "One per Sprint"
    ],
    correctAnswers: [1],
    explanation: "The Scrum Guide states: 'The Product Goal is the long-term objective for the Scrum Team. They must fulfill (or abandon) one objective before taking on the next.'",
    references: "Scrum Guide 2020 - Product Goal"
  },
  {
    domain: "Product & Sprint Goals",
    type: "single",
    text: "When is the Sprint Goal created and finalized?",
    options: [
      "During Product Backlog refinement prior to the Sprint",
      "During Sprint Planning, collaboratively by the entire Scrum Team",
      "By the Product Owner alone before Sprint Planning begins",
      "At the Sprint Review when inspecting the Increment"
    ],
    correctAnswers: [1],
    explanation: "The entire Scrum Team collaborates during Sprint Planning to craft a Sprint Goal that communicates why the Sprint is valuable to stakeholders.",
    references: "Scrum Guide 2020 - Sprint Planning Topic 1"
  },
  {
    domain: "Product & Sprint Goals",
    type: "single",
    text: "What should happen if the Developers realize midway through the Sprint that they cannot complete all the work forecasted in the Sprint Backlog?",
    options: [
      "The Sprint must be immediately cancelled by the Scrum Master",
      "The Developers negotiate with the Product Owner to adjust the scope of work without compromising the Sprint Goal",
      "The Developers reduce the quality standards defined in the Definition of Done",
      "The Sprint timebox is extended by one week"
    ],
    correctAnswers: [1],
    explanation: "As Developers work during the Sprint, if the work turns out to be different than expected, they collaborate with the Product Owner to negotiate scope without affecting the Sprint Goal.",
    references: "Scrum Guide 2020 - Sprint"
  },
  {
    domain: "Product & Sprint Goals",
    type: "true_false",
    text: "True or False: The Sprint Goal is a flexible target that can be changed by the Developers at every Daily Scrum.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. During the Sprint, no changes are made that would endanger the Sprint Goal. The Sprint Goal provides focus and cannot be altered casually.",
    references: "Scrum Guide 2020 - Sprint"
  },
  {
    domain: "Product & Sprint Goals",
    type: "true_false",
    text: "True or False: The Product Goal is contained within the Product Backlog.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. The Product Goal is in the Product Backlog. The rest of the Product Backlog emerges to define 'what' will fulfill the Product Goal.",
    references: "Scrum Guide 2020 - Product Goal"
  },
  {
    domain: "Product & Sprint Goals",
    type: "multiple",
    text: "Which of the following are true about the Sprint Goal? (Select two)",
    options: [
      "It provides a single objective that gives the Developers flexibility regarding the exact work implemented",
      "It must be a list of all Jira ticket numbers included in the Sprint",
      "It is the single commitment for the Sprint Backlog artifact",
      "It is owned exclusively by the Scrum Master",
      "It cannot be abandoned even if business conditions change radically"
    ],
    correctAnswers: [0, 2],
    explanation: "The Sprint Goal is the commitment for the Sprint Backlog. It creates coherence and focus, encouraging the team to work together rather than on separate initiatives.",
    references: "Scrum Guide 2020 - Sprint Goal"
  },

  // --- PRODUCT BACKLOG MANAGEMENT & ORDERING ---
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "How should a Product Owner order items in the Product Backlog?",
    options: [
      "Strictly in chronological order of when stakeholders submitted their requests",
      "In any order that the Product Owner deems will maximize the overall value of the product",
      "Sorted alphabetically by feature title",
      "By placing the easiest technical tasks at the top to inflate sprint velocity"
    ],
    correctAnswers: [1],
    explanation: "The Product Owner orders the Product Backlog to maximize value. Ordering factors include business value, risk, cost of delay, dependencies, learning, and urgency.",
    references: "Scrum Guide 2020 - Product Backlog"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "What is Product Backlog Refinement?",
    options: [
      "A mandatory 4-hour meeting held on the last day of the Sprint",
      "An ongoing activity in which the Product Owner and Developers add detail, estimates, and order to items",
      "A quality audit conducted exclusively by external testing consultants",
      "A session where the Scrum Master approves each user story"
    ],
    correctAnswers: [1],
    explanation: "Product Backlog refinement is the act of breaking down and further defining Product Backlog items into smaller, more precise items. It is an ongoing activity.",
    references: "Scrum Guide 2020 - Product Backlog Refinement"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "Who is responsible for sizing and estimating Product Backlog items?",
    options: [
      "The Product Owner, because they know the business value",
      "The Developers who will perform the work",
      "The Scrum Master using planning poker rules",
      "The Enterprise Architecture Governance Committee"
    ],
    correctAnswers: [1],
    explanation: "The Developers who will be doing the work are responsible for the sizing. The Product Owner may influence the Developers by helping them understand and select trade-offs.",
    references: "Scrum Guide 2020 - Product Backlog Items"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "When is a Product Backlog considered complete or finalized?",
    options: [
      "At the conclusion of the initial architecture design sprint",
      "Never; the Product Backlog is dynamic and constantly evolves as long as the product exists",
      "When the first major release is deployed to production",
      "When all original PRD requirements have been entered into Jira"
    ],
    correctAnswers: [1],
    explanation: "A Product Backlog is never complete. The earliest development of it lays out the initially known and best-understood requirements. It evolves as the product and environment evolve.",
    references: "Scrum Guide 2020 - Product Backlog"
  },
  {
    domain: "Product Backlog Management",
    type: "true_false",
    text: "True or False: Non-functional requirements (such as system security, performance, and scalability) should always be stored in a separate technical backlog.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. There is only ONE Product Backlog for a product. Non-functional requirements should either be part of the Definition of Done or ordered directly in the Product Backlog.",
    references: "Scrum Guide 2020 - Product Backlog & Definition of Done"
  },
  {
    domain: "Product Backlog Management",
    type: "true_false",
    text: "True or False: Product Backlog items at the top of the backlog must be refined so they can be completed within one Sprint.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. Product Backlog items that can be Done by the Scrum Team within one Sprint are deemed ready for selection in a Sprint Planning event.",
    references: "Scrum Guide 2020 - Product Backlog Refinement"
  },
  {
    domain: "Product Backlog Management",
    type: "multiple",
    text: "Which of the following factors should the Product Owner consider when ordering the Product Backlog? (Select three)",
    options: [
      "Cost of Delay and financial return on investment",
      "Technical dependencies and learning risk",
      "The personal job titles and seniority of stakeholders",
      "Customer desired satisfaction gaps and user feedback",
      "The date the request was first logged in the ticketing tool"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Effective ordering balances value, cost of delay, risk reduction, technical dependencies, and customer feedback. Seniority and submission dates are anti-patterns.",
    references: "Professional Scrum Product Owner - Value Ordering"
  },

  // --- SCRUM EVENTS ---
  {
    domain: "Scrum Events",
    type: "single",
    text: "What is the maximum timebox for Sprint Planning in a one-month Sprint?",
    options: [
      "2 hours",
      "4 hours",
      "8 hours",
      "As long as needed until all tasks are assigned"
    ],
    correctAnswers: [2],
    explanation: "Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
    references: "Scrum Guide 2020 - Sprint Planning"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "What are the three topics addressed during Sprint Planning in the 2020 Scrum Guide?",
    options: [
      "Topic 1: Why is this Sprint valuable? Topic 2: What can be Done this Sprint? Topic 3: How will the chosen work get done?",
      "Topic 1: Budget allocation; Topic 2: Individual performance reviews; Topic 3: Risk mitigation",
      "Topic 1: Architecture review; Topic 2: QA sign-off; Topic 3: Sprint Goal sign-off",
      "Topic 1: Velocity calculation; Topic 2: Capacity check; Topic 3: Ticket assignment"
    ],
    correctAnswers: [0],
    explanation: "The 2020 Scrum Guide defines three topics for Sprint Planning: 1. Why is this Sprint valuable? 2. What can be Done this Sprint? 3. How will the chosen work get done?",
    references: "Scrum Guide 2020 - Sprint Planning"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "What is the primary purpose of the Sprint Review?",
    options: [
      "For the Product Owner to accept or reject individual user stories line by line in private",
      "To inspect the outcome of the Sprint and determine future adaptations with key stakeholders",
      "To present a PowerPoint slide deck of planned upcoming roadmaps",
      "To evaluate the individual code quality of Developers"
    ],
    correctAnswers: [1],
    explanation: "The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.",
    references: "Scrum Guide 2020 - Sprint Review"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "Must the Product Owner attend the Daily Scrum?",
    options: [
      "Yes, to take attendance and assign new daily tasks to Developers",
      "No, the Daily Scrum is an event exclusively for the Developers, though the PO may attend if they are actively working on items as Developers",
      "Yes, because only the Product Owner can resolve impediments raised at the Daily Scrum",
      "No, the Product Owner is strictly banned from being in the room during the Daily Scrum"
    ],
    correctAnswers: [1],
    explanation: "The Daily Scrum is an event for Developers of the Scrum Team. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers.",
    references: "Scrum Guide 2020 - Daily Scrum"
  },
  {
    domain: "Scrum Events",
    type: "true_false",
    text: "True or False: The Sprint Review is a formal gatekeeping event where the Product Owner validates code for the very first time.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. The Product Owner should inspect and provide feedback on work continuously throughout the Sprint as Increments are created, not wait until the Sprint Review.",
    references: "Professional Scrum Product Owner - Continuous Inspection"
  },
  {
    domain: "Scrum Events",
    type: "true_false",
    text: "True or False: If an item does not meet the Definition of Done, it cannot be presented at the Sprint Review.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration.",
    references: "Scrum Guide 2020 - Increment"
  },
  {
    domain: "Scrum Events",
    type: "multiple",
    text: "Which of the following activities take place during a productive Sprint Review? (Select two)",
    options: [
      "The Scrum Team and stakeholders review what was accomplished and what has changed in their environment",
      "The Scrum Master assigns individual performance ratings to Developers",
      "Attendees collaborate on what to do next, adjusting the Product Backlog to meet new opportunities",
      "Developers complete their remaining automated unit tests for unfinished items",
      "The Product Owner locks the Product Backlog permanently against changes"
    ],
    correctAnswers: [0, 2],
    explanation: "Sprint Review is a working session: attendees inspect what was accomplished and collaborate on what to do next based on the outcome and market conditions.",
    references: "Scrum Guide 2020 - Sprint Review"
  },

  // --- DEFINITION OF DONE & INCREMENTS ---
  {
    domain: "Definition of Done & Increment",
    type: "single",
    text: "What is the commitment for the Increment artifact in Scrum?",
    options: [
      "The Product Goal",
      "The Sprint Goal",
      "The Definition of Done",
      "The Release Burndown Plan"
    ],
    correctAnswers: [2],
    explanation: "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. It is the commitment for the Increment.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Definition of Done & Increment",
    type: "single",
    text: "When must an Increment be born in Scrum?",
    options: [
      "Only on the final day of the Sprint during the Sprint Review",
      "At the moment a Product Backlog item meets the Definition of Done",
      "Only after an external QA team approves the release in a separate hardening sprint",
      "At the end of each fiscal quarter"
    ],
    correctAnswers: [1],
    explanation: "The moment a Product Backlog item meets the Definition of Done, an Increment is born. Multiple Increments may be created within a single Sprint.",
    references: "Scrum Guide 2020 - Increment"
  },
  {
    domain: "Definition of Done & Increment",
    type: "single",
    text: "Who has the final decision on whether and when to release a usable Increment to end users?",
    options: [
      "The Developers",
      "The Scrum Master",
      "The Product Owner",
      "The IT Operations Manager"
    ],
    correctAnswers: [2],
    explanation: "The Product Owner is accountable for maximizing the value of the product and decides when and what Increments should be released to customers.",
    references: "Scrum Guide 2020 - Product Owner Release Decision"
  },
  {
    domain: "Definition of Done & Increment",
    type: "true_false",
    text: "True or False: An Increment must be released to production at the end of every Sprint.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. While the Increment must be in a usable, releasable state meeting the Definition of Done, releasing it to production is a business decision made by the Product Owner.",
    references: "Scrum Guide 2020 - Increment"
  },
  {
    domain: "Definition of Done & Increment",
    type: "true_false",
    text: "True or False: If multiple Scrum Teams work on the same product, they must mutually conform to a single integrated Definition of Done.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. If multiple Scrum Teams work together on a product, they must mutually define and comply with the same Definition of Done for that product.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Definition of Done & Increment",
    type: "multiple",
    text: "What happens to Product Backlog items that are not completed (do not meet the Definition of Done) at the end of the Sprint? (Select two)",
    options: [
      "They cannot be included in the Increment",
      "They are counted as 50% done in velocity calculations",
      "They return to the Product Backlog for the Product Owner to re-estimate and re-order",
      "They automatically roll over into the next Sprint with top priority",
      "The team extends the Sprint timebox by 48 hours to finish them"
    ],
    correctAnswers: [0, 2],
    explanation: "Incomplete items cannot be included in the Increment and do not receive partial credit. They return to the Product Backlog for re-estimation and re-ordering by the Product Owner.",
    references: "Scrum Guide 2020 - End of Sprint"
  },

  // --- VALUE MAXIMIZATION & METRICS ---
  {
    domain: "Value Maximization",
    type: "single",
    text: "What is the primary measure of progress in Scrum?",
    options: [
      "Velocity in story points",
      "A valuable, usable Increment that meets the Definition of Done",
      "Hours logged by team members in the time-tracking tool",
      "The percentage of planned scope delivered on time"
    ],
    correctAnswers: [1],
    explanation: "Scrum is built on empiricism. Progress is measured by the delivery of valuable, usable Increments of working product, not story point velocity or output hours.",
    references: "Scrum Guide 2020 & Agile Manifesto Principle 7"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "Which of the following is considered an OUTCOME metric rather than an OUTPUT metric?",
    options: [
      "Number of user stories completed in Sprint 14",
      "Customer checkout abandonment rate decreased from 24% to 11%",
      "Total lines of code written by the engineering team",
      "Number of automated test cases added to CI/CD"
    ],
    correctAnswers: [1],
    explanation: "Output measures the volume of things produced (tickets, code, tests). Outcome measures the positive behavioral or commercial impact achieved (reduced checkout abandonment).",
    references: "Evidence-Based Management Guide - Outcomes vs Outputs"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "According to Evidence-Based Management (EBM), what does 'Unrealized Value (UV)' measure?",
    options: [
      "The current revenue generated by active customers today",
      "The potential future value that could be realized if the product met all unmet market needs",
      "The amount of money spent on technical debt maintenance",
      "The time it takes to deploy a bug fix to production"
    ],
    correctAnswers: [1],
    explanation: "Unrealized Value (UV) quantifies the potential future value that could be captured if the product satisfied all unmet customer or market needs.",
    references: "EBM Guide - Unrealized Value"
  },
  {
    domain: "Value Maximization",
    type: "true_false",
    text: "True or False: Maximizing product value means building every feature requested by every stakeholder.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Maximizing value often means saying 'no' to low-value features and focusing the team on the highest-impact outcomes. Building everything creates bloat and dilutes value.",
    references: "Professional Scrum Product Owner - Value Maximization"
  },
  {
    domain: "Value Maximization",
    type: "true_false",
    text: "True or False: Technical debt directly impairs an organization's Ability to Innovate (A2I).",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. High technical debt diverts developer capacity toward defect fixes and maintenance, reducing the team's ability to innovate and deliver new value.",
    references: "EBM Guide - Ability to Innovate (A2I)"
  },
  {
    domain: "Value Maximization",
    type: "multiple",
    text: "Which TWO of the following metrics are Key Value Areas (KVAs) in Scrum.org's Evidence-Based Management (EBM) framework? (Select two)",
    options: [
      "Current Value (CV)",
      "Velocity Acceleration Rate (VAR)",
      "Ability to Innovate (A2I)",
      "Story Point Burnup Rate (SPBR)",
      "Individual Developer Utilization (IDU)"
    ],
    correctAnswers: [0, 2],
    explanation: "The 4 KVAs in EBM are Current Value (CV), Unrealized Value (UV), Time to Market (T2M), and Ability to Innovate (A2I).",
    references: "EBM Guide - 4 Key Value Areas"
  },

  // --- RELEASE FORECASTING & PLANNING ---
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "How should a Product Owner forecast release completion dates in a complex domain?",
    options: [
      "By calculating exact Gantt charts and promising fixed delivery dates 12 months in advance",
      "Empirically, using historical velocity trends, probabilistic forecasting (Monte Carlo), and the Cone of Uncertainty",
      "By asking the lead developer to guarantee 100% certainty on estimates",
      "By doubling all estimates to ensure the deadline is never missed"
    ],
    correctAnswers: [1],
    explanation: "In complex software development, precise predictive roadmaps fail. Empirical forecasting uses historical performance and probabilistic models to project ranges.",
    references: "Professional Scrum Product Owner - Forecasting"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "What does the 'Cone of Uncertainty' demonstrate in product development?",
    options: [
      "That project cost increases exponentially with team size",
      "That uncertainty is highest at the beginning of a project and decreases over time as empirical learning occurs",
      "That developers become less certain of their skills as the sprint progresses",
      "That stakeholders lose interest after 3 sprints"
    ],
    correctAnswers: [1],
    explanation: "The Cone of Uncertainty shows that in complex domains, variance and uncertainty are greatest at inception and narrow as working increments provide real empirical feedback.",
    references: "Cone of Uncertainty - Steve McConnell & Scrum.org"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "true_false",
    text: "True or False: Burn-up and burn-down charts show trends and remaining work, but do not replace the need for empirical inspection.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. While burn charts provide visual trends of work, in complex environments only what has already happened may be used for forward-looking decision-making.",
    references: "Scrum Guide 2020 - Product Backlog Tracking"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "multiple",
    text: "When managing a release date under fixed constraints, what levers does the Product Owner have to protect value and quality? (Select two)",
    options: [
      "Adjusting or reducing the scope of lower-priority Product Backlog items",
      "Removing automated tests from the Definition of Done to accelerate coding",
      "Collaborating with stakeholders on releasing an initial Minimum Marketable Feature set",
      "Forcing Developers to work mandatory 80-hour work weeks",
      "Cancelling the Sprint Review to save meeting time"
    ],
    correctAnswers: [0, 2],
    explanation: "The Product Owner protects quality by managing scope. Scope can be sliced or re-prioritized, but quality standards in the Definition of Done must never be compromised.",
    references: "Professional Scrum Product Owner - Scope vs Quality"
  },

  // --- ADDITIONAL SCENARIO & TRUE/FALSE QUESTIONS ---
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "During a Sprint, a senior stakeholder requests an urgent enhancement. The Product Owner is away on vacation and unreachable. What should the Developers do?",
    options: [
      "Implement the request immediately to avoid upsetting the stakeholder",
      "Continue working toward the agreed Sprint Goal; evaluate the new request when the Product Owner returns",
      "Cancel the Sprint and await executive instructions",
      "Hold a secret voting session to decide whether to build it"
    ],
    correctAnswers: [1],
    explanation: "Developers remain focused on the Sprint Goal. No one has authority to alter the Product Backlog or divert the Developers without the Product Owner.",
    references: "Scrum Guide 2020 - Sprint"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "What is the best way for a Product Owner to handle technical debt identified by Developers?",
    options: [
      "Ignore it because technical debt does not directly add visible buttons for end users",
      "Collaborate with Developers to make technical debt items transparent in the Product Backlog and order them appropriately",
      "Require Developers to resolve all technical debt on their personal unpaid time",
      "Transfer technical debt to a separate unmanaged spreadsheet"
    ],
    correctAnswers: [1],
    explanation: "Technical debt is product debt. The Product Owner makes it transparent in the Product Backlog and orders it against customer features to sustain long-term delivery capability.",
    references: "Professional Scrum Product Owner - Technical Debt"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "Who participates in the Sprint Retrospective?",
    options: [
      "The entire Scrum Team (Developers, Scrum Master, and Product Owner)",
      "Only the Developers and Scrum Master; Product Owners do not attend",
      "The Product Owner and external stakeholders only",
      "The Scrum Master and Human Resources"
    ],
    correctAnswers: [0],
    explanation: "The Sprint Retrospective is attended by the entire Scrum Team (Developers, Scrum Master, and Product Owner) to plan ways to increase quality and effectiveness.",
    references: "Scrum Guide 2020 - Sprint Retrospective"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: In Scrum, the Product Owner is responsible for writing all user acceptance test scripts and personally executing them before releasing code.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Quality and testing are the accountability of the entire Scrum Team, especially the Developers who build the Increment according to the Definition of Done.",
    references: "Scrum Guide 2020 - Developers & Definition of Done"
  },
  {
    domain: "Value Maximization",
    type: "true_false",
    text: "True or False: Customer feedback collected during Sprint Reviews can lead to immediate changes in the Product Backlog.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. The Sprint Review is an empirical inspection event where stakeholder feedback directly informs adaptations to the Product Backlog for future Sprints.",
    references: "Scrum Guide 2020 - Sprint Review"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "If a Scrum Team's average velocity is 40 story points per sprint, how many sprints will it take to finish a backlog of 200 story points?",
    options: [
      "Exactly 5 sprints with zero variance guaranteed",
      "Approximately 5 sprints, but velocity is an empirical trend and the team should communicate a probabilistic range rather than a guarantee",
      "10 sprints because velocity always cuts in half over time",
      "Velocity cannot be used for any forecasting"
    ],
    correctAnswers: [1],
    explanation: "Velocity is an empirical indicator with natural variance. A forecast of 200 points with 40 avg velocity is approximately 5 sprints, but should always be communicated as a range.",
    references: "Scrum.org - Empirical Forecasting"
  },
  {
    domain: "Product Backlog Management",
    type: "multiple",
    text: "Which of the following are characteristics of a well-formed Product Backlog item ready for Sprint Planning? (Select two)",
    options: [
      "Clear description of the desired value and outcome",
      "Sign-off signatures from at least 5 executive department heads",
      "Sized appropriately so the Developers believe it can be completed within one Sprint",
      "Contains fully finalized database schemas and byte-level line codes",
      "Guaranteed to never change once written"
    ],
    correctAnswers: [0, 2],
    explanation: "Items ready for selection in Sprint Planning describe clear value and are sized small enough to be completed within one Sprint.",
    references: "Scrum Guide 2020 - Product Backlog Refinement"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: A Scrum Team can have multiple Sprint Goals active within the same Sprint.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. A Scrum Team focuses on ONE Sprint Goal at a time per Sprint. Multiple goals divide focus and compromise coherence.",
    references: "Scrum Guide 2020 - Sprint Goal"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "A Product Owner conducts an experiment by releasing a 'fake door' or painted-door feature button to test customer interest before writing backend code. What is this practice an example of?",
    options: [
      "Dishonest software engineering that violates Scrum rules",
      "Empirical hypothesis validation and minimizing waste",
      "A failed Sprint increment",
      "Technical debt accumulation"
    ],
    correctAnswers: [1],
    explanation: "Painted-door tests are lean experiment techniques to validate market demand with minimal code, preventing the waste of building unwanted features.",
    references: "Professional Scrum Product Owner - Lean Experiments"
  },
  {
    domain: "Scrum Events",
    type: "true_false",
    text: "True or False: Sprint Planning can be cut short whenever the team has selected the first 3 user stories, even if they don't have a Sprint Goal.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. The Sprint Goal is mandatory. Without a Sprint Goal, the Sprint Backlog lacks coherence and purpose.",
    references: "Scrum Guide 2020 - Sprint Planning"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "What should a Product Owner do if they feel the Developers are creating low-quality code with frequent bugs?",
    options: [
      "Hire an external inspection agency to audit the developers' desks",
      "Collaborate with the Scrum Team to inspect and adapt the Definition of Done to include more rigorous quality criteria",
      "Withhold story points from the Developers at Sprint Review",
      "Cancel the project immediately"
    ],
    correctAnswers: [1],
    explanation: "Quality standards are embodied in the Definition of Done. The Scrum Team inspects and strengthens the Definition of Done during Sprint Retrospectives.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Value Maximization",
    type: "multiple",
    text: "What are the three pillars of empirical process control upon which Scrum is founded? (Select three)",
    options: [
      "Transparency",
      "Inspection",
      "Adaptation",
      "Prediction",
      "Standardization"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Scrum is founded on empiricism: Transparency, Inspection, and Adaptation.",
    references: "Scrum Guide 2020 - Scrum Theory"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Who creates the Definition of Done if one does not already exist as part of the organizational standards?",
    options: [
      "The Scrum Master alone",
      "The Product Owner alone",
      "The Scrum Team collaboratively",
      "The Human Resources director"
    ],
    correctAnswers: [2],
    explanation: "If the Definition of Done for an increment is not part of organizational standards, the Scrum Team must create a Definition of Done appropriate for the product.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Product Backlog Management",
    type: "true_false",
    text: "True or False: Every Product Backlog item must strictly follow the template: 'As a [user], I want [feature], so that [benefit]'.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. The user story template is a widely used complementary practice, but it is not mandated by Scrum. Items can take whatever format is clearest for the team.",
    references: "Scrum Guide 2020 - Product Backlog Items"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "What is the primary danger of using Velocity as a metric to evaluate individual developer performance?",
    options: [
      "Velocity was invented for teams, and measuring individuals encourages gaming story points, destroys collaboration, and incentivizes cutting quality",
      "It requires too many spreadsheet licenses",
      "Developers will stop drinking coffee",
      "The Scrum Master will have no job left"
    ],
    correctAnswers: [0],
    explanation: "Goodhart's Law: when a measure becomes a target, it ceases to be a good measure. Measuring individual velocity incentivizes point inflation and destroys team cohesion.",
    references: "Scrum.org - Velocity Anti-Patterns"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "Can a Sprint be shorter than one month?",
    options: [
      "No, the Scrum Guide mandates that all Sprints must be exactly 30 calendar days",
      "Yes, Sprints are fixed-duration events of one month or less to create consistency",
      "Only if approved by the Scrum Master on a case-by-case basis",
      "Only during the winter holiday season"
    ],
    correctAnswers: [1],
    explanation: "Sprints are fixed length events of one month or less. Shorter Sprints can be used to generate shorter learning cycles and limit risk of cost and effort to a smaller timebox.",
    references: "Scrum Guide 2020 - The Sprint"
  },
  {
    domain: "Value Maximization",
    type: "true_false",
    text: "True or False: Customer satisfaction can only be evaluated after a product has been in the market for at least 12 months.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Continuous inspection of customer feedback and usage telemetry should begin as early as the first usable increment is released.",
    references: "EBM Guide - Current Value"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "What role do acceptance criteria play on a Product Backlog item?",
    options: [
      "They provide unambiguous boundaries and tests that must pass for the item to be considered complete from a business perspective",
      "They replace the Definition of Done completely",
      "They are optional suggestions that developers may ignore",
      "They serve as legal disclaimers against customer lawsuits"
    ],
    correctAnswers: [0],
    explanation: "Acceptance criteria define the specific conditions of satisfaction for an individual backlog item, complementing the global Definition of Done.",
    references: "Professional Scrum Product Owner - Acceptance Criteria"
  },
  {
    domain: "Scrum Accountabilities",
    type: "multiple",
    text: "Which of the following Scrum artifacts have an associated formal commitment? (Select three)",
    options: [
      "Product Backlog (Commitment: Product Goal)",
      "Sprint Backlog (Commitment: Sprint Goal)",
      "Increment (Commitment: Definition of Done)",
      "Sprint Review (Commitment: Stakeholder Signoff)",
      "Burndown Chart (Commitment: Zero Variance)"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "The 2020 Scrum Guide defines three artifacts, each with a single formal commitment: Product Backlog -> Product Goal; Sprint Backlog -> Sprint Goal; Increment -> Definition of Done.",
    references: "Scrum Guide 2020 - Artifact Commitments"
  },
  {
    domain: "Scrum Events",
    type: "true_false",
    text: "True or False: The Scrum Master decides who is allowed to speak during the Sprint Review.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. The Sprint Review is a collaborative working session where all attendees (Scrum Team and stakeholders) freely interact and inspect the increment together.",
    references: "Scrum Guide 2020 - Sprint Review"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "When tracking total work remaining across the Product Backlog, who is accountable for this transparency?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The Developers",
      "The Chief Financial Officer"
    ],
    correctAnswers: [1],
    explanation: "The Product Owner tracks total work remaining at least every Sprint Review to assess progress toward the Product Goal and communicate forecasts transparently.",
    references: "Scrum Guide 2020 - Tracking Progress toward Goals"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "What is Time to Market (T2M) in Evidence-Based Management?",
    options: [
      "The time it takes to write a functional specification document",
      "The organization's ability to quickly deliver new capabilities, services, or products to customers",
      "The total flight time of the executive sales team",
      "The time developers spend commuting to the office"
    ],
    correctAnswers: [1],
    explanation: "Time to Market (T2M) measures the organization's ability to quickly deliver new capabilities, services, or products to customers, encompassing build time, release cycle time, and deployment frequency.",
    references: "EBM Guide - Time to Market (T2M)"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: If the Developers encounter a severe technical obstacle that puts the Sprint Goal at risk, they should keep it confidential until the Sprint Retrospective.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Under the Scrum pillar of Transparency, impediments and risks should be raised immediately (including at the Daily Scrum) so the team can adapt without delay.",
    references: "Scrum Guide 2020 - Transparency & Daily Scrum"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "Who has the final say on the ordering of items in the Product Backlog when two powerful VPs disagree on priorities?",
    options: [
      "The VP with the higher executive title",
      "The Product Owner alone",
      "The Scrum Master using a coin toss",
      "The Developers who will write the code"
    ],
    correctAnswers: [1],
    explanation: "The Product Owner alone has final authority on Product Backlog ordering. The entire organization, including VPs, must respect their decisions.",
    references: "Scrum Guide 2020 - The Product Owner"
  },
  {
    domain: "Value Maximization",
    type: "multiple",
    text: "Which of the following are examples of Unrealized Value (UV)? (Select two)",
    options: [
      "An unserved customer demographic representing \$25M in potential addressable market",
      "Customer satisfaction gap where 40% of users report their primary workflow takes too long",
      "Current monthly recurring revenue generated from active enterprise subscriptions",
      "The number of Git pull requests merged this week",
      "The hourly billing rate of software contractors"
    ],
    correctAnswers: [0, 1],
    explanation: "Unrealized Value looks at future opportunity spaces: addressable market gaps and unsatisfied user needs that could yield value if solved.",
    references: "EBM Guide - Unrealized Value"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "What happens immediately after a Sprint ends?",
    options: [
      "A 2-week hardening and release sprint begins",
      "A new Sprint starts immediately",
      "The team takes a mandatory 3-day holiday",
      "Developers work on personal side projects until the Product Owner writes new stories"
    ],
    correctAnswers: [1],
    explanation: "A new Sprint starts immediately after the conclusion of the previous Sprint.",
    references: "Scrum Guide 2020 - The Sprint"
  },
  {
    domain: "Product & Sprint Goals",
    type: "true_false",
    text: "True or False: A Product Goal can span multiple Sprints and months.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. The Product Goal is the long-term objective for the Scrum Team and typically spans multiple Sprints.",
    references: "Scrum Guide 2020 - Product Goal"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "Which Scrum value is reflected when a Product Owner transparently shares that a key hypothesis failed in production?",
    options: [
      "Openness",
      "Greed",
      "Concealment",
      "Pessimism"
    ],
    correctAnswers: [0],
    explanation: "The Scrum values are Commitment, Focus, Openness, Respect, and Courage. Openness means being transparent about all work, successes, and failures.",
    references: "Scrum Guide 2020 - Scrum Values"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: The Scrum Master can manage the Product Backlog on behalf of the Product Owner without the Product Owner's knowledge.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. The Product Owner is solely accountable for the Product Backlog. No one alters it without the Product Owner's authority.",
    references: "Scrum Guide 2020 - Product Owner"
  },
  {
    domain: "Definition of Done & Increment",
    type: "single",
    text: "Can a Product Owner deploy an Increment to production in the middle of a Sprint?",
    options: [
      "No, Scrum prohibits deploying anything until the Sprint Review is concluded",
      "Yes, an Increment can be released to production at any time during the Sprint as soon as it meets the Definition of Done",
      "Only if the Scrum Master files an emergency deployment waiver",
      "Only on the first Tuesday of the month"
    ],
    correctAnswers: [1],
    explanation: "The Scrum Guide states: 'The Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing value.'",
    references: "Scrum Guide 2020 - Increment Release"
  },
  {
    domain: "Value Maximization",
    type: "multiple",
    text: "Which of the following are benefits of short Sprint cycles (e.g., 1 or 2 weeks) for a Product Owner? (Select two)",
    options: [
      "Faster empirical feedback loops from real customers",
      "Lower financial and technical risk per timebox",
      "Guarantees that developers will work twice as many hours",
      "Eliminates the need for a Definition of Done",
      "Allows the Product Owner to skip Sprint Planning"
    ],
    correctAnswers: [0, 1],
    explanation: "Shorter Sprints generate faster feedback, limit financial risk to the duration of the timebox, and accelerate learning.",
    references: "Scrum Guide 2020 - The Sprint"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "A Product Owner notices that 40% of features built last year are never used by customers. What should the Product Owner conclude?",
    options: [
      "The engineering team typed the code too slowly",
      "The organization was focusing on output rather than validated outcomes, wasting capacity on unvalidated assumptions",
      "Customers are not intelligent enough to understand the product",
      "The Scrum Master did not facilitate Daily Scrums effectively"
    ],
    correctAnswers: [1],
    explanation: "Building unused features is a classic indicator of the 'feature factory' anti-pattern, where success is measured by output rather than validated customer outcomes.",
    references: "Professional Scrum Product Owner - Value vs Waste"
  },
  {
    domain: "Scrum Events",
    type: "true_false",
    text: "True or False: The Product Owner must wait until the Sprint Planning meeting to talk to Developers about upcoming backlog ideas.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Backlog refinement is an ongoing collaboration that happens throughout the Sprint between the Product Owner and Developers.",
    references: "Scrum Guide 2020 - Product Backlog Refinement"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Who has the authority to tell Developers to work from a different requirement management system instead of the Product Backlog?",
    options: [
      "The Head of Engineering",
      "No one; all work undertaken by the Developers must originate from or support the Product Backlog and Sprint Goal",
      "The Project Management Office",
      "The Lead QA Architect"
    ],
    correctAnswers: [1],
    explanation: "The Product Backlog is the single source of work for the Scrum Team. No one tells Developers to work from a separate hidden backlog.",
    references: "Scrum Guide 2020 - Product Backlog"
  },
  {
    domain: "Definition of Done & Increment",
    type: "true_false",
    text: "True or False: 'Done' work must be integrated and tested with the work of all other teams on the same product.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. In multi-team environments, the Increment must be integrated across all teams to ensure it is in a usable state meeting the shared Definition of Done.",
    references: "Scrum Guide 2020 - Multiple Scrum Teams & Definition of Done"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "What is the primary benefit of creating a Minimum Viable Product (MVP)?",
    options: [
      "To ship an incomplete, broken version of the product to save money",
      "To maximize validated learning about customers with the least effort",
      "To satisfy executive deadlines with unverified code",
      "To avoid writing tests"
    ],
    correctAnswers: [1],
    explanation: "Eric Ries defined an MVP as that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.",
    references: "Lean Startup & Professional Scrum Product Owner"
  },
  {
    domain: "Product & Sprint Goals",
    type: "single",
    text: "What should the Scrum Team do if the Sprint Goal cannot be met before the end of the Sprint timebox?",
    options: [
      "Extend the Sprint duration until the goal is achieved",
      "Inspect what happened, learn from it at the Sprint Review and Retrospective, and do not extend the timebox",
      "Change the Sprint Goal retroactively to match whatever code was finished",
      "Penalize the Developers' annual performance bonus"
    ],
    correctAnswers: [1],
    explanation: "Sprints are fixed timeboxes. If the goal is not met, the team inspects the outcome and adapts in the next Sprint without altering the timebox.",
    references: "Scrum Guide 2020 - The Sprint & Empiricism"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: The Product Owner must have a technical computer science degree to be effective.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. While technical domain knowledge is helpful, the Product Owner's primary accountabilities center on business strategy, market value, customer needs, and prioritization.",
    references: "Professional Scrum Product Owner - PO Competencies"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "Which of the following best describes the Product Owner's stance as a 'Visionary'?",
    options: [
      "Someone who dictates every detail of UI layout to developers",
      "Someone who clearly articulates the product vision, customer mission, and strategic destination to inspire and align the team",
      "Someone who only relays stakeholder requests without filtering",
      "Someone who manages Microsoft Project Gantt charts"
    ],
    correctAnswers: [1],
    explanation: "As a Visionary, the Product Owner communicates a compelling vision and strategic intent, empowering Developers to design the best technical solutions.",
    references: "Scrum.org - The 8 Stances of a Product Owner"
  },
  {
    domain: "Scrum Events",
    type: "multiple",
    text: "Who are the key participants at the Sprint Review? (Select two)",
    options: [
      "The Scrum Team (Product Owner, Developers, Scrum Master)",
      "Key stakeholders invited by the Product Owner to inspect the Increment",
      "Competitor intelligence agents",
      "External recruiters",
      "Labor union delegates"
    ],
    correctAnswers: [0, 1],
    explanation: "The Sprint Review is attended by the Scrum Team and key stakeholders invited by the Product Owner who have an interest in the product's progress.",
    references: "Scrum Guide 2020 - Sprint Review"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "What is an 'Enabler' or 'Spike' in Agile backlog management?",
    options: [
      "A bug that developers refuse to fix",
      "A research or architectural investigation activity undertaken to reduce technical uncertainty or explore options",
      "A punishment assigned to low-performing developers",
      "A feature that is guaranteed to generate immediate revenue"
    ],
    correctAnswers: [1],
    explanation: "A Spike or Enabler is a timeboxed exploration or research item designed to answer a technical question or de-risk a requirement before building it.",
    references: "Scaled Agile & Agile Alliance - Spikes"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: A Product Owner can cancel a Sprint if the competitor launches an identical product that renders the Sprint Goal commercially obsolete.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. A Sprint is cancelled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to make this decision.",
    references: "Scrum Guide 2020 - Sprint Cancellation"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "When using probabilistic forecasting (e.g., Monte Carlo simulations), what does a forecast of '85% confidence by November 15th' mean?",
    options: [
      "There is an 85% probability based on historical throughput data that the target scope will be finished on or before November 15th",
      "Developers will work 85% of their hours on that feature",
      "85% of the features are finished today",
      "The Product Owner will receive an 85% bonus on that date"
    ],
    correctAnswers: [0],
    explanation: "Probabilistic forecasting runs thousands of simulations of historical throughput to express forecasts as confidence intervals (e.g. 85% confidence by date X).",
    references: "Actionable Agile Metrics - Daniel Vacanti"
  },
  {
    domain: "Value Maximization",
    type: "true_false",
    text: "True or False: A high velocity in story points automatically guarantees high business value delivered.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Velocity only measures the speed of output. If a team builds features that customers do not use or want, they are merely producing waste quickly.",
    references: "Professional Scrum Product Owner - Velocity vs Value"
  },
  {
    domain: "Definition of Done & Increment",
    type: "single",
    text: "What should the Scrum Team do if an organizational standard demands that all code pass automated accessibility (WCAG AA) compliance?",
    options: [
      "Ignore it because Scrum Teams are autonomous",
      "Incorporate WCAG AA compliance directly into the team's Definition of Done",
      "Create a separate accessibility sprint once a year",
      "Ask users with disabilities not to visit the site"
    ],
    correctAnswers: [1],
    explanation: "Organizational quality standards must be inherited by the Scrum Team and embedded into the Definition of Done.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Scrum Accountabilities",
    type: "multiple",
    text: "Which of the following are anti-patterns for a Product Owner? (Select two)",
    options: [
      "The 'Clerk' or 'Order Taker' who blindly accepts every request from every stakeholder without prioritization",
      "The 'Scribe' who only translates developer notes into Jira without understanding commercial strategy",
      "The 'Visionary' who communicates clear customer goals and strategic metrics",
      "The 'Collaborator' who refines backlog items jointly with Developers",
      "The 'Experimenter' who tests hypotheses using small releases"
    ],
    correctAnswers: [0, 1],
    explanation: "The Clerk and the Scribe are well-documented PO anti-patterns where the individual lacks empowerment, strategic vision, or the ability to say 'no'.",
    references: "Scrum.org - Product Owner Stances and Anti-Patterns"
  },
  {
    domain: "Product Backlog Management",
    type: "true_false",
    text: "True or False: The Product Owner can change the contents and order of the Product Backlog at any time based on new learning.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. The Product Backlog is a living artifact that the Product Owner continuously updates, refines, and re-orders as new information emerges.",
    references: "Scrum Guide 2020 - Product Backlog"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "How does the Product Owner know that the Sprint Review was successful?",
    options: [
      "The meeting ended 15 minutes early and no one asked questions",
      "Stakeholders and the Scrum Team actively collaborated, inspected the Increment, and adapted the Product Backlog with actionable feedback",
      "The CEO signed off on an executive acceptance sheet",
      "The team presented 60 PowerPoint slides without interruption"
    ],
    correctAnswers: [1],
    explanation: "Success in the Sprint Review is measured by collaborative inspection and adaptation: stakeholders share feedback and the Product Backlog is adapted accordingly.",
    references: "Scrum Guide 2020 - Sprint Review"
  },
  {
    domain: "Product & Sprint Goals",
    type: "single",
    text: "What is the relationship between the Product Goal and the Product Vision?",
    options: [
      "They are identical and must never change",
      "The Product Vision is the overarching long-term purpose, while the Product Goal is a concrete intermediate target on the journey toward that vision",
      "The Product Goal is created by the Scrum Master, while the Vision is created by Marketing",
      "Scrum does not recognize product vision"
    ],
    correctAnswers: [1],
    explanation: "The Product Vision provides the inspiring long-term north star, while the Product Goal provides a measurable milestone in the Product Backlog toward that vision.",
    references: "Professional Scrum Product Owner - Vision to Goal"
  },
  {
    domain: "Value Maximization",
    type: "true_false",
    text: "True or False: Evidence-Based Management encourages organizations to base investment decisions on real evidence and measured outcomes rather than gut feeling.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. EBM uses empirical data (Current Value, Unrealized Value, Time to Market, Ability to Innovate) to guide strategic investment decisions.",
    references: "EBM Guide - Empiricism"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Who has the accountability to ensure that the Product Backlog is transparent, visible, and understood by everyone?",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Lead Quality Analyst",
      "The Database Administrator"
    ],
    correctAnswers: [0],
    explanation: "The Scrum Guide explicitly states the Product Owner is accountable for ensuring that the Product Backlog is transparent, visible and understood.",
    references: "Scrum Guide 2020 - Product Owner Accountabilities"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "multiple",
    text: "Which of the following release strategies help a Product Owner reduce deployment risk? (Select two)",
    options: [
      "Canary releases, routing 5% of traffic to the new increment to observe error rates",
      "Feature flags, allowing capabilities to be turned on or off in production without redeploying code",
      "Deploying massive 12-month code batches on Friday evening at midnight",
      "Disabling automated alerts to avoid panic during releases",
      "Refusing to release until the competitors release first"
    ],
    correctAnswers: [0, 1],
    explanation: "Canary releasing and feature flags (toggles) decouple deployment from release, enabling controlled rollouts and rapid rollbacks to minimize risk.",
    references: "Continuous Delivery & Professional Scrum Product Owner"
  },
  {
    domain: "Definition of Done & Increment",
    type: "true_false",
    text: "True or False: If a Scrum Team decides to strengthen their Definition of Done by adding automated performance testing, this will likely cause a temporary drop in their measured velocity.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. Strengthening the Definition of Done increases the work required for an item to be 'Done', which naturally reduces the number of items completed per sprint while raising true quality.",
    references: "Professional Scrum Product Owner - Definition of Done Impact"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "Which stance is a Product Owner taking when they run A/B split tests, conduct user interviews, and test prototypes to validate demand before investing in full architecture?",
    options: [
      "The Experimenter",
      "The Escapist",
      "The Bureaucrat",
      "The Dictator"
    ],
    correctAnswers: [0],
    explanation: "The Experimenter stance uses hypotheses, prototypes, and empirical tests to discover customer needs and validate assumptions.",
    references: "Scrum.org - The 8 Stances of a Product Owner"
  },
  {
    domain: "Product Backlog Management",
    type: "true_false",
    text: "True or False: A Product Owner should delete all rejected stakeholder requests from the issue tracking tool immediately with zero record.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Transparently documenting reasons for rejecting or deprioritizing items helps maintain trust, builds institutional knowledge, and prevents duplicate submissions.",
    references: "Professional Scrum Product Owner - Transparency in Saying No"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "At the end of a Sprint, 3 user stories are 90% completed and only need 2 hours of QA testing. How should the Product Owner handle these in terms of the Increment?",
    options: [
      "Include them in the Increment because 90% is almost finished",
      "Do NOT include them in the Increment; they do not meet the Definition of Done and return to the Product Backlog with 0 points credited",
      "Award 90% of the story points in velocity",
      "Extend the Sprint by 2 hours"
    ],
    correctAnswers: [1],
    explanation: "In Scrum, there is no partial credit. An item is either 100% Done according to the Definition of Done or it is not Done. It cannot be presented or released.",
    references: "Scrum Guide 2020 - Increment"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Can a Product Owner also be a Developer on the same Scrum Team?",
    options: [
      "Yes, if the person is actively doing the work of creating an Increment, but this can create conflicts of interest regarding capacity",
      "No, the Scrum Guide strictly bans anyone from ever holding two accountabilities",
      "Only if they have permission from the Scrum Master in writing",
      "Only in companies with fewer than 5 employees"
    ],
    correctAnswers: [0],
    explanation: "A person may act as both Product Owner and Developer, but Scrum practitioners advise caution because it can cause role tension between commercial value decisions and technical implementation.",
    references: "Scrum Guide 2020 - Scrum Team"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "What does Customer Satisfaction Score (CSAT) evaluate in Evidence-Based Management?",
    options: [
      "Current Value (CV)",
      "Unrealized Value (UV)",
      "Time to Market (T2M)",
      "Ability to Innovate (A2I)"
    ],
    correctAnswers: [0],
    explanation: "CSAT measures the satisfaction of current active users with the existing capabilities of the product, which is a core metric of Current Value (CV).",
    references: "EBM Guide - Current Value (CV)"
  },
  {
    domain: "Scrum Events",
    type: "true_false",
    text: "True or False: The Sprint Retrospective provides a formal opportunity for the Scrum Team to inspect its processes, relationships, tools, and Definition of Done.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness by inspecting how the last Sprint went with regards to individuals, interactions, processes, and tools.",
    references: "Scrum Guide 2020 - Sprint Retrospective"
  },
  {
    domain: "Product Backlog Management",
    type: "single",
    text: "How much time should a Product Owner and Developers spend on Product Backlog refinement?",
    options: [
      "Exactly 10% of team capacity mandated by Scrum rules",
      "As much time as needed by the team to gain shared understanding and prepare items for upcoming Sprints",
      "Zero time; refinement should only occur during Sprint Planning",
      "Refinement is done exclusively on weekends"
    ],
    correctAnswers: [1],
    explanation: "The Scrum Guide does not mandate a fixed percentage for refinement. The Scrum Team decides how and when refinement is done based on their needs.",
    references: "Scrum Guide 2020 - Product Backlog Refinement"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "true_false",
    text: "True or False: Using story points guarantees that a team will deliver software on time with zero defects.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Story points are relative estimates of size and complexity, not guarantees of time or defect-free software.",
    references: "Professional Scrum Product Owner - Estimation Myths"
  },
  {
    domain: "Value Maximization",
    type: "multiple",
    text: "Which of the following indicate that a Product Owner is effectively maximizing value? (Select two)",
    options: [
      "The product's key outcome metrics (retention, conversion, revenue, customer satisfaction) are improving over successive releases",
      "The team ruthlessly removes or declines low-impact feature requests to focus on critical customer problems",
      "The team has the highest story point velocity in the company regardless of customer adoption",
      "The Product Owner has a 500-page PRD document finalized before development starts",
      "Every stakeholder has 100% of their requests built"
    ],
    correctAnswers: [0, 1],
    explanation: "Maximizing value is proven by improving customer outcomes and business metrics, and by eliminating waste through disciplined prioritization.",
    references: "Professional Scrum Product Owner - Maximizing Value"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "Who has the authority to declare that an Increment is 'Good enough to ship' even if it fails two automated security tests specified in the Definition of Done?",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Lead Developer",
      "No one; an item that does not meet the Definition of Done cannot be released"
    ],
    correctAnswers: [3],
    explanation: "The Scrum Guide is uncompromising: if an item does not meet the Definition of Done, it cannot be released. Quality standards cannot be bypassed for convenience.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Product & Sprint Goals",
    type: "true_false",
    text: "True or False: The Sprint Backlog includes the Sprint Goal, the set of Product Backlog items selected for the Sprint, and an actionable plan for delivering the Increment.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), and an actionable plan for delivering the Increment (how).",
    references: "Scrum Guide 2020 - Sprint Backlog"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "What does 'Defect Removal Efficiency' measure in Evidence-Based Management?",
    options: [
      "Ability to Innovate (A2I)",
      "Unrealized Value (UV)",
      "Sales commission rate",
      "Customer lifetime value"
    ],
    correctAnswers: [0],
    explanation: "Defect metrics and technical quality measure Ability to Innovate (A2I). Poor defect prevention wastes developer capacity on remediation instead of innovation.",
    references: "EBM Guide - Ability to Innovate (A2I)"
  },
  {
    domain: "Scrum Events",
    type: "single",
    text: "What should the Scrum Master do if the Product Owner refuses to participate in backlog refinement?",
    options: [
      "Coach the Product Owner on the value of refinement and facilitate collaboration with Developers to ensure backlog transparency",
      "Take over the Product Owner role and fire the Product Owner",
      "Order the Developers to stop coming to work",
      "Write all the user stories in secret"
    ],
    correctAnswers: [0],
    explanation: "The Scrum Master serves the Product Owner by coaching them on effective Product Backlog management techniques and helping the team collaborate effectively.",
    references: "Scrum Guide 2020 - Scrum Master Service"
  },
  {
    domain: "Product Backlog Management",
    type: "true_false",
    text: "True or False: Product Backlog items should be discarded after they are completed and deployed.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Retaining historical records of completed work, release notes, and empirical customer performance provides valuable context for future product decisions.",
    references: "Professional Scrum Product Owner - Product Artifacts"
  },
  {
    domain: "Forecasting & Release Planning",
    type: "single",
    text: "Why is it important for a Product Owner to communicate release dates as confidence intervals (e.g. 'between March 15 and April 1') rather than single dates?",
    options: [
      "Because software development in complex environments carries inherent uncertainty and single-point estimates create false precision",
      "Because developers are inherently untrustworthy",
      "Because stakeholders do not care about dates",
      "Because Agile forbids setting any expectations"
    ],
    correctAnswers: [0],
    explanation: "Complex adaptive systems possess uncertainty. Expressing forecasts as ranges or confidence intervals communicates reality honestly and avoids the traps of false precision.",
    references: "Professional Scrum Product Owner - Communicating Forecasts"
  },
  {
    domain: "Value Maximization",
    type: "multiple",
    text: "Which of the following actions directly increase the Current Value (CV) of a product? (Select two)",
    options: [
      "Resolving a persistent user experience flaw that was causing 20% of users to abandon shopping carts",
      "Adding a high-demand workflow capability that unlocks an immediate \$300k expansion contract from existing clients",
      "Refactoring backend code that has zero performance impact and zero customer visibility",
      "Renaming Jira ticket issue types from 'Story' to 'Requirement'",
      "Increasing the number of meetings attended by the Product Owner"
    ],
    correctAnswers: [0, 1],
    explanation: "Current Value (CV) is directly boosted by improving the experience and commercial value delivered to current users and clients.",
    references: "EBM Guide - Current Value"
  },
  {
    domain: "Scrum Accountabilities",
    type: "true_false",
    text: "True or False: If a developer leaves the team during the Sprint, the Product Owner should automatically reduce the quality standards in the Definition of Done.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Quality standards in the Definition of Done must never be compromised. The team negotiates scope with the Product Owner, keeping quality inviolate.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Product & Sprint Goals",
    type: "single",
    text: "A Scrum Team completes all items in their Sprint Backlog 3 days before the Sprint ends. What should the Developers do?",
    options: [
      "Go home for the rest of the week",
      "Collaborate with the Product Owner to select the next most valuable item from the Product Backlog, or work on technical improvements aligned with the Definition of Done",
      "Change the Sprint timebox to end immediately",
      "Assign story points to themselves for leisure time"
    ],
    correctAnswers: [1],
    explanation: "Developers consult with the Product Owner to pull the next valuable item, refine upcoming work, or invest in technical enablers and testing.",
    references: "Scrum Guide 2020 - Sprint Execution"
  },
  {
    domain: "Value Maximization",
    type: "single",
    text: "What does 'Pivot or Persevere' mean to a Product Owner practicing empirical product management?",
    options: [
      "Deciding based on measured evidence whether to continue with the current strategic direction (persevere) or adapt the strategy (pivot)",
      "Switching between Scrum and Waterfall every two months",
      "Flipping a coin when stakeholders disagree",
      "Changing the team's programming language every sprint"
    ],
    correctAnswers: [0],
    explanation: "Eric Ries' Lean concept of pivot or persevere means using empirical data from customer experiments to decide whether to double down or change direction.",
    references: "The Lean Startup & Professional Scrum Product Owner"
  },
  {
    domain: "Definition of Done & Increment",
    type: "true_false",
    text: "True or False: Security testing, regression testing, and deployment to a staging environment can be deferred to a 'Hardening Sprint' every six months.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. 'Hardening Sprints' are an anti-pattern in Scrum. All testing, integration, and security required to make an Increment usable and releasable must occur within every Sprint.",
    references: "Scrum.org - Hardening Sprint Anti-Pattern"
  },
  {
    domain: "Scrum Accountabilities",
    type: "single",
    text: "What should a Product Owner do if multiple stakeholders give contradictory priorities for the upcoming quarter?",
    options: [
      "Build both sets of features in parallel regardless of focus",
      "Bring the stakeholders together, transparently share the strategic Product Goal and constraints, and make the final ordering decision as the sole accountable Product Owner",
      "Resign from the role to avoid conflict",
      "Let the engineering leads decide by popularity vote"
    ],
    correctAnswers: [1],
    explanation: "The Product Owner facilitates alignment around the Product Goal and makes the final decision. The organization must respect the Product Owner's authority.",
    references: "Scrum Guide 2020 - Product Owner"
  }
];

const { buildBalancedExamQuestions } = require('./examUtils');

// Helper to generate 5 full mock exams of exactly 80 questions each
function generatePspo1Exams(examCount = 5, questionsPerExam = 80) {
  const exams = [];

  for (let e = 1; e <= examCount; e++) {
    const examQuestions = buildBalancedExamQuestions(pspo1Pool, questionsPerExam, e, 'pspo1');

    exams.push({
      id: `pspo1-mock-${e}`,
      title: `PSPO I - Practice Exam ${e} (Exact Official 80-Question Scrum.org Simulation)`,
      examNumber: e,
      durationMinutes: 60,
      passingScore: 85,
      questions: examQuestions
    });
  }

  return exams;
}

module.exports = {
  pspo1Pool,
  generatePspo1Exams
};
