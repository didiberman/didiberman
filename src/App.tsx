import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { BurningText } from './components/BurningText';
import { ExplosiveText } from './components/ExplosiveText';
import { FallingEmojis } from './components/FallingEmojis';
import { Navbar } from './components/Navbar';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ProjectCard } from './components/ProjectCard';
import { ScrollIndicator } from './components/ScrollIndicator';
import { SkillCategory } from './components/SkillCategory';
import { ChatBot } from './components/ChatBot';
import { IntroAnimation } from './components/IntroAnimation';
import { TimelineItem } from './components/TimelineItem';
import { useState } from 'react';

function App() {
  const [showContent, setShowContent] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const projects = [
    {
      title: 'YouTube Comment Classifier MLOps',
      description: 'End-to-end MLOps project that fine-tunes DistilBERT for YouTube comment emotion classification. Features FastAPI service, Docker containerization, CI/CD with GitHub Actions, and cloud deployment readiness.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      period: '2024',
      technologies: ['FastAPI', 'Docker', 'Kubernetes', 'MLflow', 'GitHub Actions', 'Hugging Face'],
      link: 'https://github.com/didiberman/youtube-comment-classifier-mlops'
    },
    {
      title: 'Instagram Lead Hunter AI',
      description: 'Automated lead generation system using AI to extract and qualify leads from Instagram. Integrates with business workflows for streamlined marketing operations.',
      image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg',
      period: '2023–Present',
      technologies: ['Claude AI', 'n8n', 'Instagram API', 'Lead Generation', 'Automation'],
      link: 'https://github.com/didiberman/insta-lead-hunter-ai'
    },
    {
      title: 'AI Personalized Lead Agent',
      description: 'Workflow automation agent built for n8n that handles AI-powered outreach and lead management, creating personalized communication at scale.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
      period: '2024',
      technologies: ['n8n', 'AI Integration', 'Lead Management', 'Automation', 'API Integration'],
      link: 'https://github.com/didiberman/ai-personalized-lead-agent'
    },
    {
      title: 'Polkadot Validator Operations',
      description: 'Maintained validator and RPC nodes for the Polkadot blockchain, ensuring high uptime and security across cloud and on-premises infrastructure.',
      image: 'https://polkadot.com/_next/static/media/polkadot-logo.0e1e2c79.png',
      period: '2021–2023',
      technologies: ['Polkadot', 'Linux', 'Docker', 'Cloud Infrastructure', 'Security'],
      link: 'https://polkadot.com'
    },
    {
      title: 'MLOps Curriculum App',
      description: 'Interactive web application providing a structured, week-by-week MLOps learning path with daily tasks, curated resources, and progress tracking.',
      image: 'https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg',
      period: '2024',
      technologies: ['React', 'TypeScript', 'Educational Platform', 'MLOps', 'Curriculum Design'],
      link: 'https://github.com/didiberman/mlops-curriculum-app'
    }
  ];

  const skills = {
    'MLOps & AI': ['Model Deployment', 'FastAPI', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Ops'],
    'Automation & Workflows': ['n8n', 'Process Automation', 'API Integration', 'Lead Generation', 'Content Transformation'],
    'Full-Stack Development': ['TypeScript', 'Python', 'React', 'Vite', 'Tailwind CSS'],
    'Cloud & Infrastructure': ['AWS', 'GCP', 'Oracle Cloud', 'Kubernetes', 'Docker'],
    'AI & ML Tools': ['Claude', 'OpenAI', 'Hugging Face', 'MLflow', 'FastAPI'],
    'Security & Systems': ['Network Security', 'Linux', 'System Architecture', 'Blockchain'],
    'Languages & Tools': ['TypeScript', 'Python', 'Java', 'C', 'PHP', 'Bash']
  };

  const experience = [
    {
      role: 'Independent Developer & AI Automation Consultant',
      company: 'Remote',
      period: '2023–Present',
      responsibilities: [
        'Develop end-to-end MLOps solutions including model training, deployment, and monitoring',
        'Build AI-powered automation systems for lead generation and content transformation',
        'Create custom workflow solutions using n8n and various AI technologies',
        'Maintain and optimize cloud infrastructure for ML model serving',
        'Design and implement educational resources for MLOps and automation'
      ]
    },
    {
      role: 'YouTuber & Trauma Healing Coach',
      company: 'Remote',
      period: '2019–Present',
      responsibilities: [
        'Full-time content creator focusing on trauma healing and personal development',
        'Provided coaching and guidance for individuals seeking trauma healing',
        'Created educational content about nervous system regulation and somatic methods',
        'Facilitated group sessions and workshops for collective trauma work'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      <ParallaxBackground />
      <FallingEmojis />
      <IntroAnimation onComplete={() => setShowContent(true)} />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <ChatBot />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-4 pb-16 md:pb-0 md:py-0">
          <div className="text-center md:text-left max-w-4xl mx-auto pt-8 md:pt-0">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-3 md:gap-8 mb-3 md:mb-8">
              <motion.img
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                src="/464178223_10162289637605715_5615128256316484977_n.jpg"
                alt="Didi Berman"
                className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover shadow-xl"
              />
              <div>
                <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4">
                  <BurningText text="Didi Berman" />
                </h1>
                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-2 md:mb-4">
                  <BurningText text="MLOps & AI Automation Engineer" delay={0.2} />
                </p>
                <div className="max-w-2xl">
                  <div className="md:hidden">
                    <BurningText
                      text="2+ years of experience "
                      delay={0.4}
                      className="block text-base text-gray-600 dark:text-gray-400"
                    />
                    <BurningText
                      text="deploying intelligent"
                      delay={0.5}
                      className="block text-base text-gray-600 dark:text-gray-400"
                    />
                    <BurningText
                      text="automation systems,"
                      delay={0.6}
                      className="block text-base text-gray-600 dark:text-gray-400"
                    />
                    <BurningText
                      text="cloud infrastructure, and"
                      delay={0.7}
                      className="block text-base text-gray-600 dark:text-gray-400"
                    />
                    <BurningText
                      text="full-stack AI workflows."
                      delay={0.8}
                      className="block text-base text-gray-600 dark:text-gray-400 mb-3"
                    />
                  </div>
                  <div className="hidden md:block">
                    <BurningText
                      text="2+ years of experience deploying intelligent automation systems,"
                      delay={0.4}
                      className="block text-lg text-gray-600 dark:text-gray-400"
                    />
                    <BurningText
                      text="cloud infrastructure, and full-stack AI workflows."
                      delay={0.5}
                      className="block text-lg text-gray-600 dark:text-gray-400 mb-8"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center mb-3 md:mb-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-[2px]"
              >
                <div className="relative px-6 py-2 md:py-3 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 transition-all duration-300">
                  <span className="relative z-10 text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
                    Contact Me
                  </span>
                </div>
                <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-100" />
                </div>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 p-[2px]"
              >
                <div className="relative px-6 py-2 md:py-3 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 transition-all duration-300">
                  <span className="relative z-10 text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
                    View Projects
                  </span>
                </div>
                <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 opacity-100" />
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Germany (Remote-Friendly)</span>
              </div>
              <a href="mailto:didi@didiberman.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="w-5 h-5" />
                <span>didi@didiberman.com</span>
              </a>
              <a href="https://github.com/didiberman" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Github className="w-10 h-10" />
              </a>
            </motion.div>
          </div>
          <ScrollIndicator />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            >
              <ExplosiveText text="About Me" />
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="prose dark:prose-invert max-w-none"
            >
              <p className="text-base md:text-lg mb-4">
                <ExplosiveText text="Hi! I'm Didi, a developer passionate about building real-world solutions at the intersection of automation, AI, and MLOps/DevOps." />
              </p>
              <p className="text-base md:text-lg mb-4">
                <ExplosiveText text="I specialize in designing and deploying end-to-end machine learning solutions, from model training to production deployment, while also creating intelligent automation systems that solve real business problems." />
              </p>
              <p className="text-base md:text-lg mb-4">
                <ExplosiveText text="My background spans MLOps, cloud infrastructure, and trauma-informed systems thinking. I bring a unique blend of technical expertise and psychological understanding to create meaningful automation that respects human needs and workflows." />
              </p>
              <p className="text-base md:text-lg">
                <ExplosiveText text="I'm committed to learning in public and sharing knowledge with the community through open-source contributions and educational content." />
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            >
              <ExplosiveText text="Key Projects" />
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            >
              <ExplosiveText text="Skills" />
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <SkillCategory key={category} title={category} skills={skillList} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            >
              <ExplosiveText text="Work Experience" />
            </motion.h2>
            <div className="space-y-6 md:space-y-8">
              {experience.map((item) => (
                <TimelineItem key={item.role} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            >
              <ExplosiveText text="Education" />
            </motion.h2>
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  <ExplosiveText text="BA in Psychology" />
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
                  <ExplosiveText text="Foundation in understanding human behavior and cognitive processes" delay={0.2} />
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  <ExplosiveText text="Self-taught in DevOps, MLOps, and AI Systems" />
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
                  <ExplosiveText text="Project-based learning and continuous professional development in technical domains" delay={0.2} />
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  <ExplosiveText text="Trauma-Informed Group Facilitation" />
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
                  <ExplosiveText text="3 years of study in collective trauma work, nervous system regulation, and somatic methods" delay={0.2} />
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  <ExplosiveText text="Additional Training" />
                </h3>
                <ul className="flex flex-col space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {[
                    'Therapeutic training in nervous system regulation',
                    'Thomas Hübl\'s collective trauma work methodology',
                    'Vipassana meditation practice',
                    'Somatic experiencing methods'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><ExplosiveText text={item} delay={0.2 + index * 0.1} /></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
            >
              <ExplosiveText text="Get in Touch" />
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-lg md:text-xl"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              <a href="mailto:didi@didiberman.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                <ExplosiveText text="didi@didiberman.com" />
              </a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default App;