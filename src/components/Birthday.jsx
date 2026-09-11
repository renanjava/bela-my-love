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

  const reasons = [
    { number: 1, text: 'Razão nº 1 - Ela me acolhe tão bem que não existe nada igual no mundo' },
    { number: 2, text: 'Razão nº 2 - Ela me faz sorrir quando estou na academia enquanto converso com ela' },
    { number: 3, text: 'Razão nº 3 - Ela tem cabelos, olhos, lábios e nariz perfeitos, e ainda tem a pintinha em cima da boca que deixa ela ainda mais linda' },
    { number: 4, text: 'Razão nº 4 - Ela me deixa tão confortável que consigo ser quem eu sou sem nenhuma trava' },
    { number: 5, text: 'Razão nº 5 - Ela é uma pessoa muito esforçada e me dá orgulho sempre' },
    { number: 6, text: 'Razão nº 6 - Ela me respeita e entende meus limites quando a gente vai sair de casa' },
    { number: 7, text: 'Razão nº 7 - Ela gosta de algumas músicas minhas' },
    { number: 8, text: 'Razão nº 8 - Ela às vezes joga alguns joguinhos comigo' },
    { number: 9, text: 'Razão nº 9 - Ela tem visão de futuro e pretende construir uma família' },
    { number: 10, text: 'Razão nº 10 - Ela é a pessoa mais fofa do mundo quando tá morrendo de sono' },
    { number: 11, text: 'Razão nº 11 - Ela me ajuda a escolher roupas pra mim comprar' },
    { number: 12, text: 'Razão nº 12 - Ela me acalma quando eu estou muito afobado ou ansioso' },
    { number: 13, text: 'Razão nº 13 - Ela me faz ficar menos tímido em ambientes que eu ficaria se eu estivesse sozinho' },
    { number: 14, text: 'Razão nº 14 - Ela gosta de fotinhas aesthetics' },
    { number: 15, text: 'Razão nº 15 - Ela é esquisita do jeitinho que eu gosto' },
    { number: 16, text: 'Razão nº 16 - Ela é cheirosa mesmo sem passar nada no corpo, eu amo o cheiro natural dela' },
    { number: 17, text: 'Razão nº 17 - Ela é maravilhosa mesmo sem maquiagem e com o cabelo todo bagunçado' },
    { number: 18, text: 'Razão nº 18 - Ela tira meu sono quando a gente faz Facetime juntos de madrugada' },
    { number: 19, text: 'Razão nº 19 - Ela é amorosa e carinhosa todos os dias e ainda normaliza agir como momoladinhos' },
    { number: 20, text: 'Razão nº 20 - Ela me ensina tudo o que eu não sei e peço para ela, mesmo que ela ache que é coisa besta' },
    { number: 21, text: 'Razão nº 21 - Ela tem paciência comigo e não me julga quando eu' },
    { number: 22, text: 'Razão nº 22 - Ela é aberta a receber feedbacks e dar opiniões sinceras sobre mim' },
    { number: 23, text: 'Razão nº 23 - Ela me inspira a ir treinar todos os dias' },
    { number: 24, text: 'Razão nº 24 - Ela me faz cuidar mais de mim mesmo que indiretamente' },
    { number: 25, text: 'Razão nº 25 - Ela me faz querer ser uma pessoa melhor todos os dias' },
    { number: 26, text: 'Razão nº 26 - Ela me mostrou que o amor existe e é lindo, mesmo eu estando totalmente inseguro no início' },
  ];

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
