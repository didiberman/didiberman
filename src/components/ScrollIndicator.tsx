import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ScrollIndicator = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Consider bottom reached when within 100px of the bottom
      const isBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(isBottom);

      // Set hasScrolled to true if user has scrolled more than 50px
      setHasScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAtBottom || hasScrolled) return null;

  return (
    <motion.div
      className={`fixed left-1/2 transform -translate-x-1/2 z-10 pointer-events-none ${
        isMobile ? 'bottom-24' : 'bottom-16'
      } ${isMobile ? 'md:hidden' : 'hidden md:block'}`}
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