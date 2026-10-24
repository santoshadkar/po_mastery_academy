// Curated Reference Library: Books, Podcasts, Videos, and Framework Guides for Product Owners
module.exports = [
  // Books
  {
    id: "book-01",
    type: "book",
    title: "Inspired: How to Create Tech Products Customers Love",
    author: "Marty Cagan",
    publisher: "Silicon Valley Product Group (Wiley)",
    url: "https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/",
    rating: 4.9,
    description: "The seminal masterwork on modern tech product management. Explores the 4 critical product risks (Value, Usability, Feasibility, Viability), empowered product teams vs feature factories, and continuous discovery.",
    keyTakeaways: [
      "Distinguish between feature teams (merely building what they are told) and empowered product teams (tasked with solving customer problems and driving business outcomes).",
      "Address the 4 big risks up-front before writing production code: Value risk, Usability risk, Feasibility risk, and Business Viability risk.",
      "The Product Manager must be the master of data, customer insights, market trends, and business constraints."
    ],
    tags: ["Product Strategy", "Product Discovery", "Foundations", "Leadership"]
  },
  {
    id: "book-02",
    type: "book",
    title: "Escaping the Build Trap: How Effective Product Management Creates Real Value",
    author: "Melissa Perri",
    publisher: "O'Reilly Media",
    url: "https://melissaperri.com/book",
    rating: 4.8,
    description: "A transformative guide diagnosing the 'Build Trap'—the organizational habit of measuring success by the number of features shipped (output) rather than the real business/customer problems solved (outcomes).",
    keyTakeaways: [
      "The Build Trap occurs when organizations focus on velocity, story points, and release checklists instead of tangible value delivered.",
      "Product-led organizations connect corporate strategy to product initiatives via Strategic Intents, Product Initiatives, and Product Options.",
      "Adopt the 'Product Kata': What is the goal? Where are we now? What is the next obstacle? What experiment will we run next?"
    ],
    tags: ["Product Strategy", "Metrics", "Execution", "Leadership"]
  },
  {
    id: "book-03",
    type: "book",
    title: "Continuous Discovery Habits",
    author: "Teresa Torres",
    publisher: "Product Talk LLC",
    url: "https://www.producttalk.org/continuous-discovery-habits/",
    rating: 4.9,
    description: "A structured, practical framework for product trios (Product Owner/Manager, Designer, Software Engineer) to conduct weekly touchpoints with customers and discover unmet opportunities.",
    keyTakeaways: [
      "Anchor all discovery work around the Opportunity Solution Tree (Outcome -> Opportunities -> Solutions -> Assumption Tests).",
      "Interview users weekly to collect recent behavioral stories, avoiding speculative hypothetical opinions.",
      "Test individual underlying assumptions rather than building entire MVPs for every idea."
    ],
    tags: ["Customer Discovery", "User Research", "Execution"]
  },
  {
    id: "book-04",
    type: "book",
    title: "User Story Mapping: Discover the Whole Story, Build the Right Product",
    author: "Jeff Patton & Peter Economy",
    publisher: "O'Reilly Media",
    url: "https://jpattonassociates.com/user-story-mapping/",
    rating: 4.8,
    description: "The definitive guide to decomposing big customer journeys into horizontal narrative backlogs and vertical releasable slices, eliminating flat disjointed backlogs.",
    keyTakeaways: [
      "Stories are not requirements; they are conversations about solving problems.",
      "Map out the customer journey along a horizontal backbone (activities and steps), then prioritize vertically into release slices.",
      "Focus on the minimum viable outcome: 'What is the smallest thing we can build that allows users to accomplish their core goal?'"
    ],
    tags: ["Story Slicing", "Backlog Management", "Execution"]
  },
  {
    id: "book-05",
    type: "book",
    title: "The Professional Scrum Product Owner: Guiding Products from Inception to Delivery",
    author: "Don McGreal & Ralph Jocham",
    publisher: "Addison-Wesley Professional",
    url: "https://www.scrum.org/resources/professional-scrum-product-owner-book",
    rating: 4.9,
    description: "The official Scrum.org reference book for PSPO I and PSPO II candidates. Breaks down the 3 Vs (Vision, Value, Validation) and deep dives into Evidence-Based Management.",
    keyTakeaways: [
      "The 3 Vs model: Clear Vision inspires teams; Value measurement guides priorities; empirical Validation proves hypotheses.",
      "Understand the difference between output (software built) and outcome (behavioral change that generates commercial benefit).",
      "Master the 4 Key Value Areas of EBM: Current Value, Unrealized Value, Time to Market, Ability to Innovate."
    ],
    tags: ["PSPO I", "PSPO II", "Foundations", "Metrics"]
  },
  {
    id: "book-06",
    type: "book",
    title: "Product Mastery: From Good to Great Product Ownership",
    author: "Geoff Watts",
    publisher: "Inspect & Adapt Ltd",
    url: "https://inspectandadapt.com/product-mastery/",
    rating: 4.8,
    description: "Geoff Watts explores the human, emotional, and leadership dimensions of becoming a great Product Owner using the DRIVEN acronym (Decisive, Ruthless, Informed, Versatile, Empowering, Negotiable).",
    keyTakeaways: [
      "Great POs know how to say 'No' with diplomacy and evidence.",
      "A PO must balance short-term execution with long-term strategic vision without micromanaging developers.",
      "Cultivate psychological safety and partner with your Scrum Master to build high-trust delivery environments."
    ],
    tags: ["Leadership", "Stakeholder Management", "CSPO"]
  },

  // Podcasts
  {
    id: "pod-01",
    type: "podcast",
    title: "Product Thinking with Melissa Perri",
    author: "Melissa Perri",
    url: "https://productthinkingpodcast.com/",
    rating: 4.9,
    description: "Weekly deep dives with product leaders across global tech companies exploring how to scale product organizations, overcome corporate inertia, and create sustainable product strategy.",
    keyTakeaways: [
      "Interviews with CPOs at world-leading organizations on modern org design and metrics.",
      "Listener Q&A addressing real PO career dilemmas, stakeholder politics, and backlog conflicts."
    ],
    tags: ["Product Strategy", "Leadership", "Metrics"]
  },
  {
    id: "pod-02",
    type: "podcast",
    title: "Lenny's Podcast: Product, Growth & Career",
    author: "Lenny Rachitsky",
    url: "https://www.lennyspodcast.com/",
    rating: 5.0,
    description: "The #1 product management podcast in tech. In-depth, tactical conversations with world-class product builders on product discovery, roadmapping, growth loops, and team execution.",
    keyTakeaways: [
      "Detailed tactical case studies on how Airbnb, Figma, Notion, Stripe, and Linear build products.",
      "Frameworks for prioritization, user interviews, and product strategy."
    ],
    tags: ["Product Strategy", "Customer Discovery", "Execution"]
  },
  {
    id: "pod-03",
    type: "podcast",
    title: "Scrum Master Toolbox Podcast (PO Edition)",
    author: "Vasco Duarte",
    url: "https://scrum-master-toolbox.org/",
    rating: 4.7,
    description: "Daily episodes exploring agile team dynamics with specific weekly themes dedicated to Product Owner anti-patterns, collaboration tips, and value maximization.",
    keyTakeaways: [
      "Practical analysis of real PO anti-patterns (The Proxy PO, The Micro-manager, The Ghost PO).",
      "Techniques for Scrum Masters and Product Owners to collaborate harmoniously."
    ],
    tags: ["Foundations", "Scrum Ceremonies", "Leadership"]
  },
  {
    id: "pod-04",
    type: "podcast",
    title: "The Product Podcast",
    author: "Product School",
    url: "https://productschool.com/product-podcast",
    rating: 4.8,
    description: "Featuring talks and interviews with Product Leads from Google, Meta, Amazon, Microsoft, Netflix, and Apple detailing their product roadmapping and design practices.",
    keyTakeaways: [
      "Real-world breakdowns of enterprise product challenges and AI integration.",
      "Actionable playbooks for stakeholder alignment and market expansion."
    ],
    tags: ["Product Strategy", "Leadership", "Execution"]
  },

  // Videos & Masterclasses
  {
    id: "vid-01",
    type: "video",
    title: "Agile Product Ownership in a Nutshell",
    author: "Henrik Kniberg",
    url: "https://www.youtube.com/watch?v=502ILHjX9EE",
    rating: 5.0,
    description: "The most famous, widely-watched 15-minute animated masterclass on what a Product Owner actually does, balancing stakeholder desires, development capacity, and customer value.",
    keyTakeaways: [
      "The PO sits between stakeholders, users, and the agile team, filtering noise and maximizing value per unit of time.",
      "Burnup charts, release forecasting, and managing expectations dynamically.",
      "Saying 'No' is the single most important skill of an empowered PO."
    ],
    tags: ["Foundations", "Story Slicing", "PSPO I", "CSPO"]
  },
  {
    id: "vid-02",
    type: "video",
    title: "User Story Mapping Masterclass",
    author: "Jeff Patton",
    url: "https://www.youtube.com/watch?v=Nnwn_rM_kK8",
    rating: 4.9,
    description: "Jeff Patton presents his revolutionary user story mapping method live, demonstrating how flat backlogs cause teams to build fragmented, disconnected software.",
    keyTakeaways: [
      "Walk the customer journey to build shared understanding.",
      "Identify the walking skeleton and slice thin, releasable iterations.",
      "Software development is about building less, but achieving more customer impact."
    ],
    tags: ["Backlog Management", "Story Slicing", "Execution"]
  },
  {
    id: "vid-03",
    type: "video",
    title: "Evidence-Based Management (EBM) Deep Dive",
    author: "Scrum.org Official Webinar Series",
    url: "https://www.scrum.org/resources/evidence-based-management-guide",
    rating: 4.8,
    description: "Comprehensive walkthrough of EBM by Scrum.org course stewards, breaking down KVAs, KVMs, and how POs use empirical evidence to secure executive buy-in.",
    keyTakeaways: [
      "In-depth analysis of Current Value, Unrealized Value, Time to Market, and Ability to Innovate.",
      "How to set up experiment loops and define measurable Intermediate Goals.",
      "Essential study material for PSPO II and PSPO III exam candidates."
    ],
    tags: ["Metrics", "PSPO II", "PSPO III", "Leadership"]
  },
  {
    id: "vid-04",
    type: "video",
    title: "SAFe 6.0 Product Owner / Product Manager (POPM) in 20 Minutes",
    author: "Scaled Agile Community",
    url: "https://scaledagile.com/training/safe-product-owner-product-manager/",
    rating: 4.8,
    description: "An architectural overview of how POs and PMs coordinate across Agile Release Trains (ARTs) during PI Planning, manage Team vs Program Backlogs, and calculate WSJF.",
    keyTakeaways: [
      "The difference between Customer-facing Features and Architectural Enablers.",
      "How to participate in PI Planning and define PI Objectives with business value scores.",
      "Essential foundation for SAFe POPM certification."
    ],
    tags: ["SAFe POPM", "Scaling", "Prioritization"]
  }
];
