// server/data/aiPmData.js
// Enterprise AI Product Manager (AI PM) Mastery Data & Toolkits

module.exports = {
  overview: {
    title: "AI Product Manager & AI Product Owner Mastery",
    tagline: "The definitive transition blueprint from traditional software delivery to leading probabilistic, generative, and agentic AI systems.",
    summary: "As software transitions from deterministic code (if-this-then-that) to probabilistic machine learning, the role of the Product Owner and Product Manager is undergoing its greatest transformation since the Agile Manifesto. Master the technical foundations, product discovery heuristics, unit economics, evaluation pipelines, and executive governance needed to lead AI products from Day 1."
  },

  roadmapStages: [
    {
      id: "stage-1",
      number: "01",
      title: "The AI Paradigm Shift: Probabilistic vs Deterministic Thinking",
      timeframe: "Weeks 1 - 2",
      badge: "Foundations",
      description: "Unlearn deterministic certainty and master the physics of probabilistic systems, data distributions, and error-tolerant product design.",
      keyConcepts: [
        "Deterministic Logic vs Probabilistic Distributions: Traditional software executes rigid code paths ($Y = f(X)$). AI predicts statistical likelihoods ($P(Y|X)$) where an error rate is mathematically guaranteed.",
        "The AI PM Triad: Leading at the intersection of User Problem Formulation, Data Strategy & Lineage, and Model Evaluation & Observability.",
        "The 4-Question AI Viability Filter: Knowing when NOT to use AI—preventing costly R&D when deterministic rules or SQL are 100x cheaper.",
        "Managing the AI Backlog: Writing probabilistic acceptance criteria based on statistical benchmark gates rather than binary pass/fail tickets."
      ],
      actionItems: [
        "Audit your team's current product: Identify 1 feature where deterministic heuristic rules are failing due to complexity.",
        "Shadow a Data Scientist or ML Engineer during a feature engineering session to observe raw data distributions.",
        "Practice rewriting traditional Given/When/Then acceptance criteria into statistical evaluation thresholds."
      ],
      sampleUserStory: `As a risk operations manager,
I want the anomaly detection model to achieve >=94% Precision at >=85% Recall on our validated golden test dataset,
So that fraudulent card charges are caught without falsely declining more than 1.5% of legitimate VIP transactions.`
    },
    {
      id: "stage-2",
      number: "02",
      title: "Classical ML & Predictive Modeling for Product Managers",
      timeframe: "Weeks 3 - 5",
      badge: "Core Technical",
      description: "Master supervised, unsupervised, and reinforcement learning. Understand the statistical trade-offs between Precision, Recall, ROC-AUC, and financial loss.",
      keyConcepts: [
        "Supervised vs Unsupervised vs Reinforcement Learning: Tabular classification/regression, customer clustering, and RL reward optimization.",
        "The Confusion Matrix Deep-Dive: True Positives, False Positives (Type I), True Negatives, and False Negatives (Type II).",
        "The Precision-Recall Trade-off: Why Accuracy is a vanity trap on imbalanced datasets, and how to calibrate the classification decision threshold ($T$).",
        "Data Leakage & Overfitting: Identifying when a model memorizes training noise or leaks future variables, leading to catastrophic production failure."
      ],
      actionItems: [
        "Calculate the monetary cost of a False Positive vs a False Negative for your core customer workflow.",
        "Inspect an ROC curve and choose the optimal decision threshold based on business ROI rather than mathematical defaults.",
        "Construct a Confusion Matrix on a sample dataset with your engineering leads."
      ],
      sampleUserStory: `As a marketing automation specialist,
I want the churn prediction classifier threshold calibrated to T=0.35,
So that we prioritize Recall (capturing 92% of at-risk accounts) because the cost of an outreach email ($0.05) is negligible compared to the loss of a $1,200 annual subscription.`
    },
    {
      id: "stage-3",
      number: "03",
      title: "Generative AI, Large Language Models (LLMs) & RAG",
      timeframe: "Weeks 6 - 8",
      badge: "Generative AI",
      description: "Demystify Transformer architectures, embeddings, vector databases, and the critical architectural decision: Prompting vs RAG vs Fine-Tuning.",
      keyConcepts: [
        "How LLMs Actually Work: Autoregressive next-token prediction, Transformers, Context Windows, and Temperature / Top-P parameter tuning.",
        "The Capability Spectrum: Prompt Engineering (few-shot/chain-of-thought) vs Retrieval-Augmented Generation (RAG) vs Parameter-Efficient Fine-Tuning (PEFT/LoRA).",
        "Production RAG Pipeline Architecture: Semantic chunking, multi-dimensional vector embeddings, Vector DB indexing, semantic similarity retrieval, and reranking.",
        "Grounding vs Hallucination: Why fine-tuning fails at teaching dynamic facts, and why RAG provides verified source citations and auditability."
      ],
      actionItems: [
        "Build a prototype RAG pipeline using an off-the-shelf vector database (Pinecone or pgvector) on company documentation.",
        "Test semantic chunking strategies (500 tokens with 50-token overlap vs section-based markdown chunking).",
        "Benchmark prompt outputs across Temperature 0.0 (factual data extraction) and 0.8 (creative brainstorming)."
      ],
      sampleUserStory: `As a compliance auditor,
I want the contract summarizer to retrieve verified source clauses from our vector database and display clickable page citations in the response,
So that I can verify legal grounding with zero risk of fabricated hallucinated clauses.`
    },
    {
      id: "stage-4",
      number: "04",
      title: "Agentic Systems, Multi-Agent Workflows & Human-in-the-Loop",
      timeframe: "Weeks 9 - 11",
      badge: "Agentic AI",
      description: "Design autonomous AI agents that reason, call external APIs, and execute complex business goals while maintaining strict Human-in-the-Loop safeguards.",
      keyConcepts: [
        "The ReAct Pattern (Reason + Act): Thought -> Action (Tool Call) -> Observation -> Synthesis execution loops.",
        "Tool Use & Function Calling: Enabling models to execute deterministic SQL queries, REST endpoints, and python scripts safely.",
        "Memory Architectures: Short-term scratchpad context windows vs Long-term episodic vector storage.",
        "The 4-Tier Autonomy Governance Framework: Read-Only Assistants (Tier 1), Reversible Actions (Tier 2), Human-in-the-Loop Gated Approval (Tier 3), and High-Stakes Dual Approval (Tier 4)."
      ],
      actionItems: [
        "Map all proposed actions for an AI agent across the 4 Autonomy Tiers.",
        "Define strict API JSON schemas and deterministic boundary constraints for any tool the agent can invoke.",
        "Design an interactive Human-in-the-Loop (HITL) approval card in Figma with 1-click execution or manual override."
      ],
      sampleUserStory: `As a customer support operations lead,
I want the autonomous billing agent to automatically resolve and credit disputed charges under $25 (Tier 2), but require an explicit supervisor 1-click approval card for refunds between $25 and $200 (Tier 3),
So that common customer complaints are resolved in seconds while preventing rogue unauthorized payouts.`
    },
    {
      id: "stage-5",
      number: "05",
      title: "AI Unit Economics, Latency & Inference Optimization",
      timeframe: "Weeks 12 - 13",
      badge: "Unit Economics",
      description: "Master the financial mechanics of AI products: token math, inference compute budgets, Small Language Models (SLMs), and prompt caching to protect SaaS margins.",
      keyConcepts: [
        "Token Math & Pricing Dynamics: Modeling Input vs Output token costs across frontier models (GPT-4o, Claude 3.5 Sonnet) vs small models (GPT-4o-mini, Haiku).",
        "Total Cost of Ownership (TCO) & Margin Erosion: Avoiding negative gross margins when power users generate hundreds of recursive queries.",
        "Model Cascading & Semantic Routing: Routing 80% of lightweight queries to cheap Small Language Models ($0.15/M tokens), reserving frontier models ($5.00/M tokens) for complex reasoning.",
        "Prompt Caching & Semantic Vector Caching: Cutting input costs by up to 90% via provider prefix caching and Redis response caching."
      ],
      actionItems: [
        "Model the monthly inference cost of your product feature using an interactive token cost calculator.",
        "Design a cascading router architecture with your ML engineers to benchmark response latency and cost savings.",
        "Set hard user query rate limits and daily token budget ceilings per customer tier."
      ],
      sampleUserStory: `As a SaaS finance director,
I want customer search queries to be checked against a semantic Redis cache before invoking the LLM,
So that 35% of repetitive queries are served in <50ms at $0 compute cost, maintaining our target 75% gross product margin.`
    },
    {
      id: "stage-6",
      number: "06",
      title: "Evaluation Pipelines (Evals), Security & AI Governance",
      timeframe: "Weeks 14 - 16",
      badge: "Governance & Evals",
      description: "Replace 'vibes-based' testing with rigorous automated Evals pipelines, protect against prompt injection attacks, and comply with global AI regulations.",
      keyConcepts: [
        "The Death of 'Vibes-Based' Testing: Why testing a prompt with 3 ad-hoc questions fails, and how to build a 500-sample Golden Evaluation Dataset.",
        "Automated Evals Methodologies: Deterministic assertions, LLM-as-a-Judge with multi-point rubrics, and the RAG Triad (Context Relevance, Groundedness, Answer Relevance).",
        "AI Security & Red Teaming: Defending against Direct and Indirect Prompt Injection, Jailbreaking, and Data Poisoning.",
        "Regulatory Compliance: Navigating the EU AI Act risk tiers (Unacceptable, High, Limited), GDPR Article 22, copyright indemnity, and algorithmic bias audits."
      ],
      actionItems: [
        "Build an initial Golden Dataset of 100 historical queries with verified human ground-truth answers.",
        "Incorporate an automated Evals regression step in your CI/CD deployment pipeline before prompt updates can deploy.",
        "Conduct a red-teaming session attempting to inject malicious prompts into your application interface."
      ],
      sampleUserStory: `As an AI product lead,
I want our automated CI/CD pipeline to run our 500-prompt Golden Test Suite on every pull request,
So that any prompt change that drops the RAG Groundedness score below 98% automatically blocks deployment to production.`
    }
  ],

  modelPricingBenchmarks: [
    {
      id: "gpt-4o",
      name: "OpenAI GPT-4o",
      provider: "OpenAI",
      tier: "Frontier Multimodal",
      inputPerMillion: 2.50,
      outputPerMillion: 10.00,
      cachedInputPerMillion: 1.25,
      contextWindow: "128k tokens",
      bestFor: "Complex reasoning, multimodal vision, coding, high-stakes analysis"
    },
    {
      id: "claude-35-sonnet",
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      tier: "Frontier Reasoning",
      inputPerMillion: 3.00,
      outputPerMillion: 15.00,
      cachedInputPerMillion: 0.30,
      contextWindow: "200k tokens",
      bestFor: "Nuanced writing, advanced coding, complex agent tool orchestration"
    },
    {
      id: "gemini-15-pro",
      name: "Gemini 1.5 Pro",
      provider: "Google",
      tier: "Long-Context Frontier",
      inputPerMillion: 1.25,
      outputPerMillion: 5.00,
      cachedInputPerMillion: 0.31,
      contextWindow: "2,000,000 tokens",
      bestFor: "Massive context analysis (entire codebases, hour-long video, books)"
    },
    {
      id: "gpt-4o-mini",
      name: "GPT-4o-mini",
      provider: "OpenAI",
      tier: "Small Language Model (SLM)",
      inputPerMillion: 0.15,
      outputPerMillion: 0.60,
      cachedInputPerMillion: 0.075,
      contextWindow: "128k tokens",
      bestFor: "High-volume classification, structured JSON extraction, lightweight chat"
    },
    {
      id: "llama-31-70b",
      name: "Llama 3.1 70B (Hosted)",
      provider: "Meta / Groq / Together",
      tier: "Open-Weights Cloud",
      inputPerMillion: 0.59,
      outputPerMillion: 0.79,
      cachedInputPerMillion: 0.59,
      contextWindow: "128k tokens",
      bestFor: "High-speed inference, data privacy sovereignty, self-hosted option"
    }
  ],

  architectureTradeoffs: [
    {
      dimension: "Prompt Engineering & In-Context",
      setupTime: "Hours to 2 Days",
      cost: "Minimal ($0 to $1k)",
      dataRequirement: "A few curated examples (Few-Shot)",
      accuracyOnDynamicData: "Low (Limited to static prompt)",
      maintenance: "Low; instant prompt edits",
      bestUseCases: "Internal prototypes, email drafting, format transformation, content editing"
    },
    {
      dimension: "Retrieval-Augmented Generation (RAG)",
      setupTime: "1 to 3 Sprints",
      cost: "Moderate ($5k to $30k)",
      dataRequirement: "Clean unstructured knowledge base (PDFs, docs, databases)",
      accuracyOnDynamicData: "Very High (Real-time vector search with source citations)",
      maintenance: "Moderate; vector index updates, chunking tuning",
      bestUseCases: "Enterprise customer support, internal knowledge search, contract review, compliance QA"
    },
    {
      dimension: "Parameter-Efficient Fine-Tuning (LoRA)",
      setupTime: "3 to 6 Sprints",
      cost: "High ($20k to $100k)",
      dataRequirement: "1,000+ high-quality specialized input-output pairs",
      accuracyOnDynamicData: "Poor (Weights frozen at training time)",
      maintenance: "High; requires periodic retraining runs",
      bestUseCases: "Teaching specialized domain jargon, rigid JSON schema output, unique brand voice"
    },
    {
      dimension: "Autonomous Agent with Tool Execution",
      setupTime: "4 to 8 Sprints",
      cost: "High ($30k to $150k)",
      dataRequirement: "Verified REST APIs, deterministic business rules, sandbox environments",
      accuracyOnDynamicData: "High (Interacts live with transactional databases)",
      maintenance: "High; observability, guardrails, fallback monitoring",
      bestUseCases: "Automated customer triage, logistics dispatch, automated code refactoring, SDR outbound"
    }
  ],

  readinessQuestions: [
    {
      id: "rq-1",
      category: "Problem Formulation",
      question: "When evaluating a new product problem, how do you decide whether to use an AI/ML model?",
      options: [
        { text: "We always use an LLM first because it is cutting-edge and impresses investors.", score: 1 },
        { text: "We test if the problem can be solved reliably with deterministic rules or SQL before considering ML or GenAI.", score: 4 },
        { text: "We ask the engineering team to build whichever architecture they find most interesting.", score: 2 }
      ]
    },
    {
      id: "rq-2",
      category: "Probabilistic Thinking",
      question: "How do you specify acceptance criteria for a predictive machine learning story?",
      options: [
        { text: "We require that the model makes 100% correct predictions with zero mistakes.", score: 1 },
        { text: "We define statistical thresholds (Precision, Recall, F1) on a held-out test set with explicit fallback UX.", score: 4 },
        { text: "We write standard pass/fail unit tests for the UI button.", score: 2 }
      ]
    },
    {
      id: "rq-3",
      category: "Statistical Literacy",
      question: "If a fraud detection model has 99% accuracy on a dataset where 99.5% of charges are legitimate, what is your assessment?",
      options: [
        { text: "The model is outstanding and ready to deploy immediately.", score: 1 },
        { text: "Accuracy is meaningless here; the model could be predicting 'no fraud' 100% of the time and missing all fraud.", score: 4 },
        { text: "We should increase server RAM to make it 100% accurate.", score: 1 }
      ]
    },
    {
      id: "rq-4",
      category: "GenAI Architecture",
      question: "A business sponsor wants an LLM that can answer questions about yesterday's updated product inventory. What do you build?",
      options: [
        { text: "Fine-tune an open-source model on the new inventory every morning.", score: 2 },
        { text: "A Retrieval-Augmented Generation (RAG) pipeline connecting the LLM to the live inventory database with source citations.", score: 4 },
        { text: "Paste the entire company inventory into the system prompt text box manually.", score: 1 }
      ]
    },
    {
      id: "rq-5",
      category: "Unit Economics",
      question: "How do you model and manage LLM inference costs for a high-volume SaaS product?",
      options: [
        { text: "We charge flat-rate pricing and don't track tokens; cloud costs will take care of themselves.", score: 1 },
        { text: "We model input/output token costs, route 80% of traffic to fast SLMs, and use semantic and prompt caching.", score: 4 },
        { text: "We only allow users to ask 1 question per day.", score: 2 }
      ]
    },
    {
      id: "rq-6",
      category: "Agent Governance",
      question: "What safeguard is essential before deploying an AI Agent that executes financial transactions or refunds?",
      options: [
        { text: "Tell the agent in the system prompt: 'Please be careful and do not lose money.'", score: 1 },
        { text: "Implement a Human-in-the-Loop approval card, deterministic backend API validation, and maximum transaction limits.", score: 4 },
        { text: "Agents should never be given access to any APIs under any circumstances.", score: 2 }
      ]
    },
    {
      id: "rq-7",
      category: "Evaluation Pipelines",
      question: "How do you test whether a prompt update or model version upgrade improved output quality?",
      options: [
        { text: "Ask 3 friendly questions in chat; if it feels good, ship it.", score: 1 },
        { text: "Run an automated Evals pipeline against a curated Golden Dataset with ground truth and RAG Triad metrics.", score: 4 },
        { text: "Wait for customer support tickets to report bugs after production release.", score: 1 }
      ]
    },
    {
      id: "rq-8",
      category: "Security & Safety",
      question: "What is Indirect Prompt Injection, and how do you protect an AI product from it?",
      options: [
        { text: "When a developer writes a typo in the prompt; fixed by spellchecking.", score: 1 },
        { text: "When malicious instructions hidden inside external data (PDF, webpage) hijack the LLM's tool calls; defended via input sanitization and safety classifiers.", score: 4 },
        { text: "It is a hardware failure in GPU processors.", score: 1 }
      ]
    },
    {
      id: "rq-9",
      category: "Data Strategy",
      question: "What is an AI PM's primary responsibility regarding training and evaluation data?",
      options: [
        { text: "Writing SQL queries to delete user databases every quarter.", score: 1 },
        { text: "Ensuring data quality, representative diversity, ground-truth label accuracy, and continuous feedback collection loops.", score: 4 },
        { text: "Data is 100% the responsibility of IT; product managers shouldn't look at data.", score: 1 }
      ]
    },
    {
      id: "rq-10",
      category: "Responsible AI",
      question: "Under the EU AI Act, how are high-risk AI systems (such as medical diagnosis or credit scoring) regulated?",
      options: [
        { text: "They are completely illegal and cannot be deployed in Europe.", score: 1 },
        { text: "They require strict documentation, risk management, data governance, human oversight, and explainability.", score: 4 },
        { text: "There are no regulations for AI in Europe.", score: 1 }
      ]
    }
  ],

  interviewMasterclass: [
    {
      id: "ai-int-1",
      question: "We want to build an AI-powered conversational search feature for our enterprise SaaS product. Walk me through how you would architect the evaluation pipeline and measure success.",
      trapAnswer: "I would release the feature to users, look at overall daily active users, and ask users in a survey if they like the AI responses. If people use it, the feature is a success.",
      trapCritique: "Fails: 'Vibes-based' product management. Does not define evaluation metrics, misses the RAG Triad, ignores hallucination rates, and has no systematic benchmark dataset.",
      modelAnswer: `I approach enterprise conversational search through an empirical, 3-tier Evaluation (Evals) framework:

1. Curating the Golden Evaluation Dataset:
Before writing code, my team curates a balanced benchmark suite of 200+ real customer queries: spanning common FAQs (60%), multi-document synthesis queries (25%), adversarial prompt injection attempts (10%), and unanswerable out-of-domain edge cases (5%) with verified ground-truth answers.

2. Tracking the RAG Triad Metrics:
In our automated CI/CD pipeline, every iteration is scored on three quantitative metrics:
- Context Relevance: Are the retrieved vector chunks actually relevant to the user query? (Target: >95%).
- Groundedness (Faithfulness): Are all claims in the generated response derived strictly from the retrieved chunks? (Target: >99.5% with zero ungrounded hallucinations).
- Answer Relevance: Does the generated response directly answer the user's intent without evasive filler? (Target: >92%).

3. Production Telemetry & Observability:
In live production, we monitor:
- Implicit signals: Did the user copy the answer? Did they click 'View Source Document'? Did they rephrase the query within 30 seconds (signaling failure)?
- Explicit signals: Thumbs up/down with structured failure tags (e.g. 'Outdated', 'Factually Incorrect').
- Operational metrics: Time-to-First-Token (<500ms) and inference cost per query (<$0.012).

Any negative production feedback is automatically triaged and added to our Golden Dataset to continuously raise the model's accuracy bar.`
    },
    {
      id: "ai-int-2",
      question: "Our machine learning model has an 91% accuracy score in offline testing, but in production, customer churn is rising because of incorrect predictions. How do you diagnose and fix this?",
      trapAnswer: "I would tell the data scientists to add more layers to the neural network and train it for 50 more epochs until accuracy reaches 99%.",
      trapCritique: "Fails: Ignores the difference between offline test sets and live production distributions. Demonstrates zero understanding of data drift, concept drift, or metric gaming.",
      modelAnswer: `When offline model accuracy does not correlate with customer satisfaction in production, I systematically investigate four root-cause hypotheses:

1. Class Imbalance and the Accuracy Illusion:
I inspect whether raw accuracy was masking severe class imbalance. For example, if 90% of transactions are negative, a naive model can achieve 90% accuracy while having near-zero Recall on the critical positive class. I calculate the Confusion Matrix (Precision, Recall, F1) to see where errors are clustering.

2. Training-Serving Data Skew (Data Leakage):
I audit whether features available during training were unavailable at inference time, or if data was pre-processed differently in production (e.g. timezone differences, missing values handled inconsistently).

3. Concept Drift & Distribution Shift:
I check if real-world user behavior shifted between when historical training data was collected and current production traffic (e.g. new customer cohorts, competitor feature changes, seasonal shopping shifts).

4. Mismatched Decision Thresholds & Business Cost:
I review the probability decision threshold ($T$). If the cost of a False Positive is severe to customers (e.g. wrongly suspending accounts), we may need to raise the threshold to maximize Precision, and introduce a graceful human-in-the-loop review queue for ambiguous predictions.

We set up automated drift monitoring in Datadog/Evidently AI and implement continuous weekly model retraining pipelines to ensure alignment with production reality.`
    },
    {
      id: "ai-int-3",
      question: "How do you manage the unit economics of an LLM feature when enterprise power users begin consuming massive token volumes?",
      trapAnswer: "We will just raise our software subscription price for everyone by $20 to cover the OpenAI bill.",
      trapCritique: "Fails: Penalizes normal users, degrades product value proposition, and fails to utilize technical optimization levers to reduce inference compute.",
      modelAnswer: `To protect SaaS gross margins (targeting >=75%) while delivering high-value AI capabilities, I implement a multi-layered Cost Optimization and Tiered Pricing Architecture:

1. Technical Optimization Levers:
- Semantic Caching: We index repetitive queries in a Redis vector cache, resolving 30-40% of common queries with sub-50ms latency at $0 inference compute.
- Intelligent Model Cascading: We route simple classification and extraction tasks (70% of traffic) to Small Language Models like GPT-4o-mini ($0.15/M tokens), reserving frontier models ($5.00/M tokens) exclusively for complex multi-step reasoning.
- Prompt Caching: We structure prompts with fixed static system prefixes to leverage provider prompt caching discounts (up to 90% savings on input tokens).

2. Fair-Use & Quota Packaging:
- We establish transparent monthly AI 'Credits' or query quotas per user seat (e.g. 500 AI operations/month included in standard enterprise tier).
- For power users exceeding quotas, we provide flexible automated add-on packs ($10 for 1,000 queries) or offer a bring-your-own-key (BYOK) option for enterprise security teams.
- We set real-time daily rate limits to prevent runaway automated scripts or denial-of-wallet attacks.

By decoupling fixed subscription revenue from variable inference cost, we ensure unit margins expand as customer volume scales.`
    }
  ]
};
