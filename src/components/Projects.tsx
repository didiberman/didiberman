import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const projects = [
    {
      title: 'Marketing & AI Automation Systems',
      period: '2023–Present',
      description: 'Architected multiple automation systems for a top Instagram content marketing expert including lead scoring bots, Instagram bio analyzers, and YouTube-to-Medium content repurposers. Integrated Claude, OpenWebUI, and local Ollama for AI-driven content workflows.',
      technologies: ['Claude AI', 'OpenAI', 'Ollama', 'Oracle Cloud', 'Coolify', 'n8n'],
      image: 'https://images.pexels.com/photos/7567437/pexels-photo-7567437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'End-to-End ML Model Deployment',
      period: '2024',
      description: 'Trained and served a model with FastAPI, Docker, and Kubernetes. Used MLflow for experiment tracking, GitHub Actions for CI/CD automation. Deployed via self-managed infrastructure and monitored with Prometheus/Grafana.',
      technologies: ['FastAPI', 'Docker', 'Kubernetes', 'MLflow', 'GitHub Actions', 'Prometheus'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Telegram-Based Lead Gen Bot',
      period: '2023',
      description: 'Built a conversational lead qualification system using n8n + Claude. Scraped Instagram profiles via Apify and scored leads based on profile signals. Stored structured data in PostgreSQL and synced to Google Sheets.',
      technologies: ['Telegram API', 'n8n', 'Claude', 'Apify', 'PostgreSQL', 'Google Sheets'],
      image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Polkadot Validator Node Ops',
      period: '2021–2023',
      description: 'Maintained uptime and security of validator and RPC nodes for the Polkadot blockchain. Deployed infrastructure across cloud and on-prem environments.',
      technologies: ['Polkadot', 'Linux', 'Docker', 'Cloud Infrastructure', 'Security'],
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'AI-Powered YouTube Channel Automation',
      period: '2022',
      description: 'Created full workflow from script generation to video publishing using GPT and n8n. Repurposed YouTube content across formats using AI-based content rewriting and scheduling.',
      technologies: ['GPT', 'n8n', 'YouTube API', 'Content Generation', 'Automation'],
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div
        ref={ref}
        className={`transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
          <span className="text-blue-600 dark:text-blue-400 mr-3">&lt;</span>
          Key Projects
          <span className="text-blue-600 dark:text-blue-400 ml-3">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              delay={index * 0.1}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;