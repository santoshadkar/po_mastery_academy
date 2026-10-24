// Chapter 5: Design Thinking, Personas, Customer Journey & Discovery
module.exports = {
  id: "ch-05",
  title: "5. Design Thinking, Personas & Customer Discovery",
  category: "Customer Discovery",
  level: "Beginner to Advanced",
  readTime: "32 min",
  summary: "Comprehensive masterclass on human-centered customer discovery: the 5 stages of Design Thinking, crafting actionable User Personas and Anti-Personas, building Empathy Maps and Customer Journey Maps, applying Jobs-to-be-Done (JTBD) Forces of Progress, and implementing Teresa Torres' Continuous Discovery Habits & Opportunity Solution Trees.",
  subChapters: [
    {
      id: "sub-5-1",
      title: "5.1 The 5 Stages of Design Thinking (Empathize, Define, Ideate, Prototype, Test)",
      concept: `Originating at Stanford d.school and IDEO (pioneered by David Kelley and Tim Brown), Design Thinking is an iterative, non-linear problem-solving methodology that prioritizes understanding human needs before writing software.

A critical disease of traditional software development is **Solution-First Thinking**—developers and business analysts racing to build solutions before validating whether they are solving the right problem. Design Thinking enforces rigorous divergence and convergence across the **Double Diamond**:

### The 5 Core Stages:
1. **Empathize (Diverge in the Problem Space)**:
   - Immerse yourself in the lives, daily workflows, and physical environments of real users. 
   - Conduct contextual inquiry, observational interviews, and shadowing. 
   - *Core Principle*: Never ask users what feature they want; observe where they struggle, hesitate, or create manual workarounds.
2. **Define (Converge on the Problem Statement)**:
   - Synthesize raw research observations into an actionable, human-centered problem statement.
   - Use the **Point of View (POV)** formula:
     *[User Persona] needs [User Need / Progress] because [Surprising Underlying Insight]*.
   - Reframe the POV into creative launchpads using **How Might We (HMW)** questions.
3. **Ideate (Diverge in the Solution Space)**:
   - Generate a vast volume and variety of potential solutions without judgment or evaluation.
   - Employ techniques like Crazy Eights, Worst Possible Idea, and SCAMPER (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse).
4. **Prototype (Make Ideas Tangible)**:
   - Build rapid, inexpensive, low-fidelity representations (paper wireframes, Figma click-throughs, concierge mocks) specifically designed to test hypotheses.
   - *Rule*: Build only enough fidelity to answer the riskiest assumption.
5. **Test (Behavioral Validation)**:
   - Place prototypes in the hands of real users in their authentic workflow environment.
   - Observe where they get confused or express delight. Iterate or kill hypotheses based on empirical evidence.`,
      frameworkOrTemplate: `### The Double Diamond & The Point-of-View (POV) Framing Matrix

\`\`\`
      DISCOVER               DEFINE                DEVELOP                DELIVER
  (Divergent Thinking) (Convergent Thinking) (Divergent Thinking) (Convergent Thinking)
       /╲                     ╲/                  /╲                     ╲/
      /  ╲                   ╱  ╲                /  ╲                   ╱  ╲
     /    ╲                 ╱    ╲              /    ╲                 ╱    ╲
    /      ╲               ╱      ╲            /      ╲               ╱      ╲
   / Empathize ╲         ╱ Problem  ╲        ╱ Brainstorm ╲         ╱ Tested   ╲
  / Customer    ╲       ╱ Statement  ╲      ╱ Competing    ╲       ╱ Working    ╲
 / Research      ╲     ╱ Clarity      ╲    ╱ Solutions      ╲     ╱ Software     ╲
+─────────────────+───+────────────────+──+──────────────────+───+────────────────+
      PROBLEM SPACE (Find the Right Problem)      SOLUTION SPACE (Build the Thing Right)
\`\`\`

### POV Formulation Worksheet:
- **User Persona**: Junior ER Triage Nurse working overnight 12-hour emergency shifts.
- **Need / Progress**: A method to record and cross-verify critical pediatric drug dosages in under 15 seconds.
- **Surprising Insight**: Nurses are terrified of dosage math errors during chaotic emergencies, but current hospital software requires 22 mandatory screen dropdowns, forcing nurses to write dosage notes on latex surgical gloves with ballpoint pens!
- **Resulting 'How Might We' (HMW) Question**: *How Might We enable triage nurses to calculate and double-verify pediatric dosages with zero screen navigation in under 10 seconds?*`,
      realWorldExample: `### Healthcare Medication Adherence Case Study: Stanford d.school in Practice

**The Initial Solution Mandate:**
A pharmaceutical technology client allocated \$400k to develop a mobile application with recurring push alarms, calendar sync, and gamified badges to remind elderly diabetic patients to inject insulin on time. 

**The Empathize Fieldwork:**
Rather than building the mobile app, the Product Owner and Lead UX Designer shadowed 14 diabetic patients aged 68-82 in their homes over 2 weeks. 
The discovery was startling: Patients were NOT forgetting to take their insulin; they set their own kitchen timers reliably. 
The actual failure point: Over 70% of the patients suffered from severe osteoarthritis in their fingers and physically could not pinch and twist the microscopic plastic safety cap off the insulin syringe vial! The mobile app was completely irrelevant.

**The Solution:**
The team scrapped the app and partnered with industrial designers to create an ergonomically molded syringe cap with an oversized silicone grip lever costing \$0.12 per unit. Medication adherence surged by 82% across the patient cohort, saving millions in emergency hospitalization costs.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you integrate Design Thinking into an Agile Scrum environment where developers expect user stories ready to code every 2-week sprint?"
- **The Senior PO Answer:**
  > "I resolve the tension between Design Thinking and Scrum through **Dual-Track Agile** (Discovery and Delivery tracks operating in tandem).
  > 
  > If you only run Design Thinking inside a single 2-week sprint, developers are starved for work while you conduct user interviews, or worse, you rush discovery and build the wrong feature.
  > 
  > Instead, my Lead Product Designer, Lead Architect, and I (the Product Trio) operate in the **Discovery Track** 1 to 2 sprints ahead of the development team:
  > - We conduct empathy interviews, frame POVs, and test low-fidelity prototypes with real users.
  > - We involve the Developers in discovery: 1 or 2 engineers rotate through weekly user interview sessions to see real customer pain firsthand.
  > - Once an assumption passes usability and desirability tests in Discovery, we slice it into clear, well-formed User Stories with Given/When/Then acceptance criteria for the **Delivery Track**.
  > 
  > In this way, the development backlog is continuously fed with validated customer problems, preventing wasteful rework and technical churn."`,
      antiPatternsToAvoid: `1. **The Solution in Disguise**: Writing a problem statement that dictates a specific UI solution (e.g. 'The user needs a blue dropdown menu').
2. **Skipping Low-Fidelity Prototyping**: Spending 4 weeks building a fully coded React prototype before validating basic conceptual desirability on paper sketches.`,
      actionChecklist: [
        "Frame your next epic's problem statement using the Point of View (POV) formula.",
        "Generate at least 3 distinct 'How Might We' (HMW) questions before brainstorming feature solutions.",
        "Test paper or wireframe mockups with at least 5 representative users before developers write a single line of backend code."
      ]
    },
    {
      id: "sub-5-2",
      title: "5.2 Crafting Actionable User Personas & Anti-Personas",
      concept: `A User Persona is an empirical archetype representing a critical segment of your target customer base, synthesized from qualitative interviews, behavioral analytics, and contextual observations—**never from marketing demographic stereotypes**.

### The Anatomy of an Actionable Persona vs Demographic Fluff:
- **Demographic Fluff (Waste)**: Irrelevant biographical trivia (e.g., *'Sarah is 34, drives a red Volkswagen Golf, has two cats, and drinks oat milk lattes'*). This gives software engineers zero guidance on how to architect a database or design a workflow.
- **Actionable Behavioral Gold**: 
  - **Triggers**: What specific real-world event forces the user to seek out your product?
  - **Jobs & Goals**: What progress is the user desperately trying to accomplish?
  - **Technical Environment & Constraints**: What device, screen size, network latency, or security permissions constrain their usage?
  - **Emotional Anxieties**: What does the user fear will go wrong if they use your tool?

### The Strategic Power of the Anti-Persona:
Equally critical for an empowered Product Owner is defining who the product is **NOT** built for. 
Trying to satisfy every possible customer segment leads to a bloated, confusing, and contradictory product. 
An **Anti-Persona** explicitly documents users whom the business intentionally refuses to serve—because their technical needs conflict with your core architecture, their unit economics are unprofitable, or their requests distract from your primary North Star.`,
      frameworkOrTemplate: `### Enterprise Actionable Persona & Anti-Persona Templates

\`\`\`
[ACTIONABLE USER PERSONA]: "DevOps Dan" - Enterprise Reliability Guardian
• Role: Staff Site Reliability Engineer (SRE) at Tier-1 Cloud Enterprise
• Primary Trigger: PagerDuty alert fires at 2:15 AM indicating API latency degradation.
• Core Job-to-be-Done: Isolate root-cause database query bottlenecks in <5 minutes without waking up senior executives.
• Critical Anxieties: Fear of triggering cascading microservice outages; intense alert fatigue from noisy Slack channels.
• Technical Constraints: Terminal & CLI native; refuses to use heavy browser GUIs during live production incidents; requires SOC2 Type II compliance and strict role-based access control (RBAC).
• Success Metric: Mean Time to Resolution (MTTR) reduced by 50%.

--------------------------------------------------------------------------------

[EXPLICIT ANTI-PERSONA]: "Customization Charlie" - Bespoke On-Premises Buyer
• Role: IT Director at a legacy regional bank requesting custom software contracts.
• Why We Say NO:
  1. Charlie demands a 100% custom on-premise installation running on Windows Server 2012.
  2. Charlie demands bespoke database schemas and manual monthly code patches.
• The Strategic Trade-Off:
  Our business model is a multi-tenant cloud SaaS with automated CI/CD pipelines. 
  Accommodating Charlie would force us to allocate 30% of our core engineering team to professional services maintenance, crippling our cloud feature velocity for 10,000 paying users.
\`\`\``,
      realWorldExample: `### B2B SaaS Case Study: The \$2M Anti-Persona Salvation

**The Crisis:**
A fast-growing B2B customer support platform was experiencing high customer churn (38% annualized) and massive engineering strain. 
An investigation revealed that the sales team was selling the software to two fundamentally incompatible personas:
1. **Mid-Market SaaS Companies (10-50 support agents)**: Wanted automated AI ticket categorization, Slack integrations, and lightweight webhooks.
2. **Solo Freelance Consultants (1 user)**: Paid \$15/month, generated 70% of support tickets, and demanded complex custom billing invoice generators.

**The PO's Anti-Persona Mandate:**
The PO formally defined 'Solo Freelancers' as an **Anti-Persona**. 
- The company discontinued the \$15/month solo tier.
- The minimum entry contract was set to 5 seats (\$250/month).
- All custom invoice builder feature requests were officially purged from the backlog.

**The Business Impact:**
Support ticket volume plunged by 62% overnight, freeing engineering capacity to build the enterprise AI ticket routing engine. 
Net Revenue Retention (NRR) jumped from 84% to 128%, and ARR doubled to \$12M within 14 months.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you prevent personas from becoming static, useless documents that teams ignore after sprint zero?"
- **The Senior PO Answer:**
  > "Personas become useless when they are filled with fictional marketing fluff and stored in forgotten Google Drive folders.
  > 
  > I keep personas alive through three operational practices:
  > 1. **Behavioral Grounding**: I build personas exclusively around real customer interview transcripts, behavioral telemetry data, and direct customer quotes—updating them quarterly as user habits evolve.
  > 2. **Contextual Integration in User Stories**: In our Jira backlog, every single User Story references the specific persona: *'As DevOps Dan, I need...'*. During Sprint Planning and backlog refinement, when debating whether a feature needs a wizard or a keyboard shortcut, we ask: *'Would DevOps Dan use this CLI shortcut or this wizard?'*
  > 3. **The Anti-Persona Shield**: I use our Anti-Persona actively in stakeholder roadmap discussions. When sales executives bring custom one-off feature requests that threaten our core architecture, I point to the agreed Anti-Persona document to explain why saying 'No' protects our core product economics."`,
      antiPatternsToAvoid: `1. **The 'Everyone is our Customer' Delusion**: Refusing to declare an Anti-Persona out of fear of leaving money on the table.
2. **Stock Photo Fiction**: Creating personas with glamorous stock photography and fabricated backstories that have no correlation with real user telemetry.`,
      actionChecklist: [
        "Audit your existing personas: Strip out demographic fluff (age, marital status, hobbies) and replace with technical constraints, triggers, and anxieties.",
        "Convene an executive session to define at least one explicit Anti-Persona for your product."
      ]
    },
    {
      id: "sub-5-3",
      title: "5.3 Empathy Mapping (Says, Thinks, Does, Feels)",
      concept: `Created by Dave Gray and XPLANE, the **Empathy Map** is a collaborative diagnostic tool used by Product Owners, designers, and developers to develop a rich, multi-dimensional understanding of a user's internal mental model and emotional state during a specific task or journey phase.

### The 4 Core Quadrants:
1. **Says**:
   - Explicit verbal statements and quotes uttered by the customer during interviews, usability sessions, or support interactions.
   - *Example*: *"I can never tell if my payment actually cleared or if I just charged my credit card twice!"*
2. **Thinks**:
   - What the customer is thinking internally but might feel too polite, intimidated, or embarrassed to state aloud to an interviewer.
   - *Example*: *"I hope I don't look completely incompetent in front of my team lead"*, *"This software looks like it was built in 1998."*
3. **Does**:
   - Observable physical actions, behaviors, and unprompted workarounds that the user enacts in their real environment.
   - *Example*: Keeps a printed Excel cheat sheet taped to their computer monitor; clicks 'Save' 4 times repeatedly; copies data out of your app and pastes it into Notepad.
   - *Crucial Fact*: **The 'Does' quadrant is where 90% of product breakthroughs are born**, because what users *do* often contradicts what they *say*!
4. **Feels**:
   - The emotional states and visceral reactions experienced by the user throughout the workflow.
   - *Example*: Anxious, overwhelmed, skeptical, relieved, frustrated, confident.

### The Foundation: Pains and Gains
Underneath the 4 quadrants sit two critical syntheses:
- **Pains**: Fears, obstacles, friction points, and risks the user is trying to escape.
- **Gains**: Desired outcomes, aspirations, efficiencies, and emotional rewards the user wants to achieve.`,
      frameworkOrTemplate: `### Empathy Map Canvas & Diagnostic Worksheet

\`\`\`
                          +-----------------------------------+
                          |            THE USER               |
                          |  (e.g., Hospital Triage Nurse)    |
                          +-----------------+-----------------+
                                            │
          ┌─────────────────────────────────┴─────────────────────────────────┐
          │                                                                   │
          ▼                                                                   ▼
+-----------------------------------+               +-----------------------------------+
|              THINKS               |               |               FEELS               |
| - "Is this patient going into     |               | - Overwhelmed by monitor alarms   |
|   septic shock right now?"        |               | - Exhausted after 10-hour shift   |
| - "I don't trust this automated   |               | - Anxious about making a dosage   |
|   risk calculation score."        |               |   calculation error               |
+-----------------------------------+               +-----------------------------------+
          │                                                                   │
          ▼                                                                   ▼
+-----------------------------------+               +-----------------------------------+
|               SAYS                |               |               DOES                |
| - "The system requires too many   |               | - Bypasses mandatory dropdown by  |
|   clicks during an emergency."    |               |   typing 'NA' into free-text field|
| - "Can someone verify this dose?" |               | - Writes vitals on surgical glove |
+-----------------------------------+               +-----------------------------------+
          │                                                                   │
          └─────────────────────────────────┬─────────────────────────────────┘
                                            │
          ┌─────────────────────────────────┴─────────────────────────────────┐
          ▼                                                                   ▼
+-----------------------------------+               +-----------------------------------+
|              PAINS                |               |              GAINS                |
| - 22 redundant screen navigations |               | - Instant color-coded warning for |
| - Software timeouts during peak   |               |   critical vitals in <1 second    |
+-----------------------------------+               +-----------------------------------+
\`\`\``,
      realWorldExample: `### FinTech Accounting Case Study: Uncovering Hidden Workarounds via 'Does'

**The Mystery:**
A cloud accounting software enterprise built an automated AI receipt scanner. When surveyed, accountants politely said: *'The AI tool is great!'* (Says). Yet daily active usage of the tool was less than 8%.

**The Empathy Mapping Session:**
The PO and lead engineer conducted on-site contextual shadowing of 6 accounting clerks and mapped their observations into an Empathy Map:
- **Says**: *"The AI scanner works fine."*
- **Does**: Clerks printed digital PDF receipts onto paper, drew red highlighter lines under the Tax ID number, and manually typed the data into an Excel spreadsheet on a second monitor!
- **Thinks**: *"If this AI gets a single digit wrong, our firm gets audited by the IRS and I lose my job."*
- **Feels**: Deep anxiety and lack of trust in opaque 'black box' automation.

**The Solution:**
Instead of trying to improve the AI's accuracy from 98% to 99%, the PO redesigned the interface: a side-by-side verification screen where the software highlighted the exact source bounding box on the original PDF receipt alongside the extracted field. 
Accountants could verify fields in 2 seconds with 100% confidence. Adoption surged from 8% to 94% in 30 days.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you use Empathy Mapping to influence developers who are resistant to changing a technical architecture?"
- **The Senior PO Answer:**
  > "Developers care deeply about solving real problems, but they become skeptical when changes are framed as subjective opinions or executive whims.
  > 
  > I invite developers directly into Empathy Mapping workshops immediately following customer interviews or user testing sessions. 
  > 
  > When an engineer watches a real user struggle on video—watching them hesitate in the 'Does' quadrant, clicking a button 5 times in frustration, or noting the discrepancy between what the user said ('It was easy') and what they thought ('I feel stupid')—empathy transforms from an abstract word into a visceral reality.
  > 
  > When developers co-create the Empathy Map, they don't see technical refactoring as a chore; they see it as directly eliminating customer pain. Some of our best architectural simplifications have come directly from engineers who realized our multi-layered API design was causing the 4-second loading spinner that terrified users."`,
      antiPatternsToAvoid: `1. **The Solo PO Exercise**: Creating an Empathy Map alone in an office and emailing it as a slide to the team. Empathy mapping is a team alignment ritual.
2. **Ignoring Contradictions**: Glossing over differences between what a user says and does. Contradictions are the primary indicator of unarticulated needs.`,
      actionChecklist: [
        "Host a 45-minute Empathy Mapping session with your Scrum Team after observing your next customer usability test.",
        "Scrutinize the 'Does' quadrant for customer workarounds, third-party spreadsheets, or handwritten notes."
      ]
    },
    {
      id: "sub-5-4",
      title: "5.4 Customer Journey Mapping (Touchpoints & Friction Points)",
      concept: `A **Customer Journey Map (CJM)** is a chronological visualization of the holistic experience a customer undergoes to accomplish a specific goal with your organization. 
It spans across channels, touchpoints, internal departments, and temporal phases.

### The 6 Essential Layers of a Customer Journey Map:
1. **Phases (Horizontal Timeline)**:
   - The sequential stages of the user's engagement (e.g. *Trigger & Discovery $\\rightarrow$ Consideration $\\rightarrow$ First-Time Setup $\\rightarrow$ Core Value Habit $\\rightarrow$ Renewal / Escalation*).
2. **User Actions & Behaviors**:
   - The concrete steps the customer performs at each phase (e.g. clicks Google Ad, fills out 12 form fields, enters credit card, encounters password error).
3. **Touchpoints & Channels**:
   - The specific interfaces and media involved (e.g. Mobile iOS app, transactional email, SMS OTP code, live phone support, physical hardware).
4. **Emotional Sentiment Curve (The Friction Wave)**:
   - A continuous visual graph charting customer emotion from Delight (+5) to Neutral (0) to Frustration / Rage (-5).
   - The deepest valleys on this curve highlight your product's **Moments of Truth**—where users abandon or churn.
5. **Pain Points & Blockers**:
   - The underlying systemic friction (e.g. confusing technical jargon, delayed email verification, unexpected pricing surprises).
6. **Product Owner Opportunities**:
   - High-value backlog hypotheses, enablers, and automation features that eliminate friction and convert emotional valleys into competitive delighters.`,
      frameworkOrTemplate: `### End-to-End Customer Journey Map Matrix

| Journey Phase | 1. Discovery & Evaluation | 2. Onboarding & Setup | 3. First Value Transaction | 4. Support Issue Escalation | 5. Renewal & Expansion |
|---|---|---|---|---|---|
| **User Action** | Clicks LinkedIn sponsored case study | Enters email & configures workspace | Uploads first customer dataset | Encounters database sync timeout | Receives annual license invoice |
| **Touchpoint** | Web Browser Landing Page | Registration Wizard UI | S3 Cloud Ingestion Endpoint | Zendesk Chatbot & Email | Automated Stripe Email Invoice |
| **User Emotion** | 🙂 Curious (+2) | 😐 Neutral (0) | 🤩 Delighted (+4) | 😡 Furious (-4) | 😐 Anxious (-1) |
| **Pain Point** | Pricing page hides enterprise tiers | Requires 16-character alphanumeric password | CSV upload format errors out without line numbers | Chatbot gives generic loop; 48-hr wait | Unexpected 20% price increase without notice |
| **PO Opportunity** | Add interactive pricing tier estimator | Implement Social SSO (Google/GitHub 1-click) | Add real-time client-side CSV syntax validator | Deploy In-App Dev Diagnostic Log viewer | Implement 30-day proactive ROI review email |`,
      realWorldExample: `### E-Commerce Case Study: The \$1.4M Shopping Cart Valley

**The Problem:**
A fashion e-commerce retailer noticed a 58% drop-off between cart addition and order completion. 

**The Customer Journey Map Discovery:**
The PO plotted the end-to-end journey across 7 chronological steps. 
The emotional curve remained positive through product selection (+3) and shipping address entry (+2). 
However, at **Step 5: Shipping Fee Calculation**, the emotional sentiment plummeted into a deep valley (-4). 
Customers who had spent 15 minutes picking a \$45 shirt were suddenly confronted with an unexpected \$14.99 shipping fee, plus a mandatory account creation requirement with email verification.

**The PO's Intervention:**
1. **Eliminate the Valley**: The PO moved shipping fee calculation to the initial cart preview with a dynamic banner: *'Add \$5.01 more to qualify for 100% FREE Express Shipping!'*
2. **Remove Account Creation Barrier**: Introduced a 1-Click Guest Checkout flow with Apple Pay and Google Pay.

**The Business Result:**
- Cart abandonment dropped from **58% to 21%**.
- Average Order Value (AOV) increased by **24%** as shoppers added small accessories to hit the free-shipping threshold.
- Annual checkout revenue surged by **\$1.4M**.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you use Customer Journey Mapping to identify which features to prioritize on your roadmap?"
- **The Senior PO Answer:**
  > "I use Customer Journey Mapping as an empirical compass to locate our product's 'critical friction valleys'.
  > 
  > First, I map the end-to-end journey with real telemetry data and customer interview feedback, tracking both user actions and their emotional sentiment score.
  > 
  > Second, I look for the **deepest emotional dips**—especially those that occur immediately prior to the core value exchange. If users experience a massive dip during onboarding or payment checkout, that is a leaky bucket that kills retention and acquisition ROI.
  > 
  > Third, I formulate backlog hypotheses targeting those exact valleys: What is the thinnest vertical slice we can build to turn that negative emotional valley into a neutral or positive experience? 
  > 
  > By prioritizing features that smooth out the journey rather than adding random bells and whistles to steps users already enjoy, we achieve the highest possible return on engineering investment."`,
      antiPatternsToAvoid: `1. **The Happy Path Fantasy**: Mapping only the idealized workflow where the user never encounters an error, forgotten password, or credit card rejection.
2. **Inside-Out Silo Mapping**: Mapping the journey according to internal company departments (e.g. Sales team -> Billing team) rather than the customer's actual perspective.`,
      actionChecklist: [
        "Map the customer journey for your product's primary conversion workflow from first touch to value delivery.",
        "Identify the single lowest emotional sentiment dip on the journey and draft an enabler backlog story to eliminate that friction."
      ]
    },
    {
      id: "sub-5-5",
      title: "5.5 Jobs-to-Be-Done (JTBD) & The Forces of Progress",
      concept: `Pioneered by Harvard Business School Professor Clayton Christensen, Bob Moesta, and Tony Ulwick, **Jobs-to-Be-Done (JTBD)** theory asserts that customers do not buy products or features; they **'hire' products to make progress in specific circumstances**.

### Christensen's Famous Axiom:
$$\\text{“People don’t want a quarter-inch drill bit. They want a quarter-inch hole in the wall... so they can hang a photo... so they can feel like a loving parent.”}$$

### The 3 Dimensions of a Customer Job:
1. **Functional Job**: The practical, physical task or operational objective (e.g. transfer \$500 to a supplier, extract sales data to a spreadsheet).
2. **Emotional Job**: How the customer wants to feel personally during and after the task (e.g. feel in control, avoid feeling anxious, feel confident).
3. **Social Job**: How the customer wants to be perceived by their peers, manager, or clients (e.g. appear competent, look innovative, avoid professional embarrassment).

---

### The 4 Forces of Progress (The Physics of Customer Switching):
Why do customers switch from their current habit or competitor to your product? Bob Moesta defines the 4 competing forces:

$$\\text{Switching Occurs When: } (\\text{Push of Current Pain} + \\text{Pull of New Solution}) > (\\text{Anxiety of the New} + \\text{Habit of the Present})$$

1. **The Push of Current Pain**: The acute frustration, failure, or exhaustion experienced with their existing solution.
2. **The Pull of the New Solution**: The magnetic promise, efficiency, and delight offered by your new capability.
*AGAINST*
3. **The Anxiety of the Unknown**: Fear that switching will fail, cause data loss, look bad to the boss, or take weeks to learn.
4. **The Habit of the Present / Inertia**: Muscle memory, existing spreadsheets, and the comfortable familiarity of existing routines.`,
      frameworkOrTemplate: `### JTBD Job Story Format vs Traditional User Story Format

While traditional User Stories emphasize *who* the user is ('As a...'), **Job Stories** ground requirements in the *situational trigger* and *desired progress*:

\`\`\`
[TRADITIONAL USER STORY - Role-Focused (Can lead to assumption traps)]:
"As a mobile banking customer, I want a split-bill button so that I can split bills."

[JTBD JOB STORY - Context, Trigger & Emotional Progress Focused]:
"WHEN I am out at dinner with 6 friends on a Friday night and the waiter hands us one single paper bill,
I WANT TO instantly scan the receipt with my camera, assign dishes with a swipe, and auto-request payment via payment handles,
SO I CAN avoid uncomfortable money arguments, eliminate manual mental math, and leave the restaurant gracefully without delay."
\`\`\`

### The Forces of Progress Decision Canvas:
- **Push**: *"Our monthly financial reconciliation in Excel takes 3 days every month and crashed twice last quarter."*
- **Pull**: *"This cloud tool claims to auto-reconcile in 15 minutes with automated bank feeds."*
- **Anxiety**: *"What if the automated bank sync misses a transaction and causes a tax penalty?"* $\\rightarrow$ *PO Action: Build audit logs and manual review overrides!*
- **Habit**: *"Our accountants have 10 years of muscle memory in Excel hotkeys."* $\\rightarrow$ *PO Action: Build 1-click export to Excel and familiar keyboard shortcuts!*`,
      realWorldExample: `### Clayton Christensen's Famous McDonald's Milkshake Breakthrough

**The Failure of Traditional Market Research:**
McDonald's wanted to increase milkshake sales. Traditional focus groups asked consumers: *'How can we improve our milkshakes? Thicker? Sweeter? More chocolate? Lower price?'* 
McDonald's tweaked recipes, introduced flavors, and reduced prices. Sales did not move by even 1%.

**The JTBD Investigation:**
Researcher Bob Moesta spent 18 hours standing in a McDonald's observing buyers. 
He discovered that **nearly 50% of milkshakes were sold before 8:30 AM to solo commuters who drove off in their cars alone**. 

**Why Did They 'Hire' the Milkshake?**
- **The Circumstance**: A boring 45-minute highway commute with one hand on the steering wheel.
- **The Real Competitors**: Not Burger King milkshakes, but *bananas* (eaten in 60 seconds, hungry by 9:30 AM), *donuts* (greasy hands on steering wheel), *bagels* (dry, impossible to spread cream cheese while driving).
- **The Job**: A thick, viscous milkshake took 25 minutes to suck through a straw, fit cleanly in the vehicle cup holder, kept their hand occupied, and kept them full until lunch!

**The Innovation:**
McDonald's made the morning milkshake even thicker with fruit chunks to prolong the commute experience, moved the dispenser in front of the counter with a swipe-and-go card reader, and morning milkshake sales surged 7x.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "What is the fundamental difference between a User Story and a Jobs-to-Be-Done (JTBD) Job Story? When do you choose one over the other?"
- **The Senior PO Answer:**
  > "The difference lies in where the requirement anchors its primary assumption:
  > - Traditional User Stories anchor on **User Persona and Identity**: *'As a [Persona], I want [Feature], so that [Benefit]'*. This works well during technical execution when personas have distinct access permissions (e.g. Admin vs Read-Only user).
  > - JTBD Job Stories anchor on **Context, Causality, and Progress**: *'WHEN [Trigger/Circumstance], I WANT TO [Action], SO I CAN [Progress]'*.
  > 
  > Personas often blind teams into thinking that demographic attributes dictate behavior (e.g. 'Sarah is a 32-year-old millennial so she wants gamification'). JTBD recognizes that a 22-year-old college student and a 65-year-old CFO have the exact same job when their plane is cancelled: *'When my flight is delayed, I want to rebook in 30 seconds so I can get home.'*
  > 
  > I use JTBD during customer discovery and value proposition design to uncover why customers switch solutions, and I use INVEST User Stories with Given/When/Then acceptance criteria during sprint delivery."`,
      antiPatternsToAvoid: `1. **Ignoring Anxiety and Habit**: Pouring all product effort into the 'Pull' of new features while doing nothing to alleviate user 'Anxieties' (fear of migration) or 'Habits' (legacy workflows).
2. **Confusing Features with Jobs**: Declaring that the job is 'To use our software'. Software is never the job; the job is the human progress the software enables.`,
      actionChecklist: [
        "Select your next major roadmap initiative and map the 4 Forces of Progress (Push, Pull, Anxiety, Habit).",
        "Formulate at least 2 Job Stories (When... I want to... So I can...) for your next backlog refinement."
      ]
    },
    {
      id: "sub-5-6",
      title: "5.6 Continuous Discovery Habits & Opportunity Solution Trees",
      concept: `In *Continuous Discovery Habits*, product discovery expert Teresa Torres outlines how premier product trios (**Product Owner/Manager, Lead Product Designer, and Lead Software Engineer**) maintain weekly contact with customers to guide continuous product decisions.

### The Contrast: Project-Based Discovery vs Continuous Discovery
- **Project-Based Discovery (Waterfall Discovery)**: The team spends 3 months doing intense research once a year, creates a 90-page report, locks in a 12-month roadmap, and speaks to zero customers while coding for the rest of the year.
- **Continuous Discovery**: The product trio conducts **at least one customer touchpoint every single week**, conducting lightweight assumption tests and discovering opportunities in cadence with sprint delivery.

### The Opportunity Solution Tree (OST):
The Opportunity Solution Tree is a visual problem-solving framework that prevents teams from jumping straight from executive business goals into unvalidated feature delivery:

1. **Desired Outcome (The Root)**:
   - A single, measurable, outcome-oriented metric (e.g., *'Increase 30-day active user retention from 24% to 45%'*).
2. **Opportunities (The Branches - Customer Problem Space)**:
   - Unmet customer needs, pain points, desires, and friction points discovered through weekly interviews.
   - Framed as customer needs, NOT features (e.g. *'I struggle to find files shared in chat channels last week'*).
3. **Solutions (The Leaves - Solution Space)**:
   - Multiple competing ideas explored for each opportunity. 
   - *Rule*: Never explore only one solution for an opportunity; always compare 2 or 3 competing approaches.
4. **Assumption Tests (The Soil - Empirical Validation)**:
   - Discrete, rapid experiments designed to test the riskiest underlying assumptions behind a solution across 5 dimensions:
     - **Desirability**: Do customers actually want this?
     - **Usability**: Can customers figure out how to use it?
     - **Feasibility**: Can our engineers build and scale it within our stack?
     - **Viability**: Does it work for our business model and legal compliance?
     - **Ethics**: Does it cause harm or unintended negative consequences?`,
      frameworkOrTemplate: `### Opportunity Solution Tree (OST) Architecture

\`\`\`
                     +------------------------------------+
                     |          DESIRED OUTCOME           |
                     | (Increase 30-Day Retention to 45%) |
                     +-----------------+------------------+
                                       │
          ┌────────────────────────────┴────────────────────────────┐
          ▼                                                         ▼
+------------------------------------+    +------------------------------------+
|           OPPORTUNITY A            |    |           OPPORTUNITY B            |
| "I struggle to find files shared   |    | "I don't know who is currently     |
|  in team channels last week."      |    |  editing the shared document."     |
+-----------------+------------------+    +-----------------+------------------+
                  │                                         │
     ┌────────────┴────────────┐               ┌────────────┴────────────┐
     ▼                         ▼               ▼                         ▼
+-----------+            +-----------+   +-----------+            +-----------+
|Solution A1|            |Solution A2|   |Solution B1|            |Solution B2|
| AI Global |            | Pinned    |   | Real-Time |            | Soft File |
| Search Bar|            | Channel   |   | Live Co-  |            | Locking & |
| with OCR  |            | Bookmarks |   | Editing   |            | Check-In  |
+-----+-----+            +-----+-----+   +-----+-----+            +-----+-----+
      │                        │               │                        │
      ▼                        ▼               ▼                        ▼
[Assumption              [Assumption     [Assumption              [Assumption
    Tests]                   Tests]          Tests]                   Tests]
\`\`\`

### Story-Based Interviewing Technique:
Never ask customers: *"What features do you want?"* or *"Would you buy an AI search tool?"* (Customers are notoriously bad at predicting their future behavior).
Instead, ask for concrete stories about past behavior:
- *"Tell me about the last time you tried to find an old project file. What happened first? What did you do next? Where did you get stuck?"*`,
      realWorldExample: `### WealthTech Case Study: Saving \$600,000 with an Opportunity Solution Tree

**The Executive Mandate:**
The CEO of an investment platform demanded that the product team build an 'Automated Crypto Day-Trading Bot', convinced that crypto hype would drive user growth.

**The PO's OST Alignment:**
The PO anchored the conversation to the company's agreed quarterly Desired Outcome: *'Increase customer Assets Under Management (AUM) by 25%'*. 
Through 12 continuous weekly user interviews, the product trio mapped real customer opportunities under that outcome:
- **Discovered Opportunity**: *'I have \$25,000 sitting in my checking account losing value to inflation, but I am terrified of stock market volatility.'*
- **Competing Solutions**:
  - Solution 1: Automated Crypto Trading Bot (CEO's idea).
  - Solution 2: Automated High-Yield US Treasury Bill Auto-Sweep.

**Assumption Testing:**
The team ran a 3-day 'Painted Door' prototype test with 1,000 active users:
- Crypto Bot: 1.8% click-through rate; 72% expressed severe fear of capital loss.
- Treasury Bill Auto-Sweep: 42% click-through rate; 86% of respondents requested immediate waitlist onboarding!

**The Result:**
The OST and rapid assumption test saved the company 5 months of complex blockchain development. The team built the Treasury sweep in 4 sprints, attracting \$48M in new AUM within 90 days.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you ensure you are building the right thing rather than just building things right?"
- **The Senior PO Answer:**
  > "Building the thing right is software engineering and quality assurance; building the *right thing* is Product Discovery.
  > 
  > I practice Continuous Discovery Habits using Teresa Torres' Opportunity Solution Tree framework.
  > 
  > First, I establish a clear, measurable **Desired Outcome** with leadership (e.g. increase 30-day retention).
  > 
  > Second, my Product Trio (myself, Lead Designer, and Lead Engineer) conducts weekly story-based customer interviews. We discover unmet customer pain points—the **Opportunities**.
  > 
  > Third, for every opportunity, we brainstorm multiple competing solutions, and rather than building full features, we break them into their riskiest underlying assumptions: Desirability, Usability, Feasibility, Viability, and Ethics.
  > 
  > We run rapid 2-day assumption tests—such as painted doors, interactive prototypes, or concierge tests—to gather empirical behavioral evidence. Only when an idea demonstrates proven customer pull and technical feasibility do we write user stories and commit engineering sprint capacity. This prevents our team from wasting months building beautifully engineered features nobody uses."`,
      antiPatternsToAvoid: `1. **Falling in Love with Your First Solution**: Exploring only one solution for a problem and defending it dogmatically.
2. **Asking Speculative Interview Questions**: Asking users 'Would you use this feature if we built it?' instead of investigating past behavior.`,
      actionChecklist: [
        "Institute a weekly 30-minute customer interview slot for your Product Trio (PO, Designer, Engineer).",
        "Construct an Opportunity Solution Tree mapping your current sprint goal back to customer opportunities and assumption tests."
      ]
    }
  ],
  assessment: [
    {
      id: "q5_1",
      question: "In the 5 stages of Design Thinking, why is the 'Define' stage placed between 'Empathize' and 'Ideate'?",
      options: [
        "To allow time for developers to write unit tests",
        "To synthesize empathetic research observations into a clear, actionable problem statement before brainstorming solutions",
        "To negotiate contracts with external agencies",
        "To calculate story point velocity"
      ],
      answer: 1,
      explanation: "The Define stage converges research observations into a sharp, human-centered problem statement, ensuring ideation focuses on the real customer problem."
    },
    {
      id: "q5_2",
      question: "According to Clayton Christensen's Jobs-to-be-Done (JTBD) theory, why do customers buy products?",
      options: [
        "Because of aggressive television advertising",
        "To 'hire' the product to make progress in a specific circumstance and achieve functional, social, or emotional outcomes",
        "Because products have the most advanced technical specifications",
        "Because of company branding"
      ],
      answer: 1,
      explanation: "JTBD asserts that people hire products to solve specific problems and make progress in their lives, rather than buying features for their own sake."
    },
    {
      id: "q5_3",
      question: "In an Opportunity Solution Tree (Teresa Torres), what directly connects a Desired Outcome to Solutions?",
      options: [
        "Executive mandates",
        "Customer Opportunities (unmet customer needs, pain points, and desires)",
        "JIRA ticket numbers",
        "Gantt chart milestones"
      ],
      answer: 1,
      explanation: "An OST connects Desired Outcomes to Opportunities (unmet customer needs), and then explores multiple competing Solutions for each opportunity."
    },
    {
      id: "q5_4",
      question: "What is the primary purpose of defining an 'Anti-Persona'?",
      options: [
        "To insult competitors' customers",
        "To explicitly define which users your product is NOT designed for, preventing feature bloat and protecting strategic focus",
        "To eliminate all testing",
        "To avoid paying taxes"
      ],
      answer: 1,
      explanation: "An Anti-Persona establishes strategic boundaries, helping teams resist requests from unprofitable or misaligned customer segments."
    },
    {
      id: "q5_5",
      question: "In an Empathy Map, what does the 'Does' quadrant capture that is often different from what users 'Say'?",
      options: [
        "The user's code commits on GitHub",
        "Observable physical actions, behaviors, and unprompted workarounds that reveal what users actually do rather than what they politely claim",
        "The user's banking passwords",
        "Developer task assignments"
      ],
      answer: 1,
      explanation: "Observing actual behavior ('Does') reveals genuine friction and workarounds that users often fail to articulate in verbal interviews ('Says')."
    }
  ]
};
