import React, { useState } from 'react';
import { ArrowRight, Server, Database, BarChart2, GitBranch, Terminal, Cloud, Monitor, Search, Package } from 'lucide-react';

const ToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'container', name: 'Containerization', icon: <Package className="w-4 h-4" /> },
    { id: 'orchestration', name: 'Orchestration', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'cicd', name: 'CI/CD', icon: <Terminal className="w-4 h-4" /> },
    { id: 'monitoring', name: 'Monitoring', icon: <Monitor className="w-4 h-4" /> },
    { id: 'data', name: 'Data Management', icon: <Database className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Platforms', icon: <Cloud className="w-4 h-4" /> }
  ];
  
  const tools = [
    {
      name: "Docker",
      description: "Container platform for packaging applications and their dependencies",
      category: "container",
      website: "https://www.docker.com/",
      docsUrl: "https://docs.docker.com/",
      logoUrl: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
      difficulty: "Beginner",
      popularity: 5
    },
    {
      name: "Kubernetes",
      description: "Container orchestration system for automating deployment, scaling, and management",
      category: "orchestration",
      website: "https://kubernetes.io/",
      docsUrl: "https://kubernetes.io/docs/home/",
      logoUrl: "https://kubernetes.io/images/favicon.png",
      difficulty: "Advanced",
      popularity: 5
    },
    {
      name: "Kubeflow",
      description: "ML toolkit for Kubernetes to deploy, monitor, and manage ML systems",
      category: "orchestration",
      website: "https://www.kubeflow.org/",
      docsUrl: "https://www.kubeflow.org/docs/",
      logoUrl: "https://www.kubeflow.org/docs/images/logos/Kubeflow-Logo-RGB.png",
      difficulty: "Advanced",
      popularity: 4
    },
    {
      name: "MLflow",
      description: "Platform for managing the ML lifecycle including experimentation, reproducibility, and deployment",
      category: "orchestration",
      website: "https://mlflow.org/",
      docsUrl: "https://www.mlflow.org/docs/latest/index.html",
      logoUrl: "https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png",
      difficulty: "Intermediate",
      popularity: 5
    },
    {
      name: "GitHub Actions",
      description: "CI/CD platform integrated with GitHub for automating workflows",
      category: "cicd",
      website: "https://github.com/features/actions",
      docsUrl: "https://docs.github.com/en/actions",
      logoUrl: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg",
      difficulty: "Beginner",
      popularity: 5
    },
    {
      name: "Jenkins",
      description: "Open-source automation server for building, testing, and deploying code",
      category: "cicd",
      website: "https://www.jenkins.io/",
      docsUrl: "https://www.jenkins.io/doc/",
      logoUrl: "https://www.jenkins.io/images/logos/jenkins/jenkins.png",
      difficulty: "Intermediate",
      popularity: 4
    },
    {
      name: "ArgoCD",
      description: "Declarative, GitOps continuous delivery tool for Kubernetes",
      category: "cicd",
      website: "https://argoproj.github.io/cd/",
      docsUrl: "https://argoproj.github.io/argo-cd/",
      logoUrl: "https://cncf-branding.netlify.app/img/projects/argo/horizontal/color/argo-horizontal-color.png",
      difficulty: "Intermediate",
      popularity: 4
    },
    {
      name: "Prometheus",
      description: "Monitoring and alerting toolkit for containerized environments",
      category: "monitoring",
      website: "https://prometheus.io/",
      docsUrl: "https://prometheus.io/docs/introduction/overview/",
      logoUrl: "https://prometheus.io/assets/prometheus_logo.png",
      difficulty: "Intermediate",
      popularity: 5
    },
    {
      name: "Grafana",
      description: "Analytics and interactive visualization platform for monitoring data",
      category: "monitoring",
      website: "https://grafana.com/",
      docsUrl: "https://grafana.com/docs/",
      logoUrl: "https://grafana.com/static/img/menu/grafana2.svg",
      difficulty: "Intermediate",
      popularity: 5
    },
    {
      name: "Evidently AI",
      description: "Open-source tools to evaluate, test, and monitor ML models",
      category: "monitoring",
      website: "https://www.evidentlyai.com/",
      docsUrl: "https://docs.evidentlyai.com/",
      logoUrl: "https://www.evidentlyai.com/static/media/EvidenltyWebLogo.f9ac7af0.svg",
      difficulty: "Intermediate",
      popularity: 3
    },
    {
      name: "DVC (Data Version Control)",
      description: "Version control system for ML projects, focused on data and models",
      category: "data",
      website: "https://dvc.org/",
      docsUrl: "https://dvc.org/doc",
      logoUrl: "https://dvc.org/img/logo-gray.png",
      difficulty: "Beginner",
      popularity: 4
    },
    {
      name: "Feast",
      description: "Open-source feature store for machine learning",
      category: "data",
      website: "https://feast.dev/",
      docsUrl: "https://docs.feast.dev/",
      logoUrl: "https://feast.dev/assets/images/logos/feast_logo.svg",
      difficulty: "Intermediate",
      popularity: 4
    },
    {
      name: "Great Expectations",
      description: "Tool for validating, documenting, and profiling data",
      category: "data",
      website: "https://greatexpectations.io/",
      docsUrl: "https://docs.greatexpectations.io/en/latest/",
      logoUrl: "https://greatexpectations.io/assets/images/great_expectations_logo.png",
      difficulty: "Intermediate",
      popularity: 4
    },
    {
      name: "Apache Airflow",
      description: "Platform to programmatically author, schedule, and monitor workflows",
      category: "orchestration",
      website: "https://airflow.apache.org/",
      docsUrl: "https://airflow.apache.org/docs/",
      logoUrl: "https://airflow.apache.org/docs/apache-airflow/stable/_images/pin_large.png",
      difficulty: "Intermediate",
      popularity: 5
    },
    {
      name: "AWS SageMaker",
      description: "Fully managed ML service for building, training, and deploying models",
      category: "cloud",
      website: "https://aws.amazon.com/sagemaker/",
      docsUrl: "https://docs.aws.amazon.com/sagemaker/",
      logoUrl: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      difficulty: "Intermediate",
      popularity: 5
    },
    {
      name: "Google Vertex AI",
      description: "Unified platform for building, deploying, and scaling ML models",
      category: "cloud",
      website: "https://cloud.google.com/vertex-ai",
      docsUrl: "https://cloud.google.com/vertex-ai/docs",
      logoUrl: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png",
      difficulty: "Intermediate",
      popularity: 4
    },
    {
      name: "Azure Machine Learning",
      description: "Cloud service for training, deploying, and managing ML models",
      category: "cloud",
      website: "https://azure.microsoft.com/en-us/services/machine-learning/",
      docsUrl: "https://docs.microsoft.com/en-us/azure/machine-learning/",
      logoUrl: "https://azurecomcdn.azureedge.net/cvt-1cd1039d39f1a8bec3c8c769a8cb9f6947b322f5c4e86ce8ea33af21393e0f36/svg/azure.svg",
      difficulty: "Intermediate",
      popularity: 4
    },
    {
      name: "TensorFlow Serving",
      description: "Serving system for machine learning models in production environments",
      category: "orchestration",
      website: "https://www.tensorflow.org/tfx/guide/serving",
      docsUrl: "https://www.tensorflow.org/tfx/serving/",
      logoUrl: "https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-logo-social.png",
      difficulty: "Intermediate",
      popularity: 4
    },
    {
      name: "Seldon Core",
      description: "Open source platform for deploying ML models on Kubernetes",
      category: "orchestration",
      website: "https://www.seldon.io/",
      docsUrl: "https://docs.seldon.io/projects/seldon-core/en/latest/",
      logoUrl: "https://raw.githubusercontent.com/SeldonIO/seldon-core/master/doc/source/images/seldon.png",
      difficulty: "Advanced",
      popularity: 3
    },
    {
      name: "Terraform",
      description: "Infrastructure as Code software for building and managing cloud infrastructure",
      category: "cicd",
      website: "https://www.terraform.io/",
      docsUrl: "https://www.terraform.io/docs",
      logoUrl: "https://www.terraform.io/assets/images/og-image-8b3e4f7d.png",
      difficulty: "Intermediate",
      popularity: 5
    }
  ];
  
  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Essential MLOps Tools & Technologies</h2>
        </div>
        <div className="p-6">
          <p className="text-slate-700 mb-6">
            MLOps requires familiarity with a diverse set of tools across containerization, orchestration, 
            monitoring, and more. This section covers the essential technologies you'll need to master.
          </p>
          
          {/* Tool Categories Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-slate-800 mb-3">Browse by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.icon && <span>{category.icon}</span>}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tool Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
          
          {/* Learning Approach */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-100">
            <h3 className="text-lg font-medium text-indigo-800 mb-3">How to Learn These Tools</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100">
                <h4 className="font-medium text-indigo-700 mb-2">Hands-On Projects</h4>
                <p className="text-sm text-slate-700">
                  The most effective way to learn. Build real projects using these tools to 
                  solve actual ML deployment problems.
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100">
                <h4 className="font-medium text-indigo-700 mb-2">Official Documentation</h4>
                <p className="text-sm text-slate-700">
                  All these tools have comprehensive documentation. Read the guides, tutorials, 
                  and reference materials to understand core concepts.
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100">
                <h4 className="font-medium text-indigo-700 mb-2">Online Courses</h4>
                <p className="text-sm text-slate-700">
                  Platforms like Coursera, Udemy, and Cloud provider learning platforms offer 
                  specialized courses on many of these tools.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <h4 className="font-medium text-indigo-700 mb-2">Recommended Learning Path:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                <li>Start with Docker to understand containerization concepts</li>
                <li>Move to Kubernetes to learn container orchestration</li>
                <li>Learn a CI/CD tool like GitHub Actions or Jenkins</li>
                <li>Add ML-specific tools like MLflow for experiment tracking</li>
                <li>Explore monitoring with Prometheus and Grafana</li>
                <li>Study data versioning with DVC</li>
                <li>Explore cloud-specific ML services based on your target employers</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex justify-end">
        <button 
          onClick={() => document.querySelectorAll('button[data-section="career"]')[0].click()}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Next: Career Path & Salary Guide
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const ToolCard = ({ tool }) => {
  const difficultyColor = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-amber-100 text-amber-800',
    'Advanced': 'bg-red-100 text-red-800'
  };
  
  const popularityStars = Array(5).fill(0).map((_, i) => (
    <span key={i} className={i < tool.popularity ? 'text-amber-500' : 'text-slate-300'}>★</span>
  ));
  
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-slate-800">{tool.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor[tool.difficulty]}`}>
            {tool.difficulty}
          </span>
        </div>
        
        <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-amber-500">
            <span className="text-xs text-slate-500 mr-1">Popularity:</span> 
            {popularityStars}
          </div>
          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
            {categories.find(c => c.id === tool.category)?.name}
          </span>
        </div>
        
        <div className="flex gap-2">
          <a 
            href={tool.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-2 py-1 rounded transition-colors"
          >
            Official Website
          </a>
          <a 
            href={tool.docsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded transition-colors"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

const categories = [
  { id: 'all', name: 'All Tools' },
  { id: 'container', name: 'Containerization' },
  { id: 'orchestration', name: 'Orchestration' },
  { id: 'cicd', name: 'CI/CD' },
  { id: 'monitoring', name: 'Monitoring' },
  { id: 'data', name: 'Data Management' },
  { id: 'cloud', name: 'Cloud Platforms' }
];

export default ToolsSection;