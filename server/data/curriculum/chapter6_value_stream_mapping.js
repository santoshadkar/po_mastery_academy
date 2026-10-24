// Chapter 6: Value Stream Mapping (VSM) & Flow Optimization
module.exports = {
  id: "ch-06",
  title: "6. Value Stream Mapping (VSM) & Flow Optimization",
  category: "Flow & Operations",
  level: "Intermediate to Advanced",
  readTime: "28 min",
  summary: "Comprehensive masterclass on Lean Value Stream Mapping (VSM): distinguishing Operational vs Development Value Streams, mapping current state Lead Time vs Processing Time, calculating Flow Efficiency, identifying the 8 types of Lean waste (Muda), and eliminating delivery bottlenecks.",
  subChapters: [
    {
      id: "sub-6-1",
      title: "6.1 Understanding Value Streams: Operational vs Development",
      concept: `Originating in the Toyota Production System (TPS) and popularized in software by Mary and Tom Poppendieck and the Scaled Agile Framework (SAFe), a **Value Stream** represents the entire end-to-end sequence of activities, people, and systems required to deliver a continuous flow of value to a customer.

A foundational architectural error in traditional organizations is organizing engineering teams around **technical components or organizational silos** (e.g., the 'Database Team', the 'iOS Team', the 'Middleware Team', the 'QA Department'). In a siloed organization, shipping a single customer feature requires coordinating 6 handoffs across multiple managers, resulting in massive queue wait times and finger-pointing.

### The Two Enterprise Value Streams:
1. **Operational Value Streams (OVS)**:
   - The sequence of business steps and people who deliver products, goods, or services directly to end customers.
   - *Examples*:
     - Retail Banking: A customer opening a checking account, depositing funds, and obtaining a debit card.
     - Healthcare: A patient scheduling an MRI, undergoing the scan, and receiving diagnostic results.
     - E-Commerce: A shopper placing an order, warehouse picking and packing, and delivering the parcel.
2. **Development Value Streams (DVS)**:
   - The sequence of activities, people, and tools that design, build, test, and deploy the digital software applications and platforms utilized by the Operational Value Streams.
   - *Examples*:
     - The mobile banking engineering train building the automated account opening app.
     - The logistics software team building automated warehouse routing algorithms.

### Why Value Stream Alignment is the PO's Superpower:
When Agile teams and release trains are reorganized directly around Development Value Streams that mirror the customer's journey, **handoffs disappear**. 
A single cross-functional team or Agile Release Train (ART) possesses all the skills (UX, frontend, API, database, security, automated QA) to deliver end-to-end customer value autonomously.`,
      frameworkOrTemplate: `### Operational vs Development Value Stream Alignment Architecture

\`\`\`
  OPERATIONAL VALUE STREAM (End Customer Experience: Apply for a Commercial Mortgage)
  [Submit Application] ──► [Credit Risk Check] ──► [Underwriting Review] ──► [Funds Disbursed]
           ▲                          ▲                       ▲                     ▲
           │                          │                       │                     │
           └──────────────────────────┴───────────────────────┴─────────────────────┘
                                        SUPPORTED BY:
  DEVELOPMENT VALUE STREAM (Cross-Functional Commercial Lending Release Train)
  [Customer Need] ──► [Product Discovery] ──► [Thin-Slice Dev] ──► [Automated CI/CD] ──► [Production Value]
  • 1 Product Owner per Team | 1 Release Train Engineer | Dedicated Lead Architect
  • Full-stack capability: Zero handoffs to external database or QA gatekeeper teams!
\`\`\`

### Value Stream Identification Matrix:
- What is the trigger that initiates the customer journey?
- What is the ultimate value received by the customer?
- What software applications and systems touch this journey?
- Which teams build those systems today, and how many handoffs occur between them?`,
      realWorldExample: `### Commercial Mortgage Case Study: Eliminating 14 Component Silos

**The Nightmare:**
A Tier-1 financial institution required an average of **52 days** to approve and fund a commercial real estate loan. 
The IT organization was divided into 14 component silos: the Core Banking DB team, the Document Scanner team, the Credit Scoring API team, the Underwriting UI team, and the Compliance Audit group. 
Every new digital loan feature took 11 months to release, and loan officers complained that the software was hopelessly outdated.

**The Value Stream Mapping Reorganization:**
The enterprise agility team and Product Leaders mapped the Operational and Development Value Streams:
- They discovered that actual hands-on work across all 14 teams totaled only **6 hours**! The remaining 51 days and 18 hours were spent sitting in queues waiting for inter-team ticket handoffs.
- Leadership dismantled the 14 component silos and formed **2 cross-functional Development Value Streams**: *'Small Business Lending Train'* and *'Commercial Real Estate Lending Train'*.
- Each team included full-stack developers, credit risk specialists, and embedded QA.

**The Business Result:**
- Commercial loan approval time dropped from **52 days to 36 hours**.
- Feature release cadence accelerated from once every 11 months to **bi-weekly automated cloud deployments**.
- Loan origination volume increased by \$340M in the first fiscal year.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you explain the difference between an Operational Value Stream and a Development Value Stream to an executive who wants to organize teams by technology stack?"
- **The Senior PO Answer:**
  > "I explain it through the lens of customer flow versus organizational friction.
  > 
  > The **Operational Value Stream** represents the customer's reality: it is the end-to-end sequence of steps a customer takes to receive value—such as a patient booking an appointment, receiving care, and paying a bill.
  > 
  > The **Development Value Stream** is our engine: it represents the people, tools, and processes that build the software enabling that operational journey.
  > 
  > If we organize engineering teams by technology stack—such as a Database Team, an iOS Team, and an API Team—we create an architectural mismatch with customer reality. Every time the customer needs a single new capability, work must hop through 3 separate managers, 3 backlogs, and 3 sets of conflicting priorities.
  > 
  > By contrast, when we align our Development Value Stream directly to the customer journey, our teams become cross-functional feature teams. They have end-to-end content authority to design, build, and deploy customer outcomes with zero external dependencies. That is how elite organizations achieve high velocity with built-in quality."`,
      antiPatternsToAvoid: `1. **The Component Silo Trap**: Organizing teams by database, frontend, or infrastructure layers, creating endless handoff queues.
2. **Local Optimization**: Optimizing one development team's internal throughput while the overall customer journey remains paralyzed in handoff delays.`,
      actionChecklist: [
        "Map the primary Operational Value Stream that your software application powers.",
        "Count the number of separate team handoffs required to ship a single feature from idea to production."
      ]
    },
    {
      id: "sub-6-2",
      title: "6.2 Mapping the Current State: Lead Time, Processing Time & Flow Efficiency",
      concept: `A **Value Stream Map (VSM)** is an empirical Lean diagnostic tool that visually charts every single process step, handoff, queue, and delay required to move a customer request from initial trigger to delivered value.

### The Critical Metrics of Value Stream Mapping:
1. **Processing Time (PT) / Touch Time**:
   - The actual time developers, designers, or testers spend actively working on the item.
   - *Example*: Writing code (8 hours), designing a Figma mockup (4 hours), performing code review (30 minutes).
2. **Lead Time (LT) / Total Elapsed Time**:
   - The total calendar clock time from when the request was initiated or entered the backlog until it was deployed and delivering value in production.
   - Includes all nights, weekends, queue delays, waiting for approvals, and dependency blocks.
3. **Queue / Wait Time**:
   - The idle time where work sits waiting in an unassigned backlog, a pull request queue, an environment deployment pipeline, or a management approval inbox.
   $$\\text{Wait Time} = \\text{Total Lead Time} - \\sum \\text{Processing Time}$$
4. **Flow Efficiency (Activity Ratio)**:
   - The percentage of total calendar lead time that was actually spent adding customer value:
   $$\\text{Flow Efficiency (\\%)} = \\frac{\\sum \\text{Processing Time}}{\\text{Total Lead Time}} \\times 100$$
   - **The Shocking Enterprise Benchmark**: In typical legacy enterprise software organizations, **Flow Efficiency is between 2% and 8%**! Over 92% to 98% of total delivery time is spent sitting idle in queues.
5. **Rolled Percent Complete & Accurate (%CA)**:
   - The percentage of work output that the downstream step can accept and process without having to send it back for rework, clarification, or bug fixing. High rework rates completely crush system flow.`,
      frameworkOrTemplate: `### Current State Value Stream Map Calculation Timeline

\`\`\`
[1. Backlog Queue] ──► [2. Dev Coding] ──► [3. PR Review Queue] ──► [4. Code Review] ──► [5. QA Queue] ──► [6. Testing] ──► [7. CAB Queue] ──► [8. Deploy]
    Wait: 14 Days        PT: 3 Days          Wait: 4 Days           PT: 2 Hours        Wait: 8 Days       PT: 2 Days       Wait: 12 Days      PT: 1 Hour
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Sum of Processing Time (PT) = 3 Days + 0.25 Day + 2 Days + 0.125 Day = 5.375 Days (~43 Working Hours)
Total Lead Time (LT) = 14 + 3 + 4 + 0.25 + 8 + 2 + 12 + 0.125 = 43.375 Days

Flow Efficiency Calculation:
Flow Efficiency = (5.375 / 43.375) x 100 = 12.39%
Total Queue Waste = 38 Days (87.61% of total delivery time was spent waiting!)
\`\`\`

### Step-by-Step VSM Construction Guide:
1. Identify the boundary: Pick a specific feature type (e.g., standard customer enhancement).
2. Walk the physical/digital flow: Interview practitioners at every step; do not rely on managerial documentation.
3. Record empirical numbers: Measure median Lead Time, median Processing Time, and %CA at every stage.
4. Calculate Flow Efficiency and circle the primary constraint.`,
      realWorldExample: `### SaaS FinTech Case Study: The Myth of 'Slow Developers'

**The Accusation:**
The Chief Commercial Officer complained at an all-hands meeting that the engineering team was 'hopelessly slow', pointing out that customer feature requests took an average of **60 days** to go from request to production. The CCO demanded that engineers work mandatory weekends.

**The PO's Value Stream Audit:**
The Lead Product Owner conducted a formal Value Stream Mapping exercise across the last 30 delivered user stories:
- Requirement triage wait time: 18 days
- Product refinement & wireframing: 2 days (PT)
- Waiting for sprint planning: 12 days
- Developer coding: 4 days (PT)
- Waiting for staging QA environment: 7 days
- Automated and manual QA: 2 days (PT)
- Waiting for monthly Change Advisory Board (CAB) meeting: 15 days!
- Deployment: 1 hour (PT)

**The Mathematical Reality:**
- Total Processing Time: **8.1 days**.
- Total Lead Time: **60 days**.
- Flow Efficiency: **13.5%**.
- **The Finding**: Developers only spent 4 days coding! The features spent **51.9 days** sitting in queues and waiting for monthly CAB meetings.

**The Remediation:**
The PO presented the VSM to the CCO and CEO. Instead of forcing developers to work weekends, leadership eliminated the monthly CAB meeting in favor of automated CI/CD testing gates and established dedicated staging environments. Lead time plunged from 60 days to 9 days—a 6.6x acceleration with zero developer overtime.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "Stakeholders are complaining that your team's velocity is too low and features take too long to ship. How do you diagnose and address the issue using Value Stream Mapping?"
- **The Senior PO Answer:**
  > "I never respond by blindly pushing developers to increase story points or write code faster—that only burns out the team and introduces technical debt.
  > 
  > Instead, I map the Current State Value Stream to measure **Flow Efficiency**. 
  > 
  > I track the lifecycle of our last 20 features across three concrete metrics: Processing Time (actual coding and testing), Wait Time (time spent sitting in queues between stages), and % Complete and Accurate (%CA).
  > 
  > In 95% of software organizations, the bottleneck is not coding speed; it is queue wait time: waiting 2 weeks for security sign-off, waiting 10 days for code review, or high defect rework rates due to ambiguous acceptance criteria.
  > 
  > I bring the visual Value Stream Map to stakeholders and leadership to show them the empirical flow: *'Our developers spent 3 days coding this feature, but it spent 24 days waiting in approval queues and environment bottlenecks.'* 
  > 
  > By focusing our collective effort on eliminating queue waste and automating gates rather than micromanaging developer typing speed, we radically compress Lead Time while improving team morale."`,
      antiPatternsToAvoid: `1. **Pushing Developers to Code Faster**: Focusing on shaving 2 hours off developer coding time while ignoring 3 weeks of queue delays.
2. **Relying on Managerial Fiction**: Creating a VSM based on what process documentation says is supposed to happen, rather than measuring actual Jira timestamps and real developer behavior.`,
      actionChecklist: [
        "Audit your team's last 5 completed backlog stories: Measure their total calendar Lead Time vs actual Processing Time.",
        "Calculate your team's Flow Efficiency percentage and present it in your next retrospective."
      ]
    },
    {
      id: "sub-6-3",
      title: "6.3 Identifying Bottlenecks, Queues & The 8 Lean Wastes (Muda)",
      concept: `Originating in Lean manufacturing and translated into software engineering by Mary and Tom Poppendieck (*Lean Software Development*), **Muda (Waste)** is defined as any activity, artifact, delay, or process step that consumes time, effort, or capital without creating direct customer value.

### The 8 Wastes of Software Product Development (TIMWOODS):
1. **Partially Done Work (Inventory Waste)**:
   - Unmerged code branches, untested user stories, specifications written 6 months ago sitting in Jira. 
   - *Why it is toxic*: Partially done work ties up capital, decays in relevance, causes merge conflicts, and delivers \$0 in customer value until deployed.
2. **Extra Features ('Gold Plating' / Over-Production)**:
   - Building complex edge-case configurations, speculative settings, or bells and whistles that customers never asked for and rarely touch.
   - *Industry Reality*: Analytics consistently prove that 64% of features in enterprise software are rarely or never used!
3. **Re-Learning (Knowledge Waste)**:
   - Forgetting knowledge due to delayed feedback loops, poor documentation, or siloed handoffs, forcing engineers to research and solve the exact same technical problem twice.
4. **Handoffs (Motion & Transportation Waste)**:
   - Passing artifacts across organizational boundaries (e.g. PO passes spec to BA, BA to UX, UX to Architect, Architect to Dev, Dev to QA, QA to Ops).
   - *The Law of Handoffs*: Every human handoff loses approximately 50% of tacit context, nuances, and customer empathy.
5. **Delays (Waiting Waste)**:
   - Developers waiting for user story clarification, pull request reviews, API access keys, test environments, or executive sign-offs.
6. **Task Switching / Context Switching (Over-Processing)**:
   - Assigning developers to 3 or 4 simultaneous projects. 
   - *Psychological Fact*: Gerald Weinberg's research proves that multitasking across 3 projects wastes **40% of cognitive capacity purely on context switching**!
7. **Defects & Rework (Correction Waste)**:
   - Escape defects that slip through to production, requiring emergency firefighting, customer support escalations, and patch releases. Rework costs 10x to 100x more than building quality in up front.
8. **Underutilized Human Potential (Skills Waste)**:
   - Treating software engineers, designers, and QA as mechanical ticket-executors rather than tapping their creativity for customer discovery, architectural innovation, and problem-solving.`,
      frameworkOrTemplate: `### Software Waste Elimination Matrix

| Lean Waste | Observable Symptom in Software Teams | Concrete PO Remediation Strategy |
|---|---|---|
| **Partially Done Work** | 25 stories marked 'In Progress' on Jira board | Enforce strict WIP limits: cap In-Progress at (Developers - 1). |
| **Extra Features** | 45% of platform features show zero monthly clicks | Implement continuous discovery, painted door tests, and feature sunsetting. |
| **Handoffs** | 'I coded the backend; it's QA's problem to test it' | Cross-functional feature teams with a unified Definition of Done. |
| **Delays / Queues** | Pull requests sit waiting for review for 5 days | Establish a team working agreement: PR reviews within 4 hours. |
| **Task Switching** | Engineers attending 5 different daily standups | Dedicate teams 100% to a single Product Goal for the sprint. |
| **Defects & Rework** | 30% of sprint capacity burned on regression bugs | Shift-left QA: write automated acceptance tests in BDD before coding. |
| **Underutilized Talent**| Developers asking: 'Why are we building this?' | Bring developers to weekly customer interviews and empathy mapping. |`,
      realWorldExample: `### Enterprise Media Case Study: The Cost of Context Switching

**The Chaos:**
At a digital publishing company, 8 senior engineers were each split across 4 different digital publication projects simultaneously to 'maximize billable utilization'. 
Management boasted that resource utilization was 98%. 
However, average feature cycle time dragged out to **12 weeks**, deadlines were consistently missed, and developer turnover reached 40% due to burnout.

**The PO's Experiment:**
The newly hired PO halted the multitasking madness. 
For Sprint 12, the PO negotiated with executive sponsors to assign all 8 engineers exclusively to a single high-priority initiative: *'Automated Paywall Conversion Engine'*.
- Standup overhead dropped from 4 meetings a day to 1.
- Developers paired, swarmed, and resolved architectural roadblocks in real time.

**The Result:**
The paywall engine was built, tested, and released to production in **11 days** instead of 12 weeks! 
By eliminating the waste of task switching, team throughput effectively quadrupled, and paywall subscription conversion jumped by 32% within 3 weeks.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you identify and eliminate waste in your team's day-to-day software delivery lifecycle?"
- **The Senior PO Answer:**
  > "I systematically inspect our delivery lifecycle using the Lean software wastes (Muda), focusing on the three most destructive culprits: Partially Done Work, Task Switching, and Extra Features.
  > 
  > First, to eliminate **Partially Done Work**, I look at our Kanban board. If 6 developers have 14 tickets in progress, we don't have high productivity; we have high queue traffic. I establish strict WIP limits to force a culture of *'Stop starting, start finishing'*, pairing developers to swarm on active stories.
  > 
  > Second, to eliminate **Task Switching**, I fiercely protect the Sprint Goal. I shield the team from ad-hoc mid-sprint interruptions and ensure engineers are dedicated to one product goal at a time rather than split across multiple competing initiatives.
  > 
  > Third, to eliminate **Extra Features**, I ensure we never build speculative functionality without customer validation. We build thin vertical MVPs, instrument feature analytics, and inspect behavioral data before building subsequent enhancements. 
  > 
  > By removing these three wastes, our delivery lead time compresses dramatically without working overtime."`,
      antiPatternsToAvoid: `1. **The 100% Utilization Fallacy**: Believing that keeping developers 100% busy every minute of the day maximizes delivery. Queueing theory shows that at 100% capacity utilization, wait times approach infinity.
2. **Hoarding Inactive Features**: Refusing to deprecate or delete legacy features that consume maintenance overhead but deliver zero user value.`,
      actionChecklist: [
        "Conduct a 'Waste Walk' on your team's Jira board: Identify any tickets that have been in progress for more than 7 days.",
        "Audit feature usage in production: Identify at least one unused feature candidate for deprecation."
      ]
    },
    {
      id: "sub-6-4",
      title: "6.4 Designing the Future State & Continuous Value Flow",
      concept: `Once the Current State Value Stream is documented and the primary constraints and wastes are exposed, the Product Owner, Scrum Master/Agile Coach, and Technical Architect design the **Future State Value Stream**.

The Future State is not an abstract utopian dream; it is an actionable engineering and operational blueprint designed to achieve **Continuous Value Flow**.

### Core Lean Principles for Designing the Future State:
1. **Goldratt's Theory of Constraints (TOC)**:
   - *Core Law*: Any improvement made anywhere other than the primary system constraint is an illusion!
   - If your bottleneck is manual Change Advisory Board (CAB) approval, speeding up developer coding or adding automated linters will NOT increase overall throughput by even one minute. Focus all organizational leverage on the primary constraint until it breaks.
2. **Shift-Left Quality & Security**:
   - Move testing, performance validation, and security compliance from an end-of-quarter gate into the continuous integration pipeline (automated unit tests, BDD acceptance suites, and static vulnerability scans run on every pull request).
3. **Decouple Deployment from Release**:
   - Separate the technical act of deploying code to production from the business act of releasing capabilities to customers.
   - Utilize **Feature Flags (Toggles)**, **Canary Deployments**, and **Dark Launches**. Developers deploy code to production continuously multiple times a day; the Product Owner toggles the feature on for customer cohorts when business criteria are met.
4. **Radical Batch Size Reduction**:
   - Cut user story size in half. Small batches move through queues with near-zero friction, dramatically reduce merge conflicts, and provide immediate empirical learning.`,
      frameworkOrTemplate: `### Current State vs Future State Value Stream Transformation Matrix

\`\`\`
[CURRENT STATE (Fragmented, Batch & Queue)]:
Lead Time: 45 Days | Processing Time: 5 Days | Flow Efficiency: 11.1%
Release Cadence: Quarterly Batches (50 Stories) | Architecture: Monolithic Spaghetti | QA: Manual End-of-Cycle
                                      │
                                      ▼ [APPLY LEAN FLOW ENABLERS]
[FUTURE STATE TARGET (Continuous Flow)]:
Lead Time: 2 Days  | Processing Time: 1.5 Days | Flow Efficiency: 75.0%
Release Cadence: Daily On-Demand via Feature Flags | Architecture: Decoupled Domain Microservices | QA: Automated Shift-Left BDD
\`\`\`

### The 4 Step Future-State Implementation Roadmap:
1. **Tackle the Immediate Constraint**: Automate the single longest wait queue identified in the current state VSM.
2. **Institute WIP Limits**: Prevent work from entering the system faster than downstream stages can pull it.
3. **Deploy Feature Flag Infrastructure**: Enable continuous production deployment without premature exposure.
4. **Continuous Kaizen**: Re-map the value stream quarterly to identify the new emerging bottleneck.`,
      realWorldExample: `### Enterprise FinTech Future State: From Quarterly Releases to 14-Minute Deploys

**The Baseline (Current State):**
A European payment processor operated on a 12-week release cadence. 
Every release required a 3-week code freeze, a 48-hour weekend deployment marathon, and a team of 15 manual QA testers executing 2,000 Excel test cases. 
Emergency rollback rates were 28%, costing \$1.2M in annual downtime penalties.

**The Future State Blueprint:**
The PO and Lead Architect formulated a 6-month value stream modernization initiative:
1. **Enabler Epics**: Allocated 25% of team capacity for 3 PIs to build automated CI/CD pipelines and BDD regression suites.
2. **Feature Flags**: Integrated LaunchDarkly to decouple deployment from release.
3. **Micro-Slicing**: User stories were constrained to a maximum of 3 story points.

**The Transformation:**
- Total Lead Time dropped from **84 days to 14 minutes**!
- Deployment frequency increased from 4 times a year to **18 automated deployments per day**.
- Production defect rollbacks plummeted from 28% to **0.2%**, freeing up 800 hours of developer capacity per quarter for new customer value creation.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you apply Goldratt's Theory of Constraints when optimizing a product development lifecycle?"
- **The Senior PO Answer:**
  > "Eliyahu Goldratt's Theory of Constraints states that in any complex system, there is at any given moment **exactly one bottleneck or constraint** that dictates the throughput of the entire system.
  > 
  > A common failure of inexperienced managers is trying to improve everything at once—they buy new AI coding tools for developers, run retrospectives on sprint estimates, and hire more designers. But if the team's primary constraint is a 3-week manual regression testing cycle before release, making developers code faster just piles up more unreleased code in front of the testing bottleneck, increasing work in progress and chaos!
  > 
  > My methodology follows Goldratt's 5 Focusing Steps:
  > 1. **Identify the Constraint**: Use Value Stream Mapping to locate where work piles up in queues.
  > 2. **Exploit the Constraint**: Make sure the constraint never sits idle (e.g. keep QA unblocked).
  > 3. **Subordinate Everything Else**: Align all other steps to the capacity of the constraint.
  > 4. **Elevate the Constraint**: Invest engineering capacity to break it—such as automating regression test suites.
  > 5. **Repeat**: Once that bottleneck is broken, find the next constraint. This is how you achieve sustainable 10x delivery improvements."`,
      antiPatternsToAvoid: `1. **The 2-Year Total Rewrite Fantasy**: Attempting to reach the future state by halting all feature delivery for 2 years to rebuild the entire platform from scratch. Modernize incrementally using the Strangler Fig pattern.
2. **Ignoring Organizational Policy Constraints**: Automating technical pipelines while leaving obsolete governance policies (like a manual monthly executive approval board) in place.`,
      actionChecklist: [
        "Identify the primary constraint currently capping your team's value throughput.",
        "Formulate an enabler hypothesis in your backlog to elevate or automate that specific constraint."
      ]
    }
  ],
  assessment: [
    {
      id: "q6_1",
      question: "What is the formula for calculating Flow Efficiency (Activity Ratio) in Value Stream Mapping?",
      options: [
        "Total Story Points divided by Velocity",
        "Total Processing Time (Touch Time) divided by Total Lead Time multiplied by 100",
        "Total Budget divided by Headcount",
        "Defect Count divided by Test Cases"
      ],
      answer: 1,
      explanation: "Flow Efficiency measures what percentage of total elapsed calendar time was actively spent adding customer value: (Processing Time / Total Lead Time) * 100."
    },
    {
      id: "q6_2",
      question: "In typical enterprise software organizations prior to Lean optimization, what is the average Flow Efficiency?",
      options: [
        "Between 2% and 10% (meaning 90% to 98% of total time is spent waiting in queues and handoffs)",
        "Exactly 100%",
        "Between 70% and 85%",
        "Flow Efficiency cannot be measured in software"
      ],
      answer: 0,
      explanation: "Empirical research shows that in non-optimized enterprises, flow efficiency is often below 10%, with the vast majority of lead time lost to queue delays and handoffs."
    },
    {
      id: "q6_3",
      question: "What is the difference between an Operational Value Stream (OVS) and a Development Value Stream (DVS)?",
      options: [
        "Operational Value Streams are built by marketing; Development Value Streams are built by HR",
        "Operational Value Streams deliver products directly to end customers; Development Value Streams build the digital software solutions that support those operational streams",
        "There is no difference; they are exact synonyms",
        "Development Value Streams apply only to hardware"
      ],
      answer: 1,
      explanation: "Operational Value Streams represent the end-to-end steps customers experience, while Development Value Streams develop and support the technology that powers them."
    },
    {
      id: "q6_4",
      question: "Which of the following represents 'Partially Done Work' waste in software development?",
      options: [
        "Features that were deployed and tested 6 months ago",
        "Unmerged feature branches, untested user stories, and specs waiting in queues that tie up investment without delivering value",
        "Customer invoices that were paid on time",
        "Unit tests that pass automatically"
      ],
      answer: 1,
      explanation: "Partially done work is inventory waste that carries high risk of obsolescence and merge conflicts without generating any customer value."
    },
    {
      id: "q6_5",
      question: "According to the Theory of Constraints (Goldratt) in Value Stream Mapping, where should optimization efforts be concentrated?",
      options: [
        "Equally across all steps in the process simultaneously",
        "Exclusively on the single largest bottleneck or constraint in the system, because optimizations anywhere else are an illusion",
        "Only on typing speed of developers",
        "On making meetings longer"
      ],
      answer: 1,
      explanation: "The Theory of Constraints proves that any improvement made outside the primary bottleneck will not increase overall system throughput."
    }
  ]
};
