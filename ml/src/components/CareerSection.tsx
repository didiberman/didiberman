import React from 'react';
import { ArrowRight, DollarSign, BarChart, Briefcase as BriefcaseMedical, Building, Compass } from 'lucide-react';

const CareerSection = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">MLOps Career Path & Salary Guide</h2>
        </div>
        <div className="p-6">
          <p className="text-slate-700 mb-6">
            MLOps is a rapidly growing field with excellent career prospects and compensation. This section 
            outlines career paths, salary expectations, and how to position yourself for success.
          </p>
          
          {/* Salary Range Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-slate-800 mb-3">MLOps Salary Ranges</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="py-2 px-4 border-b text-left text-slate-700">Role</th>
                    <th className="py-2 px-4 border-b text-left text-slate-700">Junior (0-2 yrs)</th>
                    <th className="py-2 px-4 border-b text-left text-slate-700">Mid-level (3-5 yrs)</th>
                    <th className="py-2 px-4 border-b text-left text-slate-700">Senior (5+ yrs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-800 font-medium">MLOps Engineer</td>
                    <td className="py-3 px-4 border-b text-slate-700">$80k - $100k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$100k - $135k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$135k - $180k+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-800 font-medium">ML Platform Engineer</td>
                    <td className="py-3 px-4 border-b text-slate-700">$85k - $110k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$110k - $145k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$145k - $190k+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-800 font-medium">ML Infrastructure Engineer</td>
                    <td className="py-3 px-4 border-b text-slate-700">$85k - $115k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$115k - $150k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$150k - $200k+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-slate-800 font-medium">ML Engineer</td>
                    <td className="py-3 px-4 border-b text-slate-700">$90k - $120k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$120k - $160k</td>
                    <td className="py-3 px-4 border-b text-slate-700">$160k - $210k+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-800 font-medium">DevOps Engineer (ML Focus)</td>
                    <td className="py-3 px-4 text-slate-700">$80k - $105k</td>
                    <td className="py-3 px-4 text-slate-700">$105k - $140k</td>
                    <td className="py-3 px-4 text-slate-700">$140k - $180k+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-2 text-xs text-slate-500">
              * Salary ranges vary by location, company size, industry, and specific technical requirements
            </div>
          </div>
          
          {/* Career Path Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-slate-800 mb-3">MLOps Career Paths</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
              <div className="flex flex-col items-center">
                {/* Career Path Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-6">
                  {/* Entry Level */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Compass className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-center font-medium text-slate-800 mb-1">Entry Level</h4>
                    <div className="text-center text-sm text-slate-600">
                      <p>Junior MLOps Engineer</p>
                      <p>ML Engineer (Infrastructure)</p>
                      <p>DevOps Engineer</p>
                    </div>
                  </div>
                  
                  {/* Mid-Level */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Server className="w-8 h-8 text-indigo-600" />
                      </div>
                    </div>
                    <h4 className="text-center font-medium text-slate-800 mb-1">Mid-Level</h4>
                    <div className="text-center text-sm text-slate-600">
                      <p>MLOps Engineer</p>
                      <p>ML Platform Engineer</p>
                      <p>ML Infrastructure Lead</p>
                    </div>
                  </div>
                  
                  {/* Senior & Leadership */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <Building className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    <h4 className="text-center font-medium text-slate-800 mb-1">Leadership</h4>
                    <div className="text-center text-sm text-slate-600">
                      <p>Senior MLOps Engineer</p>
                      <p>ML Platform Architect</p>
                      <p>Head of ML Infrastructure</p>
                    </div>
                  </div>
                </div>
                
                {/* Career Growth Directions */}
                <div className="mt-4 w-full max-w-3xl">
                  <h4 className="font-medium text-slate-800 mb-3">Growth Directions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <h5 className="font-medium text-blue-800 mb-2">Technical Leadership Path</h5>
                      <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                        <li>Lead MLOps Engineer</li>
                        <li>ML Platform Architect</li>
                        <li>Principal ML Engineer</li>
                        <li>Distinguished Engineer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <h5 className="font-medium text-blue-800 mb-2">Management Path</h5>
                      <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                        <li>ML Platform Team Lead</li>
                        <li>ML Engineering Manager</li>
                        <li>Director of ML Infrastructure</li>
                        <li>VP of AI/ML Engineering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Industry Demand */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-slate-800 mb-3">Industries with High MLOps Demand</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <IndustryCard 
                icon={<DollarSign className="w-6 h-6 text-green-600" />}
                title="Finance & Fintech" 
                demand="Very High"
                description="Real-time fraud detection, algorithmic trading, risk assessment"
              />
              
              <IndustryCard 
                icon={<BriefcaseMedical className="w-6 h-6 text-red-600" />}
                title="Healthcare & Biotech" 
                demand="High"
                description="Medical imaging analysis, drug discovery, personalized medicine"
              />
              
              <IndustryCard 
                icon={<BarChart className="w-6 h-6 text-blue-600" />}
                title="Technology" 
                demand="Very High"
                description="Recommender systems, natural language processing, computer vision"
              />
              
              <IndustryCard 
                icon={<Server className="w-6 h-6 text-indigo-600" />}
                title="E-commerce & Retail" 
                demand="High"
                description="Demand forecasting, personalization, inventory optimization"
              />
              
              <IndustryCard 
                icon={<Building className="w-6 h-6 text-amber-600" />}
                title="Manufacturing" 
                demand="Medium-High"
                description="Predictive maintenance, quality control, supply chain optimization"
              />
              
              <IndustryCard 
                icon={<Compass className="w-6 h-6 text-purple-600" />}
                title="Transportation & Logistics" 
                demand="Medium-High"
                description="Route optimization, demand prediction, autonomous systems"
              />
            </div>
          </div>
          
          {/* Skills Premium */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-slate-800 mb-3">Skills That Command a Premium</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">Technical Skills</h4>
                <ul className="space-y-2">
                  <PremiumSkill 
                    skill="Kubernetes Expert" 
                    premium="+$15-25k"
                    description="Advanced K8s for ML, custom operators, performance tuning"
                  />
                  <PremiumSkill 
                    skill="Distributed Training Systems" 
                    premium="+$10-20k"
                    description="Horovod, PyTorch DDP, TensorFlow distributed, Ray"
                  />
                  <PremiumSkill 
                    skill="ML Security Expertise" 
                    premium="+$15-30k"
                    description="Model security, adversarial defenses, data privacy"
                  />
                  <PremiumSkill 
                    skill="LLM Deployment & Optimization" 
                    premium="+$20-40k"
                    description="Efficient LLM serving, quantization, distillation"
                  />
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-2">Domain Expertise</h4>
                <ul className="space-y-2">
                  <PremiumSkill 
                    skill="Finance Domain Knowledge" 
                    premium="+$10-25k"
                    description="Risk models, compliance, fraud detection"
                  />
                  <PremiumSkill 
                    skill="Healthcare/Biotech" 
                    premium="+$15-30k"
                    description="HIPAA compliance, medical data, clinical workflows"
                  />
                  <PremiumSkill 
                    skill="Computer Vision Operations" 
                    premium="+$10-20k"
                    description="Video processing pipelines, real-time inference"
                  />
                  <PremiumSkill 
                    skill="NLP Systems at Scale" 
                    premium="+$15-25k"
                    description="Large language models, embedding systems, RAG"
                  />
                </ul>
              </div>
            </div>
          </div>
          
          {/* Negotiation & Career Advancement */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Negotiation & Career Advancement Tips</h3>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                <h4 className="font-medium text-white mb-2">Salary Negotiation</h4>
                <ul className="list-disc pl-5 text-slate-200 space-y-1 text-sm">
                  <li>Research current market rates for your specific skills and location</li>
                  <li>Quantify your impact in previous roles with metrics</li>
                  <li>Highlight your specialization areas from your MLOps learning journey</li>
                  <li>Be prepared with data from Glassdoor, levels.fyi, and Blind</li>
                  <li>Negotiate the complete package, not just base salary</li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                <h4 className="font-medium text-white mb-2">Career Advancement Strategies</h4>
                <ul className="list-disc pl-5 text-slate-200 space-y-1 text-sm">
                  <li>Build and maintain a public portfolio of your MLOps projects</li>
                  <li>Contribute to open-source MLOps tools and frameworks</li>
                  <li>Write technical blogs on MLOps best practices</li>
                  <li>Speak at meetups and conferences about your experiences</li>
                  <li>Continually update your skills as the MLOps landscape evolves</li>
                  <li>Seek roles that allow you to work on end-to-end MLOps implementations</li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                <h4 className="font-medium text-white mb-2">Performance Metrics That Matter</h4>
                <ul className="list-disc pl-5 text-slate-200 space-y-1 text-sm">
                  <li>Reduced model deployment time (e.g., from days to minutes)</li>
                  <li>Improved model performance monitoring and issue detection</li>
                  <li>Cost savings through efficient infrastructure usage</li>
                  <li>Automation of manual ML engineering processes</li>
                  <li>Reduction in production incidents or model failures</li>
                  <li>Implementation of reproducible ML pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Your Next Steps</h2>
          
          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="font-medium text-indigo-800 mb-3">Start Building Your MLOps Journey Today</h3>
            <p className="text-slate-700 mb-4">
              Now that you have a comprehensive roadmap, it's time to take action. Here are your immediate next steps:
            </p>
            
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <span>1</span>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Assess Your Current Skills</p>
                  <p className="text-sm text-slate-700">
                    Review the foundations section and identify where your Linux and automation skills 
                    give you a head start, and where you need to build new knowledge.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <span>2</span>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Create a Learning Schedule</p>
                  <p className="text-sm text-slate-700">
                    Dedicate specific time blocks each week to work through the learning phases.
                    Consistency is key to making steady progress.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <span>3</span>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Start with Phase 1 Projects</p>
                  <p className="text-sm text-slate-700">
                    Begin building your first Docker containers for ML environments and experimenting with basic 
                    ML workflows. Document everything you learn.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <span>4</span>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Join MLOps Communities</p>
                  <p className="text-sm text-slate-700">
                    Connect with other professionals in the MLOps space through:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-slate-700 mt-1">
                    <li><a href="https://mlops.community/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">MLOps Community Slack</a></li>
                    <li><a href="https://www.reddit.com/r/MLOps/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">r/MLOps subreddit</a></li>
                    <li>LinkedIn MLOps groups</li>
                    <li>Local ML/AI meetups</li>
                  </ul>
                </div>
              </li>
            </ol>
            
            <div className="mt-6 bg-white p-4 rounded-lg border border-indigo-100">
              <h4 className="font-medium text-indigo-800 mb-2">Remember:</h4>
              <p className="text-slate-700">
                Your journey to a $100k+ MLOps role is a marathon, not a sprint. Focus on building real skills 
                through practical projects rather than just collecting certifications. Employers value professionals 
                who can solve real MLOps challenges and demonstrate their experience through a portfolio of work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const IndustryCard = ({ icon, title, demand, description }) => {
  const demandColor = {
    'Very High': 'bg-green-100 text-green-800',
    'High': 'bg-blue-100 text-blue-800',
    'Medium-High': 'bg-amber-100 text-amber-800',
    'Medium': 'bg-orange-100 text-orange-800',
  };
  
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="bg-slate-100 p-2 rounded-lg mr-3 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-slate-800">{title}</h4>
          <div className="flex items-center mt-1 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${demandColor[demand]}`}>
              {demand} Demand
            </span>
          </div>
          <p className="text-xs text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const PremiumSkill = ({ skill, premium, description }) => {
  return (
    <div className="flex items-start">
      <div className="bg-white p-2 border border-slate-200 rounded-lg mr-3 flex-shrink-0">
        <span className="text-green-600 font-semibold">{premium}</span>
      </div>
      <div>
        <p className="font-medium text-slate-800">{skill}</p>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default CareerSection;