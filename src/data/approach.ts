import type { EngineeringPillar } from '../types/portfolio';

export const engineeringPillars: EngineeringPillar[] = [
  {
    id: 'architecture-first',
    number: '01',
    title: 'Architecture Before Unnecessary Complexity',
    summary: 'Design clean system boundaries and data flows before introducing heavy abstractions or dependencies.',
    detailedExplanation:
      'Premature complexity is the primary source of technical debt. I begin every initiative by mapping out data lifecycles, state ownership, and failure domains. By favoring simplicity and explicit patterns over clever indirection, systems remain straightforward to reason about, debug, and scale.',
    technicalPattern: 'Modular monoliths / Explicit data boundaries / Zero unvetted dependencies',
    iconName: 'Cpu',
  },
  {
    id: 'reusable-components',
    number: '02',
    title: 'Reusable Components & Clear Abstractions',
    summary: 'Craft composable, well-typed component systems that accelerate delivery without sacrificing flexibility.',
    detailedExplanation:
      'A component library should empower product teams, not restrict them. From atomic primitives to compound patterns, I design interfaces with strict TypeScript generics, accessible keyboard semantics, and clear slot composition so applications maintain visual and behavioral consistency effortlessly.',
    technicalPattern: 'Compound components / Headless primitives / WAI-ARIA accessibility',
    iconName: 'Boxes',
  },
  {
    id: 'performance-maintainability',
    number: '03',
    title: 'Performance & Maintainability',
    summary: 'Treat rendering budgets, bundle weights, and runtime latency as non-negotiable architectural requirements.',
    detailedExplanation:
      'Fast software creates engaged users. I optimize across the stack: minimizing unnecessary client rerenders, leveraging tree-shaking, optimizing vector search queries, and structuring asynchronous background queues so user interfaces remain fluid at 60fps.',
    technicalPattern: 'Zero-layout-shift UI / Bundle profiling / Async concurrency',
    iconName: 'Gauge',
  },
  {
    id: 'thoughtful-api-contracts',
    number: '04',
    title: 'Thoughtful API Contracts',
    summary: 'Establish explicit, predictable schemas between client applications and backend microservices.',
    detailedExplanation:
      'APIs are permanent contracts. Whether defining FastAPI Pydantic models or RESTful endpoints, I advocate for strict schema validation, idempotent mutation operations, descriptive error codes, and backwards-compatible versioning.',
    technicalPattern: 'OpenAPI / Pydantic schema validation / Predictable error envelopes',
    iconName: 'FileCode',
  },
  {
    id: 'secure-reliable-integrations',
    number: '05',
    title: 'Secure, Reliable Integrations',
    summary: 'Engineer systems with least-privilege access, resilient retries, and offline-first fail-safes.',
    detailedExplanation:
      'Real-world networks and third-party services fail. In projects ranging from IoT building controllers to airport vending machines and cloud audio pipelines, I build idempotent retry mechanisms, optimistic client reconciliations, and secure identity boundaries (Cognito, JWT).',
    technicalPattern: 'Two-phase commits / Optimistic caching / Least-privilege IAM',
    iconName: 'ShieldCheck',
  },
  {
    id: 'iterative-improvement',
    number: '06',
    title: 'Iterative Development & Continuous Feedback',
    summary: 'Decompose ambitious initiatives into verifiable milestones and observable deployments.',
    detailedExplanation:
      'Software thrives on rapid feedback loops. As a technical lead, I structure projects into decoupled releases, clear testing checkpoints, and automated build verification so teams deliver incremental value with high confidence.',
    technicalPattern: 'Continuous integration / Feature gates / Atomic git milestones',
    iconName: 'GitBranch',
  },
  {
    id: 'practical-ai',
    number: '07',
    title: 'Practical, Grounded Application of AI',
    summary: 'Leverage LLMs for genuine utility with strict grounding, transparent citations, and deterministic guardrails.',
    detailedExplanation:
      'Generative AI is most valuable when anchored in verifiable truth. Rather than treating LLMs as magical oracles, I integrate them with robust vector retrieval (RAG), strict schema constraints, temperature dampening, and source citations to solve actual operational challenges without hallucinations.',
    technicalPattern: 'Hybrid vector search / Strict citation guardrails / LangGraph state machines',
    iconName: 'Brain',
  },
];
