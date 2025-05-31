import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SkillCategory from './SkillCategory';

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Full-Stack Web',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Front-end Design', 'Back-end Development'],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['Google Cloud Console', 'Oracle Cloud', 'Hetzner VPS', 'Cloud Architecture'],
    },
    {
      title: 'DevOps/MLOps',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'MLflow', 'Coolify', 'n8n'],
    },
    {
      title: 'APIs & Services',
      skills: ['Google APIs', 'Telegram Bot API', 'Apify', 'RESTful APIs', 'Webhooks'],
    },
    {
      title: 'AI Tools',
      skills: ['Claude', 'OpenAI APIs', 'Ollama', 'OpenWebUI', 'FastAPI', 'LLM Integration'],
    },
    {
      title: 'Data & Analytics',
      skills: ['PostgreSQL', 'Custom Analytics Systems', 'Data Visualization', 'Reporting'],
    },
    {
      title: 'Programming Languages',
      skills: ['Java', 'PHP', 'Bash', 'Python (basic)', 'JavaScript/TypeScript'],
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div
        ref={ref}
        className={`transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
          <span className="text-blue-600 dark:text-blue-400 mr-3">&lt;</span>
          Technical Skills
          <span className="text-blue-600 dark:text-blue-400 ml-3">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;