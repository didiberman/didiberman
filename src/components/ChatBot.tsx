import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface QuickOption {
  label: string;
  message: string;
}

const quickOptions: QuickOption[] = [
  { 
    label: "What's your MLOps experience?", 
    message: "Can you describe your experience with MLOps, including specific projects and technologies you've worked with?" 
  },
  { 
    label: "AI automation capabilities", 
    message: "What kind of AI automation systems have you built, and what business problems did they solve?" 
  },
  { 
    label: "Cloud & infrastructure", 
    message: "What's your experience with cloud platforms and infrastructure management?" 
  },
  { 
    label: "Available for work?", 
    message: "Are you available for consulting or collaboration on MLOps and AI automation projects?" 
  }
];

const urlRegex = /(https?:\/\/[^\s]+)/g;

const formatMessageWithLinks = (text: string) => {
  const parts = text.split(urlRegex);
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([
    { 
      type: 'bot', 
      content: "👋 Hi! I'm Didi's AI assistant. I can tell you about his experience in MLOps, AI automation, and cloud infrastructure. How can I help you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const formatMessage = (message: string) => {
    return message.replace(/\n/g, '\n\n');
  };

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: message }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://n8n.didibeing.social/webhook/c0c16f28-41b2-4a5d-bd24-6b8fe5c0e5bb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      setMessages(prev => [...prev, { type: 'bot', content: formatMessage(data.response) }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: "I'm having trouble connecting right now. Please try again later or reach out to Didi directly at didi@didiberman.com" 
      }]);
    }

    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
  };

  const handleQuickOption = async (option: QuickOption) => {
    await sendMessage(option.message);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-30">
        {showPulse && !isOpen && (
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping" />
        )}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Bot className="w-6 h-6" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-2 md:right-4 w-[calc(100vw-1rem)] md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden z-30"
          >
            <div className="p-3 md:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center">
              <h3 className="font-semibold">Chat with Didi's AI Assistant</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:opacity-75 transition-opacity"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-2 md:p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 md:p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}
                  >
                    {message.type === 'bot' ? (
                      <ReactMarkdown className="prose dark:prose-invert prose-sm max-w-none">
                        {message.content}
                      </ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>
                </motion.div>
              ))}
              {messages.length === 1 && (
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {quickOptions.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickOption(option)}
                      className="text-left p-2 md:p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              )}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 md:p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-2 md:p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white"
                  disabled={isLoading}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};