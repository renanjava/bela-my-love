import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import timelineData from '../data/timelineData';
import './Timeline.css';

/**
 * Timeline — Linha do tempo interativa dos finais de semana
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
    <section className="section timeline-section" id="timeline">
      <div className="timeline-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">📅</span>
            <h2 className="text-gradient">Nossa Timeline</h2>
            <p className="section-subtitle text-script">Cada fim de semana, uma nova história</p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Início: dia que se conheceram */}
        <ScrollReveal delay={0.1}>
          <div className="timeline-start glass-card">
            <span className="timeline-start-emoji">💘</span>
            <h3>26 de Junho de 2026</h3>
            <p className="text-script timeline-start-text">O dia em que tudo começou...</p>
          </div>
        </ScrollReveal>

        {/* Timeline vertical */}
        <div className="timeline-container">
          <div className="timeline-line" />

          {months.map((group) => (
            <div key={group.month} className="timeline-month-group">
              <ScrollReveal>
                <div className="timeline-month-label">
                  <span>{group.month}</span>
                </div>
              </ScrollReveal>

              {group.items.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className={`timeline-item ${item.highlight ? 'timeline-item-highlight' : ''}`}>
                    <div className="timeline-dot">
                      <span>{item.emoji}</span>
                    </div>

                    <motion.div
                      className="timeline-card glass-card"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="timeline-date">{item.date}</span>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="template-text timeline-desc">{item.description}</p>

                      {item.image ? (
                        <div className="timeline-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                      ) : (
                        <div className="timeline-image-placeholder">
                          <span>📷</span>
                          <p>Adicione uma foto aqui</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
