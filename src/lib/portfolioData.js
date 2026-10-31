// Centralized portfolio configuration.
// Edit these values to update personal details, projects, skills, and experience.

export const profile = {
  name: "Paranjothi Govind",
  role: "Technical Lead Engineer",
  company: "Nyx Wolves",
  location: "Chennai, Tamil Nadu, India",
  status: "Available for select engagements",
  headline:
    "I build digital products, scalable interfaces, and AI-powered experiences.",
  intro:
    "I'm a software engineer and technical lead working across frontend systems, cross-platform applications, cloud infrastructure, and applied AI. From architecture and implementation to deployment, I take products end-to-end — building reusable, maintainable systems that hold up under real use.",
  email: "paranjothigovind@gmail.com", // ← replace with your real email
  links: {
    linkedin: "https://www.linkedin.com/in/paranjothigovind", // ← replace
    github: "https://github.com/paranjothigovind", // ← replace
    resume:
      "https://thirdeyebucket.blob.core.windows.net/thirdeyebucket/Resume%20-%20Paranjothi%20G%20-%20Updated%20(1).docx.pdf?sp=r&st=2026-10-16T17:32:21Z&se=2026-10-17T01:47:21Z&spr=https&sv=2026-02-06&sr=b&sig=8704nx28KFDVxuz3Si80Tz8Tb%2Fo8PeG3R%2BzaX%2FEBP58%3D", // ← add a public resume URL when available
  },
};

export const techStrip = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Azure OpenAI",
  "LangChain",
];

export const about = {
  paragraphs: [
    "I approach engineering as a systems discipline. My work centers on building maintainable, reusable, and scalable systems — frontend architectures, cross-platform applications, and the APIs and cloud services that power them.",
    "I care about the seams between layers: how a React component composes, how a mobile app talks to a reliable API, how a retrieval pipeline grounds a model in real documents. That attention to contracts and boundaries is what makes products feel solid.",
    "Lately I've been deep in applied AI — document intelligence, embeddings, vector search, and Retrieval-Augmented Generation — building systems where language models answer from your own data instead of inventing it.",
  ],
  philosophy:
    "Architecture before complexity. Build the smallest thing that's actually right, make it reusable, and let the product grow on a foundation that doesn't have to be rebuilt every quarter.",
};

export const skillGroups = [
  {
    domain: "Frontend",
    primary: ["React", "Next.js", "React Native", "TypeScript"],
    secondary: ["JavaScript", "Vue.js", "Tailwind CSS", "Material UI"],
  },
  {
    domain: "Backend",
    primary: ["Node.js", "Express.js", "Python", "FastAPI"],
    secondary: ["REST APIs"],
  },
  {
    domain: "AI Engineering",
    primary: ["Azure OpenAI", "LangChain", "LangGraph", "RAG"],
    secondary: ["Embeddings", "Vector Search", "Document Processing"],
  },
  {
    domain: "Cloud & Infrastructure",
    primary: ["AWS Lambda", "Amazon S3", "AWS Cognito"],
    secondary: ["API Gateway", "Azure Services"],
  },
  {
    domain: "Data",
    primary: ["PostgreSQL", "MongoDB"],
    secondary: ["DynamoDB", "Firebase"],
  },
];

export const approach = [
  {
    title: "Architecture before complexity",
    body: "I sketch the structure and contracts first. The cheapest bug to fix is the one you never write, and the right abstraction is cheaper than the clever one.",
  },
  {
    title: "Reusable components, clear abstractions",
    body: "Design systems and shared modules that compose. A good component API makes the next feature half the work.",
  },
  {
    title: "Performance and maintainability",
    body: "Fast software is a feature. So is code the next engineer can read. I optimize for both, not one at the expense of the other.",
  },
  {
    title: "Thoughtful API contracts",
    body: "Stable, predictable interfaces between frontend, mobile, and backend. The contract is the product's skeleton.",
  },
  {
    title: "Secure, reliable integrations",
    body: "Cloud services, auth, and third-party systems wired with failure modes in mind — not just the happy path.",
  },
  {
    title: "Practical application of AI",
    body: "RAG, embeddings, and agents used where they genuinely help — grounded in real data, evaluated, and bounded.",
  },
];

export const experience = [
  {
    role: "Technical Lead Engineer",
    company: "Nyx Wolves",
    period: "2021 - Current",
    location: "Chennai, India",
    summary:
      "Leading frontend and full-stack delivery across product engineering, cross-platform applications, and applied AI work.",
    points: [
      "Own architecture and implementation across web and mobile surfaces.",
      "Build reusable component systems and shared frontend foundations.",
      "Integrate cloud services and applied-AI pipelines into product features.",
      "Mentor engineers and raise the bar on code quality and review.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Red Chariots Pvt. Ltd",
    period: "2020",
    summary:
      "Building an interactive quizzes and games to teach the driving skills to trainers",
    points: [
      "Led creation of custom ionic-react framework applications from scratch, collaborating closely with stakeholders to ensure alignment with client needs and business objectives.",
      "Worked closely with stakeholders to gather requirements and provide technical insights, fostering strong client relationships and transparent communication throughout the development process.",
      "Developed scalable, performant full-stack applications using Ionic, React.js, and Firestore, living quiz games to train users.",
    ],
  },
  // Add previous positions here as { role, company, period, location, summary, points: [] }
];

export const projects = [
  {
    slug: "third-eye-meditation-ai",
    title: "Meditation Assistant AI",
    category: "Applied AI / RAG / Cloud Engineering",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Azure OpenAI",
      "Azure AI Search",
    ],
    tagline:
      "An AI meditation assistant that answers from course materials and knowledge sources.",
    overview:
      "Third Eye is an AI-powered meditation assistant designed to answer questions using relevant course materials and curated knowledge sources, rather than a general-purpose model's memory. It turns a corpus of meditation content into a grounded, queryable knowledge base.",
    problem:
      "Meditation students ask specific questions about technique, tradition, and course content. A raw language model answers from its training distribution — plausible but ungrounded, and sometimes wrong. The goal was answers that stay faithful to the actual course material.",
    role: "Designed and implemented the retrieval pipeline, API layer, and backend architecture.",
    architecture: [
      "Document ingestion and processing pipeline over course materials.",
      "Text chunking and embedding generation for semantic search.",
      "Azure AI Search as the retrieval and vector index.",
      "LangChain / LangGraph orchestration for grounded answer generation.",
      "FastAPI service exposing the query and ingestion endpoints.",
    ],
    decisions: [
      "Grounded retrieval over free generation so answers cite real source material.",
      "An extensible agent structure so specialized meditation and post-class question-answering agents can be added without rewriting the pipeline.",
    ],
    challenges: [
      "Balancing chunk size against retrieval precision and context window cost.",
      "Designing the agent graph so new specialized agents slot in cleanly.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Azure OpenAI",
      "Azure AI Search",
    ],
    status: {
      implemented: [
        "Document ingestion and processing",
        "Text chunking and embeddings",
        "Semantic retrieval via Azure AI Search",
        "Grounded answer generation",
        "FastAPI backend",
      ],
      planned: [
        "Specialized post-class question-answering agents",
        "Broader agent orchestration across multiple course domains",
      ],
    },
    links: { github: "", demo: "", docs: "" },
  },
  {
    slug: "ai-document-portal",
    title: "AI-Powered Document Portal",
    category: "Applied AI / Document Intelligence",
    tech: ["Azure OpenAI", "LangChain", "Vector Databases", "RAG"],
    tagline:
      "Upload a PDF, ask natural-language questions, get answers grounded in the document.",
    overview:
      "A document question-answering application. Users upload PDF documents and ask natural-language questions about their contents; the system parses, indexes, and retrieves relevant passages to generate answers grounded in the source.",
    problem:
      "Long documents are hard to search conversationally. Keyword search misses meaning; a raw LLM hallucinates. The portal bridges that gap with retrieval-augmented answering over the user's own files.",
    role: "Built the document parsing, indexing, and retrieval-augmented answering flow.",
    architecture: [
      "PDF parsing and text extraction.",
      "Chunking and embedding for contextual retrieval.",
      "Vector index for semantic search over document content.",
      "Contextual retrieval feeding grounded prompts to Azure OpenAI.",
    ],
    decisions: [
      "Retrieve-then-generate so answers are tied to source passages.",
      "Embeddings tuned for document-level semantic matching.",
    ],
    challenges: [
      "Handling varied PDF structures and extraction quality.",
      "Keeping answers grounded and traceable to source sections.",
    ],
    stack: ["Azure OpenAI", "LangChain", "Vector Databases", "RAG"],
    status: {
      implemented: [
        "PDF parsing",
        "Embeddings and indexing",
        "Contextual retrieval",
        "Grounded answers",
      ],
      planned: ["Multi-document cross-search", "Source citation UI"],
    },
    links: { github: "", demo: "", docs: "" },
  },
  {
    slug: "goatar",
    title: "Property Management",
    category: "Property Technology / Mobile Applications",
    tech: ["React Native"],
    tagline:
      "A white-label property management application with reusable, adaptable architecture.",
    overview:
      "GoAtar is a white-label property management application built for reuse across property brands. The emphasis is on a shared, adaptable architecture that can be re-skinned and re-configured without rebuilding the product.",
    problem:
      "Property management apps share most of their functionality across brands, but each brand needs its own identity and configuration. Building one-off apps per brand doesn't scale.",
    role: "Mobile application development and reusable architecture.",
    architecture: [
      "Cross-platform React Native codebase.",
      "Reusable architecture designed for white-label deployment.",
      "Adaptable product experiences driven by configuration.",
    ],
    decisions: [
      "Shared core with brand-specific configuration layers.",
      "Reusable component and screen abstractions across properties.",
    ],
    challenges: [
      "Keeping the shared core stable while each brand diverges in features.",
    ],
    stack: ["React Native"],
    status: {
      implemented: [
        "Cross-platform mobile app",
        "Reusable screen architecture",
      ],
      planned: ["Additional white-label configurations"],
    },
    links: { github: "", demo: "", docs: "" },
  },
  {
    slug: "roadferry",
    title: "Logistic Service app",
    category: "Transportation / Mobile Applications",
    tech: ["React Native", "REST APIs"],
    tagline:
      "An intercity transport booking application with end-to-end booking journeys.",
    overview:
      "RoadFerry is an intercity transport booking application. The focus is on mobile booking journeys — search, selection, and confirmation — backed by API integration for routes, schedules, and availability.",
    problem:
      "Intercity booking needs a smooth mobile flow from search to ticket, with live schedule and availability data.",
    role: "Mobile application development and API integration.",
    architecture: [
      "Booking-oriented mobile user journeys.",
      "REST API integration for routes, schedules, and availability.",
      "Cross-platform React Native implementation.",
    ],
    decisions: ["Booking-first flow design over feature breadth."],
    challenges: ["Keeping the booking flow resilient to API variability."],
    stack: ["React Native", "REST APIs"],
    status: {
      implemented: ["Mobile booking flow", "API integration"],
      planned: [],
    },
    links: { github: "", demo: "", docs: "" },
  },
  {
    slug: "view-inc",
    title: "View",
    category: "Smart Buildings / IoT Applications",
    tech: ["React Native", "Connected Systems"],
    tagline:
      "Smart glass and building automation, controlled from a mobile interface.",
    overview:
      "View.Inc is a smart glass and building automation application. It sits at the intersection of mobile interfaces, connected systems, and building automation — controlling and monitoring smart-glass and building devices from a phone.",
    problem:
      "Building automation and smart-glass control need a mobile interface that bridges device state and user intent.",
    role: "Mobile interface and connected-systems integration.",
    architecture: [
      "Mobile interface for smart-glass and building devices.",
      "Connected-systems integration for device state and control.",
      "Building automation workflows exposed to end users.",
    ],
    decisions: ["Mobile-first control surface for building automation."],
    challenges: [
      "Bridging real-time device state with a responsive mobile UI.",
    ],
    stack: ["React Native", "Connected Systems"],
    status: {
      implemented: ["Mobile control interface", "Device integration"],
      planned: [],
    },
    links: { github: "", demo: "", docs: "" },
  },
  {
    slug: "mtds-vending",
    title: "COVID-19 Vending Application",
    category: "Mobile Applications / System Integration",
    tech: ["React Native", "Hardware Integration"],
    tagline:
      "A React Native app that interfaces with airport vending machines.",
    overview:
      "MTDS is a React Native application that interfaces with airport vending machines. The interesting part is the boundary between a standard mobile app and physical hardware — bridging the application layer to the vending machine systems.",
    problem:
      "Airport vending needs a mobile application that talks to the machines — not just a standalone app.",
    role: "React Native application development and hardware-system integration.",
    architecture: [
      "React Native application layer.",
      "Hardware-system integration with vending machines.",
      "Application-to-machine communication flow.",
    ],
    decisions: ["Clean separation between app logic and hardware protocol."],
    challenges: ["Reliability across varied machine hardware and states."],
    stack: ["React Native", "Hardware Integration"],
    status: {
      implemented: ["React Native app", "Machine integration"],
      planned: [],
    },
    links: { github: "", demo: "", docs: "" },
  },
  {
    slug: "audio-splitter",
    title: "Audio Splitter",
    category: "Full-Stack Engineering / Media Processing",
    tech: [
      "React",
      "Node.js",
      "Python",
      "AWS Lambda",
      "AWS Cognito",
      "Tailwind CSS",
      "FFmpeg",
    ],
    tagline:
      "A web interface, backend processing, and cloud services for audio splitting.",
    overview:
      "Audio Splitter is a full-stack audio-processing application. A React web interface hands off to backend processing (Node.js and Python) running on AWS Lambda, with auth via Cognito and media handling through FFmpeg.",
    problem:
      "Audio processing is compute-heavy and stateful; the web layer should stay light while the heavy work happens serverless.",
    role: "Full-stack implementation across web, backend, and cloud.",
    architecture: [
      "React + Tailwind web interface.",
      "Node.js and Python backend processing.",
      "AWS Lambda for serverless media processing.",
      "AWS Cognito for authentication.",
      "FFmpeg for audio splitting.",
    ],
    decisions: [
      "Serverless processing so the web layer stays thin and scales with demand.",
    ],
    challenges: [
      "Coordinating async processing state between client and Lambda.",
    ],
    stack: [
      "React",
      "Node.js",
      "Python",
      "AWS Lambda",
      "AWS Cognito",
      "Tailwind CSS",
      "FFmpeg",
    ],
    status: {
      implemented: [
        "Web interface",
        "Backend processing",
        "Serverless media pipeline",
        "Auth",
      ],
      planned: [],
    },
    links: { github: "", demo: "", docs: "" },
  },
  {
    slug: "reusable-npm-library",
    title: "Reusable NPM Component Library",
    category: "Frontend Architecture / Developer Experience",
    tech: ["React", "TypeScript"],
    tagline: "A reusable component library maintained as @vouch/library.",
    overview:
      "A reusable React + TypeScript component library published and maintained as @vouch/library. The focus is consistency, reusability, clean component APIs, and long-term maintainability across product teams.",
    problem:
      "Product teams rebuild the same components with subtle differences. A shared library standardizes the primitives and the conventions around them.",
    role: "Library architecture, component APIs, and maintenance.",
    architecture: [
      "Typed, composable React component primitives.",
      "Consistent component APIs and prop conventions.",
      "Build and packaging for npm consumption.",
    ],
    decisions: [
      "Small, composable primitives over large opinionated components.",
    ],
    challenges: ["Keeping the API surface stable while the product evolves."],
    stack: ["React", "TypeScript"],
    status: {
      implemented: ["Component primitives", "Typed APIs", "npm packaging"],
      planned: [],
    },
    links: { github: "", demo: "", docs: "" },
  },
];
