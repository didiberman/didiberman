import { motion } from 'framer-motion';

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const TimelineItem = ({ role, company, period, responsibilities }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{role}</h3>
          <p className="text-gray-600 dark:text-gray-400">{company}</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  );
};