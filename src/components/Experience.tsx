import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import TimelineItem from './TimelineItem';

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const experiences = [
    {
      title: 'Independent Developer & AI Automation Consultant',
      company: 'Remote',
      period: '2023–Present',
      description: [
        'Built and maintained production-grade automation and AI systems across marketing and crypto domains',
        'Developed custom analytics tools, self-hosted LLM stacks, and content automation workflows',
        'Created intelligent systems for a world-leading Instagram marketing expert',
        'Designed and implemented end-to-end ML model deployment pipelines',
        'Maintained validator nodes for the Polkadot blockchain ecosystem'
      ]
    },
    {
      title: 'YouTuber & Trauma Healing Coach',
      company: 'Remote',
      period: '2019–Present',
      description: [
        'Full-time content creator focusing on trauma healing and personal development',
        'Provided coaching and guidance for individuals seeking trauma healing',
        'Created educational content about nervous system regulation and somatic methods',
        'Facilitated group sessions and workshops for collective trauma work'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div
        ref={ref}
        className={`transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
          <span className="text-blue-600 dark:text-blue-400 mr-3">&lt;</span>
          Work Experience
          <span className="text-blue-600 dark:text-blue-400 ml-3">/&gt;</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isRight={index % 2 === 0}
                delay={index * 0.2}
                isVisible={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;