import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Approach } from './components/Approach';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { projectsData } from './data/projects';
import type { Project } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedProject(projectsData[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f4f4f5] selection:bg-[#ccff00] selection:text-black font-sans relative antialiased">
      {/* Top Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main>
        {/* Hero & Interactive Architecture Viewer */}
        <Hero
          onExploreWork={handleExploreWork}
          onOpenContact={handleOpenContact}
        />

        {/* About & Philosophy */}
        <About />

        {/* Featured Projects Grid & Deep Case Studies */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Technical Expertise Domains */}
        <Skills />

        {/* Engineering Approach 7 Pillars */}
        <Approach />

        {/* Career & Leadership Experience */}
        <Experience />

        {/* Interactive Contact & Advisory */}
        <Contact />
      </main>

      {/* Footer & Live IST Clock */}
      <Footer />

      {/* Case Study Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateNext={handleNextProject}
        onNavigatePrev={handlePrevProject}
      />
    </div>
  );
}

export default App;
