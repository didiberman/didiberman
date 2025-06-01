import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, ArrowRight } from 'lucide-react';

const DefinitionsSection = () => {
  const [expandedSection, setExpandedSection] = useState('mlops');
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Key MLOps Concepts & Definitions</h2>
        </div>
        <div className="p-6">
          <p className="text-slate-700 mb-6">
            Understanding the terminology and concepts in MLOps is crucial to navigating this field. 
            Here are the essential terms and definitions you need to know as you transition into an MLOps role.
          </p>
          
          <div className="space-y-4">
            <DefinitionCard 
              title="MLOps (Machine Learning Operations)" 
              id="mlops"
              expanded={expandedSection === 'mlops'}
              toggleExpand={toggleSection}
            >
              <p className="text-slate-700 mb-3">
                MLOps is a set of practices that combines Machine Learning, DevOps, and Data Engineering to reliably 
                and efficiently deploy and maintain machine learning models in production.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Key Components of MLOps:</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Continuous Integration (CI) for ML models</li>
                  <li>Continuous Delivery (CD) for ML models</li>
                  <li>Model versioning and registry</li>
                  <li>Automated testing and validation</li>
                  <li>Model monitoring and observability</li>
                  <li>Feature engineering and management</li>
                  <li>Infrastructure as Code (IaC) for ML environments</li>
                </ul>
              </div>
            </DefinitionCard>
            
            <DefinitionCard 
              title="Model Lifecycle Management" 
              id="lifecycle"
              expanded={expandedSection === 'lifecycle'}
              toggleExpand={toggleSection}
            >
              <p className="text-slate-700 mb-3">
                The end-to-end process of managing a machine learning model from inception through 
                development, deployment, monitoring, and eventual retirement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <h4 className="font-medium text-slate-800 mb-2">Development Phase</h4>
                  <ul className="list-disc pl-4 text-sm text-slate-700">
                    <li>Data collection & validation</li>
                    <li>Feature engineering</li>
                    <li>Model training & hyperparameter tuning</li>
                    <li>Model validation</li>
                  </ul>
                </div>
                
                <div className="bg-slate-100 p-3 rounded-lg">
                  <h4 className="font-medium text-slate-800 mb-2">Operations Phase</h4>
                  <ul className="list-disc pl-4 text-sm text-slate-700">
                    <li>Model deployment</li>
                    <li>Inference serving</li>
                    <li>Performance monitoring</li>
                    <li>Retraining & updating</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                <Info className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  Your background in server maintenance gives you an advantage in understanding 
                  the infrastructure needs of the operations phase.
                </p>
              </div>
            </DefinitionCard>
            
            <DefinitionCard 
              title="CI/CD for Machine Learning" 
              id="cicd"
              expanded={expandedSection === 'cicd'}
              toggleExpand={toggleSection}
            >
              <p className="text-slate-700 mb-3">
                CI/CD (Continuous Integration/Continuous Delivery) for ML extends traditional software CI/CD 
                principles to include ML-specific concerns like data validation, model training, and 
                validation.
              </p>
              
              <div className="overflow-hidden bg-white rounded-lg border border-slate-200 mb-4">
                <div className="bg-slate-100 px-4 py-2 border-b border-slate-200">
                  <h4 className="font-medium text-slate-800">ML CI/CD vs. Traditional CI/CD</h4>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-700 mb-2">Traditional CI/CD</h5>
                      <ul className="list-disc pl-5 text-sm text-slate-600">
                        <li>Code-centric</li>
                        <li>Deterministic behavior</li>
                        <li>Unit and integration tests</li>
                        <li>Single artifact (application)</li>
                        <li>Version control for code</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-700 mb-2">ML CI/CD</h5>
                      <ul className="list-disc pl-5 text-sm text-slate-600">
                        <li>Code and data-centric</li>
                        <li>Stochastic/probabilistic behavior</li>
                        <li>Data validation and model performance tests</li>
                        <li>Multiple artifacts (model, feature store, etc.)</li>
                        <li>Version control for code, data, and models</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Popular ML CI/CD Tools:</h4>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-slate-700">
                  <li>GitHub Actions</li>
                  <li>Jenkins</li>
                  <li>CircleCI</li>
                  <li>GitLab CI</li>
                  <li>Kubeflow</li>
                  <li>MLflow</li>
                </ul>
              </div>
            </DefinitionCard>
            
            <DefinitionCard 
              title="Data Versioning & Lineage" 
              id="dataversioning"
              expanded={expandedSection === 'dataversioning'}
              toggleExpand={toggleSection}
            >
              <p className="text-slate-700 mb-3">
                Data versioning tracks changes to datasets over time, while data lineage tracks the
                complete data flow from source to final model, enabling reproducibility and auditability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-800 mb-2">Data Versioning</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    Similar to code versioning, but specialized for large datasets. Enables:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-slate-700">
                    <li>Tracking changes between dataset versions</li>
                    <li>Rolling back to previous versions</li>
                    <li>Reproducing experiments with exact data</li>
                    <li>Collaboration on dataset creation</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Data Lineage</h4>
                  <p className="text-slate-700 text-sm mb-2">
                    Tracks data through its complete lifecycle, documenting:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-slate-700">
                    <li>Origin and sources of data</li>
                    <li>Transformations and processing steps</li>
                    <li>How data flows through the ML pipeline</li>
                    <li>Which data was used for which models</li>
                    <li>Regulatory and compliance tracking</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Popular Tools:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
                  <div className="text-sm text-slate-700">DVC</div>
                  <div className="text-sm text-slate-700">Delta Lake</div>
                  <div className="text-sm text-slate-700">Pachyderm</div>
                  <div className="text-sm text-slate-700">Airflow</div>
                  <div className="text-sm text-slate-700">Git LFS</div>
                  <div className="text-sm text-slate-700">Kubeflow</div>
                  <div className="text-sm text-slate-700">MLflow</div>
                  <div className="text-sm text-slate-700">Great Expectations</div>
                </div>
              </div>
            </DefinitionCard>
            
            <DefinitionCard 
              title="Model Registry & Versioning" 
              id="modelregistry"
              expanded={expandedSection === 'modelregistry'}
              toggleExpand={toggleSection}
            >
              <p className="text-slate-700 mb-3">
                A model registry is a centralized repository for storing, managing, and tracking machine learning models
                throughout their lifecycle. It serves as a single source of truth for all models in an organization.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-blue-800 mb-2">Key Functionality:</h4>
                <ul className="list-disc pl-5 text-slate-700">
                  <li>Version tracking for models</li>
                  <li>Model metadata storage (metrics, parameters, etc.)</li>
                  <li>Model staging (dev, staging, production)</li>
                  <li>Model approval workflow and governance</li>
                  <li>Artifact storage (model binaries, documentation)</li>
                  <li>Deployment tracking</li>
                  <li>Model lineage (which data produced which model)</li>
                </ul>
              </div>
              
              <div className="bg-slate-100 p-3 rounded-lg">
                <h4 className="font-medium text-slate-800 mb-2">Popular Model Registry Tools:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                  <div className="text-sm text-slate-700">MLflow Registry</div>
                  <div className="text-sm text-slate-700">Amazon SageMaker Registry</div>
                  <div className="text-sm text-slate-700">Azure ML Model Registry</div>
                  <div className="text-sm text-slate-700">Google Vertex AI Registry</div>
                  <div className="text-sm text-slate-700">Kubeflow KFServing</div>
                  <div className="text-sm text-slate-700">DVC</div>
                </div>
              </div>
            </DefinitionCard>
            
            <DefinitionCard 
              title="Feature Store" 
              id="featurestore"
              expanded={expandedSection === 'featurestore'}
              toggleExpand={toggleSection}
            >
              <p className="text-slate-700 mb-3">
                A feature store is a centralized repository for storing, managing, and serving machine learning features.
                It solves the challenge of feature consistency between training and inference.
              </p>
              
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-indigo-800 mb-2">Why Feature Stores Matter:</h4>
                <ul className="list-disc pl-5 text-slate-700">
                  <li><span className="font-medium">Feature Reuse:</span> Create features once, use them in multiple models</li>
                  <li><span className="font-medium">Training-Serving Skew Prevention:</span> Ensure consistency between training and production</li>
                  <li><span className="font-medium">Point-in-Time Correctness:</span> Access feature values as they were at specific moments</li>
                  <li><span className="font-medium">Feature Documentation:</span> Catalog available features with metadata</li>
                  <li><span className="font-medium">Access Control:</span> Manage who can use which features</li>
                  <li><span className="font-medium">Monitoring:</span> Track feature usage and drift</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <h4 className="font-medium text-slate-800 mb-2">Popular Feature Store Solutions:</h4>
                  <ul className="list-disc pl-5 text-sm text-slate-700">
                    <li>Feast (open-source)</li>
                    <li>Hopsworks Feature Store</li>
                    <li>AWS SageMaker Feature Store</li>
                    <li>Google Vertex AI Feature Store</li>
                    <li>Tecton</li>
                    <li>Redis Feature Store</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="font-medium text-amber-800 mb-2">Your Advantage:</h4>
                  <p className="text-sm text-slate-700">
                    Your experience with database systems and n8n automation will help you grasp feature 
                    transformation pipelines and data automation concepts that are central to feature store implementation.
                  </p>
                </div>
              </div>
            </DefinitionCard>
            
            <DefinitionCard 
              title="Model Monitoring & Observability" 
              id="monitoring"
              expanded={expandedSection === 'monitoring'}
              toggleExpand={toggleSection}
            >
              <p className="text-slate-700 mb-3">
                Model monitoring and observability involve tracking the performance and behavior of deployed ML models 
                to detect issues like drift, performance degradation, or outliers.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-blue-800 mb-2">Key Monitoring Metrics:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-slate-700 mb-1">Performance Metrics</h5>
                    <ul className="list-disc pl-5 text-sm text-slate-700">
                      <li>Accuracy, precision, recall</li>
                      <li>AUC, F1 score</li>
                      <li>RMSE, MAE (for regression)</li>
                      <li>Business impact metrics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-slate-700 mb-1">Operational Metrics</h5>
                    <ul className="list-disc pl-5 text-sm text-slate-700">
                      <li>Prediction latency</li>
                      <li>Throughput</li>
                      <li>Resource utilization</li>
                      <li>Error rates and failures</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-red-800 mb-2">Types of Drift to Monitor:</h4>
                <ul className="list-disc pl-5 text-slate-700">
                  <li><span className="font-medium">Data Drift:</span> Changes in the statistical properties of input data</li>
                  <li><span className="font-medium">Concept Drift:</span> Changes in the relationship between inputs and outputs</li>
                  <li><span className="font-medium">Feature Drift:</span> Changes in individual feature distributions</li>
                  <li><span className="font-medium">Prediction Drift:</span> Changes in the distribution of model outputs</li>
                </ul>
              </div>
              
              <div className="bg-slate-100 p-3 rounded-lg">
                <h4 className="font-medium text-slate-800 mb-2">Popular Monitoring Tools:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                  <div className="text-sm text-slate-700">Prometheus</div>
                  <div className="text-sm text-slate-700">Grafana</div>
                  <div className="text-sm text-slate-700">Seldon Core</div>
                  <div className="text-sm text-slate-700">Evidently AI</div>
                  <div className="text-sm text-slate-700">WhyLabs</div>
                  <div className="text-sm text-slate-700">Arize AI</div>
                  <div className="text-sm text-slate-700">New Relic</div>
                  <div className="text-sm text-slate-700">Datadog</div>
                  <div className="text-sm text-slate-700">Fiddler AI</div>
                </div>
              </div>
            </DefinitionCard>
          </div>
        </div>
      </section>
      
      <div className="flex justify-end">
        <button 
          onClick={() => document.querySelector('button[data-section="roadmap"]').click()}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Next: Learning Roadmap
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const DefinitionCard = ({ title, id, children, expanded, toggleExpand }) => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button 
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        onClick={() => toggleExpand(id)}
        data-section={id}
      >
        <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      
      {expanded && (
        <div className="p-4 border-t border-slate-200 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default DefinitionsSection;