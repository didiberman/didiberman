import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { BookOpen, Puzzle, Brain } from 'lucide-react';

const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const educationItems = [
    {
      title: 'BA in Psychology',
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      details: 'Foundation in understanding human behavior and cognitive processes'
    },
    {
      title: 'Self-taught in DevOps, MLOps, and AI Systems',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      details: 'Project-based learning and continuous professional development in technical domains'
    },
    {
      title: 'Trauma-Informed Group Facilitation',
      icon: <Puzzle className="w-8 h-8 text-blue-500" />,
      details: '3 years of study in collective trauma work, nervous system regulation, and somatic methods'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div
        ref={ref}
        className={`transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
          <span className="text-blue-600 dark:text-blue-400 mr-3">&lt;</span>
          Education
          <span className="text-blue-600 dark:text-blue-400 ml-3">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-700 ${
                isInView 
                  ? `translate-y-0 opacity-100` 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {item.details}
              </p>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-10 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 transform transition-all duration-1000 delay-300 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Additional Training
          </h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Therapeutic training in nervous system regulation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Thomas Hübl's collective trauma work methodology</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Vipassana meditation practice</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Somatic experiencing methods</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;