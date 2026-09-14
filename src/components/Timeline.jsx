import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import timelineData from '../data/timelineData';
import './Timeline.css';

/**
 * Timeline — Linha do tempo interativa no estilo "Meu Livro de Aventuras" (Up: Altas Aventuras)
 */
export default function Timeline() {
  // Group items by month
  const months = [];
  let currentMonth = null;

  timelineData.forEach((item) => {
    if (item.month !== currentMonth) {
      currentMonth = item.month;
      months.push({ month: item.month, items: [] });
    }
    months[months.length - 1].items.push(item);
  });

  return (
    <section className="section timeline-section adventure-book-section" id="timeline">
      <div className="timeline-glow" />
      
      {/* Floating UP Balloons in Background */}
      <div className="up-balloons-bg" aria-hidden="true">
        <span className="bg-balloon balloon-red">🎈</span>
        <span className="bg-balloon balloon-yellow">🎈</span>
        <span className="bg-balloon balloon-blue">🎈</span>
        <span className="bg-balloon balloon-purple">🎈</span>
        <span className="bg-balloon balloon-green">🎈</span>
        <span className="bg-balloon balloon-orange">🎈</span>
      </div>

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title adventure-title-box">
            <div className="adventure-badge">
              <span className="grape-soda-pin" title="Grape Soda Badge 🍇">🍇</span>
              <span className="badge-ribbon">SENIOR EXPLORER</span>
            </div>
            <span className="section-icon adventure-icon">🎈📖</span>
            <h2 className="text-gradient adventure-header-title">Meu Livro de Aventuras</h2>
            <p className="section-subtitle text-script adventure-subtitle">
              "A aventura está lá fora!" — Carl & Ellie
            </p>
            <div className="adventure-stitched-line" />
          </div>
        </ScrollReveal>

        {/* Início: dia que se conheceram */}
        <ScrollReveal delay={0.1}>
          <div className="timeline-start adventure-cover-card">
            <div className="adventure-stamp">PG 01</div>
            <span className="timeline-start-emoji">🎈</span>
            <h3>26 de Junho de 2026</h3>
            <p className="text-script timeline-start-text">
              "Onde começa o nosso capítulo mais bonito..."
            </p>
            <div className="house-balloons-mini">🏠🎈</div>
          </div>
        </ScrollReveal>

        {/* Timeline vertical (Estilo Páginas de Álbum do UP) */}
        <div className="timeline-container adventure-timeline">
          <div className="timeline-line adventure-string" />

          {months.map((group) => (
            <div key={group.month} className="timeline-month-group">
              <ScrollReveal>
                <div className="timeline-month-label adventure-chapter-tag">
                  <span className="tape-effect left-tape" />
                  <span>{group.month}</span>
                  <span className="tape-effect right-tape" />
                </div>
              </ScrollReveal>

              {group.items.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className={`timeline-item ${item.highlight ? 'timeline-item-highlight' : ''}`}>
                    <div className="timeline-dot adventure-pin">
                      <span className="pin-head">📍</span>
                      <span className="dot-emoji">{item.emoji || '🎈'}</span>
                    </div>

                    <motion.div
                      className="timeline-card adventure-card"
                      whileHover={{ scale: 1.025, rotate: index % 2 === 0 ? 0.8 : -0.8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="photo-corner top-left" />
                      <div className="photo-corner top-right" />
                      <div className="photo-corner bottom-left" />
                      <div className="photo-corner bottom-right" />

                      <div className="adventure-card-header">
                        <span className="timeline-date adventure-date">{item.date}</span>
                        {item.highlight && <span className="special-stamp">★ Especial</span>}
                      </div>

                      <h4 className="timeline-title adventure-item-title">{item.title}</h4>
                      <p className="template-text timeline-desc adventure-desc">{item.description}</p>

                      {item.image ? (
                        <div className="timeline-image adventure-photo-frame">
                          <img src={item.image} alt={item.title} />
                        </div>
                      ) : (
                        <div className="timeline-image-placeholder adventure-photo-placeholder">
                          <span>📷</span>
                          <p>Espaço reservado para nossa foto de aventura</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}

          {/* UP Final Quote Banner */}
          <ScrollReveal delay={0.2}>
            <div className="adventure-footer-quote">
              <span className="quote-icon">🏠🎈</span>
              <p className="quote-text text-script">
                "Obrigado por toda a aventura. Agora vá ter uma nova!"
              </p>
              <span className="quote-author">— Ellie</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
