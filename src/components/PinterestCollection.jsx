import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './PinterestCollection.css';

/**
 * PinterestCollection — Galeria de inspirações de fotos de casal (estilo Pinterest)
 * 
 * COMO USAR:
 * Coloque novas fotos de inspiração na pasta public/pinterest/
 * e adicione no array PINTEREST_PHOTOS abaixo.
 */

const PINTEREST_PHOTOS = [
  {
    id: 1,
    src: '/pinterest/pose1.jpg',
    title: 'Abraço no Por do Sol',
    category: 'Golden Hour & Romance',
    desc: 'Luz quentinha do fim de tarde, sorrisos bobos e braços entrelaçados.',
  },
  {
    id: 2,
    src: '/pinterest/pose2.jpg',
    title: 'Mirror Selfie Aconchegante',
    category: 'Cotidiano & Estilo',
    desc: 'Registro no espelho do quarto com roupas confortáveis e muito carinho.',
  },
  {
    id: 3,
    src: null,
    title: 'Café da Manhã a Dois',
    category: 'Espontânea & Café',
    desc: 'Risadas tomando café na mesa ou em um café aesthetic.',
  },
  {
    id: 4,
    src: null,
    title: 'Caminhada de Mãos Dadas',
    category: 'Passeios & Cidade',
    desc: 'Foto andando na rua ou no parque vistos de costas ou de lado.',
  },
];

export default function PinterestCollection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="section pinterest-section" id="pinterest">
      <div className="pinterest-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">📌</span>
            <h2 className="text-gradient">Inspirações para Fotos de Casal</h2>
            <p className="section-subtitle text-script">
              Ideias, poses e estetismos que queremos tirar e registrar juntos
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Grid de Fotos / Pins de Inspiração */}
        <div className="pinterest-photo-grid">
          {PINTEREST_PHOTOS.map((photo, index) => (
            <ScrollReveal key={photo.id} delay={index * 0.08}>
              <motion.div
                className="pinterest-pin-card glass-card"
                whileHover={{ scale: 1.03, y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 350 }}
                onClick={() => photo.src && setSelectedPhoto(photo)}
              >
                <div className="pin-image-wrapper">
                  {photo.src ? (
                    <img src={photo.src} alt={photo.title} className="pin-img" />
                  ) : (
                    <div className="pin-placeholder">
                      <span className="pin-placeholder-icon">📌</span>
                      <span className="pin-placeholder-tag">{photo.category}</span>
                    </div>
                  )}
                  <div className="pin-badge">
                    <span>📌 Idea #{photo.id}</span>
                  </div>
                </div>

                <div className="pin-info">
                  <span className="pin-category">{photo.category}</span>
                  <h3 className="pin-title">{photo.title}</h3>
                  <p className="pin-desc">{photo.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal ao Clicar na Foto */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="lightbox-content glass-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>
                ✕
              </button>
              <img src={selectedPhoto.src} alt={selectedPhoto.title} className="lightbox-full-img" />
              <div className="lightbox-details">
                <span className="pin-category">{selectedPhoto.category}</span>
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
