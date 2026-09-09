import ScrollReveal from './ScrollReveal';
import './LoveLetter.css';

/**
 * LoveLetter — Seção da carta de amor com template editável
 */
export default function LoveLetter() {
  return (
    <section className="section letter-section" id="love-letter">
      <div className="letter-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">💕</span>
            <h2 className="text-gradient">Minha Carta Para Você</h2>
            <p className="section-subtitle text-script">De todo o meu coração</p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="letter-envelope">
            <div className="letter-paper">
              {/* Cabeçalho da carta */}
              <div className="letter-header">
                <span className="letter-date text-script">Setembro de 2026</span>
                <h3 className="letter-dear text-script">Minha Isabela,</h3>
              </div>

              {/* Parágrafos template */}
              <div className="letter-body">
                <p className="template-text letter-paragraph">
                  [ESCREVA AQUI] Primeiro parágrafo — Comece contando como ela é especial 
                  e o que ela representa na sua vida...
                </p>

                <p className="template-text letter-paragraph">
                  [ESCREVA AQUI] Segundo parágrafo — Fale sobre o dia que se conheceram 
                  (26 de junho) e como tudo mudou a partir dali...
                </p>

                <p className="template-text letter-paragraph">
                  [ESCREVA AQUI] Terceiro parágrafo — Mencione a futura arquiteta mais 
                  talentosa que você conhece, e como admira a dedicação dela...
                </p>

                <p className="template-text letter-paragraph">
                  [ESCREVA AQUI] Quarto parágrafo — Fale sobre Scooby e Tobias, os 
                  salsichinhas que fazem parte dessa história de amor...
                </p>

                <p className="template-text letter-paragraph">
                  [ESCREVA AQUI] Quinto parágrafo — Mencione o Marcílio e a Marizete, 
                  a família incrível que ela tem e que você é grato por conhecer...
                </p>

                <p className="template-text letter-paragraph">
                  [ESCREVA AQUI] Sexto parágrafo — Fale sobre o futuro juntos, o casamento, 
                  a casa dos sonhos e o pequeno Oliver que vai completar essa família...
                </p>

                <p className="template-text letter-paragraph">
                  [ESCREVA AQUI] Parágrafo final — Encerre com uma declaração de amor 
                  e deseje feliz aniversário de 26 anos...
                </p>
              </div>

              {/* Assinatura */}
              <div className="letter-signature">
                <p className="text-script">Com todo meu amor,</p>
                <p className="letter-sign text-script">
                  [SEU NOME] ❤️
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
