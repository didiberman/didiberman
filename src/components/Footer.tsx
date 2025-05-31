import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-slate-600 dark:text-slate-300 flex items-center mb-4">
            Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Didi Berman
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Didi Berman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;