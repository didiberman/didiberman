import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-white text-lg mb-3">MLOps Career Guide</h3>
            <p className="text-sm">
              A comprehensive resource to help you transition from basic Linux server 
              maintenance and AI integrations to becoming a skilled MLOps professional.
            </p>
            <div className="flex items-center mt-4 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>for aspiring MLOps engineers</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-3">Additional Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://mlops.community/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  MLOps Community
                </a>
              </li>
              <li>
                <a href="https://madewithml.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Made With ML
                </a>
              </li>
              <li>
                <a href="https://ml-ops.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  ML-Ops.org
                </a>
              </li>
              <li>
                <a href="https://github.com/visenger/awesome-mlops" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Awesome MLOps (GitHub)
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-3">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="bg-slate-700 hover:bg-slate-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-slate-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-slate-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-400">
              © 2025 MLOps Career Guide. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;