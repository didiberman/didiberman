import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ScrollIndicator = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Consider bottom reached when within 100px of the bottom
      const isBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAtBottom) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
    </motion.div>
  );
};