import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
  isVisible: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay, isVisible }) => {
  return (
    <div 
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 transform transition-all duration-700 ${
        isVisible 
          ? `translate-y-0 opacity-100 delay-[${delay}s]` 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div 
            key={i} 
            className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;