import ScrollReveal from './ScrollReveal';
import './NotionPlans.css';

/**
 * NotionPlans — Seção de planos futuros com embed do Notion
 * 
 * COMO USAR:
 * 1. Abra sua página no Notion
 * 2. Clique em "Compartilhar" → "Publicar na web"
 * 3. Copie o link público
 * 4. Substitua o NOTION_URL abaixo
 */

const NOTION_URL = ''; // ← COLE O LINK PÚBLICO DO NOTION AQUI

export default function NotionPlans() {
  return (
    <section className="section notion-section" id="notion-plans">
      <div className="notion-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">📋</span>
            <h2 className="text-gradient">Nossos Planos</h2>
            <p className="section-subtitle text-script">O futuro que estamos construindo juntos</p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Dream cards */}
        <div className="dreams-grid">
          <ScrollReveal delay={0.1}>
            <div className="dream-card glass-card">
              <span className="dream-icon">💍</span>
              <h3 className="dream-title">Namorar & Casar</h3>
              <p className="template-text dream-desc">
                [TEMPLATE] Escreva sobre o sonho de construir essa relação, 
                do namoro ao casamento dos sonhos...
              </p>
              <div className="dream-status">
                <span className="dream-status-dot dream-status-active" />
                <span>Em progresso</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="dream-card glass-card">
              <span className="dream-icon">🏠</span>
              <h3 className="dream-title">Nossa Casa</h3>
              <p className="template-text dream-desc">
                [TEMPLATE] Fale sobre a casa dos sonhos que vocês vão construir, 
                talvez ela mesma projete como arquiteta...
              </p>
              <div className="dream-status">
                <span className="dream-status-dot dream-status-planned" />
                <span>Planejado</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="dream-card glass-card">
              <span className="dream-icon">👶</span>
              <h3 className="dream-title">Oliver</h3>
              <p className="template-text dream-desc">
                [TEMPLATE] O pequeno Oliver que vai completar essa família, 
                com os tios Scooby e Tobias...
              </p>
              <div className="dream-status">
                <span className="dream-status-dot dream-status-dream" />
                <span>Sonho</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="dream-card glass-card">
              <span className="dream-icon">💰</span>
              <h3 className="dream-title">Sucesso & Felicidade</h3>
              <p className="template-text dream-desc">
                [TEMPLATE] Juntos seremos um casal bem sucedido, com muito 
                dinheiro e felizes. Esse é nosso destino!
              </p>
              <div className="dream-status">
                <span className="dream-status-dot dream-status-active" />
                <span>Construindo</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Notion Embed */}
        <ScrollReveal delay={0.3}>
          <div className="notion-embed-area glass-card">
            <div className="notion-embed-header">
              <div className="notion-logo">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.088 2.15c-.42-.326-.98-.7-2.055-.607L3.01 2.71c-.467.047-.56.28-.374.466l1.823 1.032zm.793 3.172v13.85c0 .746.373 1.026 1.213.98l14.523-.84c.84-.046.933-.56.933-1.166V6.354c0-.607-.233-.933-.746-.886l-15.177.886c-.56.047-.746.327-.746.886v.14zm14.337.42c.093.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.513-1.633.513-.746 0-.933-.233-1.493-.933l-4.572-7.191v6.957l1.446.327s0 .84-1.166.84l-3.219.187c-.093-.187 0-.653.327-.747l.84-.186V8.924L7.91 8.784c-.093-.42.14-1.026.793-1.073l3.453-.233 4.759 7.284V8.41l-1.213-.14c-.093-.513.28-.886.746-.933l3.453-.233.467.696z" />
                </svg>
                <span>Notion</span>
              </div>
              <p className="notion-embed-note template-text">
                [Cole o link público do Notion no arquivo NotionPlans.jsx]
              </p>
            </div>

            {NOTION_URL ? (
              <div className="notion-iframe-wrapper">
                <iframe
                  src={NOTION_URL}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Notion Plans"
                  className="notion-iframe"
                />
              </div>
            ) : (
              <div className="notion-placeholder">
                <span className="notion-placeholder-icon">📝</span>
                <h4>Notion não configurado</h4>
                <p>
                  Publique sua página do Notion e cole o link em
                  <code> NotionPlans.jsx</code>
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
