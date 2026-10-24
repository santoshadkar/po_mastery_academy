// Comprehensive Scenario Question Pool Builder for PSPO II (Scrum.org Replica)
// Format: 40 Scenario-based Questions per Mock Exam, 60 Minutes Timebox, 85% Passing Score

const pspo2Pool = [
  // --- EBM & VALUE GOVERNANCE ---
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "Your SaaS company holds 65% market share and has an NPS score of +60. However, customer support ticket volume has surged by 140%, and engineers spend 80% of their sprint time hotfixing regression bugs and managing technical debt. According to the EBM framework, which Key Value Area (KVA) requires immediate prioritization?",
    options: [
      "Current Value (CV)",
      "Unrealized Value (UV)",
      "Ability to Innovate (A2I)",
      "Time to Market (T2M)"
    ],
    correctAnswers: [2],
    explanation: "Ability to Innovate (A2I) reflects the organization's capacity to deliver new value. High defect density, legacy maintenance overhead, and technical debt cripple A2I, leaving the organization unable to respond to future market shifts.",
    references: "EBM Guide - Ability to Innovate (A2I)"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "Which of the following metrics serves as an authentic Key Value Metric (KVM) for Unrealized Value (UV)?",
    options: [
      "Customer satisfaction score (CSAT) among current paying customers",
      "Market share gap and customer desired satisfaction gap",
      "Release deployment frequency to staging",
      "Defect removal efficiency in sprint testing"
    ],
    correctAnswers: [1],
    explanation: "Unrealized Value measures potential future value that could be realized if the product met all unmet market needs. Market share gap and satisfaction gap directly quantify this opportunity space.",
    references: "EBM Guide - Unrealized Value (UV)"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "A Product Owner notices that lead time from initial idea hypothesis to production deployment is 4 months, while competitors release updates bi-weekly. Which EBM Key Value Area is severely lagging?",
    options: [
      "Time to Market (T2M)",
      "Current Value (CV)",
      "Return on Assets (ROA)",
      "Product-Market Fit"
    ],
    correctAnswers: [0],
    explanation: "Time to Market (T2M) measures the organization's ability to quickly deliver new capabilities, services, or products to customers. Long cycle and lead times directly indicate poor T2M.",
    references: "EBM Guide - Time to Market (T2M)"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "How does EBM recommend organizations structure their strategic goals and investments?",
    options: [
      "Commit to a rigid 3-year master plan with fixed annual budget milestones",
      "Define ambitious Strategic Goals, establish intermediate milestone goals, formulate hypotheses, run small experiment loops, and inspect measured outcomes",
      "Fund whoever brings the highest projected ROI spreadsheet with zero milestones",
      "Tie executive bonuses strictly to lines of code shipped"
    ],
    correctAnswers: [1],
    explanation: "EBM uses an empirical experimentation loop: Strategic Goal -> Intermediate Goal -> Immediate Tactical Goal -> Experiment -> Inspect & Adapt.",
    references: "EBM Guide - Experimentation Loop"
  },

  // --- STAKEHOLDER MANAGEMENT & NEGOTIATION ---
  {
    domain: "Stakeholder Management & Negotiation",
    type: "single",
    text: "A tier-1 enterprise client threatening to withhold \$1.2M in annual recurring revenue demands that a custom bespoke workflow be built in the current active Sprint. This custom request does not align with your Product Goal and is useless to all other customers. What should the Product Owner do?",
    options: [
      "Order Developers to pause the Sprint Goal immediately and build the custom feature in panic",
      "Refuse the client outright without explanation and tell them to read the Scrum Guide",
      "Engage the client with empathy, explore their underlying business problem, transparently explain that the active Sprint cannot be disrupted, and investigate if a generalizable solution aligns with the Product Goal in upcoming Sprints",
      "Resign as Product Owner to avoid executive reprimand"
    ],
    correctAnswers: [2],
    explanation: "A professional Product Owner protects the active Sprint and Product Goal while understanding stakeholder needs empathetically, seeking generalizable outcomes rather than bespoke divergence.",
    references: "Professional Scrum Product Owner II - Stakeholder Dilemmas"
  },
  {
    domain: "Stakeholder Management & Negotiation",
    type: "single",
    text: "The VP of Marketing insists that the Product Owner commit to launching 15 specific features at an upcoming industry trade show in 6 months. What is the most empirical response?",
    options: [
      "Agree immediately and ask Developers to commit to mandatory weekend shifts",
      "Explain the Cone of Uncertainty; collaborate with the VP to define a core theme/outcome for the trade show, and use historical throughput data to forecast a probabilistic range of what is realistic",
      "Tell the VP that Scrum forbids setting any external release dates under any circumstances",
      "Secretly remove all unit testing from the Definition of Done to squeeze in all 15 features"
    ],
    correctAnswers: [1],
    explanation: "Empirical Product Owners frame deadlines around outcomes rather than fixed scope, using historical velocity/throughput to provide realistic confidence intervals.",
    references: "PSPO II - Strategic Forecasting"
  },
  {
    domain: "Stakeholder Management & Negotiation",
    type: "multiple",
    text: "Which TWO strategies are recommended when managing powerful, conflicting executive stakeholders who demand competing priorities? (Select two)",
    options: [
      "Anchor all prioritization discussions to the transparent Product Goal and objective customer outcome metrics",
      "Promise both stakeholders that their respective features will be delivered first",
      "Facilitate a collaborative trade-off session using Buy a Feature or Cost of Delay ranking",
      "Privately build the feature for the executive who shouts loudest",
      "Delegate the backlog ordering decision to junior developers"
    ],
    correctAnswers: [0, 2],
    explanation: "Effective Product Owners use objective data, transparent Product Goals, and collaborative economic frameworks (like Cost of Delay or Buy a Feature) to align executive stakeholders.",
    references: "Professional Scrum Product Owner II - Conflict Resolution"
  },

  // --- COMPLEX SCALING & MULTI-TEAM DEPENDENCIES ---
  {
    domain: "Scaling & Multi-Team Alignment",
    type: "single",
    text: "Your organization has scaled to 6 Scrum Teams working on a single banking app. Each team has created its own Product Backlog and its own Product Owner. As a result, cross-team dependencies cause frequent release rollbacks and contradictory features. How should this be rectified according to Nexus and Scrum principles?",
    options: [
      "Assign one Project Manager above the teams to manage a master Gantt chart",
      "Consolidate backlogs into ONE single Product Backlog, with ONE Product Goal and ONE single accountable Product Owner, supported by the Scrum Teams in refinement",
      "Split the banking app into 6 separate apps and sell them separately",
      "Add a 4-week hardening sprint between every single sprint"
    ],
    correctAnswers: [1],
    explanation: "According to Scrum and Nexus, one product has ONE Product Backlog and ONE Product Owner, regardless of how many teams are building it.",
    references: "Nexus Guide & Large-Scale Scrum - Single Product Backlog"
  },
  {
    domain: "Scaling & Multi-Team Alignment",
    type: "single",
    text: "In a Nexus multi-team framework, what is the primary accountability of the Nexus Integration Team (NIT)?",
    options: [
      "To write all user stories on behalf of the teams",
      "To be accountable for ensuring that an integrated Increment is produced at least every Sprint",
      "To replace the Product Owner in deciding commercial priorities",
      "To assign daily tasks to developers across the teams"
    ],
    correctAnswers: [1],
    explanation: "The Nexus Integration Team is accountable for ensuring that an integrated Increment of the whole product is produced at least every Sprint.",
    references: "Nexus Guide - Nexus Integration Team"
  },
  {
    domain: "Scaling & Multi-Team Alignment",
    type: "single",
    text: "A Product Owner notices that 4 component teams (UI team, API team, DB team, Mobile team) have massive handoff bottlenecks and waiting queues. What organizational evolution should the PO champion?",
    options: [
      "Double the number of Project Managers managing handoffs",
      "Transition toward cross-functional feature teams, where each team possesses all skills needed to deliver end-to-end customer value vertically",
      "Create a 5th component team exclusively for testing handoffs",
      "Force developers to write 100-page specification handoff binders"
    ],
    correctAnswers: [1],
    explanation: "Component teams generate handoffs, queues, and delay. Cross-functional feature teams slice vertically through the architecture, minimizing dependencies and optimizing flow.",
    references: "LeSS & Nexus - Feature Teams vs Component Teams"
  },

  // --- TECHNICAL DEBT & QUALITY COMPROMISES ---
  {
    domain: "Technical Debt & Quality Governance",
    type: "single",
    text: "Engineering leads present data showing that automated test coverage has degraded from 85% to 40%, and regression defect discovery in production has tripled over the last 6 months. Business executives demand that 100% of team capacity remain dedicated to new marketing features. What should the Product Owner do?",
    options: [
      "Comply with business executives because features are the only source of revenue",
      "Stand firm on sustainable product stewardship: allocate 15-20% of capacity to pay down critical technical debt and expand the Definition of Done to halt quality erosion",
      "Secretly tell developers to stop writing any automated tests permanently",
      "Fire the QA leads for reporting bad news"
    ],
    correctAnswers: [1],
    explanation: "Ignoring technical debt compromises the product's long-term viability and Ability to Innovate. The PO must protect quality and invest capacity in technical health.",
    references: "Professional Scrum Product Owner II - Sustainable Delivery"
  },
  {
    domain: "Technical Debt & Quality Governance",
    type: "single",
    text: "A development team requests a 'Refactoring Sprint' with zero business features to fix architectural rot. How should an advanced Product Owner respond?",
    options: [
      "Approve the Refactoring Sprint as standard industry practice",
      "Reject the concept of a dedicated Refactoring Sprint; instead, collaborate with Developers to make technical improvements transparent in the Product Backlog and weave them continuously into every Sprint",
      "Cancel the project because developers admitted the architecture is flawed",
      "Prohibit all refactoring forever"
    ],
    correctAnswers: [1],
    explanation: "Dedicated 'clean-up' or 'refactoring' sprints are anti-patterns that create delivery droughts. Continuous refactoring must be part of regular sprint work and the Definition of Done.",
    references: "Scrum.org - Refactoring Sprint Anti-Pattern"
  },
  {
    domain: "Technical Debt & Quality Governance",
    type: "multiple",
    text: "What are the compounding consequences of accumulating severe technical debt in a core commercial product? (Select two)",
    options: [
      "Time to Market (T2M) increases as every new feature requires weeks of regression bug fixing",
      "Ability to Innovate (A2I) plummets because developers spend the majority of their time on maintenance",
      "Story point velocity increases exponentially forever",
      "The product automatically becomes open source",
      "Customer satisfaction score immediately reaches 100%"
    ],
    correctAnswers: [0, 1],
    explanation: "Technical debt cripples both Time to Market (T2M) and Ability to Innovate (A2I), driving up operational costs and causing customer churn.",
    references: "EBM Guide - Consequences of Technical Debt"
  },

  // --- EXPERIMENTATION & CONTINUOUS DISCOVERY ---
  {
    domain: "Product Discovery & Experimentation",
    type: "single",
    text: "Your team has an unvalidated hypothesis that users want an automated AI investment portfolio rebalancer. Building the full automated engine will take 9 months and \$1.5M. How should the Product Owner proceed according to Lean/Agile principles?",
    options: [
      "Fund the full 9-month build immediately to ensure first-mover advantage",
      "Run a Concierge or Wizard of Oz experiment, manually rebalancing portfolios for a small cohort of 50 test users to validate customer willingness to trust algorithms before writing complex automated code",
      "Conduct a 2-year survey before writing any user stories",
      "Cancel the idea because anything involving AI is too uncertain"
    ],
    correctAnswers: [1],
    explanation: "Lean experimentation (Concierge / Wizard of Oz) validates customer desirability and value hypotheses with minimal code, de-risking high-capital initiatives.",
    references: "The Lean Startup & Professional Scrum Product Owner II"
  },
  {
    domain: "Product Discovery & Experimentation",
    type: "single",
    text: "A Product Owner conducts an A/B test between two checkout flows. Flow B increases conversion by 12% among desktop users but causes an 18% crash rate on older Android mobile devices. What is the most rigorous empirical action?",
    options: [
      "Roll out Flow B to 100% of users immediately because desktop conversion went up",
      "Do not release Flow B to mobile users; analyze the telemetry data with Developers, fix the Android compatibility defect, and re-test with a small canary cohort",
      "Discard both flows and revert to the version from 2018",
      "Ignore Android users permanently"
    ],
    correctAnswers: [1],
    explanation: "Empirical product management looks at holistic system outcomes. High crash rates degrade Current Value and drive churn, requiring targeted remediation and re-testing.",
    references: "PSPO II - Experiment Telemetry & Analysis"
  },

  // --- RELEASE STRATEGIES & RISK REDUCTION ---
  {
    domain: "Release Strategy & Deployment",
    type: "single",
    text: "What is the key difference between 'Deployment' and 'Release' in advanced Product Ownership?",
    options: [
      "They are identical synonyms that refer to copying files to a server",
      "Deployment is the technical installation of code into an environment; Release is the business decision to make that capability visible and accessible to end users",
      "Deployment is done by developers; Release is done by marketing on LinkedIn",
      "Deployment only happens once a year"
    ],
    correctAnswers: [1],
    explanation: "Decoupling deployment from release (via dark launches and feature toggles) allows technical teams to continuously verify code while the PO decides when to release business value.",
    references: "Continuous Delivery & PSPO II - Deployment vs Release"
  },
  {
    domain: "Release Strategy & Deployment",
    type: "single",
    text: "Why do high-performing product organizations utilize 'Dark Launching'?",
    options: [
      "To deploy backend features to production without exposing the UI, allowing verification of system stability, database queries, and load under real production conditions",
      "To hide code from company executives",
      "To launch software only during nighttime hours",
      "To evade government software licensing audits"
    ],
    correctAnswers: [0],
    explanation: "Dark launching exposes backend capabilities to real traffic silently to validate infrastructure scalability and catch defects before making features visible to users.",
    references: "Continuous Delivery - Dark Launching"
  },
  {
    domain: "Release Strategy & Deployment",
    type: "multiple",
    text: "Which of the following release practices directly reduce commercial and operational risk for a Product Owner? (Select two)",
    options: [
      "Canary releases: releasing to a 2% user cohort and monitoring APM metrics before broader rollout",
      "Feature flags: ability to instantly disable a malfunctioning feature in production without redeploying code",
      "Mega-releases: saving 50 features for an annual synchronized launch",
      "Disabling error logging during high-traffic launch days",
      "Mandating that all users upgrade their hardware"
    ],
    correctAnswers: [0, 1],
    explanation: "Canary releases and feature toggles limit the blast radius of potential failures and provide instant rollback capabilities, de-risking continuous value delivery.",
    references: "Professional Scrum Product Owner II - Operational Risk"
  },

  // --- ADVANCED VALUE & BUSINESS STRATEGY ---
  {
    domain: "Value Maximization & Economics",
    type: "single",
    text: "What is the primary indicator of Goodhart's Law in an Agile software organization?",
    options: [
      "When a metric (such as lines of code, velocity, or test coverage percentage) is turned into an evaluation target, people optimize for the metric rather than genuine value",
      "When developers write code faster after drinking coffee",
      "When customers demand lower prices every sprint",
      "When the Scrum Master facilitates planning poker"
    ],
    correctAnswers: [0],
    explanation: "Goodhart's Law states: 'When a measure becomes a target, it ceases to be a good measure.' Gamed metrics create illusions of progress while degrading real outcomes.",
    references: "Goodhart's Law & EBM Guide"
  },
  {
    domain: "Value Maximization & Economics",
    type: "single",
    text: "An enterprise product has a High Current Value (CV) but Low Unrealized Value (UV). What strategic product posture is typically recommended?",
    options: [
      "Invest massively in speculative R&D because money is limitless",
      "Treat the product as a mature cash cow: harvest stable cash flows, optimize operational cost efficiency, and redirect surplus investment toward products with High UV",
      "Shut down the product immediately",
      "Double feature development speed by cutting all QA testing"
    ],
    correctAnswers: [1],
    explanation: "Products with high CV and low UV have saturated their addressable market. They should be harvested efficiently while capital is redeployed to higher-growth opportunities.",
    references: "EBM Guide - Strategic Portfolio Rebalancing"
  },

  // --- ADDITIONAL SCENARIO QUESTIONS TO ROUND OUT POOL ---
  {
    domain: "Scrum Accountabilities & Leadership",
    type: "single",
    text: "The lead architect insists that before any user features are built, the team must spend 4 months building a 'Generic Enterprise Framework' capable of handling any theoretical future product. How should the Product Owner handle this?",
    options: [
      "Agree, because architects know more about the future than customers",
      "Coach the architect on YAGNI (You Aren't Gonna Need It) and evolutionary architecture: build architectural enablers incrementally just in time to support validated user features",
      "Remove the architect from the company immediately",
      "Build the framework in secret without telling stakeholders"
    ],
    correctAnswers: [1],
    explanation: "Big Upfront Architecture (BUFA) creates unvalidated waste. Agile architecture evolves incrementally alongside customer value to prevent gold-plating.",
    references: "PSPO II - Emergent Architecture"
  },
  {
    domain: "Stakeholder Management & Negotiation",
    type: "single",
    text: "A major regulatory deadline requires your product to comply with a new data protection law in 90 days or face \$50,000/day fines. How does this impact the Product Backlog?",
    options: [
      "The Product Owner creates a separate secret compliance backlog",
      "The Product Owner integrates compliance requirements directly into the single Product Backlog and Definition of Done, ordering them to ensure verified compliance before the deadline",
      "The team ignores the law until the first fine arrives",
      "The Scrum Master cancels all future Sprints"
    ],
    correctAnswers: [1],
    explanation: "Regulatory and legal requirements are mandatory product constraints that must be transparent in the single Product Backlog and Definition of Done.",
    references: "PSPO II - Regulatory Compliance"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "If an organization's 'Customer Cycle Time' is 6 months, what does this indicate?",
    options: [
      "It takes 6 months from the time a customer need is identified until that customer can actually use the solution in production",
      "Customers only pay their invoices once every 6 months",
      "Developers can only take vacation every 6 months",
      "The product warranty expires in 6 months"
    ],
    correctAnswers: [0],
    explanation: "Customer cycle time measures the total duration from customer problem identification to delivery of verified value to the customer.",
    references: "EBM Guide - Time to Market Metrics"
  },
  {
    domain: "Product Discovery & Experimentation",
    type: "single",
    text: "What is an Opportunity Solution Tree (OST), popularized by Teresa Torres, designed to help a Product Owner do?",
    options: [
      "Track individual developer attendance at daily meetings",
      "Visually connect a desired target outcome to discovered customer opportunities, candidate solutions, and assumption-testing experiments",
      "Draw family trees of executive stakeholders",
      "Calculate story point velocity automatically"
    ],
    correctAnswers: [1],
    explanation: "Teresa Torres' Opportunity Solution Tree links Outcomes -> Opportunities -> Solutions -> Experiments, ensuring teams solve real problems rather than jumping straight to features.",
    references: "Continuous Discovery Habits - Teresa Torres"
  },
  {
    domain: "Scaling & Multi-Team Alignment",
    type: "single",
    text: "When 8 Scrum Teams participate in a shared Nexus Sprint Planning event, who represents each team in the Nexus Sprint Planning?",
    options: [
      "External consultants who have never seen the code",
      "Representatives from each Scrum Team along with the single Product Owner to coordinate shared dependencies and the Nexus Sprint Goal",
      "Only the company CFO and legal counsel",
      "All 80 developers simultaneously in one unorganized room"
    ],
    correctAnswers: [1],
    explanation: "Nexus Sprint Planning uses designated representatives from each Scrum Team collaborating with the Product Owner to address cross-team dependencies and craft a shared Nexus Sprint Goal.",
    references: "Nexus Guide - Nexus Sprint Planning"
  },
  {
    domain: "Technical Debt & Quality Governance",
    type: "single",
    text: "What is the primary indicator that a Scrum Team's Definition of Done is too weak?",
    options: [
      "The team completes all their story points every sprint",
      "A surge of defects, performance regressions, and integration failures occur immediately after releasing increments to staging or production",
      "The developers laugh too much during Retrospectives",
      "The Product Owner has too many customer meetings"
    ],
    correctAnswers: [1],
    explanation: "High post-sprint defect discovery, regression testing bottlenecks, and production rollbacks are classic indicators of a weak or incomplete Definition of Done.",
    references: "PSPO II - Strengthening Definition of Done"
  },
  {
    domain: "Value Maximization & Economics",
    type: "single",
    text: "What does Customer Acquisition Cost (CAC) vs Lifetime Value (LTV) ratio tell a Product Owner about product sustainability?",
    options: [
      "If CAC exceeds LTV, the product loses money on every new customer acquired and is economically unsustainable without reducing CAC or increasing retention/expansion",
      "It measures how many bug fixes developers write per week",
      "It determines the size of sprint timeboxes",
      "It has no relevance to product management"
    ],
    correctAnswers: [0],
    explanation: "A healthy SaaS product typically targets an LTV:CAC ratio of 3:1 or higher. When CAC > LTV, the business model burns cash on customer acquisition.",
    references: "Unit Economics for Product Owners"
  },
  {
    domain: "Stakeholder Management & Negotiation",
    type: "single",
    text: "During a Sprint Review, a powerful VP of Sales aggressively complains that a feature did not include an unrequested report format. How should the Product Owner handle this in the moment?",
    options: [
      "Argue publicly that the VP is ruining the meeting",
      "Acknowledge the VP's perspective, capture the feedback transparently as a candidate item for the Product Backlog, and refocus the room on the Sprint Goal and Increment inspection",
      "Immediately fire the developer who wrote the feature",
      "Agree to cancel the current release"
    ],
    correctAnswers: [1],
    explanation: "The Sprint Review is an inspection event where constructive feedback is welcomed. The PO captures feedback transparently without allowing individuals to derail the collaborative agenda.",
    references: "Professional Scrum Product Owner II - Facilitating Sprint Review"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "Which of the following would be an authentic metric for Ability to Innovate (A2I)?",
    options: [
      "Installed Version Index (percentage of customers running the most recent release)",
      "Daily coffee consumption of engineers",
      "Number of PowerPoint slides created per quarter",
      "Total hours spent in Jira meetings"
    ],
    correctAnswers: [0],
    explanation: "Installed Version Index measures the percentage of users on the latest release. A fragmented installed base forces teams to maintain legacy versions, severely hurting A2I.",
    references: "EBM Guide - Installed Version Index"
  },
  {
    domain: "Product Discovery & Experimentation",
    type: "single",
    text: "What is a 'Spike' story in backlog management, and how should it be timeboxed?",
    options: [
      "An indefinite research effort with no end date",
      "A timeboxed investigation designed to answer a specific technical or user uncertainty, returning an actionable finding rather than production code",
      "A permanent bug that cannot be fixed",
      "A feature built exclusively for executives"
    ],
    correctAnswers: [1],
    explanation: "Spikes are strictly timeboxed research experiments that produce knowledge to reduce uncertainty for upcoming backlog items.",
    references: "Agile Alliance - Spikes & Timeboxing"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "Your product's revenue has plateaued while market demand continues to grow. User research reveals that 60% of potential buyers abandon signups because the onboarding flow takes 30 minutes. What EBM metric describes this lost market opportunity?",
    options: [
      "Customer desired satisfaction gap (Unrealized Value)",
      "Daily active user count (Current Value)",
      "Release frequency (Time to Market)",
      "Defect removal efficiency (Ability to Innovate)"
    ],
    correctAnswers: [0],
    explanation: "The customer satisfaction gap between what customers need (instant signup) and what is delivered represents Unrealized Value that the organization has yet to capture.",
    references: "EBM Guide - Unrealized Value"
  },
  {
    domain: "Stakeholder Management & Negotiation",
    type: "single",
    text: "During a volatile quarter, an executive demands that the Product Owner commit to 10 specific deliverables for the next 6 months with zero scope variance. How should the Product Owner respond to protect business agility?",
    options: [
      "Agree without objection to avoid executive friction",
      "Explain that fixed-scope roadmaps create an illusion of certainty in complex markets; propose an Outcome Roadmap centered on intermediate business targets and confidence intervals",
      "Refuse all future communication with executives",
      "Secretly abandon all automated testing"
    ],
    correctAnswers: [1],
    explanation: "Outcome-based roadmaps focus on problems to solve rather than feature commitments, allowing teams to discover the most valuable path to achieving business goals.",
    references: "PSPO II - Outcome Roadmaps"
  },
  {
    domain: "Scaling & Multi-Team Alignment",
    type: "single",
    text: "Five Scrum Teams are working on a shared microservices platform. One team regularly merges unintegrated code into the main branch that breaks staging for all other teams. How should this be resolved within Nexus?",
    options: [
      "Appoint a single gatekeeper to manually review all code for 3 weeks",
      "Strengthen the shared Definition of Done to mandate automated continuous integration and end-to-end regression passing before any branch merge",
      "Allow the broken code to proceed into production",
      "Stop doing Scrum and switch to Waterfall"
    ],
    correctAnswers: [1],
    explanation: "In Nexus, continuous integration is non-negotiable. The Definition of Done must require automated integration and test verification to prevent multi-team regression.",
    references: "Nexus Guide - Continuous Integration"
  },
  {
    domain: "Technical Debt & Quality Governance",
    type: "single",
    text: "A Product Owner is pressured to skip security penetration testing to hit a marketing launch date. What is the Product Owner's ethical and professional obligation?",
    options: [
      "Comply with marketing because launch dates cannot be moved",
      "Refuse to release the Increment until all security standards defined in the Definition of Done are satisfied, transparently communicating the risk to stakeholders",
      "Quietly delete the security clause from the Definition of Done",
      "Blame the developers for conducting security tests"
    ],
    correctAnswers: [1],
    explanation: "Product Owners must maintain uncompromising integrity regarding the Definition of Done. Shipping unverified, insecure code violates Scrum principles and creates immense liability.",
    references: "Scrum Guide 2020 - Definition of Done & Increment"
  },
  {
    domain: "Product Discovery & Experimentation",
    type: "single",
    text: "A team spends 6 sprints developing an automated workflow only to discover post-launch that fewer than 1% of users ever click on it. What should the Product Owner conclude about their product discovery practices?",
    options: [
      "The discovery loop failed to validate problem-solution fit and customer desirability before committing full engineering capacity",
      "Marketing did not run enough display ads",
      "The developers wrote defective code",
      "Customers do not appreciate advanced technology"
    ],
    correctAnswers: [0],
    explanation: "Developing features without prior assumption validation or prototype testing is an anti-pattern that leads to expensive waste. Continuous discovery de-risks development.",
    references: "Continuous Discovery Habits - Teresa Torres"
  },
  {
    domain: "Value Maximization & Economics",
    type: "single",
    text: "When comparing two candidate initiatives, Initiative Alpha offers high expected value but high technical uncertainty, while Initiative Beta offers low value but low uncertainty. How should the Product Owner approach Alpha?",
    options: [
      "Discard Alpha entirely because uncertainty is uncomfortable",
      "Order a small timeboxed Spike or proof-of-concept in the Product Backlog to reduce uncertainty before committing major investment",
      "Build Beta exclusively for the next 2 years",
      "Commit the entire organization to Alpha without any research"
    ],
    correctAnswers: [1],
    explanation: "High-value, high-uncertainty initiatives should be de-risked using small empirical spikes or prototypes to purchase information before committing extensive resources.",
    references: "Principles of Product Development Flow - Donald Reinertsen"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "What does 'Release Cadence' vs 'Release Duration' describe in Time to Market (T2M)?",
    options: [
      "Release cadence is how often releases occur; release duration is the time required from building a release to deploying it into customer hands",
      "Release cadence is the sprint length; release duration is developer lunch time",
      "They are identical terms measuring story point burn rates",
      "They refer to the speed of the Product Owner's typing"
    ],
    correctAnswers: [0],
    explanation: "Release Cadence reflects frequency of releases, while Release Duration reflects the time and friction required to execute a single release.",
    references: "EBM Guide - Time to Market"
  },
  {
    domain: "Scaling & Multi-Team Alignment",
    type: "single",
    text: "In Large-Scale Scrum (LeSS), how does Sprint Planning Part 1 differ from Sprint Planning Part 2?",
    options: [
      "Part 1 is for managers; Part 2 is for developers",
      "Part 1 involves all teams and the single PO to clarify WHAT items to select; Part 2 is held separately by each team to plan HOW to build their selected items",
      "Part 1 is for story point estimation; Part 2 is for assigning blamed tasks",
      "Part 1 is held on Monday; Part 2 is held on Friday"
    ],
    correctAnswers: [1],
    explanation: "In LeSS, Sprint Planning 1 is multi-team (with the single Product Owner to select and share backlog items), while Sprint Planning 2 is held within individual teams to plan implementation.",
    references: "Large-Scale Scrum (LeSS) Framework Guide"
  },
  {
    domain: "Stakeholder Management & Negotiation",
    type: "single",
    text: "A customer success manager reports that 30 enterprise clients want different variations of a reporting dashboard. What should the Product Owner do rather than building 30 customized dashboards?",
    options: [
      "Build all 30 custom variations and hire 10 more maintenance engineers",
      "Identify the core underlying data needs and design a configurable, modular dashboard capability that satisfies 90% of use cases without bespoke code",
      "Tell the customer success manager that dashboards are obsolete",
      "Ignore customer feedback completely"
    ],
    correctAnswers: [1],
    explanation: "Advanced Product Owners synthesize diverse stakeholder requests into coherent, scalable platform capabilities rather than creating a tangled web of bespoke customizations.",
    references: "PSPO II - Synthesizing Stakeholder Needs"
  },
  {
    domain: "Technical Debt & Quality Governance",
    type: "single",
    text: "A Product Owner reviews the 'Strangler Fig' architectural pattern. When is this pattern most valuable to a Product Owner?",
    options: [
      "When replacing an essential legacy monolithic system incrementally by building new capabilities as modern microservices around the perimeter until the old system can be retired",
      "When firing developers who write slow code",
      "When strangling the Product Backlog to zero items",
      "When cancelling all customer contracts"
    ],
    correctAnswers: [0],
    explanation: "The Strangler Fig pattern allows teams to modernize legacy architecture incrementally while continuously delivering business value, avoiding the immense risk of 'big-bang' rewrites.",
    references: "Martin Fowler - Strangler Fig Pattern"
  },
  {
    domain: "Product Discovery & Experimentation",
    type: "single",
    text: "What is the primary danger of prioritizing features solely based on customer feature requests rather than customer problem discovery?",
    options: [
      "Customers are good at identifying their pain points, but rarely propose the most optimal, scalable software solutions",
      "Customers never know what they want",
      "Developers get bored easily",
      "It requires too many customer surveys"
    ],
    correctAnswers: [0],
    explanation: "Henry Ford's classic adage: 'If I had asked people what they wanted, they would have said faster horses.' Product discovery focuses on understanding underlying problems and innovating solutions.",
    references: "Inspired - Marty Cagan"
  },
  {
    domain: "Value Maximization & Economics",
    type: "single",
    text: "What does 'Opportunity Cost' represent when a Product Owner decides to build Feature X instead of Feature Y?",
    options: [
      "The financial loss incurred by the engineering team's laptops",
      "The lost value and benefits that could have been realized had the team invested capacity into the next-best alternative (Feature Y)",
      "The cost of coffee during refinement",
      "The salary of the Scrum Master"
    ],
    correctAnswers: [1],
    explanation: "Opportunity cost is the foregone value of the best alternative not chosen. Every decision to build something is simultaneously a decision NOT to build something else.",
    references: "Economics for Product Owners - Opportunity Cost"
  }
];

const { buildBalancedExamQuestions } = require('./examUtils');

// Helper to generate 5 full mock exams of exactly 40 scenario questions each
function generatePspo2Exams(examCount = 5, questionsPerExam = 40) {
  const exams = [];

  for (let e = 1; e <= examCount; e++) {
    const examQuestions = buildBalancedExamQuestions(pspo2Pool, questionsPerExam, e, 'pspo2');

    exams.push({
      id: `pspo2-mock-${e}`,
      title: `PSPO II - Practice Exam ${e} (Advanced Scenario Simulation)`,
      examNumber: e,
      durationMinutes: 60,
      passingScore: 85,
      questions: examQuestions
    });
  }

  return exams;
}

module.exports = {
  pspo2Pool,
  generatePspo2Exams
};
