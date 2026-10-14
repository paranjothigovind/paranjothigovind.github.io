import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'third-eye-meditation-ai',
    title: 'Third Eye Meditation AI',
    category: 'Applied AI / RAG / Cloud Engineering',
    categoryGroup: 'ai',
    tagline: 'Context-grounded spiritual & mindfulness query system using Azure AI Search and LangChain/LangGraph pipelines.',
    description:
      'An applied AI solution designed to ingest structured course materials and mindfulness guides, enabling practitioners to receive nuanced, source-grounded guidance via semantic vector retrieval and conversational reasoning.',
    highlightBadges: ['RAG Pipeline', 'Azure AI Search', 'FastAPI Backend', 'LangGraph'],
    technologies: [
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'Azure OpenAI',
      'Azure AI Search',
      'Vector Embeddings',
      'Docker',
    ],
    metricsOrTags: [
      { label: 'Ingestion Strategy', value: 'Recursive Text Chunking' },
      { label: 'Retrieval Engine', value: 'Hybrid (Semantic + BM25)' },
      { label: 'LLM Orchestration', value: 'LangChain & LangGraph State' },
      { label: 'API Layer', value: 'FastAPI Async Endpoints' },
    ],
    implementedFeatures: [
      'Automated document ingestion and preprocessing for meditation syllabi, course transcripts, and literature.',
      'Token-aware text chunking with semantic overlap preservation and vector embedding generation.',
      'Integration with Azure AI Search index utilizing vector and hybrid search scoring.',
      'Grounded answer synthesis prompting with strict citation constraints to eliminate hallucinations.',
      'Asynchronous FastAPI REST endpoints for real-time querying, history persistence, and citation payload delivery.',
      'Stateful conversational memory tracking session context for multi-turn meditation inquiries.',
    ],
    plannedFeatures: [
      'Multi-agent workflow using LangGraph to route post-class philosophical queries vs breathwork scheduling agents.',
      'Voice-guided audio synthesis module for personalized spoken meditation prompts.',
      'Automated student sentiment tracking and progress milestone evaluation.',
    ],
    architectureOverview:
      'The system operates in two core pipelines: an offline ingestion pipeline and a real-time retrieval & generation pipeline. In the offline pipeline, raw course PDFs and text materials are parsed, chunked with semantic boundaries, vectorized via Azure OpenAI Ada embeddings, and indexed into Azure AI Search with metadata filters. In the online pipeline, incoming queries pass through query expansion, vector search in Azure AI Search, citation reranking, and contextual prompt synthesis via Azure OpenAI GPT-4 with strict grounding guardrails.',
    architectureDiagramType: 'rag-pipeline',
    roleAndContributions: [
      'Architected and implemented the end-to-end RAG architecture and Python FastAPI backend service.',
      'Designed the document parsing, token-budgeting chunking strategy, and embedding pipeline.',
      'Implemented hybrid search querying against Azure AI Search indices to ensure high recall for niche terminology.',
      'Structured LangGraph state graphs to prepare for planned multi-agent post-class routing.',
      'Authored comprehensive API documentation and Docker deployment configurations.',
    ],
    engineeringDecisions: [
      {
        title: 'Hybrid Search over Pure Vector Retrieval',
        rationale:
          'Meditation courses contain specific Sanskrit and proprietary terminology that standard vector embeddings occasionally smooth over. Implementing hybrid search (combining dense vector cosine similarity with BM25 keyword scoring in Azure AI Search) drastically improved recall precision.',
      },
      {
        title: 'LangGraph for Extensible Agent Orchestration',
        rationale:
          'Rather than relying on linear chains, LangGraph provided explicit cyclic state machines, enabling clean separation between document search nodes, answer verification nodes, and future routing agents.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Preventing LLM hallucinations in nuanced spiritual and mindful practices.',
        solution:
          'Enforced prompt constraints with system-level guardrails, temperature dampening (0.2), and a strict fallback directive instructing the model to declare absence of source backing whenever cosine similarity fell below confidence thresholds.',
      },
      {
        challenge: 'Maintaining response latency across multi-step retrieval and synthesis.',
        solution:
          'Leveraged FastAPI async concurrency, streaming response tokens to the client interface, and caching common concept embedding vectors.',
      },
    ],
    links: {
      isInternal: true,
      internalNotice: 'Proprietary enterprise project; core architecture and non-sensitive schemas demonstrated in this case study.',
    },
    featured: true,
  },
  {
    id: 'ai-document-portal',
    title: 'AI-Powered Document Portal',
    category: 'Applied AI / Document Intelligence',
    categoryGroup: 'ai',
    tagline: 'Enterprise PDF intelligence platform with contextual vector indexing and transparent source-grounded Q&A.',
    description:
      'An intelligent document exploration portal enabling users to upload multi-page PDF documents, extract structured and unstructured text, and execute natural-language queries with exact page-level source attribution.',
    highlightBadges: ['Document Q&A', 'Vector Database', 'Azure OpenAI', 'Source Attribution'],
    technologies: [
      'Azure OpenAI',
      'LangChain',
      'Python',
      'Vector Databases',
      'RAG',
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    metricsOrTags: [
      { label: 'Document Formats', value: 'PDF & Structured Text' },
      { label: 'Attribution', value: 'Page-level Citations' },
      { label: 'Embedding Model', value: 'text-embedding-3-small' },
      { label: 'Frontend', value: 'React / Next.js / TypeScript' },
    ],
    implementedFeatures: [
      'Multi-page PDF parsing with metadata preservation (page numbers, section headers, table structures).',
      'Dynamic chunking pipeline balancing token limits against semantic completeness.',
      'Vector database storage with isolated user tenant namespaces and similarity search indexing.',
      'Contextual retrieval engine generating direct answers alongside exact page and excerpt citations.',
      'Responsive React document reader displaying highlighted source snippets side-by-side with answers.',
    ],
    architectureOverview:
      'Uploaded documents undergo text extraction and boundary analysis before being converted into high-dimensional vectors. When a user submits an inquiry, the retrieval engine retrieves top-k relevant fragments based on cosine distance, passes them through a reranking layer, and constructs a grounded prompt for Azure OpenAI. The frontend receives both the answer stream and interactive citation tokens that jump to document pages.',
    architectureDiagramType: 'document-rag',
    roleAndContributions: [
      'Engineered the end-to-end document processing and RAG querying pipeline.',
      'Designed the clean two-pane user interface with real-time streaming answer delivery and citation highlights.',
      'Implemented vector database schema with strict tenant isolation and access controls.',
    ],
    engineeringDecisions: [
      {
        title: 'Isolated Tenant Namespaces in Vector Index',
        rationale:
          'Ensured multi-tenant document isolation by partitioning vector collections by organization and user ID, preventing any potential cross-document data leakage.',
      },
      {
        title: 'Side-by-Side Dual-Pane Interface',
        rationale:
          'Building trust with users required immediate verification. The UI couples conversational answers with clickable citation badges that immediately jump the PDF previewer to the corresponding page.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Handling tables and columnar layouts inside complex PDF documents.',
        solution:
          'Implemented layout-aware document extraction that formats table rows into markdown representations prior to embedding, preserving relational context.',
      },
    ],
    links: {
      isInternal: true,
      internalNotice: 'Enterprise solution deployed in private client environments.',
    },
    featured: true,
  },
  {
    id: 'goatar-property-platform',
    title: 'GoAtar Property Management',
    category: 'Property Technology / Mobile Applications',
    categoryGroup: 'mobile',
    tagline: 'White-label cross-platform mobile suite for tenant workflows, maintenance dispatch, and property administration.',
    description:
      'A multi-tenant property management platform engineered with React Native, supporting white-label branding, tenant maintenance requests, amenity reservations, and building manager workflows.',
    highlightBadges: ['White-Label Architecture', 'React Native', 'Cross-Platform', 'Offline Cache'],
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'REST APIs',
      'Tailwind / NativeWind',
      'Push Notifications',
    ],
    metricsOrTags: [
      { label: 'Platform', value: 'iOS & Android (Unified)' },
      { label: 'Architecture', value: 'Multi-Tenant White-Label' },
      { label: 'State Sync', value: 'Optimistic UI + Offline Queue' },
      { label: 'Design System', value: 'Configurable Theming Token Engine' },
    ],
    implementedFeatures: [
      'Theme token engine allowing dynamic white-label branding (colors, logos, typography) per property portfolio.',
      'Maintenance ticket lifecycle: issue photography, priority categorization, technician dispatch updates.',
      'Amenity booking scheduler with real-time slot conflict prevention and confirmation notifications.',
      'Secure resident access credentials, visitor pass generation, and digital noticeboard.',
      'Offline-first synchronization for basement parking and poor connectivity zones.',
    ],
    architectureOverview:
      'Built upon a unified React Native codebase with dynamic theme injection at initialization. The state layer utilizes an offline queue: tenant actions in low-signal areas (e.g. subterranean parking or elevators) are saved locally and reconciled automatically upon network reconnection.',
    architectureDiagramType: 'cross-platform',
    roleAndContributions: [
      'Led the mobile architecture and reusable screen scaffolding in React Native.',
      'Implemented the white-label dynamic configuration layer decoupling brand identity from application logic.',
      'Engineered the resilient offline storage and synchronization engine.',
    ],
    engineeringDecisions: [
      {
        title: 'Centralized Theme Token Injection',
        rationale:
          'To support white-label deployments without maintaining separate branches, we built a single runtime configuration provider that applies client color tokens, logos, and typography dynamically.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Handling intermittent connectivity in concrete residential basements and elevators.',
        solution:
          'Designed an optimistic state update layer backed by SQLite/AsyncStorage with request reconciliation and background sync workers.',
      },
    ],
    links: {
      isInternal: true,
      internalNotice: 'Commercial property management product deployed across client properties.',
    },
    featured: true,
  },
  {
    id: 'roadferry-transport',
    title: 'RoadFerry Mobility',
    category: 'Transportation / Mobile Applications',
    categoryGroup: 'mobile',
    tagline: 'Intercity transport booking and journey orchestration mobile application.',
    description:
      'A streamlined intercity transportation booking application delivering search, seat selection, transparent pricing, booking management, and live journey tracking.',
    highlightBadges: ['Booking Engine', 'React Native', 'Geolocation', 'Real-Time Updates'],
    technologies: [
      'React Native',
      'TypeScript',
      'REST APIs',
      'Geolocation APIs',
      'Payment Gateway Integration',
      'State Management',
    ],
    metricsOrTags: [
      { label: 'Domain', value: 'Intercity Transport' },
      { label: 'Core Workflows', value: 'Search, Seat Map, Checkout, Tracking' },
      { label: 'UI Focus', value: 'Low Friction & High Readability' },
      { label: 'Target', value: 'Cross-Platform Mobile' },
    ],
    implementedFeatures: [
      'Intuitive route search with date pickers, pickup/drop-off point selection, and filtering.',
      'Interactive seat-map visualizer showing real-time occupancy and category pricing.',
      'Multi-step checkout pipeline integrated with secure payment gateways and instant e-ticket generation.',
      'Live journey status timeline tracking departure checkpoints, intermediate stops, and estimated arrival.',
      'Past bookings archive with printable invoice generation and rescheduling workflows.',
    ],
    architectureOverview:
      'The client architecture organizes screens around distinct journey stages: Discovery, Configuration, Checkout, and Active Journey. Seat inventory is locked with temporary reservation timers during checkout to prevent double-booking.',
    architectureDiagramType: 'booking-engine',
    roleAndContributions: [
      'Built core mobile application workflows in React Native and TypeScript.',
      'Engineered interactive, responsive seat layout rendering with smooth pan-zoom interactions.',
      'Integrated payment gateways and booking confirmation lifecycle hooks.',
    ],
    engineeringDecisions: [
      {
        title: 'Optimistic Seat Locking UX',
        rationale:
          'Utilized WebSocket event listeners combined with a 7-minute reservation countdown timer to prevent seat poaching while minimizing checkout drop-offs.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Complex seat configurations across diverse vehicle models.',
        solution:
          'Created a declarative matrix generator that maps vehicle JSON layout schemas to interactive SVG/vector canvas grids effortlessly.',
      },
    ],
    links: {
      isInternal: true,
      internalNotice: 'Commercial application; proprietary repository.',
    },
    featured: false,
  },
  {
    id: 'view-inc-smart-building',
    title: 'View.Inc Smart Building & Glass',
    category: 'Smart Buildings / IoT Applications',
    categoryGroup: 'systems',
    tagline: 'IoT building automation and electrochromic dynamic smart glass management interface.',
    description:
      'Mobile application interfacing with intelligent building infrastructure and electrochromic glass systems, empowering facility operators and occupants to control daylight, tint levels, and energy efficiency parameters.',
    highlightBadges: ['IoT Systems', 'Building Automation', 'Hardware Bridge', 'React Native'],
    technologies: [
      'React Native',
      'TypeScript',
      'IoT Protocols',
      'REST APIs',
      'WebSockets',
      'State Machine',
    ],
    metricsOrTags: [
      { label: 'Domain', value: 'Smart Glass & Energy IoT' },
      { label: 'Interface', value: 'Zone & Building Floorplan View' },
      { label: 'Communication', value: 'Real-time WebSocket & REST' },
      { label: 'Controls', value: 'Dynamic Tint & Schedule Overrides' },
    ],
    implementedFeatures: [
      'Interactive floorplan visualization with zone-by-zone smart glass tint controls.',
      'Automated daylight harvesting schedules coupled with manual occupant override capability.',
      'Real-time glass state telemetry reporting (tint percentage, thermal load, light penetration).',
      'Energy conservation analytics displaying projected kilowatt-hour savings.',
      'Role-based permission gating distinguishing building facility engineers from individual desk occupants.',
    ],
    architectureOverview:
      'The application communicates through a secure gateway layer interfacing with building management hardware controllers. State updates propagate bi-directionally via WebSockets, ensuring that manual panel inputs and cloud automated adjustments reflect instantly on user devices.',
    architectureDiagramType: 'iot-bridge',
    roleAndContributions: [
      'Developed the mobile frontend interfaces and zone control interactions.',
      'Built responsive state synchronization between hardware telemetry updates and UI components.',
      'Created custom gesture-based sliders and floorplan selector components.',
    ],
    engineeringDecisions: [
      {
        title: 'State Debouncing for Hardware Protection',
        rationale:
          'Electrochromic glass transitions require chemical tint stabilization. Built a deliberate input debounce and confirmation threshold so rapid user slider adjustments do not send conflicting voltage commands to hardware controllers.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Visualizing large multi-zone building floorplans on compact mobile screens.',
        solution:
          'Implemented hierarchical zooming from whole-campus overview down to individual window panes with vector SVG rendering.',
      },
    ],
    links: {
      isInternal: true,
      internalNotice: 'Enterprise IoT client project.',
    },
    featured: true,
  },
  {
    id: 'mtds-vending-system',
    title: 'MTDS Airport Vending Integration',
    category: 'Mobile Applications / System Integration',
    categoryGroup: 'systems',
    tagline: 'React Native mobile application directly interfacing with airport automated vending hardware.',
    description:
      'A specialized mobile application engineered to interface directly with airport retail and unattended vending machine hardware, facilitating contactless inventory browsing, digital payment processing, and mechanical dispense triggering.',
    highlightBadges: ['Hardware Integration', 'React Native', 'Airport Vending', 'Telemetry'],
    technologies: [
      'React Native',
      'TypeScript',
      'Hardware Communication Protocols',
      'Bluetooth / Local Network',
      'REST APIs',
      'Payment Gateway',
    ],
    metricsOrTags: [
      { label: 'Domain', value: 'Unattended Retail / Aviation' },
      { label: 'Hardware Link', value: 'MDB / Custom Controller Bridge' },
      { label: 'Transaction Speed', value: 'Low Latency Dispense' },
      { label: 'Reliability', value: 'Fail-Safe Dispense Verification' },
    ],
    implementedFeatures: [
      'Contactless product catalog browsing synchronized with physical machine coil inventory.',
      'Low-latency machine pairing via QR code scan and local network / BLE handshake.',
      'Digital payment processing with immediate pre-authorization and dispense trigger.',
      'Hardware drop sensor verification confirming successful physical dispensing before payment settlement.',
      'Diagnostic telemetry logging for coil jams, temperature anomalies, and communication dropouts.',
    ],
    architectureOverview:
      'The application bridges the user mobile experience with physical vending controller firmware. A secure session is established at the machine, querying real-time inventory. When checkout is initiated, payment is pre-authorized, an encrypted command is transmitted to the machine controller to fire the appropriate dispensing coil, and optical drop sensors confirm product drop before finalizing the charge.',
    architectureDiagramType: 'vending-hardware',
    roleAndContributions: [
      'Engineered the mobile client application in React Native and TypeScript.',
      'Implemented the pairing state machine and hardware handshake protocol.',
      'Structured fail-safe transaction handling ensuring customers are never billed if a physical mechanical jam occurs.',
    ],
    engineeringDecisions: [
      {
        title: 'Two-Phase Commit for Dispense Transactions',
        rationale:
          'Physical retail requires absolute transaction integrity: authorization holds funds, the hardware trigger is executed, optical sensors verify the drop, and only then is the charge captured. If drop detection fails, the authorization is voided automatically.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Noisy RF and wireless interference in bustling airport terminal environments.',
        solution:
          'Implemented robust reconnection retry loops with fallback payload verification and clear user visual feedback during the 3-second dispense cycle.',
      },
    ],
    links: {
      isInternal: true,
      internalNotice: 'Proprietary enterprise system deployed at airport transit hubs.',
    },
    featured: false,
  },
  {
    id: 'audio-splitter-cloud',
    title: 'Cloud Audio Splitter & Media Engine',
    category: 'Full-Stack Engineering / Media Processing',
    categoryGroup: 'fullstack',
    tagline: 'Serverless audio processing system with AWS Lambda, Cognito authentication, and FFmpeg media pipelines.',
    description:
      'A full-stack media engineering web application combining a modern React interface with an asynchronous serverless audio processing pipeline on AWS to split, transform, and package audio tracks.',
    highlightBadges: ['AWS Lambda', 'FFmpeg', 'Serverless', 'AWS Cognito', 'Tailwind CSS'],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'AWS Lambda',
      'Amazon S3',
      'AWS Cognito',
      'Tailwind CSS',
      'FFmpeg',
    ],
    metricsOrTags: [
      { label: 'Processing Engine', value: 'FFmpeg Container on Lambda' },
      { label: 'File Ingestion', value: 'Pre-signed S3 Direct Uploads' },
      { label: 'Authentication', value: 'AWS Cognito User Pools' },
      { label: 'Architecture', value: 'Event-Driven Serverless' },
    ],
    implementedFeatures: [
      'Drag-and-drop audio file ingestion with client-side waveform preview and format validation.',
      'Direct-to-S3 multi-part uploads using temporary pre-signed URLs to bypass server bandwidth bottlenecks.',
      'Serverless audio segmentation executed via custom Python / FFmpeg layers running on AWS Lambda.',
      'Asynchronous job tracking with status updates and automated zip bundle generation.',
      'Secure user authentication and file lifecycle management via AWS Cognito.',
    ],
    architectureOverview:
      'The user uploads audio directly to Amazon S3 using pre-signed upload URLs generated by an API Gateway endpoint. An S3 `ObjectCreated` event triggers an AWS Lambda container running FFmpeg, which segments the audio according to user timestamps or algorithmic silence detection. Resulting stems are saved back to S3, and download links are delivered to the React frontend.',
    architectureDiagramType: 'media-pipeline',
    roleAndContributions: [
      'Designed and developed the full application architecture: React frontend, API contracts, and AWS infrastructure.',
      'Packaged custom FFmpeg binaries for AWS Lambda execution environments.',
      'Built direct-to-S3 upload pipelines and real-time processing progress indicators.',
    ],
    engineeringDecisions: [
      {
        title: 'Direct S3 Pre-signed Uploads',
        rationale:
          'Routing large audio files through Node.js API servers degrades throughput and exhausts server memory. Pre-signed S3 URLs completely offloaded ingestion bandwidth to AWS edge infrastructure.',
      },
      {
        title: 'Serverless FFmpeg on Containerized Lambda',
        rationale:
          'Audio processing is bursty; keeping dedicated EC2 instances idling is costly. Lambda scales to zero when no jobs exist and dynamically spins up concurrent execution for heavy loads.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Lambda 15-minute execution limit and memory constraints on large lossless audio files.',
        solution:
          'Chunked multi-hour audio streams into parallel execution windows and optimized FFmpeg compression flags to keep memory footprints well within Lambda limits.',
      },
    ],
    links: {
      isInternal: true,
      internalNotice: 'Architecture and sample demo available upon request.',
    },
    featured: true,
  },
  {
    id: 'vouch-component-library',
    title: 'Reusable NPM Component Library (@vouch/library)',
    category: 'Frontend Architecture / Developer Experience',
    categoryGroup: 'fullstack',
    tagline: 'Standardized design system and production-ready component library published for enterprise development teams.',
    description:
      'A cohesive, accessible, and high-performance React component library designed and engineered as a central package (`@vouch/library`), establishing consistent UI patterns, strong TypeScript typings, and rigorous accessibility standards.',
    highlightBadges: ['NPM Package', 'Design System', 'TypeScript', 'Component APIs', 'Accessibility'],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite / Rollup',
      'Storybook / Documentation',
      'ARIA Standards',
    ],
    metricsOrTags: [
      { label: 'Package Name', value: '@vouch/library' },
      { label: 'Type Safety', value: '100% Strict TypeScript' },
      { label: 'Bundle Format', value: 'ESM & CJS Dual Bundles' },
      { label: 'Accessibility', value: 'WAI-ARIA Compliant' },
    ],
    implementedFeatures: [
      'Extensive suite of accessible primitives: Buttons, Inputs, Modals, Dropdowns, Data Tables, and Navigation Shells.',
      'Strict TypeScript prop interfaces with generic type inference for complex data components.',
      'Custom theme provider with CSS variable injection for seamless dark/light mode and white-label overrides.',
      'Optimized tree-shaking and zero unnecessary runtime bloat via modern ESM packaging.',
      'Comprehensive component API documentation, code examples, and interactive playground.',
    ],
    architectureOverview:
      'Components are built as headless, keyboard-navigable primitives styled with composable token utilities. The build pipeline uses modern bundlers to generate tree-shakeable ESM and CJS bundles with full TypeScript declaration maps (.d.ts).',
    architectureDiagramType: 'component-system',
    roleAndContributions: [
      'Architected the component hierarchy, design token taxonomy, and API interfaces.',
      'Implemented foundational layout and interactive components with full keyboard and screen reader accessibility.',
      'Authored packaging scripts, versioning guidelines, and developer documentation.',
    ],
    engineeringDecisions: [
      {
        title: 'Compound Component Pattern for Complex Widgets',
        rationale:
          'For components like Modals, Tabs, and Dropdowns, using compound sub-components (e.g. `Modal.Header`, `Modal.Body`, `Modal.Footer`) provided developers with maximum layout flexibility while preserving centralized state management.',
      },
      {
        title: 'Zero Direct Third-Party Dependency Bloat',
        rationale:
          'Avoided heavyweight UI framework dependencies inside the package, ensuring downstream consuming applications maintain small bundle sizes.',
      },
    ],
    challengesAndSolutions: [
      {
        challenge: 'Supporting diverse styling environments in downstream host applications.',
        solution:
          'Implemented CSS variables for all color and spacing tokens with standard fallback defaults, allowing host apps to override the palette with a single CSS file.',
      },
    ],
    links: {
      docs: '#library-overview',
      isInternal: true,
      internalNotice: 'Internal enterprise component library; published package artifacts distributed within authorized registries.',
    },
    featured: true,
  },
];
