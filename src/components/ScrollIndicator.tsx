import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
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