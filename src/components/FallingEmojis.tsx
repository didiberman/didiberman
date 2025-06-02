import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

interface Emoji {
  id: number;
  isBot: boolean;
  x: number;
  delay: number;
  windStrength: number;
}

export const FallingEmojis = () => {
  const [particles, setParticles] = useState<Emoji[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      isBot: (i + 1) % 5 !== 0,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      windStrength: Math.random() * 30 + 10, // Random wind strength between 10 and 40
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: -20, x: `${particle.x}vw`, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [`${particle.x}vw`, `${particle.x + particle.windStrength}vw`],
            opacity: [0, 0.2, 0],
            rotate: [0, particle.windStrength * 2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: particle.delay,
            ease: [0.4, 0, 0.6, 1],
          }}
          className="absolute opacity-10"
        >
          {particle.isBot ? (
            <Bot className="w-6 h-6" />
          ) : (
            <span className="text-2xl">🍍</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};