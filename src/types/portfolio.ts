export type TechCategoryGroup = 'all' | 'ai' | 'mobile' | 'fullstack' | 'systems';

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface PersonalConfig {
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  statusText: string;
  statusAvailable: boolean;
  heroHeadline: string;
  heroSubheadline: string;
  aboutIntro: string;
  engineeringPhilosophy: string;
  socialLinks: SocialLinks;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface EngineeringDecision {
  title: string;
  rationale: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
  isInternal?: boolean;
  internalNotice?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryGroup: TechCategoryGroup;
  tagline: string;
  description: string;
  highlightBadges: string[];
  technologies: string[];
  metricsOrTags: ProjectMetric[];
  implementedFeatures: string[];
  plannedFeatures?: string[];
  architectureOverview: string;
  architectureDiagramType: 'rag-pipeline' | 'iot-bridge' | 'media-pipeline' | 'cross-platform' | 'component-system' | 'vending-hardware' | 'booking-engine' | 'document-rag';
  roleAndContributions: string[];
  engineeringDecisions: EngineeringDecision[];
  challengesAndSolutions: ChallengeSolution[];
  links: ProjectLinks;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: 'core' | 'proficient' | 'practiced';
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EngineeringPillar {
  id: string;
  number: string;
  title: string;
  summary: string;
  detailedExplanation: string;
  technicalPattern: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  keyTechnologies: string[];
}
