import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="about" className="py-20">
      <div
        ref={ref}
        className={`transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
          <span className="text-blue-600 dark:text-blue-400 mr-3">&lt;</span>
          About Me
          <span className="text-blue-600 dark:text-blue-400 ml-3">/&gt;</span>
        </h2>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8">
          <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            Self-taught MLOps and AI Automation Engineer with 2+ years of experience deploying intelligent automation 
            systems, cloud infrastructure, and full-stack AI workflows. I've built advanced tools for a world-leading 
            Instagram marketing expert, including LLM integrations, custom analytics dashboards, and autonomous agents.
          </p>
          
          <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            My background spans crypto infrastructure (Polkadot nodes), YouTube automation, and trauma-informed systems 
            thinking. I bring a unique blend of technical expertise and psychological understanding to solve complex 
            automation problems.
          </p>
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I'm passionate about building intelligent systems that augment human capabilities and create meaningful 
            automation that respects human needs and workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;