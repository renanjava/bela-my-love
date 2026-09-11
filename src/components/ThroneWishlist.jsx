import ScrollReveal from './ScrollReveal';
import './ThroneWishlist.css';

/**
 * ThroneWishlist — Seção para as listas de desejos no Throne (Dela & Minha)
 * 
 * COMO USAR:
 * Cole os links dos perfis/listas do Throne nas constantes abaixo.
 */

const BELA_THRONE_URL = 'https://throne.com/belamataro';
const RENAN_THRONE_URL = 'https://throne.com/renankeehl';

export default function ThroneWishlist() {
  return (
    <section className="section throne-section" id="throne">
      <div className="throne-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">👑</span>
            <h2 className="text-gradient">Nossas Listas de Desejos (Throne)</h2>
            <p className="section-subtitle text-script">
              Mimos, sonhos e presentes especiais que queremos ganhar e conquistar
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Duas Listas: Dela & Minha */}
        <div className="throne-wishlists-container">
          {/* Lista da Bela */}
          <ScrollReveal delay={0.1}>
            <div className="throne-user-card glass-card">
              <div className="throne-user-badge">👸 Lista da Isabela</div>
              <div className="throne-avatar">👑</div>
              <h3>Lista de Desejos da Bela</h3>
              <p className="throne-user-desc">
                Presentes, mimos, maquiagens, livros e tudo o que a minha princesinha deseja.
              </p>

              {BELA_THRONE_URL ? (
                <a
                  href={BELA_THRONE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-throne btn-throne-bela"
                >
                  <span>Ver Lista da Isabela 🎁</span>
                </a>
              ) : (
                <div className="throne-input-hint">
                  <p>Cole o link em <code>BELA_THRONE_URL</code> em <code>ThroneWishlist.jsx</code></p>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Lista do Renan */}
          <ScrollReveal delay={0.2}>
            <div className="throne-user-card glass-card">
              <div className="throne-user-badge">🤵 Lista do Renan</div>
              <div className="throne-avatar">⚡</div>
              <h3>Lista de Desejos do Renan</h3>
              <p className="throne-user-desc">
                Games, periféricos, tecnologia e mimos para o meu dia a dia.
              </p>

              {RENAN_THRONE_URL ? (
                <a
                  href={RENAN_THRONE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-throne btn-throne-renan"
                >
                  <span>Ver Lista do Renan 🎁</span>
                </a>
              ) : (
                <div className="throne-input-hint">
                  <p>Cole o link em <code>RENAN_THRONE_URL</code> em <code>ThroneWishlist.jsx</code></p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
