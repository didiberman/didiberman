import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    alert('Thank you for your message! This is a demo - in a real implementation, this would send your message to Didi.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div
        ref={ref}
        className={`transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
          <span className="text-blue-600 dark:text-blue-400 mr-3">&lt;</span>
          Get In Touch
          <span className="text-blue-600 dark:text-blue-400 ml-3">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <a 
                    href="mailto:didi.berman@email.com" 
                    className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    didi.berman@email.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/didiberman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/didiberman
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                  <a 
                    href="https://github.com/didiberman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    github.com/didiberman
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-slate-800 dark:text-white">
                    Germany (Remote-Friendly)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;