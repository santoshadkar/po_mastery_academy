// server/data/aiPmData.js
// Enterprise AI Product Manager (AI PM) Mastery Data & Toolkits

module.exports = {
  overview: {
    title: "AI Product Manager & AI Product Owner Mastery",
    tagline: "The definitive transition blueprint from traditional software delivery to leading probabilistic, generative, and agentic AI systems.",
    summary: "As software transitions from deterministic code (if-this-then-that) to probabilistic machine learning, the role of the Product Owner and Product Manager is undergoing its greatest transformation since the Agile Manifesto. Master the technical foundations, product discovery heuristics, unit economics, evaluation pipelines, and executive governance needed to lead AI products from Day 1."
  },

  // 1. Comprehensive 6-Stage Transition Roadmap
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
      mathematicalFormulas: [
        {
          name: "Bayesian Conditional Likelihood",
          formula: "P(Y|X) = \\frac{P(X|Y) \\cdot P(Y)}{P(X)}",
          explanation: "Models predict the probability of output Y given feature input vector X. AI PMs must define the decision threshold T where P(Y|X) >= T triggers action."
        },
        {
          name: "AI Expected Value Equation",
          formula: "EV = (P_{success} \\times V_{success}) - (P_{error} \\times C_{error}) - C_{inference}",
          explanation: "An AI feature is only economically viable if Expected Value is substantially positive over human execution."
        }
      ],
      enterpriseToolkit: [
        "Jupyter Notebooks / Google Colab (exploratory data analysis)",
        "PostgreSQL / Snowflake (baseline deterministic SQL benchmarks)",
        "Weights & Biases / MLflow (experiment tracking)",
        "Evidently AI (data distribution and drift observability)"
      ],
      commonPitfalls: [
        "The 'Deterministic Fallacy': Promising executive stakeholders that an AI model will achieve '100% accuracy' without errors.",
        "Premature ML: Spending 3 sprints training a neural network when a 10-line SQL rule would solve 90% of user requests.",
        "Testing on Vibes: Evaluating AI output with 3 ad-hoc prompts rather than an automated 200-sample Golden Test Suite."
      ],
      actionItems: [
        "Audit your team's current product backlog: Identify 1 feature where deterministic heuristic rules are failing due to scale.",
        "Shadow a Data Scientist or ML Engineer during a feature engineering session to observe raw feature distributions.",
        "Practice rewriting traditional Given/When/Then acceptance criteria into statistical evaluation thresholds with confidence intervals."
      ],
      sampleUserStory: `As a risk operations manager,
I want the anomaly detection model to achieve >=94% Precision at >=85% Recall on our validated golden test dataset of 2,500 historical transactions,
So that fraudulent card charges are blocked without falsely declining more than 1.5% of legitimate VIP transactions.

Acceptance Criteria:
- Given a test dataset of 2,500 labeled historical transactions
- When the anomaly scoring engine evaluates the batch
- Then Precision must be >= 0.94 and Recall must be >= 0.85 at threshold T=0.72
- And 99th percentile inference latency must remain under 45ms.`,
      interviewQuestion: "How do you explain to a non-technical CEO why our new AI customer support model still makes mistakes 4% of the time despite $200k in engineering spend?"
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
        "The Confusion Matrix Deep-Dive: True Positives (TP), False Positives (FP / Type I), True Negatives (TN), and False Negatives (FN / Type II).",
        "The Precision-Recall Trade-off: Why Accuracy is a vanity trap on imbalanced datasets, and how to calibrate the classification decision threshold ($T$).",
        "Data Leakage & Overfitting: Identifying when a model memorizes training noise or leaks future variables, leading to catastrophic production failure."
      ],
      mathematicalFormulas: [
        {
          name: "Precision (Positive Predictive Value)",
          formula: "Precision = \\frac{TP}{TP + FP}",
          explanation: "Out of all items the model flagged as positive, what percentage was actually positive? Crucial when False Positives are expensive (e.g. spam, fraud false alarms)."
        },
        {
          name: "Recall (Sensitivity / True Positive Rate)",
          formula: "Recall = \\frac{TP}{TP + FN}",
          explanation: "Out of all actual positive items in reality, what percentage did the model capture? Crucial when False Negatives are fatal (e.g. cancer detection, missed cybersecurity breaches)."
        },
        {
          name: "F1 Score (Harmonic Mean)",
          formula: "F_1 = 2 \\cdot \\frac{Precision \\cdot Recall}{Precision + Recall}",
          explanation: "Balanced metric penalizing extreme imbalances between Precision and Recall."
        }
      ],
      enterpriseToolkit: [
        "Scikit-Learn & XGBoost (industry-standard gradient boosting)",
        "SHAP / LIME (model interpretability and feature attribution)",
        "Feast (open-source production feature store)",
        "Great Expectations (data pipeline testing and schema validation)"
      ],
      commonPitfalls: [
        "Using Accuracy for Imbalanced Classes: A model predicting 0 for 99.5% legitimate transactions achieves 99.5% accuracy while catching 0% of fraud.",
        "Data Leakage: Including features that contain information from the future (e.g. 'cancellation_survey_date' to predict customer churn).",
        "Default Threshold Blindness: Leaving classification threshold at default T=0.5 instead of aligning with business costs of FP vs FN."
      ],
      actionItems: [
        "Calculate the monetary cost of a False Positive vs a False Negative for your core customer workflow.",
        "Inspect an ROC curve and choose the optimal decision threshold based on business ROI rather than mathematical defaults.",
        "Construct a Confusion Matrix on a sample dataset with your engineering leads."
      ],
      sampleUserStory: `As a marketing automation specialist,
I want the churn prediction classifier threshold calibrated to T=0.35 (favoring Recall),
So that we capture >=92% of at-risk accounts, because the cost of an outreach email ($0.05) is negligible compared to the loss of a $1,200 annual subscription.

Acceptance Criteria:
- Given an active customer cohort with >60 days tenure
- When the batch model runs every Sunday midnight
- Then Recall for accounts churning in the next 30 days must be >= 0.92
- And Precision must remain >= 0.60 to avoid spamming low-risk users.`,
      interviewQuestion: "You are the PM for an autonomous driving emergency brake feature. Would you tune the model for higher Precision or higher Recall, and why?"
    },
    {
      id: "stage-3",
      number: "03",
      title: "Generative AI, Foundation Models & Prompt Engineering",
      timeframe: "Weeks 6 - 8",
      badge: "Generative AI",
      description: "Understand Transformer architectures, tokenization mechanics, context windows, few-shot prompt orchestration, and temperature calibration.",
      keyConcepts: [
        "Transformer Physics: Self-attention mechanisms, next-token probability prediction, and why LLMs are reasoning engines rather than static databases.",
        "Token Mechanics: 1,000 tokens ≈ 750 words. The cost, latency, and context window trade-offs of large vs small models.",
        "Prompt Engineering Patterns: System instruction priming, Few-Shot exemplars, Chain-of-Thought (CoT), and ReAct prompting.",
        "Controlling Stochasticity: Temperature (0.0 for deterministic JSON extraction, 0.7 for creative brainstorming), Top-P nucleus sampling, and presence penalties."
      ],
      mathematicalFormulas: [
        {
          name: "Token-to-Word Conversion Heuristic",
          formula: "Tokens \\approx \\frac{\\text{Words}}{0.75} \\quad \\text{or} \\quad \\text{Tokens} \\approx \\frac{\\text{Characters}}{4}",
          explanation: "Essential for estimating token consumption, input prompt sizing, and inference latency."
        },
        {
          name: "Softmax Temperature Scaling",
          formula: "P(w_i) = \\frac{e^{z_i / T}}{\\sum_j e^{z_j / T}}",
          explanation: "As Temperature T approaches 0, the model becomes completely greedy/deterministic; higher T flattens probabilities creating varied creative text."
        }
      ],
      enterpriseToolkit: [
        "OpenAI Playground & Anthropic Console (prompt tuning & testing)",
        "LangChain / LlamaIndex (prompt template management)",
        "Instructor / Outlines (enforcing structured JSON schema validation)",
        "Promptfoo (automated prompt regression testing in CI/CD)"
      ],
      commonPitfalls: [
        "Vague Prompts: Writing open-ended instructions like 'summarize this well' instead of structured constraints and few-shot examples.",
        "Over-Prompting: Cramming 50 pages of instructions into a prompt, leading to 'Lost in the Middle' attention degradation.",
        "Unbounded Output: Failing to enforce structured JSON outputs, causing downstream frontend UI crashes."
      ],
      actionItems: [
        "Build a few-shot prompt with 3 gold-standard examples and benchmark its output consistency across 50 runs.",
        "Measure the latency impact of increasing prompt size from 500 tokens to 4,000 tokens.",
        "Implement JSON mode / Pydantic schema validation for an AI feature to eliminate malformed responses."
      ],
      sampleUserStory: `As a sales SDR,
I want the inbound email qualification assistant to output responses strictly adhering to our JSON Lead Schema,
So that leads with budget >$25k are automatically piped into Salesforce without manual data entry.

Acceptance Criteria:
- Given an inbound email body
- When processed by the LLM with temperature=0.1
- Then the output must validate 100% against the LeadQualificationSchema (Pydantic)
- And any missing field must default to null with an explanatory uncertainty flag.`,
      interviewQuestion: "A developer on your team wants to fine-tune Llama-3 to teach it our internal company policies. What would you say to them, and why?"
    },
    {
      id: "stage-4",
      number: "04",
      title: "Enterprise Retrieval-Augmented Generation (RAG) Architecture",
      timeframe: "Weeks 9 - 11",
      badge: "RAG & Search",
      description: "Master chunking strategies, vector embeddings, semantic search, hybrid keyword retrieval, and the RAG Triad evaluation framework.",
      keyConcepts: [
        "The RAG Workflow: Document ingestion -> Text chunking -> Vector embedding generation -> Vector DB indexing -> Semantic retrieval -> Context injection -> Grounded generation.",
        "Chunking Strategies: Fixed-size with overlap (e.g. 500 tokens, 50 token overlap), semantic boundary chunking, and hierarchical parent-document retrieval.",
        "Hybrid Search: Combining dense semantic vector search (cosine similarity) with sparse lexical search (BM25) and reciprocal rank fusion (RRF) for precise jargon matching.",
        "The RAG Triad of Evals: Context Relevance, Groundedness (Faithfulness), and Answer Relevance."
      ],
      mathematicalFormulas: [
        {
          name: "Cosine Similarity for Vector Embeddings",
          formula: "\\cos(\\theta) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\|\\mathbf{A}\\| \\|\\mathbf{B}\\|}",
          explanation: "Measures semantic angle between user query vector A and indexed document chunk vector B."
        },
        {
          name: "RAG Triad Faithfulness Metric",
          formula: "Faithfulness = \\frac{|\\text{Claims in Output Grounded in Retrieved Chunks}|}{|\\text{Total Claims in Generated Output}|}",
          explanation: "Target must be >= 0.99 for high-stakes enterprise applications to prevent ungrounded hallucinations."
        }
      ],
      enterpriseToolkit: [
        "Pinecone, Qdrant, Milvus, pgvector (vector databases)",
        "Cohere Rerank / BGE Reranker (cross-encoder re-ranking)",
        "Ragas / DeepEval (automated RAG triad evaluation pipelines)",
        "Unstructured.io / LlamaParse (PDF/Doc parser & table extractor)"
      ],
      commonPitfalls: [
        "Naive Chunking: Splitting text blindly at 500 characters, severing tables or sentences in half.",
        "Relying Solely on Vector Search: Failing on exact part numbers or acronyms where BM25 keyword search is essential.",
        "Neglecting Citations: Providing answers without clickable sentence-level source links, destroying user trust."
      ],
      actionItems: [
        "Audit your organization's knowledge base for duplicate, outdated, and conflicting documents before vector indexing.",
        "Compare retrieval quality between pure vector search and Hybrid (Vector + BM25 + Cohere Rerank).",
        "Set up an automated Ragas evaluation suite testing Groundedness across 100 historical customer support tickets."
      ],
      sampleUserStory: `As an enterprise compliance analyst,
I want the contract analysis assistant to provide clickable sentence-level citations to the underlying PDF page for every generated claim,
So that I can verify liability limits with zero risk of ungrounded hallucinations.

Acceptance Criteria:
- Given an uploaded vendor contract (PDF/DOCX)
- When the user asks a question regarding indemnity or termination clauses
- Then every generated claim must include a [Source: Page X, Paragraph Y] citation
- And Ragas Groundedness score must be >= 0.995 on our audit benchmark suite.`,
      interviewQuestion: "Our RAG system retrieves 5 document chunks, but the LLM still generates hallucinated answers. How would you systematically debug this?"
    },
    {
      id: "stage-5",
      number: "05",
      title: "Autonomous Agents, Tool Calling & Human-in-the-Loop",
      timeframe: "Weeks 12 - 14",
      badge: "Agentic Systems",
      description: "Design multi-agent workflows, tool-use execution schemas, state machines, and fail-safe Human-in-the-Loop (HITL) approval gates.",
      keyConcepts: [
        "ReAct Pattern: Reason -> Act -> Observe -> Repeat loop allowing LLMs to solve complex problems through sequential tool execution.",
        "Tool Calling & Function Calling: Equipping models with deterministic API tools (e.g. SQL queries, weather API, CRM update, email send).",
        "Agent State Management & Memory: Short-term scratchpad memory vs long-term vector memory across multi-turn sessions.",
        "The 4-Tier Autonomy Matrix: Balancing automation speed with enterprise liability risk."
      ],
      mathematicalFormulas: [
        {
          name: "Agent Cascade Failure Probability",
          formula: "P(\\text{Success}) = \\prod_{i=1}^{n} P(\\text{Step}_i)",
          explanation: "If an agent takes 5 sequential steps, each with 95% accuracy, overall success drops to 0.95^5 = 77.4%! AI PMs must minimize unnecessary chain depth."
        },
        {
          name: "Human-in-the-Loop Escalation Threshold",
          formula: "\\text{Action} = \\begin{cases} \\text{Execute Autonomously} & \\text{if } Confidence \\ge T_{auto} \\\\ \\text{Draft \\& Route to Human} & \\text{if } T_{hitl} \\le Confidence < T_{auto} \\\\ \\text{Block \\& Fallback} & \\text{if } Confidence < T_{hitl} \\end{cases}",
          explanation: "Protects high-stakes workflows from agent hallucinations through automated escalation."
        }
      ],
      enterpriseToolkit: [
        "LangGraph / LangChain (state machine agent graphs)",
        "CrewAI / AutoGen (multi-agent role specialization)",
        "Llama Guard / NeMo Guardrails (agent safety and output verification)",
        "Temporal / Inngest (reliable stateful orchestration & replay)"
      ],
      commonPitfalls: [
        "Infinite Loops: Agents getting stuck in circular reasoning without a maximum recursion step limit.",
        "Unconstrained Tool Permissions: Giving an autonomous agent direct write/delete access to production databases.",
        "Over-Agentification: Using an agent when a deterministic DAG or hardcoded script would be 10x faster and 100x cheaper."
      ],
      actionItems: [
        "Map your agent's decision tree as a finite state machine with strict exit conditions and a max iteration limit (e.g. 5 steps).",
        "Implement a Tier 3 Human-in-the-Loop approval card for any action involving money, external emails, or database deletes.",
        "Conduct prompt injection penetration tests against your agent's tool-calling interface."
      ],
      sampleUserStory: `As a tier-2 customer support agent,
I want the refund agent to autonomously issue refunds under $50, but create a pre-filled approval card for refunds >=$50,
So that customer disputes are resolved instantly while preventing fraud or unauthorized balance deductions.

Acceptance Criteria:
- Given a customer refund request
- When the agent verifies eligibility via the billing API
- Then if amount < $50, execute refund autonomously and log audit trail
- If amount >= $50, generate structured approval task in Zendesk with full reasoning trace
- And maximum agent reflection steps must not exceed 4 iterations.`,
      interviewQuestion: "Design an AI agent that automatically resolves customer billing disputes. How do you prevent an adversarial user from tricking the agent into issuing a $10,000 refund?"
    },
    {
      id: "stage-6",
      number: "06",
      title: "AI Unit Economics, Evals CI/CD & Executive Governance",
      timeframe: "Weeks 15 - 16",
      badge: "Leadership & Scale",
      description: "Scale AI products sustainably: Model cascading, token arbitrage, prompt caching, automated CI/CD evaluation pipelines, and EU AI Act compliance.",
      keyConcepts: [
        "AI Unit Economics: Tracking Cost per Query (CPQ), Model Gross Margins (targeting >=75%), and Token Burn Rate.",
        "Model Cascading & Semantic Caching: Routing 80% of volume to Small Language Models (SLMs) and caching frequent questions in Redis vector stores.",
        "Eval-Driven Development (EDD): Building automated Golden Test Suites that run on every Git Pull Request to prevent prompt regressions.",
        "Regulatory Compliance & The EU AI Act: Managing High-Risk AI systems, bias audits, explainability logs, and copyright/PII compliance."
      ],
      mathematicalFormulas: [
        {
          name: "Blended Token Inference Cost with Cascading",
          formula: "C_{blended} = (R_{slm} \\times C_{slm}) + (R_{frontier} \\times C_{frontier}) + (R_{cache} \\times 0)",
          explanation: "Example: 70% SLM ($0.15/M) + 10% Frontier ($2.50/M) + 20% Cache ($0) reduces blended cost by 85% compared to 100% frontier routing!"
        },
        {
          name: "AI Feature Gross Margin %",
          formula: "\\text{Gross Margin} = \\frac{\\text{SaaS Revenue per User} - \\text{AI Inference Cost per User}}{\\text{SaaS Revenue per User}} \\times 100\\%",
          explanation: "SaaS gross margins should remain above 75%; if below 60%, unit economics are broken."
        }
      ],
      enterpriseToolkit: [
        "Redis / Qdrant (semantic vector caching)",
        "Promptfoo / Braintrust (automated CI/CD evals & regression gates)",
        "Helicone / Langfuse / OpenLLMetry (LLM observability and token cost telemetry)",
        "AWS Bedrock / Azure AI Studio (enterprise SOC2/HIPAA compliance gateways)"
      ],
      commonPitfalls: [
        "The Negative Margin Trap: Offering unlimited GenAI features on flat-rate $20/month seats, leading to negative gross margins on power users.",
        "Silent Prompt Regression: Updating a system prompt to fix one edge case, silently breaking 15 other customer flows.",
        "No Observability: Flying blind without tracking Time-To-First-Token (TTFT), token burn per tenant, or user feedback thumbs."
      ],
      actionItems: [
        "Implement a Redis semantic cache to resolve repeated enterprise queries with sub-50ms latency at $0 inference cost.",
        "Set up an automated CI/CD eval step that blocks deployment if Groundedness or Context Relevance drops by >1.5%.",
        "Classify your organization's AI initiatives under the EU AI Act risk tiers and document audit logs."
      ],
      sampleUserStory: `As an AI product lead,
I want our automated CI/CD pipeline to run our 500-prompt Golden Test Suite on every pull request,
So that any prompt or retrieval change that drops the RAG Groundedness score below 98% automatically blocks deployment to production.

Acceptance Criteria:
- Given a pull request modifying system prompts, chunking parameters, or model weights
- When the GitHub Actions evaluation pipeline runs
- Then all 500 golden eval cases must be scored for Groundedness, Answer Relevance, and Latency
- Deployment to staging/production is blocked if any metric regresses by >1.0% against main baseline.`,
      interviewQuestion: "Our AI assistant went viral, and our cloud LLM bill spiked from $2k/mo to $50k/mo, turning our feature gross margin to -15%. Walk me through your step-by-step turnaround plan."
    }
  ],

  // 2. Comprehensive Opportunity Feasibility Matrix Dataset
  opportunityMatrix: {
    title: "AI Opportunity Feasibility & Impact Matrix (2x2 Prioritization)",
    subtitle: "Strategic portfolio framework for Product Leaders to sequence AI initiatives based on Data/Technical Feasibility and Business ROI.",
    quadrants: [
      {
        id: "quick-wins",
        name: "Quick Wins (High Value, High Feasibility)",
        badge: "Highest Priority • Sprint 1-3",
        color: "border-emerald-500 bg-emerald-50/70 text-emerald-950",
        headerColor: "bg-emerald-600 text-white",
        strategy: "Immediate Execution: Deliver fast value to secure executive buy-in and fund longer-term R&D. Rely on mature RAG architectures and Small Language Models.",
        initiatives: [
          {
            name: "Internal Knowledge & Policy RAG Assistant",
            feasibilityScore: 92,
            valueScore: 88,
            techStack: "RAG • pgvector • Claude 3.5 Sonnet • BM25 Hybrid",
            roi: "Saves ~4.5 hrs/week per employee in HR/Legal queries ($180k/yr)",
            risk: "Document freshness & conflicting policy revisions",
            recommendation: "Build immediately using existing enterprise Confluence/PDF docs with strict sentence citations."
          },
          {
            name: "Automated Support Ticket Triage & Auto-Tagging",
            feasibilityScore: 88,
            valueScore: 82,
            techStack: "Classical ML (XGBoost) + GPT-4o-mini classification",
            roi: "Reduces first-response time from 4 hrs to 45 seconds; cuts misrouting by 65%",
            risk: "Historical ticket tagging bias",
            recommendation: "Deploy cascaded classifier; route simple tags to SLM, escalate ambiguous issues to humans."
          },
          {
            name: "B2B Sales Call Summarizer & CRM Auto-Logger",
            feasibilityScore: 85,
            valueScore: 84,
            techStack: "Whisper Speech-to-Text + Structured JSON extraction",
            roi: "Increases sales rep active selling time by 18%; zero missed follow-ups",
            risk: "Audio quality variation & speaker diarization errors",
            recommendation: "Implement strict Pydantic JSON schema mode to prevent Salesforce pipeline injection bugs."
          }
        ]
      },
      {
        id: "strategic-bets",
        name: "Strategic Bets (High Value, Low Feasibility)",
        badge: "Transformational • Phased R&D",
        color: "border-indigo-500 bg-indigo-50/70 text-indigo-950",
        headerColor: "bg-indigo-600 text-white",
        strategy: "Transformational Competitive Moats: Requires multi-sprint R&D, proprietary data pipelines, and strict Human-in-the-Loop guardrails. Slice into iterative milestones.",
        initiatives: [
          {
            name: "Autonomous Claims Dispute & Resolution Agent",
            feasibilityScore: 42,
            valueScore: 95,
            techStack: "LangGraph ReAct Agent • Core Banking APIs • Tier 3 HITL",
            roi: "Automates 60% of tier-1 dispute processing, saving $2.4M annually",
            risk: "Prompt injection attacks & unauthorized financial liability",
            recommendation: "Enforce Tier 3 HITL approval card for all refunds >$50; sandbox all financial API execution."
          },
          {
            name: "Predictive Healthcare Patient Deterioration Early Warning",
            feasibilityScore: 38,
            valueScore: 94,
            techStack: "Multi-Modal Time-Series LSTM + Clinical LLM Reasoning",
            roi: "Reduces ICU readmissions by 22%; saves lives and reduces hospital penalties",
            risk: "FDA / HIPAA regulatory hurdles, high cost of False Negatives",
            recommendation: "Tune threshold heavily for Recall; operate strictly in advisory mode for certified medical staff."
          },
          {
            name: "Proprietary Codebase Refactoring & Migration Engine",
            feasibilityScore: 45,
            valueScore: 89,
            techStack: "Fine-Tuned Llama-3.1 70B • AST Tree-Sitter • Sandbox Compiler",
            roi: "Accelerates legacy COBOL/Java migration by 4x, saving 12,000 engineering hours",
            risk: "Subtle semantic logic bugs & security vulnerabilities",
            recommendation: "Pair model output with automated compiler checks and comprehensive unit test verification."
          }
        ]
      },
      {
        id: "low-hanging-fruit",
        name: "Low-Hanging Distractions (Low Value, High Feasibility)",
        badge: "Danger Trap • Deprioritize",
        color: "border-amber-500 bg-amber-50/70 text-amber-950",
        headerColor: "bg-amber-600 text-white",
        strategy: "Vanity Features / Low ROI: Very easy to build using simple API calls, but delivers minimal real business value or retention. Avoid wasting engineering capacity.",
        initiatives: [
          {
            name: "Unconstrained Generic Chatbot Avatar on Marketing Page",
            feasibilityScore: 94,
            valueScore: 24,
            techStack: "Raw OpenAI API wrapper with static prompt",
            roi: "Negligible conversion uplift; high risk of brand PR embarrassment",
            risk: "Jailbreaks, competitors extracting prompt, toxic outputs",
            recommendation: "De-prioritize. Replace with structured interactive product demo or FAQ search."
          },
          {
            name: "AI Email Tone & Grammar Rewriter",
            feasibilityScore: 90,
            valueScore: 28,
            techStack: "Zero-shot prompt with temperature=0.7",
            roi: "Commoditized; Grammarly and Apple Intelligence provide this natively at OS level",
            risk: "Zero defensibility or customer willingness to pay",
            recommendation: "Do not build custom. Use native browser spellcheck or third-party SDK if essential."
          },
          {
            name: "Daily Motivational AI Quote Generator for App Dashboard",
            feasibilityScore: 96,
            valueScore: 12,
            techStack: "Cron job calling basic prompt",
            roi: "0% retention impact; users dismiss or disable within 3 days",
            risk: "User annoyance & perception of frivolous feature bloat",
            recommendation: "Kill immediately. Reallocate engineering capacity to core workflow automation."
          }
        ]
      },
      {
        id: "money-pits",
        name: "Money Pits & AI Traps (Low Value, Low Feasibility)",
        badge: "Strictly Prohibited • Red Flag",
        color: "border-rose-500 bg-rose-50/70 text-rose-950",
        headerColor: "bg-rose-600 text-white",
        strategy: "Resource Blackholes: Immense technical complexity, astronomical compute costs, massive error risk, and minimal commercial outcome. Firmly reject during intake.",
        initiatives: [
          {
            name: "Pre-Training a Custom Foundation LLM from Scratch for Mid-Market SaaS",
            feasibilityScore: 12,
            valueScore: 20,
            techStack: "Thousands of H100 GPUs • Megatron-LM • Custom Pre-training",
            roi: "Astronomical negative ROI ($3M+ compute burn, obsolete within 6 months)",
            risk: "Total financial waste, talent drain, inferior to open-source foundation models",
            recommendation: "Firmly veto. Use top open-weights models (Llama 3.1) and focus exclusively on proprietary RAG data."
          },
          {
            name: "Fully Autonomous Unsupervised Medical Diagnosis Bot",
            feasibilityScore: 15,
            valueScore: 25,
            techStack: "Black-box neural network with direct patient prescribing",
            roi: "Catastrophic civil and criminal liability; inevitable malpractice lawsuits",
            risk: "Fatal hallucination, total regulatory shutdown",
            recommendation: "Never deploy autonomous AI in safety-critical medical contexts without physician oversight."
          },
          {
            name: "Short-Term Stock Day-Trading Predictor for Retail App",
            feasibilityScore: 18,
            valueScore: 22,
            techStack: "Deep Reinforcement Learning on raw price charts",
            roi: "Severe customer capital loss; efficient market hypothesis prevents naive edge",
            risk: "SEC scrutiny, customer fury, class-action lawsuits",
            recommendation: "Reject. Markets are non-stationary; historical noise does not predict microsecond retail swings."
          }
        ]
      }
    ]
  },

  // 3. Model Pricing & Inference Economics Benchmarks
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
      latencyP50: "480ms",
      bestFor: "Complex multi-step reasoning, multimodal image analysis, high-stakes coding, executive synthesis"
    },
    {
      id: "claude-35-sonnet",
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      tier: "Frontier Reasoning & Coding",
      inputPerMillion: 3.00,
      outputPerMillion: 15.00,
      cachedInputPerMillion: 0.30,
      contextWindow: "200k tokens",
      latencyP50: "520ms",
      bestFor: "Nuanced enterprise writing, complex agentic tool orchestration, sophisticated software architecture"
    },
    {
      id: "gemini-15-pro",
      name: "Gemini 1.5 Pro",
      provider: "Google",
      tier: "Massive Context Frontier",
      inputPerMillion: 1.25,
      outputPerMillion: 5.00,
      cachedInputPerMillion: 0.31,
      contextWindow: "2,000,000 tokens",
      latencyP50: "650ms",
      bestFor: "Ultra-long document retrieval (entire codebases, books, hour-long video analysis), multimodal audio/video"
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
      latencyP50: "220ms",
      bestFor: "High-volume classification, structured JSON extraction, lightweight customer chat, model cascading tier-1"
    },
    {
      id: "llama-31-70b",
      name: "Llama 3.1 70B (Cloud Hosted)",
      provider: "Meta / Groq / Together",
      tier: "Open-Weights Cloud",
      inputPerMillion: 0.59,
      outputPerMillion: 0.79,
      cachedInputPerMillion: 0.59,
      contextWindow: "128k tokens",
      latencyP50: "180ms",
      bestFor: "Ultra-fast inference (Groq LPUs), data sovereignty / private VPC deployment, no vendor lock-in"
    }
  ],

  // 4. Expanded Architecture Trade-Offs (7 Distinct Patterns)
  architectureTradeoffs: [
    {
      dimension: "Zero-Shot / Few-Shot Prompting",
      setupTime: "Hours to 2 Days",
      cost: "Minimal ($0 to $1k)",
      dataRequirement: "3-5 high quality curated exemplars",
      accuracyOnDynamicData: "Low (Static prompt only)",
      maintenance: "Low; instant prompt text updates",
      bestUseCases: "Internal prototypes, email drafting, format transformation, content editing, early customer discovery",
      engineeringComplexity: "Very Low",
      hallucinationRisk: "High on factual claims"
    },
    {
      dimension: "Semantic Vector Caching",
      setupTime: "3 to 5 Days",
      cost: "Very Low ($500 to $2k)",
      dataRequirement: "Historical query logs & precomputed answers",
      accuracyOnDynamicData: "High (Exact match on known queries)",
      maintenance: "Low; TTL cache invalidation rules",
      bestUseCases: "High-traffic FAQ bots, e-commerce product search, repetitive customer service triage",
      engineeringComplexity: "Low",
      hallucinationRisk: "Zero on cached entries"
    },
    {
      dimension: "Retrieval-Augmented Generation (RAG)",
      setupTime: "1 to 3 Sprints",
      cost: "Moderate ($5k to $30k)",
      dataRequirement: "Clean unstructured knowledge base (PDFs, docs, databases)",
      accuracyOnDynamicData: "Very High (Real-time vector search with source citations)",
      maintenance: "Moderate; vector index updates, chunking tuning",
      bestUseCases: "Enterprise customer support, internal knowledge search, contract review, compliance QA",
      engineeringComplexity: "Medium",
      hallucinationRisk: "Very Low with grounded citations"
    },
    {
      dimension: "Parameter-Efficient Fine-Tuning (LoRA / QLoRA)",
      setupTime: "3 to 6 Sprints",
      cost: "High ($20k to $100k)",
      dataRequirement: "1,000+ high-quality specialized input-output pairs",
      accuracyOnDynamicData: "Poor (Weights frozen at training time)",
      maintenance: "High; requires periodic retraining runs",
      bestUseCases: "Teaching specialized domain jargon, rigid JSON schema output, unique brand voice",
      engineeringComplexity: "High",
      hallucinationRisk: "Moderate (May hallucinate with high confidence)"
    },
    {
      dimension: "Autonomous Tool-Calling Agent (ReAct)",
      setupTime: "4 to 8 Sprints",
      cost: "High ($30k to $150k)",
      dataRequirement: "Verified REST APIs, deterministic business rules, sandbox environments",
      accuracyOnDynamicData: "High (Interacts live with transactional databases)",
      maintenance: "High; observability, guardrails, fallback monitoring",
      bestUseCases: "Automated customer triage, logistics dispatch, automated code refactoring, SDR outbound",
      engineeringComplexity: "High",
      hallucinationRisk: "Moderate; requires strict HITL guardrails"
    },
    {
      dimension: "Model Cascading Architecture (SLM + Frontier Router)",
      setupTime: "2 to 4 Sprints",
      cost: "Moderate ($10k to $40k)",
      dataRequirement: "Labeled query complexity classifier dataset",
      accuracyOnDynamicData: "Very High (Right model for the right task)",
      maintenance: "Moderate; routing threshold calibration",
      bestUseCases: "High-scale enterprise SaaS where protecting >=75% gross margins is critical",
      engineeringComplexity: "Medium-High",
      hallucinationRisk: "Low"
    },
    {
      dimension: "Self-Hosted Open-Weights (vLLM / Ollama on Private Cloud)",
      setupTime: "4 to 10 Sprints",
      cost: "Very High Capital / Cloud Compute ($50k to $300k)",
      dataRequirement: "Kubernetes GPU cluster, model weights, monitoring infra",
      accuracyOnDynamicData: "Depends on base model & fine-tuning",
      maintenance: "Very High; GPU autoscaling, driver patching, CUDA tuning",
      bestUseCases: "Strict defense, banking, or healthcare environments where data cannot cross third-party APIs",
      engineeringComplexity: "Very High (DevOps / MLOps)",
      hallucinationRisk: "Depends on underlying weights"
    }
  ],

  // 5. 10-Question AI PM Readiness Diagnostic
  readinessQuestions: [
    {
      id: "rq-1",
      category: "Problem Formulation",
      question: "When evaluating a new product problem, how do you decide whether to use an AI/ML model?",
      options: [
        { text: "We always use an LLM first because it is cutting-edge and impresses executive stakeholders.", score: 1 },
        { text: "We test if the problem can be solved reliably with deterministic rules or SQL before considering ML or GenAI.", score: 4 },
        { text: "We wait until competitors launch an AI feature, then copy their implementation.", score: 2 },
        { text: "We let software engineers pick whatever model architecture they want to experiment with.", score: 1 }
      ]
    },
    {
      id: "rq-2",
      category: "Probabilistic Mindset",
      question: "How do you define acceptance criteria for a feature powered by a probabilistic Machine Learning model?",
      options: [
        { text: "The model must never make any mistakes and achieve 100% test accuracy before production.", score: 1 },
        { text: "Given valid inputs, the model must output a response within 200ms without throwing runtime exceptions.", score: 2 },
        { text: "The model must achieve >=93% Precision at >=85% Recall on our validated 1,000-sample Golden Test Suite, with automated human escalation for confidence scores below 0.70.", score: 4 },
        { text: "We write standard Agile Given/When/Then tickets asserting binary true/false conditions.", score: 2 }
      ]
    },
    {
      id: "rq-3",
      category: "Metrics & Error Costs",
      question: "In an enterprise fraud detection system where 99.8% of card transactions are legitimate, what metric should you prioritize?",
      options: [
        { text: "Overall Accuracy, because 99.8% accuracy sounds impressive to business leadership.", score: 1 },
        { text: "Precision-Recall trade-off and Cost Matrix, calibrating the decision threshold to balance the financial cost of missed fraud (FN) vs customer insult rate (FP).", score: 4 },
        { text: "F1 score only, without considering the relative monetary dollar impact of false positives vs false negatives.", score: 3 },
        { text: "Latency only, ensuring all transactions process in under 10ms regardless of error rates.", score: 2 }
      ]
    },
    {
      id: "rq-4",
      category: "Architecture Strategy",
      question: "Your team needs to build an AI assistant that answers employee questions based on internal company HR benefit PDFs that change quarterly. What is the optimal architecture?",
      options: [
        { text: "Fine-tune an open-source 70B LLM on the PDF text so the model internalizes the policies in its weights.", score: 1 },
        { text: "Implement a Retrieval-Augmented Generation (RAG) pipeline with semantic vector search and exact sentence-level citations.", score: 4 },
        { text: "Paste the entire 300-page HR manual into the system prompt of every user query.", score: 2 },
        { text: "Pre-train a custom LLM from scratch on internal company documents.", score: 1 }
      ]
    },
    {
      id: "rq-5",
      category: "Unit Economics",
      question: "Your AI feature is adopted by 100k daily users, and your cloud model inference bill threatens to exceed your subscription revenue. How do you protect SaaS gross margins?",
      options: [
        { text: "Implement semantic vector caching for common queries and a model cascading router that sends 80% of routine queries to a Small Language Model (SLM) at 95% lower cost.", score: 4 },
        { text: "Triple the monthly subscription price for all existing customers immediately.", score: 1 },
        { text: "Cap users to 2 AI questions per week to suppress usage.", score: 1 },
        { text: "Downgrade all queries to a tiny local model that frequently hallucinates.", score: 2 }
      ]
    },
    {
      id: "rq-6",
      category: "Evaluation Pipelines",
      question: "How should an AI product team ensure that a prompt update does not introduce silent regressions across other customer use cases?",
      options: [
        { text: "Have the product manager manually test 3 queries in the OpenAI playground before approving the pull request.", score: 1 },
        { text: "Run an automated CI/CD evaluation pipeline with a curated Golden Dataset scoring Context Relevance, Groundedness, and Answer Relevance on every Git commit.", score: 4 },
        { text: "Deploy directly to production and wait for customer complaints in Zendesk.", score: 1 },
        { text: "Survey customers at the end of the quarter asking if they like the AI responses.", score: 2 }
      ]
    },
    {
      id: "rq-7",
      category: "Agentic Systems",
      question: "When deploying an autonomous AI agent capable of calling APIs to execute actions on behalf of users, how should you mitigate liability?",
      options: [
        { text: "Grant the agent unrestricted access to all production APIs so it can work autonomously without interruptions.", score: 1 },
        { text: "Implement a 4-tier autonomy matrix: autonomous execution for read-only actions, but mandatory Human-in-the-Loop (HITL) approval cards for financial or irreversible actions.", score: 4 },
        { text: "Add a legal disclaimer at the bottom of the page stating the company is not responsible for AI agent mistakes.", score: 2 },
        { text: "Never allow AI agents to call APIs under any circumstances.", score: 2 }
      ]
    },
    {
      id: "rq-8",
      category: "Data Strategy",
      question: "What is 'Data Drift' and how does an AI Product Manager manage it in production?",
      options: [
        { text: "It is when developers forget to back up the database; manage it by running daily SQL backups.", score: 1 },
        { text: "It is when real-world production feature distributions shift away from historical training distributions; manage it via continuous automated drift telemetry and scheduled retraining pipelines.", score: 4 },
        { text: "It is when users type faster than the server can process; manage it by adding more RAM.", score: 1 },
        { text: "It is an unfixable defect in transformer models that must simply be tolerated.", score: 1 }
      ]
    },
    {
      id: "rq-9",
      category: "UX for Probabilistic Systems",
      question: "How should the user interface handle an AI model's low-confidence prediction?",
      options: [
        { text: "Hide the confidence score and present the prediction as absolute fact to avoid undermining user confidence.", score: 1 },
        { text: "Display a graceful fallback UI: surface the uncertainty, provide alternative suggestions, and offer a 1-click option to escalate to a human specialist.", score: 4 },
        { text: "Throw an unhandled HTTP 500 crash error screen.", score: 1 },
        { text: "Refuse to show anything on screen and leave the page blank.", score: 2 }
      ]
    },
    {
      id: "rq-10",
      category: "Governance & Ethics",
      question: "Under the European Union AI Act, how must high-risk AI systems (e.g. hiring, credit scoring, critical infrastructure) be governed?",
      options: [
        { text: "They are completely banned and cannot be deployed in Europe.", score: 1 },
        { text: "They require continuous risk management, high-quality non-biased training data, automatic logging of operations, human oversight mechanisms, and high cybersecurity resilience.", score: 4 },
        { text: "They only require a cookie consent banner on the homepage.", score: 1 },
        { text: "Open-source models are exempt from all legal oversight.", score: 1 }
      ]
    }
  ],

  // 6. Senior AI PM Interview Masterclass (6 Executive Challenges)
  interviewMasterclass: [
    {
      id: "ai-int-1",
      question: "How do you evaluate and eliminate hallucinations in an enterprise RAG-based search application?",
      trapAnswer: "I would release the feature to beta users, monitor daily active users, and ask users in a survey if they like the AI responses. If people use it, the feature is a success.",
      trapCritique: "Fails: 'Vibes-based' product management. Does not define evaluation metrics, misses the RAG Triad, ignores hallucination rates, and has no systematic benchmark dataset.",
      modelAnswer: `I approach enterprise conversational search through an empirical, 3-tier Evaluation (Evals) framework:

1. Curating the Golden Evaluation Dataset:
Before writing production code, my team curates a balanced benchmark suite of 250+ real customer queries: spanning common FAQs (60%), multi-document synthesis queries (25%), adversarial prompt injection attempts (10%), and unanswerable out-of-domain edge cases (5%) with verified ground-truth answers.

2. Tracking the RAG Triad Metrics in CI/CD:
In our automated pipeline, every PR is scored against three quantitative metrics:
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
    },
    {
      id: "ai-int-4",
      question: "When should an enterprise product team build their own AI models vs fine-tune open weights vs rely on frontier commercial APIs?",
      trapAnswer: "We should always fine-tune our own models so that we own the intellectual property and don't depend on OpenAI or Anthropic.",
      trapCritique: "Fails: Underestimates massive capital expenditure, maintenance burden, and hardware costs of fine-tuning, while misunderstanding that RAG provides IP ownership over data without model hosting overhead.",
      modelAnswer: `I evaluate Build vs Fine-Tune vs API through a strict 3-variable decision matrix:

1. Proprietary Commercial APIs (GPT-4o, Claude 3.5 Sonnet) - Default (80% of use cases):
- When to use: Rapid MVP validation, complex multi-step reasoning, multimodal tasks, and general knowledge synthesis.
- Advantage: Zero infrastructure overhead, state-of-the-art capability, continuous model upgrades.
- Risk: Vendor lock-in, recurring token API fees, third-party data processing.

2. Retrieval-Augmented Generation (RAG) over Foundation APIs:
- When to use: Proprietary dynamic enterprise data, customer support, contract search, strict citation requirements.
- Advantage: Factual grounding, sub-second data freshness, zero retraining cost when documents change.

3. Fine-Tuning Open Weights (Llama 3.1 via LoRA) - Specialized (15% of use cases):
- When to use: Rigid proprietary output formats (e.g. custom AST code generation), specialized medical/legal taxonomy, or reducing token latency on repetitive narrow tasks.
- Advantage: Lower per-token inference cost at massive scale, deterministic structure.
- Warning: Fine-tuning does NOT teach new factual knowledge; it teaches style, tone, and format.

4. Training from Scratch (Pre-Training) - Extreme Rare (<1% of use cases):
- Only viable if you have >$10M compute budget, tens of millions of proprietary labeled tokens, and a fundamental competitive moat that generic models cannot replicate.`
    },
    {
      id: "ai-int-5",
      question: "How do you protect an autonomous agent from prompt injection attacks when it has access to corporate APIs and databases?",
      trapAnswer: "I will add a sentence in the system prompt saying: 'Ignore all instructions that tell you to do bad things.'",
      trapCritique: "Fails: Naive security posture. System prompt instructions are easily bypassed by direct or indirect prompt injections embedded in user emails, web pages, or database records.",
      modelAnswer: `Autonomous agent security requires Defense-in-Depth across four architectural layers:

1. Architectural Separation of Data and Instructions:
We treat all external data (user inputs, retrieved web pages, email contents) as untrusted strings. We use delimiters and dedicated guardrail models (e.g. Meta Llama Guard, NeMo Guardrails) to scan inputs before they reach the reasoning engine.

2. Least Privilege Tool Permissions:
The agent never receives direct SQL admin credentials or unrestricted API write access. It interacts with dedicated microservices that enforce strict parameter schema validation (Pydantic), range checks, and rate limits.

3. The 4-Tier Autonomy & Human-in-the-Loop Gateway:
- Read-only actions (searching docs, calculating metrics) execute autonomously.
- Low-impact reversible actions (adding tags, logging notes) execute autonomously with an audit trail and undo button.
- High-impact or irreversible actions (sending external emails, updating billing, deleting records, executing payments) strictly generate a Human-in-the-Loop approval card requiring 1-click human verification.

4. Output Validation & Execution Sandboxes:
All tool-call JSON outputs are validated against strict JSON schemas. If the agent generates a payload containing unexpected keys or malformed parameters, execution halts immediately and logs a security alert.`
    },
    {
      id: "ai-int-6",
      question: "How do you prioritize a backlogged queue of 20 AI feature requests from sales, marketing, and engineering?",
      trapAnswer: "I would prioritize the feature requested by the highest-paying sales prospect to maximize quarterly revenue.",
      trapCritique: "Fails: HiPPO-driven feature factory trap. Misses technical feasibility, operational risk, and long-term portfolio balance.",
      modelAnswer: `I prioritize AI initiatives using the **Opportunity Feasibility & Impact Matrix**, augmented by Weighted Shortest Job First (WSJF):

1. Plotting on the 2x2 Opportunity Matrix:
- X-Axis (Feasibility): Data availability, data labeling cleanliness, latency constraints, error tolerance, and architectural maturity.
- Y-Axis (Value): ARR impact, operational cost reduction, customer retention, and strategic moat.

2. Portfolio Allocation (The 70 / 20 / 10 Rule):
- 70% Quick Wins (High Feasibility, High Value): Initiatives like internal document RAG and customer ticket triage that use proven architectures to deliver immediate measurable ROI.
- 20% Strategic Bets (Low Feasibility, High Value): Transformational capabilities like autonomous agent workflows that require phased R&D milestones.
- 10% Exploratory Prototyping: 1-week timeboxed hackathon spikes to evaluate emerging models.
- 0% Money Pits & Low-Hanging Distractions: Rejecting novelty generic chat avatars and unfeasible multi-million dollar model pre-training.

3. Sequence Execution with WSJF:
For items within the Quick Wins quadrant, we score Cost of Delay divided by Job Size to ensure the highest economic return per sprint of engineering capacity.`
    }
  ]
};
