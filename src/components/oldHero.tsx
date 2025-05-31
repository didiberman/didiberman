import React, { useEffect, useState } from 'react';
import { Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div 
        className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-slate-700">
            <img 
              src="/464178223_10162289637605715_5615128256316484977_n.jpg"
              alt="Didi Berman"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-2">
              Didi Berman
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-6">
              MLOps & AI Automation Engineer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8">
              Self-taught MLOps and AI Automation Engineer with 2+ years of experience deploying 
              intelligent automation systems, cloud infrastructure, and full-stack AI workflows.
            </p>
          </div>
        </div>
        
        <div className="flex space-x-4 mb-10">
          <a 
            href="mailto:didi@didibeing.social" 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a 
            href="https://github.com/yadidb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-lg transition-colors duration-200"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Germany (Remote-Friendly)
          </div>
          <div className="hidden sm:block text-slate-400">•</div>
          <div>didi@didibeing.social</div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
        >
          <svg 
            className="w-6 h-6 text-slate-400 dark:text-slate-500" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;