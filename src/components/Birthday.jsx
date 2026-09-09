import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import ScrollReveal from './ScrollReveal';
import './Birthday.css';

/**
 * Birthday — Seção de aniversário com 26 razões e confete
 */
export default function Birthday() {
  const sectionRef = useRef(null);
  const confettiFired = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !confettiFired.current) {
          confettiFired.current = true;
          // Fire confetti!
          const duration = 3000;
          const end = Date.now() + duration;

          const frame = () => {
            confetti({
              particleCount: 3,
              angle: 60,
              spread: 55,
              origin: { x: 0, y: 0.7 },
              colors: ['#D4779B', '#F2A6C4', '#D4A574', '#E8B4B8'],
            });
            confetti({
              particleCount: 3,
              angle: 120,
              spread: 55,
              origin: { x: 1, y: 0.7 },
              colors: ['#D4779B', '#F2A6C4', '#D4A574', '#E8B4B8'],
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          };
          frame();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = Array.from({ length: 26 }, (_, i) => ({
    number: i + 1,
    text: `[TEMPLATE] Razão nº ${i + 1} para amar a Isabela — escreva aqui...`,
  }));

  return (
    <section className="section birthday-section" ref={sectionRef} id="birthday">
      <div className="birthday-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">🎂</span>
            <h2 className="text-gradient">26 Razões Para Te Amar</h2>
            <p className="section-subtitle text-script">
              Um motivo para cada ano da sua vida maravilhosa
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="birthday-age-card glass-card">
            <motion.span
              className="birthday-age text-gradient"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              26
            </motion.span>
            <p className="text-script birthday-age-label">anos de pura beleza</p>
            <p className="birthday-date-full">15 de Setembro de 2026</p>
          </div>
        </ScrollReveal>

        <div className="birthday-reasons-grid">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.number} delay={index * 0.03}>
              <motion.div
                className="reason-card glass-card"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="reason-number">{String(reason.number).padStart(2, '0')}</span>
                <p className="template-text reason-text">{reason.text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="birthday-special glass-card">
            <span className="birthday-special-emoji">🏛️</span>
            <p className="text-script birthday-special-text">
              A futura arquiteta mais talentosa e linda do mundo
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
