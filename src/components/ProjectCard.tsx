import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  period: string;
  technologies: string[];
  link?: string;
}

export const ProjectCard = ({ title, description, image, period, technologies, link }: ProjectCardProps) => {
  const isPolkadot = title.includes('Polkadot');

  const iconVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

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
        <img 
          src={isPolkadot ? 'https://polkadot.com/_next/static/media/polkadot-logo.0e1e2c79.png' : image} 
          alt={title} 
          className={`w-full h-full ${isPolkadot ? 'object-contain p-8' : 'object-cover'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {!isPolkadot && link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              animate="pulse"
              whileHover="hover"
              variants={iconVariants}
            >
              <Github className="w-10 h-10" />
            </motion.a>
          )}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">{period}</span>
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