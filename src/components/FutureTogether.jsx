import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './FutureTogether.css';

/**
 * FutureTogether — Seção de visão do futuro juntos
 */
export default function FutureTogether() {
  const milestones = [
    {
      icon: '💑',
      title: 'Nosso Namoro',
      period: '2026',
      description: '[TEMPLATE] O começo de tudo, a base de uma história linda...',
      status: 'current',
    },
    {
      icon: '💍',
      title: 'Noivado',
      period: '[ANO]',
      description: '[TEMPLATE] O pedido mais especial que ela merece...',
      status: 'future',
    },
    {
      icon: '👰',
      title: 'Casamento',
      period: '[ANO]',
      description: '[TEMPLATE] O dia mais feliz das nossas vidas...',
      status: 'future',
    },
    {
      icon: '🏠',
      title: 'Nossa Casa',
      period: '[ANO]',
      description: '[TEMPLATE] Projetada pela melhor arquiteta do mundo — ela mesma...',
      status: 'future',
    },
    {
      icon: '👶',
      title: 'Oliver',
      period: '[ANO]',
      description: '[TEMPLATE] O pequeno Oliver completa nossa família...',
      status: 'future',
    },
    {
      icon: '🌟',
      title: 'Sucesso Total',
      period: 'Para Sempre',
      description: '[TEMPLATE] Um casal feliz, bem sucedido, com saúde e muito amor...',
      status: 'future',
    },
  ];

  return (
    <section className="section future-section" id="future">
      <div className="future-glow-1" />
      <div className="future-glow-2" />

      <div className="section-content">
        {/*<ScrollReveal>
          <div className="section-title">
            <span className="section-icon">🌟</span>
            <h2 className="text-gradient">Nosso Futuro Juntos</h2>
            <p className="section-subtitle text-script">O melhor ainda está por vir</p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/*Future timeline
        <div className="future-timeline">
          {milestones.map((milestone, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className={`future-milestone glass-card ${milestone.status === 'current' ? 'milestone-current' : ''}`}
                whileHover={{ scale: 1.02, x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="milestone-icon-wrap">
                  <span className="milestone-icon">{milestone.icon}</span>
                  {index < milestones.length - 1 && <div className="milestone-connector" />}
                </div>

                <div className="milestone-content">
                  <div className="milestone-header">
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <span className="milestone-period">{milestone.period}</span>
                  </div>
                  <p className="template-text milestone-desc">{milestone.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>*/}

        {/* Vídeo e mensagem final em uma única lembrança */}
        <ScrollReveal delay={0.3}>
          <div className="onepiece-video-card glass-card">
            <motion.div
              animate={{ rotate: [0, -8, 8, 0], y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="onepiece-video-emojis"
              aria-hidden="true"
            >
              🏴‍☠️💰
            </motion.div>

            <video
              className="future-video"
              src="/futuretogether/video.mp4"
              poster="/futuretogether/thumbnail.jpg"
              controls
              playsInline
              preload="metadata"
            >
              Seu navegador não suporta a reprodução deste vídeo.
            </video>

            <h3 className="text-script onepiece-video-title">
              "Eu vou ser o Rei dos Piratas!", mas o meu One Piece eu já encontrei: você.
            </h3>

            <div className="onepiece-footer">
              <span className="onepiece-flag">🏴‍☠️</span>
              <span className="onepiece-compass">🧭</span>
              <span className="onepiece-flag">🏴‍☠️</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section >
  );
}
