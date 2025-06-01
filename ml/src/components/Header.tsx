import React from 'react';
import { Database, Server, GitBranch } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-5 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3 bg-white bg-opacity-20 p-2 rounded-lg flex items-center">
              <Database className="w-6 h-6" />
              <Server className="w-6 h-6 ml-1" />
              <GitBranch className="w-6 h-6 ml-1" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">MLOps Career Guide</h1>
              <p className="text-indigo-100 text-sm">Your path to a $100k+ career in Machine Learning Operations</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors rounded-md">
              Save Progress
            </button>
            <button className="px-4 py-2 bg-white text-indigo-700 font-medium rounded-md hover:bg-opacity-90 transition-colors">
              Get Resources
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;