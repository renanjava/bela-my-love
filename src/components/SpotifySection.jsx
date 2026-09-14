import ScrollReveal from './ScrollReveal';
import './SpotifySection.css';

/**
 * SpotifySection — Embed da playlist do casal via Spotify
 * 
 * COMO USAR:
 * 1. Vá no Spotify e abra sua playlist
 * 2. Clique em "Compartilhar" → "Copiar link"
 * 3. Substitua o PLAYLIST_URL abaixo pelo link copiado
 * 
 * O formato do link deve ser algo como:
 * https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
 */

const PLAYLIST_URL = 'https://open.spotify.com/playlist/37pxoq5fxyYdoZ5D94Zs88?si=fa3e3106de7d463e&pt=2e9fec778e61bac68f71f13d4d041267';

export default function SpotifySection() {
  // Extract playlist ID from URL
  const getEmbedUrl = (url) => {
    try {
      const parts = url.split('/');
      const playlistIndex = parts.indexOf('playlist');
      if (playlistIndex !== -1 && parts[playlistIndex + 1]) {
        const id = parts[playlistIndex + 1].split('?')[0];
        return `https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`;
      }
    } catch {
      // fallback
    }
    return `https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0`;
  };

  return (
    <section className="section spotify-section" id="spotify">
      <div className="spotify-glow" />

      <div className="section-content">
        <ScrollReveal>
          <div className="section-title">
            <span className="section-icon">🎵</span>
            <h2 className="text-gradient">Nossa Playlist</h2>
            <p className="section-subtitle text-script">
              As músicas que contam nossa história
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="spotify-card glass-card">
            <div className="spotify-header">
              <div className="spotify-logo">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span>Spotify</span>
              </div>
            </div>

            <div className="spotify-embed-wrapper">
              <iframe
                src={getEmbedUrl(PLAYLIST_URL)}
                width="100%"
                height="380"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
                className="spotify-iframe"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="spotify-footer-text text-script">
            "Cada música é um capítulo da nossa história" 🎶
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
