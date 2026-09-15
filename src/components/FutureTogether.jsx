import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import './FutureTogether.css';

const PLAYLIST_ID = '37pxoq5fxyYdoZ5D94Zs88';

export default function FutureTogether() {
  const videoStageRef = useRef(null);
  const [isVideoStageInView, setIsVideoStageInView] = useState(false);

  useEffect(() => {
    const stage = videoStageRef.current;
    if (!stage) return undefined;

    const checkVideoVisibility = () => {
      const { top, bottom } = stage.getBoundingClientRect();
      if (top < window.innerHeight * 0.85 && bottom > window.innerHeight * 0.15) {
        setIsVideoStageInView(true);
        window.removeEventListener('scroll', checkVideoVisibility);
      }
    };

    checkVideoVisibility();
    window.addEventListener('scroll', checkVideoVisibility, { passive: true });
    return () => window.removeEventListener('scroll', checkVideoVisibility);
  }, []);

  useEffect(() => {
    if (!isVideoStageInView) return undefined;

    const timeoutId = window.setTimeout(() => setIsVideoStageInView(false), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [isVideoStageInView]);

  return (
    <section className="section future-section" id="future">
      <div className="future-glow-1" />
      <div className="future-glow-2" />

      <div className="section-content">
        <ScrollReveal delay={0.3}>
          <div className="onepiece-video-card glass-card">
            <div className="onepiece-map-heading">
              <div className="onepiece-route-art" aria-hidden="true">
                <span className="route-flag" />
                <span className="route-ship" />
                <span className="route-wave" />
              </div>
              <div>
                <span className="onepiece-map-kicker">Rota do nosso tesouro</span>
                <span className="onepiece-map-caption">Uma história, uma tripulação, um destino</span>
              </div>
            </div>

            <div ref={videoStageRef} className="future-video-stage">
              <video
                className="future-video"
                src="/futuretogether/video.mp4"
                poster="/futuretogether/thumbnail.jpg"
                controls
                playsInline
                preload="metadata"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            <motion.h3
              className="text-script onepiece-video-title"
              animate={{ opacity: [0.82, 1, 0.82], scale: [1, 1.015, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              "Eu vou ser o Rei dos Piratas!", mas o meu One Piece eu já encontrei: você.
            </motion.h3>

            <div className="onepiece-playlist">
              <div className="onepiece-playlist-heading">
                <span className="playlist-vinyl" aria-hidden="true" />
                <div>
                  <span className="onepiece-playlist-kicker">Trilha da nossa aventura</span>
                  <span className="onepiece-playlist-title">Nossa Playlist</span>
                </div>
              </div>
              <div className="onepiece-playlist-embed">
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
                  title="Playlist da nossa aventura"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <svg className="future-video-trail" viewBox="0 0 360 620" aria-hidden="true">
          <motion.path
            d="M 38 560 C 8 480, 18 390, 54 330 C 90 270, 36 210, 76 142 C 112 82, 188 58, 246 78 C 290 92, 312 72, 322 32"
            className="future-video-trail-contrast"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isVideoStageInView ? { pathLength: 1, opacity: 0.95 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 38 560 C 8 480, 18 390, 54 330 C 90 270, 36 210, 76 142 C 112 82, 188 58, 246 78 C 290 92, 312 72, 322 32"
            className="future-video-trail-dots"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isVideoStageInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          />
          <motion.g
            className="future-video-trail-x"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={isVideoStageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }}
            transition={{ delay: 2.4, duration: 0.6, type: 'spring', stiffness: 260 }}
          >
            <circle cx="322" cy="32" r="24" />
            <path d="M 309 20 L 335 46 M 335 20 L 309 46" />
          </motion.g>
        </svg>
      </div>
    </section>
  );
}
