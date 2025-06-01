import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const emojis = ['⭐', '🧘‍♂️', '✨'];

interface Emoji {
  id: number;
  emoji: string;
  x: number;
  delay: number;
}

export const FallingEmojis = () => {
  const [particles, setParticles] = useState<Emoji[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      delay: Math.random() * 20,
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
            opacity: [0, 0.2, 0], // Reduced opacity from 0.5 to 0.2
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
          className="absolute text-2xl opacity-10" // Reduced base opacity from opacity-20 to opacity-10
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};