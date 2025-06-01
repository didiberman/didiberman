import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExplosiveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const ExplosiveText = ({ text, className = '', delay = 0 }: ExplosiveTextProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={textVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {text}
    </motion.span>
  );
};