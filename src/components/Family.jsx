import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './Family.css';

/**
 * Family — Seção dedicada aos cachorros e família
 */
export default function Family() {
  const dogs = [
    {
      name: 'Scooby',
      trait: 'O pretinho charmoso',
      emoji: '🖤',
      color: '#2D2D2D',
      description: '[TEMPLATE] Escreva algo fofo sobre o Scooby, o salsicha todo preto...',
    },
    {
      name: 'Tobias',
      trait: 'O mofadinho fofo',
      emoji: '🤎',
      color: '#8B6B4E',
      description: '[TEMPLATE] Escreva algo fofo sobre o Tobias, o salsicha mofadinho...',
    },
  ];

  return (
    <section className="section family-section" id="family">
      <div className="family-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">🐾</span>
            <h2 className="text-gradient">Nossa Família</h2>
            <p className="section-subtitle text-script">Os salsichas mais amados do mundo</p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Dogs */}
        <div className="dogs-grid">
          {dogs.map((dog, index) => (
            <ScrollReveal key={dog.name} delay={index * 0.15} direction={index === 0 ? 'left' : 'right'}>
              <motion.div
                className="dog-card glass-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="dog-avatar" style={{ background: dog.color }}>
                  <span className="dog-avatar-emoji">🐕</span>
                </div>
                <div className="dog-info">
                  <h3 className="dog-name">
                    <span>{dog.emoji}</span> {dog.name}
                  </h3>
                  <span className="dog-trait text-script">{dog.trait}</span>
                  <p className="template-text dog-desc">{dog.description}</p>

                  <div className="dog-photo-placeholder">
                    <span>📷</span>
                    <p>Adicione uma foto do {dog.name}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Breed badge */}
        <ScrollReveal delay={0.3}>
          <div className="breed-badge glass-card">
            <span>🌭</span>
            <p>Dachshund lovers forever</p>
          </div>
        </ScrollReveal>

        {/* Parents */}
        <ScrollReveal delay={0.4}>
          <div className="parents-section">
            <h3 className="parents-title text-script">A família que me acolheu 💛</h3>

            <div className="parents-grid">
              <motion.div
                className="parent-card glass-card"
                whileHover={{ scale: 1.03 }}
              >
                <span className="parent-emoji">👨</span>
                <h4>Marcílio</h4>
                <span className="parent-role">Pai</span>
                <p className="template-text parent-desc">
                  [TEMPLATE] Escreva algo sobre o Marcílio...
                </p>
              </motion.div>

              <motion.div
                className="parent-card glass-card"
                whileHover={{ scale: 1.03 }}
              >
                <span className="parent-emoji">👩</span>
                <h4>Marizete</h4>
                <span className="parent-role">Mãe</span>
                <p className="template-text parent-desc">
                  [TEMPLATE] Escreva algo sobre a Marizete...
                </p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
