import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  period: string;
  technologies: string[];
}

export const ProjectCard = ({ title, description, image, period, technologies }: ProjectCardProps) => {
  const isPolkadot = title.includes('Polkadot');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform-gpu"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden h-48"
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {isPolkadot && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 1024 1024"
              className="w-24 h-24 text-white"
              fill="currentColor"
            >
              <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm0 938.7C276.7 938.7 85.3 747.3 85.3 512S276.7 85.3 512 85.3 938.7 276.7 938.7 512 747.3 938.7 512 938.7z"/>
              <path d="M512 298.7c-117.8 0-213.3 95.5-213.3 213.3S394.2 725.3 512 725.3 725.3 629.8 725.3 512 629.8 298.7 512 298.7zM512 640c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z"/>
            </svg>
          </div>
        )}
      </motion.div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};