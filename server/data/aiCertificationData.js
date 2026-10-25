// server/data/aiCertificationData.js
// Complete Syllabus & Program Specification for the International Certificate in AI Product Management
// Accredited by the Institute of Product Leadership (IPL)

module.exports = {
  program: {
    title: "International Certificate in AI Product Management",
    issuer: "Institute of Product Leadership (IPL)",
    tagline: "Become an AI VALUE CREATOR. Stay Ahead of the Curve.",
    duration: "3 Months, 3 Core Courses + 4 Electives",
    commitment: "90+ Hours of Learning, Case Studies & Project-Based Learning",
    format: "Cohort-based Learning by Doing (Not a cohort of 100), Weekly Live Sessions with Global Practitioner Faculty, 1:1 Mentoring",
    credential: "3 Course Completion Certificates + Globally Recognized Program Certificate",
    mantra: "DO IT NOW. SOMETIMES LATER BECOMES NEVER. #PRODUCT MANTRA",
    marketUrgency: {
      stat1: {
        value: "91%",
        label: "Product leaders believe companies need to adopt AI in products to stay competitive",
        source: "Microsoft & LinkedIn 2024 Work Trend Index"
      },
      stat2: {
        value: "54%",
        label: "Worry their PM organization lacks skills, a plan, and vision for implementation",
        source: "Microsoft & LinkedIn 2024 Work Trend Index"
      },
      quote: "All Product Managers will be AI Product Managers in the future"
    },
    targetAudience: [
      { role: "Product Managers", desc: "Pivoting to AI PM to learn proven frameworks to build AI-driven applications and viable AI products." },
      { role: "Technology Professionals", desc: "Paving their path towards AI Product Management, enhancing skills and positioning themselves." },
      { role: "Product Leaders", desc: "Staffing AI product organizations, making strategic tradeoffs, and fostering an AI-first culture." },
      { role: "Early Career Product Managers", desc: "Seeking to understand AI Product Management from foundations and launch AI product features." },
      { role: "Technology Consultants", desc: "Focusing on analysis, design, and development of technology AI solutions for enterprise clients." }
    ]
  },

  // 1. One Program & 6 Core Outcomes
  outcomes: [
    {
      number: "01",
      title: "Apply",
      summary: "AI-Driven PM Workflows",
      description: "Apply AI-driven approaches—such as Prompt Engineering, No-Code Prototyping, and AI Agents—to optimize product management workflows from ideation through A/B testing and launch execution."
    },
    {
      number: "02",
      title: "Evaluate & Prioritize",
      summary: "Feasibility & Model Selection",
      description: "Evaluate and prioritize high-impact, AI-appropriate use cases by assessing feasibility through Model Selection, understanding ML Workflows, and leveraging Synthetic Data Generation to test assumptions early."
    },
    {
      number: "03",
      title: "Design",
      summary: "AI-Enhanced Roadmaps",
      description: "Design AI-enhanced product features and roadmaps by aligning Model Performance, Fine-Tuning, and Machine Learning Essentials with strategic business objectives and real user needs."
    },
    {
      number: "04",
      title: "Implement",
      summary: "Data Governance & Responsible AI",
      description: "Implement best practices in data governance and responsible AI by embedding Data Analysis, Ethical Use of Synthetic Data, and stakeholder collaboration strategies across the product lifecycle."
    },
    {
      number: "05",
      title: "Demonstrate",
      summary: "Cross-Functional AI Leadership",
      description: "Demonstrate leadership in AI product initiatives by translating technical concepts like NLP, Model Fine-Tuning, and ML Workflows into business value for cross-functional teams and executives."
    },
    {
      number: "06",
      title: "Stay Ahead",
      summary: "Emerging AI Innovation",
      description: "Stay ahead of the curve in AI product innovation by mastering emerging techniques such as Vibe Coding, AI Agent Design, Model Context Protocol (MCP), and cutting-edge trends in Prompt Engineering and Model Optimization."
    }
  ],

  // 2. Adaptive AI Product Management Competency Framework™
  competencyFramework: {
    name: "Adaptive AI Product Management Competency Framework™",
    description: "Empowering product managers to responsibly build AI-driven, data-led innovation across three interconnected product management personas and three AI paradigms.",
    practiceAreas: [
      "AI Value Roadmapping",
      "Prompt Engineering",
      "Rapid Prototyping",
      "Data Quality Oversight",
      "Ethical Oversight"
    ],
    personaRings: [
      {
        persona: "Business Product Manager",
        role: "Envisioning AI Products",
        color: "from-orange-500 to-amber-500",
        competencies: [
          { name: "Strategic Alignment", desc: "Aligning AI capabilities with corporate mission, portfolio strategy, and executive ROI." },
          { name: "AI Value Roadmapping", desc: "Translating business objectives into sequenced, outcome-driven AI roadmaps." },
          { name: "Business Value Modeling", desc: "Performing Cost-Benefit Analysis (Net Benefit, BCR, Payback Period) for AI investments." },
          { name: "Stakeholder Advocacy", desc: "Articulating AI's value proposition, risks, and trade-offs to board members and customers." }
        ]
      },
      {
        persona: "Tech/Data Product Manager",
        role: "Guiding AI Product Development",
        color: "from-emerald-500 to-teal-600",
        competencies: [
          { name: "Data Quality Oversight", desc: "Detecting missing values, stale data, biased sampling, label leakage, and drift before training." },
          { name: "AI-Driven Data Analysis", desc: "K-Means cluster analysis, synthetic data generation, and beachhead customer segmentation." },
          { name: "ML Essentials & Model Selection", desc: "Selecting between Classification, Regression, Forecasting, and Clustering model families." },
          { name: "Model Evaluation & Evals", desc: "Interpreting Confusion Matrices, setting business-cost decision thresholds, and automated Evals." }
        ]
      },
      {
        persona: "Domain Product Manager",
        role: "Guardian of Agency",
        color: "from-blue-600 to-indigo-700",
        competencies: [
          { name: "Agent Architecture", desc: "Defining models, context windows, tool schemas, and agent autonomy levels." },
          { name: "Agent Collaboration", desc: "Orchestrating multi-agent systems and Model Context Protocol (MCP) integrations." },
          { name: "Agent Governance", desc: "Implementing pre-action guardrails, fallback behavior, and Human-in-the-Loop overrides." },
          { name: "Ethical Oversight", desc: "Auditing AI bias, ensuring DPDP / EU AI Act compliance, and designing model cards." }
        ]
      }
    ],
    aiPillars: [
      { name: "Generative AI", focus: "Prompt Engineering, CoStars, Mega-Prompts, RAG & Vector Databases, Synthetic Surveys" },
      { name: "Predictive AI", focus: "Supervised/Unsupervised ML, Confusion Matrices, Precision vs Recall, Batch vs Real-time Inference" },
      { name: "Agentic AI", focus: "Autonomous ReAct Agents, MCP Tool Discovery, Multi-Agent Swarms, 4-Tier Autonomy Safeguards" }
    ]
  },

  // 3. The 3 Core Courses (Detailed Modules & Concepts)
  coreCourses: [
    {
      code: "AIPM401F",
      title: "Generative AI Product Management",
      month: "Month 1",
      tagline: "Leverage AI to enhance PM workflows and strategic thinking",
      overview: "Focuses on how product managers can use artificial intelligence as a tool to enhance their own day-to-day work, decision-making, and strategic thinking. Learn to leverage AI to do your job more effectively, rapidly prototype concepts, and build grounded GenAI features.",
      modules: [
        {
          id: "mod-1-1",
          number: "1.1",
          title: "PM Role & Skills in the AI Era",
          topics: [
            "Evolving PM role & responsibilities in AI-driven organizations: Moving from feature delivery to probabilistic value creation.",
            "Levels of AI fluency required across different product contexts: Consumer AI, Enterprise Workflow AI, and Core Platform ML.",
            "Applying the Adaptive AI PM Competency Framework™ to real product roles and team topologies."
          ],
          practicalExercise: "Conduct an AI Fluency Audit on your product role and map required skills against the Adaptive Framework."
        },
        {
          id: "mod-1-2",
          number: "1.2",
          title: "Business Value Modeling & AI Value Roadmapping",
          topics: [
            "Aligning AI capabilities to business goals, KPIs, North Star metrics, and product objectives.",
            "Cost-Benefit Analysis for AI features: Calculating Net Benefit, Benefit-Cost Ratio (BCR), and Payback Period.",
            "Translating business objectives into actionable AI strategy execution & multi-horizon roadmaps.",
            "Articulating AI's value proposition to executive leadership, finance, and cross-functional teams."
          ],
          practicalExercise: "Build an economic Cost-Benefit model (BCR & Payback Period) for an AI Copilot feature."
        },
        {
          id: "mod-1-3",
          number: "1.3",
          title: "Prompt Engineering for Product Leaders",
          topics: [
            "Crafting and refining prompts to obtain high-quality, reproducible outputs from generative AI models.",
            "Prompting for Answers vs Understanding with the CoStars framework, Mega-Prompts, and Meta-Prompting.",
            "Applying Prompt Engineering to product narratives, PRDs, and Amazon 'Working Backwards' (PR/FAQ) documents."
          ],
          practicalExercise: "Draft an end-to-end Amazon Working Backwards PR/FAQ using the CoStars prompt architecture."
        },
        {
          id: "mod-1-4",
          number: "1.4",
          title: "AI-driven Data Analysis & Customer Discovery",
          topics: [
            "Segmenting customers using Demographics, Psychographics, Firmographics, and Jobs-to-be-Done (JTBD).",
            "No-Code K-Means Cluster Analysis with Generative AI to reveal hidden customer personas and behavioral segments.",
            "Generating Synthetic Data for survey simulation to validate unmet user needs at scale before field research.",
            "Identifying the Beachhead Customer Segment to guide Go-To-Market (GTM) prioritization."
          ],
          practicalExercise: "Run a No-Code K-Means cluster analysis on a 1,000-user survey dataset and identify the beachhead cohort."
        },
        {
          id: "mod-1-5",
          number: "1.5",
          title: "Rapid Prototyping & Ethical Oversight",
          topics: [
            "Building a No-Code RAG application with Vector Databases (Pinecone, pgvector) to eliminate factual hallucinations.",
            "Prototyping PoCs with No-Code tools & Vibe Coding (Cursor, Replit, v0) to demonstrate immediate value.",
            "Addressing risks related to AI bias, IP infringement, data leakage, and ethical misuse across customer touchpoints."
          ],
          practicalExercise: "Construct a functional No-Code RAG prototype indexing company PDF policies with sentence citations."
        }
      ]
    },
    {
      code: "AIPM402F",
      title: "Predictive AI in Product Management",
      month: "Month 2",
      tagline: "Incorporate predictive AI capabilities into products with no-code modeling, evaluation & governance",
      overview: "Emphasizes the practical application of predictive AI in Product Management. Guides PMs in framing prediction problems, assessing data readiness, evaluating model performance with business cost grids, and governing AI features in production without writing code.",
      modules: [
        {
          id: "mod-2-1",
          number: "2.1",
          title: "Prediction Framing & Model Selection",
          topics: [
            "Descriptive, diagnostic, predictive & prescriptive analytics for product decisions and business value.",
            "Selecting the right model family: Classification, Regression, Time-Series Forecasting & Clustering.",
            "Understanding Supervised vs Unsupervised Learning and where each applies in customer workflows.",
            "Assessing the business cost of being wrong: False Positives (Type I) vs False Negatives (Type II)."
          ],
          practicalExercise: "Frame a predictive churn prevention system: select the model family and quantify the dollar cost of FP vs FN."
        },
        {
          id: "mod-2-2",
          number: "2.2",
          title: "Data Readiness & Quality",
          topics: [
            "Foundational skills in managing data types, schemas, formats, and preprocessing requirements.",
            "Detecting missing values, stale data, biased sampling, label leakage, and data drift before training begins.",
            "Generating & leveraging Synthetic Data to address privacy regulations or supplement scarce edge-case datasets.",
            "Privacy-preserving patterns: data minimisation, on-device inference, and differential privacy."
          ],
          practicalExercise: "Perform a data readiness audit on a 10,000-row tabular dataset; flag label leakage and biased sampling."
        },
        {
          id: "mod-2-3",
          number: "2.3",
          title: "Model Evaluation & AI Evals",
          topics: [
            "Interpreting the Confusion Matrix as a business cost grid for executive product decisions.",
            "Understanding Precision, Recall, F1 Score & ROC-AUC and the trade-offs between them.",
            "Setting probability decision thresholds (T) based on business ROI rather than mathematical defaults.",
            "Implementing automated AI Evals with Golden Datasets, LLM-as-Judge, and Guardrail Evals."
          ],
          practicalExercise: "Calibrate the classification threshold T on an ROC curve to maximize Net Profit on a loan approval feature."
        },
        {
          id: "mod-2-4",
          number: "2.4",
          title: "Deployment, Monitoring & Governance",
          topics: [
            "Choosing between Batch Inference vs Real-Time Streaming and their impact on cloud compute cost and UX.",
            "Designing confidence thresholds, graceful fallback behavior, and Human-in-the-Loop (HITL) review queues.",
            "Monitoring data drift and concept drift in production, building feedback loops, and defining automated retraining triggers.",
            "Compliance with EU AI Act, India DPDP (Digital Personal Data Protection Act), and Model Cards for responsible AI deployment."
          ],
          practicalExercise: "Write an enterprise Model Card and define automated drift retraining triggers for a production classifier."
        }
      ]
    },
    {
      code: "AIPM403F",
      title: "Agent-driven Automation in Products",
      month: "Month 3",
      tagline: "Leverage multi-agent systems to automate and optimize product workflows",
      overview: "Harness the power of AI agents to handle repetitive tasks, streamline complex multi-step processes, and collaborate effectively. Identify automation opportunities, plan agentic architectures, leverage MCP (Model Context Protocol), and oversee deployment in real-world products.",
      modules: [
        {
          id: "mod-3-1",
          number: "3.1",
          title: "Agent Foundations & Architecture",
          topics: [
            "Definition of AI agents, agentic workflows, and autonomy spectrum vs conversational chatbots.",
            "Core Agent Architecture: Foundation Models, Context Windows, Tool Calling, Memory (Scratchpad/Vector), and Autonomy.",
            "Rule-based deterministic automation vs AI-powered probabilistic decisioning.",
            "Common high-impact use cases for agent-driven product workflows across FinTech, SaaS, and Supply Chain."
          ],
          practicalExercise: "Deconstruct an autonomous refund agent into Model, Context, Tool Schemas, and Memory modules."
        },
        {
          id: "mod-3-2",
          number: "3.2",
          title: "Levels of Automation",
          topics: [
            "From Manual & Workflow Automation to Traditional Programming, AI-Assisted, and Fully Agentic systems.",
            "Distinguishing AI-Assisted copilot workflows from fully autonomous Agentic systems.",
            "Where each automation level breaks, failure modes, and what errors cost the business.",
            "When agentic AI is genuinely warranted vs when simpler deterministic automation suffices."
          ],
          practicalExercise: "Map a 6-step customer onboarding workflow across the 5 levels of automation and identify break points."
        },
        {
          id: "mod-3-3",
          number: "3.3",
          title: "Workflow Integration & Multi-Agent Design",
          topics: [
            "Identifying high-leverage automation opportunities in existing enterprise product processes.",
            "Decomposing complex product workflows into discrete tasks and mapping specialized agents to them.",
            "Model Context Protocol (MCP) for agent tool discovery, authentication, and execution.",
            "Orchestrating multi-agent collaborative workflows (supervisor, worker, critic) without engineering bottlenecks."
          ],
          practicalExercise: "Architect a 3-agent research system (Researcher, Synthesizer, Fact-Checker) using MCP tool calling."
        },
        {
          id: "mod-3-4",
          number: "3.4",
          title: "Governance, Guardrails & Scaling",
          topics: [
            "Guardrails and policy checks before agent actions are executed (e.g., Llama Guard, NeMo).",
            "Managing errors, execution fallbacks & human overrides with the 4-Tier Human-in-the-Loop (HITL) framework.",
            "Monitoring agent behavior, loop detection, cost per execution, and production performance telemetry.",
            "Addressing risks related to AI bias, prompt injection jailbreaks, or misuse through ethical guardrails."
          ],
          practicalExercise: "Design a Human-in-the-Loop escalation policy and loop-breaker guardrail for an autonomous billing agent."
        }
      ]
    }
  ],

  // 4. The 4 Elective Courses (Micro-Certifications)
  electives: [
    {
      code: "LDR401F",
      title: "Communicating for Impact",
      category: "Leadership & Communications",
      overview: "Master executive storytelling, structured communication frameworks, and presentation skills to secure board and stakeholder buy-in.",
      modules: [
        {
          id: "ldr-1-1",
          number: "1.1",
          title: "Art of Storytelling",
          topics: [
            "High Impact Communications for technical and non-technical audiences.",
            "Presentation Structures: SMP (Situation, Metric, Proposal) and SIRF (Situation, Complication, Resolution, Forward).",
            "Visual Presentations: Eliminating cognitive overload and structuring data visualizations."
          ]
        },
        {
          id: "ldr-1-2",
          number: "1.2",
          title: "Executive Presence",
          topics: [
            "Leveraging Voice & Body Language in high-stakes boardroom negotiations.",
            "Networking Within & Outside the organization to build political capital."
          ]
        },
        {
          id: "ldr-1-3",
          number: "1.3",
          title: "Advanced Communication Skills",
          topics: [
            "Delivering Difficult News (delays, failed model experiments, deprecations) with empathy and authority.",
            "Handling Tough Q&A sessions with skeptical engineering leads and CFOs.",
            "Cross-Culture Communications across globally dispersed product teams."
          ]
        }
      ]
    },
    {
      code: "LDR402F",
      title: "Leading with Influence",
      category: "Influence & Organizational Change",
      overview: "Develop personal influence, thought leadership, team empowerment, and change management capabilities without relying on direct authority.",
      modules: [
        {
          id: "ldr-2-1",
          number: "1.1",
          title: "Leading Self",
          topics: [
            "Persuasion and Influence without direct line authority; building executive presence.",
            "Building a personal brand through Thought Leadership in AI & Product.",
            "Personalized Assessments on Influentiality Index (II), Conflict Management, and principled negotiation."
          ]
        },
        {
          id: "ldr-2-2",
          number: "1.2",
          title: "Leading Teams",
          topics: [
            "Leading People and Managing Globally Dispersed AI/ML engineering teams.",
            "Negotiation and Influence skills across competing department priorities.",
            "Empowerment: Coaching, training, psychological safety, support, and motivation."
          ]
        },
        {
          id: "ldr-2-3",
          number: "1.3",
          title: "Leading Change",
          topics: [
            "Leading Disruptive Innovation & Change Management in traditional organizations.",
            "Stakeholder Management & Creating Strategic Alignment around AI-first transformation."
          ]
        }
      ]
    },
    {
      code: "STG401F",
      title: "Product & Digital Strategy",
      category: "Business Strategy & Portfolio",
      overview: "Connect corporate vision to product execution through digital transformation frameworks, portfolio expansion, and metric-driven roadmaps.",
      modules: [
        {
          id: "stg-1-1",
          number: "1.1",
          title: "Strategic Frameworks & Digital Transformation Models",
          topics: [
            "Corporate Strategy, Business Strategy, and Product Strategy alignment.",
            "Understanding strategic frameworks: Porter's 5 Forces, Blue Ocean, and Flywheels.",
            "Opportunity Analysis Canvas for evaluating new digital ventures."
          ]
        },
        {
          id: "stg-1-2",
          number: "1.2",
          title: "Product Strategy and Portfolio Management",
          topics: [
            "Product portfolio expansion and multi-product lifecycle management.",
            "Ansoff Model of Product Market Growth (Market Penetration, Market Development, Product Development, Diversification).",
            "Models for Portfolio Analysis (BCG Matrix, GE-McKinsey Matrix)."
          ]
        },
        {
          id: "stg-1-3",
          number: "1.3",
          title: "Developing a Digital Business Strategy",
          topics: [
            "Technology and platform strategy: Two-sided networks, APIs, and data moats.",
            "Digital Transformation Models: Modernizing legacy operational systems into agile product platforms."
          ]
        },
        {
          id: "stg-1-4",
          number: "1.4",
          title: "Vision Roadmapping, KPIs & Metrics",
          topics: [
            "Developing outcome-based roadmaps; defining KPIs, OKRs, and North Star metrics.",
            "Synthesizing strategy and storytelling to rally cross-functional squads."
          ]
        }
      ]
    },
    {
      code: "DSN401F",
      title: "AI-Powered Product Design",
      category: "Design & UX for AI",
      overview: "Reimagine product design using generative AI: AI-assisted user research, rapid prompt-to-prototype workflows, and design system governance.",
      modules: [
        {
          id: "dsn-1-1",
          number: "1.1",
          title: "AI-Accelerated User Research & Insight Synthesis",
          topics: [
            "AI Research Synthesis: Clustering themes, detecting outliers, and amplifying underrepresented customer voices.",
            "AI-assisted Personas & Dynamic Journey Maps generated from qualitative transcripts.",
            "Critically Evaluating AI Synthesis Against Raw Data to avoid confirmation bias."
          ]
        },
        {
          id: "dsn-1-2",
          number: "1.2",
          title: "Prompt-to-Prototype for Rapid Concept Design",
          topics: [
            "Prompt-to-Prototype Workflow: Using v0, Midjourney, Figma AI, and Claude Artifacts.",
            "The Design Brief as a Prompt: Writing multi-modal specifications for generative design engines.",
            "Critiquing & Choosing Between AI-Generated Drafts based on heuristic evaluation."
          ]
        },
        {
          id: "dsn-1-3",
          number: "1.3",
          title: "AI-Augmented Design Systems & Quality Assurance",
          topics: [
            "Prompt-driven Component & Design Token Generation for scalable UI libraries.",
            "Building a Personal Prompt Library for recurring design patterns.",
            "AI Design QA: Automated auditing of visual hierarchy, design consistency, and Accessibility (WCAG 2.1 AA)."
          ]
        }
      ]
    }
  ],

  // 5. Tools Covered in the Program
  toolsCovered: [
    { name: "Google AI Studio", category: "Foundation Models", desc: "Rapid prototyping with Gemini models, system instructions, and multi-modal prompting." },
    { name: "n8n", category: "Workflow Automation", desc: "Self-hosted node-based workflow automation connecting AI models to enterprise APIs." },
    { name: "Perplexity AI", category: "Research & Synthesis", desc: "Grounded conversational research with real-time web citations and synthesis." },
    { name: "Make", category: "No-Code Integration", desc: "Visual automation platform orchestrating multi-app triggers and AI transforms." },
    { name: "ChatGPT", category: "Generative AI", desc: "Advanced reasoning, Custom GPTs, Code Interpreter, and prompt engineering." },
    { name: "Langflow", category: "RAG & Agents", desc: "Visual UI for LangChain and LlamaIndex to build drag-and-drop RAG and multi-agent flows." },
    { name: "AutoGen", category: "Multi-Agent Swarms", desc: "Microsoft multi-agent conversation framework for complex collaborative task execution." },
    { name: "Claude", category: "Agentic Reasoning", desc: "Anthropic's flagship model with 200k context, artifacts, and advanced tool calling." },
    { name: "Model Context Protocol (MCP)", category: "Agent Tool Standard", desc: "Open protocol standardizing how AI agents discover tools, context, and secure APIs." }
  ],

  // 6. Companies Hiring & Executive Mentorship
  hiringCompanies: [
    "Target", "Intel", "Razorpay", "TCS", "VISA", "Adobe", "HSBC", 
    "Freshworks", "Oracle", "Philips", "ABB", "Dell", "BCG", "Cisco", 
    "John Deere", "Paytm", "Microsoft", "Morningstar", "Intuit", "Phenom People"
  ],

  executiveCoaches: [
    { name: "SaiSatish Vedam", role: "Ex-Senior Director Product Management", company: "Oracle" },
    { name: "Chandrashekar Ramamurthy", role: "CEO", company: "Native" },
    { name: "Mandar Tengse", role: "Sr Director Product Management", company: "Oracle" },
    { name: "Pradeepta Mishra", role: "Founder - Building AI Agents", company: "Stealth Mode" },
    { name: "Saibal Datta", role: "Founder & Chief Designer - UX/UI", company: "GDD Product Design Studio" },
    { name: "Subodh Kar", role: "General Manager", company: "Schneider Electric" },
    { name: "Steve Caplow", role: "Principal", company: "Caplow Associates" },
    { name: "Muthuraj Thangavel", role: "Product Leader", company: "Google" },
    { name: "Merlyn Jyothi", role: "Principal Product Manager", company: "Oracle" },
    { name: "Anina Lambrechts", role: "Designer & Founder", company: "Ten Slash One" }
  ],

  // 7. Interactive Official AI PM Certification Mock Simulator (25 Comprehensive Exam Questions)
  certificationSimulator: {
    title: "International Certificate in AI Product Management - Official Replica Exam",
    totalQuestions: 25,
    durationMinutes: 45,
    passingScore: 80, // 80% passing threshold
    questions: [
      {
        id: "aipm-cert-1",
        course: "AIPM401F",
        domain: "Generative AI & Business Modeling",
        question: "When calculating the financial return for an AI Copilot investment, which set of metrics provides the most rigorous Cost-Benefit Analysis for executive leadership?",
        options: [
          "Story points delivered, sprint velocity, and code commits per developer",
          "Net Benefit (Total Value - Total Cost), Benefit-Cost Ratio (BCR), and Payback Period in months",
          "Raw model accuracy score and total number of tokens generated",
          "Number of positive thumbs-up clicks received during informal employee demos"
        ],
        answer: 1,
        explanation: "Course AIPM401F Module 1.2 specifies Cost-Benefit Analysis for AI features via Net Benefit, Benefit-Cost Ratio (BCR), and Payback Period, connecting AI capabilities directly to corporate finance and P&L."
      },
      {
        id: "aipm-cert-2",
        course: "AIPM401F",
        domain: "Prompt Engineering",
        question: "What is the primary advantage of utilizing the CoStars or Mega-Prompt framework over naive open-ended prompting?",
        options: [
          "It automatically trains a custom neural network on your local machine",
          "It structures Context, Objective, Style, Tone, Audience, Response constraints, producing deterministic and reproducible enterprise outputs",
          "It eliminates the need for OpenAI API keys by spoofing the server",
          "It bypasses token limits by compressing English words into hexadecimal"
        ],
        answer: 1,
        explanation: "CoStars (Context, Objective, Style, Tone, Audience, Response) establishes structured constraints, transforming open-ended prompts into reliable, reproducible business deliverables like Amazon Working Backwards PR/FAQs."
      },
      {
        id: "aipm-cert-3",
        course: "AIPM401F",
        domain: "AI-driven Data Analysis",
        question: "How does an AI Product Manager leverage No-Code K-Means Cluster Analysis with Generative AI to identify the beachhead customer segment?",
        options: [
          "By writing 5,000 lines of low-level C++ code to cluster database rows",
          "By analyzing multi-dimensional user traits (demographics, firmographics, JTBD) to discover natural customer groupings and prioritize the highest-intent cohort for GTM",
          "By randomly selecting 10 customers from Salesforce and assuming they represent the entire market",
          "By asking ChatGPT to invent 10 fictional customer names without any data input"
        ],
        answer: 1,
        explanation: "AIPM401F Module 1.4 focuses on using Generative AI for No-Code K-Means clustering across firmographics, psychographics, and JTBD to uncover natural customer clusters and isolate the beachhead segment."
      },
      {
        id: "aipm-cert-4",
        course: "AIPM401F",
        domain: "Rapid Prototyping & Ethics",
        question: "Why is a No-Code RAG (Retrieval-Augmented Generation) application with vector databases preferred over model fine-tuning for internal company policy search?",
        options: [
          "Fine-tuning is free while RAG costs millions of dollars",
          "RAG dynamically grounds generation in verified document chunks with sentence citations and avoids outdated hallucinated weights when policies change quarterly",
          "Fine-tuning is banned under international copyright treaties",
          "Vector databases do not require any computers or cloud servers"
        ],
        answer: 1,
        explanation: "RAG enables sub-second document freshness and precise sentence-level citations without retraining. Fine-tuning models freezes facts in static weights, which causes hallucinations when policies change."
      },
      {
        id: "aipm-cert-5",
        course: "AIPM402F",
        domain: "Predictive Analytics & Model Selection",
        question: "A FinTech company needs to forecast weekly ATM cash withdrawal demand across 500 branch locations. Which model family should the AI PM select?",
        options: [
          "Unsupervised K-Means Clustering",
          "Time-Series Forecasting / Regression models",
          "Text-to-Image Diffusion Models",
          "Zero-Shot Generative Chatbots"
        ],
        answer: 1,
        explanation: "AIPM402F Module 2.1 covers model families. Predicting continuous numerical cash amounts over recurring time intervals is a classic Time-Series Forecasting and Regression problem."
      },
      {
        id: "aipm-cert-6",
        course: "AIPM402F",
        domain: "Data Readiness & Quality",
        question: "What is 'Label Leakage' in predictive machine learning, and why must an AI PM detect it before model training begins?",
        options: [
          "When physical paper labels fall off server racks in the data center",
          "When features included during training contain information from the future that will not be available at real-time inference, producing falsely inflated test scores",
          "When a competitor leaks your company's product roadmap on Twitter",
          "When an open-source model forgets its English vocabulary"
        ],
        answer: 1,
        explanation: "Label leakage occurs when historical training data inadvertently includes variables that only exist after the target event occurs (e.g. including 'churn_survey_completed_date' to predict churn), causing catastrophic real-world failure."
      },
      {
        id: "aipm-cert-7",
        course: "AIPM402F",
        domain: "Model Evaluation & AI Evals",
        question: "In a medical screening AI product detecting early-stage malignant tumors, what is the most critical metric trade-off the AI PM must enforce?",
        options: [
          "Maximize Precision at the expense of Recall so doctors receive zero false alerts",
          "Maximize Recall (Sensitivity) to minimize False Negatives (missed tumors), while tolerating a reasonable False Positive rate handled by follow-up biopsy",
          "Focus exclusively on 99% raw Accuracy even if the positive tumor rate is only 0.1%",
          "Optimize for 5ms latency regardless of diagnostic correctness"
        ],
        answer: 1,
        explanation: "A False Negative in oncology is fatal (missed cancer). AI PMs must tune decision thresholds for high Recall to capture all true cases, even if it introduces manageable False Positives."
      },
      {
        id: "aipm-cert-8",
        course: "AIPM402F",
        domain: "Deployment & Governance",
        question: "When should an AI PM deploy an AI feature using Batch Inference instead of Real-Time Streaming Inference?",
        options: [
          "When the user is actively waiting on an interactive mobile screen for an instant response",
          "When predictions can be computed asynchronously on a schedule (e.g. nightly churn scores or weekly email digests), slashing cloud compute costs by up to 80%",
          "Whenever the engineering team does not know how to write SQL",
          "Batch inference is obsolete and never used in production"
        ],
        answer: 1,
        explanation: "AIPM402F Module 2.4 highlights the trade-off between Batch and Real-Time inference. Batch is drastically cheaper and simpler for tasks that do not require sub-second interactive user responses."
      },
      {
        id: "aipm-cert-9",
        course: "AIPM403F",
        domain: "Agent Architecture",
        question: "What are the four foundational components of modern AI Agent Architecture?",
        options: [
          "HTML, CSS, JavaScript, and Webpack",
          "Foundation Models, Context Window, Tool Calling (APIs/Schemas), and Autonomy/Memory (Scratchpad/Vector)",
          "Agile Scrum, Kanban, Waterfall, and SAFe",
          "GPU, Motherboard, Power Supply, and Hard Drive"
        ],
        answer: 1,
        explanation: "Course AIPM403F Module 3.1 defines Agent Architecture across Models (the reasoning brain), Context (in-flight instructions), Tools (external deterministic APIs), and Autonomy/Memory (stateful persistence)."
      },
      {
        id: "aipm-cert-10",
        course: "AIPM403F",
        domain: "Model Context Protocol (MCP)",
        question: "What is the primary role of the Model Context Protocol (MCP) in enterprise agent workflows?",
        options: [
          "It is a legal contract signed by executives to transfer IP to OpenAI",
          "It provides an open standardized protocol for AI agents to securely discover, authenticate, and invoke external tools and enterprise data sources without bespoke integrations",
          "It replaces all database indexes with flat text files",
          "It encrypts user prompts so developers cannot read them"
        ],
        answer: 1,
        explanation: "AIPM403F Module 3.3 highlights the Model Context Protocol (MCP) as the universal open standard for AI agents to discover tools, access context, and interact with systems securely."
      },
      {
        id: "aipm-cert-11",
        course: "AIPM403F",
        domain: "Levels of Automation & HITL",
        question: "An AI agent is designed to execute customer dispute refunds. Under the 4-Tier Autonomy Matrix, how should a $500 refund action be governed?",
        options: [
          "Execute immediately without logging or notifying anyone",
          "Generate a Human-in-the-Loop (HITL) approval card requiring 1-click human verification before money is disbursed, with complete reasoning telemetry",
          "Throw an unhandled server error and shut down the customer's account",
          "Ask the customer to vote in a public Twitter poll"
        ],
        answer: 1,
        explanation: "Irreversible financial transactions fall strictly under Tier 3/4 Autonomy: the agent drafts the transaction and verifies eligibility, but a human must review and approve before execution."
      },
      {
        id: "aipm-cert-12",
        course: "AIPM403F",
        domain: "Agent Governance & Scaling",
        question: "How do AI PMs prevent autonomous multi-agent systems from getting trapped in infinite reasoning loops?",
        options: [
          "By unplugging the cloud server every evening at 6:00 PM",
          "By implementing hard recursion depth limits (e.g. max 5 iterations), loop-detection telemetry, and automated fallback to human operators",
          "By removing tools from the agent so it cannot execute anything",
          "Infinite loops are impossible in modern neural networks"
        ],
        answer: 1,
        explanation: "AIPM403F Module 3.4 requires loop-breakers, recursion step caps, and circuit-breaker guardrails to prevent runaway compute costs and frozen workflows."
      },
      {
        id: "aipm-cert-13",
        course: "AIPM401F",
        domain: "Synthetic Data & Survey Simulation",
        question: "When is it appropriate and ethical to use Synthetic Data Generation in the product discovery process?",
        options: [
          "To fake customer testimonial quotes on your marketing landing page",
          "To simulate survey responses across edge-case cohorts, stress-test data schemas, and augment imbalanced datasets without exposing real user PII",
          "To forge user signups to mislead venture capital investors during fundraising",
          "Synthetic data should never be used under any circumstances"
        ],
        answer: 1,
        explanation: "Synthetic data enables product teams to simulate edge cases at scale and protect customer privacy under GDPR/DPDP, while never replacing actual user interviews for final validation."
      },
      {
        id: "aipm-cert-14",
        course: "AIPM402F",
        domain: "Confusion Matrix & Cost Grids",
        question: "If a fraud detection model flags 100 transactions as fraudulent, but 20 of them were actually legitimate VIP purchases, what is the Precision of the model?",
        options: [
          "20%",
          "80%",
          "100%",
          "50%"
        ],
        answer: 1,
        explanation: "Precision = True Positives / (True Positives + False Positives) = 80 / (80 + 20) = 80 / 100 = 80%."
      },
      {
        id: "aipm-cert-15",
        course: "AIPM402F",
        domain: "Data Governance & DPDP / EU AI Act",
        question: "Under the EU AI Act and India DPDP Act, how must 'High-Risk AI Systems' (e.g. automated hiring, credit scoring, biometrics) be documented?",
        options: [
          "No documentation is needed as long as the startup is incorporated in Delaware",
          "Through formal Model Cards, risk management assessments, non-biased training data audits, human oversight logs, and continuous cybersecurity monitoring",
          "By posting a one-sentence disclaimer in the terms of service",
          "Only open-source models are subject to regulatory documentation"
        ],
        answer: 1,
        explanation: "AIPM402F Module 2.4 covers regulatory compliance (EU AI Act & DPDP Act). High-risk systems require Model Cards, bias audits, continuous logging, and human oversight mechanisms."
      },
      {
        id: "aipm-cert-16",
        course: "LDR401F",
        domain: "Communicating for Impact",
        question: "In the SIRF executive communication framework, what does the acronym stand for?",
        options: [
          "Sales, Income, Revenue, Finance",
          "Situation, Complication/Issue, Resolution, Forward-looking action",
          "Software, Infrastructure, Reliability, Frontend",
          "Scrum, Iteration, Retrospective, Feedback"
        ],
        answer: 1,
        explanation: "Elective LDR401F Module 1.1 covers SIRF: Situation, Issue (or Complication), Resolution, and Forward-looking next steps, a premier presentation structure for technical product managers."
      },
      {
        id: "aipm-cert-17",
        course: "LDR402F",
        domain: "Leading with Influence",
        question: "How does a Product Manager successfully lead an enterprise AI transformation without direct hierarchical authority over Data Scientists and Engineers?",
        options: [
          "By threatening to report developers to executive leadership if deadlines are missed",
          "By building credibility through transparent data-driven hypotheses, co-creating golden evaluation datasets, and establishing psychological safety through shared outcomes",
          "By taking over coding tasks and pushing code directly to master branch",
          "By delegating all product decisions to the engineering lead"
        ],
        answer: 1,
        explanation: "Elective LDR402F teaches leading through influence, empathy, collaborative experimentation, and strategic alignment rather than positional authority."
      },
      {
        id: "aipm-cert-18",
        course: "STG401F",
        domain: "Product & Digital Strategy",
        question: "According to the Ansoff Product Market Growth Matrix, an existing product company launching a brand-new AI Copilot feature for their existing installed customer base represents which strategy?",
        options: [
          "Market Penetration",
          "Product Development",
          "Market Development",
          "Unrelated Diversification"
        ],
        answer: 1,
        explanation: "Elective STG401F Module 1.2 covers the Ansoff Matrix. Introducing new product capabilities (AI Copilot) into an existing customer market is the definition of a Product Development strategy."
      },
      {
        id: "aipm-cert-19",
        course: "DSN401F",
        domain: "AI-Powered Product Design",
        question: "When designing user interfaces for generative AI, what is the 'Prompt-to-Prototype' workflow?",
        options: [
          "Writing 500-page functional specifications in Microsoft Word and waiting 6 months for engineering",
          "Transforming multi-modal design briefs into functional, testable code prototypes using generative UI tools (e.g. v0, Claude Artifacts) within hours",
          "Asking end users to write raw Python code in the browser",
          "Replacing all buttons with a single blank command line interface"
        ],
        answer: 1,
        explanation: "Elective DSN401F Module 1.2 focuses on the Prompt-to-Prototype workflow: converting structured design prompts into rapid interactive HTML/React prototypes for user testing."
      },
      {
        id: "aipm-cert-20",
        course: "AIPM401F",
        domain: "Adaptive Competency Framework",
        question: "According to the Adaptive AI PM Competency Framework™, what is the primary role of the 'Tech/Data Product Manager'?",
        options: [
          "Managing financial investor relations and stock options",
          "Guiding AI Product Development through Data Quality Oversight, AI-driven Data Analysis, ML Essentials, and Model Selection",
          "Writing HTML email marketing newsletters",
          "Acting as the company's full-time corporate attorney"
        ],
        answer: 1,
        explanation: "The Adaptive Competency Framework assigns 'Guiding AI Product Development' (Data Quality, Data Analysis, ML Essentials, Model Selection) to the Tech/Data Product Manager persona."
      },
      {
        id: "aipm-cert-21",
        course: "AIPM402F",
        domain: "AI Evals & LLM-as-a-Judge",
        question: "What is the function of 'LLM-as-a-Judge' in continuous evaluation pipelines?",
        options: [
          "A generative model that issues legal subpoenas in court cases",
          "Using a state-of-the-art reasoning model (e.g. GPT-4o) with structured rubrics to objectively score generated responses for groundedness, relevance, and safety at scale",
          "A plugin that automatically bans users who ask questions after 9:00 PM",
          "An algorithm that replaces human product managers during performance reviews"
        ],
        answer: 1,
        explanation: "AIPM402F Module 2.3 covers LLM-as-a-Judge: scaling evaluation across thousands of test queries by having a frontier model evaluate outputs against clear rubrics."
      },
      {
        id: "aipm-cert-22",
        course: "AIPM403F",
        domain: "Agent Autonomy & Break Points",
        question: "At which level of automation does an AI system transition from 'AI-Assisted' to 'Agentic'?",
        options: [
          "When the software requires Windows 11 to install",
          "When the system autonomously plans multi-step subtasks, selects tools, observes environmental feedback, and executes actions without step-by-step human intervention",
          "When the user types with a mechanical keyboard instead of a mouse",
          "When the company's stock price increases by 20%"
        ],
        answer: 1,
        explanation: "AIPM403F Module 3.2 distinguishes AI-Assisted (human drives, AI suggests) from Agentic (AI formulates goals, decomposes steps, and executes tools autonomously within guardrails)."
      },
      {
        id: "aipm-cert-23",
        course: "STG401F",
        domain: "Opportunity Analysis Canvas",
        question: "In the Opportunity Analysis Canvas for AI products, which risk must be validated before writing production code?",
        options: [
          "Only whether the office coffee machine is working",
          "Value Risk, Feasibility Risk, Usability Risk, and Ethical/Regulatory Risk",
          "Whether the company logo can be redesigned in neon green",
          "Only whether the engineering team wants to learn a new programming language"
        ],
        answer: 1,
        explanation: "The Opportunity Analysis Canvas in STG401F validates the four fundamental risks upfront: Value, Technical/Data Feasibility, Usability, and Ethical/Regulatory viability."
      },
      {
        id: "aipm-cert-24",
        course: "DSN401F",
        domain: "Accessibility & WCAG in AI UI",
        question: "How should an AI Product Manager ensure AI-generated user interfaces comply with WCAG 2.1 AA accessibility guidelines?",
        options: [
          "Assume that AI models automatically create accessible code without verification",
          "Enforce automated Design QA auditing for sufficient color contrast, keyboard navigation, screen reader ARIA labels, and explicit alternative text for generated images",
          "Disable dark mode across the entire application",
          "Accessibility is not required for AI products"
        ],
        answer: 1,
        explanation: "Elective DSN401F Module 1.3 covers AI Design QA: visual hierarchy, consistency, and WCAG accessibility (contrast, ARIA landmarks, keyboard focus) must be audited systematically."
      },
      {
        id: "aipm-cert-25",
        course: "AIPM401F",
        domain: "Vibe Coding & Emerging Trends",
        question: "What is 'Vibe Coding' in the context of modern AI product prototyping?",
        options: [
          "Listening to lo-fi music while writing C++ code in a dark room",
          "Using natural language prompts and AI coding engines (e.g. Cursor, Claude, Replit) to rapidly generate, iterate, and deploy functional software prototypes at the speed of thought",
          "A marketing buzzword that has no practical application in product management",
          "Writing code exclusively on mobile smartphones without a screen"
        ],
        answer: 1,
        explanation: "Vibe Coding represents the emerging paradigm where product creators describe intent in natural language to AI coding engines, creating working production-grade software prototypes without manual syntax friction."
      }
    ]
  }
};
