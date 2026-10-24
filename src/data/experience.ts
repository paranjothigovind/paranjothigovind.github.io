import type { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'nyx-wolves-tech-lead',
    role: 'Senior Full Stack Engineer - AI',
    company: 'StellarMind',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Present',
    current: true,
    description:
      'Leading engineering teams in the architecture, implementation, and delivery of cross-platform applications, modern web systems, and applied AI solutions. Driving technical strategy, code quality standards, and system design across diverse product initiatives.',
    responsibilities: [
      'Lead architectural design and technical roadmaps for web applications, React Native mobile suites, and cloud services.',
      'Architect and deploy production Retrieval-Augmented Generation (RAG) and document intelligence systems using Azure OpenAI and vector search.',
      'Establish reusable frontend component libraries and standard design systems adopted across client and internal applications.',
      'Conduct rigorous code reviews, mentor senior and junior software engineers, and establish automated CI/CD quality gates.',
      'Collaborate directly with cross-functional product managers, designers, and stakeholders to translate complex requirements into resilient technical architectures.',
    ],
    keyTechnologies: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Python',
      'FastAPI',
      'Azure OpenAI',
      'Azure AI Search',
      'LangChain',
      'Node.js',
      'AWS Services',
    ],
  },
  // Future or previous positions can be easily appended here by updating this array
];
