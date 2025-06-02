import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3, 1, 0.3, 1],
              scale: [0.9, 1.1, 0.9, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              ease: "easeInOut",
            }}
            className="text-blue-600 dark:text-blue-400"
          >
            <Bot className="w-24 h-24 md:w-32 md:h-32" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};