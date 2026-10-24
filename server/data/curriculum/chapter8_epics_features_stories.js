// Chapter 8: Requirements Hierarchy: Writing Portfolio Epics, Business Epics, Features & User Stories
module.exports = {
  id: "ch-08",
  title: "8. Requirements Hierarchy (Portfolio Epics, Features & User Stories)",
  category: "Execution & Requirements",
  level: "Beginner to Advanced",
  readTime: "32 min",
  summary: "Comprehensive masterclass on crafting the enterprise requirements hierarchy: drafting SAFe Portfolio Epics and Lean Business Cases, distinguishing Business vs Enabler Epics, writing Feature Benefit Hypotheses and Acceptance Criteria, mastering the INVEST model and 3Cs for User Stories, and writing robust Given/When/Then BDD acceptance tests.",
  subChapters: [
    {
      id: "sub-8-1",
      title: "8.1 The Enterprise Requirements Hierarchy Overview",
      concept: `In modern enterprise agile environments (especially in Scaled Agile Framework / SAFe, LeSS, and Large Enterprises), requirements cannot exist as an unorganized jumble of 2,000 disconnected user stories. 
To align executive board-level strategic investment themes with daily developer code commits, organizations implement a strict **nested requirements hierarchy**:

### The 5 Tiers of Enterprise Requirements:
1. **Portfolio Epics (3 to 12+ Months - Strategic Investment)**:
   - High-level initiatives that require substantial capital investment and governance oversight by **Lean Portfolio Management (LPM)**.
   - Evaluated via a lightweight **Lean Business Case** and governed by Strategic Themes.
   - *Example*: 'Global Real-Time Payments Modernization (\$3.5M budget)'.
2. **Business & Enabler Epics (Multi-PI Horizon)**:
   - Large initiatives that span across multiple releases or Program Increments (PIs), broken down into Features.
3. **Features & Capabilities (1 Program Increment / 8 to 12 Weeks)**:
   - Distinct services or customer-facing capabilities owned by **Product Management**.
   - Must fit cleanly within a single Program Increment (PI) and be demonstrable at the System Demo.
   - Characterized by a **Benefit Hypothesis** and **Feature Acceptance Criteria**.
4. **User Stories & Enabler Stories (1 Sprint / 1 to 2 Weeks)**:
   - Atomic increments of functional value owned by the **Product Owner** and co-created with the Agile Team.
   - Must fit comfortably within a single 2-week Sprint and satisfy the Definition of Ready (DoR) and Definition of Done (DoD).
5. **Engineering Tasks (Hours to Days)**:
   - Technical work units (e.g. 'write unit test', 'create migration script', 'configure mock endpoint') broken down and tracked by Developers.`,
      frameworkOrTemplate: `### Enterprise Requirements Decomposition Hierarchy

\`\`\`
+===================================================================================+
| [PORTFOLIO EPIC] (Multi-Quarter Investment, Lean Business Case)                   |
| Example: "Global Real-Time Payments Infrastructure Modernization" ($3.5M Budget)  |
+===================================================================================+
                                       │
          ┌────────────────────────────┴────────────────────────────┐
          ▼                                                         ▼
+------------------------------------+    +------------------------------------+
|          [BUSINESS EPIC]           |    |           [ENABLER EPIC]           |
| "Automated Cross-Border Remittance |    | "Cloud Event-Driven Kafka Cluster  |
|  for Retail Banking Customers"     |    |  Migration & PCI-DSS 4.0 Enabler"  |
+-----------------+------------------+    +-----------------+------------------+
                  │                                         │
          ┌───────┴───────┐                         ┌───────┴───────┐
          ▼               ▼                         ▼               ▼
+-----------------+ +-----------------+   +-----------------+ +-----------------+
|   [FEATURE 1]   | |   [FEATURE 2]   |   |   [FEATURE 3]   | |   [FEATURE 4]   |
| Real-time FX    | | Instant Mobile  |   | Kafka Topic     | | Automated KYC   |
| Conversion Rate | | Push Receipts   |   | Partitioning    | | AML Gateway     |
| (Fits in 1 PI!) | | (Fits in 1 PI!) |   | (Fits in 1 PI!) | | (Fits in 1 PI!) |
+--------+--------+ +--------+--------+   +-----------------+ +-----------------+
         │                   │
    ┌────┴────┐         ┌────┴────┐
    ▼         ▼         ▼         ▼
+---------+ +---------+ +---------+ +---------+
| [STORY] | | [STORY] | | [STORY] | | [STORY] |
| (1 Spr.)| | (1 Spr.)| | (1 Spr.)| | (1 Spr.)|
+---------+ +---------+ +---------+ +---------+
\`\`\`

### Traceability Principle:
Every single 3-point story in a sprint backlog must trace directly up to a parent Feature, and that Feature must trace to a strategic Epic. If a story does not serve a parent Feature, it is rogue work that must be challenged.`,
      realWorldExample: `### Global Banking Case Study: Strategic Alignment in Action

**The Disconnect:**
A global commercial bank had 60 agile teams building features. 
During an audit, executive leadership discovered that 40% of sprint user stories had no clear connection to the bank's published 3-year digital strategy. Teams were building pet projects, local UI tweaks, and isolated tools that delivered zero measurable corporate return.

**The Requirements Hierarchy Alignment:**
The bank instituted a strict requirements governance:
- Executive leadership published 3 **Portfolio Epics** (e.g. *'Zero-Touch Business Account Opening'*).
- Product Managers broke each Epic into 6 to 8 **Features** sized for 1 Program Increment (PI).
- Agile Team Product Owners broke Features into **User Stories** sized for 1 Sprint.

**The Business Impact:**
Developers in daily standups could articulate exactly how their story (*'Auto-crop uploaded passport scans'*) contributed to the \$50M corporate account opening initiative. 
Delivery of strategic priorities surged from 34% to 89% in two quarters.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "What is the structural relationship between an Epic, a Feature, and a User Story? How do their sizing rules differ?"
- **The Senior PO Answer:**
  > "The requirements hierarchy bridges strategic vision and iterative execution:
  > - An **Epic** is a major strategic initiative that typically spans multiple Program Increments (3 to 12 months). It represents a significant capital investment governed by a Lean Business Case and evaluated by Lean Portfolio Management.
  > - A **Feature** represents a discrete customer or business capability that fulfills an epic requirement. The golden sizing rule for a Feature is that **it must fit within a single Program Increment (PI - typically 8 to 12 weeks)**. It is owned and prioritized by Product Management using WSJF, and contains a Benefit Hypothesis and acceptance criteria.
  > - A **User Story** is the atomic building block of delivery owned by the Agile Team Product Owner. The non-negotiable sizing rule for a User Story is that **it must fit comfortably within a single Sprint (1 to 2 weeks)**, meeting the INVEST criteria and containing clear Given/When/Then acceptance criteria.
  > 
  > This strict temporal and conceptual nesting ensures strategic alignment while maintaining team agility and short feedback loops."`,
      antiPatternsToAvoid: `1. **The 'Forever Epic'**: Allowing an Epic to run for 3 years without intermediate Feature releases or MVP gates.
2. **The Featureless Backlog**: Dumping 800 unparented user stories into Jira with no intermediate Feature layer to provide strategic context.`,
      actionChecklist: [
        "Audit your current backlog: Verify that every User Story links to a parent Feature.",
        "Ensure no Feature in your Program Backlog is estimated to exceed the duration of one Program Increment (PI)."
      ]
    },
    {
      id: "sub-8-2",
      title: "8.2 Writing Portfolio Epics & SAFe Epic Hypothesis Statements",
      concept: `In traditional corporate project management, proposing a new initiative required writing a 120-page business case filled with fabricated 5-year financial projections that took 6 months to approve.

In Lean Portfolio Management (LPM), an Epic is captured via an **Epic Hypothesis Statement** paired with a lightweight **Lean Business Case**.

### The Anatomy of an Epic Hypothesis Statement:
- **Target Customer / Persona**: Who is experiencing the acute problem?
- **Unmet Need / Struggle**: What progress can they not currently achieve?
- **Solution Capability**: What platform capability are we proposing to build?
- **Value Proposition**: What measurable economic value will it create?
- **Competitive Alternative**: What legacy system, competitor, or workaround are we replacing?
- **Primary Differentiator**: What makes our approach uniquely superior?
- **Business Outcome Hypothesis**: Expected commercial return (e.g. ARR growth, cost reduction).
- **Leading Indicators**: Early measurable signals that prove our hypothesis is valid *before* full rollout (e.g. 100 beta customers actively transacting in 30 days).`,
      frameworkOrTemplate: `### SAFe Epic Hypothesis Statement Template & Example

\`\`\`
EPIC TITLE: Autonomous Fleet Telematics & Predictive Maintenance Engine
EPIC OWNER: VP of IoT Product & Lead Solutions Architect

FOR: Enterprise commercial logistics fleet operators (100+ vehicles)
WHO: Suffer from catastrophic unexpected roadside truck breakdowns costing $12k per incident
THE: Predictive Fleet Telematics Engine is an IoT cloud sensor platform
THAT: Continuously analyzes vehicle engine telemetry and predicts engine failures 14 days in advance
UNLIKE: Traditional scheduled calendar maintenance or passive OBD-II GPS trackers
OUR SOLUTION: Utilizes edge-computed vibration machine-learning models to trigger automated depot work orders

BUSINESS OUTCOME HYPOTHESIS:
• Reduce unplanned roadside fleet breakdowns by 45% within 12 months of deployment.
• Generate $4.2M in annual SaaS telematics subscription revenue by Year 2.

LEADING INDICATORS (Early Validation Gate via MVP):
• 25 beta test trucks maintain 99.9% sensor telemetry connection for 21 consecutive days.
• Machine learning algorithm accurately flags at least 2 real mechanical anomalies in pilot trucks before breakdown.
• Fleets in pilot program report a 100% willing-to-pay intent in post-trial review.

NON-FUNCTIONAL REQUIREMENTS (NFRs):
• Telematics data ingestion pipeline must handle 50,000 sensor pings/sec with <100ms latency.
• ISO 27001 and SOC2 Type II data security compliance.
\`\`\``,
      realWorldExample: `### Logistics Enterprise Case Study: The \$1.8M Tranche Funding Gate

**The Traditional Trap:**
A global freight company previously approved a \$5M budget upfront for a monolithic satellite dispatch project. Two years and \$4.5M later, the satellite hardware was obsolete and the project was written off as a total loss.

**The Epic Hypothesis Transformation:**
The new Head of Product introduced Lean Portfolio Management. 
When the engineering team proposed a \$3M IoT telematics initiative, LPM funded only a **\$300k MVP Tranche** pegged to the Epic Hypothesis Leading Indicator:
- *Leading Indicator*: 20 beta trucks operating on cellular mesh for 30 days with zero data dropouts.
- Within 4 weeks, the team hit the leading indicator, demonstrating clear technical feasibility and customer demand.
- LPM then released the next \$1.2M tranche for the full train rollout. 

**The Result:**
By governing through testable leading indicators rather than unverified 5-year business cases, enterprise capital risk was reduced by 90%, and the system launched 6 months ahead of schedule.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you define and govern an Epic in a Lean enterprise without falling back into traditional waterfall business cases?"
- **The Senior PO Answer:**
  > "I govern Epics using Lean Portfolio Management principles and the **Epic Hypothesis Statement**.
  > 
  > Instead of writing a 100-page business case with speculative 5-year ROI forecasts, I capture the Epic as a testable business hypothesis: stating the target customer, their unmet need, our solution differentiator, and expected business outcome.
  > 
  > Crucially, I establish explicit **Leading Indicators** and an **MVP gate**:
  > - Rather than asking for a \$2M full-project budget, we request an initial discovery and MVP tranche.
  > - We build the thinnest possible vertical slice of the Epic to test our leading indicators with real early adopters.
  > - At the Epic decision gate, leadership inspects empirical data: If the leading indicators are validated, we proceed with full PI funding. If the hypothesis fails, we pivot or gracefully terminate the initiative having spent only a fraction of capital.
  > 
  > This replaces political budgeting with empirical Lean governance."`,
      antiPatternsToAvoid: `1. **The Unfunded Blank Check**: Approving multi-million dollar Epics without intermediate MVP learning milestones.
2. **Missing Leading Indicators**: Formulating an Epic where the only measure of success is a lagging financial metric evaluated 2 years after release.`,
      actionChecklist: [
        "Select your team's largest current initiative and draft an Epic Hypothesis Statement.",
        "Define at least two quantitative Leading Indicators that can be validated within 30 days of MVP launch."
      ]
    },
    {
      id: "sub-8-3",
      title: "8.3 Business Epics vs Enabler Epics (Architecture, Infrastructure, Compliance)",
      concept: `A fundamental mistake in requirements management is assuming that every single backlog item must be an external customer-facing feature. 
If an organization only builds customer features, its underlying architecture decays, technical debt explodes, security vulnerabilities multiply, and development velocity grinds to a halt.

To balance agility and system health, enterprise requirements are explicitly categorized into **Business Epics** and **Enabler Epics**:

### 1. Business Epics:
- Deliver direct, observable customer value, competitive differentiation, or commercial monetization.
- *Examples*: Multi-currency crypto wallet; AI-assisted radiology diagnosis; 1-click checkout flow.

### 2. Enabler Epics (Building the Architectural Runway):
- Extend the technical, architectural, and operational infrastructure necessary to support future business capabilities without system degradation.
- **The 4 Types of Enablers**:
  1. **Exploration Enablers**: Spikes, research spikes, and technical proof-of-concepts (PoCs) designed to reduce technical risk.
  2. **Architectural Enablers**: Foundational system changes (e.g. decoupling a monolithic backend into domain-driven microservices, database sharding, migrating to an event-driven Kafka broker).
  3. **Infrastructure Enablers**: Automated CI/CD pipelines, containerization (Docker/Kubernetes), test environment automation.
  4. **Compliance Enablers**: Security hardening, SOC2 Type II audit automation, GDPR/HIPAA privacy controls.

### The Enterprise Capacity Allocation Policy:
High-performing agile release trains agree on explicit **Capacity Guardrails** (e.g. 70% Business Features, 20% Enablers/Technical Debt, 10% Innovation/Spikes) to ensure architecture continuously evolves in tandem with business features.`,
      frameworkOrTemplate: `### Balanced Capacity Allocation Guardrails Matrix

\`\`\`
+===================================================================================+
|               BALANCED CAPACITY ALLOCATION PER SPRINT / PI                        |
|                                                                                   |
|    [ 65% - 70% BUSINESS FEATURES ] ──► Direct Customer Outcomes & Commercial Value |
|    [ 20% - 25% ENABLERS & TECH DEBT ] ──► Architecture, CI/CD, Security, Refactor |
|    [ 10% EXPERIMENTAL SPIKES ] ──► Prototypes, Hackathons, Innovation Discovery   |
+===================================================================================+
\`\`\`

### Enabler Evaluation Criteria:
- What future Business Features does this Enabler unlock?
- What is the Cost of Delay if this Enabler is deferred for 2 PIs?
- How does this Enabler improve our **Time-to-Market** and **Ability to Innovate (A2I)**?`,
      realWorldExample: `### Travel Booking Scaleup: The Black Friday Monolith Crash

**The Disaster:**
An online travel booking scaleup devoted 100% of engineering capacity to business features for 8 consecutive quarters, rejecting all architectural enabler requests from engineers. 
On Black Friday, flight search traffic spiked 400%. The monolithic relational database ran out of memory connections, locking the entire checkout pipeline. 
The website crashed for 14 hours, costing **\$3.8M in lost bookings** and catastrophic PR fallout.

**The Enabler Turnaround:**
The PO and Chief Architect established a mandatory **25% continuous Enabler allocation**:
- They defined an Architectural Enabler Epic: *'Migrate High-Throughput Search Cache to Distributed Redis Cluster using the Strangler Fig Pattern'*.
- The team completed the migration over 3 sprints alongside business feature delivery.
- The following holiday season, search traffic surged 600% with sub-100ms response times and zero downtime.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you justify allocating team sprint capacity to Enablers or technical debt when business stakeholders demand 100% of capacity for new commercial features?"
- **The Senior PO Answer:**
  > "I never frame technical enablers as 'developer chores' or 'gold-plating code'—business leaders tune that out. 
  > 
  > Instead, I translate Enablers into **business risk, future capacity, and Cost of Delay**.
  > 
  > I explain the concept of the **Architectural Runway**: If we want to land a Boeing 747 (our upcoming enterprise product line in Q4), we cannot land it on a gravel dirt strip (our fragile legacy infrastructure); we must build the concrete runway today.
  > 
  > I use Scrum.org's Evidence-Based Management metrics: I show that our **Ability to Innovate** has dropped by 30% over the last 3 quarters because developers spend 40% of their time firefighting production incidents caused by technical debt.
  > 
  > I negotiate an agreed **Capacity Guardrail** with executive sponsors: *'We allocate 75% of our capacity to immediate business revenue features, and we protect 25% for Architectural and Compliance Enablers. That 25% is an insurance policy that guarantees our platform does not crash during peak volume and ensures our future feature velocity remains fast.'* When presented through this economic lens, stakeholders willingly endorse enablers."`,
      antiPatternsToAvoid: `1. **The Secret Shadow Backlog**: Developers working on architecture secretly without transparency, misleading the PO about true sprint capacity.
2. **The 100% Feature Hamster Wheel**: Refusing to fund any enablers until the production system suffers catastrophic outages or security breaches.`,
      actionChecklist: [
        "Audit your current backlog: Tag every story as either 'Business' or 'Enabler'.",
        "Establish an explicit capacity allocation policy (e.g. 70/20/10) with your engineering leadership."
      ]
    },
    {
      id: "sub-8-4",
      title: "8.4 Decomposing Epics into Features (Benefit Hypotheses & Acceptance Criteria)",
      concept: `In enterprise agile and SAFe, a **Feature** is the essential bridge between high-level strategic Epics and tactical sprint User Stories.

### The 3 Defining Rules of a Feature:
1. **Program Increment (PI) Sizing**:
   - A Feature must be small enough to be broken down, implemented, tested, and demonstrated **within a single Program Increment (8 to 12 weeks)** by one or more teams on an Agile Release Train.
   - If a feature takes more than 1 PI to complete, it is an Epic in disguise and must be decomposed further.
2. **The Benefit Hypothesis**:
   - Features do not simply describe technical mechanics; they justify the *business rationale* and expected measurable commercial or customer return.
3. **Feature Acceptance Criteria**:
   - High-level, objective conditions of satisfaction reviewed and accepted by Product Management during the PI **System Demo**.`,
      frameworkOrTemplate: `### Enterprise Feature Specification Template & Example

\`\`\`
FEATURE ID: FEAT-308
FEATURE TITLE: Real-Time Dynamic Foreign Exchange (FX) Conversion at Checkout
PARENT EPIC: EPIC-102: Global Cross-Border E-Commerce Expansion
OWNER: Product Manager (Checkout) & PO (Payments)
TARGET PI: PI 2026-Q3

1. FEATURE DESCRIPTION:
Enable international shoppers from Europe, the UK, and Japan to view localized pricing and complete purchases in their native currency (EUR, GBP, JPY) with real-time guaranteed exchange rates.

2. BENEFIT HYPOTHESIS:
We hypothesize that presenting prices and completing transactions in the customer's native currency will:
• Reduce checkout drop-off for international shoppers by 28%.
• Increase international cross-border Gross Merchandise Volume (GMV) by $950,000 in Q3.
• Reduce international currency dispute chargebacks to < 0.1% of volume.

3. FEATURE ACCEPTANCE CRITERIA:
• AC 1: Geolocation IP auto-detects shopper country and defaults currency selection with manual dropdown override.
• AC 2: Real-time exchange rate quotes fetched via Bloomberg FX API with a 15-minute price freeze guarantee during the checkout session.
• AC 3: Receipts and confirmation emails display both the local currency paid and the underlying USD settlement equivalent.
• AC 4: All transactions comply with PCI-DSS 4.0 data encryption standards.

4. ESTIMATED SIZE & DECOMPOSITION:
• WSJF Score: 14.5 (High CoD, Medium Size)
• Decomposed into 5 User Stories across Sprints 1 to 3 for Agile Team 'Payments Alpha'.
\`\`\``,
      realWorldExample: `### FinTech Feature Hypothesis Validation

**The Feature Bet:**
A digital investing app formulated a Feature: *'Social Copy-Trading Feed'*.
- **Benefit Hypothesis**: *'We hypothesize that enabling novice investors to auto-copy portfolio moves of top-performing traders will increase weekly trading volume by 35%.'*
- **Decomposition**: The feature was broken down into 4 user stories.
- **The Finding**: In Sprint 2, the team released the first two stories to a 2,000-user beta cohort. 
Telemetry revealed that weekly trading volume did not budge (+2%), but legal compliance tickets skyrocketed as novice investors complained when top traders lost money!

**The Pivot:**
Because the Benefit Hypothesis was explicit and tracked early, Product Management cancelled the remaining 2 stories for the Social Feed, pivoted the feature to *'Automated Index Fund Rebalancing'*, and achieved a 48% surge in volume the following sprint.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "What constitutes a high-quality Feature in your backlog, and who is accountable for its definition and acceptance?"
- **The Senior PO Answer:**
  > "A high-quality Feature must satisfy three core criteria:
  > 1. It must fit cleanly within a single Program Increment (8 to 12 weeks), decomposed into 4 to 8 independent user stories that agile teams can deliver across sprints.
  > 2. It must have an explicit **Benefit Hypothesis** stating the measurable customer outcome or business metric it is expected to move.
  > 3. It must have clear, objective **Acceptance Criteria** that define functional boundaries, non-functional requirements, and compliance standards.
  > 
  > In terms of accountability:
  > - **Product Management** owns the Feature: defining the vision, prioritizing it in the Program Backlog using WSJF, and accepting it at the PI System Demo.
  > - The **Product Owner** collaborates closely with Product Management during PI Planning: breaking the Feature down into sprint-level User Stories, ensuring technical feasibility with Developers, and guiding iteration execution."`,
      antiPatternsToAvoid: `1. **The Feature Without a Hypothesis**: Shipping features just because competitors have them, with zero definition of what success looks like.
2. **The Unbounded Feature**: Accepting features that are so massive they cannot possibly be integrated and demonstrated within a single Program Increment.`,
      actionChecklist: [
        "Take a feature planned for your upcoming release and draft an explicit Benefit Hypothesis.",
        "Ensure your feature acceptance criteria include non-functional benchmarks (latency, security)."
      ]
    },
    {
      id: "sub-8-5",
      title: "8.5 Crafting Bulletproof User Stories (INVEST, 3Cs & Given/When/Then BDD)",
      concept: `The **User Story** is the fundamental atomic building block of agile delivery. 
A common failure of junior POs is treating the user story as a frozen, bureaucratic contract. In reality, a user story is a **lightweight placeholder for a continuous conversation** between the Product Owner and the Developers.

### Ron Jeffries' 3Cs of a User Story:
1. **Card (The Anchor)**:
   - The physical or digital card summarizing the requirement in the classic Connextra template:
     $$\\text{As a [Role/Persona], I want [Action/Goal], So that [Measurable Benefit/Value]}$$
2. **Conversation (The Collaboration)**:
   - The collaborative dialogue during backlog refinement between the Product Owner, Developers, and QA. Details, technical nuances, and edge cases are discovered collaboratively.
3. **Confirmation (The Verification)**:
   - The Acceptance Criteria that confirm when the story satisfies expectations and meets the Definition of Done.

---

### Bill Wake's INVEST Quality Checklist:
- **I - Independent**: Minimal dependencies on other stories; can be prioritized or deferred in any sequence.
- **N - Negotiable**: Not a rigid technical specification; implementation details are co-created with Developers.
- **V - Valuable**: Delivers demonstrable customer or business outcome (not a technical chore).
- **E - Estimable**: Sufficiently understood and clear that Developers can forecast relative effort.
- **S - Small**: Sized to fit comfortably within a single 2-week Sprint (ideally 1 to 3 days of team execution).
- **T - Testable**: Unambiguous acceptance criteria enabling automated testing.

---

### Given / When / Then Behavior-Driven Development (BDD) Syntax:
- **Given** [Initial system state, precondition, or context]
- **When** [An action, trigger, or event occurs]
- **Then** [Expected observable result, system state change, or output]`,
      frameworkOrTemplate: `### Master User Story Specification Template

\`\`\`
STORY ID: US-204
STORY TITLE: One-Click Password Reset via Magic Link
PARENT FEATURE: FEAT-40: Frictionless User Authentication
ESTIMATE: 3 Story Points

1. USER STORY NARRATIVE:
As an existing online retail banking customer who has forgotten their password,
I want to receive a secure, one-time 'Magic Link' via my registered email,
So that I can regain immediate account access without answering frustrating security questions.

2. ACCEPTANCE CRITERIA (Given / When / Then BDD Scenarios):

[Scenario 1: Happy Path - Valid Registered Email]
Given an active registered customer on the login page with email 'alex@example.com',
When they click 'Send Magic Link',
Then the system generates a cryptographically secure, SHA-256 token expiring in 15 minutes,
And dispatches an email containing the secure login link within 5 seconds,
And displays the confirmation prompt: "Check your inbox for your instant login link."

[Scenario 2: Security & Privacy - Unregistered Email]
Given a visitor on the login page enters an email that does NOT exist in our user database,
When they click 'Send Magic Link',
Then the system displays the EXACT same confirmation prompt: "Check your inbox for your instant login link",
And does NOT reveal whether the email address exists in the database (preventing user enumeration security attacks).

[Scenario 3: Token Expiration Edge Case]
Given a customer clicks a magic link that was generated 16 minutes ago (expired),
When the link opens in the web browser,
Then display an error message: "This login link has expired for your security",
And provide a single prominent button: "Request a New Magic Link".

3. NON-FUNCTIONAL REQUIREMENTS (NFRs):
• Magic link email dispatch latency must be under 3 seconds at 99th percentile.
• Magic link tokens are one-time use; immediately invalidated upon first successful session creation.
\`\`\``,
      realWorldExample: `### SaaS FinTech Case Study: Eliminating Scope Disasters via BDD

**The Vague Story Disaster:**
A junior PO wrote a user story: *'As a customer, I want to apply promotional coupon codes at checkout so that I save money.'*
The developers coded the feature. 
At release, chaos erupted:
- Customers entered negative coupon codes that added money to their wallets!
- Customers stacked 15 expired coupons simultaneously, getting \$500 orders for \$0!
- The payment gateway crashed, resulting in \$85,000 in fraudulent orders.

**The BDD Intervention:**
The Lead PO instituted mandatory Given/When/Then BDD acceptance criteria for all backlog stories. 
They specified exact scenarios: expired codes, stacking restrictions, minimum order totals, and currency conversions. 
Developers automated the Given/When/Then scenarios using Cucumber and Cypress before writing application code. 
Defect escape rates dropped to **zero** over the subsequent 8 sprints.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "What makes a User Story truly ready for sprint planning? Walk me through your Definition of Ready (DoR)."
- **The Senior PO Answer:**
  > "A user story is ready for sprint planning when it satisfies the **Definition of Ready (DoR)** and the **INVEST criteria**:
  > 
  > 1. **INVEST Compliance**: The story is Independent, Negotiable, Valuable, Estimable, Small (fits in 1-3 days of work), and Testable.
  > 2. **Clear Persona & Value Proposition**: Written in the standard 'As a... I want... So that...' format with clear business rationale.
  > 3. **Unambiguous Acceptance Criteria**: Formatted in Given/When/Then BDD syntax covering both the happy path and critical edge cases, error states, and security boundaries.
  > 4. **No Blockers or External Dependencies**: Architectural enablers, UX wireframes, and external API keys are confirmed available.
  > 5. **Co-Created through Conversation**: The Developers have actively refined the story, asked clarifying questions, and estimated it collaboratively using Fibonacci pointing.
  > 
  > If a story lacks clear acceptance criteria or has unverified dependencies, I do not push it into the sprint. Protecting the Definition of Ready protects the sprint commitment and guarantees team velocity."`,
      antiPatternsToAvoid: `1. **The 30-Page Technical Spec**: Writing exhaustive technical pseudo-code inside the story description, destroying developer autonomy and collaboration.
2. **Happy-Path-Only Stories**: Omitting error flows, database timeouts, and permission failure scenarios from acceptance criteria.`,
      actionChecklist: [
        "Audit 3 stories in your current backlog against the INVEST criteria.",
        "Rewrite the acceptance criteria of your next user story into at least 2 Given/When/Then BDD scenarios (one happy path, one edge case)."
      ]
    }
  ],
  assessment: [
    {
      id: "q8_1",
      question: "In the enterprise requirements hierarchy, what is the key sizing rule for a 'Feature'?",
      options: [
        "It must fit within a single 2-week Sprint",
        "It must fit within a single Program Increment (PI), typically 8 to 12 weeks, and be decomposed into user stories",
        "It must take at least 3 years to build",
        "A feature has no sizing constraints"
      ],
      answer: 1,
      explanation: "Features are sized to fit within a Program Increment (PI), owned by Product Management, and decomposed into User Stories that fit within individual Sprints."
    },
    {
      id: "q8_2",
      question: "What does the 'N' stand for in Bill Wake's INVEST criteria for user stories?",
      options: [
        "Non-functional",
        "Negotiable (the story is an invitation to a conversation, not an inflexible contract)",
        "Normalized",
        "Necessary"
      ],
      answer: 1,
      explanation: "Negotiable means details and specifics are co-created through collaborative dialogue between the Product Owner and Developers."
    },
    {
      id: "q8_3",
      question: "What are the 3Cs of a User Story defined by Ron Jeffries?",
      options: [
        "Code, Compile, Commit",
        "Card, Conversation, Confirmation",
        "Customer, Cost, Criteria",
        "Capacity, Velocity, Constraints"
      ],
      answer: 1,
      explanation: "Card (a placeholder for conversation), Conversation (dialogue fleshing out details), and Confirmation (acceptance criteria confirming completion)."
    },
    {
      id: "q8_4",
      question: "In Behavior-Driven Development (BDD), what structure is used to write unambiguous Acceptance Criteria?",
      options: [
        "As a... I want... So that...",
        "Given [precondition], When [action/trigger], Then [expected observable result]",
        "Select * from Users where Active = 1",
        "To-Do -> In Progress -> Done"
      ],
      answer: 1,
      explanation: "Given/When/Then syntax grounds requirements in clear testable scenarios covering preconditions, triggers, and expected observable outputs."
    },
    {
      id: "q8_5",
      question: "What is an 'Enabler Epic' in enterprise agile portfolio management?",
      options: [
        "An epic that gives bonuses to executives",
        "An epic that extends the architectural runway, infrastructure, exploration, or compliance needed to support future business capabilities",
        "An epic that fires underperforming employees",
        "An epic written only by marketing"
      ],
      answer: 1,
      explanation: "Enabler Epics build the technical, architectural, and compliance foundation (Architectural Runway) necessary for future business features."
    }
  ]
};
