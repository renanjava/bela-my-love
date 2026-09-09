import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './Gallery.css';

/**
 * Gallery — Galeria de fotos com lightbox
 * 
 * COMO USAR:
 * 1. Coloque suas fotos na pasta public/images/
 * 2. Atualize o array PHOTOS abaixo com os caminhos e legendas
 */

const PHOTOS = [
  { id: 1, src: null, caption: '[TEMPLATE] Legenda da foto 1' },
  { id: 2, src: null, caption: '[TEMPLATE] Legenda da foto 2' },
  { id: 3, src: null, caption: '[TEMPLATE] Legenda da foto 3' },
  { id: 4, src: null, caption: '[TEMPLATE] Legenda da foto 4' },
  { id: 5, src: null, caption: '[TEMPLATE] Legenda da foto 5' },
  { id: 6, src: null, caption: '[TEMPLATE] Legenda da foto 6' },
  { id: 7, src: null, caption: '[TEMPLATE] Legenda da foto 7' },
  { id: 8, src: null, caption: '[TEMPLATE] Legenda da foto 8' },
  { id: 9, src: null, caption: '[TEMPLATE] Legenda da foto 9' },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => setSelectedPhoto(photo);
  const closeLightbox = () => setSelectedPhoto(null);

  const navigatePhoto = (direction) => {
    const currentIndex = PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    const newIndex = (currentIndex + direction + PHOTOS.length) % PHOTOS.length;
    setSelectedPhoto(PHOTOS[newIndex]);
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="gallery-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">📸</span>
            <h2 className="text-gradient">Nossa Galeria</h2>
            <p className="section-subtitle text-script">Momentos que guardaremos para sempre</p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <div className="gallery-grid">
          {PHOTOS.map((photo, index) => (
            <ScrollReveal key={photo.id} delay={index * 0.05}>
              <motion.div
                className="gallery-item glass-card"
                onClick={() => openLightbox(photo)}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {photo.src ? (
                  <img src={photo.src} alt={photo.caption} className="gallery-img" />
                ) : (
                  <div className="gallery-placeholder">
                    <span className="gallery-placeholder-icon">💕</span>
                    <span className="gallery-placeholder-num">{String(photo.id).padStart(2, '0')}</span>
                  </div>
                )}
                <p className="gallery-caption">{photo.caption}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="gallery-hint template-text">
            Adicione suas fotos na pasta public/images/ e atualize o array PHOTOS em Gallery.jsx
          </p>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                ✕
              </button>

              <div className="lightbox-image-area">
                {selectedPhoto.src ? (
                  <img src={selectedPhoto.src} alt={selectedPhoto.caption} />
                ) : (
                  <div className="lightbox-placeholder">
                    <span>💕</span>
                    <p>Foto {selectedPhoto.id}</p>
                  </div>
                )}
              </div>

              <p className="lightbox-caption">{selectedPhoto.caption}</p>

              <div className="lightbox-nav">
                <button onClick={() => navigatePhoto(-1)} className="lightbox-btn">
                  ←
                </button>
                <span className="lightbox-counter">
                  {PHOTOS.findIndex((p) => p.id === selectedPhoto.id) + 1} / {PHOTOS.length}
                </span>
                <button onClick={() => navigatePhoto(1)} className="lightbox-btn">
                  →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
