import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isRight: boolean;
  delay: number;
  isVisible: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  isRight,
  delay,
  isVisible
}) => {
  return (
    <div 
      className={`relative flex flex-col md:flex-row ${
        isRight ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 z-10 mt-1.5"></div>
      
      {/* Content */}
      <div 
        className={`ml-8 md:ml-0 md:w-1/2 ${isRight ? 'md:pr-12' : 'md:pl-12'} ${
          isVisible 
            ? `transform-none opacity-100 delay-[${delay}s]` 
            : `${isRight ? 'translate-x-10' : '-translate-x-10'} opacity-0`
        } transition-all duration-1000`}
        style={{ transitionDelay: `${delay}s` }}
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">
            {title}
          </h3>
          <div className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
            <span>{company}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {period}
            </span>
          </div>
          
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            {description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;