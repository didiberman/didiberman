import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Welcome to Your MLOps Journey</h2>
        </div>
        <div className="p-6">
          <p className="text-slate-700 mb-4">
            Machine Learning Operations (MLOps) combines machine learning, DevOps, and data engineering to deploy and maintain ML models in production reliably and efficiently. 
            As organizations increasingly rely on AI/ML for business operations, the demand for skilled MLOps professionals has skyrocketed.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500 mb-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Why MLOps Matters</h3>
            <p className="text-slate-700">
              MLOps bridges the gap between data science experimentation and production-ready systems. 
              It enables organizations to deploy ML models that consistently deliver business value in real-world environments.
            </p>
          </div>
          
          <p className="text-slate-700 mb-4">
            This guide will help you transition from your current knowledge of Linux server maintenance, n8n automations, and AI integrations 
            to become a skilled MLOps professional commanding a $100k+ salary.
          </p>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-slate-800 mb-3">Your Starting Advantage</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-slate-700"><span className="font-medium">Linux server maintenance:</span> You already understand server configuration, maintenance, and CLI operations</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-slate-700"><span className="font-medium">n8n automations:</span> Your automation experience gives you a foundation in workflow orchestration</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-slate-700"><span className="font-medium">AI integrations:</span> Your familiarity with AI gives you insight into model deployment challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">What You'll Learn in This Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">Technical Skills</h3>
              <ul className="space-y-1 text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 mr-1 flex-shrink-0" />
                  <span>Container orchestration with Kubernetes</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 mr-1 flex-shrink-0" />
                  <span>CI/CD pipelines for ML workflows</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 mr-1 flex-shrink-0" />
                  <span>ML model versioning and registry</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-1 mr-1 flex-shrink-0" />
                  <span>Data version control and lineage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-100">
              <h3 className="font-semibold text-orange-800 mb-2">Professional Development</h3>
              <ul className="space-y-1 text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1 mr-1 flex-shrink-0" />
                  <span>Portfolio projects showcasing MLOps skills</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1 mr-1 flex-shrink-0" />
                  <span>Resume building for MLOps roles</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1 mr-1 flex-shrink-0" />
                  <span>Interview preparation strategies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-1 mr-1 flex-shrink-0" />
                  <span>Salary negotiation tactics</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Your Career Transformation</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="text-slate-300 mb-2">Where You Are Now</div>
                <div className="font-medium">Linux Admin / Automation Specialist</div>
                <div className="text-slate-300 mt-1">$50-70k</div>
              </div>
              <div className="hidden md:block self-center">
                <ArrowRight className="w-8 h-8 text-blue-400" />
              </div>
              <div className="block md:hidden self-center">
                <div className="w-1 h-8 bg-blue-400 mx-auto"></div>
              </div>
              <div className="flex-1">
                <div className="text-slate-300 mb-2">Where You're Going</div>
                <div className="font-medium">MLOps Engineer / ML Platform Engineer</div>
                <div className="text-green-400 mt-1 font-medium">$100-150k+</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex justify-end">
        <button 
          onClick={() => document.querySelectorAll('button[data-section="definitions"]')[0].click()}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Next: Key Concepts & Definitions
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Introduction;