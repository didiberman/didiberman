import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BurningTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BurningText = ({ text, className = '', delay = 0 }: BurningTextProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.07, // Reduced from 0.1 to 0.07
        delay: delay + i * 0.007, // Reduced from 0.01 to 0.007
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          className="inline-block"
          style={{
            textShadow: inView
              ? "0 0 8px rgba(255,255,255,0.5), 0 0 12px rgba(255,100,50,0.3)"
              : "none",
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};