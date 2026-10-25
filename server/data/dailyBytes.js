// 30 Days of Real-World PO Daily Insights and Situational Challenges
module.exports = [
  {
    dayNumber: 1,
    title: "Saying 'No' to the HiPPO with Evidence",
    category: "Stakeholder Management",
    coreConcept: "Executives often suggest features based on personal intuition rather than customer demand. Inexperienced POs comply immediately; seasoned POs reframe demands into measurable testable hypotheses.",
    proTip: "Never say 'We don't have time.' Instead say: 'That sounds like an interesting hypothesis. What customer behavior change do we expect? Can we run a 3-day fake door test before committing a full sprint of engineering?'",
    dilemma: {
      scenario: "During the Sprint Review, the Chief Revenue Officer (CRO) walks in and says: 'I just met a prospect who will sign a \$500k deal IF we add a custom CSV export tool by Friday. Drop what you are doing and build it!'",
      question: "What is your best immediate response as the Product Owner?",
      options: [
        {
          id: "A",
          text: "Immediately pause all active sprint items and instruct the developers to work overtime to deliver the CSV export by Friday.",
          isRecommended: false,
          feedback: "Disrupts the Sprint Goal, burns out developers, and risks building custom throwaway code for a prospect who may still not convert."
        },
        {
          id: "B",
          text: "Publicly rebuke the CRO in front of everyone and tell them they are violating the Scrum Guide.",
          isRecommended: false,
          feedback: "Creates political toxicity and hostility, destroying trust between product and executive business partners."
        },
        {
          id: "C",
          text: "Thank the CRO, protect the active Sprint Goal, and schedule an immediate 30-min debrief to evaluate the prospect's actual underlying workflow and discuss trade-offs for future sprint ordering.",
          isRecommended: true,
          feedback: "Outstanding. You uphold Scrum discipline, protect team focus, and commercially collaborate to explore real customer value without Knee-jerk chaos."
        },
        {
          id: "D",
          text: "Ask the Scrum Master to make the decision so you don't look like the bad guy.",
          isRecommended: false,
          feedback: "Abdication of PO accountability. The PO is solely accountable for product backlog ordering and value decisions."
        }
      ]
    }
  },
  {
    dayNumber: 2,
    title: "Splitting an Epic without Losing Business Value",
    category: "Story Slicing",
    coreConcept: "A common mistake when splitting epics is slicing horizontally (e.g., Sprint 1: Database, Sprint 2: API, Sprint 3: UI). Horizontal slices cannot be deployed or tested with users until the very end.",
    proTip: "Always slice vertically across all layers. Deliver a thin, working slice of end-to-end functionality that solves one narrow user use-case.",
    dilemma: {
      scenario: "You need to build a complex checkout system supporting credit cards, PayPal, Apple Pay, multi-currency, and tax calculations. Developers estimate it at 3 months of work.",
      question: "How do you vertically slice this into the first releasable increment?",
      options: [
        {
          id: "A",
          text: "Have developers build the unified database schema for all payment gateways and all global currencies first.",
          isRecommended: false,
          feedback: "Horizontal technical slice. Leaves zero working value for users and delays feedback by months."
        },
        {
          id: "B",
          text: "Build a single, end-to-end happy path: Credit Card payment in USD with flat-rate domestic tax.",
          isRecommended: true,
          feedback: "Brilliant! You achieve a functional transaction loop in production. You can collect revenue, test payment gateways, and iterate."
        },
        {
          id: "C",
          text: "Build the UI screens for all payment options with mock dummy buttons that do nothing.",
          isRecommended: false,
          feedback: "Provides superficial visual polish without transactional value or learning."
        },
        {
          id: "D",
          text: "Delay the project until management approves hiring 5 more engineers to build everything at once.",
          isRecommended: false,
          feedback: "Violates lean delivery principles and inflates coordination costs without reducing uncertainty."
        }
      ]
    }
  },
  {
    dayNumber: 3,
    title: "Handling Urgent Production Bugs during a Sprint",
    category: "Scrum Ceremonies",
    coreConcept: "Bugs happen in production. How the Scrum team handles them determines whether they maintain predictability or descend into permanent firefighting mode.",
    proTip: "Distinguish between Critical P0 (system down, data loss) and P2/P3 non-critical bugs. Non-critical bugs must be ordered in the Product Backlog, not injected into the active Sprint.",
    dilemma: {
      scenario: "Mid-sprint, Customer Support reports that users cannot reset their passwords via email because of a third-party webhook failure. It is blocking account access for ~15% of active users.",
      question: "How do you coordinate with Developers?",
      options: [
        {
          id: "A",
          text: "Tell support to wait until the next sprint planning in 10 days because active sprint scope is frozen.",
          isRecommended: false,
          feedback: "Rigid dogma over pragmatism. Blocking 15% of users from logging in is a severe customer crisis requiring immediate resolution."
        },
        {
          id: "B",
          text: "Collaborate with the Developers to assess impact, allocate emergency capacity to fix the critical defect, and negotiate removing a lower-priority item to protect the core Sprint Goal.",
          isRecommended: true,
          feedback: "Exactly right. The Scrum Guide allows scope to be renegotiated with the PO. Critical outages take precedence while trade-offs maintain team sustainability."
        },
        {
          id: "C",
          text: "Immediately cancel the entire Sprint and send the team home.",
          isRecommended: false,
          feedback: "Extreme overreaction. Sprints are only cancelled if the Sprint Goal becomes completely obsolete."
        },
        {
          id: "D",
          text: "Order developers to work all weekend without adjusting sprint scope.",
          isRecommended: false,
          feedback: "Unsustainable practice that damages team trust, causes burnout, and degrades code quality."
        }
      ]
    }
  },
  {
    dayNumber: 4,
    title: "Navigating Sales Commitments vs Sprint Goals",
    category: "Stakeholder Management",
    coreConcept: "Sales representatives are incentivized by quarterly commissions and often promise bespoke features to prospects without checking with the Product Owner.",
    proTip: "Establish a transparent 'Product Discovery Roadmap' and institute a bi-weekly Commercial Alignment Sync with Sales leadership to review pipeline customer requests objectively.",
    dilemma: {
      scenario: "A Senior Account Executive signed a contract guaranteeing an enterprise customer a custom single sign-on (SSO) SAML integration within 3 weeks, without consulting Product.",
      question: "What is your strategic move?",
      options: [
        {
          id: "A",
          text: "Accept the contract silently and force the developers to compress testing to meet the 3-week deadline.",
          isRecommended: false,
          feedback: "Sets a dangerous precedent where sales will continuously bypass product governance."
        },
        {
          id: "B",
          text: "Meet with the Head of Sales and the AE to inspect the contract, evaluate technical feasibility with Lead Engineer, and negotiate either an existing third-party auth workaround or a phased rollout plan.",
          isRecommended: true,
          feedback: "Constructive commercial leadership. You address the customer commitment while establishing boundaries and technical sanity."
        },
        {
          id: "C",
          text: "Refuse to build the feature out of spite to teach sales a lesson.",
          isRecommended: false,
          feedback: "Harmful to company revenue and relationships. The PO must balance strategic discipline with business viability."
        },
        {
          id: "D",
          text: "Outsource the entire core product to an external agency.",
          isRecommended: false,
          feedback: "Unrealistic and destroys codebase architecture."
        }
      ]
    }
  },
  {
    dayNumber: 5,
    title: "EBM: When Output Does Not Equal Value",
    category: "Metrics",
    coreConcept: "A team delivering 100 story points per sprint that yields zero customer adoption is creating high-speed waste. Evidence-Based Management focuses on Current Value and Unrealized Value.",
    proTip: "Track the 'Feature Adoption Ratio': percentage of released features actively used by more than 20% of your user base after 30 days.",
    dilemma: {
      scenario: "Your team completed 12 user stories last month. However, product analytics show that less than 2% of users clicked on the new features, and churn remained unchanged.",
      question: "In the upcoming Sprint Review, how should you frame this outcome?",
      options: [
        {
          id: "A",
          text: "Celebrate the 100% velocity achievement and hide the usage analytics from stakeholders.",
          isRecommended: false,
          feedback: "Dishonest and reinforces the 'Build Trap' feature factory mindset."
        },
        {
          id: "B",
          text: "Transparently share both the delivery output and the low adoption evidence; facilitate a root-cause discussion on whether the problem was discovery, UX friction, or value mismatch.",
          isRecommended: true,
          feedback: "Exemplary empirical leadership! Transparency builds deep executive trust and redirects focus toward genuine customer impact."
        },
        {
          id: "C",
          text: "Blame the marketing team for not advertising the features.",
          isRecommended: false,
          feedback: "Unproductive finger-pointing that solves nothing."
        },
        {
          id: "D",
          text: "Immediately delete the feature from the codebase without asking why.",
          isRecommended: false,
          feedback: "Premature action before understanding user friction points."
        }
      ]
    }
  },
  {
    dayNumber: 6,
    title: "Defining the Product Goal: The Guiding North Star",
    category: "Product Strategy",
    coreConcept: "A Scrum Team without a Product Goal is like a ship without a rudder. The Product Goal gives the team purpose, coherent focus, and a benchmark for deciding what NOT to build.",
    proTip: "A great Product Goal is measurable and time-horizoned (e.g., 'Enable self-service automated onboarding for 500 enterprise customers with zero manual intervention by Q3').",
    dilemma: {
      scenario: "Your backlog has 150 items across 12 different domains: mobile app fixes, dark mode, API refactoring, payment integrations, and AI search.",
      question: "How do you align the team and stakeholders?",
      options: [
        {
          id: "A",
          text: "Pick the top 2 items from each domain every sprint so everybody gets a little bit of what they want.",
          isRecommended: false,
          feedback: "The classic 'peanut butter spread' anti-pattern. Result: sluggish progress everywhere, zero coherent value."
        },
        {
          id: "B",
          text: "Establish a single clear Product Goal for the next 3-4 months, order the backlog strictly to achieve that goal, and defer items that do not contribute to it.",
          isRecommended: true,
          feedback: "Superb! Maximizes focus and team impact while clearly communicating strategic priorities."
        },
        {
          id: "C",
          text: "Ask developers to vote on their favorite technical tasks.",
          isRecommended: false,
          feedback: "Ignores commercial strategy and business alignment."
        },
        {
          id: "D",
          text: "Delete all 150 items and start over.",
          isRecommended: false,
          feedback: "Unnecessary destruction of valuable historical context."
        }
      ]
    }
  },
  {
    dayNumber: 7,
    title: "The Definition of Done (DoD) as Quality Guarantee",
    category: "Agile Governance",
    coreConcept: "The Definition of Done creates transparency by providing everyone a shared understanding of what work was completed as part of the Increment. Without a DoD, 'done' is merely an opinion.",
    proTip: "If an item does not meet the Definition of Done, it cannot be released, nor can it be presented at the Sprint Review as done.",
    dilemma: {
      scenario: "It is the last day of the sprint. A key feature works on the developer's laptop, but automated regression tests haven't been written, violating the team's Definition of Done.",
      question: "What must you do as the Product Owner?",
      options: [
        {
          id: "A",
          text: "Mark it 'Done' anyway and demo it as complete during the Sprint Review.",
          isRecommended: false,
          feedback: "Destroys transparency and accumulates technical debt."
        },
        {
          id: "B",
          text: "Do not accept it as 'Done'. Return it to the Product Backlog with updated estimates for the next sprint.",
          isRecommended: true,
          feedback: "Correct. According to the Scrum Guide, items not meeting the DoD cannot be released or counted as done."
        },
        {
          id: "C",
          text: "Rewrite the Definition of Done to remove the automated testing requirement.",
          isRecommended: false,
          feedback: "Degrades team quality standards to fake short-term progress."
        },
        {
          id: "D",
          text: "Blame the developer in front of the stakeholders.",
          isRecommended: false,
          feedback: "Destroys psychological safety."
        }
      ]
    }
  },
  {
    dayNumber: 8,
    title: "Managing Dependencies in Scaled Environments (SAFe & Nexus)",
    category: "Scaling",
    coreConcept: "Cross-team dependencies are the primary bottleneck in scaled agile development. High-performing organizations minimize dependencies by architecting autonomous value stream teams.",
    proTip: "When dependencies are unavoidable, use Program Boards or Nexus Dependency Boards to visualize sequence requirements before Sprint Planning.",
    dilemma: {
      scenario: "Your team needs an API endpoint from Team Phoenix to complete the Mobile Checkout feature. Team Phoenix says they can't prioritize it for 3 sprints.",
      question: "What is your best path forward?",
      options: [
        {
          id: "A",
          text: "Escalate immediately to the CEO demanding Team Phoenix's manager be fired.",
          isRecommended: false,
          feedback: "Unprofessional and destructive to cross-team collaboration."
        },
        {
          id: "B",
          text: "Meet with Team Phoenix's PO during PO Sync; explore if your developers can pair-program with theirs or submit a pull request directly to their repository under an internal open-source model.",
          isRecommended: true,
          feedback: "Outstanding scaled agile leadership! Removing blockers through collaborative code contribution eliminates dependency friction."
        },
        {
          id: "C",
          text: "Halt mobile development for 3 months and wait.",
          isRecommended: false,
          feedback: "Wasteful stall in product momentum."
        },
        {
          id: "D",
          text: "Build a mock UI that crashes when users click pay.",
          isRecommended: false,
          feedback: "Unacceptable customer experience."
        }
      ]
    }
  },
  {
    dayNumber: 9,
    title: "Continuous Discovery: The Mom Test Principle",
    category: "Customer Discovery",
    coreConcept: "Rob Fitzpatrick's 'The Mom Test' teaches that you shouldn't ask anyone if your business idea is good—they will lie to you to be polite. Ask about their past behaviors, not hypothetical futures.",
    proTip: "Ask: 'When was the last time you experienced this problem? What did you do to solve it? How much did that workaround cost you?'",
    dilemma: {
      scenario: "You are interviewing users about an upcoming AI-powered meeting summarizer. You want to validate if people actually need it.",
      question: "Which interview question yields the most reliable evidence?",
      options: [
        {
          id: "A",
          text: "'Would you like an AI tool that automatically writes summaries of your meetings?'",
          isRecommended: false,
          feedback: "Hypothetical leading question. 90% of people will say yes because it costs them nothing to agree."
        },
        {
          id: "B",
          text: "'How much would you pay for an AI summarizer app?'",
          isRecommended: false,
          feedback: "Speculative. People cannot accurately predict their future purchasing behavior."
        },
        {
          id: "C",
          text: "'Tell me about your last 3 meetings this week: Did you write notes? What happened to those notes afterward, and where did the breakdown occur?'",
          isRecommended: true,
          feedback: "Gold standard! Inquiring about concrete recent actions reveals actual workflow habits and real pain points."
        },
        {
          id: "D",
          text: "'Don't you agree that meetings are a huge waste of time?'",
          isRecommended: false,
          feedback: "Biased and leading question that distorts research findings."
        }
      ]
    }
  },
  {
    dayNumber: 10,
    title: "WSJF: Maximizing Economic Value in Backlog Ordering",
    category: "Prioritization",
    coreConcept: "Weighted Shortest Job First (WSJF) prioritizes work by dividing Cost of Delay by Job Duration. Prioritizing high-value, small-effort jobs first generates the fastest economic return.",
    proTip: "Cost of Delay = User-Business Value + Time Criticality + Risk Reduction / Opportunity Enablement.",
    dilemma: {
      scenario: "Feature A has Cost of Delay = 20, Job Size = 2 (WSJF = 10). Feature B has Cost of Delay = 40, Job Size = 10 (WSJF = 4).",
      question: "Which feature should you sequence first?",
      options: [
        {
          id: "A",
          text: "Feature B because its raw Cost of Delay is higher (40 vs 20).",
          isRecommended: false,
          feedback: "Ignoring size locks up the team for 10 units of time while delaying other valuable work."
        },
        {
          id: "B",
          text: "Feature A because its WSJF score is 10, delivering fast value with minimal duration.",
          isRecommended: true,
          feedback: "Correct. Delivering Feature A first frees up capacity quickly and captures immediate returns."
        },
        {
          id: "C",
          text: "Work on both simultaneously with 50% split focus.",
          isRecommended: false,
          feedback: "Context switching degrades throughput and doubles delivery time for both."
        },
        {
          id: "D",
          text: "Neither; wait for executive permission.",
          isRecommended: false,
          feedback: "Empowered POs use economic frameworks to make decisive backlog calls."
        }
      ]
    }
  },
  {
    dayNumber: 11,
    title: "Handling LLM Hallucinations in High-Stakes Customer Flows",
    category: "AI Product Management",
    coreConcept: "LLMs are probabilistic token predictors, not factual databases. When building customer-facing AI features (e.g., contractual analysis, medical advice, financial reporting), zero hallucination is impossible with raw prompting alone.",
    proTip: "Never ask an LLM to generate sensitive facts from memory. Always implement Grounded RAG with strict chunk citation constraints, confidence scoring thresholds, and automatic fallback to human review.",
    dilemma: {
      scenario: "Your team is launching an AI contract summary feature for enterprise legal teams. In beta testing, the model accurately summarizes 96% of clauses, but in 4% of complex indemnity clauses it hallucinates liability limitations that do not exist in the contract.",
      question: "What is your best immediate action as an AI Product Manager before rolling this out to all enterprise customers?",
      options: [
        {
          id: "A",
          text: "Launch the feature immediately with a generic legal disclaimer stating 'AI may make mistakes; user assumes all liability.'",
          isRecommended: false,
          feedback: "Disclaimers do not protect enterprise trust. A single hallucinated liability cap in legal tech can destroy customer trust and create massive contractual liability."
        },
        {
          id: "B",
          text: "Fine-tune a 70B open-weights model on 1,000 legal contracts assuming fine-tuning will eliminate factual errors.",
          isRecommended: false,
          feedback: "Fine-tuning modifies tone and syntax, but does NOT guarantee factual recall. It frequently increases overconfident hallucinations."
        },
        {
          id: "C",
          text: "Implement strict citation-grounded RAG, calculate confidence scores per extracted clause, flag any clause below 95% confidence for mandatory Human-in-the-Loop review, and highlight exact sentence source links.",
          isRecommended: true,
          feedback: "Masterful AI PM execution. You establish grounded verifiability, protect against high-stakes error, and provide transparency through human-in-the-loop escalation."
        },
        {
          id: "D",
          text: "Cancel the AI feature entirely and advise leadership that LLMs can never be used in legal products.",
          isRecommended: false,
          feedback: "Overly defensive. 96% accuracy is a high-leverage baseline if wrapped in proper probabilistic UX and verification guardrails."
        }
      ]
    }
  },
  {
    dayNumber: 12,
    title: "Model Cascading and Protecting SaaS Margins Under Scale",
    category: "AI Product Management & Unit Economics",
    coreConcept: "Relying 100% on frontier models (e.g., GPT-4o, Claude 3.5 Sonnet) at $15/M output tokens will crush SaaS gross margins when user query volume scales 10x. Seasoned AI PMs implement model routing and semantic caching.",
    proTip: "Analyze the complexity distribution of incoming queries. Typically 70-80% of user queries are simple classifications or summaries that can be answered by small language models (SLMs) costing 95% less.",
    dilemma: {
      scenario: "Your product's AI assistant feature went viral, growing from 10k to 500k daily queries. Your cloud LLM bill exploded from $1,200/mo to $48,000/mo, turning your gross margin negative (-12%).",
      question: "How should you restructure the AI architecture to restore 70%+ gross margins without degrading user satisfaction?",
      options: [
        {
          id: "A",
          text: "Cap every user to 3 questions per day and shut off the assistant once the budget cap is reached.",
          isRecommended: false,
          feedback: "Drastically degrades product utility, harms retention, and destroys virality."
        },
        {
          id: "B",
          text: "Implement a semantic vector cache for frequent queries, route simple classification/extraction tasks to an SLM (e.g., GPT-4o-mini at $0.15/M tokens), and reserve frontier models only for multi-step reasoning.",
          isRecommended: true,
          feedback: "Exemplary AI PM economics! Model cascading and semantic caching routinely reduce token inference expenditure by 70-85% while maintaining sub-second latency."
        },
        {
          id: "C",
          text: "Immediately triple the subscription price for all existing customers.",
          isRecommended: false,
          feedback: "Punishes users for poor backend architectural design and causes massive churn."
        },
        {
          id: "D",
          text: "Downgrade all queries to a tiny open-source model running on a cheap CPU server regardless of reasoning quality.",
          isRecommended: false,
          feedback: "Complex queries will fail completely, causing widespread user frustration and product abandonment."
        }
      ]
    }
  }
];
