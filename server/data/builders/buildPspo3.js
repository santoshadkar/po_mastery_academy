// Comprehensive Question Pool & Exam Builder for PSPO III (Scrum.org Replica)
// Format: 35 Questions (Mix of Multiple-Choice, Multi-Select, True/False, and Written/Essay) in 120 Minutes (85% Passing Score)

const pspo3ObjectivePool = [
  // Complex Empirical Strategy & Governance
  {
    domain: "Empirical Product Leadership",
    type: "single",
    text: "You lead product management for a SaaS platform. The Executive Committee demands a fixed 3-year feature delivery commitment with guaranteed dates before releasing the \$10M annual budget. How should an expert Product Owner steer the committee toward empirical governance?",
    options: [
      "Agree to the 3-year plan and secretly inflate all story point estimates by 300%",
      "Acknowledge the legitimate need for fiscal governance; propose an Empirical Milestone Funding model (funding in quarterly tranches tied to EBM intermediate outcome metrics) rather than upfront fixed-scope bets in a complex domain",
      "Refuse to speak to the Executive Committee until they read the Scrum Guide",
      "Ask the Scrum Master to take the meeting instead"
    ],
    correctAnswers: [1],
    explanation: "Empirical funding structures capital allocation around outcome milestones and validated customer value (EBM Intermediate Goals), replacing unvalidated 3-year predictive guesses while maintaining board-level financial transparency.",
    references: "Scrum.org PSPO III - Empirical Portfolio Management"
  },
  {
    domain: "Empirical Product Leadership",
    type: "multiple",
    text: "Which of the following principles characterize an expert Product Owner operating at the 'Entrepreneur' or 'Strategic Leader' stance? (Select two)",
    options: [
      "Holds complete ownership over product P&L, commercial viability, and business model generation",
      "Defines strategic goals anchored to customer outcome metrics rather than feature output tickets",
      "Writes every single Jira sub-task and monitors developers' daily clock-in hours",
      "Refuses to attend Sprint Reviews because they only care about marketing",
      "Forces Developers to work from a hidden secret backlog"
    ],
    correctAnswers: [0, 1],
    explanation: "At the highest level of Product Ownership (PSPO III), the PO operates as an entrepreneur: accountable for P&L, strategic direction, and real-world value maximization rather than clerical ticket management.",
    references: "Scrum.org - The 8 Stances of a Product Owner"
  },
  {
    domain: "Empirical Product Leadership",
    type: "true_false",
    text: "True or False: In a complex, competitive market, the Product Owner should view the Product Goal as an unchangeable legal contract that can never be abandoned.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. In complex environments, market shifts, competitor innovations, or customer invalidation can render a Product Goal obsolete. If this occurs, the Product Owner must have the courage to pivot or abandon the goal.",
    references: "Scrum Guide 2020 - Product Goal"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "A Product Owner observes that despite shipping 25 new features last quarter, monthly active user retention has dropped by 8% and customer support escalations rose by 40%. Which conclusion demonstrates advanced EBM diagnostic acumen?",
    options: [
      "The engineering team needs to work 20% faster to build 35 features next quarter",
      "The team has fallen into the 'Feature Factory' trap—delivering output rather than value, while degrading Ability to Innovate (A2I) and customer Current Value (CV)",
      "The Product Owner should delete the issue tracker",
      "Retention is a vanity metric that should be ignored"
    ],
    correctAnswers: [1],
    explanation: "Building high feature volume while retention drops proves that output does not equal value. High defect escalations also indicate degraded A2I, hurting long-term sustainability.",
    references: "EBM Guide - Feature Factory Anti-Pattern"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "multiple",
    text: "When balancing investment across the 4 Key Value Areas (KVAs), which actions effectively increase an organization's Ability to Innovate (A2I)? (Select two)",
    options: [
      "Investing capacity into automated continuous integration and test harness infrastructure to reduce defect regression rates",
      "Migrating legacy monolithic spaghetti code into decoupled modular services to reduce maintenance drag",
      "Adding 4 extra layers of approval gates before code can be written",
      "Demanding that developers double their story point velocity every sprint",
      "Stopping all customer discovery interviews"
    ],
    correctAnswers: [0, 1],
    explanation: "A2I is directly improved by eliminating architectural rot, automating regression test suites, and modernizing toolchains so that developers spend capacity on innovation rather than maintenance.",
    references: "EBM Guide - Ability to Innovate"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "true_false",
    text: "True or False: Unrealized Value (UV) decreases as a product successfully captures available market share and satisfies unmet customer needs.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. UV represents the remaining potential future value in the market. As the product satisfies unmet needs and captures market share, that gap narrows, reducing remaining UV.",
    references: "EBM Guide - Unrealized Value"
  },
  {
    domain: "Multi-Team Scaling & Enterprise Alignment",
    type: "single",
    text: "Twelve Scrum Teams are building a global logistics suite. Three teams report that they cannot release their increment because they are waiting on an API being built by a fourth team. How should an expert Product Owner resolve this dependency bottleneck structurally?",
    options: [
      "Hire 6 more project managers to create dependency coordination spreadsheets",
      "Champion reorganizing teams into end-to-end, cross-functional Feature Teams aligned to customer value streams, enabling each team to build and deliver vertical slices without external handoffs",
      "Cancel the project",
      "Delay all deployments until the end of the calendar year"
    ],
    correctAnswers: [1],
    explanation: "Cross-component dependencies are structural organizational design flaws. Transitioning to cross-functional feature teams aligns teams to customer journeys, drastically cutting dependency queues.",
    references: "Nexus Guide & LeSS - Cross-Functional Feature Teams"
  },
  {
    domain: "Multi-Team Scaling & Enterprise Alignment",
    type: "single",
    text: "In a scaled environment with 8 Scrum Teams sharing ONE Product Backlog, who is accountable for prioritizing and ordering the items?",
    options: [
      "A council of 8 separate Product Owners who vote on priorities",
      "The single Product Owner for the product, who may collaborate with stakeholders and teams but retains sole accountability for backlog ordering",
      "The Chief Scrum Master",
      "The Engineering Director"
    ],
    correctAnswers: [1],
    explanation: "One product has ONE Product Backlog and ONE Product Owner. While refinement can be distributed collaboratively, single accountability remains with the Product Owner.",
    references: "Scrum Guide 2020 & Nexus Guide - Single Product Owner"
  },
  {
    domain: "Multi-Team Scaling & Enterprise Alignment",
    type: "true_false",
    text: "True or False: If two Scrum Teams working on the same product have different Definitions of Done, the combined Increment must still satisfy the least restrictive definition.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. In multi-team environments, if team definitions differ, the combined Increment must satisfy the MOST restrictive, highest-quality Definition of Done across the teams.",
    references: "Scrum Guide 2020 - Definition of Done & Multi-Team"
  },
  {
    domain: "Multi-Team Scaling & Enterprise Alignment",
    type: "multiple",
    text: "Which of the following are primary dysfunctions of having separate 'Component Teams' (e.g. DBA Team, Middleware Team, Frontend Team)? (Select two)",
    options: [
      "Massive cross-team handoffs and waiting times that destroy Flow Efficiency and delay customer feedback",
      "Lack of shared ownership of end-to-end customer value, leading to local optimization and finger-pointing",
      "Teams deliver too much customer value too quickly",
      "Developers become too knowledgeable about customer business problems",
      "Component teams make it impossible to write unit tests"
    ],
    correctAnswers: [0, 1],
    explanation: "Component teams optimize locally for technical silos, creating handoffs, queues, and fragmented value delivery. Feature teams optimize globally for customer value.",
    references: "Large-Scale Scrum (LeSS) - Component vs Feature Teams"
  },
  {
    domain: "Stakeholder Politics & Negotiation",
    type: "single",
    text: "A prominent enterprise client accounting for 25% of annual revenue demands a proprietary custom feature within 3 weeks, threatening to churn if not delivered. The feature contradicts the core Product Goal. How should an advanced Product Owner handle this high-stakes negotiation?",
    options: [
      "Immediately acquiesce and disrupt the Scrum Team's Sprint Goal to protect the revenue at all costs",
      "Discover the client's underlying business outcome and root problem; negotiate a generalizable product capability that solves their problem while preserving the Product Goal and offering value to the broader market",
      "Tell the client to leave because Scrum teams don't take orders from customers",
      "Resign from the company"
    ],
    correctAnswers: [1],
    explanation: "Expert Product Owners distinguish between customer 'solutions' (which are often bespoke) and underlying 'problems'. By uncovering the root problem, the PO crafts generalizable value.",
    references: "PSPO III - High-Stakes Stakeholder Negotiation"
  },
  {
    domain: "Stakeholder Politics & Negotiation",
    type: "true_false",
    text: "True or False: Saying 'No' to a powerful stakeholder should always be accompanied by transparent empirical data, trade-off analysis, and alignment to the shared Product Goal.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [0],
    explanation: "True. Professional Product Owners say 'no' constructively by demonstrating Opportunity Cost, Cost of Delay, and alignment with the overarching Product Goal.",
    references: "Professional Scrum Product Owner - The Art of Saying No"
  },
  {
    domain: "Product Economics & Business Strategy",
    type: "single",
    text: "When evaluating two competing initiatives, Initiative A costs \$100k with a Cost of Delay (CoD) of \$50k/month, while Initiative B costs \$500k with a CoD of \$100k/month. Using the WSJF (Weighted Shortest Job First) economic model, which should be executed first?",
    options: [
      "Initiative A, because its WSJF score (0.50) is higher than Initiative B (0.20), delivering higher economic return relative to job size",
      "Initiative B, because \$100k/month is a bigger absolute number than \$50k/month",
      "Build both in parallel at 50% capacity",
      "Neither; invest in cryptocurrency"
    ],
    correctAnswers: [0],
    explanation: "WSJF = Cost of Delay / Duration (or Size). Initiative A: 50k / 100k = 0.50. Initiative B: 100k / 500k = 0.20. Initiative A delivers higher value per unit of capacity, minimizing total economic cost of delay.",
    references: "Reinertsen - Principles of Product Development Flow & WSJF"
  },
  {
    domain: "Product Economics & Business Strategy",
    type: "multiple",
    text: "Which of the following are leading indicators of impending product stagnation or churn? (Select two)",
    options: [
      "Decline in daily active user workflow completion rates and core feature engagement depth",
      "Increase in Customer Acquisition Cost (CAC) combined with increasing payback period months",
      "High test automation coverage in CI/CD pipelines",
      "Clean adherence to the Definition of Done",
      "Zero regression bugs in staging"
    ],
    correctAnswers: [0, 1],
    explanation: "Drop in engagement depth and worsening unit economics (rising CAC and longer payback) are critical leading indicators of churn and declining Product-Market Fit.",
    references: "Product Analytics & SaaS Unit Economics"
  },
  {
    domain: "Technical Debt & Quality Strategy",
    type: "single",
    text: "A Scrum Team's velocity has slowed down by 50% over the last year. Developers explain that every new change breaks 10 older modules due to tightly coupled spaghetti architecture. What is the Product Owner's ethical accountability?",
    options: [
      "Replace all developers with cheaper contractors",
      "Acknowledge that technical health is an essential enabler of business agility; dedicate substantial sprint capacity to decoupling architecture and strengthening the Definition of Done",
      "Ban developers from speaking about architecture during Sprint Reviews",
      "Demand that developers stop using Git"
    ],
    correctAnswers: [1],
    explanation: "Sustainable development is an ethical pillar of agile product leadership. Neglecting architecture for short-term features destroys velocity and enterprise value.",
    references: "Agile Manifesto Principle 8 & PSPO III Quality Governance"
  },
  {
    domain: "Technical Debt & Quality Strategy",
    type: "true_false",
    text: "True or False: Technical debt is exclusively a technical problem that software engineers must solve in secret without involving the Product Owner.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. Technical debt is business debt: it directly degrades Time to Market, increases cost of change, and inflates customer defect rates. The PO must actively manage it in the Product Backlog.",
    references: "Scrum.org - Technical Debt as Product Debt"
  },
  {
    domain: "Empirical Product Leadership",
    type: "single",
    text: "What distinguishes a 'Feature Factory' from an outcome-driven product organization?",
    options: [
      "A feature factory measures success by the quantity of tickets and features delivered; an outcome-driven organization measures success by changes in customer behavior and business impact achieved",
      "A feature factory uses Scrum; an outcome-driven organization uses Kanban",
      "Feature factories do not have developers",
      "Feature factories only build mobile apps"
    ],
    correctAnswers: [0],
    explanation: "John Cutler's 'Feature Factory' focuses on throughput of features (output) rather than validating whether those features solved problems or generated ROI (outcomes).",
    references: "12 Signs You're Working in a Feature Factory - John Cutler"
  },
  {
    domain: "Empirical Product Leadership",
    type: "multiple",
    text: "Which of the following are essential elements of Teresa Torres' Continuous Discovery framework for Product Owners? (Select two)",
    options: [
      "Conducting weekly touchpoints with actual end users to discover unmet needs, friction points, and opportunities",
      "Structuring experiments around Opportunity Solution Trees to test assumptions before writing production code",
      "Conducting customer research once every 3 years via external market research firms",
      "Building every solution that any user mentions during a call",
      "Outsourcing product strategy to sales representatives"
    ],
    correctAnswers: [0, 1],
    explanation: "Continuous Discovery habits mandate regular customer engagement (at least weekly) and systematic assumption testing via Opportunity Solution Trees.",
    references: "Continuous Discovery Habits - Teresa Torres"
  },
  {
    domain: "Product Economics & Business Strategy",
    type: "true_false",
    text: "True or False: In a complex product domain, having a 100% accurate 12-month Gantt chart is a reliable indicator of product success.",
    options: [
      "True",
      "False"
    ],
    correctAnswers: [1],
    explanation: "False. In complex environments, a fixed 12-month Gantt chart is an illusion of control. Conforming to an obsolete plan when market conditions shift leads to building the wrong product efficiently.",
    references: "Scrum Guide 2020 & Agile Manifesto - Responding to Change"
  },
  {
    domain: "Stakeholder Politics & Negotiation",
    type: "single",
    text: "How should an expert Product Owner handle a scenario where executive management directly dictates the software architecture and database technologies to the Developers?",
    options: [
      "Support the executives and order Developers to comply without question",
      "Advocate for the self-managing boundaries of the Scrum Team: executives define business outcomes and strategic goals, while Developers are self-managing regarding HOW to architect and build the Increment",
      "Quit immediately and leak the code to competitors",
      "Hold a public protest outside the company headquarters"
    ],
    correctAnswers: [1],
    explanation: "Scrum respects clear accountabilities: Product Owners define What/Why, Developers define How. Executive micromanagement of architecture disempowers engineering teams and destroys self-management.",
    references: "Scrum Guide 2020 - Self-Managing Teams"
  },
  {
    domain: "Empirical Product Leadership",
    type: "single",
    text: "An executive VP asks the Product Owner to suppress bad news about a high-profile feature that failed customer A/B tests. How does an authentic Scrum Product Owner uphold the Scrum values?",
    options: [
      "Demonstrate Courage and Openness by presenting the empirical test results transparently, explaining what was learned and recommending the strategic pivot",
      "Hide the test results and pretend the feature was a massive success",
      "Blame the marketing team for poor user recruitment",
      "Resign without explanation"
    ],
    correctAnswers: [0],
    explanation: "Courage and Openness require product leaders to inspect reality honestly. Empirical product ownership relies on transparency of both successes and failures.",
    references: "Scrum Guide 2020 - Scrum Values"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "Which of the following scenarios describes an optimal balance of EBM investment for a product with high market competition?",
    options: [
      "Investing 100% of capacity into feature velocity while ignoring defect rates",
      "Investing balanced capacity between delivering Current Value, capturing Unrealized Value, optimizing Time to Market (T2M), and sustaining Ability to Innovate (A2I)",
      "Spending all budget on marketing with zero software engineering",
      "Freezing all releases for two years to write documentation"
    ],
    correctAnswers: [1],
    explanation: "Sustainable enterprise agility requires holistic stewardship across all 4 KVAs: neglecting A2I or T2M for short-term CV leads to rapid obsolescence.",
    references: "EBM Guide - Balancing KVAs"
  },
  {
    domain: "Multi-Team Scaling & Enterprise Alignment",
    type: "single",
    text: "When 10 Scrum Teams work on a shared product, how should the single Product Owner handle Product Backlog refinement across all teams?",
    options: [
      "Attend every minute of all 10 refinement meetings individually, working 100 hours a week",
      "Collaborate with team representatives, delegate tactical breakdown to Developers, and empower teams to refine items while retaining sole accountability for order and Product Goal alignment",
      "Appoint 10 separate autonomous Product Owners with no coordination",
      "Eliminate backlog refinement completely"
    ],
    correctAnswers: [1],
    explanation: "The Scrum Guide allows the Product Owner to delegate refinement tasks to Developers while retaining ultimate accountability for the backlog.",
    references: "Scrum Guide 2020 - The Product Owner"
  },
  {
    domain: "Product Economics & Business Strategy",
    type: "single",
    text: "What is the primary flaw of using Cost-Benefit Analysis based strictly on Net Present Value (NPV) for early-stage speculative software products?",
    options: [
      "NPV assumes predictable future cash flows and low variance, which completely breaks down in complex, highly uncertain discovery domains",
      "NPV requires too much math for software teams",
      "NPV is illegal in software organizations",
      "NPV cannot be computed in US dollars"
    ],
    correctAnswers: [0],
    explanation: "Predictive financial models like NPV assume certainty. In complex product development, real options theory and empirical hypothesis testing provide much more realistic risk governance.",
    references: "Principles of Product Development Flow - Donald Reinertsen"
  },
  {
    domain: "Stakeholder Politics & Negotiation",
    type: "single",
    text: "Two senior stakeholders disagree on whether to build a mobile app or a desktop web experience. What empirical technique should the Product Owner propose?",
    options: [
      "Decide based on whoever has worked at the company longest",
      "Deploy small landing page painted-door experiments and review mobile vs desktop customer traffic telemetry to ground the decision in verified user behavior",
      "Build both full native versions simultaneously at twice the cost",
      "Flip a coin during the Sprint Review"
    ],
    correctAnswers: [1],
    explanation: "Empirical Product Owners replace stakeholder opinion wars with objective customer experiments and usage telemetry.",
    references: "Professional Scrum Product Owner - Data-Driven Decisions"
  },
  {
    domain: "Technical Debt & Quality Strategy",
    type: "single",
    text: "What is the relationship between the Definition of Done and organizational business risk?",
    options: [
      "A weak Definition of Done increases enterprise risk by accumulating hidden defects, technical debt, security liabilities, and deferred integration costs",
      "The Definition of Done has no relationship to business risk",
      "A strict Definition of Done slows down long-term delivery permanently",
      "The Definition of Done is only used for developer promotions"
    ],
    correctAnswers: [0],
    explanation: "The Definition of Done is the organization's primary quality contract. A weak DoD incurs massive downstream business risk and deferred maintenance liabilities.",
    references: "Scrum Guide 2020 - Definition of Done"
  },
  {
    domain: "Empirical Product Leadership",
    type: "single",
    text: "When an organization transitions from project-centric delivery (outputs, deadlines, budgets) to product-centric delivery (outcomes, value, continuous delivery), what changes for the Product Owner?",
    options: [
      "The PO shifts from managing scope checklists to steering ongoing business value, maximizing ROI, and cultivating long-term customer relationships",
      "The PO only updates Jira tickets",
      "The PO works fewer hours",
      "The PO stops collaborating with developers"
    ],
    correctAnswers: [0],
    explanation: "Project-to-product transformation shifts focus from transient temporary delivery to long-term lifecycle value maximization, customer outcomes, and unit economics.",
    references: "Project to Product - Mik Kersten"
  },
  {
    domain: "Evidence-Based Management (EBM)",
    type: "single",
    text: "What does an organization's 'On-Product Index' measure in EBM?",
    options: [
      "The percentage of total engineering capacity spent working on direct product improvements versus operational firefighting and administrative meetings",
      "The price of the product on Amazon",
      "The number of stickers on developer laptops",
      "The weight of the product packaging"
    ],
    correctAnswers: [0],
    explanation: "On-Product Index measures how much capacity is invested directly into delivering new product value versus non-value-adding overhead, a key indicator of Ability to Innovate.",
    references: "EBM Guide - Ability to Innovate Metrics"
  },
  {
    domain: "Multi-Team Scaling & Enterprise Alignment",
    type: "single",
    text: "In a scaled Nexus development effort, when is a Refinement event considered effective?",
    options: [
      "When cross-team dependencies are identified, made transparent, and decomposed so that teams can plan future sprints with minimal blocking handoffs",
      "When every single developer has spoken for exactly 5 minutes",
      "When 500 new stories are approved by the Scrum Master",
      "When the meeting runs over time by 3 hours"
    ],
    correctAnswers: [0],
    explanation: "Nexus Refinement exists to identify and eliminate cross-team dependencies in the Product Backlog before Sprint Planning.",
    references: "Nexus Guide - Nexus Backlog Refinement"
  },
  {
    domain: "Product Economics & Business Strategy",
    type: "single",
    text: "A Product Owner conducts a customer cohort analysis and observes that while Monthly Recurring Revenue (MRR) is growing, Net Revenue Retention (NRR) is only 82%. What does this signify?",
    options: [
      "The product is expanding rapidly and has zero churn",
      "Existing customers are contracting or churning faster than they expand, masking underlying product retention issues with new customer acquisition",
      "The development team has achieved perfect flow efficiency",
      "The Scrum Master should cancel Sprint Retrospectives"
    ],
    correctAnswers: [1],
    explanation: "An NRR below 100% indicates that the business is losing revenue from its installed base, a classic warning sign of customer dissatisfaction and poor Product-Market Fit.",
    references: "SaaS Metrics for Product Owners - NRR"
  }
];

// Rich Pool of PSPO III Written / Essay Strategic Case Dilemmas
const pspo3EssayPool = [
  {
    domain: "Strategic Governance & Venture Funding",
    text: "Strategic Case Dilemma 1: Transitioning the Board from Fixed-Budgeting to Empirical Venture Funding.\n\nYou are the Product Owner of a core enterprise SaaS solution. The company has historically operated under annual fixed-scope budgeting. The Board of Directors demands a 2-year feature roadmap with guaranteed delivery dates before releasing next year's $4M budget. How do you, as an expert Product Owner, address the Board to transition them toward empirical, outcome-based funding while maintaining governance and stakeholder trust?",
    rubric: {
      keyPoints: [
        "Acknowledge the Board's legitimate need for fiscal governance, predictability, and return on investment.",
        "Articulate the fundamental flaw of 2-year fixed roadmaps in complex domains (Cone of Uncertainty, market volatility, waste of building unvalidated features).",
        "Propose Incremental / Venture-style Milestone Funding tied to EBM (Evidence-Based Management) Intermediate Goals rather than upfront 2-year blank checks.",
        "Commit to transparent Sprint Reviews, continuous delivery of working increments, and objective KVA metrics (Current Value & Unrealized Value).",
        "Offer an initial 3-month funding tranche with concrete empirical milestones to prove value delivery."
      ],
      modelAnswer: "I would begin by validating the Board's need for fiscal governance: leadership is seeking assurance that $4M will yield positive commercial returns. However, committing to a 2-year fixed-scope roadmap in complex software introduces catastrophic risk by locking the organization into unvalidated assumptions while market conditions shift.\n\nI would propose an Empirical Milestone Funding model inspired by venture capital and EBM:\n1. Strategic Goal Alignment: Define the 2-year strategic vision and target North Star metrics (e.g. increase enterprise retention by 35%, capture $15M in new ARR).\n2. Tranche Funding based on Intermediate Goals: Instead of releasing $4M upfront, fund an initial 3-month discovery and execution tranche. Success is measured by delivered customer outcomes and EBM indicators (Current Value and Unrealized Value), not lines of code.\n3. Continuous Transparency: Invite Board representatives to quarterly Strategic Reviews where working software increments and empirical market adoption data are inspected directly.\n\nThis framework preserves financial accountability, dramatically de-risks capital allocation, and empowers the Scrum Team to pivot rapidly based on validated learning."
    }
  },
  {
    domain: "Scaling & Organizational Architecture",
    text: "Strategic Case Dilemma 2: Re-architecting Multi-Team Silos to Vertical Value Streams.\n\nYou lead product ownership for a product built by 8 Scrum Teams. Each team has developed isolated sub-backlogs and their own definitions of done. Cross-team integration bugs are surfacing 2 months after sprints end, and stakeholders receive conflicting status updates. Describe your comprehensive transformation plan to restore unified product ownership, artifact transparency, and synchronized value delivery.",
    rubric: {
      keyPoints: [
        "Consolidate backlogs into ONE unified Product Backlog with ONE Product Goal and ONE accountable Product Owner (Nexus or LeSS principles).",
        "Establish a single, mutually agreed-upon Definition of Done that includes cross-team continuous integration and automated end-to-end regression testing.",
        "Form a Nexus Integration Team or cross-team architecture guild to address shared dependencies and integration infrastructure.",
        "Align all 8 teams onto a synchronized Sprint cadence with a unified Sprint Review inviting key stakeholders to inspect a single integrated Increment.",
        "Transition component teams into cross-functional feature teams aligned to customer journeys."
      ],
      modelAnswer: "To resolve multi-team fragmentation, I would execute a three-phase alignment plan based on Scrum.org Nexus and Large-Scale Scrum principles:\n\n1. Single Artifact Transparency: Immediately merge the 8 separate backlogs into ONE single Product Backlog. As the single Product Owner, I will establish a unified Product Goal so all 8 teams pull work contributing to a coherent commercial direction. If necessary, I will collaborate with Area POs or technical product leaders to assist in refinement, but single accountability remains with me.\n\n2. Unified Definition of Done & Continuous Integration: Mandate that 'Done' means fully integrated across all 8 teams, passing automated end-to-end tests, security scans, and deployable to staging. Zero unintegrated code may carry over across sprint boundaries. I will champion establishing a Nexus Integration Team to coach and build automated CI/CD pipelines.\n\n3. Synchronized Cadence & Single Sprint Review: Synchronize sprint cycles across all teams. Stakeholders will attend ONE integrated Sprint Review to inspect the single combined increment, ending contradictory reporting and realigning organizational trust."
    }
  },
  {
    domain: "Technical Debt & Sustainable Stewardship",
    text: "Strategic Case Dilemma 3: Resolving Catastrophic Technical Debt under Extreme Sales Pressure.\n\nYour flagship application generates $30M ARR, but system latency has increased by 400%, and the last three releases triggered severe production outages. Lead architects warn that without a 4-month database re-architecture, the system could suffer an unrecoverable crash during Black Friday. However, the VP of Sales has promised 5 major prospective clients that custom reporting features will be delivered in the same timeframe. How do you resolve this critical tension as Product Owner?",
    rubric: {
      keyPoints: [
        "Acknowledge the existential business risk of system downtime during peak commercial revenue periods (Black Friday).",
        "Reject the binary fallacy of 'all features vs 4-month total feature freeze'; reject dedicated refactoring sprints.",
        "Apply the Strangler Fig pattern to refactor and modernize the database architecture incrementally sprint-by-sprint.",
        "Allocate a dedicated capacity budget (e.g. 30-40% of sprint capacity) to architectural resilience, while delivering the highest-value core reporting features.",
        "Facilitate an empirical trade-off workshop with the VP of Sales and Engineering Leads, modeling the catastrophic cost of downtime versus the incremental value of reporting features."
      ],
      modelAnswer: "As Product Owner, I am accountable for maximizing product value over the long term. A catastrophic Black Friday outage would destroy the company's reputation, trigger contract SLAs, and cause customer churn that far outweighs the ARR of the 5 prospective deals.\n\nI will execute the following strategy:\n1. Quantitative Risk Modeling: Partner with architects to translate latency and outage data into financial exposure (e.g., $5M/hour of downtime). Present this to executive leadership and the VP of Sales.\n2. Incremental Modernization (Strangler Fig Pattern): Reject a 4-month feature freeze. Instead, re-architect the database incrementally. Allocate 35-40% of each sprint's capacity to the architecture enablers while using the remaining 60-65% for commercial features.\n3. Collaborative Slicing of Sales Commitments: Work with the VP of Sales to analyze the 5 client requests. Identify the Minimum Marketable Features (MMFs) that satisfy 80% of client requirements with lightweight reporting solutions, deferring complex bespoke customizations until system stability is secured.\n4. Strengthen the Definition of Done: Incorporate automated latency thresholds and load testing into the DoD to ensure stability is continuously validated."
    }
  },
  {
    domain: "Ethical Leadership & Product Sunset",
    text: "Strategic Case Dilemma 4: Navigating Ethical Dilemmas & Strategic Product Sunsetting.\n\nAnalytics reveal that a legacy product module generating $2M annually contains severe security vulnerabilities that would cost $1.8M to remediate. Furthermore, usage telemetry proves that only 4% of active users utilize the module, but that 4% includes the company's oldest enterprise client. As Product Owner, articulate your recommendation to executive management, detailing the transition, ethical considerations, and stakeholder migration strategy.",
    rubric: {
      keyPoints: [
        "Ethical and fiduciary accountability to protect customer data security and eliminate known severe vulnerabilities.",
        "Economic analysis: Spending $1.8M to sustain $2M from 4% of users represents poor capital allocation with near-zero Unrealized Value.",
        "Structured Sunset and Deprecation Plan with clear timeline, transparent communication, and data export tools.",
        "White-glove migration path for the key legacy enterprise client to modern core modules or partner integrations.",
        "Reallocation of engineering capacity toward high-growth product capabilities."
      ],
      modelAnswer: "Maintaining a module with severe security vulnerabilities poses unacceptable compliance, ethical, and legal risks. Economically, spending $1.8M in remediation for $2M in revenue from 4% of users yields negligible returns and prevents investment in high-growth capabilities.\n\nI recommend a structured, empathetic Sunsetting Plan:\n1. Executive Alignment: Secure executive sign-off by demonstrating that continuing to operate the vulnerable module risks brand destruction and regulatory penalties.\n2. White-Glove Migration Strategy: Personally engage the key legacy enterprise client. Present the security rationale transparently, and offer a dedicated migration roadmap to our modern core platform (or custom export connectors), ensuring zero business disruption for their daily operations.\n3. Transparent Deprecation Schedule: Announce a formal 90-day sunset notice to all impacted users, providing automated migration tools, documentation, and dedicated customer support.\n4. Capacity Redeployment: Reallocate the freed-up developer capacity to high-UV strategic initiatives, accelerating the Product Goal."
    }
  },
  {
    domain: "Crisis Leadership & Product Pivot",
    text: "Strategic Case Dilemma 5: Responding to Market Disruption & In-Flight Product Pivot.\n\nMidway through a 6-month product initiative to launch an automated booking tool, a major tech giant announces a free, natively integrated booking assistant that renders 80% of your roadmap obsolete overnight. The development team has completed 3 sprints of work. How do you lead the Scrum Team, manage stakeholder panic, and steer the product pivot using empirical principles?",
    rubric: {
      keyPoints: [
        "Acknowledge the sunk cost fallacy: money and effort already spent on obsolete features cannot justify continuing in the wrong direction.",
        "Evaluate the Sprint Goal and Product Goal: immediately assess whether the active Sprint Goal remains valid or must be cancelled.",
        "Conduct rapid market discovery to identify new unmet customer needs (Unrealized Value) where the competitor is weak (e.g., enterprise compliance, complex niche workflows, deep integration).",
        "Engage stakeholders with transparent, calm leadership, presenting empirical pivot hypotheses rather than defensiveness.",
        "Collaborate with the Scrum Team to formulate a new Product Goal and reformulate the Product Backlog around validated differentiated value."
      ],
      modelAnswer: "When market conditions shift violently, the worst response is to persevere with an obsolete plan due to the Sunk Cost Fallacy. As Product Owner, I will take immediate, decisive action:\n\n1. Inspect Active Sprint: Evaluate whether the current Sprint Goal still delivers usable value. If it builds features that are now totally commoditized, I will exercise my authority to cancel the Sprint and regroup.\n2. Rapid Opportunity Re-Assessment: Analyze the competitor's free solution. Identify their gaps—such as enterprise data privacy, industry-specific compliance (HIPAA/GDPR), or deep CRM integrations. Our new value proposition will focus on these specialized, defensible niches where the tech giant cannot compete effectively.\n3. Stakeholder Communication: Host an emergency Strategic Briefing. Acknowledge the market reality transparently, present the competitive gap analysis, and outline the pivot hypotheses.\n4. Reset Product Goal: In collaboration with the Scrum Team and stakeholders, craft a new Product Goal focused on our differentiated niche. Refine the Product Backlog with lightweight experiment spikes to validate customer demand within 2 Sprints."
    }
  },
  {
    domain: "M&A Product Consolidation",
    text: "Strategic Case Dilemma 6: Merging Competing Product Platforms Post-Acquisition.\n\nFollowing a major acquisition, your company now owns two competing SaaS products serving the healthcare sector. The Board expects a single unified platform within 12 months. Both engineering teams are entrenched in their own legacy tech stacks, and customers on both sides express fear of losing features. How do you lead the product consolidation strategy?",
    rubric: {
      keyPoints: [
        "Anchor consolidation around customer value journeys and JTBD rather than developer tech-stack loyalty.",
        "Establish ONE unified Product Backlog with a single vision and North Star metric.",
        "Conduct feature usage telemetry audits to eliminate unused bloat from both platforms.",
        "Design an evolutionary migration path using public API adapters to protect customer workflows.",
        "Transparently communicate migration milestones and feature parity guarantees to clients."
      ],
      modelAnswer: "Post-merger platform consolidations fail when treated as technical turf wars. I would execute a customer-centric convergence strategy:\n1. Customer Journey Audit: Audit real usage telemetry across both platforms. Identify which features actually drive clinical outcomes and discard unused bloat.\n2. Unified Backlog & Product Goal: Establish ONE unified Product Backlog with a clear Product Goal. Form cross-team discovery groups blending engineers from both legacy products to design the target modern architecture.\n3. API-First Compatibility: Build an API integration layer allowing legacy clients to consume new unified platform services without rewriting their internal integrations.\n4. Transparent Customer Communication: Publish an objective feature-parity transition guide and offer gradual cohort migrations, turning customer anxiety into collaborative partnership."
    }
  },
  {
    domain: "Regulatory Crisis Governance",
    text: "Strategic Case Dilemma 7: Addressing Sudden Regulatory Mandates Threatening Commercial Viability.\n\nA government regulatory body passes an emergency cybersecurity mandate requiring all financial transaction logs to be cryptographically verified and immutable within 45 days, or licenses will be revoked. Your roadmap was dedicated to an enterprise client expansion. How do you lead the team and manage commercial commitments?",
    rubric: {
      keyPoints: [
        "Recognize regulatory compliance as an existential constraint that supersedes commercial feature expansion.",
        "Integrate regulatory requirements directly into the single Product Backlog as top priority.",
        "Update the Definition of Done to enforce cryptographic audit compliance across all transactions.",
        "Proactively engage enterprise clients to communicate why expansion features are temporarily re-sequenced.",
        "Decompose compliance work into vertical sprint increments to achieve verified compliance well before day 45."
      ],
      modelAnswer: "License preservation is prerequisite to commercial viability. I will manage this crisis empirically:\n1. Reprioritize Product Backlog: Immediately position regulatory compliance items at the top of the single Product Backlog. Add cryptographic verification to the Definition of Done.\n2. Slicing Compliance: Break down the regulatory mandate into incremental deliverables, aiming for verified compliance in staging by Day 30 to allow 15 days of audit buffer.\n3. Transparent Client Management: Directly contact enterprise clients awaiting expansion features. Explain the regulatory mandate honestly, demonstrating that our rapid compliance protects their transaction security.\n4. Inspect & Adapt: Review progress at every Sprint Review with compliance officers to eliminate any audit surprises."
    }
  },
  {
    domain: "SaaS Freemium Conversion Strategy",
    text: "Strategic Case Dilemma 8: Overhauling Freemium Conversion While Protecting Organic Viral Growth.\n\nYour B2B SaaS tool has 2M free active users but conversion to paid enterprise plans is stuck at 0.8%. Investors demand that the PO lock essential free features behind a paywall to force upgrades. However, data indicates that the free tier drives 75% of new organic signups via viral sharing. How do you design an ethical, value-driven monetisation strategy?",
    rubric: {
      keyPoints: [
        "Resist short-term destructive paywalls that kill organic viral acquisition loops.",
        "Differentiate between individual user value (free tier) and organizational/team value (paid tier: SSO, audit logs, team collaboration, governance).",
        "Introduce value metrics tied to business scale rather than feature gates (e.g. usage volume, seats, advanced security).",
        "Formulate hypothesis experiments testing targeted paywalls without degrading individual user delight.",
        "Measure impact on both Current Value (revenue) and Unrealized Value (viral referral coefficient)."
      ],
      modelAnswer: "Locking core features behind a paywall kills viral product-led growth (PLG) and destroys Unrealized Value. I would adopt an enterprise value-tiering strategy:\n1. Protect the Core Viral Loop: Keep individual core workflows frictionless and free to sustain the viral referral engine.\n2. Monetize Organizational Governance: Gate enterprise-grade requirements—such as SAML/SSO, SOC2 audit trails, centralized billing, and shared team workspaces—behind the paid tier. Companies happily pay for administrative control and security.\n3. Usage-Based Thresholds: Implement soft usage tiers (e.g., free up to 5 team collaborators) where teams naturally upgrade as their organizational reliance grows.\n4. Experimentation: Run cohort tests on pricing pages and inspect conversion vs referral churn before company-wide rollout."
    }
  },
  {
    domain: "Global AI Integration & Ethics",
    text: "Strategic Case Dilemma 9: Integrating Generative AI Capabilities while Managing Hallucination Risk.\n\nYour enterprise legal-tech solution wants to integrate Generative AI to automatically draft contract clauses. Marketing wants to advertise the tool as '100% Autonomous Contract Generation.' However, internal testing reveals a 7% hallucination rate on complex indemnity clauses. As Product Owner, how do you govern this feature launch responsibly?",
    rubric: {
      keyPoints: [
        "Ethical responsibility to prevent customer legal exposure and liability caused by AI hallucinations.",
        "Reject false marketing claims of '100% autonomous' in favor of an 'AI-Assisted Copilot' stance with human-in-the-loop validation.",
        "Incorporate strict verification guidelines, confidence scoring, and source citations into the UI.",
        "Update the Definition of Done to mandate benchmark accuracy and safety evaluations.",
        "Launch via restricted beta/canary releases to legal professionals who provide feedback."
      ],
      modelAnswer: "Shipping an AI legal tool with a 7% hallucination rate under false '100% autonomous' claims exposes clients and our company to catastrophic legal liability. I will take the following stance:\n1. Reposition as 'Copilot' with Human-in-the-Loop: Reframe the feature from autonomous replacement to an intelligent assistant that drafts suggestions requiring lawyer review.\n2. Transparent UI Design: Include confidence scores and direct source citations for every drafted clause, highlighting generated text for explicit human sign-off.\n3. Definition of Done & Safety Gates: Enforce automated benchmark tests for hallucination rate (<1%) before any model release.\n4. Canary Rollout: Release exclusively to a cohort of trusted legal partners under a closed beta to observe real-world usage and refine prompts before general availability."
    }
  },
  {
    domain: "Partner Ecosystem & Open API Strategy",
    text: "Strategic Case Dilemma 10: Building a Developer Platform Ecosystem vs Internal Feature Development.\n\nInternal engineering capacity is stretched thin attempting to build 50 vertical integrations (Salesforce, HubSpot, SAP, Zendesk). A growing developer community requests a public GraphQL API and Webhook platform to build their own integrations. How should the Product Owner evaluate and execute this platform ecosystem strategy?",
    rubric: {
      keyPoints: [
        "Leverage the Platform Business Model to transform the product from a point solution into an ecosystem.",
        "Recognize the economic leverage: enabling 3rd party developers creates compounding Unrealized Value without linear internal headcount growth.",
        "Design an Open API & Developer Experience (DX) backlog with robust documentation, rate-limiting, and developer sandboxes.",
        "Prioritize the top 3 high-volume native integrations internally while exposing APIs for long-tail integrations.",
        "Define metrics for API adoption: active API keys, 3rd-party integration count, and API-driven revenue."
      ],
      modelAnswer: "Trying to build 50 bespoke integrations internally is a losing strategy that overwhelms engineering capacity. Transitioning to a Platform Ecosystem unlocks exponential scalability:\n1. Strategic Pivot to Platform: Allocate 30% of engineering capacity to build a first-class Public API and Webhook engine with developer documentation and sandbox environments.\n2. Pareto Integration Strategy: Build only the top 3 core integrations (e.g. Salesforce) natively to establish the benchmark and integration patterns.\n3. Partner Marketplace: Open the platform to certified integration partners, allowing vendors and customers to build and maintain their own long-tail integrations.\n4. Measure Ecosystem Health: Track active developer API tokens, 3rd-party transactions, and platform retention, creating high switching barriers and durable competitive advantage."
    }
  }
];

const { buildBalancedExamQuestions } = require('./examUtils');

// Helper to generate 5 full mock exams of exactly 35 questions each
// Format: 25 Objective Scenario Questions + 10 In-Depth Essay Questions with Rubrics
function generatePspo3Exams(examCount = 5, totalQuestions = 35) {
  const exams = [];
  const objectiveCount = 25;
  const essayCount = 10;

  for (let e = 1; e <= examCount; e++) {
    // 1. Generate 25 Unique, Balanced Objective Questions
    const examQuestions = buildBalancedExamQuestions(pspo3ObjectivePool, objectiveCount, e, 'pspo3_obj');

    // 2. Generate 10 Unique Written / Essay Questions with Model Rubrics & Answers
    const essayOffset = (e - 1) % pspo3EssayPool.length;
    for (let eq = 0; eq < essayCount; eq++) {
      const essayIdx = (essayOffset + eq) % pspo3EssayPool.length;
      const baseEssay = pspo3EssayPool[essayIdx];

      examQuestions.push({
        id: `pspo3_m${e}_q${objectiveCount + eq + 1}`,
        type: "essay",
        domain: baseEssay.domain || "Strategic Product Dilemma",
        text: baseEssay.text,
        rubric: {
          keyPoints: [...baseEssay.rubric.keyPoints],
          modelAnswer: baseEssay.rubric.modelAnswer
        }
      });
    }

    exams.push({
      id: `pspo3-mock-${e}`,
      title: `PSPO III - Practice Exam ${e} (Comprehensive 35-Question Executive Assessment)`,
      examNumber: e,
      durationMinutes: 120,
      passingScore: 85,
      questions: examQuestions
    });
  }

  return exams;
}

module.exports = {
  pspo3ObjectivePool,
  pspo3EssayPool,
  generatePspo3Exams
};
