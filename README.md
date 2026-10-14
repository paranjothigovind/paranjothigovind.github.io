# Paranjothi Govind — Personal Developer Portfolio

> **Production-grade personal portfolio website for Paranjothi Govind**, Technical Lead Engineer at Nyx Wolves (Chennai, India). Built with React 19, TypeScript, Tailwind CSS v4, and Lucide icons.

---

## 🌟 Key Features

1. **Bespoke Visual Design**:
   - Sophisticated near-black (`#0a0b0e`) & charcoal palette with vibrant electric lime (`#ccff00`) accents.
   - Editorial typography utilizing *Space Grotesk*, *Plus Jakarta Sans*, *Inter*, and *JetBrains Mono*.
   - Architectural background grids, subtle neon glow effects, and hairline card borders.
   - Zero generic emojis; strict Lucide icon system with custom SVG brand vectors.

2. **Interactive System Architecture & RAG Pipeline Visualizer**:
   - Interactive 4-tier visualizer (*Client UI* → *API Gateway* → *Applied AI & LangGraph* → *Vector Knowledge & Azure AI Search*).
   - "Simulate Request Flow" button animating end-to-end packet transmission with live latency telemetry.
   - Inspectable contract schemas and code snippets for each architectural layer.

3. **8 In-Depth Project Case Studies**:
   - **Third Eye Meditation AI**: Applied AI / RAG pipeline with Azure AI Search, FastAPI, LangGraph, and clear distinction between implemented features and planned capabilities.
   - **AI-Powered Document Portal**: PDF intelligence platform with page-level vector attribution and dual-pane reader.
   - **GoAtar**: Multi-tenant white-label property management mobile application in React Native.
   - **RoadFerry**: Intercity transport booking mobile application with real-time seat reservation.
   - **View.Inc**: Smart building IoT automation and electrochromic glass control interface.
   - **MTDS Vending Application**: React Native hardware bridge interfacing with airport vending machines.
   - **Audio Splitter**: Serverless media processing engine using AWS Lambda, FFmpeg, S3, and AWS Cognito.
   - **Reusable NPM Component Library (@vouch/library)**: Accessible, headless component system in React and TypeScript.

4. **Interactive Modal & Drawer Case Studies**:
   - Clicking any project opens a full case-study view featuring architecture workflows, implemented vs. planned capabilities, engineering decisions with rationale, technical challenges, and verified badges.
   - Keyboard navigation support (`Escape` to close, `←` / `→` arrows to cycle projects).

5. **Technical Expertise & Domain Breakdown**:
   - Realistic proficiency categorization (*Core Focus* vs *Proficient*) across Frontend, Applied AI & RAG, Backend & APIs, Cloud & Infrastructure, and Data & Storage.
   - Contextual architectural notes for every technology.

6. **7 Core Engineering Pillars**:
   - Master-detail interactive layout detailing Paranjothi's engineering philosophy: *Architecture Before Complexity*, *Reusable Components*, *Performance & Maintainability*, *Thoughtful API Contracts*, *Secure Integrations*, *Iterative Feedback*, and *Practical Application of AI*.

7. **Authentic Career Experience Timeline**:
   - Professional role: Technical Lead Engineer at Nyx Wolves (Chennai, India).
   - Fully data-driven, easily extensible without modifying UI templates.

8. **Working Contact & Live Chennai Clock**:
   - 1-click **Copy Email** button with confetti celebration.
   - Direct interactive message composer that drafts formatted emails via `mailto:` without fake backend claims.
   - Live real-time clock displaying Chennai Indian Standard Time (IST UTC+5:30).

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18 (Tested on Node.js v24)
- npm >= 9

### Install Dependencies
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

---

## 🛠️ How to Customize Your Content

All personal content and project case studies are decoupled from UI components:

| Content Area | Configuration File |
| :--- | :--- |
| **Personal Details & Links** | [`src/data/config.ts`](file:///c:/Projects/portfolio-v1/src/data/config.ts) |
| **Projects & Case Studies** | [`src/data/projects.ts`](file:///c:/Projects/portfolio-v1/src/data/projects.ts) |
| **Technical Skills** | [`src/data/skills.ts`](file:///c:/Projects/portfolio-v1/src/data/skills.ts) |
| **Engineering Pillars** | [`src/data/approach.ts`](file:///c:/Projects/portfolio-v1/src/data/approach.ts) |
| **Career Experience** | [`src/data/experience.ts`](file:///c:/Projects/portfolio-v1/src/data/experience.ts) |

---

## 📁 Project Architecture

```
portfolio-v1/
├── index.html                   # SEO metadata, Google Fonts, Open Graph tags
├── package.json                 # React 19, TypeScript, Tailwind CSS, Lucide
├── vite.config.ts               # Vite configuration with @tailwindcss/vite
├── src/
│   ├── main.tsx                 # React entrypoint
│   ├── App.tsx                  # Master layout & section assembly
│   ├── index.css                # Design tokens, grids, glow effects & animations
│   ├── types/
│   │   └── portfolio.ts         # TypeScript models
│   ├── data/
│   │   ├── config.ts            # Name, role, contact links, philosophy
│   │   ├── projects.ts          # 8 detailed project case studies
│   │   ├── skills.ts            # Grouped technical expertise
│   │   ├── approach.ts          # 7 engineering pillars
│   │   └── experience.ts        # Career timeline
│   └── components/
│       ├── Navbar.tsx           # Floating header with mobile drawer
│       ├── Hero.tsx             # Editorial hero & positioning
│       ├── ArchitectureViewer.tsx # Interactive RAG & System visualizer
│       ├── About.tsx            # Authentic bio & engineering approach
│       ├── Projects.tsx         # Filterable project cards
│       ├── ProjectModal.tsx     # Deep case study modal
│       ├── Skills.tsx           # Domain matrix & proficiency details
│       ├── Approach.tsx         # 7 engineering pillars viewer
│       ├── Experience.tsx       # Timeline at Nyx Wolves
│       ├── Contact.tsx          # Copy email, composer & socials
│       ├── Footer.tsx           # Signature & live Chennai IST clock
│       └── BrandIcons.tsx       # Crisp SVG icons for GitHub & LinkedIn
```

---

## 📄 License
MIT © Paranjothi Govind
