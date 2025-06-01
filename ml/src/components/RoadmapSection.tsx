import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Info } from 'lucide-react';

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(1);
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">MLOps Learning Roadmap</h2>
        </div>
        <div className="p-6">
          <p className="text-slate-700 mb-6">
            This roadmap lays out a structured path to transition from your current skills to becoming 
            a competent MLOps professional. It's organized into phases to help you build your knowledge incrementally.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-3xl">
              {/* Progress Bar */}
              <div className="absolute top-4 left-0 right-0 h-1 bg-slate-200">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-500 ease-in-out"
                  style={{ width: `${(activePhase - 1) * 25}%` }}
                ></div>
              </div>
              
              {/* Phase Indicators */}
              <div className="relative flex justify-between">
                {[1, 2, 3, 4, 5].map((phase) => (
                  <button 
                    key={phase}
                    onClick={() => setActivePhase(phase)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all ${
                      phase <= activePhase 
                        ? 'bg-indigo-500 text-white' 
                        : 'bg-white border-2 border-slate-300 text-slate-400'
                    } ${phase === activePhase ? 'ring-4 ring-indigo-100' : ''}`}
                  >
                    {phase}
                  </button>
                ))}
              </div>
              
              {/* Phase Labels */}
              <div className="relative flex justify-between mt-4 px-2">
                <div className="text-xs text-center w-16 -ml-4">
                  <span className={`font-medium ${activePhase >= 1 ? 'text-indigo-700' : 'text-slate-500'}`}>Foundations</span>
                </div>
                <div className="text-xs text-center w-16 -ml-4">
                  <span className={`font-medium ${activePhase >= 2 ? 'text-indigo-700' : 'text-slate-500'}`}>Core MLOps</span>
                </div>
                <div className="text-xs text-center w-16 -ml-4">
                  <span className={`font-medium ${activePhase >= 3 ? 'text-indigo-700' : 'text-slate-500'}`}>Advanced</span>
                </div>
                <div className="text-xs text-center w-16 -ml-4">
                  <span className={`font-medium ${activePhase >= 4 ? 'text-indigo-700' : 'text-slate-500'}`}>Specialization</span>
                </div>
                <div className="text-xs text-center w-16 -ml-4">
                  <span className={`font-medium ${activePhase >= 5 ? 'text-indigo-700' : 'text-slate-500'}`}>Career</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase Content */}
          <div className="mt-8">
            {activePhase === 1 && (
              <PhaseOne />
            )}
            
            {activePhase === 2 && (
              <PhaseTwo />
            )}
            
            {activePhase === 3 && (
              <PhaseThree />
            )}
            
            {activePhase === 4 && (
              <PhaseFour />
            )}
            
            {activePhase === 5 && (
              <PhaseFive />
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={() => setActivePhase(prev => Math.max(prev - 1, 1))}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activePhase > 1
                  ? 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              disabled={activePhase <= 1}
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Previous Phase
            </button>
            
            <button 
              onClick={() => setActivePhase(prev => Math.min(prev + 1, 5))}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activePhase < 5
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              disabled={activePhase >= 5}
            >
              Next Phase
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      
      <div className="flex justify-end">
        <button 
          onClick={() => document.querySelectorAll('button[data-section="tools"]')[0].click()}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Next: Essential Tools & Technologies
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const PhaseOne = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-800">Phase 1: Foundation Building</h3>
    <p className="text-slate-700">
      Build on your existing Linux and automation knowledge to create a solid foundation for MLOps.
    </p>
    
    <div className="space-y-4">
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">1. Python Programming & Data Science Basics</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">8-12 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Focus on building a solid Python foundation and understanding basic data science concepts.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="Python programming fundamentals" 
                  description="Data structures, functions, OOP, virtual environments"
                  resources={[
                    { name: "Python for Everybody (Coursera)", url: "https://www.coursera.org/specializations/python" },
                    { name: "Real Python", url: "https://realpython.com/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Data manipulation libraries" 
                  description="NumPy, Pandas for data processing and analysis"
                  resources={[
                    { name: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
                    { name: "NumPy Documentation", url: "https://numpy.org/doc/stable/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Basic ML concepts" 
                  description="Understand supervised/unsupervised learning, evaluation metrics"
                  resources={[
                    { name: "Machine Learning Crash Course (Google)", url: "https://developers.google.com/machine-learning/crash-course" },
                    { name: "Introduction to Machine Learning (Kaggle)", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
                  ]}
                />
                
                <SkillItem 
                  skill="Version control with Git" 
                  description="Branching, merging, pull requests, CI/CD integration"
                  resources={[
                    { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
                    { name: "Learn Git Branching", url: "https://learngitbranching.js.org/" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">2. Docker & Containerization</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">4-6 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Containerization is fundamental to MLOps. Build on your Linux knowledge to master Docker.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="Docker fundamentals" 
                  description="Images, containers, Dockerfiles, Docker Compose"
                  resources={[
                    { name: "Docker Documentation", url: "https://docs.docker.com/get-started/" },
                    { name: "Docker Curriculum", url: "https://docker-curriculum.com/" },
                  ]}
                />
                
                <SkillItem 
                  skill="ML environment containerization" 
                  description="Creating reproducible ML environments with Docker"
                  resources={[
                    { name: "Docker for Data Science", url: "https://towardsdatascience.com/docker-for-data-science-9c0ce73e8263" },
                  ]}
                />
                
                <SkillItem 
                  skill="Docker best practices" 
                  description="Multi-stage builds, layer caching, security considerations"
                  resources={[
                    { name: "Best practices for Docker", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
                  ]}
                />
              </div>
              
              <div className="mt-3 bg-green-50 p-3 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Leveraging your experience:</span> Your Linux server maintenance 
                    knowledge will be extremely valuable here, as you already understand many of the underlying 
                    concepts of containers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
      <h4 className="font-medium text-amber-800 mb-2">Phase 1 Completion Checklist:</h4>
      <div className="space-y-2">
        <div className="flex items-center">
          <input type="checkbox" id="python-basics" className="mr-2" />
          <label htmlFor="python-basics" className="text-slate-700">Complete Python programming fundamentals</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="data-libraries" className="mr-2" />
          <label htmlFor="data-libraries" className="text-slate-700">Work through NumPy and Pandas tutorials</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="ml-concepts" className="mr-2" />
          <label htmlFor="ml-concepts" className="text-slate-700">Understand basic ML concepts and workflows</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="git-projects" className="mr-2" />
          <label htmlFor="git-projects" className="text-slate-700">Create and manage 2-3 projects with Git</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="docker-images" className="mr-2" />
          <label htmlFor="docker-images" className="text-slate-700">Build custom Docker images for ML environments</label>
        </div>
      </div>
    </div>
  </div>
);

const PhaseTwo = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-800">Phase 2: Core MLOps Technologies</h3>
    <p className="text-slate-700">
      Build expertise in the core technologies that enable ML workflows in production environments.
    </p>
    
    <div className="space-y-4">
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">1. Kubernetes & Container Orchestration</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">6-8 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Kubernetes is the industry standard for orchestrating containerized applications at scale.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="Kubernetes basics" 
                  description="Pods, deployments, services, configmaps, secrets"
                  resources={[
                    { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
                    { name: "Kubernetes the Hard Way", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way" },
                  ]}
                />
                
                <SkillItem 
                  skill="Kubernetes for ML workloads" 
                  description="Resource management, GPU scheduling, distributed training"
                  resources={[
                    { name: "Kubeflow Documentation", url: "https://www.kubeflow.org/docs/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Helm charts" 
                  description="Package management for Kubernetes applications"
                  resources={[
                    { name: "Helm Documentation", url: "https://helm.sh/docs/" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">2. CI/CD & Infrastructure as Code</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">4-6 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Automate the build, test, and deployment of ML models and infrastructure.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="CI/CD pipelines" 
                  description="GitHub Actions, Jenkins, GitLab CI for ML workflows"
                  resources={[
                    { name: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
                    { name: "Jenkins Documentation", url: "https://www.jenkins.io/doc/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Infrastructure as Code" 
                  description="Terraform, Ansible for ML infrastructure"
                  resources={[
                    { name: "Terraform Documentation", url: "https://www.terraform.io/docs" },
                    { name: "Ansible Documentation", url: "https://docs.ansible.com/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Testing ML systems" 
                  description="Unit tests, integration tests, model validation tests"
                  resources={[
                    { name: "Testing ML Systems", url: "https://www.jeremyjordan.me/testing-ml/" },
                  ]}
                />
              </div>
              
              <div className="mt-3 bg-green-50 p-3 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Leveraging your experience:</span> Your n8n automation experience 
                    will help you understand workflow orchestration and automation concepts that are central to CI/CD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">3. ML Model Deployment & Serving</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">4-6 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Learn to deploy ML models as scalable, production-ready services.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="Model serving architectures" 
                  description="REST APIs, batch processing, stream processing"
                  resources={[
                    { name: "Model Serving Architecture", url: "https://www.seldon.io/solutions/open-source-projects/core" },
                  ]}
                />
                
                <SkillItem 
                  skill="Model serving frameworks" 
                  description="TensorFlow Serving, TorchServe, Seldon Core, KServe"
                  resources={[
                    { name: "TensorFlow Serving", url: "https://www.tensorflow.org/tfx/guide/serving" },
                    { name: "TorchServe", url: "https://pytorch.org/serve/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Model optimization" 
                  description="Quantization, pruning, compilation for inference"
                  resources={[
                    { name: "TensorFlow Model Optimization", url: "https://www.tensorflow.org/model_optimization" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
      <h4 className="font-medium text-amber-800 mb-2">Phase 2 Completion Projects:</h4>
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="mt-1 mr-3">🔄</div>
          <div>
            <p className="font-medium text-slate-800">Create a Kubernetes deployment for an ML model</p>
            <p className="text-sm text-slate-700">Deploy a simple ML model on a Kubernetes cluster, with proper resource allocation and scaling.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mt-1 mr-3">⚙️</div>
          <div>
            <p className="font-medium text-slate-800">Build a CI/CD pipeline for an ML project</p>
            <p className="text-sm text-slate-700">Implement automated testing, building, and deployment of an ML model using GitHub Actions or Jenkins.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mt-1 mr-3">🚀</div>
          <div>
            <p className="font-medium text-slate-800">Create a containerized model serving API</p>
            <p className="text-sm text-slate-700">Build a REST API for serving predictions from an ML model using FastAPI or Flask, containerized with Docker.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PhaseThree = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-800">Phase 3: Advanced MLOps Practices</h3>
    <p className="text-slate-700">
      Deepen your knowledge with advanced practices that differentiate junior from senior MLOps professionals.
    </p>
    
    <div className="space-y-4">
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">1. ML Workflow Orchestration</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">4-6 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Learn to build and maintain end-to-end ML pipelines for automating the entire ML lifecycle.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="ML workflow orchestration tools" 
                  description="Airflow, Kubeflow Pipelines, Argo Workflows"
                  resources={[
                    { name: "Apache Airflow", url: "https://airflow.apache.org/" },
                    { name: "Kubeflow Pipelines", url: "https://www.kubeflow.org/docs/components/pipelines/introduction/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Pipeline design patterns" 
                  description="DAG design, pipeline parameters, component interfaces"
                  resources={[
                    { name: "ML Pipeline Design Patterns", url: "https://towardsdatascience.com/ml-pipeline-design-patterns-237328d431e9" },
                  ]}
                />
                
                <SkillItem 
                  skill="Metadata tracking" 
                  description="ML Metadata, pipeline provenance, experiment tracking"
                  resources={[
                    { name: "ML Metadata", url: "https://www.tensorflow.org/tfx/guide/mlmd" },
                    { name: "MLflow", url: "https://mlflow.org/" },
                  ]}
                />
              </div>
              
              <div className="mt-3 bg-green-50 p-3 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">Leveraging your experience:</span> Your n8n automation knowledge will 
                    be directly applicable to understanding workflow orchestration concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">2. Feature Stores & Data Management</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">4-5 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Explore advanced data management for ML, including feature stores for consistent feature serving.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="Feature store architecture" 
                  description="Online/offline stores, feature serving, transformation pipelines"
                  resources={[
                    { name: "Feast Documentation", url: "https://docs.feast.dev/" },
                    { name: "Hopsworks Feature Store", url: "https://www.hopsworks.ai/feature-store" },
                  ]}
                />
                
                <SkillItem 
                  skill="Data version control" 
                  description="DVC, Git LFS, Pachyderm for ML datasets"
                  resources={[
                    { name: "DVC Documentation", url: "https://dvc.org/doc" },
                    { name: "Pachyderm", url: "https://www.pachyderm.com/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Data validation" 
                  description="Great Expectations, TensorFlow Data Validation"
                  resources={[
                    { name: "Great Expectations", url: "https://greatexpectations.io/" },
                    { name: "TF Data Validation", url: "https://www.tensorflow.org/tfx/guide/tfdv" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">3. Model Monitoring & Observability</h4>
        </div>
        <div className="p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <span className="text-indigo-700 font-medium">4-5 weeks</span>
            </div>
            <div>
              <p className="text-slate-700 mb-3">
                Learn to implement systems that monitor ML models in production for drift, performance, and reliability.
              </p>
              
              <div className="space-y-2">
                <SkillItem 
                  skill="Model performance monitoring" 
                  description="Metrics collection, dashboarding, alerting"
                  resources={[
                    { name: "Prometheus", url: "https://prometheus.io/docs/introduction/overview/" },
                    { name: "Grafana", url: "https://grafana.com/docs/grafana/latest/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Data drift detection" 
                  description="Statistical methods, drift metrics, automated retraining triggers"
                  resources={[
                    { name: "Evidently AI", url: "https://docs.evidentlyai.com/" },
                    { name: "Alibi Detect", url: "https://docs.seldon.io/projects/alibi-detect/en/latest/" },
                  ]}
                />
                
                <SkillItem 
                  skill="Explainability & model debugging" 
                  description="SHAP, LIME, feature importance analysis"
                  resources={[
                    { name: "SHAP", url: "https://shap.readthedocs.io/en/latest/" },
                    { name: "Interpreting Machine Learning", url: "https://christophm.github.io/interpretable-ml-book/" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
      <h4 className="font-medium text-amber-800 mb-2">Phase 3 Capstone Project:</h4>
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="mt-1 mr-3">🏆</div>
          <div>
            <p className="font-medium text-slate-800">End-to-End MLOps Pipeline</p>
            <p className="text-sm text-slate-700">Build a complete MLOps pipeline that includes:</p>
            <ul className="list-disc pl-5 text-sm text-slate-700 mt-1">
              <li>Data ingestion and versioning</li>
              <li>Feature engineering and storage</li>
              <li>Model training with experiment tracking</li>
              <li>Model validation and testing</li>
              <li>Automated deployment via CI/CD</li>
              <li>Production monitoring and drift detection</li>
            </ul>
            <p className="text-sm text-slate-700 mt-2">
              This project will serve as the centerpiece of your MLOps portfolio and demonstrate 
              your ability to implement MLOps practices end-to-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PhaseFour = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-800">Phase 4: Specialization & Advanced Topics</h3>
    <p className="text-slate-700">
      Deepen your expertise in specific areas of MLOps to stand out in the job market and handle advanced use cases.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">Specialization: Large Scale ML</h4>
        </div>
        <div className="p-4">
          <p className="text-slate-700 mb-3">
            Focus on technologies for handling large-scale ML systems with high throughput requirements.
          </p>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Distributed Training</p>
                <p className="text-slate-700">Horovod, TensorFlow distributed, PyTorch DDP</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">High-Performance Inference</p>
                <p className="text-slate-700">ONNX Runtime, TensorRT, NVIDIA Triton</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Stream Processing</p>
                <p className="text-slate-700">Kafka, Flink, Spark Streaming for real-time ML</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">Specialization: MLOps Security</h4>
        </div>
        <div className="p-4">
          <p className="text-slate-700 mb-3">
            Focus on securing ML systems from vulnerabilities, attacks, and data leakage.
          </p>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">ML-specific Vulnerabilities</p>
                <p className="text-slate-700">Model inversion, membership inference, adversarial attacks</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Secure Model Deployment</p>
                <p className="text-slate-700">Secure APIs, authentication, authorization, encryption</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Compliance & Privacy</p>
                <p className="text-slate-700">GDPR, HIPAA, differential privacy for ML</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">Specialization: Edge ML Deployment</h4>
        </div>
        <div className="p-4">
          <p className="text-slate-700 mb-3">
            Focus on deploying ML models to edge devices and optimizing for constrained environments.
          </p>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Model Optimization</p>
                <p className="text-slate-700">Quantization, pruning, distillation, TensorFlow Lite</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Edge Deployment</p>
                <p className="text-slate-700">Edge TPUs, NVIDIA Jetson, mobile deployment</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Edge-Cloud Coordination</p>
                <p className="text-slate-700">Federated learning, continuous deployment to edge</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">Specialization: Generative AI Ops</h4>
        </div>
        <div className="p-4">
          <p className="text-slate-700 mb-3">
            Focus on the unique challenges of deploying and managing large language models and other generative AI.
          </p>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">LLM Deployment</p>
                <p className="text-slate-700">Model serving for LLMs, quantization, vLLM, efficient inference</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Prompt Engineering</p>
                <p className="text-slate-700">Prompt management, versioning, and optimization systems</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <p className="font-medium text-slate-800">Retrieval Augmented Generation</p>
                <p className="text-slate-700">Vector databases, embedding pipelines, retrieval systems</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
        <h4 className="font-medium text-slate-800">Advanced MLOps Architectures & Patterns</h4>
      </div>
      <div className="p-4">
        <p className="text-slate-700 mb-4">
          Study reference architectures and design patterns used in enterprise MLOps implementations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-3 rounded-lg">
            <h5 className="font-medium text-slate-800 mb-2">Reference Architectures</h5>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>Google Cloud MLOps</li>
              <li>AWS ML Architecture</li>
              <li>Azure ML Architecture</li>
              <li>Kubeflow Reference Architecture</li>
              <li>Seldon Core & Alibi Reference Architecture</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 p-3 rounded-lg">
            <h5 className="font-medium text-slate-800 mb-2">Design Patterns</h5>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>Feature Store Pattern</li>
              <li>Canary Deployment for ML</li>
              <li>Shadow Deployment for Models</li>
              <li>Immutable Model Server Pattern</li>
              <li>Model-as-a-Service Pattern</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-700">
              <span className="font-medium">Resource:</span> The book "Designing Machine Learning Systems" by Chip Huyen 
              covers many of these architectural patterns and is highly recommended at this stage.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
      <h4 className="font-medium text-amber-800 mb-2">Phase 4 Outcome:</h4>
      <p className="text-slate-700 mb-2">
        By the end of this phase, you should have:
      </p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Chosen 1-2 specialization areas to focus your expertise</li>
        <li>Completed at least one advanced project in your specialization</li>
        <li>Understood enterprise-level MLOps architectures</li>
        <li>Added more complex skills to your portfolio that differentiate you from junior candidates</li>
      </ul>
    </div>
  </div>
);

const PhaseFive = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-slate-800">Phase 5: Job Preparation & Career Launch</h3>
    <p className="text-slate-700">
      Prepare for job applications, interviews, and salary negotiations to land your $100k+ MLOps role.
    </p>
    
    <div className="space-y-4">
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">1. Portfolio Development</h4>
        </div>
        <div className="p-4">
          <p className="text-slate-700 mb-3">
            Create a compelling portfolio that showcases your MLOps skills and projects.
          </p>
          
          <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4">
            <h5 className="font-medium text-slate-800 mb-2">Essential Portfolio Components:</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">End-to-End MLOps Pipeline Project</p>
                  <p className="text-sm text-slate-700">Showcase a complete MLOps implementation with CI/CD, monitoring, and documentation.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">Kubernetes-Based ML Platform</p>
                  <p className="text-sm text-slate-700">Demonstrate your ability to deploy ML workloads on Kubernetes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">IaC for ML Infrastructure</p>
                  <p className="text-sm text-slate-700">Show how you automate infrastructure provisioning with Terraform or similar tools.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">Specialization Project</p>
                  <p className="text-sm text-slate-700">Include a project in your chosen specialization area from Phase 4.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg">
            <h5 className="font-medium text-purple-800 mb-2">Portfolio Platforms:</h5>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>GitHub (with detailed READMEs and documentation)</li>
              <li>Personal website/blog (technical articles about your projects)</li>
              <li>Medium or Towards Data Science (publish articles on MLOps topics)</li>
              <li>LinkedIn (showcase projects and technical articles)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">2. Resume & Job Search Strategy</h4>
        </div>
        <div className="p-4">
          <p className="text-slate-700 mb-3">
            Optimize your resume for MLOps roles and develop a strategic job search approach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <h5 className="font-medium text-slate-800 mb-2">Resume Optimization</h5>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Focus on technical MLOps skills and tools</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Quantify achievements and impact</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Highlight relevant projects with outcomes</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Include keywords for ATS systems</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Demonstrate problem-solving abilities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <h5 className="font-medium text-slate-800 mb-2">Job Search Channels</h5>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>LinkedIn (connect with MLOps professionals)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Indeed, Glassdoor, AngelList</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>MLOps Community Slack and Discord channels</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>GitHub Jobs and Stack Overflow Jobs</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Networking at MLOps meetups and conferences</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">Job Titles to Search For:</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="bg-white p-2 rounded border border-blue-100 text-sm text-slate-700">MLOps Engineer</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-sm text-slate-700">ML Platform Engineer</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-sm text-slate-700">ML Engineer</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-sm text-slate-700">ML Infrastructure Engineer</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-sm text-slate-700">DevOps Engineer (ML)</div>
              <div className="bg-white p-2 rounded border border-blue-100 text-sm text-slate-700">AI/ML Systems Engineer</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <h4 className="font-medium text-slate-800">3. Interview Preparation</h4>
        </div>
        <div className="p-4">
          <p className="text-slate-700 mb-3">
            Prepare for technical interviews specific to MLOps roles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <h5 className="font-medium text-slate-800 mb-2">Technical Interview Areas</h5>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Kubernetes and container orchestration</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>CI/CD pipeline design</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>ML system architecture</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Monitoring and observability</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Python and ML framework knowledge</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>ML workflow optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg p-4">
              <h5 className="font-medium text-slate-800 mb-2">Behavioral Interview Preparation</h5>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Problem-solving stories (STAR method)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Collaboration examples</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Handling technical challenges</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Project management approaches</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Learning and adapting to new technologies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Communication with non-technical stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-medium text-indigo-800 mb-2">Salary Negotiation Tips:</h5>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>Research market rates for MLOps roles in your area (Glassdoor, levels.fyi, Blind)</li>
              <li>Quantify your value with concrete examples from projects</li>
              <li>Consider total compensation (salary, bonuses, stock options, benefits)</li>
              <li>Negotiate for learning opportunities and career growth if needed</li>
              <li>Be prepared to walk away from offers that undervalue your skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 rounded-lg text-white">
      <h4 className="font-bold text-xl mb-3">Your Path to a $100k+ MLOps Career</h4>
      <p className="mb-4">
        By completing this comprehensive roadmap, you'll have transformed from a Linux admin with basic automation skills
        to a specialized MLOps professional qualified for high-paying roles in a growing field.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-white bg-opacity-10 p-3 rounded-lg">
          <p className="font-bold text-2xl">6-12</p>
          <p className="text-indigo-100">months of focused study</p>
        </div>
        <div className="bg-white bg-opacity-10 p-3 rounded-lg">
          <p className="font-bold text-2xl">5-8</p>
          <p className="text-indigo-100">portfolio projects</p>
        </div>
        <div className="bg-white bg-opacity-10 p-3 rounded-lg">
          <p className="font-bold text-2xl">$100k+</p>
          <p className="text-indigo-100">annual salary potential</p>
        </div>
      </div>
    </div>
  </div>
);

const SkillItem = ({ skill, description, resources }) => (
  <div className="border-l-2 border-indigo-300 pl-3">
    <p className="font-medium text-slate-800">{skill}</p>
    <p className="text-sm text-slate-600 mb-1">{description}</p>
    {resources && resources.length > 0 && (
      <div className="mt-1">
        <p className="text-xs font-medium text-slate-500">Resources:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-100 transition-colors"
            >
              {resource.name}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default RoadmapSection;