import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

/**
 * Hero — Seção de abertura com nome, contagem regressiva e CTA
 */
export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const birthday = new Date('2026-09-15T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = birthday - now;

      if (diff <= 0) {
        setIsBirthday(true);
        return;
      }

      setTimeLeft({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diff / (1000 * 60)) % 60),
        segundos: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('love-letter');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Glow decorations */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        {/* Emoji decorativo */}
        <motion.div
          className="hero-heart"
          animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          💌
        </motion.div>

        {/* Saudação */}
        <motion.p
          className="hero-greeting text-script"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Para a mulher mais incrível do mundo
        </motion.p>

        {/* Nome principal */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="text-gradient">Isabela</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Uma homenagem da nossa história até hoje
        </motion.p>

        {/* Divider */}
        <motion.div
          className="hero-divider"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 1.3 }}
        />

        {/* Contagem regressiva ou Feliz Aniversário */}
        <motion.div
          className="hero-countdown-area"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {isBirthday ? (
            <div className="hero-birthday-message">
              <span className="hero-birthday-emoji">🎂</span>
              <h2 className="text-gradient">Feliz 26 Anos!</h2>
              <p className="hero-birthday-date">15 de Setembro de 2026</p>
            </div>
          ) : (
            <>
              <p className="hero-countdown-label">Contagem regressiva para seus 26 anos</p>
              <div className="hero-countdown">
                {Object.entries(timeLeft).map(([label, value]) => (
                  <div key={label} className="countdown-item">
                    <span className="countdown-value">{String(value).padStart(2, '0')}</span>
                    <span className="countdown-label">{label}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* CTA */}
        <motion.button
          className="hero-cta btn-primary"
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Abrir Carta
          <span className="cta-arrow">↓</span>
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
