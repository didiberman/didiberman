import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, BookOpen, Code, Server, Database, Brain, GitBranch, BarChart2 } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import RoadmapSection from './components/RoadmapSection';
import DefinitionsSection from './components/DefinitionsSection';
import ToolsSection from './components/ToolsSection';
import CareerSection from './components/CareerSection';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-slate-800">Guide Contents</h2>
              <nav className="space-y-1">
                <NavItem 
                  id="introduction"
                  title="Introduction to MLOps"
                  icon={<BookOpen className="w-5 h-5" />}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
                <NavItem 
                  id="definitions"
                  title="Key Concepts & Definitions"
                  icon={<Brain className="w-5 h-5" />}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
                <NavItem 
                  id="roadmap"
                  title="Learning Roadmap"
                  icon={<ArrowRight className="w-5 h-5" />}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
                <NavItem 
                  id="tools"
                  title="Essential Tools & Technologies"
                  icon={<Code className="w-5 h-5" />}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
                <NavItem 
                  id="career"
                  title="Career Path & Salary Guide"
                  icon={<BarChart2 className="w-5 h-5" />}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'introduction' && <Introduction />}
            {activeSection === 'definitions' && <DefinitionsSection />}
            {activeSection === 'roadmap' && <RoadmapSection />}
            {activeSection === 'tools' && <ToolsSection />}
            {activeSection === 'career' && <CareerSection />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const NavItem = ({ id, title, icon, activeSection, setActiveSection }) => {
  return (
    <button
      onClick={() => setActiveSection(id)}
      data-section={id}
      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
        activeSection === id 
          ? 'bg-indigo-50 text-indigo-700' 
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {icon}
      <span className="text-left">{title}</span>
    </button>
  );
};

export default App;