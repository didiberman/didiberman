import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExplosiveText } from './ExplosiveText';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        <ExplosiveText text={title} />
      </h3>
      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="relative overflow-hidden">
              <h4 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <ExplosiveText text={skill} delay={0.2 + index * 0.1} />
              </h4>
              <div className="h-0.5 w-0 group-hover:w-full bg-blue-600 dark:bg-blue-400 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};