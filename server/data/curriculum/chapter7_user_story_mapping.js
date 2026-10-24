// Chapter 7: User Story Mapping (Jeff Patton) & Story Slicing Masterclass
module.exports = {
  id: "ch-07",
  title: "7. User Story Mapping & Advanced Story Slicing",
  category: "Execution & Discovery",
  level: "Intermediate to Advanced",
  readTime: "30 min",
  summary: "Comprehensive masterclass on Jeff Patton's User Story Mapping: moving beyond flat 1-dimensional backlogs, constructing the 2D Narrative Backbone (Activities & Steps), vertically slicing into Walking Skeletons, MVPs, and MMF releases, and mastering advanced slicing techniques including SPIDR and the Hamburger Method.",
  subChapters: [
    {
      id: "sub-7-1",
      title: "7.1 The Philosophy of Story Mapping: Moving Beyond Flat Backlogs",
      concept: `In traditional agile tooling (such as standard Jira or Azure DevOps list views), the Product Backlog is represented as a **flat, one-dimensional stack of hundreds of tickets**.

### The 3 Fatal Pathologies of a Flat Backlog:
1. **Loss of Holistic Context**: A flat list destroys the relationship between items. You cannot see how Ticket #312 relates to Ticket #84 or where they fit in the customer's actual experience.
2. **Prioritization Paralysis & The Feature Trap**: In a flat list of 250 items, every stakeholder fights for their ticket to be #1. Teams often build the 'top 10 items', which turn out to be disconnected fragments of 10 different features—leaving the customer with zero end-to-end working capabilities.
3. **Building 'Half a Bridge'**: Slicing by technical layer or individual tickets often means teams spend 6 months building all database tables or UI buttons without delivering a single complete user journey. Half a bridge delivers 0% transportation value.

### Jeff Patton's Breakthrough:
In *User Story Mapping*, Jeff Patton transformed the backlog into a **two-dimensional visual map of customer reality**:
- **Horizontal Axis (Left-to-Right - The Narrative Flow)**: The chronological time sequence of the customer journey (Activities and Steps).
- **Vertical Axis (Top-to-Bottom - Depth & Sophistication)**: Necessity down to luxury enhancements. 
By drawing horizontal lines across the map, the Product Owner slices coherent, testable, end-to-end releases across the entire customer journey!`,
      frameworkOrTemplate: `### Flat Backlog vs 2D User Story Map Comparison

\`\`\`
FLAT BACKLOG (The Black Hole of Jira):        2D USER STORY MAP (Shared Understanding & Flow):
[ ] Ticket #101: DB User Schema Tables        USER ACTIVITIES: [Search Flights] ──► [Select Flight] ──► [Book & Pay] ──► [Confirmation]
[ ] Ticket #102: Search Results UI            USER STEPS:      [Enter Origin/Dest]  [Filter Price]     [Enter Card]    [Email Ticket]
[ ] Ticket #103: Seat Selection Grid          ──────────────────────────────────────────────────────────────────────────────────────────
[ ] Ticket #104: Stripe Credit Card           RELEASE 1 (MVP):  [Basic Text Input]  [Sorted by Price]   [Credit Card]   [Plain Email]
[ ] Ticket #105: Automated Email Receipt      (Walking Skel.)   Origin & Dest only  Single list view    Stripe 1-cur    Static PDF
[ ] Ticket #106: Dark Mode CSS Theme          ──────────────────────────────────────────────────────────────────────────────────────────
[ ] Ticket #107: Multi-Currency Converter     RELEASE 2:        [Auto-Suggest City] [Filter Airlines]   [Apple/Google]  [Calendar Sync]
... 300 more disconnected tickets!            (Enhancement)     Airport code lookup Multiple filters    Mobile Wallets  Add to Google
(Zero visibility into whole user journey)     ──────────────────────────────────────────────────────────────────────────────────────────
                                              RELEASE 3:        [Voice Search / AI] [Matrix Graph Grid] [Split Payment] [SMS Live Gate]
                                              (Delighters)      Natural language    Flexible dates      Pay with Points Live updates
\`\`\`

### Patton's Core Law:
$$\\text{“At the end of the day, our goal is not to build more software; our goal is to maximize customer outcome with the least amount of output.”}$$`,
      realWorldExample: `### Flight Booking Case Study: Slicing the Walking Skeleton

**The 6-Month Dilemma:**
An airline tech team had spent 5 months working through a 450-ticket flat Jira backlog. 
They had built user authentication, dark mode themes, profile picture uploads, and frequent flyer point integration—yet **a customer still could not book a flight ticket**! 
Leadership was on the verge of cancelling the project.

**The Story Mapping Intervention:**
The new PO brought the entire cross-functional team (developers, UX designers, business sponsors) into a room for a 1-day Story Mapping workshop:
- They mapped the narrative spine along the wall: *Search Flight $\\rightarrow$ Select Flight $\\rightarrow$ Enter Passenger Details $\\rightarrow$ Enter Payment $\\rightarrow$ Receive Confirmation*.
- The PO drew a bold horizontal line across the top cards to define the **Walking Skeleton**: a single search box, 3 hardcoded flight options, basic credit card payment, and an on-screen confirmation number.

**The Delivery:**
The team built and shipped the Walking Skeleton in **8 working days**! 
For the first time, stakeholders saw real money flow through the pipeline. Over the next 4 sprints, they layered on seat selection, baggage upgrades, and flexible dates, launching on time to rave reviews.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "Why do you use User Story Mapping instead of managing your backlog as a prioritized list in Jira?"
- **The Senior PO Answer:**
  > "A flat backlog list is where customer context goes to die. In a list of 200 Jira tickets, you suffer from prioritization myopia: items are ranked in isolation, and teams inevitably build horizontal fragments rather than cohesive customer journeys.
  > 
  > I use Jeff Patton's User Story Mapping because it brings two critical dimensions to life:
  > - Horizontally, it anchors the team in the **narrative customer journey** from left to right, ensuring developers always understand *why* a story matters in the context of the user's workflow.
  > - Vertically, it organizes work by **depth and sophistication**, allowing us to slice clean, cohesive releases across the entire journey.
  > 
  > Instead of delivering 'all the search filters' in Sprint 1 and 'all the payment methods' in Sprint 6, Story Mapping allows us to deliver a complete, thin vertical slice—a Walking Skeleton—in Sprint 1. Real users can complete their goal end-to-end, which gives us immediate feedback loops and eliminates integration risk early."`,
      antiPatternsToAvoid: `1. **The 'Throwaway Workshop' Anti-Pattern**: Creating a beautiful physical story map on sticky notes and then abandoning it in favor of an unorganized Jira list.
2. **Vertical Column Slicing**: Slicing a release down one single activity column (e.g. building 15 variations of search) rather than slicing horizontally across the entire user journey.`,
      actionChecklist: [
        "Take your current product release scope and lay out the user journey horizontally from trigger to completion.",
        "Draw a horizontal line across the top cards to verify that your upcoming release allows a user to achieve their goal from start to finish."
      ]
    },
    {
      id: "sub-7-2",
      title: "7.2 Constructing the Narrative Backbone (Activities & Steps)",
      concept: `The anatomical foundation of a User Story Map rests on a hierarchical structure:

### 1. The Backbone (Top Level - User Activities):
- High-level, aggregate customer goals that represent the major chapters of the product experience.
- Activities are non-negotiable verbs that almost every user must experience.
- *Examples*: 'Discover Content', 'Configure Profile', 'Execute Transaction', 'Manage Notifications'.

### 2. The Walking Steps (Second Level - User Tasks / Steps):
- The concrete chronological steps a user performs to complete each high-level Activity.
- Arranged strictly from left-to-right in temporal sequence.
- *Examples*: Under 'Execute Transaction': *Review Cart $\\rightarrow$ Enter Shipping Address $\\rightarrow$ Select Payment Method $\\rightarrow$ Review Order Summary $\\rightarrow$ Submit Payment*.

### 3. The Body / Details (Third Level Down - User Stories & Variations):
- The specific options, edge cases, alternative paths, and technical implementations that sit beneath each Step.
- **Top Row (Row 1)**: The absolute bare minimum path required to make that step function (the 'Walking Skeleton').
- **Lower Rows (Rows 2, 3, 4)**: Increasing sophistication, alternative workflows, automated shortcuts, and delighter features.`,
      frameworkOrTemplate: `### Story Map Anatomical Hierarchy & Card Taxonomy

\`\`\`
+=======================================================================================================+
| THE NARRATIVE BACKBONE:           [ ACTIVITY 1 ]                             [ ACTIVITY 2 ]           |
| (High-Level Goals)         "Discover & Select Music"                   "Listen & Curate Tracks"       |
+=======================================================================================================+
| USER STEPS:                 [Step 1.1]         [Step 1.2]               [Step 2.1]         [Step 2.2] |
| (Chronological Tasks)       "Search Track"     "Filter Results"         "Play Track"       "Add to Lib"|
+───────────────────────────────────────────────────────────────────────────────────────────────────────+
| SLICE 1: MINIMUM VIABLE     [Basic Search]     [Sort Alphabetical]      [Simple Player]    [Favorite] |
| PATH (Walking Skeleton)     Exact text match   Single list view         Play/Pause only    Heart icon |
+───────────────────────────────────────────────────────────────────────────────────────────────────────+
| SLICE 2: FIRST USABLE       [Auto-Complete]    [Filter by Genre]        [Skip/Rewind]      [Create]   |
| ENHANCEMENT (Release 2)     Fuzzy search       Dropdown selector        15-second scrub    Playlists  |
+───────────────────────────────────────────────────────────────────────────────────────────────────────+
| SLICE 3: LUXURY & DELIGHT   [AI Voice Search]  [Filter BPM / Mood]      [Lossless Audio]   [Collaborate|
| (Release 3)                 Natural language   Dynamic sliders          Spatial sound      Shared Blend|
+───────────────────────────────────────────────────────────────────────────────────────────────────────+
\`\`\`

### Facilitation Rules for the Backbone:
1. Keep the Backbone stable: The high-level Activities and Steps rarely change; what changes is the depth of stories in each release slice.
2. Use silent sticky brainstorming: Have cross-functional team members write steps individually on sticky notes before grouping to eliminate groupthink.`,
      realWorldExample: `### Streaming Music App Case Study: Crafting the Backbone

**The Challenge:**
A startup was building a niche indie music streaming application. 
Engineering and design were paralyzed by debates over complex features: lossless streaming, offline caching, social sharing, and lyrics synchronization.

**The Backbone Alignment:**
The PO facilitated a 4-hour Backbone session:
- **Activities**: *Sign-up $\\rightarrow$ Discover $\\rightarrow$ Stream $\\rightarrow$ Collect*.
- **Steps under 'Stream'**: *Select Song $\\rightarrow$ Load Stream $\\rightarrow$ Control Audio $\\rightarrow$ Display Metadata*.
- **Slice 1 (The MVP)**: Web audio only, play/pause button, display song title and artist name. No offline caching, no lyrics, no social sharing.

**The Result:**
Slice 1 was built in 2 sprints. When placed in the hands of indie musicians and beta testers, the team discovered that users cared far more about a direct *'Tip the Artist'* micro-donation button than about high-fidelity audio or lyrics. Mapping the backbone prevented \$150k of wasted R&D on audio codecs and redirected effort to monetization.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you facilitate a Story Mapping workshop when developers and designers are overwhelmed by the massive scope of a new initiative?"
- **The Senior PO Answer:**
  > "I use a top-down, timeboxed facilitation structure to keep the team focused on structure before getting bogged down in implementation details.
  > 
  > Step 1: I anchor the workshop on the **Target Persona** and their primary objective (e.g., 'A freelance designer sending their first invoice').
  > 
  > Step 2: We build the **Backbone** first: I give everyone 5 minutes of silent writing on yellow sticky notes to capture the high-level Activities. We arrange them chronologically from left to right.
  > 
  > Step 3: We unpack the **User Steps**: Under each Activity, we map the concrete actions the persona takes. At this stage, I strictly forbid talking about edge cases or technologies; we focus purely on the human narrative.
  > 
  > Step 4: Once the backbone is agreed, we brainstorm the details (blue stickies) hanging underneath each step.
  > 
  > Step 5: Finally, we draw our release lines: We identify the absolute minimum row of cards across all steps that allows the user to achieve their goal—our Walking Skeleton. By separating the structural journey from detailed options, team anxiety disappears and a crystal-clear delivery roadmap emerges."`,
      antiPatternsToAvoid: `1. **Arguing Over Technical Implementation During Backbone Mapping**: Allowing engineers to debate database index types when the team hasn't even agreed on the customer steps.
2. **Missing Steps**: Leaving gaps in the narrative (e.g. mapping 'Search' and 'Pay' but omitting 'Review Cart'), which results in broken user workflows.`,
      actionChecklist: [
        "Identify the 4 to 6 core Activities that define your product's primary customer journey.",
        "Decompose each Activity into 2 to 4 chronological User Steps."
      ]
    },
    {
      id: "sub-7-3",
      title: "7.3 Vertical Slicing: Walking Skeleton vs MVP vs MMF",
      concept: `The core technical skill of an elite Product Owner is **Vertical Slicing**—the discipline of slicing software requirements vertically through all architectural layers rather than horizontally by technical tiers.

### The Failure of Horizontal Slicing:
In immature teams, developers slice work by technical specialization:
- Sprint 1: Build Database Schemas (0% customer value, unverified business logic).
- Sprint 2: Build Backend REST APIs (0% customer value, unverified UI integration).
- Sprint 3: Build Frontend UI Mockups (0% customer value).
- Sprint 4: Attempt to integrate all 3 layers $\\rightarrow$ **Integration Hell!** Endpoints don't match, schema assumptions fail, and 4 sprints have elapsed with zero working software.

### The Triumph of Vertical Slicing:
A vertical slice cuts through the **UI, Business Logic, API, and Database** layers in a single thin user story:
Every completed story delivers a working, testable, demonstrable increment of functionality that satisfies the Definition of Done.

---

### The Three Critical Release Horizons:
1. **The Walking Skeleton**:
   - The thinnest possible end-to-end implementation that connects all architectural tiers together.
   - It might have a basic UI and hardcoded business rules, but it actually compiles, builds, deploys through the CI/CD pipeline, and writes to a database.
   - *Primary Objective*: Eliminate architectural and integration risks on Day 1.
2. **Minimum Viable Product (MVP)**:
   - The smallest experiment or product slice that allows the team to collect maximum **validated learning** about customers with the least effort (Eric Ries, *The Lean Startup*).
   - *Primary Objective*: Validate value proposition, customer demand, and behavioral willingness to pay/engage.
3. **Minimum Marketable Feature (MMF)**:
   - The smallest distinct unit of functionality that provides standalone commercial value and can be marketed, sold, or delivered to customers as an upgrade.
   - *Primary Objective*: Commercial revenue generation and competitive differentiation.`,
      frameworkOrTemplate: `### Horizontal vs Vertical Slicing & Kniberg's Evolutionary Transport Model

\`\`\`
HORIZONTAL SLICING (The Architecture Trap - Zero Usability Until End):
┌────────────────────────────────────────────────────────┐
│ Sprint 1: Database Schemas (Cannot be used or tested)   │
├────────────────────────────────────────────────────────┤
│ Sprint 2: Backend APIs (Cannot be seen by customers)   │
├────────────────────────────────────────────────────────┤
│ Sprint 3: Frontend UI Components (Unconnected mockups) │
└────────────────────────────────────────────────────────┘
Result: 3 Sprints spent, 100% integration risk, ZERO working software!

VERTICAL SLICING (Continuous Working Increments):
   UI LAYER      [ Simple Web UI ]   [ Add Mobile View ]   [ Polished CSS ]
      │                  │                   │                    │
   API LAYER     [ Minimal API ]     [ Add Validation ]    [ Add Caching  ]
      │                  │                   │                    │
   DB LAYER      [ Single SQL Table] [ Normalized Schema]  [ Clustered DB ]
                         ▲                   ▲                    ▲
                         │                   │                    │
                      SLICE 1             SLICE 2              SLICE 3
                  (Walking Skeleton)   (First Usable MVP)   (Scale & Polish)
\`\`\`

### Henrik Kniberg's Famous Skateboard-to-Car Metaphor:
If the customer wants a car to travel across town:
- **Wrong (Horizontal)**: Deliver a tire in Sprint 1, an axle in Sprint 2, a chassis in Sprint 3. The customer cannot use four wheels; they are furious until the very last sprint.
- **Right (Vertical)**: Deliver a **Skateboard** in Sprint 1 (working transportation; user can travel immediately). Iterate to a **Scooter** in Sprint 2 (adds steering). Iterate to a **Bicycle** in Sprint 3 (adds speed and brakes). Iterate to a **Motorcycle** in Sprint 4. Deliver the **Car** in Sprint 5. At every stage, the customer experienced functional value!`,
      realWorldExample: `### Cloud B2B SaaS Case Study: The Walking Skeleton De-Risking

**The Risk:**
A logistics software platform needed to integrate real-time GPS fleet tracking across 5,000 delivery trucks. 
The engineering team estimated that building the complete distributed Kafka streaming architecture, Redis cache, and Google Maps live UI would take 6 months.

**The PO's Walking Skeleton:**
The PO refused to wait 6 months to test integration. 
Together with the Lead Architect, they carved out a **1-Sprint Walking Skeleton**:
- A single delivery truck simulator sending 1 GPS ping every 60 seconds over an HTTP POST endpoint.
- A raw Node.js listener writing coordinates to a single PostgreSQL row.
- A basic web page displaying a static map with 1 red marker that refreshed on browser reload.

**The Discovery:**
The team deployed the skeleton in Sprint 1. 
Immediately, they discovered a critical cloud security firewall rule that blocked mobile cellular data pings from moving trucks! 
Because they discovered this in Sprint 1 with a thin slice rather than in Month 6 after building thousands of lines of code, the infrastructure team resolved the network configuration in 48 hours with zero project delay.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "Developers tell you that a major architectural feature—like setting up a new database and auth system—cannot be vertically sliced and must be built as a horizontal technical sprint. How do you respond?"
- **The Senior PO Answer:**
  > "I recognize and respect the architectural complexity, but I never accept a pure 'horizontal sprint' where no working, testable software is produced.
  > 
  > When engineers say authentication or database setup cannot be sliced, what they usually mean is that building the *complete, scalable, hardened enterprise version* takes a whole sprint.
  > 
  > I counter by proposing a **Walking Skeleton slice**:
  > - Instead of building a complex OAuth2 multi-provider system supporting Google, Apple, and SAML SSO, can we build a thin vertical slice that authenticates a single hardcoded test user with email and password, writes their session to the new database, and displays a simple 'Welcome, User' dashboard?
  > 
  > This achieves two critical goals:
  > 1. It forces the developers to build and test the full vertical pipeline—UI, API, database, and CI/CD deployment—eliminating integration risk in Sprint 1.
  > 2. It gives us a working, demonstrable increment that meets the Definition of Done. We can then layer on password hashing, social logins, and token expiry in subsequent vertical stories."`,
      antiPatternsToAvoid: `1. **The 'Half-Baked Slice'**: Slicing a story so thin that it cannot be tested or demonstrated (e.g. building a database table without any API to write or read from it).
2. **Confusing MVP with Low Quality**: Treating an MVP as buggy, un-tested code. An MVP must be high quality; it is small in scope, not deficient in standards.`,
      actionChecklist: [
        "Audit your team's upcoming sprint backlog: Eliminate any horizontal technical tickets by pairing them into vertical end-to-end slices.",
        "Ensure every story in your sprint backlog has testable acceptance criteria that can be demonstrated to stakeholders."
      ]
    },
    {
      id: "sub-7-4",
      title: "7.4 Advanced Story Slicing Techniques: SPIDR & The Hamburger Method",
      concept: `When requirements arrive as massive, multi-faceted Epics that cannot fit within a single 2-week sprint, novice Product Owners either accept them as multi-sprint monsters or slice them horizontally into frontend and backend tickets.

Master Product Owners use systematic, proven slicing heuristics to decompose complex initiatives into thin, independent vertical slices:

---

### 1. Mike Cohn's SPIDR Framework (5 Slicing Levers):
- **S - Spike (Research & Prototyping)**:
  - When technical or functional uncertainty makes estimation impossible, timebox a 1-to-2-day research spike to evaluate options before slicing the feature stories.
- **P - Paths (Alternative User Workflows)**:
  - Slice by different execution routes. Build the **Happy Path** (standard success workflow) first; slice alternative error paths, edge cases, and recovery workflows into subsequent stories.
- **I - Interfaces (Devices & Channels)**:
  - Slice by interaction platform or channel. Build a clean web browser interface first; add iOS native, Android native, and voice interfaces in subsequent iterations.
- **D - Data (Variations & Formats)**:
  - Slice by data type or complexity. Support standard alphanumeric text or USD currency first; support special characters, file attachments, and multi-currency conversions later.
- **R - Rules (Business Constraints & Relaxations)**:
  - Slice by relaxing business validation rules. Build with minimal, relaxed validation first (e.g. basic email syntax check); layer on complex fraud rules, enterprise compliance checks, and automated AML screenings in subsequent stories.

---

### 2. Gojko Adzic's Hamburger Method:
Decomposes a multi-step feature into horizontal layers (like ingredients in a burger: bun, lettuce, patty, sauce, bun). 
Under each layer, list implementation options ranging from *Raw / Primitive* up to *Gourmet / Advanced*. 
To create your first slice, **skewer through the most primitive option of every layer**!`,
      frameworkOrTemplate: `### The SPIDR Decomposition Matrix in Action

\`\`\`
EPIC: "Automated Enterprise Invoicing & Payment Reconciliation"
Estimated Size: 40 Story Points (Too large for a single 2-week sprint!)

[SPIDR DECOMPOSITION SLICES]:
1. [Paths]:
   • Story 1.1: Reconcile single invoice payment on the standard happy path (5 pts)
   • Story 1.2: Reconcile split payments across multiple invoices (8 pts)
   • Story 1.3: Handle failed chargebacks, payment disputes, and manual refunds (8 pts)

2. [Data]:
   • Story 2.1: Support USD currency payments via ACH (3 pts)
   • Story 2.2: Support multi-currency FX payments with live European Central Bank rate conversion (5 pts)

3. [Rules]:
   • Story 3.1: Apply flat domestic sales tax calculation (3 pts)
   • Story 3.2: Automated multi-state US Nexus VAT & municipal tax calculation engine (8 pts)

4. [Interfaces]:
   • Story 4.1: Download invoice reconciliation report as raw CSV file (3 pts)
   • Story 4.2: Interactive real-time visual charts and financial analytics dashboard (8 pts)

RESULT: 1 massive 40-point monster epic converted into 8 independent, testable, vertical user stories!
\`\`\``,
      realWorldExample: `### InsurTech Underwriting Case Study: Slicing by 'Rules'

**The Bottleneck:**
An commercial auto insurance enterprise was building an online fleet quote portal. 
The underwriting committee insisted that the quote engine required **92 complex risk assessment rules** (driver age, violation history, credit rating, vehicle telematics, garage location, weather patterns). 
The engineering team estimated the engine at **6 months of continuous development** before any customer could get a quote.

**The PO's SPIDR Intervention:**
The PO applied SPIDR's **Rules** slicing technique:
- **Story 1 (Sprint 1)**: Build the quote engine with just **3 fundamental rules**: Vehicle age < 10 years, fleet size < 5 vehicles, driver age > 25. All complex edge cases displayed a friendly prompt: *'Your custom quote is being reviewed by a senior underwriter who will call you in 2 hours.'*
- This thin slice went to production at the end of Sprint 1.

**The Business Impact:**
In the first 30 days, the portal captured **\$420,000 in commercial insurance premiums** from standard small-business fleets. 
Over the next 4 months, the team added 5 to 10 underwriting rules per sprint, progressively automating edge cases while generating massive revenue from Day 14.`,
      marketInterviewMasterclass: `### Market Interview Masterclass: What Hiring Managers Look For

#### Question 1: "How do you break down an Epic that developers say is too complex and cannot be delivered in a single sprint?"
- **The Senior PO Answer:**
  > "I systematically apply Mike Cohn's **SPIDR framework** (Spikes, Paths, Interfaces, Data, Rules).
  > 
  > First, I look at **Paths**: Almost every complex epic contains a happy path and 10 edge cases. I carve out the primary happy path as Story 1, deferring error recovery and edge cases to subsequent stories.
  > 
  > Second, I look at **Rules**: Often, business analysts pack 50 complex validation rules into one ticket. I negotiate with stakeholders to relax non-critical rules for the first increment—such as building standard validation first and complex fraud algorithms next.
  > 
  > Third, I look at **Data and Interfaces**: Can we support text inputs before file uploads? Can we support web before mobile? Can we deliver a CSV export before building interactive 3D charts?
  > 
  > By applying these levers in Backlog Refinement, we convert 40-point monster epics into 3-point and 5-point vertical stories that meet INVEST criteria and flow smoothly through our 2-week sprints."`,
      antiPatternsToAvoid: `1. **Slicing by Architectural Component**: Slicing an epic into 'Frontend Story', 'Backend Story', and 'QA Test Story'. That is not agile; that is waterfall disguised in Jira.
2. **The Forgotten Edge Case**: Deferring error handling in Slice 1, but forgetting to prioritize the edge case stories in subsequent sprints, creating production vulnerabilities.`,
      actionChecklist: [
        "Take the largest epic currently sitting in your backlog and apply the SPIDR framework.",
        "Split it into at least 4 independent user stories using Paths, Rules, or Data variations."
      ]
    }
  ],
  assessment: [
    {
      id: "q7_1",
      question: "In Jeff Patton's User Story Mapping, what does the horizontal (left-to-right) axis represent?",
      options: [
        "Priority order from most important to least important",
        "The chronological narrative journey of the customer (Activities and Steps)",
        "Developer seniority and wage rates",
        "Bug severity levels"
      ],
      answer: 1,
      explanation: "The horizontal axis represents the narrative flow of the customer journey over time, from left to right."
    },
    {
      id: "q7_2",
      question: "What is a 'Walking Skeleton' in agile product development?",
      options: [
        "An unfinished ticket that has been abandoned in the backlog for 6 months",
        "A tiny, end-to-end implementation that connects all architectural tiers (UI, API, DB) together to prove technical feasibility and deployability early",
        "A Halloween graphic used on marketing websites",
        "A developer who works without taking breaks"
      ],
      answer: 1,
      explanation: "A walking skeleton connects all system components in their simplest functional form, validating end-to-end deployability before scaling."
    },
    {
      id: "q7_3",
      question: "In the SPIDR story slicing framework, what does the 'R' stand for?",
      options: [
        "Revenue",
        "Rules (slicing by business validation rules, starting with simple/relaxed rules first)",
        "Refactoring",
        "Regression"
      ],
      answer: 1,
      explanation: "Rules refers to relaxing business constraints in initial slices (e.g. basic validation first, complex business logic in subsequent stories)."
    },
    {
      id: "q7_4",
      question: "Why is vertical slicing strongly preferred over horizontal slicing?",
      options: [
        "Because horizontal slicing makes databases run too fast",
        "Because vertical slicing delivers a working end-to-end increment of functionality that provides immediate testable customer value and feedback",
        "Because vertical slicing requires fewer lines of code",
        "Because horizontal slicing is prohibited by law"
      ],
      answer: 1,
      explanation: "Vertical slicing cuts through all tiers to deliver working software that users can test and validate, eliminating integration delay."
    },
    {
      id: "q7_5",
      question: "What is the primary difference between a Minimum Viable Product (MVP) and a Minimum Marketable Feature (MMF)?",
      options: [
        "An MVP is designed for rapid validated learning about customer demand, while an MMF is the smallest distinct functionality that delivers standalone commercial value to be marketed and sold",
        "They are identical terms",
        "MVPs are built by developers; MMFs are built by marketing",
        "An MMF must always take more than 2 years to build"
      ],
      answer: 0,
      explanation: "An MVP tests assumptions and generates validated learning, whereas an MMF delivers viable, marketable customer value."
    }
  ]
};
