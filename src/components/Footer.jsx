import { motion } from 'framer-motion';
import './Footer.css';

/**
 * Footer — Rodapé do app
 */
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <motion.div
          className="footer-heart"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💕
        </motion.div>
        
        <p className="footer-message text-script">
          Feito com muito amor para a mulher da minha vida
        </p>
        
        <p className="footer-date">
          Setembro de 2026
        </p>
      </div>
    </footer>
  );
}
