// server/data/poGrowthFeaturesData.js
// Enterprise PO Growth, Viral Attraction & Job Readiness Data Suite
// 1. Diagnostic 5-Minute PO Skill Assessment (10 Scenarios across 5 Pillars)
// 2. PO Artifact & Interactive Toolkit Hub (WSJF, RICE, Kano, Story Slicing, PRD/User Story templates)
// 3. Day-in-the-Life PO Scenario Simulator (6 realistic sprint dilemmas with branch outcomes & badges)
// 4. PO Interview War Room (50 Real-World Interview Questions with STAR Model Answers)
// 5. LinkedIn Shareable Achievement Cards & Verifiable Credential Badges

module.exports = {
  // =========================================================================
  // 1. DIAGNOSTIC 5-MINUTE PO SKILL ASSESSMENT
  // =========================================================================
  diagnosticAssessment: {
    id: "po-diagnostic-v1",
    title: "5-Minute PO Capability & Seniority Benchmark",
    tagline: "Discover your Product Ownership strengths, identify blind spots, and receive a personalized learning roadmap.",
    totalQuestions: 10,
    timeLimitMinutes: 8,
    pillars: [
      { id: "discovery", name: "Product Discovery & Strategy", description: "Market validation, opportunity trees, customer empathy, and outcome roadmaps" },
      { id: "backlog", name: "Backlog Management & Slicing", description: "Story mapping, INVEST criteria, acceptance criteria, and vertical slicing" },
      { id: "scrum", name: "Agile & Scrum Execution", description: "Sprint goals, Definition of Done, anti-pattern remediation, and team coaching" },
      { id: "metrics", name: "Metrics, OKRs & Stakeholders", description: "Value metrics, pirate metrics (AARRR), WSJF prioritization, and stakeholder negotiation" },
      { id: "ai", name: "AI Product Ownership", description: "Probabilistic acceptance criteria, data readiness, evaluation suites, and agentic workflows" }
    ],
    questions: [
      {
        id: "diag-q1",
        pillar: "discovery",
        scenario: "Your CEO approaches you with an exciting new feature idea seen in a competitor's app and insists on including it in the upcoming release.",
        question: "What is your primary action as an empowered Product Owner?",
        options: [
          {
            text: "Immediately add it to the top of the sprint backlog to keep executive confidence high.",
            score: 1,
            feedback: "Order-taker anti-pattern. A PO must validate strategic value and user problem space first."
          },
          {
            text: "Frame the idea as an outcome hypothesis, conduct quick customer problem discovery, and evaluate it against current quarterly OKRs before prioritizing.",
            score: 5,
            feedback: "Exemplary Product Owner behavior! You validate customer problem-solution fit and align with strategic goals."
          },
          {
            text: "Reject it outright because it wasn't discovered by the product team.",
            score: 2,
            feedback: "Overly defensive. Ideas can come from anywhere; what matters is rigorous discovery and validation."
          },
          {
            text: "Delegate the decision to the Developers to see if they like building it.",
            score: 2,
            feedback: "Abdication of PO accountability. The PO owns product value and priority, not just technical feasibility."
          }
        ]
      },
      {
        id: "diag-q2",
        pillar: "discovery",
        scenario: "You are defining the roadmap for a new B2B product module. The sales team wants a committed timeline of 20 feature bullet points over 12 months.",
        question: "How do you best structure your roadmap to maximize business value and retain agility?",
        options: [
          {
            text: "Build a strict Gantt chart showing exact delivery sprint dates for all 20 features.",
            score: 1,
            feedback: "Waterfall trap. In complex domains, output-based Gantt charts create false predictability and reduce agility."
          },
          {
            text: "Adopt an Outcome-Based 'Now / Next / Later' roadmap organized by customer problems and business KPIs rather than fixed feature commitments.",
            score: 5,
            feedback: "Best practice! Outcome-based roadmaps focus teams on solving real problems while preserving execution flexibility."
          },
          {
            text: "Refuse to provide any roadmap because Scrum focuses only on the current sprint.",
            score: 2,
            feedback: "Scrum anti-pattern. Stakeholders need directional visibility to plan marketing, hiring, and sales motions."
          },
          {
            text: "Give sales whatever dates they ask for and deal with slippage later.",
            score: 1,
            feedback: "Dangerous for trust and team morale. Commitments should reflect realistic capacity and validated value."
          }
        ]
      },
      {
        id: "diag-q3",
        pillar: "backlog",
        scenario: "Your team has an Epic: 'Redesign Checkout Flow to reduce cart abandonment by 15%'. It is estimated at 40 story points and cannot fit into a single 2-week sprint.",
        question: "Which story-slicing approach should you apply?",
        options: [
          {
            text: "Slice horizontally into architectural layers: Sprint 1 Database schema, Sprint 2 API endpoints, Sprint 3 Frontend UI.",
            score: 1,
            feedback: "Horizontal architectural slicing delivers zero customer value until the final layer is integrated."
          },
          {
            text: "Slice vertically through the full stack based on user workflow variants or payment methods (e.g., Credit Card single-page checkout first, then PayPal, then Apple Pay).",
            score: 5,
            feedback: "Superb INVEST slicing! Each vertical slice delivers a functional, testable, shippable increment of user value."
          },
          {
            text: "Double the sprint length from 2 weeks to 4 weeks to accommodate the whole Epic.",
            score: 1,
            feedback: "Anti-pattern. Sprints should not be expanded to fit large work; work must be sliced to fit the cadence."
          },
          {
            text: "Ask the developers to work overtime to squeeze the 40 points into the 2-week sprint.",
            score: 1,
            feedback: "Unsustainable pace violating Agile Principle #8 and leading to burnout and quality debt."
          }
        ]
      },
      {
        id: "diag-q4",
        pillar: "backlog",
        scenario: "A junior business analyst writes a user story: 'As an admin, I want a modern user interface so that the application looks nice.'",
        question: "What is the critical deficiency in this user story according to INVEST criteria?",
        options: [
          {
            text: "It is written in English rather than Gherkin syntax.",
            score: 2,
            feedback: "Format is secondary to intent. The real problem is ambiguity and lack of verifiable business value."
          },
          {
            text: "It lacks a specific user problem, measurable business outcome, and clear, testable acceptance criteria (Violates 'V' - Valuable and 'T' - Testable).",
            score: 5,
            feedback: "Spot on! 'Modern interface' and 'looks nice' are subjective opinions without demonstrable user or business value."
          },
          {
            text: "It doesn't specify which CSS library or UI framework the developers must use.",
            score: 1,
            feedback: "User stories should express what and why, leaving the technical implementation ('how') to the Developers."
          },
          {
            text: "Stories should only be written for end customers, never for internal administrators.",
            score: 2,
            feedback: "Administrators are legitimate personas; the issue is the lack of value clarity and testability."
          }
        ]
      },
      {
        id: "diag-q5",
        pillar: "scrum",
        scenario: "At the Sprint Review, the VP of Marketing is disappointed because an item planned for the sprint was not completed due to unexpected backend complexity.",
        question: "How should the Product Owner handle this situation?",
        options: [
          {
            text: "Blame the engineering lead publicly so the VP knows it wasn't the PO's fault.",
            score: 1,
            feedback: "Destroys psychological safety and team trust. The Scrum Team succeeds and fails together."
          },
          {
            text: "Show the completed, valuable increments that did meet the Definition of Done, explain the complexity encountered, and review how the remaining work will be re-prioritized in the backlog.",
            score: 5,
            feedback: "Exemplary Scrum transparency! Uphold empirical process control (Transparency, Inspection, Adaptation)."
          },
          {
            text: "Quickly mark the item as '90% done' and accept it so the VP feels satisfied.",
            score: 1,
            feedback: "Violates Scrum Guide rules: items are either Done according to the DoD or not Done. No partial credit."
          },
          {
            text: "Cancel the sprint retrospectively to avoid reporting incomplete work.",
            score: 1,
            feedback: "Sprint cancellation is reserved only when the Sprint Goal becomes completely obsolete."
          }
        ]
      },
      {
        id: "diag-q6",
        pillar: "scrum",
        scenario: "Developers complain that mid-sprint changes are causing constant context switching, and the Sprint Goal has been missed for three consecutive sprints.",
        question: "What is your primary remediation strategy as Product Owner?",
        options: [
          {
            text: "Enforce strict Sprint Goal sanctity: no changes that endanger the Sprint Goal are accepted during the sprint, and buffer non-urgent requests for the next Sprint Planning.",
            score: 5,
            feedback: "Correct! The Scrum Guide guarantees sprint stability around the Sprint Goal while allowing scope clarification."
          },
          {
            text: "Stop writing Sprint Goals and just run a continuous Kanban queue.",
            score: 2,
            feedback: "Band-aid fix that avoids addressing the root cause of undisciplined stakeholder scope injection."
          },
          {
            text: "Tell developers that agility means accepting any change at any minute of the day without question.",
            score: 1,
            feedback: "Agility is responding to change through disciplined reflection, not chaotic thrashing."
          },
          {
            text: "Shorten daily standups from 15 minutes to 5 minutes.",
            score: 1,
            feedback: "Irrelevant to the problem of scope churning."
          }
        ]
      },
      {
        id: "diag-q7",
        pillar: "metrics",
        scenario: "You have 4 competing initiatives from Sales, Compliance, Operations, and Customer Success, but the engineering squad only has bandwidth for 2 in the upcoming quarter.",
        question: "Which quantitative framework provides the most transparent, objective prioritization for executive alignment?",
        options: [
          {
            text: "Prioritize whoever has the highest corporate title (HIPPO - Highest Paid Person's Opinion).",
            score: 1,
            feedback: "HIPPO-driven prioritization leads to political maneuvering, feature factories, and suboptimal ROI."
          },
          {
            text: "Calculate Cost of Delay (WSJF - Weighted Shortest Job First) or RICE score with all stakeholders in a collaborative session to rank initiatives by economic value delivered per unit of effort.",
            score: 5,
            feedback: "Gold standard! Economic prioritization (WSJF = Cost of Delay / Job Size) aligns stakeholders transparently."
          },
          {
            text: "Divide the engineering capacity equally into 4 small slices so everyone gets 25% of what they asked for.",
            score: 2,
            feedback: "The 'peanut butter' anti-pattern dilutes focus, resulting in 4 half-baked features with zero commercial impact."
          },
          {
            text: "Put all 4 initiatives into a lottery draw.",
            score: 1,
            feedback: "Unprofessional and ignores strategic business objectives."
          }
        ]
      },
      {
        id: "diag-q8",
        pillar: "metrics",
        scenario: "Your product's monthly active users (MAU) grew by 40%, but the business net revenue and user 90-day retention have dropped by 15%.",
        question: "How should a mature Product Owner interpret these metrics?",
        options: [
          {
            text: "Celebrate the 40% MAU growth as a massive success in the company town hall.",
            score: 1,
            feedback: "MAU is a vanity metric when divorced from retention and monetization."
          },
          {
            text: "Recognize MAU as a vanity metric; investigate churn cohorts to discover why newly acquired users are failing to reach their 'Aha!' moment and deliver sustained lifetime value.",
            score: 5,
            feedback: "High product maturity! Distinguish vanity metrics (downloads, signups) from actionable value metrics (retention, LTV)."
          },
          {
            text: "Increase paid ad spend to bring in more users to replace the ones who churned.",
            score: 1,
            feedback: "The 'leaky bucket' anti-pattern wastes capital without fixing product-market fit."
          },
          {
            text: "Blame the marketing team for acquiring low-quality leads.",
            score: 2,
            feedback: "Product retention is a core PO accountability; collaborate across teams to diagnose the activation bottleneck."
          }
        ]
      },
      {
        id: "diag-q9",
        pillar: "ai",
        scenario: "You are building an AI-assisted search feature powered by an LLM. The QA lead asks you for binary Given/When/Then acceptance criteria.",
        question: "How do you define acceptance criteria for probabilistic AI features?",
        options: [
          {
            text: "Specify that the AI model must produce 100% accurate results with zero hallucinations on every possible query.",
            score: 1,
            feedback: "Impossible. LLMs are probabilistic systems $P(Y|X)$; 100% perfection is mathematically unattainable."
          },
          {
            text: "Establish statistical acceptance gates using a Golden Test Evaluation Dataset: define minimum Precision/Recall thresholds, latency P95 targets, and fallback behavior when model confidence is low.",
            score: 5,
            feedback: "Mastery level! AI POs define statistical benchmarks, confidence thresholds, and human-in-the-loop fallback paths."
          },
          {
            text: "Tell QA that AI cannot be tested because it is unpredictable magic.",
            score: 1,
            feedback: "AI can and must be tested via automated evaluation suites (Evals), golden benchmarks, and regression suites."
          },
          {
            text: "Copy the standard acceptance criteria from a deterministic SQL search query.",
            score: 2,
            feedback: "Deterministic criteria fail when applied to semantic vector search and probabilistic LLM reasoning."
          }
        ]
      },
      {
        id: "diag-q10",
        pillar: "ai",
        scenario: "Your engineering lead suggests fine-tuning an expensive 70B open-weights model to summarize support tickets. Monthly volume is 5,000 tickets.",
        question: "What is your economic and architectural evaluation as an AI Product Owner?",
        options: [
          {
            text: "Approve it immediately because having a proprietary fine-tuned model looks great on tech blogs.",
            score: 1,
            feedback: "Resume-driven development. Fine-tuning introduces immense data preparation, GPU hosting, and maintenance debt."
          },
          {
            text: "Conduct a Cost-Benefit Analysis: test a lightweight prompt-engineered frontier model or Small Language Model (SLM) first, verifying that token API costs ($20/month) vastly outperform custom model hosting ($2,000/month).",
            score: 5,
            feedback: "Exceptional AI Unit Economics acumen! Start with Prompt Engineering $\\to$ RAG $\\to$ Fine-Tuning only when necessary."
          },
          {
            text: "Reject all AI solutions and mandate that humans continue reading all 5,000 tickets manually.",
            score: 2,
            feedback: "Missed high-ROI automation opportunity. Simple prompt workflows can easily handle ticket summarization."
          },
          {
            text: "Wait 2 years for foundation models to become free.",
            score: 1,
            feedback: "Passivity allows competitors to gain productivity and operational cost advantages."
          }
        ]
      }
    ],
    seniorityProfiles: {
      associate: {
        title: "Associate Product Owner",
        scoreRange: [10, 26],
        tagline: "Solid tactical foundations; ready to elevate into strategic ownership.",
        summary: "You understand fundamental Scrum terminology and backlog mechanics. To advance, focus on outcome-driven prioritization (WSJF), vertical story slicing (INVEST), and data-informed stakeholder negotiation.",
        recommendedChapters: ["ch-01", "ch-02", "ch-04", "ch-05"],
        recommendedCerts: ["pspo-1", "cspo-1"]
      },
      senior: {
        title: "Senior Product Owner",
        scoreRange: [27, 40],
        tagline: "High-impact practitioner balancing commercial outcomes with team excellence.",
        summary: "You effectively resist anti-patterns, prioritize with quantitative rigor, and steer teams toward sprint goals. Next milestones: mastering portfolio scaling (SAFe/LeSS), advanced product discovery, and AI-enabled product workflows.",
        recommendedChapters: ["ch-06", "ch-08", "ch-09", "ch-11"],
        recommendedCerts: ["pspo-2", "safe-popm"]
      },
      principal: {
        title: "Lead / Principal Product Owner",
        scoreRange: [41, 50],
        tagline: "Visionary product leader shaping organizational strategy and AI-era innovation.",
        summary: "You operate at the pinnacle of product ownership—seamlessly integrating economic modeling, probabilistic AI architectures, executive storytelling, and continuous discovery flywheels.",
        recommendedChapters: ["ch-10", "ch-11"],
        recommendedCerts: ["pspo-3", "ai-cert"]
      }
    }
  },

  // =========================================================================
  // 2. PO ARTIFACT & INTERACTIVE TOOLKIT HUB
  // =========================================================================
  toolkitHub: {
    calculators: {
      wsjf: {
        id: "calc-wsjf",
        name: "WSJF Prioritizer (Weighted Shortest Job First)",
        formula: "WSJF = Cost of Delay (CoD) / Job Size = (User-Business Value + Time Criticality + Risk Reduction / Opportunity Enablement) / Job Size",
        description: "SAFe industry standard for lean economic sequencing. Maximizes economic value delivery by scheduling high-value, fast-turnaround jobs first.",
        fields: [
          { key: "userValue", label: "User-Business Value", min: 1, max: 20, default: 8, tooltip: "Relative value to customer or revenue impact (Fibonacci: 1, 2, 3, 5, 8, 13, 20)" },
          { key: "timeCriticality", label: "Time Criticality", min: 1, max: 20, default: 5, tooltip: "Does value decay rapidly over time? Are there strict regulatory or seasonal deadlines?" },
          { key: "riskReduction", label: "Risk Reduction / Opportunity Enablement", min: 1, max: 20, default: 5, tooltip: "Does this eliminate technical risk or open doors to new revenue streams?" },
          { key: "jobSize", label: "Job Size / Duration", min: 1, max: 20, default: 3, tooltip: "Estimated effort or lead time to build and deliver (Fibonacci)" }
        ]
      },
      rice: {
        id: "calc-rice",
        name: "RICE Scoring Model",
        formula: "RICE Score = (Reach × Impact × Confidence) / Effort",
        description: "Intercom's battle-tested framework for balancing reach and business impact against engineering cost and uncertainty.",
        fields: [
          { key: "reach", label: "Reach (Users/Quarter)", min: 100, max: 50000, default: 5000, step: 100, tooltip: "Number of customers or accounts impacted per period" },
          { key: "impact", label: "Impact Factor", min: 0.25, max: 3, default: 2, step: 0.25, options: [{ label: "Minimal (0.25x)", value: 0.25 }, { label: "Low (0.5x)", value: 0.5 }, { label: "Medium (1x)", value: 1 }, { label: "High (2x)", value: 2 }, { label: "Massive (3x)", value: 3 }] },
          { key: "confidence", label: "Confidence (%)", min: 20, max: 100, default: 80, step: 10, options: [{ label: "Moonshot (50%)", value: 50 }, { label: "Medium (80%)", value: 80 }, { label: "High / Validated (100%)", value: 100 }] },
          { key: "effort", label: "Effort (Person-Months)", min: 0.5, max: 12, default: 2, step: 0.5, tooltip: "Total cross-functional person-months to deliver" }
        ]
      }
    },
    storySlicingGuide: [
      {
        pattern: "Workflow Steps Slicing",
        description: "Split an end-to-end user journey into sequential milestone steps, shipping the simplest beginning-to-end path first.",
        example: "Instead of building full multi-step checkout with cart, tax engine, coupons, and address book, ship: 1) Single-page card payment -> 2) Address book -> 3) Coupon redemption.",
        investRating: "High Value, Low Initial Complexity"
      },
      {
        pattern: "Business Rule Variations Slicing",
        description: "Start with the default baseline rule, then incrementally add complex pricing tiers, VIP logic, or regional taxes.",
        example: "Slice 1: Flat standard shipping rate for all orders. Slice 2: Weight-based tiering. Slice 3: International custom duties.",
        investRating: "High Testability, Clean Boundaries"
      },
      {
        pattern: "Happy Path vs Exception Handling",
        description: "Deliver the primary success flow first to gather live feedback, then layer on error recovery, edge-case fallbacks, and edge states.",
        example: "Slice 1: Successful account registration via email. Slice 2: Duplicate email detection and password reset recovery.",
        investRating: "Rapid Time-to-Market"
      },
      {
        pattern: "Data Subsets & Formats",
        description: "Support the most prevalent data type first before supporting complex formats.",
        example: "Slice 1: Upload CSV file. Slice 2: Upload Excel (.xlsx). Slice 3: Direct API cloud sync (Google Sheets).",
        investRating: "Progressive Value Delivery"
      },
      {
        pattern: "Major Effort / Minor Effort (Spike + Core)",
        description: "When an architectural unknown blocks estimation, run a timeboxed Spike story first to de-risk, then implement the refined story.",
        example: "Slice 1: 2-day Spike to evaluate vector search latency on pgvector. Slice 2: Production semantic search integration.",
        investRating: "De-risks Complex Uncertainty"
      }
    ],
    productionTemplates: [
      {
        id: "tmpl-prd",
        title: "Executive One-Page PRD (Product Requirements Document)",
        category: "Product Strategy",
        format: "Markdown",
        template: `# Feature Name: [e.g., Real-Time Anomaly Alerting for Enterprise Accounts]
**Author / PO:** [Your Name]  
**Target Release:** [Quarter / Sprint Cadence]  
**Status:** [Draft / Under Review / Approved / In Development]  

---

## 1. Problem Statement
- **What is the user pain?** [Enterprise fraud managers miss sub-minute transaction spikes because alerts are batched hourly.]
- **Who experiences this?** [Tier-1 Enterprise Risk Officers (Accounts > $10M ARR).]
- **Why solve it now?** [Competitors market instant detection; 3 enterprise renewals flagged alerting as a blocker.]

---

## 2. Target Business Outcomes & OKRs
- **Leading Indicator:** Alert inspection time decreases from 45 min to < 90 seconds.
- **Lagging Metric:** Reduce fraudulent chargeback loss by 22% within 90 days of rollout.
- **Guardrail Metric:** False positive rate must remain strictly below 4.5%.

---

## 3. High-Level User Journey (Happy Path)
1. System ingests real-time stream of transactions.
2. Anomaly engine flags deviation $\\ge 3\\sigma$ and pushes websocket alert to dashboard.
3. User receives push notification, reviews root-cause explainability card, and clicks "Freeze Account" in 1 click.

---

## 4. Key Epics & Vertical Slices
- **Slice 1 (MVP):** Rule-based trigger for 500% volume spike + Slack webhook notification.
- **Slice 2:** In-app visual alert drawer with 1-click account quarantine action.
- **Slice 3:** ML-driven adaptive baseline calculation per client timezone.

---

## 5. Out of Scope (Non-Goals)
- Custom automated webhook endpoints for external SIEM tools (Deferred to Phase 2).
- Native iOS/Android biometric notifications (Web dashboard only for MVP).

---

## 6. Definition of Done (DoD) Criteria
- [ ] Code reviewed with 0 high/critical static analysis warnings.
- [ ] Automated end-to-end regression tests passing in CI/CD pipeline.
- [ ] P99 alert latency verified under 500ms under 10k RPS load test.
- [ ] Analytics telemetry events (AlertGenerated, AlertAcknowledged, ActionTaken) validated in Mixpanel.
- [ ] Customer documentation and release notes published.`
      },
      {
        id: "tmpl-user-story",
        title: "Production User Story with Given/When/Then Acceptance Criteria",
        category: "Backlog Management",
        format: "Markdown",
        template: `### US-402: One-Click Instant Refund for Tier-1 Support Agents

**As a** Tier-1 Customer Support Specialist  
**I want to** issue an instant refund up to $150 directly from the customer order ticket  
**So that** I can resolve frustrated customer billing disputes without escalating to Tier-2 finance queues.

---

#### Business Context:
- Current turnaround for simple refunds: 72 hours (4 touched tickets).
- Target turnaround with this feature: < 60 seconds (First Contact Resolution).

---

#### Acceptance Criteria (Gherkin Syntax):

**Scenario 1: Successful refund within allowable limit**
- **Given** an agent is viewing an order ticket with transaction age < 30 days
- **And** the requested refund amount is $\\le $150.00
- **When** the agent enters the refund reason and clicks "Process Immediate Refund"
- **Then** the payment gateway API executes the reversal synchronously
- **And** the customer ticket status updates to "Refunded" with transaction ID logged
- **And** a confirmation email is dispatched to the customer within 30 seconds.

**Scenario 2: Refund amount exceeds threshold**
- **Given** an agent enters a refund amount > $150.00
- **When** the agent submits the refund
- **Then** the UI disables direct submission
- **And** prompts the agent to "Submit for Manager Approval" with reason required.

**Scenario 3: Payment gateway API timeout or failure**
- **Given** the payment processor is unreachable or returns a 5xx error
- **When** the refund is attempted
- **Then** no duplicate charge is initiated
- **And** the agent sees an error notification: "Gateway timeout. Ticket queued for automated retry in 5 minutes."

---

#### Technical & Operational Enablers:
- **Telemetry:** Event \`Support_Refund_Initiated\` tracked with \`agent_id\`, \`order_id\`, \`amount\`.
- **Security:** Requires RBAC permission \`billing:refund:tier1\`. Audit log created for every action.`
      }
    ]
  },

  // =========================================================================
  // 3. DAY-IN-THE-LIFE PO SCENARIO SIMULATOR (INTERACTIVE DILEMMA LAB)
  // =========================================================================
  scenarioSimulator: {
    title: "Day-in-the-Life PO Sprint Dilemma Lab",
    subtitle: "Navigate high-stakes real-world product dilemmas. Your decisions dictate team morale, delivery predictability, and stakeholder trust.",
    scenarios: [
      {
        id: "scen-1",
        title: "The Mid-Sprint Executive Scope Injection",
        characterRole: "Lead Product Owner, FinTech Platform",
        dilemmaContext: "Day 4 of a 10-day sprint. The team is 60% through delivering the Sprint Goal ('Enable 3D Secure 2.0 compliant checkout'). The VP of Enterprise Sales rushes in stating that an $800k prospect will sign this Friday ONLY IF the team builds a custom Salesforce CSV export by Thursday.",
        options: [
          {
            id: "opt-1a",
            title: "Immediately halt current sprint tasks, order developers to work overtime, and squeeze the Salesforce export into the active sprint.",
            badgeUnlock: null,
            verdict: "PO Anti-Pattern: Chaos Monkey",
            scoreDelta: -20,
            impact: {
              morale: "Plummets (Team feels whip-sawed and burned out)",
              predictability: "Destroyed (Sprint Goal missed; 3D Secure fails compliance deadline)",
              trust: "Short-term sales praise, but engineering trust is broken"
            },
            feedback: "Abandoning Sprint Goals mid-sprint creates chronic tech debt, slips regulatory deadlines, and signals that the PO cannot protect team focus."
          },
          {
            id: "opt-1b",
            title: "Negotiate with the VP: determine the prospect's real validation need, explore a manual temporary data pull by Solutions Engineering, and schedule the automated feature into the next sprint backlog.",
            badgeUnlock: {
              id: "badge-diplomat",
              name: "Pragmatic Diplomat",
              description: "Protected Sprint Goal sanctity while unblocking an $800k commercial opportunity through creative compromise."
            },
            verdict: "Exemplary Strategic Leadership",
            scoreDelta: +25,
            impact: {
              morale: "High (Developers feel shielded and respected)",
              predictability: "100% (Sprint Goal remains on track for on-time delivery)",
              trust: "High across both Sales and Engineering"
            },
            feedback: "Outstanding PO execution! You decoupled the customer's immediate commercial outcome from code changes, preserving team flow."
          },
          {
            id: "opt-1c",
            title: "Strictly tell the VP 'No' without listening, citing page 12 of the Scrum Guide, and walk away.",
            badgeUnlock: null,
            verdict: "Process Dogmatist Anti-Pattern",
            scoreDelta: -10,
            impact: {
              morale: "Neutral",
              predictability: "Stable",
              trust: "Impaired (Sales views Product as an ivory tower barrier to revenue)"
            },
            feedback: "Scrum is not a weapon to shut down commercial conversations. Great POs seek to understand the business need first."
          }
        ]
      },
      {
        id: "scen-2",
        title: "The Technical Debt Mutiny",
        characterRole: "Product Owner, Cloud SaaS Platform",
        dilemmaContext: "Sprint Planning meeting. The Lead Architect states that the authentication microservice is crumbling. If the team doesn't spend 100% of the next 2 sprints refactoring the legacy database schema, the system will collapse. Meanwhile, your Q3 OKR is to launch user workspace permissions.",
        options: [
          {
            id: "opt-2a",
            title: "Reject all technical refactoring: insist that developers only write user-facing features because tech debt doesn't show up on sales brochures.",
            badgeUnlock: null,
            verdict: "Feature Factory Anti-Pattern",
            scoreDelta: -25,
            impact: {
              morale: "Toxic (Engineers feel unheard; senior developers begin interviewing elsewhere)",
              predictability: "Catastrophic (Service suffers outages in 2 months, halting all delivery)",
              trust: "Severe executive escalation"
            },
            feedback: "Ignoring tech debt compounds like high-interest credit card debt. Eventually, all feature velocity drops to zero."
          },
          {
            id: "opt-2b",
            title: "Collaborate with the Architect to slice the refactoring into incremental enabler stories, dedicating 25% of team capacity each sprint while pairing DB modernization directly with workspace permissions.",
            badgeUnlock: {
              id: "badge-architect",
              name: "Technical Debt Slayer",
              description: "Turned technical debt into strategic enablers without starving business value."
            },
            verdict: "Exemplary Capacity Allocation",
            scoreDelta: +25,
            impact: {
              morale: "Very High (Engineering feels genuinely partnered)",
              predictability: "Steady, sustainable velocity",
              trust: "High (Stakeholders see steady progress on both stability and features)"
            },
            feedback: "Industry best practice! Allocate 20-30% steady-state capacity for technical enablers and architectural runway."
          },
          {
            id: "opt-2c",
            title: "Hand 100% of the backlog over to the architect for the next 6 months and step back entirely.",
            badgeUnlock: null,
            verdict: "Abdication of Ownership",
            scoreDelta: -15,
            impact: {
              morale: "Temporary relief for engineers",
              predictability: "Zero commercial visibility",
              trust: "CEO questions what the Product Owner does all day"
            },
            feedback: "Total feature freeze without commercial prioritization alienates customers and leadership."
          }
        ]
      },
      {
        id: "scen-3",
        title: "The 'Almost Done' Sprint Review Dilemma",
        characterRole: "Product Owner, HealthTech Mobile App",
        dilemmaContext: "It is Friday 3:00 PM at Sprint Review. A high-priority user story ('Patient Prescription Upload') is 95% complete. The happy path works, but the QA engineer notes that the app crashes if an invalid TIFF file is uploaded, and the automated unit tests are at 65% coverage (Definition of Done requires 80%). The developer asks: 'Can we just accept it as Done for this sprint and fix tests next week?'",
        options: [
          {
            id: "opt-3a",
            title: "Accept it as 'Done' so that the team's sprint burndown chart looks clean and velocity doesn't take a hit.",
            badgeUnlock: null,
            verdict: "DoD Compromiser Anti-Pattern",
            scoreDelta: -20,
            impact: {
              morale: "Degrades (Signals that quality standards are just decorative)",
              predictability: "False (Creates hidden defect debt that blows up future sprints)",
              trust: "Dangerous (High risk of patient data corruption in production)"
            },
            feedback: "Violates fundamental Scrum: items are either Done according to the DoD or not Done. Accepting half-baked stories corrupts empirical metrics."
          },
          {
            id: "opt-3b",
            title: "Do not accept the story. Celebrate the functional progress made, leave the story unaccepted, move it back to the backlog for re-estimation, and address the edge-case in next sprint planning.",
            badgeUnlock: {
              id: "badge-guardian",
              name: "Guardian of Quality",
              description: "Maintained absolute Definition of Done rigor, safeguarding production reliability."
            },
            verdict: "Empirical Scrum Integrity",
            scoreDelta: +25,
            impact: {
              morale: "Respect (Team learns that DoD is real and non-negotiable)",
              predictability: "Accurate, honest velocity",
              trust: "High (Leadership knows 'Done' means 100% production-ready)"
            },
            feedback: "Perfect Scrum stance! Velocity reflects only truly Done increments. Quality is non-negotiable."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. PO INTERVIEW WAR ROOM (50 REAL-WORLD QUESTIONS & STAR ANSWERS)
  // =========================================================================
  interviewWarRoom: {
    title: "Product Owner Interview War Room",
    subtitle: "Master the 50 most frequently asked behavioral, situational, and technical questions at top tier tech companies with model STAR answers.",
    categories: [
      { id: "all", name: "All 50 Questions" },
      { id: "prioritization", name: "Prioritization & Economics" },
      { id: "agile-scrum", name: "Agile & Scrum Execution" },
      { id: "stakeholders", name: "Stakeholder Negotiation" },
      { id: "discovery-strategy", name: "Discovery, OKRs & Metrics" },
      { id: "ai-technical", name: "AI & Engineering Collaboration" }
    ],
    questions: [
      {
        id: "iwq-1",
        category: "prioritization",
        companyTag: "Amazon / FinTech",
        difficulty: "Hard",
        question: "How do you decide what NOT to build when you have 10 stakeholders asking for conflicting urgent features?",
        whatInterviewerLooksFor: "Ability to use quantitative economic models (WSJF, Cost of Delay, RICE) rather than emotional or political criteria; empathy combined with firm boundary management.",
        redFlags: "Saying 'I ask my manager to decide' or 'I try to fit a little bit of everyone's request into the sprint'.",
        modelStarAnswer: {
          situation: "At my previous payments company, three business heads simultaneously demanded custom billing features for distinct client segments, while total engineering capacity could only support one.",
          task: "As Product Owner, I needed to establish an objective, transparent framework to align executives on a single priority without creating political resentment.",
          action: "I hosted a joint economic alignment workshop using the Weighted Shortest Job First (WSJF) model. We collaboratively scored Cost of Delay (User Value, Time Criticality, Risk Reduction) and Job Size. We discovered that while Feature A had the loudest advocate, Feature B had 4x the Cost of Delay due to a pending regulatory mandate.",
          result: "All stakeholders unanimously agreed to sequence Feature B first, then Feature A. We delivered Feature B with zero compliance penalties, and the transparent model eliminated hallway lobbying."
        }
      },
      {
        id: "iwq-2",
        category: "agile-scrum",
        companyTag: "Google / Spotify",
        difficulty: "Medium",
        question: "What is the difference between a Product Owner and a Product Manager, and how do you operate across both dimensions?",
        whatInterviewerLooksFor: "Clear understanding that 'Product Owner' is a Scrum role focused on maximizing value delivery through backlog orchestration, while 'Product Manager' is an expansive job title spanning market discovery, pricing, and business strategy.",
        redFlags: "Thinking a PO is just a backlog clerk or ticket-writer who takes orders from a PM.",
        modelStarAnswer: {
          situation: "In many organizations, the two titles are conflated or split into outward-facing PM vs inward-facing PO.",
          task: "I view Product Owner as the operational execution role within an Agile squad, and Product Management as the broader craft spanning the full lifecycle.",
          action: "In my daily practice, I operate dual-track: 60% of my time is spent on forward discovery (customer interviews, competitive benchmarking, opportunity trees, outcome OKRs), and 40% is spent with the delivery squad (sprint planning, backlog refinement, DoD verification, and sprint reviews).",
          result: "This dual-track stance ensures that the backlog is constantly fed with validated problems rather than speculative features, preventing the squad from turning into a feature factory."
        }
      },
      {
        id: "iwq-3",
        category: "stakeholders",
        companyTag: "Microsoft / Enterprise SaaS",
        difficulty: "Hard",
        question: "Tell me about a time an executive or customer asked for an urgent feature that you knew was a bad idea. How did you handle it?",
        whatInterviewerLooksFor: "Diplomacy, data-driven objection handling, seeking the underlying problem behind the requested solution, and maintaining executive trust.",
        redFlags: "Aggressively confronting the executive or blindly submitting to authority without verification.",
        modelStarAnswer: {
          situation: "Our VP of Sales requested an intricate multi-field filtering dashboard for enterprise users, insisting that customers were demanding it.",
          task: "I needed to validate whether building this 6-week feature would solve the actual customer friction before burning precious development sprints.",
          action: "Instead of saying 'No', I said 'Let's understand the root problem together.' I accompanied the VP on three customer calls and analyzed our Amplitude telemetry. We discovered that users weren't asking for more filters—they were overwhelmed because the default view showed 50 irrelevant columns. They just needed a saved default view.",
          result: "We solved the problem in 3 days with a simple 'Favorites' view instead of a 6-week filter engine. User satisfaction jumped 35%, and the VP of Sales publicly thanked the team for saving 5 weeks of development time."
        }
      },
      {
        id: "iwq-4",
        category: "discovery-strategy",
        companyTag: "Uber / B2C Platforms",
        difficulty: "Medium",
        question: "How do you define and track a North Star Metric for your product, and how do you ensure the squad doesn't optimize for vanity metrics?",
        whatInterviewerLooksFor: "Understanding how input metrics drive leading and lagging business outcomes; distinguishing vanity metrics (app downloads, pageviews) from value exchange metrics.",
        redFlags: "Choosing a vanity metric like registered accounts or revenue without customer value alignment.",
        modelStarAnswer: {
          situation: "Our mobile team was celebrating 100k downloads, but our 30-day retention was plunging below 12%.",
          task: "I needed to reorient the squad around an authentic North Star Metric that measured real value realized by users.",
          action: "I identified our 'Aha!' moment: users who completed their first cross-border transfer within 48 hours of signup had an 80% 6-month retention rate. We established our North Star as 'Weekly Completed First-Time Transfers' and broke it down into leading input metrics: onboarding friction, KYC verification speed, and initial deposit latency.",
          result: "By aligning sprint goals around reducing KYC friction rather than top-of-funnel download campaigns, 30-day retention rebounded from 12% to 38% in two quarters."
        }
      },
      {
        id: "iwq-5",
        category: "ai-technical",
        companyTag: "OpenAI / Enterprise AI",
        difficulty: "Hard",
        question: "How do you manage quality and acceptance criteria when working on Generative AI or Machine Learning product features?",
        whatInterviewerLooksFor: "Deep grasp of probabilistic software vs deterministic software; understanding of Evals, Golden Datasets, Precision/Recall, and Human-in-the-Loop fallbacks.",
        redFlags: "Writing standard Given/When/Then criteria assuming 100% correctness or expecting zero hallucinations.",
        modelStarAnswer: {
          situation: "We integrated an LLM assistant to draft customer responses for Tier-1 support representatives.",
          task: "Unlike traditional deterministic APIs where tests are binary pass/fail, the LLM outputs varied probabilistically, creating hallucination risks.",
          action: "I curated a 300-case Golden Evaluation Dataset covering standard requests, edge-case disputes, and adversarial prompt injection attempts. Together with our ML engineer, we defined statistical acceptance gates: >=92% Semantic Accuracy, <=2% Hallucination Rate, and a strict P95 latency of <1.5s. In the UI, I designed a multi-tier confidence fallback: answers with confidence <80% were pre-drafted for human 1-click verification rather than automated sending.",
          result: "The feature cut agent handling time by 42% while maintaining a 99.4% customer satisfaction rating with zero brand-damaging hallucinations in production."
        }
      }
    ]
  },

  // =========================================================================
  // 5. LINKEDIN CREDENTIAL & SHAREABLE ACHIEVEMENT CARDS
  // =========================================================================
  socialShareSuite: {
    title: "Shareable Achievement & LinkedIn Credential Cards",
    shareTemplates: {
      assessment: {
        headline: "Proud to share my Product Owner capability benchmark from PO Mastery Academy!",
        hashtags: "#ProductOwner #Agile #Scrum #ContinuousLearning #ProductManagement #POMasteryAcademy",
        generateUrl: (score, level) => `https://po-mastery-academy.vercel.app/?badge=${encodeURIComponent(level)}&score=${score}`
      },
      certification: {
        headline: "Excited to have passed the full replica mock exam on PO Mastery Academy!",
        hashtags: "#PSPO #ScrumMaster #ProductOwner #ProfessionalScrum #CertificationReady #POMasteryAcademy",
        generateUrl: (trackId, score) => `https://po-mastery-academy.vercel.app/?cert=${trackId}&score=${score}`
      }
    }
  }
};
