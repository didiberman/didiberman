import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
      </motion.div>
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 flex items-center justify-center translate-x-1/2"
      >
        <div className="w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
      </motion.div>
    </div>
  );
};