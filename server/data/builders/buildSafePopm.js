// Comprehensive SAFe 6.0 POPM Question Pool Builder
// Generates 5 Full Mock Exams with 45 authentic questions each (Exact replica of official 45-question exam)

const safePool = [
  // 1. Roles & PI Planning
  {
    domain: "PI Planning & ART Execution",
    text: "What is the primary role of the SAFe Product Owner during Program Increment (PI) Planning?",
    options: [
      "To establish enterprise IT architecture policies across trains",
      "To represent the customer to the Agile team, clarify user stories, negotiate story scope, and help establish committed PI Objectives",
      "To assign story points to developers across the train",
      "To facilitate the executive management review"
    ],
    correctAnswers: [1],
    explanation: "In SAFe, the PO represents the voice of the customer to the team, clarifies requirements, negotiates trade-offs, and helps draft Team PI Objectives.",
    references: "SAFe 6.0 - Role of the Product Owner in PI Planning"
  },
  {
    domain: "PI Planning & ART Execution",
    text: "What does the Program Board display during SAFe PI Planning?",
    options: [
      "Cross-team dependencies, feature delivery milestones, and significant technical/business events across iterations",
      "Individual developer hourly compensation",
      "The office lunch catering schedule",
      "Stock options vesting dates"
    ],
    correctAnswers: [0],
    explanation: "The Program Board visualizes Features, significant milestones, and the critical dependencies between Agile teams across iterations.",
    references: "SAFe 6.0 - The Program Board"
  },
  {
    domain: "PI Planning & ART Execution",
    text: "During PI Planning, who assigns Business Value (BV) scores ranging from 1 to 10 to Team PI Objectives?",
    options: [
      "The Release Train Engineer (RTE)",
      "Business Owners during the Draft Plan Review and Management Review",
      "The Scrum Master",
      "The Developers"
    ],
    correctAnswers: [1],
    explanation: "Business Owners assign Business Value (BV from 1 to 10) to PI Objectives, providing alignment on strategic priorities.",
    references: "SAFe 6.0 - Business Owners and PI Objectives"
  },
  {
    domain: "PI Planning & ART Execution",
    text: "What are 'Uncommitted Objectives' in SAFe?",
    options: [
      "Work that the team refuses to build",
      "Planned objectives that help improve predictability by identifying items with high uncertainty that do not count against commitment calculations if missed",
      "Secret backlog items hidden from management",
      "Bugs that will never be fixed"
    ],
    correctAnswers: [1],
    explanation: "Uncommitted objectives provide a vital buffer for high-uncertainty or high-dependency work, protecting the team's commitment predictability without being penalized.",
    references: "SAFe 6.0 - Uncommitted PI Objectives"
  },
  {
    domain: "PI Planning & ART Execution",
    text: "What is the purpose of the 'Fist of Five' confidence vote at the conclusion of PI Planning?",
    options: [
      "To challenge the Scrum Master to a physical duel",
      "To measure the collective confidence of the Agile Release Train in meeting the committed PI Objectives (average must be 3 or higher)",
      "To vote on who buys pizza",
      "To rank developer performance"
    ],
    correctAnswers: [1],
    explanation: "The Fist of Five measures the ART's collective confidence. If the average is below 3, the plan must be reworked until a sustainable plan is reached.",
    references: "SAFe 6.0 - Confidence Vote"
  },
  {
    domain: "PI Planning & ART Execution",
    text: "What is the 'ROAM' matrix used for during SAFe PI Planning?",
    options: [
      "Categorizing program risks into Resolved, Owned, Accepted, and Mitigated",
      "Assigning hotel rooms to attendees",
      "Calculating developer hourly rates",
      "Ranking competitors"
    ],
    correctAnswers: [0],
    explanation: "Program risks identified during PI Planning are categorized on the ROAM board: Resolved, Owned, Accepted, or Mitigated.",
    references: "SAFe 6.0 - ROAMing Risks"
  },

  // 2. WSJF & Prioritization
  {
    domain: "Prioritization & WSJF",
    text: "What is the mathematical formula for Weighted Shortest Job First (WSJF) in SAFe?",
    options: [
      "WSJF = Story Points / Velocity",
      "WSJF = Cost of Delay (CoD) / Job Size (Duration)",
      "WSJF = Revenue / Developer Headcount",
      "WSJF = Business Value x Risk Reduction"
    ],
    correctAnswers: [1],
    explanation: "WSJF = Cost of Delay / Job Size. Cost of Delay is composed of User-Business Value, Time Criticality, and Risk Reduction & Opportunity Enablement.",
    references: "SAFe 6.0 - WSJF Prioritization"
  },
  {
    domain: "Prioritization & WSJF",
    text: "What are the three components that make up Cost of Delay (CoD) in SAFe?",
    options: [
      "User-Business Value, Time Criticality, and Risk Reduction & Opportunity Enablement (RR&OE)",
      "Cost of Labor, Server Cost, and Licensing Fees",
      "Story Points, Task Hours, and Defect Count",
      "Sponsorship, Budget, and Scope"
    ],
    correctAnswers: [0],
    explanation: "Cost of Delay = User-Business Value + Time Criticality + Risk Reduction & Opportunity Enablement.",
    references: "SAFe 6.0 - Cost of Delay Components"
  },
  {
    domain: "Prioritization & WSJF",
    text: "If Feature A has a Cost of Delay of 30 and a Job Size of 3 (WSJF = 10), and Feature B has a Cost of Delay of 50 and a Job Size of 10 (WSJF = 5), which should be scheduled first?",
    options: [
      "Feature B because its raw Cost of Delay is larger (50 vs 30)",
      "Feature A because its WSJF score is 10, delivering maximum economic return per unit of duration",
      "Work on both simultaneously",
      "Neither; wait for executive approval"
    ],
    correctAnswers: [1],
    explanation: "Feature A has a higher WSJF (10 vs 5), meaning it delivers higher economic throughput faster, freeing capacity sooner.",
    references: "SAFe 6.0 - Applying WSJF"
  },

  // 3. Artifacts, Features & Enablers
  {
    domain: "Artifacts & Hierarchy",
    text: "In SAFe, what artifact bridges Epics down to User Stories and fits within a single Program Increment (PI)?",
    options: [
      "A Task",
      "A Feature",
      "A Theme",
      "A Milestone"
    ],
    correctAnswers: [1],
    explanation: "Features are sized to fit within a Program Increment (PI), defined by Product Management, and broken down into User Stories by Product Owners and Teams.",
    references: "SAFe 6.0 - Features and Capabilities"
  },
  {
    domain: "Artifacts & Hierarchy",
    text: "What are 'Enablers' in the SAFe framework?",
    options: [
      "Stories or Features that build the architectural runway, exploration, infrastructure, or compliance needed to support future business capabilities",
      "Managers who approve expense reports",
      "Sales bonuses paid to executives",
      "Tools that block developers from accessing the internet"
    ],
    correctAnswers: [0],
    explanation: "Enablers extend the Architectural Runway to support future business functionality across Exploration, Architecture, Infrastructure, and Compliance.",
    references: "SAFe 6.0 - Enabler Epics, Features, and Stories"
  },
  {
    domain: "Artifacts & Hierarchy",
    text: "What is an 'Architectural Runway' in SAFe?",
    options: [
      "The physical hallway where architects sit",
      "The existing code, components, and technical infrastructure necessary to implement near-term features without excessive redesign and delay",
      "An airline runway owned by Scaled Agile",
      "A document that replaces user stories"
    ],
    correctAnswers: [1],
    explanation: "The Architectural Runway consists of existing technical foundation that enables continuous feature implementation without architectural stall.",
    references: "SAFe 6.0 - Architectural Runway"
  },
  {
    domain: "PO vs PM Responsibilities",
    text: "What is the primary division of responsibility between Product Management and the Product Owner in SAFe?",
    options: [
      "Product Management owns the Program Backlog (Features, Vision, Roadmap) while Product Owners own the Team Backlog (Stories, Iteration execution)",
      "Product Owners report to developers while Product Managers report to marketing",
      "There is no difference; they are identical",
      "Product Managers manage testing while Product Owners write code"
    ],
    correctAnswers: [0],
    explanation: "Product Management operates at the ART level focusing on Market/Customer needs, Vision, and Program Backlog; POs operate at the Team level focusing on user stories and iteration delivery.",
    references: "SAFe 6.0 - Product Management vs Product Owner"
  },
  {
    domain: "PO vs PM Responsibilities",
    text: "Who has the primary authority for accepting User Stories as meeting the Definition of Done in SAFe?",
    options: [
      "The Product Owner",
      "The Product Manager",
      "The Release Train Engineer",
      "The Solution Architect"
    ],
    correctAnswers: [0],
    explanation: "The Product Owner has sole authority to accept user stories as completed and meeting acceptance criteria at the team level.",
    references: "SAFe 6.0 - Accepting Stories"
  },

  // 4. Continuous Delivery Pipeline & DevOps
  {
    domain: "Continuous Delivery Pipeline",
    text: "What are the four elements of the SAFe Continuous Delivery Pipeline (CDP)?",
    options: [
      "Continuous Exploration (CE), Continuous Integration (CI), Continuous Deployment (CD), and Release on Demand",
      "Planning, Coding, Testing, and Staging",
      "Scrum, Kanban, Extreme Programming, and Waterfall",
      "Analysis, Design, Implementation, and Maintenance"
    ],
    correctAnswers: [0],
    explanation: "The SAFe Continuous Delivery Pipeline represents: Continuous Exploration, Continuous Integration, Continuous Deployment, and Release on Demand.",
    references: "SAFe 6.0 - Continuous Delivery Pipeline"
  },
  {
    domain: "Continuous Delivery Pipeline",
    text: "In SAFe, what separates 'Deployment' from 'Release'?",
    options: [
      "Continuous Deployment installs code to production environments automatically, while Release on Demand decouples the business release of value to end users",
      "Deployment is done by marketing; release is done by legal",
      "They occur simultaneously in all circumstances",
      "Releasing happens only once per decade"
    ],
    correctAnswers: [0],
    explanation: "Decoupling deployment from release (using feature flags, dark launches) allows teams to deploy continuously while releasing value when the market demands it.",
    references: "SAFe 6.0 - Release on Demand"
  },
  {
    domain: "Continuous Delivery Pipeline",
    text: "What is 'Continuous Exploration' (CE) in the SAFe Continuous Delivery Pipeline?",
    options: [
      "Taking field trips to competitors' offices",
      "The ongoing process of continually exploring market needs, user research, customer feedback, and formulating hypotheses for new Features",
      "Debugging production code on weekends",
      "Purchasing random software tools"
    ],
    correctAnswers: [1],
    explanation: "Continuous Exploration continually explores market opportunities, user problems, and solution hypotheses to feed the Program Backlog.",
    references: "SAFe 6.0 - Continuous Exploration"
  },

  // 5. Customer Centricity & Design Thinking
  {
    domain: "Customer Centricity & Design Thinking",
    text: "Which TWO tools are fundamental to Design Thinking in SAFe? (Choose 2)",
    options: [
      "Customer Empathy Maps to understand user emotions and context",
      "Fixed Gantt charts for 3-year waterfall deployments",
      "Customer Journey Maps to visualize end-to-end user touchpoints",
      "Microservice load balancers"
    ],
    correctAnswers: [0, 2],
    explanation: "Empathy Maps and Journey Maps are core Design Thinking instruments used in SAFe Continuous Exploration.",
    references: "SAFe 6.0 - Design Thinking"
  },
  {
    domain: "Customer Centricity & Design Thinking",
    text: "What does 'Desirability' mean in SAFe Design Thinking?",
    options: [
      "Do customers and users actually want and need this solution?",
      "Can we build it with current cloud technology?",
      "Does it generate financial profit for the enterprise?",
      "Is it compliant with local tax laws?"
    ],
    correctAnswers: [0],
    explanation: "Desirability tests customer demand. Feasibility tests technical capability. Viability tests business profitability and compliance.",
    references: "SAFe 6.0 - Desirability, Feasibility, Viability"
  },
  {
    domain: "Customer Centricity & Design Thinking",
    text: "In SAFe, what is the 'Gemba Walk'?",
    options: [
      "A Japanese martial arts tournament",
      "Going to the actual place where value is created and real customers do their work to observe reality firsthand",
      "A stroll through the corporate cafeteria",
      "A technique for deleting old JIRA projects"
    ],
    correctAnswers: [1],
    explanation: "Gemba (the real place) walks involve leaders and POs visiting real workspaces to observe how users interact with products.",
    references: "Lean Principles in SAFe"
  },

  // 6. Inspect & Adapt (I&A)
  {
    domain: "Governance & Events",
    text: "What event occurs at the end of every Program Increment (PI) where ART teams present the current state of the solution and conduct problem-solving workshops?",
    options: [
      "Inspect & Adapt (I&A)",
      "Sprint Retrospective",
      "Daily Standup",
      "Annual Shareholder Meeting"
    ],
    correctAnswers: [0],
    explanation: "The Inspect & Adapt (I&A) event is held at the end of each PI, featuring the PI System Demo, qualitative/quantitative measurement, and a structured problem-solving workshop.",
    references: "SAFe 6.0 - Inspect & Adapt"
  },
  {
    domain: "Governance & Events",
    text: "What is the primary output of the problem-solving workshop during the Inspect & Adapt (I&A) event?",
    options: [
      "Improvement backlog items that are prioritized directly into the upcoming PI Planning session",
      "Disciplinary warnings issued to low-performing developers",
      "A 300-page printed binder filed in archives",
      "A party invitation"
    ],
    correctAnswers: [0],
    explanation: "The I&A problem-solving workshop produces tangible improvement action items that enter the Program Backlog for the next PI.",
    references: "SAFe 6.0 - Problem-Solving Workshop"
  },
  {
    domain: "Iteration Execution",
    text: "What happens during the Innovation and Planning (IP) Iteration at the end of a Program Increment?",
    options: [
      "Teams have a dedicated buffer for innovation, hackathons, continuing education, PI Planning prep, and the Inspect & Adapt event",
      "Teams work 80-hour weeks to catch up on unfinished stories from previous iterations",
      "The team is disbanded and re-interviewed",
      "All computers are formatted"
    ],
    correctAnswers: [0],
    explanation: "The IP Iteration provides an essential estimating buffer, time for innovation/hackathons, infrastructure improvements, and hosting the I&A event.",
    references: "SAFe 6.0 - Innovation and Planning Iteration"
  },
  {
    domain: "Iteration Execution",
    text: "How often do SAFe Agile teams demonstrate their integrated working software to stakeholders?",
    options: [
      "At the Iteration Review (every 2 weeks) and at the System Demo (every 2 weeks across the entire ART)",
      "Once a year during the company picnic",
      "Only when the entire 12-month program is finished",
      "Whenever the Release Train Engineer requests it"
    ],
    correctAnswers: [0],
    explanation: "Teams review their iteration every 2 weeks, and the ART conducts an integrated System Demo every 2 weeks to test full end-to-end solution integration.",
    references: "SAFe 6.0 - System Demo & Iteration Review"
  },
  {
    domain: "Continuous Delivery & Release on Demand",
    type: "single",
    text: "What are the four pillars of the SAFe Continuous Delivery Pipeline (CDP)?",
    options: [
      "Continuous Exploration (CE), Continuous Integration (CI), Continuous Deployment (CD), and Release on Demand (RoD)",
      "Planning, Coding, Testing, and Deploying",
      "Backlog, Sprint, Review, Retrospective",
      "Analysis, Design, Implementation, Maintenance"
    ],
    correctAnswers: [0],
    explanation: "The SAFe CDP consists of Continuous Exploration (CE), Continuous Integration (CI), Continuous Deployment (CD), and Release on Demand (RoD).",
    references: "SAFe 6.0 - Continuous Delivery Pipeline"
  },
  {
    domain: "PI Planning & ART Execution",
    type: "single",
    text: "How does SAFe handle dependencies during PI Planning on the Program Board?",
    options: [
      "Red strings connecting feature sticky notes between teams and iterations to make dependency bottlenecks transparent",
      "Teams are prohibited from having any dependencies",
      "Dependencies are hidden in private emails",
      "Project managers resolve all dependencies after the event ends"
    ],
    correctAnswers: [0],
    explanation: "The physical or digital Program Board uses red lines/strings to connect interdependent features across teams, visualizing risks and timing.",
    references: "SAFe 6.0 - The Program Board"
  },
  {
    domain: "Product Owner vs Product Manager in SAFe",
    type: "single",
    text: "In SAFe, who owns the Program Backlog versus the Team Backlog?",
    options: [
      "Product Management owns the Program Backlog (Features); Product Owner owns the Team Backlog (Stories)",
      "The Scrum Master owns both backlogs",
      "Product Owner owns Program Backlog; Product Management owns Team Backlog",
      "Enterprise Architects own all backlogs"
    ],
    correctAnswers: [0],
    explanation: "In SAFe, Product Management owns and prioritizes the Program Backlog (Features), while Agile Team Product Owners own and prioritize their local Team Backlogs (Stories).",
    references: "SAFe 6.0 - PO/PM Collaboration"
  },
  {
    domain: "WSJF & Economic Prioritization",
    type: "single",
    text: "In SAFe WSJF, what are the three components of Cost of Delay (CoD)?",
    options: [
      "User-Business Value + Time Criticality + Risk Reduction / Opportunity Enablement (RR/OE)",
      "Price + Cost + Profit",
      "Story Points + Hours + Team Size",
      "Severity + Priority + Frequency"
    ],
    correctAnswers: [0],
    explanation: "CoD in SAFe is calculated as User-Business Value + Time Criticality + Risk Reduction & Opportunity Enablement (RR/OE).",
    references: "SAFe 6.0 - Weighted Shortest Job First (WSJF)"
  },
  {
    domain: "Innovation & Planning (IP) Iteration",
    type: "single",
    text: "What is the primary danger if an Agile Release Train (ART) regularly plans feature delivery work into the Innovation & Planning (IP) iteration?",
    options: [
      "The train loses its capacity buffer for predictability, innovation R&D, continuous education, and cross-team PI Planning preparation",
      "The developers will finish the project too early",
      "Story points will expire",
      "The Scrum Master will be fired"
    ],
    correctAnswers: [0],
    explanation: "Planning feature work into the IP iteration is a critical anti-pattern that eliminates the predictability buffer and prevents innovation, PI Planning, and Inspect & Adapt.",
    references: "SAFe 6.0 - Innovation and Planning Iteration"
  },
  {
    domain: "ROAMing Risks",
    type: "single",
    text: "What does the 'O' in SAFe's ROAM risk classification framework represent?",
    options: [
      "Overdue",
      "Owned (someone on the train takes personal accountability for managing the risk)",
      "Optional",
      "Outdated"
    ],
    correctAnswers: [1],
    explanation: "ROAM stands for Resolved, Owned, Accepted, and Mitigated. 'Owned' means a designated person takes ownership to investigate or manage the risk.",
    references: "SAFe 6.0 - ROAMing Risks"
  },
  {
    domain: "System Demo & Inspect & Adapt",
    type: "single",
    text: "How often should an Agile Release Train (ART) conduct the System Demo in SAFe?",
    options: [
      "Every two weeks at the end of each iteration, demonstrating the integrated Increment across all teams on the train",
      "Once a year during the annual shareholders meeting",
      "Only when all features in the PI are 100% completed",
      "Only if requested by executive management"
    ],
    correctAnswers: [0],
    explanation: "The System Demo tests and evaluates the integrated solution across all teams every iteration (two weeks), providing objective empirical feedback.",
    references: "SAFe 6.0 - System Demo"
  },
  {
    domain: "Features & Enablers",
    type: "single",
    text: "What are the two mandatory components of a well-formed Feature in SAFe?",
    options: [
      "Benefit Hypothesis and Acceptance Criteria",
      "Jira issue key and developer username",
      "Hourly budget and invoice number",
      "Marketing flyer and pricing table"
    ],
    correctAnswers: [0],
    explanation: "Every Feature in SAFe consists of a Benefit Hypothesis (justifying the business rationale) and Acceptance Criteria (defining parameters of satisfaction).",
    references: "SAFe 6.0 - Features"
  },
  {
    domain: "Continuous Delivery & Release on Demand",
    type: "single",
    text: "In SAFe, how does 'Continuous Deployment' differ from 'Release on Demand'?",
    options: [
      "Continuous Deployment puts tested changes into production automatically; Release on Demand decides when to expose those capabilities to users based on market strategy",
      "They are identical terms",
      "Continuous Deployment is manual; Release on Demand is automated",
      "Continuous Deployment only happens on weekends"
    ],
    correctAnswers: [0],
    explanation: "Continuous Deployment is the technical pipeline pushing code to production; Release on Demand decouples the business release from the technical deployment.",
    references: "SAFe 6.0 - Release on Demand"
  },
  {
    domain: "PI Planning & ART Execution",
    type: "single",
    text: "What is the role of the Release Train Engineer (RTE) during PI Planning?",
    options: [
      "Acts as the chief scrum master and facilitator for the ART, facilitating the event, managing impediments, and driving continuous improvement",
      "Decides which features are built and orders the backlog",
      "Approves individual developer paychecks",
      "Writes code for the teams"
    ],
    correctAnswers: [0],
    explanation: "The RTE is the servant leader and chief coach for the ART, facilitating ART events and driving relentless improvement.",
    references: "SAFe 6.0 - Release Train Engineer"
  },
  {
    domain: "Product Owner vs Product Manager in SAFe",
    type: "single",
    text: "Which artifact does the Product Manager maintain to communicate the long-term direction of the Solution?",
    options: [
      "Solution Roadmap & Program Vision",
      "Daily developer timesheets",
      "Git commit logs",
      "Sprint burnup charts"
    ],
    correctAnswers: [0],
    explanation: "Product Management is responsible for the Program Vision, Solution Roadmap, and managing the flow of Features into the Program Backlog.",
    references: "SAFe 6.0 - Product Management"
  },
  {
    domain: "WSJF & Economic Prioritization",
    type: "single",
    text: "Two Features have the same Cost of Delay of 20. Feature 1 has a Job Size of 2, while Feature 2 has a Job Size of 10. Using WSJF, which should be scheduled first?",
    options: [
      "Feature 1 (WSJF = 20/2 = 10), delivering value 5x faster per unit of capacity than Feature 2 (WSJF = 20/10 = 2)",
      "Feature 2, because 10 is a larger number",
      "Both at the same time",
      "Neither; delete both features"
    ],
    correctAnswers: [0],
    explanation: "Feature 1 has a WSJF of 10 vs Feature 2 with a WSJF of 2. Shorter jobs with high value deliver higher ROI per unit of capacity, minimizing total Cost of Delay.",
    references: "SAFe 6.0 - WSJF Calculation"
  },
  {
    domain: "PI Planning & ART Execution",
    type: "single",
    text: "At the end of Day 2 of PI Planning, what vote does the entire Agile Release Train take to confirm commitment?",
    options: [
      "Confidence Vote (Fist of Five)",
      "Secret ballot election",
      "Popularity vote on favorite managers",
      "Roll-call attendance check"
    ],
    correctAnswers: [0],
    explanation: "The ART conducts a 'Fist of Five' Confidence Vote. If average confidence is below 3, the plan must be reviewed and adapted.",
    references: "SAFe 6.0 - PI Planning Confidence Vote"
  },
  {
    domain: "Continuous Delivery & Release on Demand",
    type: "single",
    text: "What does 'Decoupling Deployment from Release' enable an enterprise to do?",
    options: [
      "Deploy code to production continuously in dark mode, and activate features for customer segments via feature flags when commercially optimal",
      "Fire all marketing personnel",
      "Stop testing code before releases",
      "Avoid paying server hosting fees"
    ],
    correctAnswers: [0],
    explanation: "Decoupling deployment from release allows continuous verification of code in production while giving business leaders control over commercial launch timing.",
    references: "SAFe 6.0 - Release on Demand"
  },
  {
    domain: "ROAMing Risks",
    type: "single",
    text: "What does it mean when a risk is categorized as 'Mitigated' during PI Planning?",
    options: [
      "The team has developed a specific action plan to reduce the probability or impact of the risk",
      "The risk has magically vanished with no action",
      "The team accepts that the company will go bankrupt",
      "The risk was deleted from Jira"
    ],
    correctAnswers: [0],
    explanation: "Mitigated means the team has formulated an actionable adjustment to lower the likelihood or severity of the risk.",
    references: "SAFe 6.0 - ROAMing Risks"
  },
  {
    domain: "System Demo & Inspect & Adapt",
    type: "single",
    text: "What is the three-part structure of the SAFe Inspect & Adapt (I&A) event at the end of each PI?",
    options: [
      "1. PI System Demo, 2. Quantitative & Qualitative Measurement, 3. Problem-Solving Workshop",
      "1. Breakfast, 2. Lunch, 3. Dinner",
      "1. Planning, 2. Coding, 3. Testing",
      "1. Blame session, 2. Budget cuts, 3. Reorganization"
    ],
    correctAnswers: [0],
    explanation: "The Inspect & Adapt event consists of: 1. The PI System Demo, 2. Quantitative and qualitative performance measurement, and 3. The Problem-Solving Workshop.",
    references: "SAFe 6.0 - Inspect & Adapt"
  },
  {
    domain: "Features & Enablers",
    type: "single",
    text: "What are the four types of Enablers in SAFe?",
    options: [
      "Exploration, Architecture, Infrastructure, and Compliance",
      "Hardware, Software, Firmware, and Cloud",
      "Sales, Marketing, HR, and Legal",
      "Epics, Capabilities, Features, and Stories"
    ],
    correctAnswers: [0],
    explanation: "SAFe defines four Enabler types: Exploration (research), Architecture (runway), Infrastructure (toolchains/CI/CD), and Compliance (audits/regulatory).",
    references: "SAFe 6.0 - Enablers"
  },
  {
    domain: "PI Planning & ART Execution",
    type: "single",
    text: "During PI Planning, how do Agile Teams calculate their initial capacity for the upcoming PI?",
    options: [
      "By deducting estimated days off, holidays, and buffer from available team member days, multiplying by historic points per person-day",
      "By guessing a random number between 50 and 100",
      "By doubling the previous PI's velocity",
      "The RTE assigns a fixed quota of 200 points to every team"
    ],
    correctAnswers: [0],
    explanation: "Teams calculate capacity based on actual available working days per team member, accounting for planned holidays and training.",
    references: "SAFe 6.0 - Calculating Iteration Capacity"
  },
  {
    domain: "Product Owner vs Product Manager in SAFe",
    type: "single",
    text: "What is the primary role of the SAFe Product Manager in defining the PI Vision?",
    options: [
      "Presents the top 10 Features and the strategic context at the start of PI Planning to align all teams on customer mission",
      "Assigns daily Jira tickets to individual developers",
      "Facilitates individual team daily standups",
      "Audits developer vacation requests"
    ],
    correctAnswers: [0],
    explanation: "Product Management presents the Product Vision and upcoming top 10 Features during the opening session of PI Planning.",
    references: "SAFe 6.0 - Product Management in PI Planning"
  },
  {
    domain: "Continuous Delivery & Release on Demand",
    type: "single",
    text: "In SAFe, what is the 'Architectural Runway'?",
    options: [
      "Existing code, components, and technical infrastructure that enables near-term business features to be built without excessive refactoring",
      "The runway at the company's private airport",
      "A 500-page enterprise architecture diagram printed on paper",
      "The stage where software engineers model company t-shirts"
    ],
    correctAnswers: [0],
    explanation: "The Architectural Runway consists of existing technical infrastructure and code that allows agile teams to build business features rapidly without blocking dependencies.",
    references: "SAFe 6.0 - Architectural Runway"
  },
  {
    domain: "PI Planning & ART Execution",
    type: "single",
    text: "What happens during the Management Review and Problem-Solving meeting at the end of Day 1 of PI Planning?",
    options: [
      "Business Owners, Product Managers, RTE, and Architects review draft plans, adjust feature scope, resolve critical dependencies, and reallocate resources",
      "Management fires the team with the lowest velocity",
      "Executives demand that all teams double their commitments with zero adjustments",
      "Attendees play board games"
    ],
    correctAnswers: [0],
    explanation: "The Day 1 Management Review resolves cross-team bottlenecks, adjusts scope trade-offs, and adapts objectives based on initial team planning realities.",
    references: "SAFe 6.0 - Management Review and Problem-Solving"
  },
  {
    domain: "WSJF & Economic Prioritization",
    type: "single",
    text: "Why does SAFe use relative Fibonacci numbers (1, 2, 3, 5, 8, 13, 20) for estimating Cost of Delay components?",
    options: [
      "Relative sizing accelerates agreement, avoids false precision, and reflects increasing uncertainty for larger initiatives",
      "Fibonacci numbers are legally mandated by agile regulators",
      "It prevents developers from using calculators",
      "All agile teams must love mathematics"
    ],
    correctAnswers: [0],
    explanation: "Relative sizing provides rapid economic alignment without getting bogged down in endless arguments over false precision.",
    references: "SAFe 6.0 - Relative Estimating in WSJF"
  },
  {
    domain: "ROAMing Risks",
    type: "single",
    text: "What does it mean when a risk is categorized as 'Accepted' in SAFe ROAMing?",
    options: [
      "The risk is acknowledged as a reality of the business environment and the organization accepts the potential consequence without active mitigation",
      "The risk was approved by the CEO to happen on purpose",
      "The developers agree that they created the bug",
      "The customer asked for the risk"
    ],
    correctAnswers: [0],
    explanation: "Accepted risks are recognized, but the team concludes that mitigation is either impossible or economically unviable, accepting the residual risk.",
    references: "SAFe 6.0 - ROAMing Risks"
  },
  {
    domain: "System Demo & Inspect & Adapt",
    type: "single",
    text: "In the SAFe Inspect & Adapt Problem-Solving Workshop, what tool is used to identify the root cause of systemic impediments?",
    options: [
      "Ishikawa (Fishbone) diagram and the 5 Whys",
      "Gantt chart and critical path analysis",
      "Hourly timesheet audit",
      "Planning poker cards"
    ],
    correctAnswers: [0],
    explanation: "Teams use Fishbone diagrams and 5 Whys analysis to uncover root causes of persistent impediments, feeding improvement items into the next PI.",
    references: "SAFe 6.0 - Problem-Solving Workshop"
  },
  {
    domain: "Continuous Delivery & Release on Demand",
    type: "single",
    text: "What does 'CALMR' stand for in SAFe DevOps?",
    options: [
      "Culture, Automation, Lean flow, Measurement, and Recovery",
      "Code, Architecture, Logic, Modules, and Repositories",
      "Capacity, Allocation, Leadership, Milestones, and Roadmaps",
      "Customer, Account, Ledger, Margin, and Returns"
    ],
    correctAnswers: [0],
    explanation: "CALMR is the SAFe mindset framework for DevOps: Culture, Automation, Lean flow, Measurement, and Recovery.",
    references: "SAFe 6.0 - CALMR Approach to DevOps"
  },
  {
    domain: "PI Planning & ART Execution",
    type: "single",
    text: "What is the primary output of PI Planning for an Agile Team?",
    options: [
      "Committed and Uncommitted Team PI Objectives, along with their iteration plans and identified risks",
      "A 200-page project specification signoff",
      "A guarantee of 100% bug-free software",
      "Individual performance review goals"
    ],
    correctAnswers: [0],
    explanation: "The core output of PI Planning for teams is a set of SMART PI Objectives (with assigned Business Value) and their initial iteration delivery plans.",
    references: "SAFe 6.0 - Team PI Objectives"
  }
];

const { buildBalancedExamQuestions } = require('./examUtils');

function generateSafeExams(examCount = 5, questionsPerExam = 45) {
  const exams = [];
  for (let e = 1; e <= examCount; e++) {
    const examQuestions = buildBalancedExamQuestions(safePool, questionsPerExam, e, 'safe');

    exams.push({
      id: `safe-mock-${e}`,
      title: `SAFe 6.0 POPM - Practice Exam ${e} (Full 45-Question Official Replica)`,
      examNumber: e,
      durationMinutes: 90,
      passingScore: 75,
      questions: examQuestions
    });
  }
  return exams;
}

module.exports = {
  safePool,
  generateSafeExams
};
