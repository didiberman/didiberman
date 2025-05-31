import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
  delay: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  period, 
  description, 
  technologies, 
  image,
  delay,
  isVisible
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-700 ${
        isVisible 
          ? `translate-y-0 opacity-100` 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-blue-300 text-sm">{period}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-700 dark:text-slate-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;