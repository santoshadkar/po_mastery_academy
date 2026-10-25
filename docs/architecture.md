# System Architecture & Technical Specifications
**Author:** Principal Solutions Architect  
**Project:** PO Mastery Academy  
**Status:** Approved for Implementation

---

## 1. Architectural Style & Principles
The system adopts a **Clean Decoupled Architecture** separating presentation (Single-Page React Frontend), business logic / assessment calculation services, and data repositories.

```
+-----------------------------------------------------------------------+
|                           User Web Browser                            |
|  +-----------------------------------------------------------------+  |
|  |     React 18 SPA (Vite + Tailwind CSS + Lucide Icons)           |  |
|  |  - Chapter Academy View (Progress, Interactive Assessments)     |  |
|  |  - AI Product Manager Suite (16-Wk Roadmap, Token Calculator)     |  |
|  |  - 30-Mock Exam Engine (Timer, Flags, Domain Score Diagnostic)  |  |
|  |  - PO Daily Byte (Daily micro-lesson + Situational Case)        |  |
|  |  - Media Resource Hub (Books, Podcasts, Videos, Bookmarks)     |  |
|  |  - LocalStorage State Persistence (Streaks, Completed Tests)    |  |
|  +-----------------------------------------------------------------+  |
+-----------------------------------▲-----------------------------------+
                                    | REST (JSON)
                                    ▼
+-----------------------------------------------------------------------+
|                    Node.js & Express API Gateway                      |
|  - Config / Env Loader (.env with strict validation)                  |
|  - Content Repository Services (Chapters 1-11, Assessments, Exams)    |
|  - AI PM Services (/api/ai-pm/roadmap, /api/ai-pm/tools)             |
|  - Exam Evaluator & Diagnostic Engine                                 |
|  - Daily Byte Resolver Service                                        |
|  - Resource Catalog Service                                           |
+-----------------------------------------------------------------------+
```

---

## 2. Technology Stack
- **Runtime & Backend**: Node.js v20+, Express.js for REST APIs.
- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React icons.
- **Data Stores**: In-memory JSON datasets with clean repository interfaces; browser `localStorage` for user session, test history, bookmarked questions, and streaks.
- **Testing**: Node test runner / Vitest for automated unit & integration testing under `tests/`.
- **Environment**: `.env` configuration for server ports, feature flags, and mock parameters.

---

## 3. Data Entities & Schema Overview

1. **Chapter**:
   - `id`: string (`ch-01` to `ch-11`)
   - `title`: string
   - `category`: `Foundations` | `Strategy` | `Discovery` | `Execution` | `Metrics` | `Leadership` | `AI & Innovation`
   - `level`: `Beginner` | `Intermediate` | `Advanced`
   - `readTime`: string
   - `summary`: string
   - `sections`: Array<{ heading, content, practicalTips: string[] }>
   - `assessment`: Array<{ id, question, options: string[], answer: number, explanation: string }>

2. **Certification Track**:
   - `id`: `pspo-1` | `pspo-2` | `pspo-3` | `cspo` | `safe-popm` | `icp-apo`
   - `name`: string
   - `issuingBody`: string (`Scrum.org` | `Scrum Alliance` | `Scaled Agile` | `ICAgile`)
   - `passingScore`: number (e.g. 85)
   - `durationMinutes`: number
   - `totalExams`: number (5)
   - `exams`: Array<MockExam>

3. **Mock Exam**:
   - `id`: string (e.g. `pspo1-mock-1` ... `pspo1-mock-5`, `safe-mock-1` ... `safe-mock-5`)
   - `title`: string
   - `examNumber`: number (1-5)
   - `questions`: Array<{ id, type: 'single' | 'multiple' | 'essay', text, options: string[], correctAnswers: number[], explanation, domain, references }>

4. **Daily Byte**:
   - `id`: string
   - `dayNumber`: number (1-30)
   - `title`: string
   - `coreConcept`: string
   - `realWorldDilemma`: { scenario: string, options: Array<{ id: string, text: string, impactAnalysis: string, isRecommended: boolean }> }
   - `proTip`: string

5. **Resource Link**:
   - `id`: string
   - `type`: `book` | `podcast` | `video` | `guide`
   - `title`: string
   - `author`: string
   - `url`: string

6. **AI Product Manager Toolkit Models**:
   - `roadmapStages`: Array<{ id, number, title, timeframe, badge, description, keyConcepts, actionItems, sampleUserStory }>
   - `modelPricingBenchmarks`: Array<{ id, name, provider, tier, inputPerMillion, outputPerMillion, cachedInputPerMillion, contextWindow, bestFor }>
   - `architectureTradeoffs`: Array<{ dimension, setupTime, cost, dataRequirement, accuracyOnDynamicData, maintenance, bestUseCases }>
   - `readinessQuestions`: Array<{ id, category, question, options: Array<{ text, score }> }>
   - `interviewMasterclass`: Array<{ id, question, trapAnswer, trapCritique, modelAnswer }>
   - `description`: string
   - `tags`: string[]
