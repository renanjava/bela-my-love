import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import timelineData from '../data/timelineData';
import './Timeline.css';

const memoryPhotos = [
  '/timeline/photo1.png',
  '/timeline/photo2.png',
  '/timeline/photo3.png',
  '/timeline/photo4.png',
];

const MOBILE_CHAR_LIMIT = 300;
const DESKTOP_CHAR_LIMIT = 420;
const upBalloons = [
  { left: '4%', delay: 0 },
  { left: '16%', delay: 0.25 },
  { left: '30%', delay: 0.08 },
  { left: '46%', delay: 0.4 },
  { left: '61%', delay: 0.18 },
  { left: '74%', delay: 0.5 },
  { left: '87%', delay: 0.32 },
  { left: '96%', delay: 0.62 },
];

function MonthHeart({ month }) {
  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef, {
    once: false,
    amount: 0.1,
    margin: '-18% 0px -18% 0px',
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setIsVisible(false);
      return undefined;
    }

    setIsVisible(true);
    const timeoutId = window.setTimeout(() => setIsVisible(false), 1300);
    return () => window.clearTimeout(timeoutId);
  }, [isInView]);

  return (
    <>
      <span ref={triggerRef} className="timeline-month-trigger" aria-hidden="true" />
      <AnimatePresence>
        {isVisible && (
          <motion.span
            key={month}
            className="timeline-month-heart"
            initial={{ opacity: 0, scale: 0.35, y: 18, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.35, y: -34, rotate: 12 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            💖
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Timeline — Linha do tempo interativa no estilo "Meu Livro de Aventuras" (Up: Altas Aventuras)
 */
export default function Timeline() {
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [charLimit, setCharLimit] = useState(MOBILE_CHAR_LIMIT);
  const timelineIntroRef = useRef(null);
  const [timelineInView, setTimelineInView] = useState(false);

  useEffect(() => {
    const intro = timelineIntroRef.current;
    if (!intro) return undefined;

    const checkIntroVisibility = () => {
      const { top, bottom } = intro.getBoundingClientRect();
      if (top < window.innerHeight * 0.85 && bottom > 0) {
        setTimelineInView(true);
        window.removeEventListener('scroll', checkIntroVisibility);
      }
    };

    checkIntroVisibility();
    window.addEventListener('scroll', checkIntroVisibility, { passive: true });
    return () => window.removeEventListener('scroll', checkIntroVisibility);
  }, []);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const closeWithEscape = (event) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', closeWithEscape);
    return () => window.removeEventListener('keydown', closeWithEscape);
  }, [selectedImage]);

  useEffect(() => {
    if (!timelineInView) return undefined;

    const timeoutId = window.setTimeout(() => setTimelineInView(false), 5600);
    return () => window.clearTimeout(timeoutId);
  }, [timelineInView]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateCharLimit = () => {
      setCharLimit(mediaQuery.matches ? DESKTOP_CHAR_LIMIT : MOBILE_CHAR_LIMIT);
    };

    updateCharLimit();
    mediaQuery.addEventListener('change', updateCharLimit);
    return () => mediaQuery.removeEventListener('change', updateCharLimit);
  }, []);

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

  const toggleExpand = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const shouldTruncate = (text) => text.length > charLimit;

  const getTruncatedText = (text) => {
    if (text.length <= charLimit) return text;
    return text.substring(0, charLimit).trim() + '...';
  };

  return (
    <section className="section timeline-section adventure-book-section" id="timeline">
      <div className="timeline-glow" />

      {/* One-time UP balloon entrance */}
      <div className="up-balloons-bg" aria-hidden="true">
        <AnimatePresence>
          {timelineInView && upBalloons.map((balloon, index) => (
            <motion.span
              key={index}
              className="bg-balloon up-arrival-balloon"
              style={{ left: balloon.left }}
              initial={{ opacity: 0, y: 80, scale: 0.7, rotate: -8 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [80, 0, -window.innerHeight * 0.45, -window.innerHeight - 140],
                scale: [0.7, 1, 1.05, 0.85],
                rotate: [-8, 5, -4, 8],
              }}
              transition={{ duration: 4.4, delay: balloon.delay, ease: 'easeOut' }}
            >
              🎈
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <div className="section-content">
        <motion.div
          ref={timelineIntroRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="section-title adventure-title-box">
            <div className="adventure-book-cover">
              <span className="adventure-book-spine" />
              <span className="adventure-book-corner corner-top" />
              <span className="adventure-book-corner corner-bottom" />
              <div className="adventure-book-meta">
                <span>Álbum de memórias</span>
                <span>26.06.2026</span>
              </div>
              <div className="adventure-book-art" aria-hidden="true">
                <span className="book-art-balloon balloon-one" />
                <span className="book-art-balloon balloon-two" />
                <span className="book-art-house" />
                <span className="book-art-boat" />
              </div>
              <span className="adventure-book-chapter">Capítulo I</span>
              <h2 className="text-gradient adventure-header-title">Nosso Livro de Aventuras</h2>
              <p className="section-subtitle text-script adventure-subtitle">
                "A aventura está lá fora!" — Carl & Ellie
              </p>
              <div className="adventure-stitched-line" />
              <div className="adventure-up-reference">Uma aventura para guardar</div>
            </div>
          </div>
        </motion.div>

        <div className="timeline-memory-section">

          <div className="timeline-memory-grid">
            {memoryPhotos.map((src, index) => (
              <motion.figure
                key={src}
                className="timeline-memory-photo"
                initial={{ opacity: 0, y: 22, rotate: index % 2 === 0 ? -4 : 4 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <img src={src} alt={`Registro especial ${index + 1}`} decoding="async" />
              </motion.figure>
            ))}
          </div>
        </div>

        {/* Início: dia que se conheceram */}
        <ScrollReveal delay={0.1}>
          <div className="timeline-start adventure-cover-card">
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
              <div className="timeline-month-label adventure-chapter-tag">
                <span className="tape-effect left-tape" />
                <span>{group.month}</span>
                <span className="tape-effect right-tape" />
              </div>
              <MonthHeart month={group.month} />

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

                      {/* Descrição com "Ver mais" */}
                      <div
                        className="adventure-desc-wrapper adventure-desc-clickable"
                        onClick={() => toggleExpand(item.id)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            toggleExpand(item.id);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-expanded={expandedItems[item.id] || false}
                        aria-label={expandedItems[item.id] ? 'Recolher descrição' : 'Expandir descrição'}
                      >
                        <p className="template-text timeline-desc adventure-desc">
                          {expandedItems[item.id]
                            ? item.description
                            : getTruncatedText(item.description)}
                        </p>
                        {shouldTruncate(item.description) && (
                          <button
                            className="read-more-btn"
                            onClick={(event) => {
                              event.stopPropagation();
                              toggleExpand(item.id);
                            }}
                          >
                            {expandedItems[item.id] ? 'Ver menos' : 'Ver mais'}
                          </button>
                        )}
                      </div>

                      {item.audio && (
                        <div className="timeline-media-list">
                          <div className="timeline-audio-player">
                            <span className="timeline-audio-label">
                              {item.audioLabel || 'Áudio deste momento'}
                            </span>
                            <audio src={item.audio} controls preload="metadata" aria-label={item.audioLabel || `Áudio de ${item.title}`} />
                          </div>
                        </div>
                      )}

                      {item.images && item.images.length > 0 ? (
                        <div className="timeline-images-carousel">
                          {item.images.map((imgSrc, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="timeline-image adventure-photo-frame"
                              onClick={() => setSelectedImage({ src: imgSrc, alt: `${item.title} - foto ${imgIndex + 1}` })}
                              onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault();
                                  setSelectedImage({ src: imgSrc, alt: `${item.title} - foto ${imgIndex + 1}` });
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label={`Expandir ${item.title} - foto ${imgIndex + 1}`}
                            >
                              <img src={imgSrc} alt={`${item.title} - foto ${imgIndex + 1}`} />
                            </div>
                          ))}
                        </div>
                      ) : item.image ? (
                        <div
                          className="timeline-image adventure-photo-frame"
                          onClick={() => setSelectedImage({ src: item.image, alt: item.title })}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              setSelectedImage({ src: item.image, alt: item.title });
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Expandir ${item.title}`}
                        >
                          <img src={item.image} alt={item.title} />
                        </div>
                      ) : (
                        <div className="timeline-image-placeholder adventure-photo-placeholder">
                          <span>📷</span>
                          <p>Espaço reservado para nossa foto de aventura</p>
                        </div>
                      )}

                      {item.video && (
                        <div className="timeline-media-list">
                          <video
                            className="timeline-inline-video"
                            src={item.video}
                            controls
                            playsInline
                            preload="metadata"
                            aria-label={`Vídeo de ${item.title}`}
                          >
                            Seu navegador não suporta a reprodução deste vídeo.
                          </video>
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

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="timeline-image-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              role="presentation"
            >
              <motion.div
                className="timeline-image-lightbox-content"
                initial={{ scale: 0.92, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 12 }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Imagem ampliada"
              >
                <button
                  className="timeline-image-lightbox-close"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Fechar imagem ampliada"
                >
                  X
                </button>
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}