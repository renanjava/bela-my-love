import ScrollReveal from './ScrollReveal';
import './PinterestCollection.css';

/**
 * PinterestCollection — Seção "jagunços aesthetic" no estilo Spotify
 * 
 * Toda a galeria é um clicável gigante para abrir a coleção no Pinterest.
 */

const PINTEREST_URL = 'https://br.pinterest.com/renanleaof/jagun%C3%A7os-aesthetic/';

// Fotos reais extraídas da pasta do Pinterest do casal
const PREVIEW_PINS = [
  '/pinterest/pdf_img_12.jpg',
  '/pinterest/pdf_img_24.jpg',
  '/pinterest/pdf_img_2.jpg',
  '/pinterest/pdf_img_26.jpg',
  '/pinterest/pdf_img_43.jpg',
  '/pinterest/pdf_img_42.jpg',
  '/pinterest/pdf_img_14.jpg',
  '/pinterest/pdf_img_22.jpg',
];

export default function PinterestCollection() {
  return (
    <section className="section pinterest-section" id="pinterest">
      <div className="pinterest-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">📌</span>
            <h2 className="text-gradient">jagunços aesthetic</h2>
            <p className="section-subtitle text-script">
              Nossa pasta secreta de inspirações e fotos no Pinterest
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="pinterest-card glass-card">
            <div className="pinterest-header">
              <div className="pinterest-logo">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#E60023">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
                <span>Pinterest • jagunços aesthetic</span>
              </div>
              <p className="pinterest-subtitle-tag">
                🔒 Pasta Privada • 39 Pins
              </p>
            </div>

            {/* Clicável gigante para a coleção inteira */}
            <a
              href={PINTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pinterest-clickable-gallery"
              title="Clique para abrir a coleção inteira no Pinterest"
            >
              <div className="pinterest-grid-preview">
                {PREVIEW_PINS.map((imgSrc, index) => (
                  <div key={index} className="pinterest-grid-item">
                    <img src={imgSrc} alt={`Pin jagunços aesthetic ${index + 1}`} />
                  </div>
                ))}
              </div>

              {/* Overlay interativo com efeito hover */}
              <div className="pinterest-gallery-overlay">
                <div className="pinterest-overlay-badge">
                  <span>Abrir Coleção Inteira no Pinterest 📌</span>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="pinterest-footer-text text-script">
            "Ideias, poses e estetismos para o nosso amor" ✨
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
