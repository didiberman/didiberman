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
import { TimelineItem } from './components/TimelineItem';

function App() {
  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const projects = [
    {
      title: 'Marketing & AI Automation Systems',
      description: 'Architected multiple automation systems for a top Instagram content marketing expert including lead scoring bots, Instagram bio analyzers, and YouTube-to-Medium content repurposers. Integrated Claude, OpenWebUI, and local Ollama for AI-driven content workflows.',
      image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg',
      period: '2023–Present',
      technologies: ['Claude AI', 'OpenAI', 'Ollama', 'Oracle Cloud', 'Coolify', 'n8n']
    },
    {
      title: 'End-to-End ML Model Deployment',
      description: 'Trained and served a model with FastAPI, Docker, and Kubernetes. Used MLflow for experiment tracking, GitHub Actions for CI/CD automation. Deployed via self-managed infrastructure and monitored with Prometheus/Grafana.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      period: '2024',
      technologies: ['FastAPI', 'Docker', 'Kubernetes', 'MLflow', 'GitHub Actions', 'Prometheus']
    },
    {
      title: 'Telegram-based Lead Gen Bot',
      description: 'Built a conversational lead qualification system using n8n + Claude. Scraped Instagram profiles via Apify and scored leads based on profile signals. Stored structured data in PostgreSQL and synced to Google Sheets.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
      period: '2025',
      technologies: ['Telegram API', 'n8n', 'Claude', 'Apify', 'PostgreSQL', 'Google Sheets']
    },
    {
      title: 'Polkadot Validator Node Ops',
      description: 'Maintained uptime and security of validator and RPC nodes for the Polkadot blockchain. Deployed infrastructure across cloud and on-prem environments.',
      image: 'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg',
      period: '2021–2023',
      technologies: ['Polkadot', 'Linux', 'Docker', 'Cloud Infrastructure', 'Security']
    },
    {
      title: 'Cross-Platform Content Creation System',
      description: 'Created full workflow from script generation to video publishing using OpenRouter and n8n. Integrated YouTube into automated cross-platform content creation workflows using AI-based content rewriting and scheduling.',
      image: 'https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg',
      period: '2025',
      technologies: ['OpenRouter', 'n8n', 'YouTube API', 'Content Generation', 'Automation']
    }
  ];

  const skills = {
    'Full-Stack Web': ['HTML', 'CSS', 'JavaScript', 'PHP', 'Front-end Design', 'Back-end Development'],
    'Cloud & Infrastructure': ['Google Cloud Console', 'Oracle Cloud', 'Hetzner VPS', 'Cloud Architecture'],
    'DevOps/MLOps': ['Docker', 'Kubernetes', 'GitHub Actions', 'MLflow', 'Coolify', 'n8n'],
    'APIs & Services': ['Google APIs', 'Telegram Bot API', 'Apify', 'RESTful APIs', 'Webhooks'],
    'AI Tools': ['Claude', 'OpenAI APIs', 'Ollama', 'OpenWebUI', 'FastAPI', 'LLM Integration'],
    'Data & Analytics': ['PostgreSQL', 'Custom Analytics Systems', 'Data Visualization', 'Reporting'],
    'Programming Languages': ['Java', 'PHP', 'Bash', 'Python (basic)', 'JavaScript/TypeScript']
  };

  const experience = [
    {
      role: 'Independent Developer & AI Automation Consultant',
      company: 'Remote',
      period: '2023–Present',
      responsibilities: [
        'Built and maintained production-grade automation and AI systems across marketing and crypto domains',
        'Developed custom analytics tools, self-hosted LLM stacks, and content automation workflows',
        'Created intelligent systems for a world-leading Instagram marketing expert',
        'Designed and implemented end-to-end ML model deployment pipelines',
        'Maintained validator nodes for the Polkadot blockchain ecosystem'
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
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 py-16 md:py-0">
        <div className="text-center md:text-left max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mb-8">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              src="/464178223_10162289637605715_5615128256316484977_n.jpg"
              alt="Didi Berman"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-xl"
            />
            <div>
              <h1 className="text-4xl md:text-7xl font-bold mb-3 md:mb-4">
                <BurningText text="Didi Berman" />
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                <BurningText text="MLOps & AI Automation Engineer" delay={0.2} />
              </p>
              <div className="max-w-2xl">
                <div className="md:hidden">
                  <BurningText
                    text="2+ years of experience"
                    delay={0.4}
                    className="block text-base text-gray-600 dark:text-gray-400"
                  />
                  <BurningText
                    text=" deploying intelligent"
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
                    className="block text-base text-gray-600 dark:text-gray-400 mb-6"
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
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <a
              href="#contact"
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="w-full md:w-auto bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-center"
            >
              View Projects
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Germany (Remote-Friendly)</span>
            </div>
            <a href="mailto:didi@didiberman.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail className="w-5 h-5" />
              <span>didi@didiberman.com</span>
            </a>
            <a href="https://github.com/didiberman" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Github className="w-6 h-6" />
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
              <ExplosiveText text="Hi! My name is Didi." />
            </p>
            <p className="text-base md:text-lg mb-4">
              <ExplosiveText text="I am a passionate Machine Learning Operations and AI Automation Engineer," delay={0.3} />
            </p>
            <p className="text-base md:text-lg mb-4">
              <ExplosiveText text="My background spans crypto infrastructure (Polkadot nodes), YouTube automation, and trauma-informed systems thinking. I bring a unique blend of technical expertise and psychological understanding to solve complex automation problems." delay={0.6} />
            </p>
            <p className="text-base md:text-lg">
              <ExplosiveText text="I enjoy building intelligent systems that augment human capabilities and create meaningful automation that respects human needs and workflows." delay={0.9} />
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
              <ul className="list-disc list-inside text-sm md:text-base text-gray-600 dark:text-gray-400 space-y-2">
                {[
                  'Therapeutic training in nervous system regulation',
                  'Thomas Hübl\'s collective trauma work methodology',
                  'Vipassana meditation practice',
                  'Somatic experiencing methods'
                ].map((item, index) => (
                  <li key={index}>
                    <ExplosiveText text={item} delay={0.2 + index * 0.1} />
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
    </div>
  );
}

export default App;